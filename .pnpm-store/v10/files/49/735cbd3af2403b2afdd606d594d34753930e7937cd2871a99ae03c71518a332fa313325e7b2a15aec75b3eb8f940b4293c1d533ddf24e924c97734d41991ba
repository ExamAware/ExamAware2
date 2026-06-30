import{align as n}from"@mdit/plugin-align";import{attrs as u}from"@mdit/plugin-attrs";import{mark as a}from"@mdit/plugin-mark";import{spoiler as f}from"@mdit/plugin-spoiler";import{stylize as g}from"@mdit/plugin-stylize";import{sub as c}from"@mdit/plugin-sub";import{sup as d}from"@mdit/plugin-sup";import{isPlainObject as k}from"vuepress/shared";import{getModulePath as y}from"@vuepress/helper";const w=(e,{spoiler:r})=>e.writeTemp("markdown-stylize/config.js",`${r?`import "${y("@mdit/plugin-spoiler/style",import.meta)}"
`:""}

`),z=({attrs:e,align:r,custom:t,mark:m,spoiler:i,sup:s,sub:l})=>({name:"@vuepress/plugin-markdown-stylize",extendsMarkdown:o=>{t&&o.use(g,{config:t,localConfigGetter:p=>p.frontmatter?.stylize||null}),e&&o.use(u,k(e)?e:{}),r&&o.use(n),m&&o.use(a),i&&o.use(f),l&&o.use(c),s&&o.use(d)},clientConfigFile:o=>w(o,{spoiler:i})});export{z as markdownStylizePlugin};
//# sourceMappingURL=index.js.map
