"use strict";(self.webpackChunk_kne_components_core=self.webpackChunk_kne_components_core||[]).push([[3308],{64998:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(55676),s=n(86122),o=n(6098),l=n.n(o),c=n(7101),a=n.n(c);const i={scroller:"style_scroller__EfuqR__e0vcM","scroller-inner":"style_scroller-inner__NJSE0__e0vcM","is-moving":"style_is-moving__jGuy0__e0vcM"};var u=n(80184);const d=e=>{let{onScroll:t,getContainer:n,...o}=e;const l=(0,s.useRef)(0),[c,d]=(0,s.useState)(!1),m=(0,s.useRef)(c);m.current=c;const h=(0,s.useRef)(t);h.current=t;const g=(0,s.useRef)(1);return g.current=o.width/o.innerWidth,(0,s.useEffect)((()=>{const e=e=>{m.current&&h.current(g.current*(e.clientX-l.current)),l.current=e.clientX},t=()=>{d(!1)};return document.addEventListener("mousemove",e,!0),document.addEventListener("mouseup",t,!0),()=>{document.removeEventListener("mousemove",e,!0),document.removeEventListener("mouseup",t,!0)}}),[]),(0,r.createPortal)(o.hasScroller?(0,u.jsx)("div",{className:i.scroller,style:{left:o.left,width:o.width,height:15},children:(0,u.jsx)("div",{className:a()(i["scroller-inner"],{[i["is-moving"]]:c}),style:{width:o.innerWidth,left:o.innerLeft},onMouseDown:e=>{e.preventDefault(),l.current=e.clientX,d(!0)}})}):null,n()||document.body)},m=e=>{let{className:t,scroller:n,getScrollTarget:r,children:o}=e;const[c,m]=(0,s.useState)({left:0,width:0,innerLeft:0,innerWidth:0,height:0,hasScroller:!1}),h=(0,s.useRef)(null),g=l()((()=>h.current&&r(h.current))),p=(0,s.useRef)();return p.current="object"===typeof n&&"function"===typeof n.getContainer?n.getContainer:()=>null,(0,s.useEffect)((()=>{const e=p.current()||document.documentElement;let t;const n=()=>{if(!t)return;const{left:n,width:r,top:s,height:o}=t.getBoundingClientRect(),l=t.offsetHeight-t.clientHeight||15,c=r*t.clientWidth/t.scrollWidth-6,a=t.scrollLeft*t.clientWidth/t.scrollWidth+2,i=e.getBoundingClientRect();m((u=>Object.assign({},u,{left:n,width:r,innerLeft:a,innerWidth:c,height:l,hasScroller:t.scrollWidth-t.clientWidth>0&&(e===document.documentElement?s+o-e.offsetHeight>0&&s<e.offsetHeight:s<i.top+i.height&&s+o>i.top+i.height)})))},r=new ResizeObserver(n);return new ResizeObserver((()=>{t=g(),t&&(r.disconnect(),n(),Array.from(t.children).forEach((e=>{r.observe(e)})),t.addEventListener("scroll",n))})).observe(h.current),window.addEventListener("scroll",n),e.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n),e.removeEventListener("scroll",n)}}),[g]),n?(0,u.jsxs)("div",{className:a()(i["scroller-outer"],t),ref:h,style:{"--scroller-bar-height":null!==c&&void 0!==c&&c.hasScroller?"15px":"0px"},children:[o,(0,u.jsx)(d,{...c,getContainer:p.current,onScroll:e=>{g().scrollLeft+=e}})]}):o};m.defaultProps={scroller:!0,getScrollTarget:()=>document.querySelector(".simplebar-content-wrapper")};const h=m},41767:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_,useFeatureCall:()=>x});var r=n(86122),s=n(43682),o=n(26181),l=n.n(o),c=n(49151),a=n.n(c),i=n(24242),u=n.n(i),d=n(80184);const m=(e,t,n)=>{e&&(Array.isArray(e)?e.forEach((e=>{m(e,t,n)})):(t(Object.assign({},u()(e,["children"]),{parentId:n})),m(e.children,t,n?n+":"+e.id:e.id)))},h=a()((e=>{const t=(()=>{const t=new Map;return m(e,(e=>{t.set(e.parentId?e.parentId+":"+e.id:e.id,e)})),t})(),n=(e=>Array.from(e.keys()).filter((t=>{const n=e.get(t);return!(Array.isArray(n.dependencies)&&n.dependencies.length>0&&n.dependencies.some((n=>!e.get(t))))})))(t);return{profile:e,features:n,profileMap:t}})),g=(e,t)=>{let{profileMap:n,features:r}=t;const s=n.get(e);return-1!==r.indexOf(e)&&!0!==s.close&&l()(s,"dependencies",[]).every((t=>{const s=n.get(e);return r.indexOf(t)>-1&&!0!==s.close}))},p=(0,r.createContext)(null),{Provider:f}=p,x=e=>{const{features:t,profile:n,profileMap:o,debug:c}=(()=>{const e=(0,s.usePreset)(),{profile:t,debug:n}=l()(e,"features",{debug:!1,profile:{}});return Object.assign({},h(t),{debug:n})})(),a="system"===n.type?n.id:"root",i=(0,r.useContext)(p),u=i?i+":"+e:a+":"+e;return(0,r.useEffect)((()=>{t&&t.length>0&&c&&console.log("[featureId] ".concat(u,",[state] ").concat(g(u,{features:t,profileMap:o})),o.get(u))}),[t,o,c,u]),{isPass:!(e&&t&&t.length>0)||g(u,{features:t,profileMap:o}),currentId:u,feature:o.get(u)}},_=e=>{let{id:t,children:n}=e;const{isPass:r,feature:s,currentId:o}=x(t);return(0,d.jsx)(f,{value:o,children:"function"===typeof n?n({isPass:r,options:r?l()(s,"options"):l()(s,"rejectedOptions"),currentId:o}):r&&n})}},73308:(e,t,n)=>{n.r(t),n.d(t,{Table:()=>B,default:()=>X});var r=n(2508),s=n(86122),o=n(6098),l=n.n(o),c=n(66005),a=n.n(c),i=n(7101),u=n.n(i),d=n(26181),m=n.n(d),h=n(64998),g=n(33107),p=n(87151),f=n.n(p),x=n(70290),_=n.n(x),y=n(83312);const C={"loading-container":"style_loading-container__tATe2__e0vcM","width-changer":"style_width-changer__2ZxQE__e0vcM","table-changer-setting":"style_table-changer-setting__vHBi5__e0vcM","width-changer-sign":"style_width-changer-sign__JpI-0__e0vcM","columns-control":"style_columns-control__Yt34Y__e0vcM","columns-control-content":"style_columns-control-content__1wnZG__e0vcM","columns-control-content-title":"style_columns-control-content-title__MsQpI__e0vcM","columns-control-content-scroller":"style_columns-control-content-scroller__VEy4q__e0vcM","columns-control-content-footer":"style_columns-control-content-footer__rvk74__e0vcM","columns-control-content-input":"style_columns-control-content-input__fYYyr__e0vcM","columns-control-content-list":"style_columns-control-content-list__wepM4__e0vcM","columns-control-content-item":"style_columns-control-content-item__1cPXT__e0vcM","is-drag":"style_is-drag__HRe9m__e0vcM","columns-control-content-item-icon":"style_columns-control-content-item-icon__oku-X__e0vcM","sortable-drag":"style_sortable-drag__N6+aC__e0vcM","sortable-ghost":"style_sortable-ghost__EbwXI__e0vcM","columns-control-overlay":"style_columns-control-overlay__QYEXZ__e0vcM"};var v=n(43682),j=n(80184);const b=e=>"TH"===e.tagName.toUpperCase()&&[].indexOf.call(e.classList,"ant-table-cell")>-1&&-1===[].indexOf.call(e.classList,"ant-table-selection-column")?e:null!==e.parentElement&&e.parentElement!==document.body&&b(e.parentElement),w=e=>{let{columns:t,setData:n,name:r,initColumnsData:o}=e;const a=(0,s.useRef)(null),i=(0,s.useRef)(r);i.current=r;const d=(0,s.useMemo)((()=>new Map(t.map((e=>[e.key,e])))),[t]),m=(0,s.useRef)(d);m.current=d;const{tablePageServerApis:h}=(0,v.usePreset)(),g=(0,y.useDebouncedCallback)((()=>{(0,c.getCache)().delByCacheName("TABLE_CONFIG_".concat(i.current)),h&&h.setDataFunc&&(h.setDataFunc(i.current,k),n(k))}),1e3),[p,x]=(0,s.useState)(!1),w=(0,s.useRef)(!1),A=(0,s.useRef)({index:-1,width:0}),[S,I]=(0,s.useState)({}),M=(0,s.useRef)(0),E=(0,s.useCallback)((()=>o&&o.length>0&&t.length===o.length&&_()(t,o,((e,t)=>e.key===t.id))?o.map((e=>{let{id:t,width:n,hidden:r}=e;return{id:t,width:n,hidden:r}})):t.map((e=>({id:e.key,hidden:e.hidden,width:e.width})))),[o,t]);(0,s.useEffect)((()=>{O(E())}),[E]);const[k,O]=(0,s.useState)(E),R=l()((e=>{O(e),g()})),L=(0,s.useRef)(k),N=(0,s.useRef)(k);L.current=N.current=k;const P=l()((()=>{const e=t.map((e=>({id:e.key,hidden:e.hidden,width:e.width})));N.current=e,R(e)}));return(0,s.useEffect)((()=>{if(!a.current)return;const e=e=>{const t=e.target;w.current||t.classList.contains("changer-sign")||b(t)||x(!1)},t=()=>{document.body.style.cursor="unset",w.current=!1,A.current={index:-1,width:0},x(!1)};return a.current.addEventListener("mousemove",(e=>{const t=b(e.target)||e.target,{left:n,top:r}=a.current.getBoundingClientRect(),{left:s,width:o,height:l}=t.getBoundingClientRect(),c=a.current.querySelector(".ant-table-thead"),i=c.getBoundingClientRect().top,u=Array.from(c.querySelectorAll("th")),d=Array.from(c.querySelectorAll("th:not(.ant-table-selection-column)"));if(!w.current&&b(t)&&0<e.pageX-s+8&&(A.current={index:d.indexOf(t),locationIndex:u.indexOf(t),width:o,left:s,height:l},I({left:s-n+o-8,top:i-r,height:l}),x(!0)),!w.current&&b(t)&&0>e.pageX-s+8&&x(!1),w.current&&A.current.index>-1){const t=e.pageX-M.current,n=(a.current.querySelector(".ant-table-body")||a.current.querySelector(".ant-table-content")).scrollLeft,s=Math.max(t+A.current.width,100);I({left:Math.max(f()(u.slice(0,A.current.locationIndex).map((e=>e.clientWidth)))-n,0)+s-8,top:i-r,height:A.current.height}),R((e=>{const t=e.slice(0);return t.filter((e=>{let{hidden:t}=e;return!0!==t})).forEach(((e,t)=>{var n;e.width=A.current.index===t?s:(null===(n=d[t])||void 0===n?void 0:n.clientWidth)||100})),t}))}}),!0),window.addEventListener("mouseup",t),document.addEventListener("mousemove",e,!0),()=>{document.removeEventListener("mousemove",e,!0),window.removeEventListener("mouseup",t)}}),[P,R]),{ref:a,sign:p&&(0,j.jsx)("div",{className:u()(C["width-changer-sign"],"changer-sign"),style:{top:S.top,left:S.left,height:S.height},onMouseDown:e=>{e.preventDefault(),w.current=!0,M.current=e.pageX,document.body.style.cursor="url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAMAAACgaw2xAAAANlBMVEUAAAAjIyMiIiIhISEjIyMiIiIhISEiIiIjIyMiIiIjIyMjIyMiIiIiIiIiIiIiIiIiIiL///8npLH6AAAAEHRSTlMAZm9zdnd7gISIjKq78fL+6p9oYgAAAAFiS0dEEeK1PboAAAA/SURBVBgZ1cGJDYAgEEXBh7JyKPj7r9ZkQyKUwAx7yhfurCyyDHe8lUlRf4auws/U7qHJmJgSLslYxIALkS192tYB4NtE/LQAAAAASUVORK5CYII=",") 12 10,col-resize")}}),targetColumns:k.filter((e=>{let{hidden:t}=e;return!0!==t})).map((e=>{let{id:t,width:n}=e;return Object.assign({},d.get(t),{width:n,ellipsis:!1})})),popupColumns:N.current,columnMap:m.current,setColumns:e=>{N.current=e},onConfirm:()=>{R(N.current)},onCancel:()=>{N.current=L.current},onReset:()=>{P()}}},A=e=>{const t=(0,c.withFetch)(e);return n=>{const{name:r,controllerOpen:s}=n,{tablePageServerApis:o}=(0,v.usePreset)();return s&&r&&o&&o.getDataApi?(0,j.jsx)(t,{...n,...o.getDataApi(r),cache:"TABLE_CONFIG_".concat(r),isLocal:!0,ttl:5e3,error:(0,j.jsx)(e,{...n})}):(0,j.jsx)(e,{...n})}};var S=n(55198);const I=n.n(S)()(A,(e=>t=>{let{name:n,controllerOpen:r,columns:s,data:o,setData:l,...c}=t;const{ref:a,targetColumns:i,sign:d}=w({columns:s,name:n,initColumnsData:o,setData:l});return r?(0,j.jsxs)("div",{className:u()(C["width-changer"],"table-page-columns-width-changer"),ref:a,children:[(0,j.jsx)(e,{...c,name:n,controllerOpen:r,originColumns:s,tableColumnFetchApi:{data:o,setData:l},columns:i}),d]}):(0,j.jsx)(e,{columns:s,controllerOpen:r,originColumns:s,name:n,...c})}));var M=n(41767);const E=e=>({"en-US":()=>n.e(4744).then(n.bind(n,5131)),"zh-CN":()=>n.e(1423).then(n.bind(n,71423))}[e]());var k=n(91602),O=n(98444),R=n.n(O),L=n(91243),N=n(92527),P=n(85021),z=n(14250);const{Panel:D}=r.Collapse,T=e=>{let{close:t,onCancel:n,onConfirm:o,onReset:l,columns:c,setColumns:a}=e;const[i,d]=(0,s.useState)(c),[m,h]=(0,s.useState)(""),{leftFixedColumns:g,rightFixedColumns:p,visibleColumns:f,hiddenColumns:x}=(0,s.useMemo)((()=>Object.assign({leftFixedColumns:[],rightFixedColumns:[],visibleColumns:[],hiddenColumns:[]},R()(i,(e=>"right"===e.fixed?"rightFixedColumns":!0===e.fixed||"left"===e.fixed?"leftFixedColumns":e.hidden?"hiddenColumns":"visibleColumns")))),[i]),_=e=>{d(e),a(e)};return(0,j.jsxs)("div",{className:C["columns-control-content"],children:[(0,j.jsx)("div",{className:C["columns-control-content-title"],children:(0,j.jsxs)(r.Row,{align:"middle",justify:"space-between",children:[(0,j.jsx)(r.Col,{children:"\u7f16\u8f91\u8868\u683c"}),(0,j.jsx)(r.Col,{children:(0,j.jsx)(r.Tooltip,{title:"\u6062\u590d\u9ed8\u8ba4",children:(0,j.jsx)(N.default,{type:"text",icon:(0,j.jsx)(L.default,{type:"icon-huifumorenshezhi"}),onClick:async()=>{l&&await l(),t()}})})})]})}),(0,j.jsx)("div",{className:C["columns-control-content-scroller"],children:(0,j.jsxs)(r.Collapse,{defaultActiveKey:["active","un-active"],ghost:!0,bordered:!0,children:[(0,j.jsx)(D,{header:"\u663e\u793a\u7684\u4fe1\u606f",children:(0,j.jsxs)(r.List,{className:C["columns-control-content-list"],children:[g.map((e=>(0,j.jsx)(r.List.Item,{className:C["columns-control-content-item"],children:(0,j.jsx)(r.Checkbox,{checked:!0,disabled:!0,children:e.name})},e.id))),(0,j.jsx)(z.ReactSortable,{list:f,filter:".ignore-elements",dragClass:C["sortable-drag"],ghostClass:C["sortable-ghost"],forceFallback:!0,setList:e=>{_([...g,...e,...x,...p])},animation:300,delayOnTouchStart:!0,delay:2,children:f.map((e=>(0,j.jsxs)(r.List.Item,{className:u()(C["columns-control-content-item"],C["is-drag"]),children:[(0,j.jsx)(L.default,{type:"icon-paixu",className:C["columns-control-content-item-icon"]}),(0,j.jsx)(r.Checkbox,{checked:!0,disabled:e.fixed,onChange:t=>{t.stopPropagation(),t.preventDefault();const n=i.indexOf(e),r=i.slice(0);r[n]=Object.assign({},r[n],{hidden:!0}),_(r)},children:e.name})]},e.id)))}),p.map((e=>(0,j.jsx)(r.List.Item,{className:C["columns-control-content-item"],children:(0,j.jsx)(r.Checkbox,{checked:!0,disabled:!0,children:e.name})},e.id)))]})},"active"),(0,j.jsx)(D,{header:(0,j.jsxs)(r.Row,{wrap:!1,justify:"space-between",children:[(0,j.jsx)(r.Col,{children:"\u9690\u85cf\u7684\u4fe1\u606f"}),(0,j.jsx)(r.Col,{onClick:e=>{e.stopPropagation(),e.preventDefault()},children:(0,j.jsx)(P.SearchInput,{prefix:(0,j.jsx)(L.default,{type:"icon-sousuo",size:12}),placeholder:"\u641c\u7d22",onSearch:e=>{h(e)},className:C["columns-control-content-input"],size:"small"})})]}),children:(0,j.jsx)(r.List,{dataSource:x.filter((e=>"string"===typeof e.name&&e.name.indexOf(m)>-1)),renderItem:e=>(0,j.jsx)(r.List.Item,{className:C["columns-control-content-item"],children:(0,j.jsx)(r.Checkbox,{checked:!1,onChange:t=>{t.stopPropagation(),t.preventDefault();const n=i.indexOf(e),r=i.slice(0);r[n]=Object.assign({},r[n],{hidden:!1,width:r[n].width||200}),_(r)},children:e.name})},e.id)})},"un-active")]})}),(0,j.jsxs)(r.Row,{className:C["columns-control-content-footer"],justify:"end",gutter:10,children:[(0,j.jsx)(r.Col,{children:(0,j.jsx)(r.Button,{size:"small",onClick:()=>{n&&n(),t()},children:"\u53d6\u6d88"})}),(0,j.jsx)(r.Col,{children:(0,j.jsx)(N.default,{type:"primary",size:"small",onClick:async()=>{o&&await o(),t()},children:"\u786e\u5b9a"})})]})]})},F=e=>{let{columns:t,name:n,data:o,setData:l,...c}=e;const[a,i]=(0,s.useState)(!1),{popupColumns:u,columnMap:d,setColumns:h,onConfirm:g,onCancel:p,onReset:f}=w({columns:t,name:n,initColumnsData:o,setData:l});return(0,j.jsx)(r.Popover,{...c,open:a,overlayClassName:C["columns-control-overlay"],trigger:"click",autoAdjustOverflow:!1,placement:"bottomRight",content:(0,j.jsx)(T,{columns:u.map((e=>{const t=d.get(e.id);return Object.assign({},e,{name:m()(t,"titleText")||m()(t,"title")||"\u672a\u547d\u540d\u5217",fixed:m()(t,"fixed")})})),setColumns:e=>{h(e.map((e=>{let{id:t,width:n,hidden:r}=e;return{id:t,width:n,hidden:r}})))},close:()=>i(!1),onConfirm:g,onCancel:p,onReset:f}),onOpenChange:e=>i(e),children:(0,j.jsx)("span",{className:C["table-changer-setting"],children:(0,j.jsx)(L.default,{type:"icon-shezhi"})})})},B=I((e=>{let{className:t,columns:n,originColumns:s,controllerOpen:o,tableColumnFetchApi:l,name:c,scroller:a,featureId:i,...d}=e;const{data:g,setData:p}=l||{},f=e=>{let{children:t}=e;return i?(0,j.jsx)(M.default,{id:i,children:e=>t(e)}):t({})};return(e=>(0,j.jsx)(h.Z,{className:"table-page-scroller",scroller:a,getScrollTarget:e=>e.querySelector(".ant-table-body")||e.querySelector(".ant-table-content"),children:f({children:n=>{let{options:l}=n;const a=e.filter((e=>!e.key||(!Array.isArray(m()(l,"hiddenColumns"))||-1===l.hiddenColumns.indexOf(e.key))));return(0,j.jsx)(r.Table,{...d,columns:!1===o?a:a.map(((e,t)=>a.length-1===t?{...e,title:()=>(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("span",{children:e.title}),(0,j.jsx)(F,{data:g,columns:s,setData:p,name:c})]})}:e)),className:u()(t,"table-page")})}})}))(n)})),q=(0,c.withFetch)((e=>{let{data:t,refresh:n,reload:r,requestParams:o,fetchProps:c,isComplete:i,setData:d,loadMore:h,send:g,dataFormat:p,pagination:f,scroller:x,getColumns:_,getColumnsParams:y,className:v,columns:b,featureId:w,stickyOffset:A,...S}=e;const I=l()(p),M=l()(_),O=(0,s.useMemo)((()=>I(t)),[t,I]),R={dataSource:O.list,pagination:!!f.open&&{total:O.total,showTotal:e=>(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(k.FormattedMessage,{id:"Page_Total",moduleName:"TablePage",defaultMessage:"\u5171"}),(0,j.jsx)("span",{className:C.total_text,children:e}),(0,j.jsx)(k.FormattedMessage,{id:"Page_TotalCount",moduleName:"TablePage",defaultMessage:"\u6761"})]}),current:m()(o,[f.paramsType,f.current],1),pageSize:f.defaultPageSize,onChange:f.onChange?f.onChange:(e,t)=>{e!==m()(o,[f.paramsType,f.current],1)?("refresh"===f.requestType?n:r)({[f.paramsType]:{[f.current]:e,[f.pageSize]:t}}):f.onShowSizeChange&&f.onShowSizeChange(e,t)},size:f.size,showSizeChanger:f.showSizeChanger,showQuickJumper:f.showQuickJumper},className:v,style:{"--sticky-offset":A}};return(0,j.jsx)(k.IntlProvider,{importMessages:E,moduleName:"TablePage",children:(0,j.jsx)("div",{className:u()(C["loading-container"],"loading-container",{"is-loading":!i}),children:"function"!==typeof _||b?(0,j.jsx)(B,{...S,...R,columns:b,scroller:x,featureId:w}):(0,j.jsx)(a(),{data:t,params:y,loader:e=>{let{data:t,params:n}=e;return M({data:t,params:n,formatData:O})},render:e=>{let{data:t}=e;return(0,j.jsx)(B,{...S,...R,columns:t,scroller:x,featureId:w})}})})})})),W=(0,s.forwardRef)(((e,t)=>{let{pagination:n,...r}=e;const[o,l]=(0,s.useState)(20);n=Object.assign({},{showSizeChanger:!0,showQuickJumper:!0,open:!0,paramsType:"data",requestType:"reload",current:"currentPage",pageSize:"perPage",size:"default"},n);const c=(0,s.useMemo)((()=>{const e={};return r.params&&Object.keys(r.params).length>0&&(e.params={...r.params,[n.pageSize]:o}),r.data&&Object.keys(r.data).length>0&&(e.data={...r.data,[n.pageSize]:o}),e}),[r.params,r.data,n.pageSize,o]);return(0,j.jsx)(q,{...r,pagination:Object.assign({},{defaultPageSize:o,onShowSizeChange:(e,t)=>{l(t)}},n),...c,ref:t})}));W.defaultProps={controllerOpen:!0,size:"middle",stickyOffset:"var(--nav-height)",sticky:{getContainer:g.R},scroller:{getContainer:g.R},scroll:{x:"max-content"},rowKey:"id",pagination:{},dataFormat:e=>({list:e.pageData,total:e.totalCount})};const X=W}}]);
//# sourceMappingURL=3308.925241f9.chunk.js.map