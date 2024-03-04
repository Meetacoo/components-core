"use strict";(self.webpackChunk_kne_components_components_core=self.webpackChunk_kne_components_components_core||[]).push([[2517,9034],{17342:(o,e,t)=>{t.d(e,{A:()=>s});var l=t(8762),n=t.n(l);t(46733);const s=n()},3382:(o,e,t)=>{t.r(e),t.d(e,{ModalButton:()=>S,TabsModal:()=>k,TabsModalButton:()=>P,default:()=>v,useConfirmModal:()=>w,useModal:()=>x,useTabsModal:()=>M});var l=t(73884),n=t(55199),s=t(83136),i=t.n(s);const a={modal:"style_modal__Pm3cF__otc6t",large:"style_large__iaqVE__otc6t","modal-body-inner":"style_modal-body-inner__4PhpA__otc6t","modal-title":"style_modal-title__dswaw__otc6t","modal-outer":"style_modal-outer__r3SkX__otc6t","modal-body":"style_modal-body__jQJSI__otc6t","right-options-modal":"style_right-options-modal__FajDP__otc6t","right-options-col":"style_right-options-col__3ilee__otc6t","is-disabled-scroller":"style_is-disabled-scroller__PmHyk__otc6t","modal-footer":"style_modal-footer__-prbN__otc6t","modal-close":"style_modal-close__Oa5Kl__otc6t","confirm-modal-wrap":"style_confirm-modal-wrap__YFImr__otc6t","is-danger":"style_is-danger__H5110__otc6t",title:"style_title__orTym__otc6t",content:"style_content__k6MIF__otc6t","has-title":"style_has-title__qy0Wp__otc6t"},r=o=>({"en-US":()=>t.e(4628).then(t.bind(t,74628)),"zh-CN":()=>t.e(7478).then(t.bind(t,87478))}[o]());var c=t(58609),d=t(64671);const m=(o,e)=>"function"===typeof o?o(e):o;var _=t(81014),u=t(17342),h=t(70579);const p="Modal",f=o=>{let{options:e,children:t}=o;return e?(0,h.jsxs)(n.Row,{wrap:!1,children:[(0,h.jsx)(n.Col,{span:18,className:a["right-options-col"],children:t}),(0,h.jsx)(n.Col,{span:6,className:a["right-options-col"],children:e})]}):t},y=o=>{let{footer:e,footerButtons:t,onConfirm:s,onCancel:i,onClose:a}=o;return(0,h.jsxs)(n.Row,{gutter:10,wrap:!1,children:[(0,h.jsx)(n.Col,{flex:1,children:e}),Array.isArray(t)&&0===t.length?null:(0,h.jsx)(n.Col,{children:(0,h.jsx)(n.Space,{children:(t||[{children:(0,h.jsx)(c.IntlProvider,{importMessages:r,moduleName:p,children:(0,h.jsx)(c.FormattedMessage,{id:"Cancel",moduleName:p})}),onClick:i},{type:"primary",children:(0,h.jsx)(c.IntlProvider,{importMessages:r,moduleName:p,children:(0,h.jsx)(c.FormattedMessage,{id:"Confirm",moduleName:p})}),onClick:s}]).filter((o=>"function"===typeof(null===o||void 0===o?void 0:o.display)?null===o||void 0===o?void 0:o.display():!1!==(null===o||void 0===o?void 0:o.display))).map(((o,e)=>{let{ButtonComponent:t,onClick:n,autoClose:s=!0,display:i,...r}=o;const c=t||_.default;return(0,l.createElement)(c,{...r,key:e,onClick:async function(){const o=await Promise.resolve(n&&n(...arguments));return s&&!1!==o&&a&&a(),o}})}))})})]})},C=o=>{let{title:e,footer:t,disabledScroller:s,footerButtons:r,onClose:c,closable:m,onConfirm:_,onCancel:p,children:f}=o;const C=(0,l.useRef)(null);return(0,h.jsxs)("div",{className:a["modal-outer"],"data-testid":"components-core-modal",children:[!1===m?null:(0,h.jsx)(n.Button,{"data-testid":"components-core-modal-close-btn",className:a["modal-close"],type:"text",icon:(0,h.jsx)(d.default,{type:"icon-close-thin"}),onClick:o=>{o.stopPropagation(),c&&c()}}),e&&(0,h.jsx)("div",{className:a["modal-title"],children:e}),(0,h.jsx)(u.A,{className:i()(a["modal-body"],{[a["is-disabled-scroller"]]:s},"modal-body"),ref:C,children:(0,h.jsx)("div",{className:i()(a["modal-body-inner"],"modal-body-inner"),children:f})}),null!==t||r?(0,h.jsx)("div",{className:i()(a["modal-footer"],"modal-footer"),children:(0,h.jsx)(y,{footer:t,footerButtons:r,onConfirm:_,onCancel:p,onClose:c})}):null]})},b=o=>{let{withDecorator:e,footerButtons:t,title:l,closable:n,onClose:s,onConfirm:i,onCancel:a,footer:r,rightOptions:c,disabledScroller:d,children:_}=o;const u=o=>(o=Object.assign({},{title:l},o),(0,h.jsx)(C,{title:m(o.title,{...o,close:s}),closable:n,onClose:s,onConfirm:i,onCancel:a,footerButtons:m(t,{...o,close:s}),disabledScroller:d,footer:m(r,{...o,close:s}),children:(0,h.jsx)(f,{options:m(c,{...o,close:s}),children:m(_,{...o,close:s})})}));return"function"===typeof e?e(u):u({})},g=o=>{let{children:e,rightOptions:t,footer:l,footerButtons:n,className:s,size:d,title:m,onClose:_,onConfirm:u,onCancel:p,closable:f,disabledScroller:y,withDecorator:C,...g}=o;return{...g,icon:null,centered:!0,title:null,maskClosable:!!g.hasOwnProperty("maskClosable")&&g.maskClosable,destroyOnClose:!0,footer:null,closable:!1,onCancel:_,className:i()(s,a.modal,a[d],{[a["right-options-modal"]]:t}),...(j=d,"large"===j?{width:"".concat(Math.min(window.innerWidth-64,1500),"px")}:"small"===j?{width:"600px"}:{width:"1000px"}),children:(0,h.jsx)(c.IntlProvider,{importMessages:r,moduleName:"Modal",children:b({withDecorator:C,title:m,closable:f,onClose:_,onConfirm:u,onCancel:p,footer:l,footerButtons:n,rightOptions:t,disabledScroller:y,children:e})})};var j},j=o=>(0,h.jsx)(n.Modal,{...g(o)});j.defaultProps={size:"default"};const x=()=>{const{modal:o}=n.App.useApp();return e=>{const t={},{children:l,...n}=g({onClose:()=>t.close(),...e}),{destroy:s}=o.info({...n,content:l});return t.close=s,t}},w=()=>{const{modal:o}=n.App.useApp();return e=>{const t={},{type:l,icon:s,title:r,danger:c,wrapClassName:m,message:_,iconSetting:u={},confirmType:p="info",...f}={onClose:()=>t.close(),maskClosable:!1,...e},y=Object.assign({},{info:"icon-xinxi-tianchong",confirm:"icon-tishi-tianchong",warning:"icon-tishi-tianchong",error:"icon-shibai",success:"icon-chenggong"},u);if(o[l]){const{destroy:e}=o[l]({...f,icon:null,wrapClassName:i()(a["confirm-modal-wrap"],m,{[a["is-danger"]]:c}),title:(0,h.jsx)(n.Space,{direction:"vertical",onClick:o=>{o.stopPropagation()},children:r&&(0,h.jsxs)(n.Space,{size:0,align:"start",className:a.title,children:[(0,h.jsx)(d.default,{className:i()("title-icon","title-icon-".concat("confirm"===l?p:l)),type:s||y["confirm"===l?p:l]}),r]})}),content:(0,h.jsxs)(n.Space,{size:0,align:"start",className:i()(a.content,{[a["has-title"]]:r}),children:[!r&&(0,h.jsx)(d.default,{className:i()("title-icon","title-icon-".concat("confirm"===l?p:l)),type:s||y["confirm"===l?p:l]}),_]})});t.close=e}return t}},v=j,N=o=>{let{items:e,className:t,activeKey:l,withDecorator:s,defaultActiveKey:a,onChange:r,...c}=o;return{...c,className:i()(t,"tabs-modal"),withDecorator:o=>{const t=t=>(0,h.jsx)(n.Tabs,{items:e.map((e=>{let{withDecorator:l,...n}=e;return Object.assign({},n,{children:"function"===typeof l?l((e=>o(Object.assign({},t,e,{children:n.children})))):o(Object.assign({},t,{children:n.children}))})})),destroyInactiveTabPane:!0,activeKey:l,defaultActiveKey:a,onChange:r});return"function"===typeof s?s(t):t()},children:o=>{let{children:e,...t}=o;return"function"===typeof e?e(t):e}}},k=o=>(0,h.jsx)(v,{...N(o)}),M=()=>{const o=x();return e=>o(N(e))};var A=t(73025);const P=o=>{const e=M();return(0,h.jsx)(A.A,{...o,modalFunc:e})},S=o=>{const e=x();return(0,h.jsx)(A.A,{...o,modalFunc:e})}},46733:()=>{}}]);
//# sourceMappingURL=2517.9555a943.chunk.js.map