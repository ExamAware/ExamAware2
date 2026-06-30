import{katex as k}from"@mdit/plugin-katex-slim";import{createMathjaxInstance as y,mathjax as $}from"@mdit/plugin-mathjax-slim";import{ensureEndingSlash as g,Logger as w,getModulePath as f,isModuleAvailable as d,addCustomElement as M}from"@vuepress/helper";import{path as v,getDirname as C,logger as x,colors as c}from"vuepress/utils";const E=import.meta.dirname||C(import.meta.url),h=g(v.resolve(E,"../client")),u="@vuepress/plugin-markdown-math";new w(u);const F=async(a,n,i)=>{let o="";return n==="katex"?o+=`import "${f("katex/dist/katex.min.css",import.meta)}";
import "${h}styles/katex.css";
${i.copy?`import { useKatexCopy } from "${h}composables/useKatexCopy.js";

export default {
  setup: () => {
    useKatexCopy();
  }
};
`:""}`:o+=`import './mathjax.css';
`,a.writeTemp("markdown-math/config.js",o)},I=`mjx-container {
  overflow: auto hidden;
}

mjx-assistive-mml {
  display: none;
}
`,L=async(a,n)=>{await a.writeTemp("markdown-math/mathjax.css",`${n.outputStyle()}
${I}`)},P=({type:a,...n}={})=>{const i=d("@mathjax/src",import.meta),o=d("katex",import.meta),r=a==="katex"&&o?"katex":a==="mathjax"&&i||i?"mathjax":o?"katex":null;if(!r||a&&r!==a){const e={katex:"katex",mathjax:"@mathjax/src"};return x.error(r?`type is "${a}", but "${e[a]}" is not installed`:"No math renderer found, please install @mathjax/src or katex"),{name:u}}let s;return{name:u,extendsBundlerOptions:(e,t)=>{r==="mathjax"&&M(e,t,/^mjx-/)},extendsMarkdown:async e=>{r==="mathjax"?(s=await y({...n,transformer:t=>t.replace(/^<mjx-container/,"<mjx-container v-pre")}),e.use($,s),e.use(t=>{const p=t.render.bind(t);t.render=(l,m)=>{const j=p(l,m);return s?.reset(),j}})):(n.mhchem&&await import("@mdit/plugin-katex-slim/mhchem"),e.use(k,{logger:(t,p,l,{filePathRelative:m})=>{t!=="newLineInDisplayMode"&&(t==="unicodeTextInMathMode"?x.warn(`Found unicode character ${l.text} inside tex${m?` in ${c.cyan(m)}`:""}. You should use ${c.magenta(`\\text{${l.text}}`)}`):x.warn(`${p}.${m?`
Found in ${c.cyan(m)}`:""}`))},...n,transformer:t=>t.replace(/^(<[a-z]+ )/g,"$1v-pre ")}))},onPrepared:async e=>{r==="mathjax"&&(await L(e,s),e.env.isBuild&&(s=null))},clientConfigFile:e=>F(e,r,n)}};export{P as markdownMathPlugin};
//# sourceMappingURL=index.js.map
