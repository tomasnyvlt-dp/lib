import{M as p,C as d,b as u,A as x}from"./index-df6a0e04.js";import{D as r,g as l,a as b}from"./getFieldWrapper-182c6e0a.js";import{S as i}from"./StorybookProviderDecorator-f17c6e44.js";import{j as e}from"./jsx-runtime-1a9d9a93.js";import{u as c}from"./index-4811e648.js";import"./iframe-e00dc5cf.js";import"../sb-preview/runtime.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-c59ef0a1.js";import"./index-8c3ac41d.js";import"./index-f4441307.js";import"./index-356e4a49.js";import"./index-8d47fad6.js";function m(o){const a=Object.assign({h1:"h1",h2:"h2"},c(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Contents / CardPerson",component:r,decorators:[i],tags:["autodocs"]}),`
`,e.jsx(a.h1,{id:"card-person",children:"Card Person"}),`
`,e.jsx(d,{children:e.jsx(u,{name:"Card person",args:{tags:["Pojistník"],person:{namePrefix:"Ing.",firstName:"Franta",lastName:"Vomáčka"},items:[{label:"Číslo smlouvy:",value:123456},{label:"Datum narození:",value:"12. 2. 2000"},{label:"Rodné číslo:",value:"912212/2131"},{label:"Kontaktní adresa:",value:"Ambrožova 12, Aš, 130 00"},{label:"Telefon:",value:"+420 123 456 789"},{label:"E-mail:",value:"email@email.com"}]},children:s=>e.jsx(r,{schema:l({title:"Karta osoby",sectionContent:[{component:"card-person",name:"storybook.cardPerson",tags:s.tags,person:s.person,items:s.items}]})})})}),`
`,e.jsx(a.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(x,{of:b})]})}function g(o={}){const{wrapper:a}=Object.assign({},c(),o.components);return a?e.jsx(a,{...o,children:e.jsx(m,{...o})}):m(o)}const n=o=>e.jsx(r,{schema:l({title:"Karta osoby",sectionContent:[{component:"card-person",name:"storybook.cardPerson",tags:o.tags,person:o.person,items:o.items}]})});n.storyName="Card person";n.args={tags:["Pojistník"],person:{namePrefix:"Ing.",firstName:"Franta",lastName:"Vomáčka"},items:[{label:"Číslo smlouvy:",value:123456},{label:"Datum narození:",value:"12. 2. 2000"},{label:"Rodné číslo:",value:"912212/2131"},{label:"Kontaktní adresa:",value:"Ambrožova 12, Aš, 130 00"},{label:"Telefon:",value:"+420 123 456 789"},{label:"E-mail:",value:"email@email.com"}]};n.parameters={storySource:{source:`args => <DataDrivenForm schema={getFieldWrapper({
  title: "Karta osoby",
  sectionContent: [{
    component: "card-person",
    name: "storybook.cardPerson",
    tags: args.tags,
    person: args.person,
    items: args.items
  }]
})} />`}};const t={title:"Contents / CardPerson",decorators:[i],component:r,tags:["stories-mdx"],includeStories:["cardPerson"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:g};const N=["cardPerson"];export{N as __namedExportsOrder,n as cardPerson,t as default};
