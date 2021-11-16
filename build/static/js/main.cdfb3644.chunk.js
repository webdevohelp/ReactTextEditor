(this.webpackJsonpreactcodewithharry=this.webpackJsonpreactcodewithharry||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(8),s=a.n(n),l=a(4),o=(a(13),a(5)),i=a(2),b=a(1);function d(e){return Object(b.jsx)("div",{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(o.b,{className:"navbar-brand",to:"/",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(o.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})})}),Object(b.jsxs)("form",{className:"d-flex px-4",children:[Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(b.jsx)("button",{className:"btn btn-outline-success text-".concat("light"===e.mode?"dark":"light"),type:"submit",children:"Search"})]}),Object(b.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(b.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.handleMode}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})]})})})}d.defaultProps={title:"Title Please",aboutText:"Default text, please change it!"};var h=function(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(b.jsxs)(r.a.Fragment,{children:[Object(b.jsxs)("div",{className:"container py-3",style:{backgroundColor:"dark"===e.mode?"rgb(33,37,41)":"white",color:"dark"===e.mode?"white":"rgb(33,37,41)"},children:[Object(b.jsx)("h2",{children:e.heading}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"myBox",className:"form-label",children:"Enter your Text below:"}),Object(b.jsx)("textarea",{className:"form-control",id:"myBox",rows:"8",placeholder:"Enter your text here...",value:n,onChange:function(e){s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"rgb(73,77,71)":"white",color:"dark"===e.mode?"white":"rgb(33,37,41)"}})]}),Object(b.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){s(n.toUpperCase()),e.showAlert("Converted to UpperCase!","success")},children:"Convert to Uppercase"}),Object(b.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){s(n.toLowerCase()),e.showAlert("Converted to LowerCase!","success")},children:"Convert to Lowercase"}),Object(b.jsx)("button",{className:"btn btn-danger mx-2",onClick:function(t){s(""),e.showAlert("TextBox Cleared!","success")},children:"Clear"}),Object(b.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){navigator.clipboard.writeText(n),e.showAlert("Text Copied!","success")},children:"Copy Text"}),Object(b.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra spaces removed!","success")},children:"Remove Extra Spaces"}),Object(b.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.split(/[ ]+/);s(t.join("")),e.showAlert("All spaces removed!","success")},children:"Remove All Spaces"})]}),Object(b.jsxs)("div",{className:"container my-3 py-3",style:{backgroundColor:"dark"===e.mode?"rgb(33,37,41)":"white",color:"dark"===e.mode?"white":"rgb(33,37,41)"},children:[Object(b.jsx)("h2",{children:"Summary:"}),Object(b.jsxs)("p",{children:[n.split(" ").length," words and ",n.length," characters."]}),Object(b.jsxs)("p",{children:["Read in ",.008*n.split(" ").length," minutes"]}),Object(b.jsx)("h4",{children:"Preview:"}),Object(b.jsx)("p",{children:n})]})]})};var j=function(e){return e.alert&&Object(b.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(b.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),":"," ",e.alert.msg]})};var m=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),m=Object(l.a)(s,2),u=m[0],x=m[1],p=function(e,t){x({msg:e,type:t}),setTimeout((function(){x(null)}),1500)};return Object(b.jsx)(r.a.Fragment,{children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(d,{title:"Text Utils",mode:a,handleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="rgb(0, 0, 0)",p("Dark mode has been enabled","success")):(n("light"),document.body.style.backgroundColor="white",p("Light mode has been enabled","success"))}}),Object(b.jsx)(j,{alert:u}),Object(b.jsx)(i.c,{children:Object(b.jsx)(i.a,{path:"",element:Object(b.jsx)(h,{showAlert:p,heading:"Try TextUtils - word counter, character counter, remove extra spaces",mode:a})})})]})})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),n(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),u()}},[[15,1,2]]]);
//# sourceMappingURL=main.cdfb3644.chunk.js.map