"use strict";(self.webpackChunk_kne_components_core=self.webpackChunk_kne_components_core||[]).push([[3308],{64998:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(55676),s=n(86122),o=n(6098),l=n.n(o),a=n(7101),c=n.n(a);const i={scroller:"style_scroller__EfuqR__EG6bw","scroller-inner":"style_scroller-inner__NJSE0__EG6bw","is-moving":"style_is-moving__jGuy0__EG6bw"};var u=n(80184);const d=e=>{let{onScroll:t,getContainer:n,...o}=e;const l=(0,s.useRef)(0),[a,d]=(0,s.useState)(!1),m=(0,s.useRef)(a);m.current=a;const h=(0,s.useRef)(t);h.current=t;const g=(0,s.useRef)(1);return g.current=o.width/o.innerWidth,(0,s.useEffect)((()=>{const e=e=>{m.current&&h.current(g.current*(e.clientX-l.current)),l.current=e.clientX},t=()=>{d(!1)};return document.addEventListener("mousemove",e,!0),document.addEventListener("mouseup",t,!0),()=>{document.removeEventListener("mousemove",e,!0),document.removeEventListener("mouseup",t,!0)}}),[]),(0,r.createPortal)(o.hasScroller?(0,u.jsx)("div",{className:i.scroller,style:{left:o.left,width:o.width,height:15},children:(0,u.jsx)("div",{className:c()(i["scroller-inner"],{[i["is-moving"]]:a}),style:{width:o.innerWidth,left:o.innerLeft},onMouseDown:e=>{e.preventDefault(),l.current=e.clientX,d(!0)}})}):null,n()||document.body)},m=e=>{let{className:t,scroller:n,getScrollTarget:r,children:o}=e;const[a,m]=(0,s.useState)({left:0,width:0,innerLeft:0,innerWidth:0,height:0,hasScroller:!1}),h=(0,s.useRef)(null),g=l()((()=>h.current&&r(h.current))),p=(0,s.useRef)();return p.current="object"===typeof n&&"function"===typeof n.getContainer?n.getContainer:()=>null,(0,s.useEffect)((()=>{const e=p.current()||document.documentElement;let t;const n=()=>{if(!t)return;const{left:n,width:r,top:s,height:o}=t.getBoundingClientRect(),l=t.offsetHeight-t.clientHeight||15,a=r*t.clientWidth/t.scrollWidth-6,c=t.scrollLeft*t.clientWidth/t.scrollWidth+2,i=e.getBoundingClientRect();m((u=>Object.assign({},u,{left:n,width:r,innerLeft:c,innerWidth:a,height:l,hasScroller:t.scrollWidth-t.clientWidth>0&&(e===document.documentElement?s+o-e.offsetHeight>0&&s<e.offsetHeight:s<i.top+i.height&&s+o>i.top+i.height)})))},r=new ResizeObserver(n);return new ResizeObserver((()=>{t=g(),t&&(r.disconnect(),n(),Array.from(t.children).forEach((e=>{r.observe(e)})),t.addEventListener("scroll",n))})).observe(h.current),window.addEventListener("scroll",n),e.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n),e.removeEventListener("scroll",n)}}),[g]),n?(0,u.jsxs)("div",{className:c()(i["scroller-outer"],t),ref:h,style:{"--scroller-bar-height":null!==a&&void 0!==a&&a.hasScroller?"15px":"0px"},children:[o,(0,u.jsx)(d,{...a,getContainer:p.current,onScroll:e=>{g().scrollLeft+=e}})]}):o};m.defaultProps={scroller:!0,getScrollTarget:()=>document.querySelector(".simplebar-content-wrapper")};const h=m},41767:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_,useFeatureCall:()=>x});var r=n(86122),s=n(43682),o=n(26181),l=n.n(o),a=n(49151),c=n.n(a),i=n(24242),u=n.n(i),d=n(80184);const m=(e,t,n)=>{e&&(Array.isArray(e)?e.forEach((e=>{m(e,t,n)})):(t(Object.assign({},u()(e,["children"]),{parentId:n})),m(e.children,t,n?n+":"+e.id:e.id)))},h=c()((e=>{const t=(()=>{const t=new Map;return m(e,(e=>{t.set(e.parentId?e.parentId+":"+e.id:e.id,e)})),t})(),n=(e=>Array.from(e.keys()).filter((t=>{const n=e.get(t);return!(Array.isArray(n.dependencies)&&n.dependencies.length>0&&n.dependencies.some((n=>!e.get(t))))})))(t);return{profile:e,features:n,profileMap:t}})),g=(e,t)=>{let{profileMap:n,features:r}=t;const s=n.get(e);return-1!==r.indexOf(e)&&!0!==s.close&&l()(s,"dependencies",[]).every((t=>{const s=n.get(e);return r.indexOf(t)>-1&&!0!==s.close}))},p=(0,r.createContext)(null),{Provider:f}=p,x=e=>{const{features:t,profile:n,profileMap:o,debug:a}=(()=>{const e=(0,s.usePreset)(),{profile:t,debug:n}=l()(e,"features",{debug:!1,profile:{}});return Object.assign({},h(t),{debug:n})})(),c="system"===n.type?n.id:"root",i=(0,r.useContext)(p),u=i?i+":"+e:c+":"+e;return(0,r.useEffect)((()=>{t&&t.length>0&&a&&console.log("[featureId] ".concat(u,",[state] ").concat(g(u,{features:t,profileMap:o})),o.get(u))}),[t,o,a,u]),{isPass:!(e&&t&&t.length>0)||g(u,{features:t,profileMap:o}),currentId:u,feature:o.get(u)}},_=e=>{let{id:t,children:n}=e;const{isPass:r,feature:s,currentId:o}=x(t);return(0,d.jsx)(f,{value:o,children:"function"===typeof n?n({isPass:r,options:r?l()(s,"options"):l()(s,"rejectedOptions"),currentId:o}):r&&n})}},73308:(e,t,n)=>{n.r(t),n.d(t,{Table:()=>F,default:()=>W});var r=n(2508),s=n(86122),o=n(6098),l=n.n(o),a=n(66005),c=n.n(a),i=n(7101),u=n.n(i),d=n(26181),m=n.n(d),h=n(64998),g=n(33107),p=n(87151),f=n.n(p),x=n(70290),_=n.n(x),y=n(83312);const b={"loading-container":"style_loading-container__tATe2__EG6bw","width-changer":"style_width-changer__2ZxQE__EG6bw","table-changer-setting":"style_table-changer-setting__vHBi5__EG6bw","width-changer-sign":"style_width-changer-sign__JpI-0__EG6bw","columns-control":"style_columns-control__Yt34Y__EG6bw","columns-control-content":"style_columns-control-content__1wnZG__EG6bw","columns-control-content-title":"style_columns-control-content-title__MsQpI__EG6bw","columns-control-content-scroller":"style_columns-control-content-scroller__VEy4q__EG6bw","columns-control-content-footer":"style_columns-control-content-footer__rvk74__EG6bw","columns-control-content-input":"style_columns-control-content-input__fYYyr__EG6bw","columns-control-content-list":"style_columns-control-content-list__wepM4__EG6bw","columns-control-content-item":"style_columns-control-content-item__1cPXT__EG6bw","is-drag":"style_is-drag__HRe9m__EG6bw","columns-control-content-item-icon":"style_columns-control-content-item-icon__oku-X__EG6bw","sortable-drag":"style_sortable-drag__N6+aC__EG6bw","sortable-ghost":"style_sortable-ghost__EbwXI__EG6bw","columns-control-overlay":"style_columns-control-overlay__QYEXZ__EG6bw"};var C=n(43682),w=n(80184);const j=e=>"TH"===e.tagName.toUpperCase()&&[].indexOf.call(e.classList,"ant-table-cell")>-1&&-1===[].indexOf.call(e.classList,"ant-table-selection-column")?e:null!==e.parentElement&&e.parentElement!==document.body&&j(e.parentElement),v=e=>{let{columns:t,setData:n,name:r,initColumnsData:o}=e;const c=(0,s.useRef)(null),i=(0,s.useRef)(r);i.current=r;const d=(0,s.useMemo)((()=>new Map(t.map((e=>[e.key,e])))),[t]),m=(0,s.useRef)(d);m.current=d;const{tablePageServerApis:h}=(0,C.usePreset)(),g=(0,y.useDebouncedCallback)((()=>{(0,a.getCache)().delByCacheName("TABLE_CONFIG_".concat(i.current)),h&&h.setDataFunc&&(h.setDataFunc(i.current,O),n(O))}),1e3),[p,x]=(0,s.useState)(!1),v=(0,s.useRef)(!1),A=(0,s.useRef)({index:-1,width:0}),[E,S]=(0,s.useState)({}),I=(0,s.useRef)(0),k=(0,s.useCallback)((()=>o&&o.length>0&&t.length===o.length&&_()(t,o,((e,t)=>e.key===t.id))?o.map((e=>{let{id:t,width:n,hidden:r}=e;return{id:t,width:n,hidden:r}})):t.map((e=>({id:e.key,hidden:e.hidden,width:e.width})))),[o,t]);(0,s.useEffect)((()=>{R(k())}),[k]);const[O,R]=(0,s.useState)(k),L=l()((e=>{R(e),g()})),N=(0,s.useRef)(O),M=(0,s.useRef)(O);N.current=M.current=O;const P=l()((()=>{const e=t.map((e=>({id:e.key,hidden:e.hidden,width:e.width})));M.current=e,L(e)}));return(0,s.useEffect)((()=>{if(!c.current)return;const e=e=>{const t=e.target;v.current||t.classList.contains("changer-sign")||j(t)||x(!1)},t=()=>{document.body.style.cursor="unset",v.current=!1,A.current={index:-1,width:0},x(!1)};return c.current.addEventListener("mousemove",(e=>{const t=j(e.target)||e.target,{left:n,top:r}=c.current.getBoundingClientRect(),{left:s,width:o,height:l}=t.getBoundingClientRect(),a=c.current.querySelector(".ant-table-thead"),i=a.getBoundingClientRect().top,u=Array.from(a.querySelectorAll("th")),d=Array.from(a.querySelectorAll("th:not(.ant-table-selection-column)"));if(!v.current&&j(t)&&0<e.pageX-s+8&&(A.current={index:d.indexOf(t),locationIndex:u.indexOf(t),width:o,left:s,height:l},S({left:s-n+o-8,top:i-r,height:l}),x(!0)),!v.current&&j(t)&&0>e.pageX-s+8&&x(!1),v.current&&A.current.index>-1){const t=e.pageX-I.current,n=(c.current.querySelector(".ant-table-body")||c.current.querySelector(".ant-table-content")).scrollLeft,s=Math.max(t+A.current.width,100);S({left:Math.max(f()(u.slice(0,A.current.locationIndex).map((e=>e.clientWidth)))-n,0)+s-8,top:i-r,height:A.current.height}),L((e=>{const t=e.slice(0);return t.filter((e=>{let{hidden:t}=e;return!0!==t})).forEach(((e,t)=>{var n;e.width=A.current.index===t?s:(null===(n=d[t])||void 0===n?void 0:n.clientWidth)||100})),t}))}}),!0),window.addEventListener("mouseup",t),document.addEventListener("mousemove",e,!0),()=>{document.removeEventListener("mousemove",e,!0),window.removeEventListener("mouseup",t)}}),[P,L]),{ref:c,sign:p&&(0,w.jsx)("div",{className:u()(b["width-changer-sign"],"changer-sign"),style:{top:E.top,left:E.left,height:E.height},onMouseDown:e=>{e.preventDefault(),v.current=!0,I.current=e.pageX,document.body.style.cursor="url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAMAAACgaw2xAAAANlBMVEUAAAAjIyMiIiIhISEjIyMiIiIhISEiIiIjIyMiIiIjIyMjIyMiIiIiIiIiIiIiIiIiIiL///8npLH6AAAAEHRSTlMAZm9zdnd7gISIjKq78fL+6p9oYgAAAAFiS0dEEeK1PboAAAA/SURBVBgZ1cGJDYAgEEXBh7JyKPj7r9ZkQyKUwAx7yhfurCyyDHe8lUlRf4auws/U7qHJmJgSLslYxIALkS192tYB4NtE/LQAAAAASUVORK5CYII=",") 12 10,col-resize")}}),targetColumns:O.filter((e=>{let{hidden:t}=e;return!0!==t})).map((e=>{let{id:t,width:n}=e;return Object.assign({},d.get(t),{width:n,ellipsis:!1})})),popupColumns:M.current,columnMap:m.current,setColumns:e=>{M.current=e},onConfirm:()=>{L(M.current)},onCancel:()=>{M.current=N.current},onReset:()=>{P()}}},A=e=>{const t=(0,a.withFetch)(e);return n=>{const{name:r,controllerOpen:s}=n,{tablePageServerApis:o}=(0,C.usePreset)();return s&&r&&o&&o.getDataApi?(0,w.jsx)(t,{...n,...o.getDataApi(r),cache:"TABLE_CONFIG_".concat(r),isLocal:!0,ttl:5e3,error:(0,w.jsx)(e,{...n})}):(0,w.jsx)(e,{...n})}};var E=n(55198);const S=n.n(E)()(A,(e=>t=>{let{name:n,controllerOpen:r,columns:s,data:o,setData:l,...a}=t;const{ref:c,targetColumns:i,sign:d}=v({columns:s,name:n,initColumnsData:o,setData:l});return r?(0,w.jsxs)("div",{className:u()(b["width-changer"],"table-page-columns-width-changer"),ref:c,children:[(0,w.jsx)(e,{...a,name:n,controllerOpen:r,originColumns:s,tableColumnFetchApi:{data:o,setData:l},columns:i}),d]}):(0,w.jsx)(e,{columns:s,controllerOpen:r,originColumns:s,name:n,...a})}));var I=n(41767);const k=e=>({"en-US":()=>n.e(4744).then(n.bind(n,5131)),"zh-CN":()=>n.e(1423).then(n.bind(n,71423))}[e]());var O=n(91602),R=n(98444),L=n.n(R),N=n(91243),M=n(92527),P=n(85021),z=n(14250);const{Panel:D}=r.Collapse,G=e=>{let{close:t,onCancel:n,onConfirm:o,onReset:l,columns:a,setColumns:c}=e;const[i,d]=(0,s.useState)(a),[m,h]=(0,s.useState)(""),{leftFixedColumns:g,rightFixedColumns:p,visibleColumns:f,hiddenColumns:x}=(0,s.useMemo)((()=>Object.assign({leftFixedColumns:[],rightFixedColumns:[],visibleColumns:[],hiddenColumns:[]},L()(i,(e=>"right"===e.fixed?"rightFixedColumns":!0===e.fixed||"left"===e.fixed?"leftFixedColumns":e.hidden?"hiddenColumns":"visibleColumns")))),[i]),_=e=>{d(e),c(e)};return(0,w.jsxs)("div",{className:b["columns-control-content"],children:[(0,w.jsx)("div",{className:b["columns-control-content-title"],children:(0,w.jsxs)(r.Row,{align:"middle",justify:"space-between",children:[(0,w.jsx)(r.Col,{children:"\u7f16\u8f91\u8868\u683c"}),(0,w.jsx)(r.Col,{children:(0,w.jsx)(r.Tooltip,{title:"\u6062\u590d\u9ed8\u8ba4",children:(0,w.jsx)(M.default,{type:"text",icon:(0,w.jsx)(N.default,{type:"icon-huifumorenshezhi"}),onClick:async()=>{l&&await l(),t()}})})})]})}),(0,w.jsx)("div",{className:b["columns-control-content-scroller"],children:(0,w.jsxs)(r.Collapse,{defaultActiveKey:["active","un-active"],ghost:!0,bordered:!0,children:[(0,w.jsx)(D,{header:"\u663e\u793a\u7684\u4fe1\u606f",children:(0,w.jsxs)(r.List,{className:b["columns-control-content-list"],children:[g.map((e=>(0,w.jsx)(r.List.Item,{className:b["columns-control-content-item"],children:(0,w.jsx)(r.Checkbox,{checked:!0,disabled:!0,children:e.name})},e.id))),(0,w.jsx)(z.ReactSortable,{list:f,filter:".ignore-elements",dragClass:b["sortable-drag"],ghostClass:b["sortable-ghost"],forceFallback:!0,setList:e=>{_([...g,...e,...x,...p])},animation:300,delayOnTouchStart:!0,delay:2,children:f.map((e=>(0,w.jsxs)(r.List.Item,{className:u()(b["columns-control-content-item"],b["is-drag"]),children:[(0,w.jsx)(N.default,{type:"icon-paixu",className:b["columns-control-content-item-icon"]}),(0,w.jsx)(r.Checkbox,{checked:!0,disabled:e.fixed,onChange:t=>{t.stopPropagation(),t.preventDefault();const n=i.indexOf(e),r=i.slice(0);r[n]=Object.assign({},r[n],{hidden:!0}),_(r)},children:e.name})]},e.id)))}),p.map((e=>(0,w.jsx)(r.List.Item,{className:b["columns-control-content-item"],children:(0,w.jsx)(r.Checkbox,{checked:!0,disabled:!0,children:e.name})},e.id)))]})},"active"),(0,w.jsx)(D,{header:(0,w.jsxs)(r.Row,{wrap:!1,justify:"space-between",children:[(0,w.jsx)(r.Col,{children:"\u9690\u85cf\u7684\u4fe1\u606f"}),(0,w.jsx)(r.Col,{onClick:e=>{e.stopPropagation(),e.preventDefault()},children:(0,w.jsx)(P.SearchInput,{prefix:(0,w.jsx)(N.default,{type:"icon-sousuo",size:12}),placeholder:"\u641c\u7d22",onSearch:e=>{h(e)},className:b["columns-control-content-input"],size:"small"})})]}),children:(0,w.jsx)(r.List,{dataSource:x.filter((e=>"string"===typeof e.name&&e.name.indexOf(m)>-1)),renderItem:e=>(0,w.jsx)(r.List.Item,{className:b["columns-control-content-item"],children:(0,w.jsx)(r.Checkbox,{checked:!1,onChange:t=>{t.stopPropagation(),t.preventDefault();const n=i.indexOf(e),r=i.slice(0);r[n]=Object.assign({},r[n],{hidden:!1,width:r[n].width||200}),_(r)},children:e.name})},e.id)})},"un-active")]})}),(0,w.jsxs)(r.Row,{className:b["columns-control-content-footer"],justify:"end",gutter:10,children:[(0,w.jsx)(r.Col,{children:(0,w.jsx)(r.Button,{size:"small",onClick:()=>{n&&n(),t()},children:"\u53d6\u6d88"})}),(0,w.jsx)(r.Col,{children:(0,w.jsx)(M.default,{type:"primary",size:"small",onClick:async()=>{o&&await o(),t()},children:"\u786e\u5b9a"})})]})]})},T=e=>{let{columns:t,name:n,data:o,setData:l,...a}=e;const[c,i]=(0,s.useState)(!1),{popupColumns:u,columnMap:d,setColumns:h,onConfirm:g,onCancel:p,onReset:f}=v({columns:t,name:n,initColumnsData:o,setData:l});return(0,w.jsx)(r.Popover,{...a,open:c,overlayClassName:b["columns-control-overlay"],trigger:"click",autoAdjustOverflow:!1,placement:"bottomRight",content:(0,w.jsx)(G,{columns:u.map((e=>{const t=d.get(e.id);return Object.assign({},e,{name:m()(t,"titleText")||m()(t,"title")||"\u672a\u547d\u540d\u5217",fixed:m()(t,"fixed")})})),setColumns:e=>{h(e.map((e=>{let{id:t,width:n,hidden:r}=e;return{id:t,width:n,hidden:r}})))},close:()=>i(!1),onConfirm:g,onCancel:p,onReset:f}),onOpenChange:e=>i(e),children:(0,w.jsx)("span",{className:b["table-changer-setting"],children:(0,w.jsx)(N.default,{type:"icon-shezhi"})})})},F=S((e=>{let{className:t,columns:n,originColumns:s,controllerOpen:o,tableColumnFetchApi:l,name:a,scroller:c,featureId:i,...d}=e;const{data:g,setData:p}=l||{},f=e=>{let{children:t}=e;return i?(0,w.jsx)(I.default,{id:i,children:e=>t(e)}):t({})};return(e=>(0,w.jsx)(h.Z,{className:"table-page-scroller",scroller:c,getScrollTarget:e=>e.querySelector(".ant-table-body")||e.querySelector(".ant-table-content"),children:f({children:n=>{let{options:l}=n;const c=e.filter((e=>!e.key||(!Array.isArray(m()(l,"hiddenColumns"))||-1===l.hiddenColumns.indexOf(e.key))));return(0,w.jsx)(r.Table,{...d,columns:!1===o?c:c.map(((e,t)=>c.length-1===t?{...e,title:()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("span",{children:e.title}),(0,w.jsx)(T,{data:g,columns:s,setData:p,name:a})]})}:e)),className:u()(t,"table-page")})}})}))(n)})),B=(0,a.withFetch)((e=>{let{data:t,refresh:n,reload:r,requestParams:o,fetchProps:a,isComplete:i,setData:d,loadMore:h,send:g,dataFormat:p,pagination:f,scroller:x,getColumns:_,getColumnsParams:y,className:C,columns:j,featureId:v,stickyOffset:A,...E}=e;const S=l()(p),I=l()(_),R=(0,s.useMemo)((()=>S(t)),[t,S]),L={dataSource:R.list,pagination:!!f.open&&{total:R.total,showTotal:e=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(O.FormattedMessage,{id:"Page_Total",moduleName:"TablePage",defaultMessage:"\u5171"}),(0,w.jsx)("span",{className:b.total_text,children:e}),(0,w.jsx)(O.FormattedMessage,{id:"Page_TotalCount",moduleName:"TablePage",defaultMessage:"\u6761"})]}),current:m()(o,[f.paramsType,f.current],1),pageSize:f.defaultPageSize,onChange:f.onChange?f.onChange:(e,t)=>{e!==m()(o,[f.paramsType,f.current],1)?("refresh"===f.requestType?n:r)({[f.paramsType]:{[f.current]:e,[f.pageSize]:t}}):f.onShowSizeChange&&f.onShowSizeChange(e,t)},size:f.size,showSizeChanger:f.showSizeChanger,showQuickJumper:f.showQuickJumper},className:C,style:{"--sticky-offset":A}};return(0,w.jsx)(O.IntlProvider,{importMessages:k,moduleName:"TablePage",children:(0,w.jsx)("div",{className:u()(b["loading-container"],"loading-container",{"is-loading":!i}),children:"function"!==typeof _||j?(0,w.jsx)(F,{...E,...L,columns:j,scroller:x,featureId:v}):(0,w.jsx)(c(),{data:t,params:y,loader:e=>{let{data:t,params:n}=e;return I({data:t,params:n,formatData:R})},render:e=>{let{data:t}=e;return(0,w.jsx)(F,{...E,...L,columns:t,scroller:x,featureId:v})}})})})})),q=(0,s.forwardRef)(((e,t)=>{let{pagination:n,...r}=e;const[o,l]=(0,s.useState)(20);n=Object.assign({},{showSizeChanger:!0,showQuickJumper:!0,open:!0,paramsType:"data",requestType:"reload",current:"currentPage",pageSize:"perPage",size:"default"},n);const a=(0,s.useMemo)((()=>{const e={};return r.params&&Object.keys(r.params).length>0&&(e.params={...r.params,[n.pageSize]:o}),r.data&&Object.keys(r.data).length>0&&(e.data={...r.data,[n.pageSize]:o}),e}),[r.params,r.data,n.pageSize,o]);return(0,w.jsx)(B,{...r,pagination:Object.assign({},{defaultPageSize:o,onShowSizeChange:(e,t)=>{l(t)}},n),...a,ref:t})}));q.defaultProps={controllerOpen:!0,size:"middle",stickyOffset:"var(--nav-height)",sticky:{getContainer:g.R},scroller:{getContainer:g.R},scroll:{x:"max-content"},rowKey:"id",pagination:{},dataFormat:e=>({list:e.pageData,total:e.totalCount})};const W=q}}]);
//# sourceMappingURL=3308.a9894a17.chunk.js.map