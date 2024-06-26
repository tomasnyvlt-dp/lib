import{M as m,C as p,b as u,A as b}from"./index-b31d554d.js";import{D as n,g as l,c as F}from"./getFieldWrapper-2b7a3667.js";import{S as d}from"./StorybookProviderDecorator-333232ab.js";import{j as t}from"./jsx-runtime-1a9d9a93.js";import{u as c}from"./index-4811e648.js";import"./iframe-c70191d6.js";import"../sb-preview/runtime.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-c59ef0a1.js";import"./index-8c3ac41d.js";import"./index-f4441307.js";import"./index-356e4a49.js";import"./index-8d47fad6.js";function s(e){const o=Object.assign({h1:"h1",h2:"h2"},c(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Fields / ButtonField",component:n,decorators:[d],tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:{type:"select",options:["solid","outline","clear","gradient"]}}}}),`
`,t.jsx(o.h1,{id:"buttonfield",children:"ButtonField"}),`
`,t.jsx(p,{children:t.jsx(u,{name:"ButtonField",args:{label:"Button Field",variant:"gradient"},children:i=>t.jsx(n,{schema:l({title:"ButtonField",sectionContent:[{component:"button-field",name:"storybook.ButtonField",label:i.label,variant:i.variant}]})})})}),`
`,t.jsx(o.h2,{id:"component-props",children:"Component Props"}),`
`,t.jsx(b,{of:F})]})}function g(e={}){const{wrapper:o}=Object.assign({},c(),e.components);return o?t.jsx(o,{...e,children:t.jsx(s,{...e})}):s(e)}const a=e=>t.jsx(n,{schema:l({title:"ButtonField",sectionContent:[{component:"button-field",name:"storybook.ButtonField",label:e.label,variant:e.variant}]})});a.storyName="ButtonField";a.args={label:"Button Field",variant:"gradient"};a.parameters={storySource:{source:`args => <DataDrivenForm schema={getFieldWrapper({
  title: "ButtonField",
  sectionContent: [{
    component: "button-field",
    name: "storybook.ButtonField",
    label: args.label,
    variant: args.variant
  }]
})} />`}};const r={title:"Fields / ButtonField",decorators:[d],component:n,argTypes:{label:{control:"text"},variant:{control:{type:"select",options:["solid","outline","clear","gradient"]}}},tags:["stories-mdx"],includeStories:["buttonField"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:g};const T=["buttonField"];export{T as __namedExportsOrder,a as buttonField,r as default};
