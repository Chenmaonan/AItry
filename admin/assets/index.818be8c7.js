import{e as S,q as T,s as L,aW as N,b2 as j,be as q,bf as I,b3 as Y,b4 as Z,b5 as z,b6 as O,o as n,g as W,h as e,w as a,u as t,a$ as X,Z as s,j as C,C as G,k as i,m,V as H,am as B,aX as J,aY as M,ab as Q,aZ as ee,b1 as ae}from"./.pnpm.adeb4fcc.js";import{u as le,_ as te}from"./usePaging.8d363e02.js";import{f as se,_ as ue}from"./index.32787260.js";import{_ as ne,r as oe,g as ie}from"./edit.vue_vue_type_script_setup_true_lang.e5b69b33.js";import"./index.c77a1531.js";import"./index.vue_vue_type_style_index_0_scoped_a5e5144a_lang.04acc55d.js";import"./useDictOptions.f89234d7.js";import"./model.1937115d.js";const de=C("br",null,null,-1),ce={class:"flex"},_e={class:"mt-4"},me={class:"flex justify-end mt-4"},he=S({__name:"index",setup(re){const g=T(!1),y=L(),o=N({key:"",model:"",status:"",isPlus:-1}),V=async()=>{var d;g.value=!0,await B(),(d=y.value)==null||d.open("add")},F=async d=>{var u,k;g.value=!0,await B(),(u=y.value)==null||u.open("edit"),(k=y.value)==null||k.setFormData(d)},x=async d=>{await se.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await oe({id:d}),f()},{pager:p,getLists:f,resetPage:h,resetParams:P}=le({fetchFun:ie,params:o});return j(()=>{f()}),f(),(d,u)=>{const k=J,v=M,c=q,E=I,b=Q,D=ee,w=ae,A=ue,r=Y,_=Z,K=z,U=te,$=O;return n(),W("div",null,[e(w,{class:"!border-none",shadow:"never"},{default:a(()=>[e(D,{ref:"formRef",class:"mb-[-16px]",model:t(o),inline:!0},{default:a(()=>[e(v,{label:"\u5185\u5BB9"},{default:a(()=>[e(k,{class:"w-[280px]",modelValue:t(o).key,"onUpdate:modelValue":u[0]||(u[0]=l=>t(o).key=l),placeholder:"sk-",clearable:"",onKeyup:X(t(h),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(v,{label:"\u7C7B\u578B"},{default:a(()=>[e(E,{class:"w-[280px]",modelValue:t(o).isPlus,"onUpdate:modelValue":u[1]||(u[1]=l=>t(o).isPlus=l)},{default:a(()=>[e(c,{label:"\u5168\u90E8",value:-1}),e(c,{label:"\u666E\u901A",value:0}),e(c,{label:"PLUS",value:1})]),_:1},8,["modelValue"])]),_:1}),e(v,{label:"\u72B6\u6001"},{default:a(()=>[e(E,{class:"w-[280px]",modelValue:t(o).status,"onUpdate:modelValue":u[2]||(u[2]=l=>t(o).status=l)},{default:a(()=>[e(c,{label:"\u5168\u90E8",value:""}),e(c,{label:"\u6709\u6548",value:10}),e(c,{label:"\u8017\u5C3D",value:20}),e(c,{label:"\u5C01\u7981",value:30})]),_:1},8,["modelValue"])]),_:1}),de,e(v,null,{default:a(()=>[e(b,{type:"primary",onClick:t(h)},{default:a(()=>[s("\u67E5\u8BE2")]),_:1},8,["onClick"]),e(b,{onClick:t(P)},{default:a(()=>[s("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),e(w,{class:"!border-none mt-4",shadow:"never"},{default:a(()=>[C("div",ce,[e(b,{type:"success",onClick:V},{icon:a(()=>[e(A,{name:"el-icon-Plus"})]),default:a(()=>[s(" \u6DFB\u52A0 ")]),_:1})]),C("div",_e,[G((n(),i(K,{size:"large",data:t(p).lists,height:"600",style:{width:"100%"}},{default:a(()=>[e(r,{label:"KEY",prop:"key",sortable:"","min-width":"400"}),e(r,{label:"\u6A21\u578B",prop:"model",sortable:"","min-width":"150"}),e(r,{label:"\u7C7B\u578B","min-width":"100"},{default:a(({row:l})=>[l.isPlus==0?(n(),i(_,{key:0},{default:a(()=>[s("\u666E\u901A")]),_:1})):m("",!0),l.isPlus==1?(n(),i(_,{key:1,type:"success"},{default:a(()=>[s("PLUS")]),_:1})):m("",!0)]),_:1}),e(r,{label:"\u72B6\u6001","min-width":"80"},{default:a(({row:l})=>[l.status==10?(n(),i(_,{key:0,type:"success"},{default:a(()=>[s("\u6709\u6548")]),_:1})):m("",!0),l.status==20?(n(),i(_,{key:1,type:"warning"},{default:a(()=>[s("\u8017\u5C3D")]),_:1})):m("",!0),l.status==30?(n(),i(_,{key:2,type:"danger"},{default:a(()=>[s("\u5C01\u7981")]),_:1})):m("",!0)]),_:1}),e(r,{label:"\u542F\u7528","min-width":"80"},{default:a(({row:l})=>[l.isDisable==0?(n(),i(_,{key:0,type:"success"},{default:a(()=>[s("\u542F\u7528")]),_:1})):m("",!0),l.isDisable==1?(n(),i(_,{key:1,type:"danger"},{default:a(()=>[s("\u7981\u7528")]),_:1})):m("",!0)]),_:1}),e(r,{label:"\u64CD\u4F5C","min-width":"120",fixed:"right"},{default:a(({row:l})=>[e(b,{type:"primary",link:"",onClick:R=>F(l)},{default:a(()=>[s(" \u7F16\u8F91 ")]),_:2},1032,["onClick"]),e(b,{type:"danger",link:"",onClick:R=>x(l.id)},{default:a(()=>[s(" \u5220\u9664 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[$,t(p).loading]]),C("div",me,[e(U,{modelValue:t(p),"onUpdate:modelValue":u[3]||(u[3]=l=>H(p)?p.value=l:null),onChange:t(f)},null,8,["modelValue","onChange"])])])]),_:1}),e(ne,{ref_key:"editRef",ref:y,onSuccess:t(f)},null,8,["onSuccess"])])}}});export{he as default};
