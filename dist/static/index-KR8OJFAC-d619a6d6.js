import{u as j,r as c,c as h,j as n,P as v,e as _,f as B,g as I,h as E,B as H,i as b,A as k,k as y,l as C}from"./sanity-9611f603.js";function g(e){const{actionHandlers:t,index:s,menuItems:a,menuItemGroups:r,title:i}=e,{features:o}=B();return!(a!=null&&a.length)&&!i?null:n.jsx(I,{actions:n.jsx(E,{menuItems:a,menuItemGroups:r,actionHandlers:t}),backButton:o.backButton&&s>0&&n.jsx(H,{as:b,"data-as":"a",icon:k,mode:"bleed",tooltipProps:{content:"Back"}}),title:i})}var u=Object.freeze,w=Object.defineProperty,A=(e,t)=>u(w(e,"raw",{value:u(t||e.slice())})),d;const R=j(C)(d||(d=A([`
  position: relative;
`])));function S(e){const{children:t}=e,{collapsed:s}=y();return n.jsx(R,{hidden:s,height:"fill",overflow:"auto",children:t})}function z(e){const{index:t,pane:s,paneKey:a,...r}=e,{child:i,component:o,menuItems:p,menuItemGroups:m,type:T,...f}=s,[l,x]=c.useState(null),{title:P=""}=h(s);return n.jsxs(v,{id:a,minWidth:320,selected:r.isSelected,children:[n.jsx(g,{actionHandlers:l==null?void 0:l.actionHandlers,index:t,menuItems:p,menuItemGroups:m,title:P}),n.jsxs(S,{children:[_.isValidElementType(o)&&c.createElement(o,{...r,...f,ref:x,child:i,paneKey:a}),c.isValidElement(o)&&o]})]})}export{z as default};
