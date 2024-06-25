import{M as b,C as u,b as c,A as p}from"./index-df6a0e04.js";import{D as t,g as d,N as x}from"./getFieldWrapper-182c6e0a.js";import{S as s}from"./StorybookProviderDecorator-f17c6e44.js";import{j as a}from"./jsx-runtime-1a9d9a93.js";import{u as m}from"./index-4811e648.js";import"./iframe-e00dc5cf.js";import"../sb-preview/runtime.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-c59ef0a1.js";import"./index-8c3ac41d.js";import"./index-f4441307.js";import"./index-356e4a49.js";import"./index-8d47fad6.js";function r(e){const n=Object.assign({h1:"h1",h2:"h2"},m(),e.components);return a.jsxs(a.Fragment,{children:[a.jsx(b,{title:"Fields / NumberField",component:t,decorators:[s],tags:["autodocs"],argTypes:{labelText:{control:"text"},isDisabled:{control:"boolean"},textarea:{control:"boolean"},hideField:{control:"boolean"},initialValue:{control:"number"},disabledAdding:{control:"boolean"},disabledSubtracting:{control:"boolean"},changeBy:{control:"number"},isMonetaryValue:{control:"boolean"},minimumValue:{control:"number"}}}),`
`,a.jsx(n.h1,{id:"numberfield",children:"NumberField"}),`
`,a.jsx(u,{children:a.jsx(c,{name:"NumberField",args:{labelText:"Number Field",isDisabled:!1,textarea:!1,hideField:!1,initialValue:1,disabledAdding:!1,disabledSubtracting:!1,changeBy:1,isMonetaryValue:!1,minimumValue:0},children:i=>a.jsx(t,{schema:d({title:"NumberField",sectionContent:[{component:"number-field",name:"storybook.numberField",labelText:i.labelText,isDisabled:i.isDisabled,textarea:i.textarea,hideField:i.hideField,initialValue:i.initialValue,disabledAdding:i.disabledAdding,disabledSubtracting:i.disabledSubtracting,changeBy:i.changeBy,isMonetaryValue:i.isMonetaryValue,minimumValue:i.minimumValue}]})})})}),`
`,a.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,a.jsx(p,{of:x})]})}function g(e={}){const{wrapper:n}=Object.assign({},m(),e.components);return n?a.jsx(n,{...e,children:a.jsx(r,{...e})}):r(e)}const o=e=>a.jsx(t,{schema:d({title:"NumberField",sectionContent:[{component:"number-field",name:"storybook.numberField",labelText:e.labelText,isDisabled:e.isDisabled,textarea:e.textarea,hideField:e.hideField,initialValue:e.initialValue,disabledAdding:e.disabledAdding,disabledSubtracting:e.disabledSubtracting,changeBy:e.changeBy,isMonetaryValue:e.isMonetaryValue,minimumValue:e.minimumValue}]})});o.storyName="NumberField";o.args={labelText:"Number Field",isDisabled:!1,textarea:!1,hideField:!1,initialValue:1,disabledAdding:!1,disabledSubtracting:!1,changeBy:1,isMonetaryValue:!1,minimumValue:0};o.parameters={storySource:{source:`args => <DataDrivenForm schema={getFieldWrapper({
  title: "NumberField",
  sectionContent: [{
    component: "number-field",
    name: "storybook.numberField",
    labelText: args.labelText,
    isDisabled: args.isDisabled,
    textarea: args.textarea,
    hideField: args.hideField,
    initialValue: args.initialValue,
    disabledAdding: args.disabledAdding,
    disabledSubtracting: args.disabledSubtracting,
    changeBy: args.changeBy,
    isMonetaryValue: args.isMonetaryValue,
    minimumValue: args.minimumValue
  }]
})} />`}};const l={title:"Fields / NumberField",decorators:[s],component:t,argTypes:{labelText:{control:"text"},isDisabled:{control:"boolean"},textarea:{control:"boolean"},hideField:{control:"boolean"},initialValue:{control:"number"},disabledAdding:{control:"boolean"},disabledSubtracting:{control:"boolean"},changeBy:{control:"number"},isMonetaryValue:{control:"boolean"},minimumValue:{control:"number"}},tags:["stories-mdx"],includeStories:["numberField"]};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:g};const k=["numberField"];export{k as __namedExportsOrder,l as default,o as numberField};
