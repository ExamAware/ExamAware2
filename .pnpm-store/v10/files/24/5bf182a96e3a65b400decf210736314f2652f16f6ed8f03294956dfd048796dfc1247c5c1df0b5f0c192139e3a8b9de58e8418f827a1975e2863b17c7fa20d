import { Transition, TransitionGroup, defineComponent, h } from "vue";
const unsetStyle = (el) => {
    el.style.transform = "translateY(0)";
    el.style.opacity = "1";
};
export default defineComponent({
    name: "DropTransition",
    props: {
        /**
         * Transition delay
         */
        delay: { type: Number, default: 0 },
        /**
         * Transition duration
         */
        duration: { type: Number, default: 0.25 },
        /**
         * Whether to use TransitionGroup
         */
        group: Boolean,
        /**
         * Whether to use appear
         */
        appear: Boolean,
    },
    slots: Object,
    setup(props, { slots }) {
        const setStyle = (el) => {
            el.style.transition =
                `transform ${props.duration}s ease-in-out ${props.delay}s, opacity ${props.duration}s ease-in-out ${props.delay}s`;
            el.style.transform = "translateY(-20px)";
            el.style.opacity = "0";
        };
        return () => {
            const attrs = {
                name: "drop",
                appear: props.appear,
                onAppear: setStyle,
                onAfterAppear: unsetStyle,
                onEnter: setStyle,
                onAfterEnter: unsetStyle,
                onBeforeLeave: setStyle,
            };
            return props.group
                ? h(TransitionGroup, attrs, slots.default)
                : h(Transition, attrs, slots.default);
        };
    },
});
//# sourceMappingURL=DropTransition.js.map