(self.webpackChunk_kne_components_components_core=self.webpackChunk_kne_components_components_core||[]).push([[4666],{25644:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});const s={getItem:e=>{const t=window.localStorage.getItem(e);try{const{dataType:e,value:r}=JSON.parse(t);if("object"===e&&"null"===r)return null;if("undefined"===e)return;return"number"===e?Number(r):"boolean"===e?Boolean(r):r}catch(r){return null}},setItem:(e,t)=>{const r=typeof t;window.localStorage.setItem(e,JSON.stringify({dataType:r,value:t}))}}},24666:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});const s="style_overlay__ZS5Wz__DdjY3",n="style_overlay-content__IVFmc__DdjY3",a="style_state-tag__+59RJ__DdjY3";var l=r(73884),o=r(25644),c=r(62716),u=r(55199),i=r(69175),d=r.n(i),_=r(20977),p=r.n(_),f=r(70720),g=r.n(f),v=r(83136),h=r.n(v),m=r(70579);const x=e=>{let{className:t,overlayClassName:r,storeName:i,maxLength:_,label:f,children:v,onSelect:x,zIndex:b,getPopupContainer:y}=e;const[w,j]=(0,l.useState)((()=>o.A.getItem(i)||[])),[k,C]=(0,l.useState)(!1),N=(0,l.useCallback)((()=>{0!==w.length&&C(!0)}),[w]),S=(0,l.useRef)(i);S.current=i,(0,l.useEffect)((()=>{o.A.setItem(S.current,w)}),[w]);const Y=(0,l.useCallback)((e=>{e.value&&e.label&&j((t=>{const r=d()(t,{value:e.value});return r.splice(0,0,e),_?p()(r,"value").slice(0,_):r})),C(!1)}),[_]),D=(0,l.useCallback)((()=>{C(!1)}),[]),R=g()(D),E=(0,l.useRef)(null),I=(0,l.useRef)(null);R.current={contains:e=>E.current.contains(e)||k&&I.current.contains(e)};const z=(0,l.useRef)(null),[O,A]=(0,l.useState)(0);return(0,l.useLayoutEffect)((()=>{const e=()=>{A(E.current.clientWidth)};e();const t=new ResizeObserver(e);t.observe(E.current);const r=new MutationObserver(e);return r.observe(E.current,{subtree:!0,childList:!0}),()=>{r.disconnect(),t.disconnect()}}),[]),(0,m.jsx)(u.Popover,{zIndex:b,placement:"bottom",transitionName:"ant-slide-up",arrow:!1,open:k,getPopupContainer:y,overlayClassName:h()(r,s),content:(0,m.jsx)("div",{className:n,style:{width:O},ref:I,children:(0,m.jsxs)(u.Space,{direction:"vertical",children:[(0,m.jsx)("div",{children:f}),(0,m.jsx)(u.Space,{wrap:!0,children:w.map((e=>(0,m.jsx)(c.default,{className:a,text:e.label,type:"result",onClick:()=>{x&&x(e.value,e),z.current&&z.current(e.value,e),D(),Y(e)}})))})]})}),children:(0,m.jsx)("div",{ref:E,className:h()(t),children:v({open:k,openHistory:N,appendHistory:Y,setOnSelect:e=>{z.current=e},close:D})})})};x.defaultProps={maxLength:5,label:"\u6700\u8fd1\u641c\u7d22",storeName:"HISTORY_STORE_KEY"};const b=x},62716:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(73884),n=r(83136),a=r.n(n);const l={"state-tag":"style_state-tag__Kx27z__DdjY3","state-result-tag":"style_state-result-tag__CssDz__DdjY3","state-skill-tag":"style_state-skill-tag__k0bQE__DdjY3","state-tag-filter-result-wrapper":"style_state-tag-filter-result-wrapper__QYS5z__DdjY3","state-tag-filter-name":"style_state-tag-filter-name__iJaJd__DdjY3","state-tag-filterResult":"style_state-tag-filterResult__KTkot__DdjY3","show-bg":"style_show-bg__OcL+R__DdjY3","tag-text":"style_tag-text__JHCt+__DdjY3","state-tag-wrapper":"style_state-tag-wrapper__A-gTE__DdjY3"};var o=r(55199),c=r(70579);const u={default:"#666666",skill:{color:"#666666",borderColor:"#EEEEEE"},result:"#666666",filterResult:"#5CB8B2",success:"#027A48",progress:"#F09700",danger:"#D14343",info:"#155ACF",other:"#6740C3"},i=e=>{let{showBorder:t,text:r,type:n,showBackground:i,className:d,filterName:_,...p}=e;const f=(0,s.useMemo)((()=>{var e,t;return{color:(null===u||void 0===u||null===(e=u[n])||void 0===e?void 0:e.color)||u[n],borderColor:(null===u||void 0===u||null===(t=u[n])||void 0===t?void 0:t.borderColor)||u[n]}}),[n]);return(0,c.jsxs)(o.Space,{"data-testid":"components-core-state-tag",className:a()(l["state-tag-wrapper"],"filterResult"===n?l["state-tag-filter-result-wrapper"]:""),align:"center",size:4,children:[_?(0,c.jsxs)("span",{className:l["state-tag-filter-name"],children:[_,":"]}):null,(0,c.jsx)(o.Tag,{color:f.color,...p,style:{background:i?f.color+"0F":"none",color:f.color,border:t?"1px solid ".concat(f.borderColor):"none"},className:a()(l["state-tag"],d,"result"===n?l["state-result-tag"]:"","skill"===n?l["state-skill-tag"]:"",l["state-tag-".concat(n)],i?l["show-bg"]:"",t?l["show-border"]:""),children:(0,c.jsx)("span",{className:l["tag-text"],children:r})})]})};i.defaultProps={color:"#666666",type:"default",showBorder:!1,showBackground:!0,text:"",className:""};const d=i},75866:(e,t,r)=>{var s=r(88468);e.exports=function(e,t){return!!(null==e?0:e.length)&&s(e,t,0)>-1}},41558:e=>{e.exports=function(e,t,r){for(var s=-1,n=null==e?0:e.length;++s<n;)if(r(t,e[s]))return!0;return!1}},75816:e=>{e.exports=function(e,t,r,s){for(var n=e.length,a=r+(s?1:-1);s?a--:++a<n;)if(t(e[a],a,e))return a;return-1}},88468:(e,t,r)=>{var s=r(75816),n=r(40644),a=r(94020);e.exports=function(e,t,r){return t===t?a(e,t,r):s(e,n,r)}},40644:e=>{e.exports=function(e){return e!==e}},53871:e=>{e.exports=function(e,t,r){var s=-1,n=e.length;t<0&&(t=-t>n?0:n+t),(r=r>n?n:r)<0&&(r+=n),n=t>r?0:r-t>>>0,t>>>=0;for(var a=Array(n);++s<n;)a[s]=e[s+t];return a}},64416:(e,t,r)=>{var s=r(18902),n=r(75866),a=r(41558),l=r(58114),o=r(68182),c=r(52074);e.exports=function(e,t,r){var u=-1,i=n,d=e.length,_=!0,p=[],f=p;if(r)_=!1,i=a;else if(d>=200){var g=t?null:o(e);if(g)return c(g);_=!1,i=l,f=new s}else f=t?[]:p;e:for(;++u<d;){var v=e[u],h=t?t(v):v;if(v=r||0!==v?v:0,_&&h===h){for(var m=f.length;m--;)if(f[m]===h)continue e;t&&f.push(h),p.push(v)}else i(f,h,r)||(f!==p&&f.push(h),p.push(v))}return p}},80820:(e,t,r)=>{var s=r(53871);e.exports=function(e,t,r,n){for(var a=e.length,l=n?a:-1;(n?l--:++l<a)&&t(e[l],l,e););return r?s(e,n?0:l,n?l+1:a):s(e,n?l+1:0,n?a:l)}},68182:(e,t,r)=>{var s=r(72070),n=r(75713),a=r(52074),l=s&&1/a(new s([,-0]))[1]==1/0?function(e){return new s(e)}:n;e.exports=l},94020:e=>{e.exports=function(e,t,r){for(var s=r-1,n=e.length;++s<n;)if(e[s]===t)return s;return-1}},69175:(e,t,r)=>{var s=r(9096),n=r(80820);e.exports=function(e,t){return e&&e.length?n(e,s(t,3),!0):[]}},75713:e=>{e.exports=function(){}},20977:(e,t,r)=>{var s=r(9096),n=r(64416);e.exports=function(e,t){return e&&e.length?n(e,s(t,2)):[]}}}]);
//# sourceMappingURL=4666.aef68c78.chunk.js.map