import{icon as d,extractInfo as w,stringifyAttrs as h}from"@mdit/plugin-icon";import{isString as l,isArray as p,Logger as v,isLinkHttp as I,isLinkAbsolute as k,endsWith as u,getModulePath as a,ensureEndingSlash as x,addViteSsrNoExternal as A,addCustomElement as L}from"@vuepress/helper";import{path as S,getDirname as T}from"vuepress/utils";const j=t=>/\/iconify-icon(?:[@/]|$)/.test(t),m=t=>/^(?:https:)?\/\/kit\.fontawesome\.com\//.test(t)||/\/fontawesome(?:[@/-]|$)/.test(t),y=t=>/^(?:https:)?\/\/at\.alicdn\.com\/t\//.test(t),P=t=>p(t)?t.every(m):t==="fontawesome"||t==="fontawesome-with-brands"||m(t),C=t=>p(t)?t.every(y):y(t),E=t=>l(t)&&(j(t)||t==="iconify"),F=({assets:t="iconify"})=>P(t)?"fontawesome":C(t)?"iconfont":E(t)?"iconify":"unknown",g="@vuepress/plugin-icon",b=new v(g),$=t=>`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/${t}.min.js`,f=t=>({type:"script",content:`useScriptTag(
  \`${t}\`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);
`}),V=t=>{if(l(t)){if(t==="fontawesome")return["solid","regular","fontawesome"].map($).map(f);if(t==="fontawesome-with-brands")return["all"].map($).map(f);if(t==="iconify")return[{type:"script",content:"useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);"}];const e=I(t)||k(t)?t:`//${t}`;if(u(e,".css"))return[{type:"style",content:`useStyleTag(\`\\
@import url("${e}");
\`);`}];if(u(e,".js"))return m(e)?[f(e)]:[{type:"script",content:`          useScriptTag(\`${e}\`);          `}];b.error(`Can not recognize icon link: "${t}"`)}return[]},z=(t="iconify")=>(p(t)?t:[t]).map(V).flat(),N="iconfont icon-",G=(t,e)=>e??(t==="iconfont"?N:""),M=T(import.meta.url),D=x(S.resolve(M,"../client")),O=(t,{assets:e,prefix:o,component:n="VPIcon"},s)=>{const r=z(e),c=G(s,o);return t.writeTemp("icon/config.js",`import { hasGlobalComponent } from "${a("@vuepress/helper/client",import.meta)}";
${r.some(({type:i})=>i==="script")?`import { useScriptTag } from "${a("@vueuse/core",import.meta)}";
`:""}${r.some(({type:i})=>i==="style")?`import { useStyleTag } from "${a("@vueuse/core",import.meta)}";
`:""}import { h } from "vue";
import { VPIcon } from "${D}index.js"

export default {
  enhance: ({ app }) => {
${n?`    if(!hasGlobalComponent("${n}")) {
      app.component(
        "${n}",
        (props) =>
          h(VPIcon, {
            type: "${s}",
            prefix: "${c}",
            ...props,
          })
      )
    }
`:""}  },
  setup: () => {
${r.map(({content:i})=>`    ${i}`).join(`
`)}
  },
}
`)},_=(t={})=>{const e=t.type??F(t);return{name:g,extendsBundlerOptions:(o,n)=>{A(o,n,"@vuepress/helper"),e==="iconify"&&L(o,n,"iconify-icon")},extendsMarkdown:o=>{(t.markdown??!0)&&o.use(d,{render:n=>{const{attrs:s,content:r,color:c,size:i}=w({content:n});return c&&!s.color&&(s.color=c),i&&!s.size&&(s.size=i),`<${t.component??"VPIcon"} icon="${r}"${h(s)} />`}})},clientConfigFile:o=>O(o,t,e)}};export{_ as iconPlugin};
//# sourceMappingURL=index.js.map
