"use strict";(self.webpackChunk_kne_components_core=self.webpackChunk_kne_components_core||[]).push([[1718,8506],{79486:(e,a,r)=>{r.d(a,{Z:()=>s});r(86122);const s=r.p+"static/media/defaultAvatar.b1f2a8046cc7bee36d9a404ce6a0a1d7.svg"},46221:(e,a,r)=>{r.d(a,{Z:()=>c});var s=r(66005),t=r.n(s),n=r(43682),o=r(79286),l=r.n(o),i=r(80184);const c=e=>{const a=a=>{let{id:r,url:s,error:o,apis:c,loading:d,...p}=a;const{apis:u}=(0,n.usePreset)(),g=l()({},u,c);if(!r)return null;if(!g.oss)throw new Error("\u8bf7\u5728Global\u7ec4\u4ef6\u8bbe\u7f6epreset.apis.oss\u53c2\u6570");return(0,i.jsx)(t(),{...g.oss,updateType:"refresh",error:o,loading:d,params:{id:r},cache:"oss-file",ttl:6e6,render:a=>{let{data:s}=a;return(0,i.jsx)(e,{...p,id:r,data:s})}})};return a.defaultProps={loading:null},a}},84621:(e,a,r)=>{r.r(a),r.d(a,{default:()=>A});var s=r(66005),t=r.n(s),n=r(46221),o=r(91243),l=r(7101),i=r.n(l),c=r(2508),d=r(86122);const p=e=>{let{params:a}=e;const{data:r}=a;return new Promise(((e,a)=>{const s=new window.Image;s.src=r,s.addEventListener("load",(()=>{e(r)})),s.addEventListener("error",(e=>{a(e)}))}))},u="style_img-outer__4QLY5__pXhIX",g="style_img__PSExq__pXhIX",h="style_loading__WCOwA__pXhIX",m="style_error__+ECgZ__pXhIX";var f=r(79486),_=r(80184);const v=e=>{let{data:a,className:r,alt:s,innerLoading:n,loading:o,error:l,innerError:c,children:d}=e;return(0,_.jsx)(t(),{loader:p,params:{data:a},error:c||l,loading:n||o,render:e=>{let{data:a}=e;return"function"===typeof d?d({alt:s,className:i()(r,g),src:a}):(0,_.jsx)("img",{alt:s,className:i()(r,g),src:a})}})},x=(0,n.Z)(v),j=e=>{let{loading:a,error:r,src:s,id:t,alt:n,className:o,children:l,apis:i}=e;const c=a&&(0,d.cloneElement)(a,{className:h}),p=r&&(0,d.cloneElement)(r,{className:m});return s?(0,_.jsx)(v,{alt:n,className:o,data:s,loading:c,error:p,children:l}):t?(0,_.jsx)(x,{alt:n,className:o,id:t,loading:c,innerLoading:c,error:p,innerError:p,apis:i,children:l}):p},N=e=>{let{id:a,src:r,alt:s,loading:t,error:n,className:o,apis:l,...c}=e;return(0,_.jsx)("div",{...c,"data-testid":"components-core-image",className:i()(o,u),children:j({loading:t,error:n,src:r,id:a,alt:s,className:o,apis:l})})};N.Avatar=e=>{let{id:a,src:r,alt:s,gender:t,loading:n,error:l,className:d,gap:p,icon:g,children:h,shape:m,size:f,width:v,height:x,defaultAvatar:N,apis:w,...A}=e;const y=(()=>{const e=v&&x?{style:{width:v,height:x}}:{size:f};if(v&&v!==x&&(m="square"),a||r)return j({loading:n,error:l,src:r,defaultAvatar:N,id:a,alt:s,className:d,apis:w,children:a=>(0,_.jsx)(c.Avatar,{...a,gap:p,shape:m,...e})});if(t){const a=t&&["F","female","f"].indexOf(t)>-1?"icon-color-touxiang-nv":"icon-color-touxiang-nan";return(0,_.jsx)(c.Avatar,{...A,src:N||(0,_.jsx)(o.default,{role:"touxiang",colorful:!0,type:a}),gap:p,shape:m,...e})}return(0,_.jsx)(c.Avatar,{...A,gap:p,icon:g,shape:m,size:f,src:N,...e,children:h})})();return(0,_.jsx)("div",{...A,"data-testid":"components-core-image-avatar",className:i()(d,u),style:{width:v&&x?v:f,height:v&&x?x:f},children:y})};const w={error:(0,_.jsx)(o.default,{role:"error-icon",colorful:!0,type:"icon-color-touxiang-nan"}),loading:(0,_.jsx)(c.Skeleton.Avatar,{shape:"square",active:!0})};N.defaultProps=Object.assign({},w),N.Avatar.defaultProps=Object.assign({},w,{size:100,defaultAvatar:f.Z});const A=N}}]);
//# sourceMappingURL=1718.8d508fdd.chunk.js.map