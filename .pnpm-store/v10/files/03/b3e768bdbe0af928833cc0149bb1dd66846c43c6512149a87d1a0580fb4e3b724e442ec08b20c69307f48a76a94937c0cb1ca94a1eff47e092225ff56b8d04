/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

function withInstall(comp, alias, directive) {
  var componentPlugin = comp;
  componentPlugin.install = function (app, name) {
    app.component(alias || name || componentPlugin.name, comp);
    directive && app.directive(directive.name, directive.comp);
  };
  return componentPlugin;
}

export { withInstall as w };
//# sourceMappingURL=dep-664b8b22.js.map
