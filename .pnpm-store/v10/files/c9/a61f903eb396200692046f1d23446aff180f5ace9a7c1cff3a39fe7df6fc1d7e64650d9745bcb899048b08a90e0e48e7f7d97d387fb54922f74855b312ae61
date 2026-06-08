import{useDarkMode as _,LoadingIcon as d,decodeData as p}from"@vuepress/helper/client";import{watchImmediate as h}from"@vueuse/core";import{defineComponent as g,shallowRef as m,useId as S,ref as v,h as n,onMounted as w,nextTick as y,onUnmounted as j}from"vue";import"../styles/chartjs.css";const E=(e,t)=>t==="json"?JSON.parse(e):new Function(`let config,__chart_js_config__;
{
${e}
__chart_js_config__=config;
}
return __chart_js_config__;`)();var R=g({name:"ChartJS",props:{config:{type:String,required:!0},title:String,type:{type:String,default:"json"}},setup(e){const t=_(),c=m(),i=S(),o=v(!1);let r;const s=()=>{r?.destroy(),r=null},l=async()=>{if(__VUEPRESS_SSR__)return;const{default:a}=await import("chart.js/auto");a.defaults.borderColor=t.value?"#ccc":"#36A2EB",a.defaults.color=t.value?"#fff":"#000",a.defaults.maintainAspectRatio=!1;const f=p(e.config),u=E(f,e.type);r=new a(i,u)};return w(()=>{h(__VUEPRESS_DEV__?[()=>e.config,t]:t,async()=>{s(),await y(),await l(),o.value=!0},{flush:"post"})}),j(s),()=>[e.title?n("div",{class:"chartjs-title"},decodeURIComponent(e.title)):null,o.value?null:n(d,{class:"chartjs-loading",height:192}),n("div",{ref:c,class:"chartjs-wrapper",style:{display:o.value?"block":"none"}},n("canvas",{id:i,height:400}))]}});export{R as default};
//# sourceMappingURL=ChartJS.js.map
