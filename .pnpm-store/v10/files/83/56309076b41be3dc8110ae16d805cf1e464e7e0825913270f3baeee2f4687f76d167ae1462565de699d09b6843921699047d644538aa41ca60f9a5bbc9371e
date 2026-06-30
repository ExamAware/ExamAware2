import type { App, Slot } from "vue";
import type { ContextMenuInstance } from "./ContextMenuDefine";
import type { MenuOptions } from "./ContextMenuDefine";
import { closeContextMenu } from "./ContextMenuMutex";
import { transformMenuPosition } from "./ContextMenuUtils";
declare const _default: {
    /**
     * For Vue install
     * @param app
     */
    install(app: App<Element>): void;
    /**
     * Show a ContextMenu in page, same as `this.$contextmenu`
     *
     * For example:
     *
     * ```ts
     * onContextMenu(e : MouseEvent) {
     *   //prevent the browser's default menu
     *   e.preventDefault();
     *   //show your menu
     *   ContextMenu.showContextMenu({
     *     x: e.x,
     *     y: e.y,
     *     items: [
     *       {
     *         label: "A menu item",
     *         onClick: () => {
     *           alert("You click a menu item");
     *         }
     *       },
     *       {
     *         label: "A submenu",
     *         children: [
     *           { label: "Item1" },
     *           { label: "Item2" },
     *           { label: "Item3" },
     *         ]
     *       },
     *     ]
     *   });
     * }
     * ```
     *
     * You can pass customSlots to custom rendering this menu.
     *
     * For example, custom rendering #itemRender and #separatorRender:
     * ```ts
     *   ContextMenu.showContextMenu({
     *     ...
     *   } as MenuOptions, {
     *     //Use slot in function mode
     *     itemRender: ({ disabled, label, icon, showRightArrow, onClick, onMouseEnter }) => [  h('div', {
     *       class: 'my-menu-item'+(disabled?' disabled':''),
     *       onMouseenter: onMouseEnter,
     *       onClick: onClick,
     *     }, [
     *       icon ? h('img', { src: icon }) : h('div', { class: 'icon-place-holder' }),
     *       h('span', label),
     *       showRightArrow ? h('span', { class: 'right-arraw' }, '>>') : h('div'),
     *     ]) ],
     *     separatorRender: () => [ h('div', { class: 'my-menu-sperator' }) ]
     *   })
     * ```
     *
     * @param options The options of ContextMenu
     * @param customSlots You can provide some custom slots to customize the rendering style of the menu. These slots are the same as the slots of component ContextMenu.
     * @returns Menu instance
     */
    showContextMenu(options: MenuOptions, customSlots?: Record<string, Slot>): ContextMenuInstance;
    /**
     * Get if there is a menu open now.
     */
    isAnyContextMenuOpen(): boolean;
    /**
     * Close the currently open menu
     */
    closeContextMenu: typeof closeContextMenu;
    transformMenuPosition: typeof transformMenuPosition;
};
export default _default;
