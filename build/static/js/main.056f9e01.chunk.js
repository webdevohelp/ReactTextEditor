(this.webpackJsonpreactcodewithharry=this.webpackJsonpreactcodewithharry||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(7),s=a.n(n),l=a(4),o=(a(13),a(8)),i=a(2),d=a(1);function b(e){return Object(d.jsx)("div",{children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("form",{className:"d-flex px-4",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-success text-".concat("light"===e.mode?"dark":"light"),type:"submit",children:"Search"})]}),Object(d.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(d.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.handleMode}),Object(d.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})]})})})}b.defaultProps={title:"Title Please",aboutText:"Default text, please change it!"};var h=function(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsxs)("div",{className:"container py-3",style:{backgroundColor:"dark"===e.mode?"rgb(33,37,41)":"white",color:"dark"===e.mode?"white":"rgb(33,37,41)"},children:[Object(d.jsx)("h2",{children:e.heading}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"myBox",className:"form-label",children:"Enter your Text below:"}),Object(d.jsx)("textarea",{className:"form-control",id:"myBox",rows:"8",placeholder:"Enter your text here...",value:n,onChange:function(e){s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"rgb(73,77,71)":"white",color:"dark"===e.mode?"white":"rgb(33,37,41)"}})]}),Object(d.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){s(n.toUpperCase()),e.showAlert("Converted to UpperCase!","success")},children:"Convert to Uppercase"}),Object(d.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){s(n.toLowerCase()),e.showAlert("Converted to LowerCase!","success")},children:"Convert to Lowercase"}),Object(d.jsx)("button",{className:"btn btn-danger mx-2",onClick:function(t){s(""),e.showAlert("TextBox Cleared!","success")},children:"Clear"}),Object(d.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){navigator.clipboard.writeText(n),e.showAlert("Text Copied!","success")},children:"Copy Text"}),Object(d.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra spaces removed!","success")},children:"Remove Extra Spaces"}),Object(d.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.split(/[ ]+/);s(t.join("")),e.showAlert("All spaces removed!","success")},children:"Remove All Spaces"})]}),Object(d.jsxs)("div",{className:"container my-3 py-3",style:{backgroundColor:"dark"===e.mode?"rgb(33,37,41)":"white",color:"dark"===e.mode?"white":"rgb(33,37,41)"},children:[Object(d.jsx)("h2",{children:"Summary:"}),Object(d.jsxs)("p",{children:[n.split(" ").length," words and ",n.length," characters."]}),Object(d.jsxs)("p",{children:["Read in ",.008*n.split(" ").length," minutes"]}),Object(d.jsx)("h4",{children:"Preview:"}),Object(d.jsx)("p",{children:n})]})]})};var j=function(e){return e.alert&&Object(d.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(d.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),":"," ",e.alert.msg]})};var m=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),m=Object(l.a)(s,2),u=m[0],x=m[1],p=function(e,t){x({msg:e,type:t}),setTimeout((function(){x(null)}),1500)};return Object(d.jsx)(r.a.Fragment,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(b,{title:"Text Utils",mode:a,handleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="rgb(0, 0, 0)",p("Dark mode has been enabled","success")):(n("light"),document.body.style.backgroundColor="white",p("Light mode has been enabled","success"))}}),Object(d.jsx)(j,{alert:u}),Object(d.jsx)(i.c,{children:Object(d.jsx)(i.a,{path:"",element:Object(d.jsx)(h,{showAlert:p,heading:"Try TextUtils - word counter, character counter, remove extra spaces",mode:a})})})]})})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),n(e),s(e)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),u()}},[[15,1,2]]]);
//# sourceMappingURL=main.056f9e01.chunk.js.map