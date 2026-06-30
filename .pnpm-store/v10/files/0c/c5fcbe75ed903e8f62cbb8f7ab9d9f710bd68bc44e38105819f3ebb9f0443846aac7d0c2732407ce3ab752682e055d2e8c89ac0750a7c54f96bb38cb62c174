import { useScrollLock } from "@vueuse/core";
import { Transition, defineComponent, h, onMounted, onUnmounted, shallowRef, watch, } from "vue";
import { onContentUpdated } from "vuepress/client";
import AppearanceSettings from "@theme-hope/components/appearance/AppearanceSettings";
import NavScreenLinks from "@theme-hope/components/navbar/NavScreenLinks";
import { useWindowSize } from "@theme-hope/composables/useWindowSize";
import "@vuepress/helper/transition/fade-in-down.css";
import "../../styles/navbar/nav-screen.scss";
export default defineComponent({
    name: "NavScreen",
    props: {
        /**
         * Whether to show the screen
         *
         * 是否显示
         */
        show: Boolean,
    },
    slots: Object,
    setup(props, { slots }) {
        const { isMobile } = useWindowSize();
        const body = shallowRef();
        const isLocked = useScrollLock(body);
        onContentUpdated(() => {
            isLocked.value = false;
        });
        watch(isMobile, (value) => {
            if (!value && props.show)
                isLocked.value = false;
        });
        onMounted(() => {
            body.value = document.body;
        });
        onUnmounted(() => {
            isLocked.value = false;
        });
        return () => h(Transition, {
            name: "fade-in-down",
            onEnter: () => {
                isLocked.value = true;
            },
            onAfterLeave: () => {
                isLocked.value = false;
            },
        }, () => props.show
            ? h("div", { id: "nav-screen", class: "vp-nav-screen" }, h("div", { class: "vp-nav-screen-container" }, [
                slots.navScreenTop?.(),
                h(NavScreenLinks),
                h("div", { class: "vp-appearance-wrapper" }, h(AppearanceSettings)),
                slots.navScreenBottom?.(),
            ]))
            : null);
    },
});
//# sourceMappingURL=NavScreen.js.map