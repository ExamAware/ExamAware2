<!--
  Adapted from Vue Bits DotField, Copyright (c) 2025 David Haz,
  licensed under the MIT License + Commons Clause.
  Source: https://github.com/DavidHDev/vue-bits
  License: https://github.com/DavidHDev/vue-bits/blob/main/LICENSE.md
-->
<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const TWO_PI = Math.PI * 2;

type Dot = {
  ax: number;
  ay: number;
  sx: number;
  sy: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
};

const props = withDefaults(
  defineProps<{
    dotRadius?: number;
    dotSpacing?: number;
    cursorRadius?: number;
    cursorForce?: number;
    bulgeOnly?: boolean;
    bulgeStrength?: number;
    glowRadius?: number;
    sparkle?: boolean;
    waveAmplitude?: number;
    gradientFrom?: string;
    gradientTo?: string;
    glowColor?: string;
    className?: string;
  }>(),
  {
    dotRadius: 1.5,
    dotSpacing: 14,
    cursorRadius: 500,
    cursorForce: 0.1,
    bulgeOnly: true,
    bulgeStrength: 67,
    glowRadius: 160,
    sparkle: false,
    waveAmplitude: 0,
    gradientFrom: 'rgba(124, 255, 103, 0.35)',
    gradientTo: 'rgba(160, 255, 188, 0.25)',
    glowColor: '#14110E',
    className: ''
  }
);

const root = ref<HTMLDivElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);
const glowEl = ref<SVGCircleElement | null>(null);

const glowId = `dot-field-glow-${Math.random().toString(36).slice(2, 9)}`;

let dots: Dot[] = [];

const mouse = {
  x: -9999,
  y: -9999,
  prevX: -9999,
  prevY: -9999,
  speed: 0
};

let size = {
  w: 0,
  h: 0,
  offsetX: 0,
  offsetY: 0
};

let glowOpacity = 0;
let engagement = 0;
let raf = 0;
let resizeTimer: ReturnType<typeof setTimeout> | undefined;
let speedInterval: ReturnType<typeof setInterval> | undefined;
let resizeHandler: (() => void) | undefined;
let mouseMoveHandler: ((event: MouseEvent) => void) | undefined;
let frameCount = 0;

function buildDots(w: number, h: number) {
  const step = props.dotRadius + props.dotSpacing;
  const cols = Math.floor(w / step);
  const rows = Math.floor(h / step);
  const padX = (w % step) / 2;
  const padY = (h % step) / 2;
  const nextDots: Dot[] = new Array(rows * cols);
  let index = 0;

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < cols; column++) {
      const ax = padX + column * step + step / 2;
      const ay = padY + row * step + step / 2;

      nextDots[index++] = {
        ax,
        ay,
        sx: ax,
        sy: ay,
        vx: 0,
        vy: 0,
        x: ax,
        y: ay
      };
    }
  }

  dots = nextDots;
}

function updateMouseSpeed() {
  const dx = mouse.prevX - mouse.x;
  const dy = mouse.prevY - mouse.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  mouse.speed += (distance - mouse.speed) * 0.5;

  if (mouse.speed < 0.001) {
    mouse.speed = 0;
  }

  mouse.prevX = mouse.x;
  mouse.prevY = mouse.y;
}

function setupCanvas() {
  if (!root.value || !canvas.value) return;

  const canvasContext = canvas.value.getContext('2d', { alpha: true });
  if (!canvasContext) return;
  const context: CanvasRenderingContext2D = canvasContext;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  function doResize() {
    if (!root.value || !canvas.value) return;

    const rect = root.value.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    canvas.value.width = width * dpr;
    canvas.value.height = height * dpr;
    canvas.value.style.width = `${width}px`;
    canvas.value.style.height = `${height}px`;

    context.setTransform(dpr, 0, 0, dpr, 0, 0);

    size = {
      w: width,
      h: height,
      offsetX: rect.left + window.scrollX,
      offsetY: rect.top + window.scrollY
    };

    buildDots(width, height);
  }

  resizeHandler = () => {
    if (resizeTimer !== undefined) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(doResize, 100);
  };

  mouseMoveHandler = (event: MouseEvent) => {
    mouse.x = event.pageX - size.offsetX;
    mouse.y = event.pageY - size.offsetY;
  };

  function tick() {
    frameCount++;

    const { w, h } = size;
    const time = frameCount * 0.02;
    const targetEngagement = Math.min(mouse.speed / 5, 1);

    engagement += (targetEngagement - engagement) * 0.06;
    if (engagement < 0.001) engagement = 0;

    glowOpacity += (engagement - glowOpacity) * 0.08;

    if (glowEl.value) {
      glowEl.value.setAttribute('cx', String(mouse.x));
      glowEl.value.setAttribute('cy', String(mouse.y));
      glowEl.value.style.opacity = String(glowOpacity);
    }

    context.clearRect(0, 0, w, h);

    const gradient = context.createLinearGradient(0, 0, w, h);
    gradient.addColorStop(0, props.gradientFrom);
    gradient.addColorStop(1, props.gradientTo);
    context.fillStyle = gradient;

    const cursorRadiusSquared = props.cursorRadius * props.cursorRadius;
    const radius = props.dotRadius / 2;

    context.beginPath();

    for (let index = 0; index < dots.length; index++) {
      const dot = dots[index];
      const dx = mouse.x - dot.ax;
      const dy = mouse.y - dot.ay;
      const distanceSquared = dx * dx + dy * dy;

      if (distanceSquared < cursorRadiusSquared && engagement > 0.01) {
        const distance = Math.sqrt(distanceSquared);
        const angle = Math.atan2(dy, dx);

        if (props.bulgeOnly) {
          const falloff = 1 - distance / props.cursorRadius;
          const push = falloff * falloff * props.bulgeStrength * engagement;

          dot.sx += (dot.ax - Math.cos(angle) * push - dot.sx) * 0.15;
          dot.sy += (dot.ay - Math.sin(angle) * push - dot.sy) * 0.15;
        } else {
          const safeDistance = Math.max(distance, 0.001);
          const move = (500 / safeDistance) * (mouse.speed * props.cursorForce);

          dot.vx += Math.cos(angle) * -move;
          dot.vy += Math.sin(angle) * -move;
        }
      } else if (props.bulgeOnly) {
        dot.sx += (dot.ax - dot.sx) * 0.1;
        dot.sy += (dot.ay - dot.sy) * 0.1;
      }

      if (!props.bulgeOnly) {
        dot.vx *= 0.9;
        dot.vy *= 0.9;
        dot.x = dot.ax + dot.vx;
        dot.y = dot.ay + dot.vy;
        dot.sx += (dot.x - dot.sx) * 0.1;
        dot.sy += (dot.y - dot.sy) * 0.1;
      }

      let drawX = dot.sx;
      let drawY = dot.sy;

      if (props.waveAmplitude > 0) {
        drawY += Math.sin(dot.ax * 0.03 + time) * props.waveAmplitude;
        drawX += Math.cos(dot.ay * 0.03 + time * 0.7) * props.waveAmplitude * 0.5;
      }

      if (props.sparkle) {
        const hash = ((index * 2654435761) ^ (frameCount >> 3)) >>> 0;

        if (hash % 100 < 3) {
          context.moveTo(drawX + radius * 1.8, drawY);
          context.arc(drawX, drawY, radius * 1.8, 0, TWO_PI);
        } else {
          context.moveTo(drawX + radius, drawY);
          context.arc(drawX, drawY, radius, 0, TWO_PI);
        }
      } else {
        context.moveTo(drawX + radius, drawY);
        context.arc(drawX, drawY, radius, 0, TWO_PI);
      }
    }

    context.fill();
    raf = requestAnimationFrame(tick);
  }

  doResize();

  window.addEventListener('resize', resizeHandler);
  window.addEventListener('mousemove', mouseMoveHandler, { passive: true });

  speedInterval = setInterval(updateMouseSpeed, 20);
  raf = requestAnimationFrame(tick);
}

function cleanup() {
  if (raf) cancelAnimationFrame(raf);
  if (speedInterval !== undefined) clearInterval(speedInterval);
  if (resizeTimer !== undefined) clearTimeout(resizeTimer);
  if (resizeHandler) window.removeEventListener('resize', resizeHandler);
  if (mouseMoveHandler) window.removeEventListener('mousemove', mouseMoveHandler);

  raf = 0;
  speedInterval = undefined;
  resizeTimer = undefined;
  resizeHandler = undefined;
  mouseMoveHandler = undefined;
}

watch(
  () => [props.dotRadius, props.dotSpacing],
  async () => {
    await nextTick();

    if (size.w > 0 && size.h > 0) {
      buildDots(size.w, size.h);
    }
  }
);

onMounted(setupCanvas);
onBeforeUnmount(cleanup);
</script>

<template>
  <div ref="root" class="dot-field" :class="className">
    <canvas ref="canvas" class="dot-field__canvas" />

    <svg class="dot-field__glow" aria-hidden="true">
      <defs>
        <radialGradient :id="glowId">
          <stop offset="0%" :stop-color="glowColor" />
          <stop offset="100%" stop-color="transparent" />
        </radialGradient>
      </defs>

      <circle
        ref="glowEl"
        cx="-9999"
        cy="-9999"
        :r="glowRadius"
        :fill="`url(#${glowId})`"
        style="opacity: 0; will-change: opacity"
      />
    </svg>
  </div>
</template>

<style scoped>
.dot-field {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.dot-field__canvas,
.dot-field__glow {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.dot-field__glow {
  pointer-events: none;
}
</style>
