import { computed, defineComponent, h, nextTick, ref } from "vue";
import PageTitle from "@theme-hope/components/base/PageTitle";
import LockIcon from "@theme-hope/components/encrypt/LockIcon";
import { useData } from "@theme-hope/composables/useData";
import "../../styles/encrypt/password-modal.scss";
export default defineComponent({
    name: "PasswordModal",
    props: {
        /**
         * Password hint
         */
        hint: String,
        /**
         * Whether is fullscreen
         *
         * 是否是全屏
         */
        full: Boolean,
        /**
         * Whether to show title
         *
         * 是否显示标题
         */
        showTitle: Boolean,
    },
    emits: ["verify"],
    setup(props, { emit }) {
        const { frontmatter, themeLocale } = useData();
        const password = ref("");
        const hasTried = ref(false);
        const remember = ref(false);
        const encryptLocale = computed(() => themeLocale.value.encryptLocales);
        let hintHandler = null;
        const verify = () => {
            // Clear previous handler
            if (hintHandler)
                clearTimeout(hintHandler);
            hasTried.value = false;
            emit("verify", password.value, remember.value);
            void nextTick().then(() => {
                hasTried.value = true;
                hintHandler = setTimeout(() => {
                    hasTried.value = false;
                }, 1000);
            });
        };
        return () => h("div", {
            class: [
                "vp-decrypt-layer",
                { expand: props.full || frontmatter.value.home },
            ],
        }, [
            props.showTitle ? h(PageTitle) : null,
            h("div", { class: "vp-decrypt-modal" }, [
                h("div", { class: ["vp-decrypt-hint", { tried: hasTried.value }] }, hasTried.value
                    ? encryptLocale.value.errorHint
                    : h(LockIcon, { "aria-label": encryptLocale.value.iconLabel })),
                props.hint
                    ? h("div", { class: "vp-decrypt-hint" }, props.hint)
                    : null,
                h("div", { class: "vp-decrypt-input" }, [
                    h("input", {
                        type: "password",
                        value: password.value,
                        placeholder: encryptLocale.value.placeholder,
                        onInput: ({ target }) => {
                            password.value = target.value;
                        },
                        onKeydown: ({ key }) => {
                            if (key === "Enter")
                                verify();
                        },
                    }),
                ]),
                h("div", { class: "vp-remember-password" }, [
                    h("input", {
                        id: "remember-password",
                        type: "checkbox",
                        value: remember.value,
                        onChange: () => {
                            remember.value = !remember.value;
                        },
                    }),
                    h("label", { for: "remember-password" }, encryptLocale.value.remember),
                ]),
                h("button", {
                    type: "button",
                    class: "vp-decrypt-submit",
                    onClick: () => {
                        verify();
                    },
                }, "OK"),
            ]),
        ]);
    },
});
//# sourceMappingURL=PasswordModal.js.map