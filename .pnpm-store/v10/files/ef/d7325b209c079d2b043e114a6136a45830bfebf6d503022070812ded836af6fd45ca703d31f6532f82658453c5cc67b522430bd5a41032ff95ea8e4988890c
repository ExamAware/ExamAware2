import{path as s,getDirname as _}from"vuepress/utils";import{Logger as N}from"@vuepress/helper";import g from"node:fs/promises";import{watch as w}from"chokidar";const l="@vuepress/plugin-notice",d=new N(l),u=(n=[])=>n.map(({key:e,contentType:o,contentFile:t,...i})=>"match"in i?{...i,match:i.match.source,noticeKey:e}:{...i,noticeKey:e}).sort((e,o)=>"match"in e?"match"in o?o.match.localeCompare(e.match):-1:"match"in o?1:(o.path||"").localeCompare(e.path||"")),T=`
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateNoticeOptions) {
    __VUE_HMR_RUNTIME__.updateNoticeOptions(NOTICE_OPTIONS)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ NOTICE_OPTIONS }) => {
    __VUE_HMR_RUNTIME__.updateNoticeOptions(NOTICE_OPTIONS)
  })
}
`,h=async n=>{try{return await g.readFile(n,"utf-8")}catch{return""}},c=new Map,y=async(n,e)=>{let{contentType:o="html",contentFile:t,content:i="",...a}=e;if(t){if(t=s.resolve(t),c.has(t))return c.get(t);o=t.endsWith(".md")?"markdown":"html",i=await h(t)}o==="markdown"&&(i=n.markdown.render(i,{filePath:t}));const r={content:i,...a};return t&&c.set(t,r),r},f=async(n,e=[])=>{const o=[];for(const a of e)o.push(await y(n,a));const t=u(o);let i=`export const NOTICE_OPTIONS = JSON.parse(${JSON.stringify(JSON.stringify(t))})
`;n.env.isDev&&(i+=T),await n.writeTemp("internal/noticeOptions.js",i)},I=(n,e)=>{const o=e.map(({contentFile:a})=>a).filter(Boolean),t=w(o,{ignoreInitial:!0}),i=async a=>{const r=s.resolve(a),m=c.get(r);if(m){const O=r.endsWith(".md")?"markdown":"html",p=await h(r);m.content=O==="markdown"?n.markdown.render(p,{filePath:r}):p}await f(n,e)};return t.on("change",a=>{i(a)}),t},E=import.meta.dirname||_(import.meta.url),k=n=>e=>(e.env.isDebug&&d.info("Options",n),{name:l,onPrepared:async()=>{await f(e,n.config)},onWatched:(o,t)=>{t.push(I(e,n.config))},clientConfigFile:s.resolve(E,"../client/config.js")});export{k as noticePlugin};
//# sourceMappingURL=index.js.map
