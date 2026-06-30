var isServer = typeof window === "undefined";
function checkScriptAndLoad(url, className) {
  if (isServer) {
    return;
  }
  if (!document || !url || typeof url !== "string") return;
  if (document.querySelectorAll(".".concat(className, "[src=\"").concat(url, "\"]")).length > 0) {
    return;
  }
  var svg = document.createElement("script");
  svg.setAttribute("class", className);
  svg.setAttribute("src", url);
  document.body.appendChild(svg);
}
function checkLinkAndLoad(url, className) {
  if (isServer) {
    return;
  }
  if (!document || !url || typeof url !== "string") return;
  if (document.querySelectorAll(".".concat(className, "[href=\"").concat(url, "\"]")).length > 0) {
    return;
  }
  var link = document.createElement("link");
  link.setAttribute("class", className);
  link.setAttribute("href", url);
  link.setAttribute("rel", "stylesheet");
  document.head.appendChild(link);
}

export { checkLinkAndLoad, checkScriptAndLoad };
//# sourceMappingURL=check-url-and-load.js.map
