import { useEventListener } from "@vueuse/core";
import { onMounted, ref } from "vue";
import cssVariables from "../styles/variables.module.scss";
const { mobileBreakPoint, pcBreakPoint } = cssVariables;
const getPixels = (length) => length.endsWith("px") ? Number(length.slice(0, -2)) : null;
export const useWindowSize = () => {
    const isMobile = ref(false);
    const isPC = ref(false);
    const windowSizeHandler = () => {
        isMobile.value = window.innerWidth <= (getPixels(mobileBreakPoint) ?? 719);
        isPC.value = window.innerWidth >= (getPixels(pcBreakPoint) ?? 1440);
    };
    useEventListener("resize", windowSizeHandler, false);
    useEventListener("orientationchange", windowSizeHandler, false);
    onMounted(() => {
        windowSizeHandler();
    });
    return {
        isMobile,
        isPC,
    };
};
//# sourceMappingURL=useWindowSize.js.map