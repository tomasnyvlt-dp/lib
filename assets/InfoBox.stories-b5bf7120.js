import{M as f,C as x,b as l,A as d}from"./index-b31d554d.js";import{D as e,g as i,b as u}from"./getFieldWrapper-2b7a3667.js";import{S as m}from"./StorybookProviderDecorator-333232ab.js";import{j as o}from"./jsx-runtime-1a9d9a93.js";import{u as c}from"./index-4811e648.js";import"./iframe-c70191d6.js";import"../sb-preview/runtime.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-c59ef0a1.js";import"./index-8c3ac41d.js";import"./index-f4441307.js";import"./index-356e4a49.js";import"./index-8d47fad6.js";function s(n){const t=Object.assign({h1:"h1",h2:"h2"},c(),n.components);return o.jsxs(o.Fragment,{children:[o.jsx(f,{title:"Contents/InfoBox",component:e,decorators:[m],tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","gradient","clear","infoNoBorder","error","notice","success"],description:"The variant of the InfoBox",table:{type:{summary:"string"},defaultValue:{summary:"info"}}}}}),`
`,o.jsx(t.h1,{id:"infobox",children:"InfoBox"}),`
`,o.jsx(x,{children:o.jsx(l,{name:"InfoBox",args:{variant:"info"},children:p=>o.jsx(e,{schema:i({title:"InfoBox",sectionContent:[{component:"info-box",content:"Tyto dokumenty vám pošleme také na e-mail nebo poštou.",name:"info-box-storybook",variant:p.variant}]})})})}),`
`,o.jsx(t.h2,{id:"component-props",children:"Component Props"}),`
`,o.jsx(d,{of:u})]})}function y(n={}){const{wrapper:t}=Object.assign({},c(),n.components);return t?o.jsx(t,{...n,children:o.jsx(s,{...n})}):s(n)}const a=n=>o.jsx(e,{schema:i({title:"InfoBox",sectionContent:[{component:"info-box",content:"Tyto dokumenty vám pošleme také na e-mail nebo poštou.",name:"info-box-storybook",variant:n.variant}]})});a.storyName="InfoBox";a.args={variant:"info"};a.parameters={storySource:{source:`args => <DataDrivenForm schema={getFieldWrapper({
  title: "InfoBox",
  sectionContent: [{
    component: "info-box",
    content: "Tyto dokumenty v\\xE1m po\\u0161leme tak\\xE9 na e-mail nebo po\\u0161tou.",
    name: "info-box-storybook",
    variant: args.variant
  }]
})} />`}};const r={title:"Contents/InfoBox",decorators:[m],component:e,argTypes:{variant:{control:"select",options:["info","gradient","clear","infoNoBorder","error","notice","success"],description:"The variant of the InfoBox",table:{type:{summary:"string"},defaultValue:{summary:"info"}}}},tags:["stories-mdx"],includeStories:["infoBox"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:y};const S=["infoBox"];export{S as __namedExportsOrder,r as default,a as infoBox};