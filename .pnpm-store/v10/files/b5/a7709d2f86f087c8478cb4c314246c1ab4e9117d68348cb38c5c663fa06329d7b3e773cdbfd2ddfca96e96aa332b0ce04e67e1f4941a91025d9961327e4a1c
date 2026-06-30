function withInstall(comp, alias) {
  var componentPlugin = comp;
  componentPlugin.install = (app, name) => {
    app.component(alias || name || componentPlugin.name, comp);
  };
  return componentPlugin;
}

export default withInstall;
//# sourceMappingURL=with-install.js.map
