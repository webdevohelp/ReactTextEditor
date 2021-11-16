(this.webpackJsonpreactcodewithharry=this.webpackJsonpreactcodewithharry||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),n=a(4),s=a.n(n),l=a(2),o=(a(9),a(0));function i(e){return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("form",{className:"d-flex px-4",children:[Object(o.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(o.jsx)("button",{className:"btn btn-outline-success text-".concat("light"===e.mode?"dark":"light"),type:"submit",children:"Search"})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.handleMode}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})]})})})}i.defaultProps={title:"Title Please",aboutText:"Default text, please change it!"};var b=function(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsxs)("div",{className:"container py-3",style:{backgroundColor:"dark"===e.mode?"rgb(33,37,41)":"white",color:"dark"===e.mode?"white":"rgb(33,37,41)"},children:[Object(o.jsx)("h2",{children:e.heading}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"myBox",className:"form-label",children:"Enter your Text below:"}),Object(o.jsx)("textarea",{className:"form-control",id:"myBox",rows:"8",placeholder:"Enter your text here...",value:n,onChange:function(e){s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"rgb(73,77,71)":"white",color:"dark"===e.mode?"white":"rgb(33,37,41)"}})]}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){s(n.toUpperCase()),e.showAlert("Converted to UpperCase!","success")},children:"Convert to Uppercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){s(n.toLowerCase()),e.showAlert("Converted to LowerCase!","success")},children:"Convert to Lowercase"}),Object(o.jsx)("button",{className:"btn btn-danger mx-2",onClick:function(t){s(""),e.showAlert("TextBox Cleared!","success")},children:"Clear"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){navigator.clipboard.writeText(n),e.showAlert("Text Copied!","success")},children:"Copy Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra spaces removed!","success")},children:"Remove Extra Spaces"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.split(/[ ]+/);s(t.join("")),e.showAlert("All spaces removed!","success")},children:"Remove All Spaces"})]}),Object(o.jsxs)("div",{className:"container my-3 py-3",style:{backgroundColor:"dark"===e.mode?"rgb(33,37,41)":"white",color:"dark"===e.mode?"white":"rgb(33,37,41)"},children:[Object(o.jsx)("h2",{children:"Summary:"}),Object(o.jsxs)("p",{children:[n.split(" ").length," words and ",n.length," characters."]}),Object(o.jsxs)("p",{children:["Read in ",.008*n.split(" ").length," minutes"]}),Object(o.jsx)("h4",{children:"Preview:"}),Object(o.jsx)("p",{children:n})]})]})};var d=function(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),":"," ",e.alert.msg]})};var h=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),h=Object(l.a)(s,2),j=h[0],m=h[1],u=function(e,t){m({msg:e,type:t}),setTimeout((function(){m(null)}),1500)};return Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)(i,{title:"Text Utils",mode:a,handleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="rgb(0, 0, 0)",u("Dark mode has been enabled","success")):(n("light"),document.body.style.backgroundColor="white",u("Light mode has been enabled","success"))}}),Object(o.jsx)(d,{alert:j}),Object(o.jsx)(b,{showAlert:u,heading:"Try TextUtils - word counter, character counter, remove extra spaces",mode:a})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),n(e),s(e)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.e4b4af5a.chunk.js.map