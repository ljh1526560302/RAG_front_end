import{am as P,an as S,ao as d,av as _,d as w,r as B,b3 as k,ap as T,c as A,ar as N,v as f,as as x,bs as z,aA as D,aN as C,aZ as $,F as I}from"./index-C5ueqVSw.js";import{n as W,y as E,A as H,e as j,o as M,_ as R,j as F}from"./index-D9jmw5IA.js";import{i as L}from"./initDefaultProps-B9L7UfZz.js";const O=e=>{const{componentCls:o,popoverBg:r,popoverColor:t,width:a,fontWeightStrong:s,popoverPadding:l,boxShadowSecondary:c,colorTextHeading:g,borderRadiusLG:u,zIndexPopup:p,marginXS:v,colorBgElevated:n}=e;return[{[o]:d(d({},_(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:p,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--antd-arrow-background-color":n,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${o}-content`]:{position:"relative"},[`${o}-inner`]:{backgroundColor:r,backgroundClip:"padding-box",borderRadius:u,boxShadow:c,padding:l},[`${o}-title`]:{minWidth:a,marginBottom:v,color:g,fontWeight:s},[`${o}-inner-content`]:{color:t}})},E(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${o}-pure`]:{position:"relative",maxWidth:"none",[`${o}-content`]:{display:"inline-block"}}}]},Z=e=>{const{componentCls:o}=e;return{[o]:H.map(r=>{const t=e[`${r}-6`];return{[`&${o}-${r}`]:{"--antd-arrow-background-color":t,[`${o}-inner`]:{backgroundColor:t},[`${o}-arrow`]:{background:"transparent"}}}})}},G=e=>{const{componentCls:o,lineWidth:r,lineType:t,colorSplit:a,paddingSM:s,controlHeight:l,fontSize:c,lineHeight:g,padding:u}=e,p=l-Math.round(c*g),v=p/2,n=p/2-r,i=u;return{[o]:{[`${o}-inner`]:{padding:0},[`${o}-title`]:{margin:0,padding:`${v}px ${i}px ${n}px`,borderBottom:`${r}px ${t} ${a}`},[`${o}-inner-content`]:{padding:`${s}px ${i}px`}}}},V=P("Popover",e=>{const{colorBgElevated:o,colorText:r,wireframe:t}=e,a=S(e,{popoverBg:o,popoverColor:r,popoverPadding:12});return[O(a),Z(a),t&&G(a),W(a,"zoom-big")]},e=>{let{zIndexPopupBase:o}=e;return{zIndexPopup:o+30,width:177}}),X=()=>d(d({},F()),{content:C(),title:C()}),q=w({compatConfig:{MODE:3},name:"APopover",inheritAttrs:!1,props:L(X(),d(d({},j()),{trigger:"hover",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1})),setup(e,o){let{expose:r,slots:t,attrs:a}=o;const s=B();k(e.visible===void 0),r({getPopupDomNode:()=>{var n,i;return(i=(n=s.value)===null||n===void 0?void 0:n.getPopupDomNode)===null||i===void 0?void 0:i.call(n)}});const{prefixCls:l,configProvider:c}=T("popover",e),[g,u]=V(l),p=A(()=>c.getPrefixCls()),v=()=>{var n,i;const{title:m=$((n=t.title)===null||n===void 0?void 0:n.call(t)),content:h=$((i=t.content)===null||i===void 0?void 0:i.call(t))}=e,b=!!(Array.isArray(m)?m.length:m),y=!!(Array.isArray(h)?h.length:m);return!b&&!y?null:f(I,null,[b&&f("div",{class:`${l.value}-title`},[m]),f("div",{class:`${l.value}-inner-content`},[h])])};return()=>{const n=N(e.overlayClassName,u.value);return g(f(R,x(x(x({},M(e,["title","content"])),a),{},{prefixCls:l.value,ref:s,overlayClassName:n,transitionName:z(p.value,"zoom-big",e.transitionName),"data-popover-inject":!0}),{title:v,default:t.default}))}}}),Y=D(q);export{Y as _};
