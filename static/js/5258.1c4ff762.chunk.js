(self.webpackChunk_kne_components_core=self.webpackChunk_kne_components_core||[]).push([[5258,8506],{89519:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var l=n(26184),i=n.n(l);n(26035);const s=i()},36056:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Label:()=>h,default:()=>j});var l=n(86122),i=n(2508),s=n(7101),a=n.n(s);const o="style_content__KHqQn__RY4Bj",r="style_size-small__RwAEB__RY4Bj",c="style_label__EG-qx__RY4Bj",d="style_content-content__AkJj-__RY4Bj",_="style_item__WV0-i__RY4Bj";var u=n(80184);const h=e=>{let{className:t,children:n,setWidth:i}=e;const s=(0,l.useRef)(null);return(0,l.useRef)(i).current=i,(0,l.useLayoutEffect)((()=>{const e=()=>{if(!s.current)return;const{width:e}=s.current.getBoundingClientRect();i(e)},t=new ResizeObserver(e);return t.observe(s.current),e(),()=>{t.disconnect()}}),[i]),(0,u.jsxs)("div",{ref:s,className:t,children:[n,"\uff1a"]})},m=e=>{let{list:t,labelAlign:n,col:s,gutter:m,className:j,size:v}=e;const x=(0,l.useRef)([]),[f,p]=(0,l.useState)(0);return(0,u.jsx)(i.Row,{"data-testid":"components-core-content",className:a()(o,j,{[r]:"small"===v}),gutter:m,children:t.filter((e=>"function"===typeof e.display?e.display():!1!==e.display)).map(((e,t)=>{let{label:l,content:o,block:r}=e;return(0,u.jsx)(i.Col,{span:!0===r?24:24/s,className:_,children:(0,u.jsxs)(i.Space,{className:_,children:[l?(0,u.jsx)("div",{style:f&&"auto"!==n?{minWidth:f,textAlign:n}:null,children:(0,u.jsx)(h,{className:a()(c,"content-label"),setWidth:e=>{x.current[t]=e,p(Math.max(...x.current))},children:l})}):null,(0,u.jsx)("div",{className:a()(d,"content-content"),children:o})]},t)},t)}))})};m.defaultProps={labelAlign:"left",col:1,gutter:0,list:[]};const j=m},39434:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>k});var l=n(2508),i=n(93568),s=n.n(i),a=n(7101),o=n.n(a),r=n(89519),c=n(43682),d=n(91243),_=n(36056);const u={notification:"style_notification__Vv-MM__RY4Bj",list:"style_list__l8KOo__RY4Bj",header:"style_header__3dcv8__RY4Bj",item:"style_item__d92RS__RY4Bj","item-box":"style_item-box__dd-Lk__RY4Bj","index-1":"style_index-1__f97L0__RY4Bj","index-2":"style_index-2__04vAw__RY4Bj","item-box-main":"style_item-box-main__lnSak__RY4Bj","item-title":"style_item-title__mArMd__RY4Bj","level-high":"style_level-high__Uys7Y__RY4Bj","level-middle":"style_level-middle__EewyC__RY4Bj","level-low":"style_level-low__8kVyL__RY4Bj","title-icon":"style_title-icon__1EoAG__RY4Bj","item-subtitle":"style_item-subtitle__xeFJs__RY4Bj","close-btn":"style_close-btn__7qpG3__RY4Bj","is-loading":"style_is-loading__upVL+__RY4Bj","item-content":"style_item-content__8MlsG__RY4Bj","link-outer":"style_link-outer__kegyZ__RY4Bj",link:"style_link__F2CO-__RY4Bj","is-last-item":"style_is-last-item__MytRl__RY4Bj"};var h=n(86122),m=n(98444),j=n.n(m),v=n(26822),x=n.n(v),f=n(66222),p=n.n(f),g=n(92527),y=n(51475),b=n.n(y),R=n(80184);const B=["high","middle","low"],Y=e=>{let{level:t,title:n,groupLength:i,subtitle:s,content:a,link:r,id:h,children:m,className:j}=e;const{setGlobal:v}=(0,c.useGlobalContext)("notification"),{apis:x,ajax:f}=(0,c.usePreset)(),{isLoading:y,callback:B}=(0,g.useLoading)((async()=>{var e;const{data:t}=null!==x&&void 0!==x&&null!==(e=x.notification)&&void 0!==e&&e.read?await f(Object.assign({},x.notification.read,{data:{ids:[h]}})):{data:{code:0}};0===t.code&&v((e=>{const t=((null===e||void 0===e?void 0:e.list)||[]).slice(0),n=b()(t,(e=>h===e.id));return n>-1&&t.splice(n,1),Object.assign({},e,{list:t})}))}));return(0,R.jsxs)("div",{className:o()(u.item,j),style:{"--group-length":Math.min(i,3)||1},children:[i&&i>1&&p()(1,Math.min(i,3)).reverse().map((e=>(0,R.jsx)("div",{className:o()(u["item-box"],u["index-".concat(e)])},e))),(0,R.jsxs)("div",{className:o()(u["item-box"],u["item-box-main"]),children:[(0,R.jsxs)("div",{className:o()(u["item-title"],u["level-".concat(t)]),children:[(0,R.jsx)(d.default,{className:u["title-icon"],type:"high"===t?"icon-tishi":"icon-daiwochuli"}),(0,R.jsx)(l.Typography.Text,{ellipsis:!0,children:n})]}),(0,R.jsxs)("div",{className:u["item-content"],children:[(0,R.jsxs)("div",{className:u["item-subtitle"],children:[(0,R.jsx)(l.Typography.Text,{ellipsis:!0,children:s||""}),(0,R.jsx)(d.default,{className:o()(u["close-btn"],{[u["is-loading"]]:y}),type:"icon-close-thin",onClick:()=>{y||h&&B()}})]}),Array.isArray(a)?(0,R.jsx)(_.default,{list:a,labelAlign:"auto",size:"small"}):m]}),r&&(0,R.jsx)("div",{className:u["link-outer"],children:(0,R.jsx)(g.default,{className:u.link,size:"small",onClick:async()=>{var e;const{data:t}=null!==x&&void 0!==x&&null!==(e=x.notification)&&void 0!==e&&e.read?await f(Object.assign({},x.notification.read,{data:{ids:[h]}})):{data:{code:0}};0===t.code&&window.open(r)},children:"\u67e5\u770b\u8be6\u60c5"})})]})]})};Y.defaultProps={level:"low"};const k=()=>{const{global:e,setGlobal:t}=(0,c.useGlobalContext)("notification"),n=(0,h.useRef)(),{apis:i,ajax:a}=(0,c.usePreset)(),[d,_]=(0,h.useState)(32);(0,h.useEffect)((()=>{var e;n.current&&_(null===(e=n.current)||void 0===e?void 0:e.clientHeight)}),[]);const{list:m,expand:v}=Object.assign({},{expand:!1,list:[]},e),f=(0,h.useMemo)((()=>{const e=j()(m,(e=>e.level||"low"));return B.map((t=>e[t]||[]))}),[m]);return 0===m.length?null:(0,R.jsxs)("div",{className:u.notification,style:{"--head-option-height":"".concat(d,"px")},children:[(0,R.jsx)("div",{ref:n,children:(0,R.jsxs)(l.Row,{justify:"end",wrap:!1,className:u.header,gutter:8,children:[f.some((e=>e.length>1))&&(0,R.jsx)(l.Col,{children:(0,R.jsx)(l.Button,{size:"small",onClick:()=>{t(Object.assign({},e,{expand:!v}))},children:v?"\u5168\u90e8\u6298\u53e0":"\u5168\u90e8\u5c55\u5f00"})}),(0,R.jsx)(l.Col,{children:(0,R.jsx)(g.default,{type:"primary",size:"small",onClick:async()=>{var n;const{data:l}=null!==i&&void 0!==i&&null!==(n=i.notification)&&void 0!==n&&n.read?await a(Object.assign({},i.notification.read,{data:{ids:m.map((e=>e.id)).filter((e=>!!e))}})):{data:{code:0}};0===l.code&&t(Object.assign({},e,{list:[]}))},children:"\u5168\u90e8\u6e05\u9664"})})]})}),(0,R.jsx)(r.Z,{className:u.list,children:(0,R.jsx)(s(),{leaveReverse:!0,duration:200,interval:20,children:f.filter((e=>e&&e.length>0)).map(((e,t)=>{var n;if(v)return e.map(((e,n)=>e&&(0,R.jsx)("div",{children:(0,R.jsx)(Y,{...Object.assign({},e)})},"group-".concat(t,"-").concat(n))));const l=x()(e);return(0,R.jsx)("div",{children:(0,R.jsx)(Y,{...Object.assign({},l),groupLength:e.length,className:o()({[u["is-last-item"]]:(null===f||void 0===f?void 0:f.length)&&+t+1===Math.min(null===(n=f.filter((e=>e&&e.length)))||void 0===n?void 0:n.length,3)})})},"group-".concat(t,"-0"))}))})})]})}},31211:e=>{e.exports=function(e,t,n,l){for(var i=-1,s=null==e?0:e.length;++i<s;){var a=e[i];t(l,a,n(a),e)}return l}},38430:(e,t,n)=>{var l=n(87927);e.exports=function(e,t,n,i){return l(e,(function(e,l,s){t(i,e,n(e),s)})),i}},87927:(e,t,n)=>{var l=n(15358),i=n(63173)(l);e.exports=i},2045:e=>{e.exports=function(e,t,n,l){for(var i=e.length,s=n+(l?1:-1);l?s--:++s<i;)if(t(e[s],s,e))return s;return-1}},74629:(e,t,n)=>{var l=n(31211),i=n(38430),s=n(56025),a=n(93629);e.exports=function(e,t){return function(n,o){var r=a(n)?l:i,c=t?t():{};return r(n,e,s(o,2),c)}}},63173:(e,t,n)=>{var l=n(21473);e.exports=function(e,t){return function(n,i){if(null==n)return n;if(!l(n))return e(n,i);for(var s=n.length,a=t?s:-1,o=Object(n);(t?a--:++a<s)&&!1!==i(o[a],a,o););return n}}},51475:(e,t,n)=>{var l=n(2045),i=n(56025),s=n(39753),a=Math.max;e.exports=function(e,t,n){var o=null==e?0:e.length;if(!o)return-1;var r=null==n?0:s(n);return r<0&&(r=a(o+r,0)),l(e,i(t,3),r)}},26822:(e,t,n)=>{e.exports=n(91294)},98444:(e,t,n)=>{var l=n(32526),i=n(74629),s=Object.prototype.hasOwnProperty,a=i((function(e,t,n){s.call(e,n)?e[n].push(t):l(e,n,[t])}));e.exports=a},91294:e=>{e.exports=function(e){return e&&e.length?e[0]:void 0}},39753:(e,t,n)=>{var l=n(91495);e.exports=function(e){var t=l(e),n=t%1;return t===t?n?t-n:t:0}},26035:()=>{}}]);
//# sourceMappingURL=5258.1c4ff762.chunk.js.map