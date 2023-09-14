import{e as m,q as _,b3 as p,b5 as v,b6 as x,C as b,u as o,o as F,g as f,j as s,h as e,w as a,y as l,Z as w,b1 as g}from"./.pnpm.adeb4fcc.js";import{a as D}from"./system.e9f21344.js";import"./index.32787260.js";const C={class:"system-environment"},B={class:"lg:flex"},E=s("div",null,"CPU",-1),y={class:"mt-4"},A={class:"flex flex-wrap"},N={class:"sm:flex-1 w-1/2 mb-4"},T={class:"text-4xl mb-3"},$=s("div",{class:"text-tx-regular"},"\u6838\u5FC3\u6570",-1),I={class:"sm:flex-1 w-1/2 mb-4"},k={class:"text-4xl mb-3"},z=s("div",{class:"text-tx-regular"},"\u7528\u6237\u4F7F\u7528\u7387",-1),S={class:"sm:flex-1 w-1/2 mb-4"},V={class:"text-4xl mb-3"},P=s("div",{class:"text-tx-regular"},"\u7CFB\u7EDF\u4F7F\u7528\u7387",-1),j={class:"sm:flex-1 w-1/2 mb-4"},q={class:"text-4xl mb-3"},L=s("div",{class:"text-tx-regular"},"\u5F53\u524D\u7A7A\u95F2\u7387",-1),U=s("div",null,"\u5185\u5B58",-1),Z={class:"mt-4"},G={class:"flex flex-wrap"},H={class:"sm:flex-1 w-1/2 mb-4"},J={class:"text-4xl mb-3"},K=s("div",{class:"text-tx-regular"},"\u603B\u5185\u5B58",-1),M={class:"sm:flex-1 w-1/2 mb-4"},O={class:"text-4xl mb-3"},Q=s("div",{class:"text-tx-regular"},"\u5DF2\u7528\u5185\u5B58",-1),R={class:"sm:flex-1 w-1/2 mb-4"},W={class:"text-4xl mb-3"},X=s("div",{class:"text-tx-regular"},"\u5269\u4F59\u5185\u5B58",-1),Y={class:"sm:flex-1 w-1/2 mb-4"},ss={class:"text-4xl mb-3"},es=s("div",{class:"text-tx-regular"},"\u4F7F\u7528\u7387",-1),ts=s("div",null,"\u670D\u52A1\u5668\u4FE1\u606F",-1),us={class:"mt-4"},os=s("div",null,"go\u865A\u62DF\u673A\u4FE1\u606F",-1),as={class:"mt-4"},ls=s("div",null,"\u786C\u76D8\u72B6\u6001",-1),is={class:"mt-4"},ds=m({name:"environment"}),ps=m({...ds,setup(ns){const d=_(!1),t=_({cpu:{},disk:[],go:{},mem:{},sys:{}});return(async()=>{try{d.value=!0;const n=await D();t.value=n,d.value=!1}catch{d.value=!1}})(),(n,_s)=>{const i=g,u=p,c=v,r=x;return b((F(),f("div",C,[s("div",B,[e(i,{class:"!border-none flex-1 mb-4 lg:mr-4",shadow:"never"},{default:a(()=>[E,s("div",y,[s("div",A,[s("div",N,[s("div",T,l(o(t).cpu.cpuNum),1),$]),s("div",I,[s("div",k,l(o(t).cpu.used?`${o(t).cpu.used}%`:"-"),1),z]),s("div",S,[s("div",V,l(o(t).cpu.sys?`${o(t).cpu.sys}%`:"-"),1),P]),s("div",j,[s("div",q,l(o(t).cpu.free?`${o(t).cpu.free}%`:"-"),1),L])])])]),_:1}),e(i,{class:"!border-none flex-1 mb-4",shadow:"never"},{default:a(()=>[U,s("div",Z,[s("div",G,[s("div",H,[s("div",J,l(o(t).mem.total),1),K]),s("div",M,[s("div",O,l(o(t).mem.used?`${o(t).mem.used}%`:"-"),1),Q]),s("div",R,[s("div",W,l(o(t).mem.free?`${o(t).mem.free}%`:"-"),1),X]),s("div",Y,[s("div",ss,l(o(t).mem.usage?`${o(t).mem.usage}%`:"-"),1),es])])])]),_:1})]),e(i,{class:"!border-none",shadow:"never"},{default:a(()=>[ts,s("div",us,[e(c,{data:[o(t).sys],size:"large"},{default:a(()=>[e(u,{prop:"computerName",label:"\u670D\u52A1\u5668\u540D\u79F0","min-width":"150"}),e(u,{prop:"computerIp",label:"\u670D\u52A1\u5668IP","min-width":"120"}),e(u,{prop:"osName",label:"\u64CD\u4F5C\u7CFB\u7EDF","min-width":"100"}),e(u,{prop:"osArch",label:"\u7CFB\u7EDF\u67B6\u6784","min-width":"100"}),e(u,{prop:"userDir",label:"\u9879\u76EE\u8DEF\u5F84","min-width":"250"})]),_:1},8,["data"])])]),_:1}),e(i,{shadow:"never",class:"!border-none mt-4"},{default:a(()=>[os,s("div",as,[e(c,{data:[o(t).go],size:"large"},{default:a(()=>[e(u,{prop:"name",label:"go\u540D\u79F0","min-width":"120"}),e(u,{prop:"startTime",label:"\u542F\u52A8\u65F6\u95F4","min-width":"120"}),e(u,{prop:"home",label:"\u5B89\u88C5\u8DEF\u5F84","min-width":"120"}),e(u,{prop:"inputArgs",label:"\u8FD0\u884C\u53C2\u6570","min-width":"120"}),e(u,{prop:"version",label:"go\u7248\u672C","min-width":"120"}),e(u,{prop:"runTime",label:"\u8FD0\u884C\u65F6\u957F","min-width":"120"})]),_:1},8,["data"])])]),_:1}),e(i,{shadow:"never",class:"!border-none mt-4"},{default:a(()=>[ls,s("div",is,[e(c,{data:o(t).disk,size:"large"},{default:a(()=>[e(u,{prop:"dirName",label:"\u76D8\u7B26\u8DEF\u5F84","min-width":"100"}),e(u,{prop:"sysTypeName",label:"\u6587\u4EF6\u7CFB\u7EDF","min-width":"100"}),e(u,{prop:"typeName",label:"\u76D8\u7B26\u7C7B\u578B","min-width":"100"}),e(u,{prop:"total",label:"\u603B\u5927\u5C0F","min-width":"100"}),e(u,{prop:"free",label:"\u53EF\u7528\u5927\u5C0F","min-width":"100"}),e(u,{prop:"used",label:"\u5DF2\u7528\u5927\u5C0F","min-width":"100"}),e(u,{prop:"usage",label:"\u5DF2\u7528\u767E\u5206\u6BD4","min-width":"100"},{default:a(({row:h})=>[w(l(h.usage)+"% ",1)]),_:1})]),_:1},8,["data"])])]),_:1})])),[[r,o(d)]])}}});export{ps as default};
