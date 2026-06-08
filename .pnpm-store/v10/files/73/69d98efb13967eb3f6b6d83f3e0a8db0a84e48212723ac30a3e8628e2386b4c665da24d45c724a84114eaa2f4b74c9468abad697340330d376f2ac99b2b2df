import{LoadingIcon as l,decodeData as h}from"@vuepress/helper/client";import{useEventListener as _,useDebounceFn as d}from"@vueuse/core";import{defineComponent as f,shallowRef as m,ref as g,h as s,onMounted as S,watch as w,nextTick as v,onUnmounted as y}from"vue";import{onContentUpdated as E}from"vuepress/client";import"../styles/echarts.css";import{u as C}from"../echarts-C40_Ts42.js";const R=(async()=>{}).constructor,U=(t,o,n,i)=>o==="js"?R("echarts","myChart",`let width,height,option,__echarts_config__;
{
${t}
__echarts_config__={width,height,option};
}
return __echarts_config__;
`)(n,i):Promise.resolve({option:JSON.parse(t)});var P=f({name:"ECharts",props:{config:{type:String,required:!0},title:String,type:{type:String,default:"json"}},setup(t){const o=C(),n=m(),i=g(!1);let e=null;_("resize",d(()=>{e?.resize()},100));const a=()=>{e?.dispose(),e=null},c=async()=>{if(__VUEPRESS_SSR__)return;const r=await import("echarts");o.isSetup||(await o.setup?.(),o.isSetup=!0),e=r.init(n.value);const{option:p,...u}=await U(h(t.config),t.type,r,e);e.resize(u),e.setOption({...o.option,...p})};return E(async r=>{r==="mounted"&&(await c(),i.value=!0)}),S(()=>{__VUEPRESS_DEV__&&w(()=>t.config,async()=>{a(),await v(),await c()},{flush:"post"})}),y(a),()=>[t.title?s("div",{class:"echarts-title"},decodeURIComponent(t.title)):null,s("div",{class:"echarts-wrapper"},[s("div",{ref:n,class:"echarts-container"}),i.value?null:s(l,{class:"echarts-loading",height:360})])]}});export{P as default};
//# sourceMappingURL=ECharts.js.map
