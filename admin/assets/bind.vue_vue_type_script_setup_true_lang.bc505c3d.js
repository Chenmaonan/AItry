import{e as S,br as V,q as I,s as p,S as B,aW as D,o as E,g,h as a,w as t,u,j as m,aX as k,aY as y,aZ as A}from"./.pnpm.adeb4fcc.js";import{b as q}from"./card.f7b86a7f.js";import{P as N}from"./index.c77a1531.js";import{f as P}from"./index.32787260.js";const U={class:"bind-popup"},j={class:"w-[350px]"},W={class:"w-[350px]"},G=S({__name:"bind",props:{cardId:null},emits:["success"],setup(f,{expose:i,emit:_}){const F=f,{cardId:b}=V(F),v=I("add"),l=p(),r=p();B();const o=D({cardID:b,userSn:"",desc:""}),w={userSn:[{required:!0,message:"\u8BF7\u8F93\u5165\u4F1A\u5458\u7F16\u53F7\u6216ID",trigger:"blur"}]},h=async()=>{var s,e;await((s=l.value)==null?void 0:s.validate()),await q(o),(e=r.value)==null||e.close(),_("success"),P.msgSuccess("\u6FC0\u6D3B\u6210\u529F")},C=(s="add")=>{var e;v.value=s,(e=r.value)==null||e.open()},x=()=>{var s;(s=l.value)==null||s.resetFields()};return i({open:C}),(s,e)=>{const d=k,c=y,R=A;return E(),g("div",U,[a(N,{ref_key:"popupRef",ref:r,async:!0,title:"\u5361\u5238\u6FC0\u6D3B",width:"550px",onClose:x,onConfirm:h},{default:t(()=>[a(R,{ref_key:"formRef",ref:l,model:u(o),rules:w,"label-width":"100px"},{default:t(()=>[a(c,{label:"\u4F1A\u5458\u7F16\u53F7",prop:"userSn"},{default:t(()=>[m("div",j,[a(d,{modelValue:u(o).userSn,"onUpdate:modelValue":e[0]||(e[0]=n=>u(o).userSn=n),placeholder:"\u4F1A\u5458\u7F16\u53F7\u6216ID",clearable:""},null,8,["modelValue"])])]),_:1}),a(c,{label:"\u5907\u6CE8\u4FE1\u606F",prop:"desc"},{default:t(()=>[m("div",W,[a(d,{modelValue:u(o).desc,"onUpdate:modelValue":e[1]||(e[1]=n=>u(o).desc=n),rows:4,clearable:"",placeholder:"",type:"textarea"},null,8,["modelValue"])])]),_:1})]),_:1},8,["model"])]),_:1},512)])}}});export{G as _};
