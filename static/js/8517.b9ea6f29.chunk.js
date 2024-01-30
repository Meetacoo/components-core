"use strict";(self.webpackChunk_kne_components_core=self.webpackChunk_kne_components_core||[]).push([[8517],{89519:(e,o,l)=>{l.d(o,{Z:()=>s});var t=l(26184),n=l.n(t);l(26035);const s=n()},56603:(e,o,l)=>{l.r(o),l.d(o,{ModalButton:()=>S,TabsModal:()=>D,TabsModalButton:()=>P,default:()=>v,useConfirmModal:()=>w,useModal:()=>x,useTabsModal:()=>k});var t=l(86122),n=l(2508),s=l(7101),i=l.n(s);const a={modal:"style_modal__Pm3cF__lDjs9",large:"style_large__iaqVE__lDjs9","modal-body-inner":"style_modal-body-inner__4PhpA__lDjs9","modal-title":"style_modal-title__dswaw__lDjs9","modal-outer":"style_modal-outer__r3SkX__lDjs9","modal-body":"style_modal-body__jQJSI__lDjs9","right-options-modal":"style_right-options-modal__FajDP__lDjs9","right-options-col":"style_right-options-col__3ilee__lDjs9","is-disabled-scroller":"style_is-disabled-scroller__PmHyk__lDjs9","modal-footer":"style_modal-footer__-prbN__lDjs9","modal-close":"style_modal-close__Oa5Kl__lDjs9","confirm-modal-wrap":"style_confirm-modal-wrap__YFImr__lDjs9","is-danger":"style_is-danger__H5110__lDjs9",title:"style_title__orTym__lDjs9",content:"style_content__k6MIF__lDjs9","has-title":"style_has-title__qy0Wp__lDjs9"},r=e=>({"en-US":()=>l.e(2350).then(l.bind(l,32350)),"zh-CN":()=>l.e(5665).then(l.bind(l,65665))}[e]());var c=l(91602),d=l(91243);const m=(e,o)=>"function"===typeof e?e(o):e;var _=l(92527),u=l(89519),h=l(80184);const p="Modal",f=e=>{let{options:o,children:l}=e;return o?(0,h.jsxs)(n.Row,{wrap:!1,children:[(0,h.jsx)(n.Col,{span:18,className:a["right-options-col"],children:l}),(0,h.jsx)(n.Col,{span:6,className:a["right-options-col"],children:o})]}):l},y=e=>{let{footer:o,footerButtons:l,onConfirm:s,onCancel:i,onClose:a}=e;return(0,h.jsxs)(n.Row,{gutter:10,wrap:!1,children:[(0,h.jsx)(n.Col,{flex:1,children:o}),Array.isArray(l)&&0===l.length?null:(0,h.jsx)(n.Col,{children:(0,h.jsx)(n.Space,{children:(l||[{children:(0,h.jsx)(c.IntlProvider,{importMessages:r,moduleName:p,children:(0,h.jsx)(c.FormattedMessage,{id:"Cancel",moduleName:p})}),onClick:i},{type:"primary",children:(0,h.jsx)(c.IntlProvider,{importMessages:r,moduleName:p,children:(0,h.jsx)(c.FormattedMessage,{id:"Confirm",moduleName:p})}),onClick:s}]).filter((e=>"function"===typeof(null===e||void 0===e?void 0:e.display)?null===e||void 0===e?void 0:e.display():!1!==(null===e||void 0===e?void 0:e.display))).map(((e,o)=>{let{ButtonComponent:l,onClick:n,autoClose:s=!0,display:i,...r}=e;const c=l||_.default;return(0,t.createElement)(c,{...r,key:o,onClick:async function(){const e=await Promise.resolve(n&&n(...arguments));return s&&!1!==e&&a&&a(),e}})}))})})]})},j=e=>{let{title:o,footer:l,disabledScroller:s,footerButtons:r,onClose:c,closable:m,onConfirm:_,onCancel:p,children:f}=e;const j=(0,t.useRef)(null);return(0,h.jsxs)("div",{className:a["modal-outer"],"data-testid":"components-core-modal",children:[!1===m?null:(0,h.jsx)(n.Button,{"data-testid":"components-core-modal-close-btn",className:a["modal-close"],type:"text",icon:(0,h.jsx)(d.default,{type:"icon-close-thin"}),onClick:e=>{e.stopPropagation(),c&&c()}}),o&&(0,h.jsx)("div",{className:a["modal-title"],children:o}),(0,h.jsx)(u.Z,{className:i()(a["modal-body"],{[a["is-disabled-scroller"]]:s},"modal-body"),ref:j,children:(0,h.jsx)("div",{className:i()(a["modal-body-inner"],"modal-body-inner"),children:f})}),null!==l||r?(0,h.jsx)("div",{className:i()(a["modal-footer"],"modal-footer"),children:(0,h.jsx)(y,{footer:l,footerButtons:r,onConfirm:_,onCancel:p,onClose:c})}):null]})},C=e=>{let{withDecorator:o,footerButtons:l,title:t,closable:n,onClose:s,onConfirm:i,onCancel:a,footer:r,rightOptions:c,disabledScroller:d,children:_}=e;const u=e=>(e=Object.assign({},{title:t},e),(0,h.jsx)(j,{title:m(e.title,{...e,close:s}),closable:n,onClose:s,onConfirm:i,onCancel:a,footerButtons:m(l,{...e,close:s}),disabledScroller:d,footer:m(r,{...e,close:s}),children:(0,h.jsx)(f,{options:m(c,{...e,close:s}),children:m(_,{...e,close:s})})}));return"function"===typeof o?o(u):u({})},b=e=>{let{children:o,rightOptions:l,footer:t,footerButtons:n,className:s,size:d,title:m,onClose:_,onConfirm:u,onCancel:p,closable:f,disabledScroller:y,withDecorator:j,...b}=e;return{...b,icon:null,centered:!0,title:null,maskClosable:!!b.hasOwnProperty("maskClosable")&&b.maskClosable,destroyOnClose:!0,footer:null,closable:!1,onCancel:_,className:i()(s,a.modal,a[d],{[a["right-options-modal"]]:l}),...(g=d,"large"===g?{width:"".concat(Math.min(window.innerWidth-64,1500),"px")}:"small"===g?{width:"600px"}:{width:"1000px"}),children:(0,h.jsx)(c.IntlProvider,{importMessages:r,moduleName:"Modal",children:C({withDecorator:j,title:m,closable:f,onClose:_,onConfirm:u,onCancel:p,footer:t,footerButtons:n,rightOptions:l,disabledScroller:y,children:o})})};var g},g=e=>(0,h.jsx)(n.Modal,{...b(e)});g.defaultProps={size:"default"};const x=()=>{const{modal:e}=n.App.useApp();return o=>{const l={},{children:t,...n}=b({onClose:()=>l.close(),...o}),{destroy:s}=e.info({...n,content:t});return l.close=s,l}},w=()=>{const{modal:e}=n.App.useApp();return o=>{const l={},{type:t,icon:s,title:r,danger:c,wrapClassName:m,message:_,iconSetting:u={},confirmType:p="info",...f}={onClose:()=>l.close(),maskClosable:!1,...o},y=Object.assign({},{info:"icon-xinxi-tianchong",confirm:"icon-tishi-tianchong",warning:"icon-tishi-tianchong",error:"icon-shibai",success:"icon-chenggong"},u);if(e[t]){const{destroy:o}=e[t]({...f,icon:null,wrapClassName:i()(a["confirm-modal-wrap"],m,{[a["is-danger"]]:c}),title:(0,h.jsx)(n.Space,{direction:"vertical",onClick:e=>{e.stopPropagation()},children:r&&(0,h.jsxs)(n.Space,{size:0,align:"start",className:a.title,children:[(0,h.jsx)(d.default,{className:i()("title-icon","title-icon-".concat("confirm"===t?p:t)),type:s||y["confirm"===t?p:t]}),r]})}),content:(0,h.jsxs)(n.Space,{size:0,align:"start",className:i()(a.content,{[a["has-title"]]:r}),children:[!r&&(0,h.jsx)(d.default,{className:i()("title-icon","title-icon-".concat("confirm"===t?p:t)),type:s||y["confirm"===t?p:t]}),_]})});l.close=o}return l}},v=g,N=e=>{let{items:o,className:l,activeKey:t,withDecorator:s,defaultActiveKey:a,onChange:r,...c}=e;return{...c,className:i()(l,"tabs-modal"),withDecorator:e=>{const l=l=>(0,h.jsx)(n.Tabs,{items:o.map((o=>{let{withDecorator:t,...n}=o;return Object.assign({},n,{children:"function"===typeof t?t((o=>e(Object.assign({},l,o,{children:n.children})))):e(Object.assign({},l,{children:n.children}))})})),destroyInactiveTabPane:!0,activeKey:t,defaultActiveKey:a,onChange:r});return"function"===typeof s?s(l):l()},children:e=>{let{children:o,...l}=e;return"function"===typeof o?o(l):o}}},D=e=>(0,h.jsx)(v,{...N(e)}),k=()=>{const e=x();return o=>e(N(o))};var M=l(81220);const P=e=>{const o=k();return(0,h.jsx)(M.Z,{...e,modalFunc:o})},S=e=>{const o=x();return(0,h.jsx)(M.Z,{...e,modalFunc:o})}},26035:()=>{}}]);
//# sourceMappingURL=8517.b9ea6f29.chunk.js.map