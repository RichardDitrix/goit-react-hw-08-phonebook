"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[297],{3471:(e,t,o)=>{var n=o(4994);t.A=void 0;var a=n(o(39)),r=o(579),i=(0,a.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.A=i},8903:(e,t,o)=>{o.d(t,{Ay:()=>k});var n=o(8587),a=o(8168),r=o(5043),i=o(3024),s=o(9751),c=o(8698),l=o(8610),d=o(4535),p=o(2876),u=o(6240);const m=r.createContext();var g=o(2372);function b(e){return(0,g.A)("MuiGrid",e)}const h=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],y=(0,o(2532).A)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>"spacing-xs-".concat(e))),...["column-reverse","column","row-reverse","row"].map((e=>"direction-xs-".concat(e))),...["nowrap","wrap-reverse","wrap"].map((e=>"wrap-xs-".concat(e))),...h.map((e=>"grid-xs-".concat(e))),...h.map((e=>"grid-sm-".concat(e))),...h.map((e=>"grid-md-".concat(e))),...h.map((e=>"grid-lg-".concat(e))),...h.map((e=>"grid-xl-".concat(e)))]);var v=o(579);const A=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function f(e){const t=parseFloat(e);return"".concat(t).concat(String(e).replace(String(t),"")||"px")}const x=(0,d.Ay)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{container:n,direction:a,item:r,spacing:i,wrap:s,zeroMinWidth:c,breakpoints:l}=o;let d=[];n&&(d=function(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[o["spacing-xs-".concat(String(e))]];const n=[];return t.forEach((t=>{const a=e[t];Number(a)>0&&n.push(o["spacing-".concat(t,"-").concat(String(a))])})),n}(i,l,t));const p=[];return l.forEach((e=>{const n=o[e];n&&p.push(t["grid-".concat(e,"-").concat(String(n))])})),[t.root,n&&t.container,r&&t.item,c&&t.zeroMinWidth,...d,"row"!==a&&t["direction-xs-".concat(String(a))],"wrap"!==s&&t["wrap-xs-".concat(String(s))],...p]}})((e=>{let{ownerState:t}=e;return(0,a.A)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap})}),(function(e){let{theme:t,ownerState:o}=e;const n=(0,s.kW)({values:o.direction,breakpoints:t.breakpoints.values});return(0,s.NI)({theme:t},n,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t["& > .".concat(y.item)]={maxWidth:"none"}),t}))}),(function(e){let{theme:t,ownerState:o}=e;const{container:n,rowSpacing:a}=o;let r={};if(n&&0!==a){const e=(0,s.kW)({values:a,breakpoints:t.breakpoints.values});r=(0,s.NI)({theme:t},e,(e=>{const o=t.spacing(e);return"0px"!==o?{marginTop:"-".concat(f(o)),["& > .".concat(y.item)]:{paddingTop:f(o)}}:{}}))}return r}),(function(e){let{theme:t,ownerState:o}=e;const{container:n,columnSpacing:a}=o;let r={};if(n&&0!==a){const e=(0,s.kW)({values:a,breakpoints:t.breakpoints.values});r=(0,s.NI)({theme:t},e,(e=>{const o=t.spacing(e);return"0px"!==o?{width:"calc(100% + ".concat(f(o),")"),marginLeft:"-".concat(f(o)),["& > .".concat(y.item)]:{paddingLeft:f(o)}}:{}}))}return r}),(function(e){let t,{theme:o,ownerState:n}=e;return o.breakpoints.keys.reduce(((e,r)=>{let i={};if(n[r]&&(t=n[r]),!t)return e;if(!0===t)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,s.kW)({values:n.columns,breakpoints:o.breakpoints.values}),l="object"===typeof c?c[r]:c;if(void 0===l||null===l)return e;const d="".concat(Math.round(t/l*1e8)/1e6,"%");let p={};if(n.container&&n.item&&0!==n.columnSpacing){const e=o.spacing(n.columnSpacing);if("0px"!==e){const t="calc(".concat(d," + ").concat(f(e),")");p={flexBasis:t,maxWidth:t}}}i=(0,a.A)({flexBasis:d,flexGrow:0,maxWidth:d},p)}return 0===o.breakpoints.values[r]?Object.assign(e,i):e[o.breakpoints.up(r)]=i,e}),{})}));const S=e=>{const{classes:t,container:o,direction:n,item:a,spacing:r,wrap:i,zeroMinWidth:s,breakpoints:c}=e;let d=[];o&&(d=function(e,t){if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return["spacing-xs-".concat(String(e))];const o=[];return t.forEach((t=>{const n=e[t];if(Number(n)>0){const e="spacing-".concat(t,"-").concat(String(n));o.push(e)}})),o}(r,c));const p=[];c.forEach((t=>{const o=e[t];o&&p.push("grid-".concat(t,"-").concat(String(o)))}));const u={root:["root",o&&"container",a&&"item",s&&"zeroMinWidth",...d,"row"!==n&&"direction-xs-".concat(String(n)),"wrap"!==i&&"wrap-xs-".concat(String(i)),...p]};return(0,l.A)(u,b,t)},w=r.forwardRef((function(e,t){const o=(0,p.A)({props:e,name:"MuiGrid"}),{breakpoints:s}=(0,u.A)(),l=(0,c.A)(o),{className:d,columns:g,columnSpacing:b,component:h="div",container:y=!1,direction:f="row",item:w=!1,rowSpacing:k,spacing:C=0,wrap:N="wrap",zeroMinWidth:I=!1}=l,M=(0,n.A)(l,A),R=k||C,z=b||C,G=r.useContext(m),L=y?g||12:G,W={},T=(0,a.A)({},M);s.keys.forEach((e=>{null!=M[e]&&(W[e]=M[e],delete T[e])}));const O=(0,a.A)({},l,{columns:L,container:y,direction:f,item:w,rowSpacing:R,columnSpacing:z,wrap:N,zeroMinWidth:I,spacing:C},W,{breakpoints:s.keys}),P=S(O);return(0,v.jsx)(m.Provider,{value:L,children:(0,v.jsx)(x,(0,a.A)({ownerState:O,className:(0,i.A)(P.root,d),as:h,ref:t},T))})}));const k=w},7392:(e,t,o)=>{o.d(t,{A:()=>A});var n=o(8587),a=o(8168),r=o(5043),i=o(3024),s=o(8610),c=o(310),l=o(4535),d=o(2876),p=o(6236),u=o(6803),m=o(2372);function g(e){return(0,m.A)("MuiIconButton",e)}const b=(0,o(2532).A)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var h=o(579);const y=["edge","children","className","color","disabled","disableFocusRipple","size"],v=(0,l.Ay)(p.A,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,"default"!==o.color&&t["color".concat((0,u.A)(o.color))],o.edge&&t["edge".concat((0,u.A)(o.edge))],t["size".concat((0,u.A)(o.size))]]}})((e=>{let{theme:t,ownerState:o}=e;return(0,a.A)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!o.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.active," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.X4)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===o.edge&&{marginLeft:"small"===o.size?-3:-12},"end"===o.edge&&{marginRight:"small"===o.size?-3:-12})}),(e=>{let{theme:t,ownerState:o}=e;return(0,a.A)({},"inherit"===o.color&&{color:"inherit"},"inherit"!==o.color&&"default"!==o.color&&(0,a.A)({color:(t.vars||t).palette[o.color].main},!o.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[o.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.X4)(t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===o.size&&{padding:5,fontSize:t.typography.pxToRem(18)},"large"===o.size&&{padding:12,fontSize:t.typography.pxToRem(28)},{["&.".concat(b.disabled)]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}})})),A=r.forwardRef((function(e,t){const o=(0,d.A)({props:e,name:"MuiIconButton"}),{edge:r=!1,children:c,className:l,color:p="default",disabled:m=!1,disableFocusRipple:b=!1,size:A="medium"}=o,f=(0,n.A)(o,y),x=(0,a.A)({},o,{edge:r,color:p,disabled:m,disableFocusRipple:b,size:A}),S=(e=>{const{classes:t,disabled:o,color:n,edge:a,size:r}=e,i={root:["root",o&&"disabled","default"!==n&&"color".concat((0,u.A)(n)),a&&"edge".concat((0,u.A)(a)),"size".concat((0,u.A)(r))]};return(0,s.A)(i,g,t)})(x);return(0,h.jsx)(v,(0,a.A)({className:(0,i.A)(S.root,l),centerRipple:!0,focusRipple:!b,disabled:m,ref:t,ownerState:x},f,{children:c}))}))},1322:(e,t,o)=>{o.d(t,{Ay:()=>L});var n=o(8587),a=o(8168),r=o(5043),i=o(3024),s=o(8610),c=o(540),l=o(310),d=o(4535),p=o(2876),u=o(6236),m=o(5758),g=o(5013),b=o(5849),h=o(1347),y=o(2372),v=o(2532);function A(e){return(0,y.A)("MuiListItem",e)}const f=(0,v.A)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);const x=(0,v.A)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function S(e){return(0,y.A)("MuiListItemSecondaryAction",e)}(0,v.A)("MuiListItemSecondaryAction",["root","disableGutters"]);var w=o(579);const k=["className"],C=(0,d.Ay)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.disableGutters&&t.disableGutters]}})((e=>{let{ownerState:t}=e;return(0,a.A)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),N=r.forwardRef((function(e,t){const o=(0,p.A)({props:e,name:"MuiListItemSecondaryAction"}),{className:c}=o,l=(0,n.A)(o,k),d=r.useContext(h.A),u=(0,a.A)({},o,{disableGutters:d.disableGutters}),m=(e=>{const{disableGutters:t,classes:o}=e,n={root:["root",t&&"disableGutters"]};return(0,s.A)(n,S,o)})(u);return(0,w.jsx)(C,(0,a.A)({className:(0,i.A)(m.root,c),ownerState:u,ref:t},l))}));N.muiName="ListItemSecondaryAction";const I=N,M=["className"],R=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],z=(0,d.Ay)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,"flex-start"===o.alignItems&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters,!o.disablePadding&&t.padding,o.button&&t.button,o.hasSecondaryAction&&t.secondaryAction]}})((e=>{let{theme:t,ownerState:o}=e;return(0,a.A)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!o.disablePadding&&(0,a.A)({paddingTop:8,paddingBottom:8},o.dense&&{paddingTop:4,paddingBottom:4},!o.disableGutters&&{paddingLeft:16,paddingRight:16},!!o.secondaryAction&&{paddingRight:48}),!!o.secondaryAction&&{["& > .".concat(x.root)]:{paddingRight:48}},{["&.".concat(f.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["&.".concat(f.selected)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,l.X4)(t.palette.primary.main,t.palette.action.selectedOpacity),["&.".concat(f.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,l.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},["&.".concat(f.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity}},"flex-start"===o.alignItems&&{alignItems:"flex-start"},o.divider&&{borderBottom:"1px solid ".concat((t.vars||t).palette.divider),backgroundClip:"padding-box"},o.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(f.selected,":hover")]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,l.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,l.X4)(t.palette.primary.main,t.palette.action.selectedOpacity)}}},o.hasSecondaryAction&&{paddingRight:48})})),G=(0,d.Ay)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),L=r.forwardRef((function(e,t){const o=(0,p.A)({props:e,name:"MuiListItem"}),{alignItems:l="center",autoFocus:d=!1,button:y=!1,children:v,className:x,component:S,components:k={},componentsProps:C={},ContainerComponent:N="li",ContainerProps:{className:L}={},dense:W=!1,disabled:T=!1,disableGutters:O=!1,disablePadding:P=!1,divider:j=!1,focusVisibleClassName:B,secondaryAction:F,selected:V=!1}=o,_=(0,n.A)(o.ContainerProps,M),E=(0,n.A)(o,R),X=r.useContext(h.A),D={dense:W||X.dense||!1,alignItems:l,disableGutters:O},H=r.useRef(null);(0,g.A)((()=>{d&&H.current&&H.current.focus()}),[d]);const Y=r.Children.toArray(v),q=Y.length&&(0,m.A)(Y[Y.length-1],["ListItemSecondaryAction"]),J=(0,a.A)({},o,{alignItems:l,autoFocus:d,button:y,dense:D.dense,disabled:T,disableGutters:O,disablePadding:P,divider:j,hasSecondaryAction:q,selected:V}),K=(e=>{const{alignItems:t,button:o,classes:n,dense:a,disabled:r,disableGutters:i,disablePadding:c,divider:l,hasSecondaryAction:d,selected:p}=e,u={root:["root",a&&"dense",!i&&"gutters",!c&&"padding",l&&"divider",r&&"disabled",o&&"button","flex-start"===t&&"alignItemsFlexStart",d&&"secondaryAction",p&&"selected"],container:["container"]};return(0,s.A)(u,A,n)})(J),Q=(0,b.A)(H,t),U=k.Root||z,Z=C.root||{},$=(0,a.A)({className:(0,i.A)(K.root,Z.className,x),disabled:T},E);let ee=S||"li";return y&&($.component=S||"div",$.focusVisibleClassName=(0,i.A)(f.focusVisible,B),ee=u.A),q?(ee=$.component||S?ee:"div","li"===N&&("li"===ee?ee="div":"li"===$.component&&($.component="div")),(0,w.jsx)(h.A.Provider,{value:D,children:(0,w.jsxs)(G,(0,a.A)({as:N,className:(0,i.A)(K.container,L),ref:Q,ownerState:J},_,{children:[(0,w.jsx)(U,(0,a.A)({},Z,!(0,c.A)(U)&&{as:ee,ownerState:(0,a.A)({},J,Z.ownerState)},$,{children:Y})),Y.pop()]}))})):(0,w.jsx)(h.A.Provider,{value:D,children:(0,w.jsxs)(U,(0,a.A)({},Z,{as:ee,ref:Q,ownerState:J},!(0,c.A)(U)&&{ownerState:(0,a.A)({},J,Z.ownerState)},$,{children:[Y,F&&(0,w.jsx)(I,{children:F})]}))})}))},8569:(e,t,o)=>{o.d(t,{A:()=>v});var n=o(8587),a=o(8168),r=o(5043),i=o(3024),s=o(8610),c=o(5865),l=o(1347),d=o(2876),p=o(4535),u=o(2372);function m(e){return(0,u.A)("MuiListItemText",e)}const g=(0,o(2532).A)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);var b=o(579);const h=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],y=(0,p.Ay)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{["& .".concat(g.primary)]:t.primary},{["& .".concat(g.secondary)]:t.secondary},t.root,o.inset&&t.inset,o.primary&&o.secondary&&t.multiline,o.dense&&t.dense]}})((e=>{let{ownerState:t}=e;return(0,a.A)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),v=r.forwardRef((function(e,t){const o=(0,d.A)({props:e,name:"MuiListItemText"}),{children:p,className:u,disableTypography:g=!1,inset:v=!1,primary:A,primaryTypographyProps:f,secondary:x,secondaryTypographyProps:S}=o,w=(0,n.A)(o,h),{dense:k}=r.useContext(l.A);let C=null!=A?A:p,N=x;const I=(0,a.A)({},o,{disableTypography:g,inset:v,primary:!!C,secondary:!!N,dense:k}),M=(e=>{const{classes:t,inset:o,primary:n,secondary:a,dense:r}=e,i={root:["root",o&&"inset",r&&"dense",n&&a&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,s.A)(i,m,t)})(I);return null==C||C.type===c.A||g||(C=(0,b.jsx)(c.A,(0,a.A)({variant:k?"body2":"body1",className:M.primary,component:"span",display:"block"},f,{children:C}))),null==N||N.type===c.A||g||(N=(0,b.jsx)(c.A,(0,a.A)({variant:"body2",className:M.secondary,color:"text.secondary",display:"block"},S,{children:N}))),(0,b.jsxs)(y,(0,a.A)({className:(0,i.A)(M.root,u),ownerState:I,ref:t},w,{children:[C,N]}))}))}}]);
//# sourceMappingURL=297.d1e991bc.chunk.js.map