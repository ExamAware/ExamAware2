import { h, resolveComponent } from "vue";
import { AutoLink as _AutoLink } from "vuepress/client";
const AutoLink = ({ config, iconSizing = "both" }, { emit, slots }) => {
    const { icon } = config;
    return h(_AutoLink, {
        config,
        onFocusout: () => {
            emit("focusout");
        },
    }, {
        ...slots,
        before: slots.before ??
            (icon
                ? () => h(resolveComponent("VPIcon"), {
                    icon,
                    sizing: iconSizing,
                })
                : null),
    });
};
AutoLink.displayName = "AutoLink";
export default AutoLink;
//# sourceMappingURL=AutoLink.js.map