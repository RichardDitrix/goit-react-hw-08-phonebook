"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[542],{7542:(e,r,a)=>{a.r(r),a.d(r,{default:()=>f});var o=a(1036),t=a(4287),s=a(6946),l=a(1045),n=a(5865),i=a(8256),c=a(3404),d=a(6325);const u=(0,a(353).A)();var m=a(6954),h=a(5137),v=a(3892),p=a(3033),g=a(579);const f=()=>{const e=(0,h.wA)(),[r,{isLoading:a}]=(0,t.rU)(),f=(0,v.Wx)({initialValues:{name:"",email:"",password:""},validationSchema:p.Ik({name:p.Yj().min(4).max(15).required("Required"),email:p.Yj().email("Invalid email address").required("Required"),password:p.Yj().min(7).max(20).required("Required")}),onSubmit:async a=>{e(m.a4.util.invalidateTags(["Contact"]));try{if((await r(a)).error)throw Error("Failed to register");o.oR.success("You have successfully registered")}catch(t){o.oR.error(t.message)}}});return(0,g.jsx)(u,{maxWidth:"xs",children:(0,g.jsxs)(s.A,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,g.jsx)(l.A,{sx:{m:1,bgcolor:"primary.main"},children:(0,g.jsx)(d.A,{})}),(0,g.jsx)(n.A,{component:"h1",variant:"h5",children:"Sign up"}),(0,g.jsxs)(s.A,{component:"form",onSubmit:f.handleSubmit,sx:{mt:1},children:[(0,g.jsx)(i.A,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",autoFocus:!0,value:f.values.name,onChange:f.handleChange,onBlur:f.handleBlur,error:Boolean(f.touched.name&&f.errors.name),helperText:f.touched.name&&f.errors.name}),(0,g.jsx)(i.A,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",value:f.values.email,onChange:f.handleChange,onBlur:f.handleBlur,error:Boolean(f.touched.email&&f.errors.email),helperText:f.touched.email&&f.errors.email}),(0,g.jsx)(i.A,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:f.values.password,onChange:f.handleChange,onBlur:f.handleBlur,error:Boolean(f.touched.password&&f.errors.password),helperText:f.touched.password&&f.errors.password}),(0,g.jsx)(c.A,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:a,children:"Sign Up"})]})]})})}},6325:(e,r,a)=>{var o=a(4994);r.A=void 0;var t=o(a(39)),s=a(579),l=(0,t.default)((0,s.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");r.A=l},1045:(e,r,a)=>{a.d(r,{A:()=>x});var o=a(8587),t=a(8168),s=a(5043),l=a(3024),n=a(8610),i=a(4535),c=a(2876),d=a(9662),u=a(579);const m=(0,d.A)((0,u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var h=a(2372);function v(e){return(0,h.A)("MuiAvatar",e)}(0,a(2532).A)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const p=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=(0,i.Ay)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,r[a.variant],a.colorDefault&&r.colorDefault]}})((e=>{let{theme:r,ownerState:a}=e;return(0,t.A)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===a.variant&&{borderRadius:(r.vars||r).shape.borderRadius},"square"===a.variant&&{borderRadius:0},a.colorDefault&&(0,t.A)({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]}))})),f=(0,i.Ay)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,r)=>r.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),A=(0,i.Ay)(m,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,r)=>r.fallback})({width:"75%",height:"75%"});const x=s.forwardRef((function(e,r){const a=(0,c.A)({props:e,name:"MuiAvatar"}),{alt:i,children:d,className:m,component:h="div",imgProps:x,sizes:b,src:w,srcSet:y,variant:j="circular"}=a,S=(0,o.A)(a,p);let k=null;const R=function(e){let{crossOrigin:r,referrerPolicy:a,src:o,srcSet:t}=e;const[l,n]=s.useState(!1);return s.useEffect((()=>{if(!o&&!t)return;n(!1);let e=!0;const s=new Image;return s.onload=()=>{e&&n("loaded")},s.onerror=()=>{e&&n("error")},s.crossOrigin=r,s.referrerPolicy=a,s.src=o,t&&(s.srcset=t),()=>{e=!1}}),[r,a,o,t]),l}((0,t.A)({},x,{src:w,srcSet:y})),C=w||y,q=C&&"error"!==R,z=(0,t.A)({},a,{colorDefault:!q,component:h,variant:j}),B=(e=>{const{classes:r,variant:a,colorDefault:o}=e,t={root:["root",a,o&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,n.A)(t,v,r)})(z);return k=q?(0,u.jsx)(f,(0,t.A)({alt:i,src:w,srcSet:y,sizes:b,ownerState:z,className:B.img},x)):null!=d?d:C&&i?i[0]:(0,u.jsx)(A,{className:B.fallback}),(0,u.jsx)(g,(0,t.A)({as:h,ownerState:z,className:(0,l.A)(B.root,m),ref:r},S,{children:k}))}))}}]);
//# sourceMappingURL=542.a8698638.chunk.js.map