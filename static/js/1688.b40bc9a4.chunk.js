"use strict";(self.webpackChunk_kne_components_core=self.webpackChunk_kne_components_core||[]).push([[1688,8506,1718],{79486:(e,t,a)=>{a.d(t,{Z:()=>r});a(86122);const r=a.p+"static/media/defaultAvatar.b1f2a8046cc7bee36d9a404ce6a0a1d7.svg"},46221:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(66005),n=a.n(r),s=a(43682),i=a(79286),o=a.n(i),l=a(80184);const c=e=>{const t=t=>{let{id:a,url:r,error:i,apis:c,loading:d,...u}=t;const{apis:m}=(0,s.usePreset)(),f=o()({},m,c);if(!a)return null;if(!f.oss)throw new Error("\u8bf7\u5728Global\u7ec4\u4ef6\u8bbe\u7f6epreset.apis.oss\u53c2\u6570");return(0,l.jsx)(n(),{...f.oss,updateType:"refresh",error:i,loading:d,params:{id:a},cache:"oss-file",ttl:6e6,render:t=>{let{data:r}=t;return(0,l.jsx)(e,{...u,id:a,data:r})}})};return t.defaultProps={loading:null},t}},84621:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var r=a(66005),n=a.n(r),s=a(46221),i=a(91243),o=a(7101),l=a.n(o),c=a(2508),d=a(86122);const u=e=>{let{params:t}=e;const{data:a}=t;return new Promise(((e,t)=>{const r=new window.Image;r.src=a,r.addEventListener("load",(()=>{e(a)})),r.addEventListener("error",(e=>{t(e)}))}))},m="style_img-outer__4QLY5__EG6bw",f="style_img__PSExq__EG6bw",g="style_loading__WCOwA__EG6bw",p="style_error__+ECgZ__EG6bw";var _=a(79486),h=a(80184);const x=e=>{let{data:t,className:a,alt:r,innerLoading:s,loading:i,error:o,innerError:c,children:d}=e;return(0,h.jsx)(n(),{loader:u,params:{data:t},error:c||o,loading:s||i,render:e=>{let{data:t}=e;return"function"===typeof d?d({alt:r,className:l()(a,f),src:t}):(0,h.jsx)("img",{alt:r,className:l()(a,f),src:t})}})},v=(0,s.Z)(x),w=e=>{let{loading:t,error:a,src:r,id:n,alt:s,className:i,children:o,apis:l}=e;const c=t&&(0,d.cloneElement)(t,{className:g}),u=a&&(0,d.cloneElement)(a,{className:p});return r?(0,h.jsx)(x,{alt:s,className:i,data:r,loading:c,error:u,children:o}):n?(0,h.jsx)(v,{alt:s,className:i,id:n,loading:c,innerLoading:c,error:u,innerError:u,apis:l,children:o}):u},b=e=>{let{id:t,src:a,alt:r,loading:n,error:s,className:i,apis:o,...c}=e;return(0,h.jsx)("div",{...c,"data-testid":"components-core-image",className:l()(i,m),children:w({loading:n,error:s,src:a,id:t,alt:r,className:i,apis:o})})};b.Avatar=e=>{let{id:t,src:a,alt:r,gender:n,loading:s,error:o,className:d,gap:u,icon:f,children:g,shape:p,size:_,width:x,height:v,defaultAvatar:b,apis:j,...y}=e;const N=(()=>{const e=x&&v?{style:{width:x,height:v}}:{size:_};if(x&&x!==v&&(p="square"),t||a)return w({loading:s,error:o,src:a,defaultAvatar:b,id:t,alt:r,className:d,apis:j,children:t=>(0,h.jsx)(c.Avatar,{...t,gap:u,shape:p,...e})});if(n){const t=n&&["F","female","f"].indexOf(n)>-1?"icon-color-touxiang-nv":"icon-color-touxiang-nan";return(0,h.jsx)(c.Avatar,{...y,src:b||(0,h.jsx)(i.default,{role:"touxiang",colorful:!0,type:t}),gap:u,shape:p,...e})}return(0,h.jsx)(c.Avatar,{...y,gap:u,icon:f,shape:p,size:_,src:b,...e,children:g})})();return(0,h.jsx)("div",{...y,"data-testid":"components-core-image-avatar",className:l()(d,m),style:{width:x&&v?x:_,height:x&&v?v:_},children:N})};const j={error:(0,h.jsx)(i.default,{role:"error-icon",colorful:!0,type:"icon-color-touxiang-nan"}),loading:(0,h.jsx)(c.Skeleton.Avatar,{shape:"square",active:!0})};b.defaultProps=Object.assign({},j),b.Avatar.defaultProps=Object.assign({},j,{size:100,defaultAvatar:_.Z});const y=b},16860:(e,t,a)=>{a.r(t),a.d(t,{default:()=>G,navigationHeight:()=>E});var r=a(2508),n=a(51583),s=a(26181),i=a.n(s),o=a(86122),l=a(7101),c=a.n(l);const d=a.p+"static/media/favicon.477a5bb996fd5b367fe0dddc29f67824.svg";var u=a(84621);const m=e=>({"en-US":()=>a.e(7562).then(a.bind(a,7562)),"zh-CN":()=>a.e(3279).then(a.bind(a,43279))}[e]());var f=a(91602),g=a(91243);const p="style_navigation-wrap__VF8x2__EG6bw",_="style_navigation__60RrS__EG6bw",h="style_is-fixed__kHFWj__EG6bw",x="style_navigation-logo__q9qHu__EG6bw",v="style_logo__lB9RC__EG6bw",w="style_navigation-list__EYtkg__EG6bw",b="style_navigation-options__0BdJU__EG6bw",j="style_more-icon__gNMnt__EG6bw";var y=a(80184);const{Header:N}=r.Layout,E=48,A=e=>{let{name:t,mapping:a,defaultTitle:r}=e;const n=(0,o.useRef)({mapping:a,defaultTitle:r});return(0,o.useEffect)((()=>{const e=i()(n.current.mapping.get(t),"title");document.title=(e?e+"-":"")+n.current.defaultTitle}),[t]),null},k=e=>{let{permissions:t,list:a,headerLogo:s,rightOptions:l,isFixed:E,showIndex:k,indexLabel:G,defaultTitle:C,overflowedIndicator:L,base:O,onChange:M,className:T}=e;const F=(0,o.useMemo)((()=>new Map(a.map((e=>{let{key:t,...a}=e;return[t,a]})))),[a]),P=(0,n.useNavigate)(),z=(0,n.useLocation)(),I=(0,o.useRef)(),R=(0,o.useRef)(null),[S,q]=(0,o.useState)("\u66f4\u591a"),Z=z.pathname.replace(new RegExp("^".concat(O)),"").split("/")[1],H=Z?i()(Array.from(F.entries()).find((e=>{let[a,{path:r,permission:n}]=e;return-1!==("function"===typeof r?r(n,t):r).indexOf("/"+Z)})),"[0]"):"home";(0,o.useEffect)((()=>{const e=()=>{if(I.current){const e=I.current.querySelectorAll("li[data-menu-id]");let t=!1;for(let r=0;r<e.length;r++){if(-1!==e[r].getAttribute("data-menu-id").indexOf(H)){t=!0;break}}let a=F.get(H)&&!t?i()(F.get(H),"title"):"";q(a)}},t={attributes:!0,childList:!0,subtree:!0};return I&&I.current&&(e(),R.current&&R.current.disconnect(),R.current=new MutationObserver(e),R.current.observe(I.current,t)),()=>{R.current&&R.current.disconnect()}}),[H,F]);const B=!!k&&{label:G||(0,y.jsx)(f.FormattedMessage,{id:"indexLabel",moduleName:"Navigation"}),key:"home",onClick:()=>{M&&M("/"),setTimeout((()=>{P("/")}),0)}};return(0,y.jsxs)(f.IntlProvider,{importMessages:m,moduleName:"Navigation",children:[(0,y.jsx)(f.FormattedMessage,{id:"defaultTitle",moduleName:"Navigation",children:e=>(0,y.jsx)(A,{defaultTitle:C||e,mapping:F,name:H})}),(0,y.jsx)("div",{className:c()(p,T),children:(0,y.jsx)(N,{className:c()("navigation",_,{[h]:E}),children:(0,y.jsxs)(r.Row,{justify:"space-around",wrap:!1,children:[(0,y.jsx)(r.Col,{className:c()("navigation-logo",x),children:(0,y.jsx)(u.default,{className:c()(v),src:d,alt:"logo",...s})}),(0,y.jsx)(r.Col,{ref:I,flex:1,className:c()("navigation-list",w),children:(0,y.jsx)(r.Menu,{selectedKeys:[H],mode:"horizontal",overflowedIndicator:L||(0,y.jsxs)(r.Space,{size:4,children:[(0,y.jsx)("span",{children:S||(0,y.jsx)(f.FormattedMessage,{id:"overflowedIndicator",moduleName:"Navigation"})}),(0,y.jsx)("span",{className:j,children:(0,y.jsx)(g.default,{type:"icon-arrow-thin-down"})})]}),items:[B,...Array.from(F.entries()).filter((e=>{let[a,{permission:r}]=e;if("string"===typeof r)return t.indexOf(r)>-1;if("function"===typeof r)return r(t);if(Array.isArray(r)){for(let e of r)if(t.indexOf(e)>-1)return!0;return!1}return!0})).map((e=>{let[a,{title:r,path:n,permission:s}]=e;const i="function"===typeof n?n(s,t):n;return{label:r,key:a,onClick:()=>{M&&M(i),setTimeout((()=>{P(i)}),0)}}}))]})}),(0,y.jsx)(r.Col,{className:b,children:l})]})})})]})};k.defaultProps={isFixed:!0,permissions:[],list:[],showIndex:!0,base:""};const G=k}}]);
//# sourceMappingURL=1688.b40bc9a4.chunk.js.map