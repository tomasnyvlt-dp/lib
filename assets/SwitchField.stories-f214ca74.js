import{M as m,C as p,b,A as h}from"./index-b31d554d.js";import{D as a,g as r,j as u}from"./getFieldWrapper-2b7a3667.js";import{S as c}from"./StorybookProviderDecorator-333232ab.js";import{j as e}from"./jsx-runtime-1a9d9a93.js";import{u as d}from"./index-4811e648.js";import"./iframe-c70191d6.js";import"../sb-preview/runtime.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-c59ef0a1.js";import"./index-8c3ac41d.js";import"./index-f4441307.js";import"./index-356e4a49.js";import"./index-8d47fad6.js";function s(t){const o=Object.assign({h1:"h1",h2:"h2"},d(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Fields / SwitchField",component:a,decorators:[c],tags:["autodocs"],argTypes:{label:{control:"text"},options:{control:"object"},initialValue:{control:"text"},isDisabled:{control:"boolean"}}}),`
`,e.jsx(o.h1,{id:"switchfield",children:"SwitchField"}),`
`,e.jsx(p,{children:e.jsx(b,{name:"SwitchField",args:{label:"Label",options:[{label:"Hodnota 1",value:"value1"},{label:"Hodnota 2",value:"value2"}],initialValue:"value1",isDisabled:!1},children:i=>e.jsx(a,{schema:r({title:"SwitchField",sectionContent:[{component:"switch-field",name:"storybook.switchfield",label:i.label,options:i.options,initialValue:i.initialValue,isDisabled:i.isDisabled}]})})})}),`
`,e.jsx(o.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(h,{of:u})]})}function x(t={}){const{wrapper:o}=Object.assign({},d(),t.components);return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s(t)}const n=t=>e.jsx(a,{schema:r({title:"SwitchField",sectionContent:[{component:"switch-field",name:"storybook.switchfield",label:t.label,options:t.options,initialValue:t.initialValue,isDisabled:t.isDisabled}]})});n.storyName="SwitchField";n.args={label:"Label",options:[{label:"Hodnota 1",value:"value1"},{label:"Hodnota 2",value:"value2"}],initialValue:"value1",isDisabled:!1};n.parameters={storySource:{source:`args => <DataDrivenForm schema={getFieldWrapper({
  title: "SwitchField",
  sectionContent: [{
    component: "switch-field",
    name: "storybook.switchfield",
    label: args.label,
    options: args.options,
    initialValue: args.initialValue,
    isDisabled: args.isDisabled
  }]
})} />`}};const l={title:"Fields / SwitchField",decorators:[c],component:a,argTypes:{label:{control:"text"},options:{control:"object"},initialValue:{control:"text"},isDisabled:{control:"boolean"}},tags:["stories-mdx"],includeStories:["switchField"]};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:x};const _=["switchField"];export{_ as __namedExportsOrder,l as default,n as switchField};
