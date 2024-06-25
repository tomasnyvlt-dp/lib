import{M as c,C as p,b,A as x}from"./index-480a4fd2.js";import{D as a,g as l,h as g}from"./getFieldWrapper-33622bd0.js";import{S as m}from"./StorybookProviderDecorator-55f3cb6c.js";import{j as n}from"./jsx-runtime-1a9d9a93.js";import{u as d}from"./index-4811e648.js";import"./iframe-378f4ed7.js";import"../sb-preview/runtime.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-c59ef0a1.js";import"./index-8c3ac41d.js";import"./index-f4441307.js";import"./index-356e4a49.js";import"./index-8d47fad6.js";function i(e){const o=Object.assign({h1:"h1",h2:"h2"},d(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Fields / RangeField",component:a,decorators:[m],tags:["autodocs"],argTypes:{label:{control:"text"},min:{control:"number"},max:{control:"number"},step:{control:"number"},isDisabled:{control:"boolean"}}}),`
`,n.jsx(o.h1,{id:"rangefield",children:"RangeField"}),`
`,n.jsx(p,{children:n.jsx(b,{name:"RangeField",args:{label:"Obchodní sleva na povinné ručení",min:0,max:100,step:1,isDisabled:!1},children:t=>n.jsx(a,{schema:l({title:"RangeField",sectionContent:[{component:"range-field",name:"storybook.RangeField",label:t.label,min:t.min,max:t.max,step:t.step,isDisabled:t.isDisabled}]})})})}),`
`,n.jsx(o.h2,{id:"component-props",children:"Component Props"}),`
`,n.jsx(x,{of:g})]})}function u(e={}){const{wrapper:o}=Object.assign({},d(),e.components);return o?n.jsx(o,{...e,children:n.jsx(i,{...e})}):i(e)}const r=e=>n.jsx(a,{schema:l({title:"RangeField",sectionContent:[{component:"range-field",name:"storybook.RangeField",label:e.label,min:e.min,max:e.max,step:e.step,isDisabled:e.isDisabled}]})});r.storyName="RangeField";r.args={label:"Obchodní sleva na povinné ručení",min:0,max:100,step:1,isDisabled:!1};r.parameters={storySource:{source:`args => <DataDrivenForm schema={getFieldWrapper({
  title: "RangeField",
  sectionContent: [{
    component: "range-field",
    name: "storybook.RangeField",
    label: args.label,
    min: args.min,
    max: args.max,
    step: args.step,
    isDisabled: args.isDisabled
  }]
})} />`}};const s={title:"Fields / RangeField",decorators:[m],component:a,argTypes:{label:{control:"text"},min:{control:"number"},max:{control:"number"},step:{control:"number"},isDisabled:{control:"boolean"}},tags:["stories-mdx"],includeStories:["rangeField"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:u};const _=["rangeField"];export{_ as __namedExportsOrder,s as default,r as rangeField};
