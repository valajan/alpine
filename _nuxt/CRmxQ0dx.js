import{M as m,I as p,d as c,aa as i,r as l,N as e,l as u}from"./D99dUCFx.js";import{u as d}from"./BZu3uUDV.js";import f from"./C7NIN99R.js";import y from"./B_AHvExs.js";import"./Dc8RkHmW.js";import"./BFopKkY7.js";import"./D6IeIhGN.js";import"./Cc33ugSm.js";import"./CDRa8S6k.js";import"./nBIehvs4.js";import"./B_goewLo.js";import"./fdWi6LQM.js";import"./BiBYJBiW.js";import"./zXQslGGe.js";import"./B2DI6PTc.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=u(h,[["__scopeId","data-v-dca80b55"]]);export{V as default};
