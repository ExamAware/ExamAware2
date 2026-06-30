#!/usr/bin/env node
import{removeEndingSlash as v,removeLeadingSlash as h}from"@vuepress/helper";import{createCommand as C}from"commander";import{resolveCliAppConfig as w,resolveUserConfigPath as y,resolveUserConfigConventionalPath as $,loadUserConfig as S,resolveAppConfig as b,transformUserConfigToPlugin as A}from"vuepress/cli";import{createBuildApp as P}from"vuepress/core";import{fs as t,logger as n,path as a}from"vuepress/utils";var j="2.0.0-rc.121",x={version:j};const E=e=>`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="robots" content="noindex">
  <meta http-equiv="refresh" content="0; url=${e}">
  <link rel="canonical" href="${e}">
  <title>Redirecting...</title>
  <script>
    const anchor = window.location.hash.slice(1);
    window.location.replace(\`${e}\${anchor? \`#\${anchor}\`: ""}\`);
  <\/script>
</head>
<body>
  <p>Redirecting...</p>
</body>
</html>
`,i=C("vp-redirect");i.summary("Generate redirect site").description("Generate redirect site for current VuePress project").option("--hostname <hostname>","Hostname to redirect to (E.g.: https://new.example.com/)","/").option("-c, --config [config]","Set path to config file").option("--cache [cache]","Set the directory of the cache files").option("--temp [temp]","Set the directory of the temporary files").option("--clean-cache","Clean the cache files before generation").option("--clean-temp","Clean the temporary files before generation").argument("<source>","Source directory of VuePress project").argument("[output]","Output folder (default: .vuepress/redirect relative to source folder)").action(async(e,s,r)=>{process.env.NODE_ENV??="production",t.existsSync(e)||i.error(`Source directory ${e} does not exist!`);const c=w(e,{}),u=r.config?y(r.config):$(c.source),{userConfig:p}=await S(u),l=b({defaultAppConfig:{cache:r.cache,temp:r.temp},cliAppConfig:c,userConfig:p});if(l===null)return;const o=P(l);o.use(A(p,c.source)),r.cleanTemp===!0&&(n.info("Cleaning temp..."),await t.remove(o.dir.temp())),r.cleanCache===!0&&(n.info("Cleaning cache..."),await t.remove(o.dir.cache()));const m=s?a.join(process.cwd(),s):a.join(o.dir.source(),".vuepress","redirect");await t.emptyDir(m),n.info("Initializing VuePress and preparing data..."),await o.init(),n.info("Generating redirect pages..."),await Promise.all(o.pages.map(f=>{const g=`${v(r.hostname)}${o.siteData.base}${h(f.path)}`,d=a.join(m,h(f.path.replace(/\/$/,"/index.html")));return t.ensureDir(a.dirname(d)).then(()=>t.writeFile(d,E(g)))}))}),i.version(x.version),i.showHelpAfterError("add --help for additional information"),await i.parseAsync();
//# sourceMappingURL=index.js.map
