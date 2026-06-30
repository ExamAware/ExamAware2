/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

function withInstall(comp, alias, directive) {
  var componentPlugin = comp;
  componentPlugin.install = function (app, name) {
    app.component(alias || name || componentPlugin.name, comp);
    directive && app.directive(directive.name, directive.comp);
  };
  return componentPlugin;
}

exports.withInstall = withInstall;
//# sourceMappingURL=dep-d62a674d.js.map
