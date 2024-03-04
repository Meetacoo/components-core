"use strict";(self.webpackChunk_kne_components_components_core=self.webpackChunk_kne_components_components_core||[]).push([[2517,9034],{17342:(e,o,t)=>{t.d(o,{A:()=>s});var l=t(8762),n=t.n(l);t(46733);const s=n()},3382:(e,o,t)=>{t.r(o),t.d(o,{ModalButton:()=>A,TabsModal:()=>N,TabsModalButton:()=>H,default:()=>w,useConfirmModal:()=>M,useModal:()=>x,useTabsModal:()=>k});var l=t(73884),n=t(55199),s=t(83136),i=t.n(s);const a={modal:"style_modal__Pm3cF__Mq2HC",large:"style_large__iaqVE__Mq2HC","modal-body-inner":"style_modal-body-inner__4PhpA__Mq2HC","modal-title":"style_modal-title__dswaw__Mq2HC","modal-outer":"style_modal-outer__r3SkX__Mq2HC","modal-body":"style_modal-body__jQJSI__Mq2HC","right-options-modal":"style_right-options-modal__FajDP__Mq2HC","right-options-col":"style_right-options-col__3ilee__Mq2HC","is-disabled-scroller":"style_is-disabled-scroller__PmHyk__Mq2HC","modal-footer":"style_modal-footer__-prbN__Mq2HC","modal-close":"style_modal-close__Oa5Kl__Mq2HC","confirm-modal-wrap":"style_confirm-modal-wrap__YFImr__Mq2HC","is-danger":"style_is-danger__H5110__Mq2HC",title:"style_title__orTym__Mq2HC",content:"style_content__k6MIF__Mq2HC","has-title":"style_has-title__qy0Wp__Mq2HC"},r=e=>({"en-US":()=>t.e(4628).then(t.bind(t,74628)),"zh-CN":()=>t.e(7478).then(t.bind(t,87478))}[e]());var c=t(58609),d=t(64671);const m=(e,o)=>"function"===typeof e?e(o):e;var _=t(81014),u=t(17342),h=t(70579);const p="Modal",f=e=>{let{options:o,children:t}=e;return o?(0,h.jsxs)(n.Row,{wrap:!1,children:[(0,h.jsx)(n.Col,{span:18,className:a["right-options-col"],children:t}),(0,h.jsx)(n.Col,{span:6,className:a["right-options-col"],children:o})]}):t},C=e=>{let{footer:o,footerButtons:t,onConfirm:s,onCancel:i,onClose:a}=e;return(0,h.jsxs)(n.Row,{gutter:10,wrap:!1,children:[(0,h.jsx)(n.Col,{flex:1,children:o}),Array.isArray(t)&&0===t.length?null:(0,h.jsx)(n.Col,{children:(0,h.jsx)(n.Space,{children:(t||[{children:(0,h.jsx)(c.IntlProvider,{importMessages:r,moduleName:p,children:(0,h.jsx)(c.FormattedMessage,{id:"Cancel",moduleName:p})}),onClick:i},{type:"primary",children:(0,h.jsx)(c.IntlProvider,{importMessages:r,moduleName:p,children:(0,h.jsx)(c.FormattedMessage,{id:"Confirm",moduleName:p})}),onClick:s}]).filter((e=>"function"===typeof(null===e||void 0===e?void 0:e.display)?null===e||void 0===e?void 0:e.display():!1!==(null===e||void 0===e?void 0:e.display))).map(((e,o)=>{let{ButtonComponent:t,onClick:n,autoClose:s=!0,display:i,...r}=e;const c=t||_.default;return(0,l.createElement)(c,{...r,key:o,onClick:async function(){const e=await Promise.resolve(n&&n(...arguments));return s&&!1!==e&&a&&a(),e}})}))})})]})},y=e=>{let{title:o,footer:t,disabledScroller:s,footerButtons:r,onClose:c,closable:m,onConfirm:_,onCancel:p,children:f}=e;const y=(0,l.useRef)(null);return(0,h.jsxs)("div",{className:a["modal-outer"],"data-testid":"components-core-modal",children:[!1===m?null:(0,h.jsx)(n.Button,{"data-testid":"components-core-modal-close-btn",className:a["modal-close"],type:"text",icon:(0,h.jsx)(d.default,{type:"icon-close-thin"}),onClick:e=>{e.stopPropagation(),c&&c()}}),o&&(0,h.jsx)("div",{className:a["modal-title"],children:o}),(0,h.jsx)(u.A,{className:i()(a["modal-body"],{[a["is-disabled-scroller"]]:s},"modal-body"),ref:y,children:(0,h.jsx)("div",{className:i()(a["modal-body-inner"],"modal-body-inner"),children:f})}),null!==t||r?(0,h.jsx)("div",{className:i()(a["modal-footer"],"modal-footer"),children:(0,h.jsx)(C,{footer:t,footerButtons:r,onConfirm:_,onCancel:p,onClose:c})}):null]})},b=e=>{let{withDecorator:o,footerButtons:t,title:l,closable:n,onClose:s,onConfirm:i,onCancel:a,footer:r,rightOptions:c,disabledScroller:d,children:_}=e;const u=e=>(e=Object.assign({},{title:l},e),(0,h.jsx)(y,{title:m(e.title,{...e,close:s}),closable:n,onClose:s,onConfirm:i,onCancel:a,footerButtons:m(t,{...e,close:s}),disabledScroller:d,footer:m(r,{...e,close:s}),children:(0,h.jsx)(f,{options:m(c,{...e,close:s}),children:m(_,{...e,close:s})})}));return"function"===typeof o?o(u):u({})},g=e=>{let{children:o,rightOptions:t,footer:l,footerButtons:n,className:s,size:d,title:m,onClose:_,onConfirm:u,onCancel:p,closable:f,disabledScroller:C,withDecorator:y,...g}=e;return{...g,icon:null,centered:!0,title:null,maskClosable:!!g.hasOwnProperty("maskClosable")&&g.maskClosable,destroyOnClose:!0,footer:null,closable:!1,onCancel:_,className:i()(s,a.modal,a[d],{[a["right-options-modal"]]:t}),...(j=d,"large"===j?{width:"".concat(Math.min(window.innerWidth-64,1500),"px")}:"small"===j?{width:"600px"}:{width:"1000px"}),children:(0,h.jsx)(c.IntlProvider,{importMessages:r,moduleName:"Modal",children:b({withDecorator:y,title:m,closable:f,onClose:_,onConfirm:u,onCancel:p,footer:l,footerButtons:n,rightOptions:t,disabledScroller:C,children:o})})};var j},j=e=>(0,h.jsx)(n.Modal,{...g(e)});j.defaultProps={size:"default"};const x=()=>{const{modal:e}=n.App.useApp();return o=>{const t={},{children:l,...n}=g({onClose:()=>t.close(),...o}),{destroy:s}=e.info({...n,content:l});return t.close=s,t}},M=()=>{const{modal:e}=n.App.useApp();return o=>{const t={},{type:l,icon:s,title:r,danger:c,wrapClassName:m,message:_,iconSetting:u={},confirmType:p="info",...f}={onClose:()=>t.close(),maskClosable:!1,...o},C=Object.assign({},{info:"icon-xinxi-tianchong",confirm:"icon-tishi-tianchong",warning:"icon-tishi-tianchong",error:"icon-shibai",success:"icon-chenggong"},u);if(e[l]){const{destroy:o}=e[l]({...f,icon:null,wrapClassName:i()(a["confirm-modal-wrap"],m,{[a["is-danger"]]:c}),title:(0,h.jsx)(n.Space,{direction:"vertical",onClick:e=>{e.stopPropagation()},children:r&&(0,h.jsxs)(n.Space,{size:0,align:"start",className:a.title,children:[(0,h.jsx)(d.default,{className:i()("title-icon","title-icon-".concat("confirm"===l?p:l)),type:s||C["confirm"===l?p:l]}),r]})}),content:(0,h.jsxs)(n.Space,{size:0,align:"start",className:i()(a.content,{[a["has-title"]]:r}),children:[!r&&(0,h.jsx)(d.default,{className:i()("title-icon","title-icon-".concat("confirm"===l?p:l)),type:s||C["confirm"===l?p:l]}),_]})});t.close=o}return t}},w=j,v=e=>{let{items:o,className:t,activeKey:l,withDecorator:s,defaultActiveKey:a,onChange:r,...c}=e;return{...c,className:i()(t,"tabs-modal"),withDecorator:e=>{const t=t=>(0,h.jsx)(n.Tabs,{items:o.map((o=>{let{withDecorator:l,...n}=o;return Object.assign({},n,{children:"function"===typeof l?l((o=>e(Object.assign({},t,o,{children:n.children})))):e(Object.assign({},t,{children:n.children}))})})),destroyInactiveTabPane:!0,activeKey:l,defaultActiveKey:a,onChange:r});return"function"===typeof s?s(t):t()},children:e=>{let{children:o,...t}=e;return"function"===typeof o?o(t):o}}},N=e=>(0,h.jsx)(w,{...v(e)}),k=()=>{const e=x();return o=>e(v(o))};var q=t(73025);const H=e=>{const o=k();return(0,h.jsx)(q.A,{...e,modalFunc:o})},A=e=>{const o=x();return(0,h.jsx)(q.A,{...e,modalFunc:o})}},46733:()=>{}}]);
//# sourceMappingURL=2517.90539021.chunk.js.map