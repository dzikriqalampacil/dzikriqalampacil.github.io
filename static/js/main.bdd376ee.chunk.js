(this.webpackJsonpdzikriweb=this.webpackJsonpdzikriweb||[]).push([[0],{19:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),i=a(3),r=a.n(i),l=(a(6),a(2)),o=a(20),j=function(e){var t=e.onContact,a=e.onHome,s=e.onExperience;return Object(n.jsx)(o.a,{in:!0,appear:!0,timeout:600,classNames:"fade",children:Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("p",{id:"home",className:"desktop",onClick:a,children:"Home"}),Object(n.jsx)("p",{id:"experience",className:"desktop",onClick:s,children:"Experience"}),Object(n.jsx)("p",{id:"contact",className:"desktop",onClick:t,children:"Contact Me"}),Object(n.jsx)("p",{id:"home",className:"mobile",onClick:a,children:"Home"}),Object(n.jsx)("p",{id:"experience",className:"mobile",onClick:s,children:"Experience"}),Object(n.jsx)("p",{id:"contact",className:"mobile",onClick:t,children:"Contact Me"})]})})},d=function(e){var t=c.a.useState(!1),a=Object(l.a)(t,2),s=a[0],i=a[1];return Object(n.jsx)(o.a,{in:!0,appear:!0,timeout:600,classNames:"fade",children:Object(n.jsxs)("div",{className:"Opening",children:[Object(n.jsx)("img",{src:"foto di ui.jpeg",alt:"gambar diri",className:"smooth-image image-".concat(s?"visible":"hidden"),onLoad:function(){return i(!0)}}),!s&&Object(n.jsx)("div",{className:"smooth-preloader",children:Object(n.jsx)("span",{className:"loader"})}),Object(n.jsxs)("h1",{id:"panggil",children:["Hello ",e.nama,"!"]}),Object(n.jsx)("p",{children:" My name is Dzikri Qalam Hatorangan"}),Object(n.jsx)("p",{children:" from Universitas Indonesia "}),Object(n.jsx)("p",{children:" and I'm a Computer Science Student"})]})})},m=function(e){var t=e.onAdd,a=Object(s.useState)(""),c=Object(l.a)(a,2),i=c[0],r=c[1];var j=function(){i&&t({text:i})};function d(){console.log("Enter key is pressed"),t({text:i})}return function(e,t){var a=Object(s.useRef)(t);Object(s.useEffect)((function(){a.current=t})),Object(s.useEffect)((function(){function t(t){t.code===e&&a.current(t)}return document.addEventListener("keypress",t),function(){return document.removeEventListener("keypress",t)}}),[e])}("Enter",d),document.addEventListener("DOMContentLoaded",j||d),Object(n.jsx)(o.a,{in:!0,appear:!0,timeout:600,classNames:"fade",children:Object(n.jsxs)("div",{className:"masukan",children:[Object(n.jsx)("p",{id:"petunjuk",children:"Input your surname"}),Object(n.jsx)("input",{type:"text",id:"sname",maxLength:"15",value:i,onChange:function(e){return r(e.target.value)}}),Object(n.jsx)("button",{id:"enter",onClick:j,children:"Enter"})]})})},b=a(8),h=a.n(b),x=function(e){var t=e.nama;return Object(n.jsx)(o.a,{in:!0,appear:!0,timeout:600,classNames:"fade",children:Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"email",children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h.a.sendForm("gmail","dzikri_github_template",e.target,"user_J42afc1zhqExNI6n4yHMQ").then((function(e){console.log(e.text),alert("Message has been sent. Thankyou :)")}),(function(e){console.log(e.text)})),e.target.reset()},children:[Object(n.jsx)("p",{className:"head",children:" Send Me A Message "}),Object(n.jsxs)("div",{className:"inputbox",children:[Object(n.jsx)("span",{className:"labelname",children:"Name:"}),Object(n.jsx)("input",{type:"text",className:"name",name:"name",defaultValue:t,required:"required"}),Object(n.jsx)("span",{className:"labelemail",children:"Email:"}),Object(n.jsx)("input",{type:"text",className:"emailing",name:"email",required:"required"}),Object(n.jsx)("span",{className:"labelmessage",children:"Message:"}),Object(n.jsx)("textarea",{className:"message",required:"required",name:"message"}),Object(n.jsx)("input",{type:"submit",className:"submit-email",value:"Send"})]})]})}),Object(n.jsx)("div",{className:"bio",children:Object(n.jsxs)("div",{className:"ig",children:[Object(n.jsx)("h3",{children:" Linkedin "}),Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("a",{href:"https://www.linkedin.com/in/dzikriqalam/",children:Object(n.jsx)("img",{src:"/logo/LI-In-Bug.png",alt:"linkedin",width:"30px",height:"30px",className:"logo"})}),Object(n.jsx)("a",{href:"https://www.linkedin.com/in/dzikriqalam/",className:"link",children:" Dzikri Qalam Hatorangan "})]}),Object(n.jsx)("h3",{children:" Whatsapp "}),Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("a",{href:"https://wa.me/6287855474426",children:Object(n.jsx)("img",{src:"/logo/WA-Logo.png",alt:"Whatsapp",width:"30px",height:"30px",className:"logo"})}),Object(n.jsx)("a",{href:"https://wa.me/6287855474426",className:"link",children:" +6287855474426 "})]}),Object(n.jsx)("h3",{children:" Line "}),Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("a",{href:"http://line.me/ti/p/~dzikriqalamm",children:Object(n.jsx)("img",{src:"/logo/Line-Logo.png",alt:"Line",width:"30px",height:"30px",className:"logo"})}),Object(n.jsx)("a",{href:"http://line.me/ti/p/~dzikriqalamm",className:"link",children:" @dzikriqalamm "})]}),Object(n.jsx)("h3",{children:" Instagram "}),Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("a",{href:"https://www.instagram.com/dzikriqalam/",children:Object(n.jsx)("img",{src:"https://www.transparentpng.com/thumb/logo-instagram/YfpFOL-logo-instagram-free-transparent.png",alt:"logo Instagram free transparent @transparentpng.com",width:"30px",height:"30px",className:"logo"})}),Object(n.jsx)("a",{href:"https://www.instagram.com/dzikriqalam/",className:"link",children:" @dzikriqalam "})]})]})})]})})})};var u=function(){var e=Object(s.useState)(!0),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(s.useState)(!1),r=Object(l.a)(i,2),o=r[0],b=r[1],h=Object(s.useState)(!1),u=Object(l.a)(h,2),p=u[0],O=u[1],g=Object(s.useState)(!1),f=Object(l.a)(g,2),N=f[0],k=f[1],v=Object(s.useState)(""),w=Object(l.a)(v,2),C=w[0],L=w[1];return Object(n.jsxs)("div",{children:[a&&Object(n.jsx)(m,{onAdd:function(e){c(!1),b(!0),O(!0),function(e){console.log(e),L(e)}(e)}}),o&&Object(n.jsx)(j,{onContact:function(){O(!1),k(!0)},onHome:function(){k(!1),O(!0)},onExperience:function(){alert("Under development")}}),p&&Object(n.jsx)(d,{nama:C.text}),N&&Object(n.jsx)(x,{nama:C.text})]})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(u,{})}),document.getElementById("root")),p()},6:function(e,t,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.bdd376ee.chunk.js.map