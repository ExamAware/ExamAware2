import{getFullLocaleConfig as c}from"@vuepress/helper";import{path as d,getDirname as m}from"vuepress/utils";import{escapeHtml as s}from"@mdit/helper";import{demo as p}from"@mdit/plugin-demo";const u=[[["en","en-US"],{toggle:"Toggle code"}],[["zh","zh-CN","zh-Hans"],{toggle:"切换代码"}],[["zh-TW","zh-Hant"],{toggle:"切換程式碼"}],[["de","de-DE"],{toggle:"Code umschalten"}],[["de-AT"],{toggle:"Code umschalten"}],[["vi","vi-VN"],{toggle:"Chuyển đổi mã"}],[["uk"],{toggle:"Перемкнути код"}],[["fr","fr-FR"],{toggle:"Basculer le code"}],[["es","es-ES"],{toggle:"Alternar código"}],[["it","it-IT"],{toggle:"Attiva/disattiva codice"}],[["ja","ja-JP"],{toggle:"コードを切り替え"}],[["ko","ko-KR"],{toggle:"코드 전환"}],[["tr","tr-TR"],{toggle:"Kodu değiştir"}],[["pt","pt-PT"],{toggle:"Alternar código"}],[["ru","ru-RU"],{toggle:"Переключить код"}]],g=t=>{const o={openRender:(e,n)=>`<VPPreview title="${s(e[n].info)}">
`,codeRender:(e,n,i,a,l)=>`<template #code>
${l.rules.fence(e,n,i,a,l)}
</template>
`,contentOpenRender:()=>`<template #content>
`,contentCloseRender:()=>`</template>
`,closeRender:()=>`</VPPreview>
`};t.use(p,{name:"preview",...o})},r="@vuepress/plugin-markdown-preview",f=m(import.meta.url),v=(t={})=>o=>({name:r,define:()=>({__PREVIEW_LOCALES__:c({app:o,name:r,default:u,config:t.locales})}),extendsMarkdown:e=>{e.use(g)},clientConfigFile:d.resolve(f,"../client/config.js")});export{v as markdownPreviewPlugin,g as preview};
//# sourceMappingURL=index.js.map
