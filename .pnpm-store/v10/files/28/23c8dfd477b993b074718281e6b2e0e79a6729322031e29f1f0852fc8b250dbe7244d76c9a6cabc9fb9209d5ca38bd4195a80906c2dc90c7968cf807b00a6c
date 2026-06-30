import { h } from 'vue';

var camel2Kebab = camelString => {
  var covertArr = ["strokeLinecap", "fillRule", "clipRule", "strokeWidth"];
  if (covertArr.includes(camelString)) {
    return camelString.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
  }
  return camelString;
};
var renderNode = (node, props) => {
  var processedAttrs = {};
  if (node.attrs) {
    for (var [key, value] of Object.entries(node.attrs)) {
      if (typeof value === "string" && value.startsWith("props.")) {
        var propName = value.split(".")[1];
        processedAttrs[camel2Kebab(key)] = props[propName];
      } else {
        processedAttrs[camel2Kebab(key)] = value;
      }
    }
  }
  if (node.tag === "svg") {
    processedAttrs.class = props.class;
    processedAttrs.style = props.style;
    processedAttrs.onClick = props.onClick;
  }
  var children = node.children ? node.children.map(child => renderNode(child, props)) : [];
  return h(node.tag, processedAttrs, children);
};

export default renderNode;
//# sourceMappingURL=render-fn.js.map
