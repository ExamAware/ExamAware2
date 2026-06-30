import{Logger as L,getBundlerName as M,mergeViteConfig as N,isFunction as C,isString as w,addViteConfig as B,chainWebpack as R}from"@vuepress/helper";import{watch as D}from"chokidar";import{path as S,fs as V,getDirname as x}from"vuepress/utils";const W=import.meta.dirname||x(import.meta.url),k=S.resolve(W,"../../styles/empty.scss"),P="@vuepress/plugin-sass-palette",v=new L(P),m=a=>V.pathExistsSync(a)?a:k,i=a=>a?`${a}-`:"",_=(a,e,s)=>{const l=M(e),r=`${i(s)}config`,h=`@use "@sass-palette/${i(s)}config";`,$=new RegExp(`@use\\s+(["'])@sass-palette\\/${i(s)}config\\1;`),g=`${i(s)}palette`,d=`@use "@sass-palette/${i(s)}palette";`,u=new RegExp(`@use\\s+(["'])@sass-palette\\/${i(s)}palette\\1;`);if(l==="vite"){const p=a,n=p.viteOptions?.css?.preprocessorOptions?.scss?.additionalData;p.viteOptions=N(p.viteOptions??{},{css:{preprocessorOptions:{scss:{charset:!1,additionalData:async(o,c)=>{let t=o;if(C(n)){const f=await n(o,c);t=w(f)?f:f.content}else w(n)&&(t=`${n}${o}`);return t.includes(r)&&!t.match($)&&(t=`${h}
${t}`),t.includes(g)&&!t.match(u)&&(t=`${d}
${t}`),t}}}}})}else if(l==="webpack"){const p=a;p.scss??={};const{additionalData:n}=p.scss;p.scss.additionalData=(o,c)=>{let t=w(n)?`${n}${o}`:C(n)?n(o,c):o;return t.includes(r)&&!t.match($)&&(t=`${h}
${t}`),t.includes(g)&&!t.match(u)&&(t=`${d}
${t}`),t}}},z=(a,e)=>a.writeTemp(`sass-palette/load-${e||"default"}.js`,`import "@sass-palette/${i(e)}inject";
`),O=(a,e,s,l)=>a.writeTemp(`sass-palette/${i(e)}config.scss`,`@import "file:///${m(s)}";
@import "file:///${m(l)}";
`),G=(a,e)=>a.writeTemp(`sass-palette/${i(e)}inject.scss`,`@use "sass:meta";
@use "@sass-palette/helper";
@use "@sass-palette/${i(e)}palette";

$palette-variables: meta.module-variables("${i(e)}palette");
${a.env.isDebug?`
@debug "${e} config variables: #{meta.inspect(meta.module-variables("${i(e)}config"))}";
@debug "${e} palette variables: #{meta.inspect($palette-variables)}";
`:""}

@include helper.inject($palette-variables);
`),E=(a,{id:e,defaultPalette:s,generator:l,userPalette:r})=>a.writeTemp(`sass-palette/${i(e)}palette.scss`,`${s?`@import "file:///${m(s)}";`:""}
@import "file:///${m(r)}";
@import "file:///${m(l)}";
`),T=(a,e,s)=>s?a.writeTemp(`sass-palette/${i(e)}style.scss`,`@forward "file:///${m(s)}";
`):Promise.resolve(null),F=import.meta.dirname||x(import.meta.url),A=a=>e=>{e.env.isDebug&&v.info("Options:",a);const{id:s="",config:l=`.vuepress/styles/${i(s)}config.scss`,defaultConfig:r=S.resolve(F,"../../styles/default/config.scss"),palette:h=`.vuepress/styles/${i(s)}palette.scss`,defaultPalette:$,generator:g=k,style:d=""}=a,u=e.dir.source(l),p=e.dir.source(h),n=d?e.dir.source(d):null;return{name:P,multiple:!0,id:s,alias:{"@sass-palette/helper":S.resolve(F,"../../styles/helper.scss"),[`@sass-palette/${i(s)}config`]:e.dir.temp(`sass-palette/${i(s)}config.scss`),[`@sass-palette/${i(s)}inject`]:e.dir.temp(`sass-palette/${i(s)}inject.scss`),[`@sass-palette/${i(s)}palette`]:e.dir.temp(`sass-palette/${i(s)}palette.scss`),...d?{[`@sass-palette/${i(s)}style`]:e.dir.temp(`sass-palette/${i(s)}style.scss`)}:{}},extendsBundlerOptions:o=>{B(o,e,{css:{preprocessorOptions:{sass:{silenceDeprecations:["import"]},scss:{silenceDeprecations:["import"]}}}}),R(o,e,c=>{c.module.rule("scss").use("sass-loader").tap(t=>({...t,sassOptions:{...t.sassOptions,silenceDeprecations:["import",...t.sassOptions?.silenceDeprecations??[]]}}))}),_(o,e,s)},onInitialized:()=>Promise.all([O(e,s,r,u),G(e,s),E(e,{id:s,defaultPalette:$,generator:g,userPalette:p}),T(e,s,n)]).then(()=>{e.env.isDebug&&v.info(`Style file for ${s} generated`)}),onWatched:(o,c)=>{const t=D(u,{cwd:e.dir.source(),ignoreInitial:!0}),f=()=>O(e,s,r,u).then(()=>{e.env.isDebug&&v.info(`Style file for ${s} updated`)});t.on("add",()=>{f()}),t.on("unlink",()=>{f()}),c.push(t);const y=D(p,{cwd:e.dir.source(),ignoreInitial:!0}),j=()=>Promise.all([O(e,s,r,u),E(e,{id:s,defaultPalette:$,generator:g,userPalette:p})]).then(()=>{e.env.isDebug&&v.info(`Style file for ${s} updated`)});if(y.on("add",()=>{j()}),y.on("unlink",()=>{j()}),c.push(y),n){const b=D(n,{cwd:e.dir.source(),ignoreInitial:!0}),I=()=>T(e,s,n).then(()=>{e.env.isDebug&&v.info(`Style file for ${s} updated`)});b.on("add",()=>{I()}),b.on("unlink",()=>{I()}),c.push(b)}},clientConfigFile:()=>z(e,s)}},U=(a,e)=>{const{plugins:s}=a.pluginApi,l=s.filter(r=>r.name===P).findIndex(r=>r.id===e);l!==-1&&s.splice(l,1)},Y=(a,e)=>{const{plugins:s}=a.pluginApi;s.filter(l=>l.name===P).every(l=>l.id!==e.id)&&a.use(A(e))};export{U as removePalettePlugin,A as sassPalettePlugin,Y as useSassPalettePlugin};
//# sourceMappingURL=index.js.map
