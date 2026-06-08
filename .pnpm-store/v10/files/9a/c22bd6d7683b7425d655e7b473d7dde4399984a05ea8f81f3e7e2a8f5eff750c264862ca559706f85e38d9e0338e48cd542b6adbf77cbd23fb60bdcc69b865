import{tab as l}from"@mdit/plugin-tab";import{ensureEndingSlash as T}from"vuepress/shared";import{path as v,getDirname as g}from"vuepress/utils";const b=t=>JSON.stringify(t).replace(/'/g,"&#39"),$=t=>{l(t,{name:"code-tabs",openRender:({active:e,data:n},s,r)=>{const{meta:a}=s[r],i=n.map(({title:o})=>t.renderInline(o)),d=n.map((o,p)=>{const{id:m=i[p]}=o;return{id:m}});return`<CodeTabs :data='${b(d)}'${e===-1?"":` :active="${e}"`}${a.id?` tab-id="${a.id}"`:""}>
${i.map((o,p)=>`<template #title${p}="{ value, isActive }">${o}</template>
`).join("")}`},closeRender:()=>`</CodeTabs>
`,tabOpenRender:({index:e},n,s)=>{let r=!1;for(let a=s;a<n.length;a++){const{block:i,type:d}=n[a];if(i){if(d==="code-tabs_tab_close")break;if((d==="fence"||d==="import_code")&&!r){r=!0;continue}n[a].type="code_tab_empty",n[a].hidden=!0}}return`<template #tab${e}="{ value, isActive }">
`},tabCloseRender:()=>`</template>
`})},{url:C}=import.meta,y=g(C),c=T(v.resolve(y,"../client")),R=(t,{codeTabs:e,tabs:n})=>{const s=new Set,r=new Set;return e&&(s.add(`import { CodeTabs } from "${c}components/CodeTabs.js";`),r.add('app.component("CodeTabs", CodeTabs);')),n&&(s.add(`import { Tabs } from "${c}components/Tabs.js";`),r.add('app.component("Tabs", Tabs);')),t.writeTemp("markdown-tab/config.js",`${Array.from(s.values()).join(`
`)}
import "${c}styles/vars.css";

export default {
  enhance: ({ app }) => {
${Array.from(r.values()).map(a=>`    ${a}`).join(`
`)}
  },
};
`)},u=t=>{l(t,{name:"tabs",openRender:({active:e,data:n},s,r)=>{const{meta:a}=s[r],i=n.map(({title:o})=>t.renderInline(o)),d=n.map((o,p)=>{const{id:m=i[p]}=o;return{id:m}});return`<Tabs :data='${b(d)}'${e===-1?"":` :active="${e}"`}${a.id?` tab-id="${a.id}"`:""}>
${i.map((o,p)=>`<template #title${p}="{ value, isActive }">${o}</template>
`).join("")}`},closeRender:()=>`</Tabs>
`,tabOpenRender:({index:e})=>`<template #tab${e}="{ value, isActive }">
`,tabCloseRender:()=>`</template>
`})},f="@vuepress/plugin-markdown-tab",j=t=>!t.codeTabs&&!t.tabs?{name:f}:{name:f,extendsMarkdown:e=>{t.codeTabs&&e.use($),t.tabs&&e.use(u)},clientConfigFile:e=>R(e,t)};export{$ as codeTabs,j as markdownTabPlugin,u as tabs};
//# sourceMappingURL=index.js.map
