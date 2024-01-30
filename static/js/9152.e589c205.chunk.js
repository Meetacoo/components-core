(self.webpackChunk_kne_components_core=self.webpackChunk_kne_components_core||[]).push([[9152,6049],{94789:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>T,withExportTable:()=>k});var r=s(3987),n=s(91602),l=s(45526),o=s(86122),a=s(44439),i=s(7101),c=s.n(i),d=s(2508),u=s(56603),m=s(91243),p=s(14250),h=s(24242),x=s.n(h),_=s(39690),f=s(66005),g=s(43682),j=(s(92527),s(41767)),v=s(26181),y=s.n(v),b=s(80184);const C=e=>{let{groupName:t,list:s,selected:r,onChange:i}=e;const u=(0,o.useMemo)((()=>s.every((e=>r.some((t=>t===e.name))))),[s,r]);return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(d.Row,{gutter:[24,12],justify:"space-between",children:[(0,b.jsx)(d.Col,{className:l.Z["right-title"],children:t}),(0,b.jsx)(d.Col,{children:(0,b.jsx)(d.Checkbox,{checked:u,onChange:e=>{const t=e.target.checked?(0,a.union)(r.slice(0),s.map((e=>e.name))):r.slice(0).filter((e=>!s.some((t=>t.name===e))));i(t)},children:(0,b.jsx)(n.FormattedMessage,{id:"selectedAll",moduleName:"ExportTable",defaultMessage:"\u5168\u9009"})})}),(0,b.jsx)(d.Col,{span:24,children:(0,b.jsx)(d.Space,{className:c()("full-space"),wrap:!0,size:[24,12],children:(s||[]).map((e=>(0,b.jsx)(d.Checkbox,{checked:r.some((t=>t===e.name)),onChange:t=>{let s=r.slice(0);t.target.checked?s.push(e.name):s=s.filter((t=>t!==e.name)),i(s)},children:e.titleText||e.title||"\u672a\u547d\u540d\u5217"},e.name)))})})]})})},N=e=>{let{options:t,children:s}=e;return t?(0,b.jsxs)(d.Row,{wrap:!1,children:[(0,b.jsx)(d.Col,{flex:1,className:l.Z["left-options-col"],children:s}),(0,b.jsx)(d.Col,{className:l.Z["right-options-col"],children:t})]}):s},D=(0,o.forwardRef)(((e,t)=>{let{columns:s,data:i}=e;const[u,h]=(0,o.useState)((()=>{const e=Array.isArray(i)?i:JSON.parse(i)||[];return Array.isArray(e)&&(e||[]).filter((e=>!!e)).length>0?e.filter((e=>!!e)):s.filter((e=>e.hasOwnProperty("exportHidden")&&!0!==e.exportHidden||!0!==e.hidden)).map((e=>e.name))})),x=(0,o.useMemo)((()=>(0,a.groupBy)(s,(e=>e.groupName))),[s]),_=(0,o.useMemo)((()=>{const e=new Map(s.map((e=>[e.name,e])));return(u||[]).filter((e=>s.some((t=>t.name===e)))).map((t=>e.get(t)))}),[s,u]);return(0,o.useImperativeHandle)(t,(()=>({data:u})),[u]),(0,b.jsx)(n.IntlProvider,{importMessages:r.Z,moduleName:"ExportTable",children:(0,b.jsx)(N,{options:(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{className:l.Z["right-header"],children:[(0,b.jsxs)("div",{className:l.Z["right-title"],children:[(0,b.jsx)(n.FormattedMessage,{id:"rightTitle",moduleName:"ExportTable",defaultMessage:"\u5df2\u9009\u7684\u5b57\u6bb5"}),"\uff1a"]}),(0,b.jsx)("div",{className:l.Z["right-desc"],children:(0,b.jsx)(n.FormattedMessage,{id:"rightDesc",moduleName:"ExportTable",defaultMessage:"\u6309\u4f4f\u62d6\u62fd\u53ef\u8fdb\u884c\u6392\u5e8f"})})]}),(0,b.jsx)(p.ReactSortable,{selectedColumns:u,list:_,filter:".ignore-elements",dragClass:l.Z["sortable-drag"],ghostClass:l.Z["sortable-ghost"],forceFallback:!0,setList:e=>{const t=e.map((e=>e.name));setTimeout((()=>{h([...t])}),50)},animation:300,delayOnTouchStart:!0,delay:2,children:_.map(((e,t)=>(0,b.jsx)(d.List.Item,{className:c()(l.Z["columns-control-content-item"],l.Z["is-drag"]),children:(0,b.jsxs)(d.Row,{justify:"space-between",align:"middle",style:{flex:1},children:[(0,b.jsx)(d.Col,{children:(0,b.jsxs)(d.Space,{size:2,children:[(0,b.jsx)(m.default,{type:"icon-paixu",className:c()(l.Z["move-icon"],"move-icon")}),(0,b.jsx)("span",{children:e.titleText||e.title||"\u672a\u547d\u540d\u5217"})]})}),(0,b.jsx)(d.Col,{onClick:t=>{t.preventDefault(),t.stopPropagation();let s=u.slice(0);s=s.filter((t=>t!==e.name)),setTimeout((()=>{h([...s])}),50)},children:(0,b.jsx)(m.default,{type:"icon-close-thin",className:c()(l.Z["close-icon"],"close-icon")})})]})},e.name+t)))})]}),children:(0,b.jsx)(d.Space,{className:c()("full-space"),direction:"vertical",split:(0,b.jsx)(d.Divider,{className:l.Z.divider}),children:Object.keys(x).map(((e,t)=>(0,b.jsx)(C,{selected:u,groupName:e,list:x[e],onChange:e=>{h(e)}},e+t)))})})})}));D.defaultProps={columns:[]};const k=e=>t=>{const s=x()(t,["onClick"]),r=(0,o.useRef)(null),{name:n,saveDataApi:i,featureId:c}=t,{exportTableServerApis:p}=(0,g.usePreset)(),h=i||p&&p.saveDataApi,v=(0,u.useModal)();return(0,b.jsx)(e,{onClick:async()=>{t.onClick&&t.onClick();let e="function"===typeof t.columns?await t.columns():t.columns;e=e.filter((e=>!0!==e.exportHidden));const o=(e=>{const t=(0,f.withFetch)(e);return s=>{const{name:r,getDataApi:n}=s,{exportTableServerApis:l}=(0,g.usePreset)(),o=n||l&&l.getDataApi;return r&&l&&l.getDataApi?(0,b.jsx)(t,{...s,...o(r),error:(0,b.jsx)(e,{...s})}):(0,b.jsx)(e,{...s})}})((t=>(e=>{let{children:t}=e;return c?(0,b.jsx)(j.default,{id:c,children:t}):t({})})({children:n=>{let{options:l}=n;return e=e.filter((e=>!Array.isArray(y()(l,"hiddenColumns"))||-1===l.hiddenColumns.indexOf(e.name))),(0,b.jsx)(D,{...t,...s,columns:e,ref:r})}})));v({title:t.title||"\u5bfc\u51fa\u6570\u636e",...s,className:l.Z["right-options-modal"],footer:()=>(0,b.jsxs)(d.Space,{size:4,className:l.Z["modal-footer-tip"],children:[(0,b.jsx)(m.default,{type:"icon-xinxi-miaobian"}),(0,b.jsx)("span",{children:"\u5bfc\u51fa\u540e\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u4fdd\u5b58\u60a8\u672c\u6b21\u9009\u62e9\u7684\u5b57\u6bb5\u53ca\u6392\u5e8f"})]}),footerButtons:[{children:"\u53d6\u6d88"},{type:"primary",children:"\u5bfc\u51fa",onClick:async()=>{var e;if(0===(null===(e=r.current)||void 0===e?void 0:e.data.length))return d.message.error(t.selectedTip||"\u8bf7\u9009\u62e9\u8981\u5bfc\u51fa\u7684\u5b57\u6bb5"),!1;const s=!h||await h({name:n,data:r.current.data});if(!1!==s){(0,f.getCache)().delByCacheName("EXPORT_TABLE_CONFIG_".concat(n));return!1!==(!t.onExport||await t.onExport({data:r.current.data,downloadBlobFile:_.downloadBlobFile}))}return!1!==s}}],children:(0,b.jsx)(o,{...(0,a.pick)(t,["name","getDataApi"])})})}})},T=k((e=>(0,b.jsx)(n.IntlProvider,{importMessages:r.Z,moduleName:"ExportTable",children:(0,b.jsx)(d.Button,{...e,size:"small",children:e.actionText||(0,b.jsx)(n.FormattedMessage,{id:"actionText",moduleName:"ExportTable",defaultMessage:"\u5bfc\u51fa\u6570\u636e"})})})))},3987:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});const r=e=>({"en-US":()=>s.e(6416).then(s.bind(s,6416)),"zh-CN":()=>s.e(2127).then(s.bind(s,12127))}[e]())},31211:e=>{e.exports=function(e,t,s,r){for(var n=-1,l=null==e?0:e.length;++n<l;){var o=e[n];t(r,o,s(o),e)}return r}},38430:(e,t,s)=>{var r=s(87927);e.exports=function(e,t,s,n){return r(e,(function(e,r,l){t(n,e,s(e),l)})),n}},87927:(e,t,s)=>{var r=s(15358),n=s(63173)(r);e.exports=n},58645:e=>{e.exports=function(e,t){for(var s,r=-1,n=e.length;++r<n;){var l=t(e[r]);void 0!==l&&(s=void 0===s?l:s+l)}return s}},74629:(e,t,s)=>{var r=s(31211),n=s(38430),l=s(56025),o=s(93629);e.exports=function(e,t){return function(s,a){var i=o(s)?r:n,c=t?t():{};return i(s,e,l(a,2),c)}}},63173:(e,t,s)=>{var r=s(21473);e.exports=function(e,t){return function(s,n){if(null==s)return s;if(!r(s))return e(s,n);for(var l=s.length,o=t?l:-1,a=Object(s);(t?o--:++o<l)&&!1!==n(a[o],o,a););return s}}},21867:(e,t,s)=>{var r=s(2646),n=s(39753);e.exports=function(e,t,s){var l=null==e?0:e.length;return l?(t=s||void 0===t?1:n(t),r(e,0,(t=l-t)<0?0:t)):[]}},98444:(e,t,s)=>{var r=s(32526),n=s(74629),l=Object.prototype.hasOwnProperty,o=n((function(e,t,s){l.call(e,s)?e[s].push(t):r(e,s,[t])}));e.exports=o},70290:(e,t,s)=>{var r=s(71848);e.exports=function(e,t,s){var n=(s="function"==typeof s?s:void 0)?s(e,t):void 0;return void 0===n?r(e,t,void 0,s):!!n}},87151:(e,t,s)=>{var r=s(58645),n=s(52173);e.exports=function(e){return e&&e.length?r(e,n):0}},39753:(e,t,s)=>{var r=s(91495);e.exports=function(e){var t=r(e),s=t%1;return t===t?s?t-s:t:0}},32883:()=>{},20717:()=>{},45526:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});const r={"right-options-modal":"style_right-options-modal__0FYSr__lDjs9","left-options-col":"style_left-options-col__dZs-a__lDjs9","right-options-col":"style_right-options-col__-bGqN__lDjs9","move-icon":"style_move-icon__Kd4U2__lDjs9","close-icon":"style_close-icon__HG1G5__lDjs9","columns-control-content-item":"style_columns-control-content-item__SK820__lDjs9","is-drag":"style_is-drag__7dzHq__lDjs9","sortable-drag":"style_sortable-drag__Btml4__lDjs9","sortable-ghost":"style_sortable-ghost__L0Tis__lDjs9","right-header":"style_right-header__pPtqi__lDjs9","right-title":"style_right-title__VutTR__lDjs9","right-desc":"style_right-desc__dUwAi__lDjs9",divider:"style_divider__GpvGk__lDjs9","modal-footer-tip":"style_modal-footer-tip__GMxOE__lDjs9"}}}]);
//# sourceMappingURL=9152.e589c205.chunk.js.map