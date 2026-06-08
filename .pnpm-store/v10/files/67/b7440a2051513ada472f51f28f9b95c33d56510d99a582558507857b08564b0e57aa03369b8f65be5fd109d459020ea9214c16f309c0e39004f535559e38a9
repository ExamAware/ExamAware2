import{Logger as G,isFunction as C,isString as T,removeLeadingSlash as D,fromEntries as J,entries as z,getPageExcerpt as W,addViteSsrNoExternal as q}from"@vuepress/helper";import{watch as K}from"chokidar";import{createPage as U,preparePageComponent as Q,preparePageChunk as X,prepareRoutes as Y}from"vuepress/core";import{sanitizeFileName as Z,colors as u}from"vuepress/utils";const j="@vuepress/plugin-blog",l=new G(j),L=t=>encodeURI(t.split("/").map(Z).join("/")),H=(t,e,p,o,d)=>{const w=p.map(({key:n,getter:_,sorter:v=()=>-1,path:b="/:key/",layout:E="Layout",frontmatter:I=()=>({}),itemPath:m="/:key/:name/",itemLayout:k="Layout",itemFrontmatter:M=()=>({})})=>{d&&l.info(`Generating ${u.cyan(n)} category.
`);const O=C(m)?m:T(m)?g=>m.replace(/:key/g,o(n)).replace(/:name/g,o(g)):()=>null,c={},$=[];for(const g in t){if(b){const r=`${g}${D(b.replace(/:key/g,o(n)))}`;$.push({path:r,frontmatter:{...I(g),blog:{type:"category",key:n},layout:E}}),c[g]={path:L(r),map:{}}}else c[g]={path:"",map:{}};const{map:a}=c[g],h={};for(const r of t[g]){const s=_(r);for(const i of s){if(!(i in a)){const y=O(i);if(y){const N=`${g}${D(y)}`;$.push({path:N,frontmatter:{...M(i,g),blog:{type:"category",name:i,key:n},layout:k}}),a[i]={path:L(N),indexes:[]}}else a[i]={path:"",indexes:[]};h[i]=[]}h[i].push(r)}}for(const r in h)a[r].indexes=e.addItems(h[r].sort(v).map(({path:s})=>s));if(d){let r=`${n} category in locale ${g}:
`;for(const s in a){const{path:i,indexes:y}=a[s];r+=`${s}: found ${y.length} items${i?` in path: ${i}`:""}
`}l.info(r)}}return{key:n,categoryMap:c,pageOptions:$}});return{categoriesMap:J(w.map(({key:n,categoryMap:_})=>[n,_])),pageOptions:w.map(({pageOptions:n})=>n).flat()}},ee=t=>t.filter(({key:e,getter:p},o)=>!T(e)||!e?(l.error(`Invalid ${u.magenta("key")} option ${u.cyan(e)} in ${u.cyan(`category[${o}]`)}`),!1):C(p)?!0:(l.error(`Invalid ${u.magenta("getter")} option in "${u.cyan(`category[${o}]`)}", it should be a function!`),!1)),te=`
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });
`,B=async(t,e)=>{await t.writeTemp("blog/category.js",`export const categoriesMap = JSON.parse(${JSON.stringify(JSON.stringify(e))});
${t.env.isDev?te:""}
`)},V=(t,e)=>{const p={"/":[],...Object.fromEntries(Object.keys(t.siteData.locales).map(o=>[o,[]]))};return t.pages.filter(o=>e(o)&&o.path.slice(o.pathLocale.length-1)!=="/404.html").forEach(o=>{p[o.pathLocale].push(o)}),p};class ae{store;constructor(){this.store=[]}addItem(e){const p=this.store.indexOf(e);return p===-1?(this.store.push(e),this.store.length-1):p}addItems(e){return e.map(p=>this.addItem(p))}clearItem(e){const p=this.store.indexOf(e);p!==-1&&(this.store[p]="")}toJSON(){return JSON.stringify(this.store)}}const oe=async(t,e)=>{await t.writeTemp("blog/store.js",`export const store = JSON.parse(${JSON.stringify(e.toJSON())});
`)},F=(t,e,p,o,d=!1)=>{const w=p.map(({key:n,sorter:_=()=>-1,filter:v=()=>!0,path:b="/:key/",layout:E="Layout",frontmatter:I=()=>({})})=>{d&&l.info(`Generating ${u.cyan(n)} type.
`);const m=[],k={};return z(t).forEach(([M,O])=>{const c=b?`${M}${D(b.replace(/:key/g,o(n)))}`:"",$=e.addItems(O.filter(v).sort(_).map(({path:g})=>g));c&&m.push({path:c,frontmatter:{...I(M),blog:{type:"type",key:n},layout:E}}),d&&l.info(`${n} type in locale ${M}: found ${$.length} items
`),k[M]={path:L(c),indexes:$}}),{key:n,typeMap:k,pageOptions:m}});return{typesMap:J(w.map(({key:n,typeMap:_})=>[n,_])),pageOptions:w.map(({pageOptions:n})=>n).flat()}},ne=t=>t.filter((e,p)=>{const{key:o}=e;return!T(o)||!o?(l.error(`Invalid ${u.magenta("key")} option ${u.cyan(o)} in ${u.cyan(`type[${p}]`)}`),!1):!0}),pe=`
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });
`,A=async(t,e)=>{await t.writeTemp("blog/type.js",`export const typesMap = JSON.parse(${JSON.stringify(JSON.stringify(e))});
${t.env.isDev?pe:""}
`)},re=t=>e=>{e.env.isDebug&&l.info("Options:",t);const{getInfo:p=()=>({}),filter:o=a=>!!a.filePathRelative&&!a.frontmatter.home,metaScope:d="_blog",excerpt:w=!0,excerptSeparator:n="<!-- more -->",excerptLength:_=300,excerptFilter:v=o,isCustomElement:b=()=>!1,category:E=[],type:I=[],slugify:m=a=>a.replace(/[ _]/g,"-").replace(/[:?*|\\/<>]/g,"").toLowerCase()}=t,k=ee(E),M=ne(I),O=new ae;let c=[],$={},g={};return{name:j,define:()=>({__BLOG_META_SCOPE__:d}),extendsBundlerOptions:a=>{q(a,e,"@vuepress/helper")},extendsPage:a=>{w&&v(a)&&!a.data.excerpt&&(a.data.excerpt=W(e,a,{isCustomElement:b,separator:n,length:_})),o(a)&&(a.routeMeta={...d===""?p(a):{[d]:p(a)},...a.routeMeta})},onInitialized:async()=>{const a=V(e,o),h=H(a,O,k,m,e.env.isDebug),r=F(a,O,M,m,e.env.isDebug);await Promise.all([...h.pageOptions,...r.pageOptions].map(async s=>{if(e.pages.findIndex(i=>i.path===s.path)!==-1){l.warn("Overriding existing page:",s.path);const i=e.pages.findIndex(y=>y.path===s.path);e.pages.splice(i,1,await U(e,s))}e.pages.push(await U(e,s))})),c=[...h.pageOptions,...r.pageOptions].map(s=>s.path),$=h.categoriesMap,g=r.typesMap},onPrepared:async()=>{await oe(e,O),await B(e,$),await A(e,g),e.env.isDebug&&l.info("temp file generated")},onWatched:(a,h)=>{if("hotReload"in t?t.hotReload:e.env.isDebug){const r=K("pages",{cwd:e.dir.temp(),ignoreInitial:!0,ignored:(i,y)=>!!(y?.isFile()&&!i.endsWith(".js"))}),s=async()=>{const i=V(e,o),y=H(i,O,k,m,e.env.isDebug),N=F(i,O,M,m,e.env.isDebug),P=[...y.pageOptions,...N.pageOptions];await B(e,y.categoriesMap),await A(e,N.typesMap);const R=P.filter(f=>!c.includes(f.path)),S=c.filter(f=>P.every(x=>x.path!==f));R.length&&(e.env.isDebug&&l.info(`Adding new pages: ${R.map(({path:f})=>f).join(", ")}`),await Promise.all(R.map(async f=>{const x=await U(e,f);await Q(e,x),await X(e,x),e.pages.push(x)}))),S.length&&(e.env.isDebug&&l.info(`Removing following pages: ${S.join(", ")}`),S.forEach(f=>{e.pages.splice(e.pages.findIndex(({path:x})=>x===f),1)})),(S.length||R.length)&&await Y(e),c=P.map(f=>f.path),e.env.isDebug&&l.info("temp file updated")};r.on("add",()=>{s()}),r.on("change",()=>{s()}),r.on("unlink",()=>{s()}),h.push(r)}}}};export{re as blogPlugin};
//# sourceMappingURL=index.js.map
