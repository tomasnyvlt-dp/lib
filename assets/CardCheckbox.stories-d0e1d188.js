import{M as p,C as m,b as u,A as b}from"./index-480a4fd2.js";import{D as o,g as l,C as h}from"./getFieldWrapper-33622bd0.js";import{S as c}from"./StorybookProviderDecorator-55f3cb6c.js";import{j as t}from"./jsx-runtime-1a9d9a93.js";import{u as d}from"./index-4811e648.js";import"./iframe-378f4ed7.js";import"../sb-preview/runtime.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-c59ef0a1.js";import"./index-8c3ac41d.js";import"./index-f4441307.js";import"./index-356e4a49.js";import"./index-8d47fad6.js";function s(e){const a=Object.assign({h1:"h1",h2:"h2"},d(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Contents / CardCheckbox",component:o,decorators:[c],tags:["autodocs"]}),`
`,t.jsx(a.h1,{id:"cardcheckbox",children:"CardCheckbox"}),`
`,t.jsx(m,{children:t.jsx(u,{name:"CardCheckbox",args:{label:"Povinné ručení",initialValue:!0,helper:'{"blocks":[{"key":"bqubj","text":"Jak si správně nastavit limit pojištění?","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":40,"key":0}],"data":{}}],"entityMap":{"0":{"type":"LINK","mutability":"MUTABLE","data":{"url":"#modal=jak-nastavit-limit-pojisteni","targetOption":"_self"}}}}',price:1e3,priceShortTerm:!0,defaultSalesDiscount:.5,editMode:!1,isDisabled:!1,isPriceLoading:!1,fields:[{component:"radio-select-container",label:"Nastavte si limit",initialValue:"100",name:"mtpl.basicLimit",options:[],resolveProps:()=>({options:[{label:"100 mil.",value:111,price:"1111 Kč / rok"},{label:"200 mil.",value:1121,price:"11211 Kč / rok"}]})}]},children:i=>t.jsx(o,{schema:l({title:"CardCheckbox",sectionContent:[{component:"card-checkbox",label:i.label,name:"storybookmtpl.selected",initialValue:i.initialValue,helper:i.helper,price:i.price,priceShortTerm:i.priceShortTerm,defaultSalesDiscount:i.defaultSalesDiscount,editMode:i.editMode,isDisabled:i.isDisabled,isPriceLoading:i.isPriceLoading,fields:i.fields}]})})})}),`
`,t.jsx(a.h2,{id:"component-props",children:"Component Props"}),`
`,t.jsx(b,{of:h})]})}function x(e={}){const{wrapper:a}=Object.assign({},d(),e.components);return a?t.jsx(a,{...e,children:t.jsx(s,{...e})}):s(e)}const r=e=>t.jsx(o,{schema:l({title:"CardCheckbox",sectionContent:[{component:"card-checkbox",label:e.label,name:"storybookmtpl.selected",initialValue:e.initialValue,helper:e.helper,price:e.price,priceShortTerm:e.priceShortTerm,defaultSalesDiscount:e.defaultSalesDiscount,editMode:e.editMode,isDisabled:e.isDisabled,isPriceLoading:e.isPriceLoading,fields:e.fields}]})});r.storyName="CardCheckbox";r.args={label:"Povinné ručení",initialValue:!0,helper:'{"blocks":[{"key":"bqubj","text":"Jak si správně nastavit limit pojištění?","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":40,"key":0}],"data":{}}],"entityMap":{"0":{"type":"LINK","mutability":"MUTABLE","data":{"url":"#modal=jak-nastavit-limit-pojisteni","targetOption":"_self"}}}}',price:1e3,priceShortTerm:!0,defaultSalesDiscount:.5,editMode:!1,isDisabled:!1,isPriceLoading:!1,fields:[{component:"radio-select-container",label:"Nastavte si limit",initialValue:"100",name:"mtpl.basicLimit",options:[],resolveProps:()=>({options:[{label:"100 mil.",value:111,price:"1111 Kč / rok"},{label:"200 mil.",value:1121,price:"11211 Kč / rok"}]})}]};r.parameters={storySource:{source:`args => <DataDrivenForm schema={getFieldWrapper({
  title: "CardCheckbox",
  sectionContent: [{
    component: "card-checkbox",
    label: args.label,
    name: "storybookmtpl.selected",
    initialValue: args.initialValue,
    helper: args.helper,
    price: args.price,
    priceShortTerm: args.priceShortTerm,
    defaultSalesDiscount: args.defaultSalesDiscount,
    editMode: args.editMode,
    isDisabled: args.isDisabled,
    isPriceLoading: args.isPriceLoading,
    fields: args.fields
  }]
})} />`}};const n={title:"Contents / CardCheckbox",decorators:[c],component:o,tags:["stories-mdx"],includeStories:["cardCheckbox"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:x};const E=["cardCheckbox"];export{E as __namedExportsOrder,r as cardCheckbox,n as default};
