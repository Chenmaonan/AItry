import{_ as D}from"./index.222c373c.js";import{e as v,q as N,aW as k,o as C,g as q,h as u,w as s,j as r,u as a,Z as g,aX as A,aY as y,b1 as x,aZ as U,ab as S}from"./.pnpm.adeb4fcc.js";import{r as c,u as M,f as w}from"./index.32787260.js";function I(){return c.get({url:"/setting/mail/detail"})}function R(i){return c.post({url:"/setting/mail/update",params:i})}function Z(i){return c.get({url:"/setting/mail/send",params:i})}const j={class:"website-information"},T=r("div",{class:"text-xl font-medium mb-[20px]"},"\u90AE\u7BB1\u8BBE\u7F6E",-1),W={class:"w-80"},X={class:"w-80"},Y={class:"w-80"},z={class:"w-80"},G={class:"w-80"},H={class:"w-80"},O=v({__name:"edit",setup(i){const m=N(),{getConfig:_}=M(),e=k({host:"",port:"465",nickName:"",userName:"",password:"",testEmail:""}),B={host:[{required:!0,message:"\u8BF7\u8F93\u5165\u670D\u52A1\u5730\u5740",trigger:["blur"]}],port:[{required:!0,message:"\u8BF7\u8F93\u5165\u7AEF\u53E3\u53F7",trigger:["blur"]}],userName:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:["change"]}],nickName:[{required:!0,message:"\u8BF7\u8F93\u5165\u663E\u793A\u540D",trigger:["change"]}],testEmail:[{required:!0,message:"\u8BF7\u8F93\u5165\u6D4B\u8BD5\u6536\u4EF6\u4EBA",trigger:["change"]}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801\u6216\u6388\u6743\u7801",trigger:["change"]}]},p=async()=>{const l=await I();for(const t in e)e[t]=l[t]},F=async()=>{var l;await((l=m.value)==null?void 0:l.validate()),await R(e),await _(),await p(),w.msgSuccess("\u64CD\u4F5C\u6210\u529F")},E=async()=>{var l;await((l=m.value)==null?void 0:l.validate()),await Z(e),await _(),await p(),w.msgSuccess("\u53D1\u9001\u6210\u529F")};return p(),(l,t)=>{const n=A,d=y,V=x,h=U,f=S,b=D;return C(),q("div",j,[u(h,{ref_key:"formRef",ref:m,model:a(e),rules:B,"label-width":"120px"},{default:s(()=>[u(V,{class:"!border-none",shadow:"never"},{default:s(()=>[T,u(d,{label:"\u670D\u52A1\u5730\u5740",prop:"host"},{default:s(()=>[r("div",W,[u(n,{modelValue:a(e).host,"onUpdate:modelValue":t[0]||(t[0]=o=>a(e).host=o),placeholder:"\u5982smtp.qq.com"},null,8,["modelValue"])])]),_:1}),u(d,{label:"\u7AEF\u53E3\u53F7",prop:"port"},{default:s(()=>[r("div",X,[u(n,{modelValue:a(e).port,"onUpdate:modelValue":t[1]||(t[1]=o=>a(e).port=o),placeholder:""},null,8,["modelValue"])])]),_:1}),u(d,{label:"\u663E\u793A\u540D",prop:"nickName"},{default:s(()=>[r("div",Y,[u(n,{modelValue:a(e).nickName,"onUpdate:modelValue":t[2]||(t[2]=o=>a(e).nickName=o),placeholder:"chatgpt-web-plus"},null,8,["modelValue"])])]),_:1}),u(d,{label:"\u7528\u6237\u540D",prop:"userName"},{default:s(()=>[r("div",z,[u(n,{modelValue:a(e).userName,"onUpdate:modelValue":t[3]||(t[3]=o=>a(e).userName=o),placeholder:""},null,8,["modelValue"])])]),_:1}),u(d,{label:"\u5BC6\u7801/\u6388\u6743\u7801",prop:"password"},{default:s(()=>[r("div",G,[u(n,{modelValue:a(e).password,"onUpdate:modelValue":t[4]||(t[4]=o=>a(e).password=o),type:"password","show-password":"",placeholder:""},null,8,["modelValue"])])]),_:1}),u(d,{label:"\u6D4B\u8BD5\u6536\u4EF6\u4EBA",prop:"testEmail"},{default:s(()=>[r("div",H,[u(n,{modelValue:a(e).testEmail,"onUpdate:modelValue":t[5]||(t[5]=o=>a(e).testEmail=o),placeholder:""},null,8,["modelValue"])])]),_:1})]),_:1})]),_:1},8,["model"]),u(b,null,{default:s(()=>[u(f,{type:"primary",onClick:F},{default:s(()=>[g("\u4FDD\u5B58")]),_:1}),u(f,{type:"success",onClick:E},{default:s(()=>[g("\u6D4B\u8BD5")]),_:1})]),_:1})])}}});export{O as default};
