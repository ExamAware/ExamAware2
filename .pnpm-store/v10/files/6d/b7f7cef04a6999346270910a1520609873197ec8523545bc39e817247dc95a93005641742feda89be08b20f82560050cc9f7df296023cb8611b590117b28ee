import { defineComponent, h, onMounted, ref } from "vue";
import PasswordModal from "@theme-hope/components/encrypt/PasswordModal";
import { usePathEncrypt } from "@theme-hope/composables/encrypt/usePathEncrypt";
export default defineComponent({
    name: "LocalEncrypt",
    slots: Object,
    setup(_props, { slots }) {
        const { status, validate } = usePathEncrypt();
        const isMounted = ref(false);
        onMounted(() => {
            isMounted.value = true;
        });
        return () => {
            const { isEncrypted, isLocked, hint } = status.value;
            return isEncrypted
                ? isMounted.value
                    ? isLocked
                        ? h(PasswordModal, {
                            showTitle: true,
                            full: true,
                            hint,
                            onVerify: validate,
                        })
                        : slots.default()
                    : null
                : slots.default();
        };
    },
});
//# sourceMappingURL=LocalEncrypt.js.map