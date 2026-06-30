'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function withInstall(comp, alias) {
  var componentPlugin = comp;
  componentPlugin.install = (app, name) => {
    app.component(alias || name || componentPlugin.name, comp);
  };
  return componentPlugin;
}

exports.default = withInstall;
//# sourceMappingURL=with-install.js.map
