(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),r=n.n(a),i=n(18),u=n.n(i),o=(n(25),n(3)),l=n(5),j=n(4),s=n.n(j),b=(n(44),n(19)),d=n(6);var h=function(t){var e={title:"",date:"",journalEntry:"",img:""},n=Object(a.useState)(e),r=Object(l.a)(n,2),i=r[0],u=r[1],j=i.title,h=i.date,O=i.journalEntry,f=i.img,p=function(t){var e=t.target,n=e.name,c=e.value;u((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(d.a)({},n,c))}))};return Object(c.jsxs)("form",{onSubmit:function(n){n.preventDefault(),s.a.post("/journal/",i).then((function(e){return t.setJournalList((function(t){return[].concat(Object(b.a)(t),[e.data])}))})).catch((function(t){return console.log(t)})),u(e)},children:[Object(c.jsx)("input",{type:"text",name:"title",value:j,onChange:p,placeholder:"Title"}),Object(c.jsx)("input",{type:"text",name:"date",value:h,onChange:p,placeholder:"Date (MM/DD/YYYY)"}),Object(c.jsx)("input",{type:"text",name:"journalEntry",value:O,onChange:p,placeholder:"Text"}),Object(c.jsx)("input",{type:"text",name:"img",value:f,onChange:p,placeholder:"Image Url"}),Object(c.jsx)("button",{children:"Submit"})]})};var O=function(t){var e={title:t.title,date:t.date,journalEntry:t.journalEntry,img:t.img},n=Object(a.useState)(e),r=Object(l.a)(n,2),i=r[0],u=r[1],j=i.title,b=i.date,h=i.journalEntry,O=i.img,f=function(t){var e=t.target,n=e.name,c=e.value;u((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(d.a)({},n,c))}))};return Object(c.jsxs)("form",{onSubmit:function(){return e=t._id,void s.a.put("/journal/".concat(e),i).then((function(t){return console.log(t.data)})).catch((function(t){return console.log(t)}));var e},children:[Object(c.jsx)("input",{type:"text",name:"title",value:j,onChange:f,placeholder:"Title"}),Object(c.jsx)("input",{type:"text",name:"date",value:b,onChange:f,placeholder:"Date"}),Object(c.jsx)("input",{type:"text",name:"journalEntry",value:h,onChange:f,placeholder:"Text"}),Object(c.jsx)("input",{type:"text",name:"img",value:O,onChange:f,placeholder:"Image Url"}),Object(c.jsx)("button",{children:"Submit"}),Object(c.jsx)("button",{onClick:function(){t.setIsEditing((function(t){return!t}))},children:"Cancel"})]})};var f=function(t){var e=Object(a.useState)(!1),n=Object(l.a)(e,2),r=n[0],i=n[1],u=t.title,j=t.date,b=t.journalEntry,d=t.img,h=t._id,f=t.setJournalList;return Object(c.jsx)(c.Fragment,{children:r?Object(c.jsx)("div",{className:"journalEntry",children:Object(c.jsx)(O,Object(o.a)(Object(o.a)({},t),{},{isEditing:r,setIsEditing:i,setJournalList:f}))}):Object(c.jsxs)("div",{className:"journalEntry",children:[Object(c.jsx)("img",{alt:d,src:d}),Object(c.jsxs)("div",{className:"journalProps",children:[Object(c.jsxs)("h3",{children:['"',u,'"']}),Object(c.jsxs)("h3",{children:["Uploaded: ",j]}),Object(c.jsx)("h3",{style:{fontWeight:400},children:Object(c.jsx)("i",{children:b})})]}),Object(c.jsx)("button",{className:"editbutton",onClick:function(){return i((function(t){return!t}))},children:"Edit Journal Entry"}),Object(c.jsx)("button",{className:"deletebutton",onClick:function(){return t=h,void s.a.delete("/journal/".concat(t)).then((function(e){return f((function(e){return e.filter((function(e){return e._id!==t}))}))})).catch((function(t){return console.log(t)}));var t},children:"Delete"})]})})};var p=function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1];function i(){s.a.get("/journal/").then((function(t){return r(t.data)})).catch((function(t){return console.log(t)}))}return Object(a.useEffect)(i,[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"My Journal App"}),Object(c.jsx)(h,{getEntries:i,setJournalList:r}),Object(c.jsx)("div",{className:"mappedEntries",children:n.map((function(t){return Object(a.createElement)(f,Object(o.a)(Object(o.a)({},t),{},{key:t._id,journalList:n,setJournalList:r}))}))})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))};u.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),x()}},[[45,1,2]]]);
//# sourceMappingURL=main.893d74f9.chunk.js.map