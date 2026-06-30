import{Logger as y,removeEndingSlash as s,entries as h,removeLeadingSlash as u,isLinkHttp as k,isLinkAbsolute as f,deepAssign as P,fromEntries as g,isPlainObject as $,isArray as w,keys as R,isFunction as z,getFullLocaleConfig as S,getModulePath as D,addViteSsrNoExternal as E}from"@vuepress/helper";import{fs as r,path as p,colors as C,getDirname as _}from"vuepress/utils";import{createPage as F}from"vuepress/core";const j=async a=>{a.pages.every(({path:e})=>e!=="/")&&a.pages.push(await F(a,{path:"/",frontmatter:{title:"Home"},content:`Redirecting to the correct locale...
`}))},b="@vuepress/plugin-redirect",m=new y(b),A=({config:a,defaultBehavior:e,defaultLocale:c,localeFallback:n},i,t)=>`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="robots" content="noindex">
  <title>Redirecting...</title>
  <script>
    const { hash, origin, pathname } = window.location;
    const routePath = pathname.slice(${t.length});
    const { languages } = window.navigator;
    const anchor = hash.slice(1);

    const config = ${JSON.stringify(a)};
    const availableLocales = ${JSON.stringify(i)};
    const defaultLocale = ${i.includes(c)?JSON.stringify(c):"availableLocales.pop()"};
    const defaultBehavior = ${JSON.stringify(e)}

    let matchedLocalePath = null;

    // get matched locale
    findLanguage:
      for (const lang of languages)
        for (const [localePath, langs] of Object.entries(config))
          if (langs.includes(lang)) {
${n?`            if (!availableLocales.includes(localePath))
              continue;
`:""}            matchedLocalePath = localePath;
            break findLanguage;
          }

    // default link
    const defaultLink = defaultLocale? \`\${origin}${s(t)}\${defaultLocale}\${routePath}\${anchor? \`#\${anchor}\`: ""}\`: null;

    // a locale matches
    if (matchedLocalePath) {
      const localeLink = \`\${origin}${s(t)}\${matchedLocalePath}\${routePath}\${anchor? \`#\${anchor}\`: ""}\`;

      if (availableLocales.includes(matchedLocalePath)) {
        location.href = localeLink;
      }
      // the page does not exist
      else {
        // locale homepage
        if (defaultBehavior === "homepage") {
          location.href = \`\${origin}${s(t)}\${matchedLocalePath}\`;
        }
        // default locale page
        else if (defaultBehavior === "defaultLocale" && defaultLink) {
          location.href = defaultLink;
        }
        // as is to get a 404 page of that locale
        else {
          location.href = localeLink;
        }
      }
    }
    // we have a default page
    else if (defaultLink) {
      location.href = defaultLink;
    }
    else {
      location.href = \`\${origin}${s(t)}/404.html\`;
    }
  <\/script>
</head>
<body>
  <p>Redirecting...</p>
</body>
</html>
`,M=async(a,e)=>{const c=a.pages.filter(({pathLocale:t})=>t==="/").map(({path:t})=>t),n={};a.pages.filter(({pathLocale:t})=>t!=="/").forEach(({path:t,pathLocale:o})=>{const l=t.replace(o,"/").replace(/\/$/,"/index.html");c.includes(l)||(n[l]??=[]).push(o)});const{succeed:i}=m.load("Generating locale redirect files");await Promise.all(h(n).map(async([t,o])=>{const l=a.dir.dest(u(t));r.existsSync(l)||(await r.ensureDir(p.dirname(l)),await r.writeFile(l,A(e,o,a.siteData.base)))})),i()},T=a=>`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="robots" content="noindex">
  <meta http-equiv="refresh" content="0; url=${a}">
  <link rel="canonical" href="${a}">
  <title>Redirecting...</title>
  <script>
    const anchor = window.location.hash.slice(1);
    window.location.replace(\`${a}\${anchor? \`#\${anchor}\`: ""}\`);
  <\/script>
</head>
<body>
  <p>Redirecting...</p>
</body>
</html>
`,B=async(a,e,c="")=>{const n=c?s(k(c)?c:`https://${c}`):"",{succeed:i}=m.load("Generating redirect files");await Promise.all(h(e).map(async([t,o])=>{const l=a.dir.dest(u(t));if(!r.existsSync(l)){const v=f(o)?`${n}${a.siteData.base}${u(o)}`:o;await r.ensureDir(p.dirname(l)),await r.writeFile(l,T(v))}})),i()},I=["defaultLocale","homepage","404"],N=(a,e)=>{const{locales:c}=a.siteData,n=P(g(h(c).filter(([i,{lang:t}])=>t?!0:(m.error(`Missing ${C.magenta("lang")} option for locale "${i}", this locale will be ignored!`),!1)).map(([i,{lang:t}])=>[i,[t]])),$(e.localeConfig)?g(h(e.localeConfig).map(([i,t])=>[i,w(t)?t:[t]])):{});return{config:n,autoLocale:e.autoLocale??!1,defaultLocale:e.defaultLocale||R(n).pop(),localeFallback:e.localeFallback??!0,defaultBehavior:e.defaultBehavior&&I.includes(e.defaultBehavior)?e.defaultBehavior:"defaultLocale"}},O=/#.*$/u,d=(a,e=!1)=>(e?a.replace(O,""):a).replace(/\/(?:README\.md)?$/i,"/index.html").replace(/(?:\.(?:md|html))?$/,".html"),x=(a,e)=>{const c=z(e.config)?e.config(a):$(e.config)?e.config:{};return{...g(a.pages.map(({frontmatter:n,path:i})=>w(n.redirectFrom)?n.redirectFrom.map(t=>[d(t,!0),i]):n.redirectFrom?[[d(n.redirectFrom,!0),i]]:[]).flat()),...g(h(c).map(([n,i])=>[d(n,!0),d(i)]))}},H=({frontmatter:a},e)=>{const{base:c}=e.siteData,{redirectTo:n}=a;if(n){const i=d(f(n)?`${c}${u(n)}`:n);(a.head??=[]).unshift(["script",{},`{const anchor = window.location.hash.slice(1);window.location.replace(\`${i}\${anchor? \`#\${anchor}\`: ""}\`);}`])}},U=[[["en","en-US"],{name:"English",hint:"Your primary language is $1, do you want to switch to it?",switch:"Switch to $1",cancel:"Cancel",remember:"Remember my choice"}],[["zh","zh-CN","zh-Hans"],{name:"简体中文",hint:"你的首选语言是 $1，是否切换到该语言？",switch:"切换到 $1",cancel:"取消",remember:"记住我的选择"}],[["zh-TW","zh-Hant"],{name:"繁體中文",hint:"你的首選語言是 $1，是否切換到該語言？",switch:"切換到 $1",cancel:"取消",remember:"記住我的選擇"}],[["de","de-DE"],{name:"Deutsch",hint:"Ihre bevorzugte Sprache ist $1, möchten Sie zu dieser wechseln?",switch:"Zu $1 wechseln",cancel:"Abbrechen",remember:"Meine Wahl merken"}],[["de-AT"],{name:"Deutsch (Österreich)",hint:"Ihre bevorzugte Sprache ist $1, möchten Sie zu dieser wechseln?",switch:"Zu $1 wechseln",cancel:"Abbrechen",remember:"Meine Wahl merken"}],[["vi","vi-VN"],{name:"Tiếng Việt",hint:"Ngôn ngữ chính của bạn là $1, bạn có muốn chuyển sang nó?",switch:"Chuyển sang $1",cancel:"Hủy",remember:"Nhớ lựa chọn của tôi"}],[["uk"],{name:"Українська",hint:"Вашою основною мовою є $1, чи бажаєте ви переключитися на неї?",switch:"Переключитися на $1",cancel:"Скасувати",remember:"Запам’ятати мій вибір"}],[["ru","ru-RU"],{name:"Русский",hint:"Ваш основной язык - $1, вы хотите переключиться на него?",switch:"Переключиться на $1",cancel:"Отмена",remember:"Запомнить мой выбор"}],[["br"],{name:"Português (Brasil)",hint:"A língua principal é $1, deseja mudar para ela?",switch:"Mudar para $1",cancel:"Cancelar",remember:"Lembrar minha escolha"}],[["pl","pl-PL"],{name:"Polski",hint:"Twoim głównym językiem jest $1, czy chcesz przełączyć się na niego?",switch:"Przełącz na $1",cancel:"Anuluj",remember:"Zapamiętaj moje wybory"}],[["sk","sk-SK"],{name:"Slovenčina",hint:"Vašou hlavnou jazykom je $1, chcete prepnúť naň?",switch:"Prepnúť na $1",cancel:"Zrušiť",remember:"Zapamätať si moju voľbu"}],[["fr","fr-FR"],{name:"Français",hint:"Votre langue principale est $1, voulez-vous la changer ?",switch:"Changer pour $1",cancel:"Annuler",remember:"Se souvenir de mon choix"}],[["tr","tr-TR"],{name:"Türkçe",hint:"Ana diliniz $1, ona geçmek ister misiniz?",switch:"$1'e geç",cancel:"İptal",remember:"Seçimimi hatırla"}],[["fi","fi-FI"],{name:"Suomi",hint:"Pääkielenäsi on $1, haluatko vaihtaa siihen?",switch:"Vaihda $1:een",cancel:"Peruuta",remember:"Muista valintani"}],[["hu","hu-HU"],{name:"Magyar",hint:"A fő nyelvét $1, szeretné váltani?",switch:"Váltás $1",cancel:"Mégse",remember:"Emlékezzen a választásomra"}],[["id","id-ID"],{name:"Bahasa Indonesia",hint:"Bahasa utama Anda adalah $1, apakah Anda ingin beralih ke sana?",switch:"Beralih ke $1",cancel:"Batal",remember:"Ingat pilihan saya"}],[["nl","nl-NL"],{name:"Nederlands",hint:"Uw primaire taal is $1, wilt u overschakelen?",switch:"Overschakelen naar $1",cancel:"Annuleren",remember:"Onthoud mijn keuze"}],[["ja","ja-JP"],{name:"日本語",hint:"あなたの主要な言語は $1 です。それに切り替えますか？",switch:"$1 に切り替える",cancel:"キャンセル",remember:"選択を記憶する"}],[["ko","ko-KO"],{name:"한국어",hint:"당신의 기본 언어는 $1입니다. 그것으로 전환 하시겠습니까?",switch:"$1로 전환",cancel:"취소",remember:"내 선택 기억하기"}],[["es","es-ES"],{name:"Español",hint:"Su idioma principal es $1, ¿desea cambiarlo?",switch:"Cambiar a $1",cancel:"Cancelar",remember:"Recordar mi elección"}],[["/pt"],{name:"Português",hint:"Sua língua principal é $1, deseja mudar para ela?",switch:"Mudar para $1",cancel:"Cancelar",remember:"Lembrar minha escolha"}]],{url:V}=import.meta,L=_(V),J=(a={})=>e=>{e.env.isDebug&&m.info("Options:",a);const c=N(e,a);let n=null;return{name:b,alias:{"@vuepress/plugin-redirect/modal":a.switchLocale==="modal"?p.resolve(L,"../client/components/RedirectModal.js"):D("@vuepress/helper/noopComponent",import.meta)},define:{__REDIRECT_CONFIG__:c,__REDIRECT_DIRECT__:a.switchLocale==="direct",__REDIRECT_MODAL__:a.switchLocale==="modal",__REDIRECT_LOCALES__:S({app:e,name:"redirect",config:a.locales,default:U})},extendsBundlerOptions:i=>{E(i,e,"@vuepress/helper")},extendsPage:i=>{H(i,e)},onInitialized:async()=>{n=x(e,a),e.env.isDebug&&m.info("Redirect Map:",n),a.autoLocale&&e.env.isDebug&&await j(e)},onPrepared:async()=>{await e.writeTemp("redirect/map.js",`export const redirectMap = ${e.env.isDev?JSON.stringify(n,null,2):"{}"};
`),e.env.isDev&&(n=null)},onGenerated:async()=>{await B(e,n),a.autoLocale&&await M(e,c)},clientConfigFile:p.join(L,"../client/config.js")}};export{J as redirectPlugin};
//# sourceMappingURL=index.js.map
