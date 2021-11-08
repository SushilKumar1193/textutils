(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(4),r=c.n(s),o=(c(9),c(2)),l=(c(10),c(0));function i(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(l.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(l.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"greenMode",onClick:e.green}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"greenMode",children:"Enable Green Mode"})]})]})]})})}function b(e){var t=Object(a.useState)("Enter text here"),c=Object(o.a)(t,2),n=c[0],s=c[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(l.jsx)("h1",{children:e.heading}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("textarea",{className:"form-control ",id:"mybox",value:n,rows:"6",onChange:function(e){s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"}}),Object(l.jsx)("button",{className:"btn btn-".concat(e.btn," my-3 mx-3"),onClick:function(){var t=n.toUpperCase();s(t),e.showAlert("Converted to upper case","success")},children:"Convert to Upper Case"}),Object(l.jsx)("button",{className:"btn btn-".concat(e.btn," my-3 mx-3"),onClick:function(){var t=n.toLowerCase();s(t),e.showAlert("Converted to lower case","success")},children:"Convert to Lower Case"}),Object(l.jsx)("button",{className:"btn btn-".concat(e.btn," my-3 mx-3"),onClick:function(){var t=n.split(/\s/).reverse().join(" ");s(t),e.showAlert("Text is reversed","success")},children:"Reverse your text"}),Object(l.jsx)("button",{className:"btn btn-".concat(e.btn," my-3 mx-3"),onClick:function(){var t=document.getElementById("mybox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text is successfully copied to clipboard","success")},children:"Copy your text"})]})]}),Object(l.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(l.jsx)("h1",{children:"Your Text summary"}),Object(l.jsxs)("p",{children:[n.split(/[ ][a-zA-Z0-9]/).length," words and ",n.length," characters."]}),Object(l.jsxs)("p",{children:[.008*n.split(" ").length," minutes to read."]}),Object(l.jsx)("h2",{children:"Preview"}),Object(l.jsx)("p",{children:n.length>0?n:"Enter your text in above box to preview it here"})]})]})}i.defaultProps={title:"set title here"};var d=function(e){return e.alert&&Object(l.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(l.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",Object(l.jsx)("strong",{children:e.alert.msg})]})};var h=function(){var e=Object(a.useState)("light"),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(null),r=Object(o.a)(s,2),h=r[0],m=r[1],u=Object(a.useState)("primary"),j=Object(o.a)(u,2),x=j[0],g=j[1],p=function(e,t){m({msg:e,type:t}),setTimeout((function(){m(null)}),3e3)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{title:"Textutils",mode:c,toggleMode:function(){"light"===c?(n("dark"),document.body.style.backgroundColor="#042743",p("Dark mode has been enabled","success"),g("primary")):(n("light"),document.body.style.backgroundColor="white",p("Light mode has been enabled","success"),g("primary"))},green:function(){"light"===c?(n("dark"),document.body.style.backgroundColor="#002100",p("Green mode has been enabled","success"),g("success")):(n("light"),document.body.style.backgroundColor="white",p("Light mode has been enabled","success"),g("primary"))}}),Object(l.jsx)(d,{alert:h}),Object(l.jsx)("div",{className:"container my-3",children:Object(l.jsx)(b,{heading:"Enter the text to analyze",mode:c,showAlert:p,btn:x})})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),m()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.88926092.chunk.js.map