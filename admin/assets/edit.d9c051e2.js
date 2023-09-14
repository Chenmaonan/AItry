import{_ as q}from"./index.222c373c.js";import{e as U,q as p,aW as C,an as W,b9 as x,ba as j,bm as N,o as g,g as z,h as e,w as u,u as l,Z as o,C as P,k as S,j as _,a3 as T,aY as Z,b0 as G,b1 as I,aZ as M,ab as Y}from"./.pnpm.adeb4fcc.js";import{r as E,g as H,f as J}from"./index.32787260.js";function K(){return E.get({url:"/setting/register/detail"})}function L(c){return E.post({url:"/setting/register/update",params:c})}const O={class:"login-register"},Q=_("div",{class:"font-medium mb-7"},"\u6CE8\u518C\u8BBE\u7F6E",-1),X=_("div",null,[_("div",{class:"form-tips"}," \u7528\u6237\u6CE8\u518C\u65F6\u7ED9\u7684\u9ED8\u8BA4\u5934\u50CF\uFF0C\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A400*400\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F ")],-1),ae=U({__name:"edit",setup(c){const b="//backend/setting/register/upload";p();const f=p(),a=C({defaultAvatar:"",registerWay:10,enableVerifyCode:1,enableERcode:0,freePoints:0}),B={defaultAvatar:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u9ED8\u8BA4\u5934\u50CF",trigger:"blur"}],registerWay:[{required:!0,message:"\u8BF7\u9009\u62E9\u6CE8\u518C\u65B9\u5F0F",trigger:"blur"}],enableVerifyCode:[{required:!0,message:"\u8BF7\u9009\u62E9\u662F\u5426\u5F00\u542F\u9A8C\u8BC1\u7801",trigger:"blur"}],enableERcode:[{required:!0,message:"\u8BF7\u9009\u62E9\u662F\u5426\u5F00\u542F\u4E8C\u7EF4\u7801\u767B\u5F55",trigger:"blur"}],freePoints:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D60\u9001\u79EF\u5206",trigger:"blur"}]},m=async()=>{const r=await K();for(const t in a)a[t]=r[t]},A=async()=>{var r;await((r=f.value)==null?void 0:r.validate()),await L(a),J.msgSuccess("\u64CD\u4F5C\u6210\u529F"),await m()},F=C({});W(()=>{F.Authorization="Bearer "+H()});const v=r=>{a.defaultAvatar=r.data.url};return m(),(r,t)=>{const y=T,n=Z,D=G,s=x,i=j,V=I,k=M,R=Y,h=q,w=N("perms");return g(),z("div",O,[e(k,{ref_key:"formRef",ref:f,model:l(a),rules:B,"label-width":"120px"},{default:u(()=>[e(V,{class:"!border-none",shadow:"never"},{default:u(()=>[Q,e(D,{name:"avatar",class:"avatar-uploader",action:b,headers:l(F),"show-file-list":!1,"auto-upload":!0,limit:1,"on-success":v},{default:u(()=>[e(n,{label:"\u9ED8\u8BA4\u5934\u50CF\uFF1A",prop:"defaultAvatar"},{default:u(()=>[e(y,{size:100,src:l(a).defaultAvatar,onClick:r.submitUpload},null,8,["src","onClick"])]),_:1})]),_:1},8,["headers"]),e(n,null,{default:u(()=>[X]),_:1}),e(n,{label:"\u6CE8\u518C\u65B9\u5F0F",prop:"registerWay"},{default:u(()=>[e(i,{modelValue:l(a).registerWay,"onUpdate:modelValue":t[0]||(t[0]=d=>l(a).registerWay=d)},{default:u(()=>[e(s,{label:10},{default:u(()=>[o("\u540C\u65F6\u5141\u8BB8\u90AE\u7BB1\u548C\u624B\u673A\u53F7\u6CE8\u518C")]),_:1}),e(s,{label:20},{default:u(()=>[o("\u53EA\u5141\u8BB8\u90AE\u7BB1\u6CE8\u518C")]),_:1}),e(s,{label:30},{default:u(()=>[o("\u53EA\u5141\u8BB8\u624B\u673A\u53F7\u6CE8\u518C")]),_:1}),e(s,{label:0},{default:u(()=>[o("\u4E0D\u5141\u8BB8\u6CE8\u518C\uFF0C\u53EA\u80FD\u767B\u5F55")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u673A\u5668\u9A8C\u8BC1",prop:"enableVerifyCode"},{default:u(()=>[e(i,{modelValue:l(a).enableVerifyCode,"onUpdate:modelValue":t[1]||(t[1]=d=>l(a).enableVerifyCode=d)},{default:u(()=>[e(s,{label:1},{default:u(()=>[o("\u542F\u7528")]),_:1}),e(s,{label:0},{default:u(()=>[o("\u5173\u95ED")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u4E8C\u7EF4\u7801\u767B\u5F55",prop:"enableERcode"},{default:u(()=>[e(i,{modelValue:l(a).enableERcode,"onUpdate:modelValue":t[2]||(t[2]=d=>l(a).enableERcode=d)},{default:u(()=>[e(s,{label:1,disabled:""},{default:u(()=>[o("\u542F\u7528")]),_:1}),e(s,{label:0,disabled:""},{default:u(()=>[o("\u5173\u95ED")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["model"]),P((g(),S(h,null,{default:u(()=>[e(R,{type:"primary",onClick:A},{default:u(()=>[o("\u4FDD\u5B58")]),_:1})]),_:1})),[[w,["setting:login:save"]]])])}}});export{ae as default};
