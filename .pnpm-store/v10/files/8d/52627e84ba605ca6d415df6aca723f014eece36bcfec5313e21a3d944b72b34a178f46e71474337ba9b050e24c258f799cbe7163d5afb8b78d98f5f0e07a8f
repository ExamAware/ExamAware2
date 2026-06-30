import{figure as a}from"@mdit/plugin-figure";import{imgLazyload as s}from"@mdit/plugin-img-lazyload";import{imgMark as n}from"@mdit/plugin-img-mark";import{imgSize as g,legacyImgSize as p,obsidianImgSize as l}from"@mdit/plugin-img-size";import{isPlainObject as u}from"vuepress/shared";import{getModulePath as t}from"@vuepress/helper";const r="@vuepress/plugin-markdown-image",c=async(i,{figure:e,mark:m})=>{let o="";return e&&(o+=`import "${t(`${r}/figure.css`,import.meta)}"
`),m&&(o+=`import "${t(`${r}/mark.css`,import.meta)}"
`),i.writeTemp("markdown-image/client.js",`${o}
`)},f=i=>({name:r,extendsMarkdown:e=>{const{mark:m}=i;i.figure&&e.use(a),i.lazyload&&e.use(s),i.size&&e.use(g),i.legacySize&&e.use(p),i.obsidianSize&&e.use(l),m&&e.use(n,u(m)?m:{})},clientConfigFile:e=>c(e,i)});export{f as markdownImagePlugin};
//# sourceMappingURL=index.js.map
