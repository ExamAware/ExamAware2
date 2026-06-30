import{footnote as p}from"@mdit/plugin-footnote";import{tasklist as g}from"@mdit/plugin-tasklist";import{isPlainObject as d}from"vuepress/shared";import{Logger as u,ensureEndingSlash as k}from"@vuepress/helper";import{getDirname as v,path as $}from"vuepress/utils";import{load as y}from"js-yaml";import{container as P}from"@mdit/plugin-container";const h=import.meta.dirname||v(import.meta.url),l="@vuepress/plugin-markdown-ext",w=new u(l),a=k($.resolve(h,"../client")),x=e=>JSON.stringify(e).replace(/'/g,"&#39"),E=e=>(o,n,i,{filePathRelative:r})=>{const m=o[n],{content:s}=m;let t=null;if(s.trim().startsWith("{"))try{t=JSON.parse(s)}catch{}else try{t=y(s)}catch{}return t?`<${e} v-bind='${x(t)}' />`:(w.error(`Invalid ${e} config${r?` found in ${r}`:""}:
${s}
`),"")},c=e=>{const{fence:o}=e.renderer.rules;e.renderer.rules.fence=(...n)=>{const[i,r]=n,{info:m}=i[r],[s,t]=m.split(" ",2);return s==="component"?E(t)(...n):o(...n)}},f=e=>{P(e,{name:"v-pre",openRender:()=>`<div v-pre>
`,closeRender:()=>`</div>
`})},N=(e,{gfm:o,footnote:n,tasklist:i})=>e.writeTemp("markdown-ext/config.js",`    ${n??o?`import "${a}styles/footnote.css"
`:""}    ${i??o?`import "${a}styles/tasklist.css"
`:""}`),b=({gfm:e,breaks:o,linkify:n,footnote:i,tasklist:r,component:m,vPre:s})=>({name:l,extendsMarkdown:t=>{(o??e)&&(t.options.breaks=!0),(n??e)&&(t.options.linkify=!0),(i??e)&&t.use(p),(r??e)&&t.use(g,[d(r)?r:{}]),m&&t.use(c),s&&t.use(f)},clientConfigFile:t=>N(t,{gfm:e,footnote:i,tasklist:r})});export{c as component,b as markdownExtPlugin,f as vPre};
//# sourceMappingURL=index.js.map
