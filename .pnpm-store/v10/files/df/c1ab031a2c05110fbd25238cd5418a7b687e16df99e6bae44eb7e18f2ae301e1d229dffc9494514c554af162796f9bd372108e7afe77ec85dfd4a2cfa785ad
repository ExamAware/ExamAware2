const S=i=>{const o=i.split(`
`),u=o.reduce((l,a)=>{for(let n=0;n<a.length;n++)if(a[n]!==" "&&a[n]!=="	")return Math.min(n,l);return l},1/0);return u<1/0?o.map(l=>l.slice(u)).join(`
`):i},j=(i,{name:o,open:u,close:l,render:a}={name:"uml",open:"start",close:"end",render:(n,p)=>{const k=n[p],{content:e,info:c,type:h}=k;return`<div class="${h}" title="${c}">${e}</div>`}})=>{const n=`@${u}`,p=`@${l}`,k=(e,c,h,g)=>{let s=e.bMarks[c]+e.tShift[c],d=e.eMarks[c];if(e.src.charCodeAt(s)!==64)return!1;let t;for(t=0;t<n.length;++t)if(n[t]!==e.src[s+t])return!1;const C=e.src.slice(s,s+t),$=e.src.slice(s+t,d);if(g)return!0;let m=!1,r=c;for(;r<h&&(s=e.bMarks[r]+e.tShift[r],d=e.eMarks[r],!(s<d&&e.sCount[r]<e.blkIndent));){if(e.src.charCodeAt(s)===64&&e.sCount[r]<=e.sCount[c]){let b=!0;for(t=0;t<p.length;++t)if(p[t]!==e.src[s+t]){b=!1;break}if(b&&e.skipSpaces(s+t)>=d){m=!0;break}}r++}const M=e.src.split(`
`).slice(c+1,r).join(`
`),f=e.push(o,"uml",0);return f.block=!0,f.info=$,f.content=S(M),f.map=[c,r],f.markup=C,e.line=r+(m?1:0),!0};i.block.ruler.before("fence",o,k,{alt:["paragraph","reference","blockquote","list"]}),i.renderer.rules[o]=a};export{j as uml};
//# sourceMappingURL=browser.js.map
