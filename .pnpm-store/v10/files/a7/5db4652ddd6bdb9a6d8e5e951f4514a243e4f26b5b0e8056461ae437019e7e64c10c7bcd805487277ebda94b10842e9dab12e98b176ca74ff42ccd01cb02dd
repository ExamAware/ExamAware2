import { onMounted } from "vue";
const DEFAULT_SNOWFLAKE_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='4' d='M24 4v40M6.725 14l34.64 20M6.72 33.977l34.56-19.954M12 10l3 9-9 2m0 6 9 2-3 9m24-28-3 9 9 2m0 6-9 2 3 9M18 7l6 6 6-6M18 41l6-6 6 6'/%3E%3C/svg%3E";
class Snowflake {
    image;
    context;
    x;
    y;
    size;
    speed;
    constructor(image, context, { maxSize, minSize, speed }) {
        this.image = image;
        this.context = context;
        this.x = Math.random() * context.canvas.width;
        this.y = Math.random() * context.canvas.height;
        this.size = Math.random() * (maxSize - minSize) + minSize;
        this.speed = speed;
    }
    move() {
        this.y += this.speed;
        if (this.y > this.context.canvas.height) {
            this.y = 0 - this.size;
            this.x = Math.random() * this.context.canvas.width;
        }
    }
    draw() {
        this.context.drawImage(this.image, this.x, this.y, this.size, this.size);
    }
}
export const setupSnowFall = ({ speed = 1, image = DEFAULT_SNOWFLAKE_IMAGE, count = 10, minSize = 5, maxSize = 10, } = {}) => {
    onMounted(() => {
        const canvas = document.createElement("canvas");
        document.body.append(canvas);
        canvas.style.position = "fixed";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.pointerEvents = "none";
        canvas.style.zIndex = "9999";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const context = canvas.getContext("2d");
        const snowflakeImage = new Image();
        snowflakeImage.addEventListener("load", () => {
            const snowflakes = [];
            for (let i = 0; i < count; i++)
                snowflakes.push(new Snowflake(snowflakeImage, context, { maxSize, minSize, speed }));
            const drawSnowflakes = () => {
                context.clearRect(0, 0, canvas.width, canvas.height);
                for (const snowflake of snowflakes) {
                    snowflake.move();
                    snowflake.draw();
                }
                requestAnimationFrame(drawSnowflakes);
            };
            drawSnowflakes();
        });
        snowflakeImage.src = image;
    });
};
//# sourceMappingURL=snowFall.js.map