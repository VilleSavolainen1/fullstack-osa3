(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,t,n){e.exports=n(38)},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),u=n(2),l=n(3),s=n.n(l),i="/api/persons",m=function(){return s.a.get(i)},f=function(e){return s.a.post(i,e)},b=function(e,t){return s.a.put("".concat(i,"/").concat(e),t)},d=function(e){return s.a.delete("".concat(i,"/").concat(e))},w=function(e){var t=e.newName,n=e.newNumber,a=e.setNewName,c=e.setNewNumber,o=e.persons,u=e.setPersons,l=e.setNotification,s=e.setError,i=!0;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){var t=e.newName,n=e.newNumber;for(var a in o)t.toLowerCase()===o[a].name.toLowerCase()&&n===o[a].number&&(i=!1,alert("".concat(t," is already added!")))}({newName:t,newNumber:n}),function(e){var t=e.newName,n=e.newNumber;for(var a in o)t.toLowerCase()===o[a].name.toLowerCase()&&n!==o[a].number&&(i=!1,window.confirm("".concat(o[a].name," is already added. Replace number?"))&&(b(o[a].id,{name:o[a].name,number:n}).catch((function(){s("".concat(t," is already removed."))})),m().then((function(e){u(e.data)}))))}({newName:t,newNumber:n}),function(e){var t=e.newName,n=e.newNumber;i&&(f({name:t,number:n}),u(o.concat({name:t,number:n})),l("Added ".concat(t)),m().then((function(e){u(e.data)})))}({newName:t,newNumber:n}),a(""),c(""),m().then((function(e){u(e.data)}))}},r.a.createElement("div",null,r.a.createElement("h2",null,"add a new"),"name: ",r.a.createElement("input",{value:t,onChange:function(e){a(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:n,onChange:function(e){c(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},E=function(e){var t=e.search,n=e.setSearch;return r.a.createElement("div",null,"filter shown with: ",r.a.createElement("input",{value:t,onChange:function(e){n(e.target.value)}}))},N=function(e){var t,n=e.search,a=e.persons,c=e.setPersons,o=e.person,u=e.deletePerson,l=e.setDeletePerson,s=function(e,t){window.confirm("Delete ".concat(t,"?"))&&(d(e),m().then((function(e){c(e.data),l(!u)})))};return r.a.createElement("div",null,(t=n,o.filter((function(e){return e.toLowerCase().startsWith(t)})).map((function(e,t){return r.a.createElement("li",{key:t},e,r.a.createElement("button",{onClick:function(){return s(a[t].id,a[t].name)}},"Delete"))}))))},v=(n(36),function(e){var t=e.message,n=e.setNotification;return null===t?null:(setTimeout((function(){n(null)}),3e3),r.a.createElement("div",{className:"message"},t))}),h=(n(37),function(e){var t=e.error,n=e.setError;return null===t?null:(setTimeout((function(){n(null)}),3e3),r.a.createElement("div",{className:"errorMessage"},t))}),p=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),l=Object(u.a)(o,2),s=l[0],i=l[1],f=Object(a.useState)(""),b=Object(u.a)(f,2),d=b[0],p=b[1],j=Object(a.useState)(""),O=Object(u.a)(j,2),g=O[0],S=O[1],C=Object(a.useState)(null),P=Object(u.a)(C,2),y=P[0],k=P[1],D=Object(a.useState)(null),L=Object(u.a)(D,2),J=L[0],T=L[1],x=Object(a.useState)(!1),A=Object(u.a)(x,2),B=A[0],I=A[1];Object(a.useEffect)((function(){m().then((function(e){c(e.data)}))}),[n.length,B]);var M=n.map((function(e){return"".concat(e.name," ").concat(e.number)}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{message:y,setNotification:k}),r.a.createElement(h,{error:J,setError:T}),r.a.createElement(E,{search:g,setSearch:S}),r.a.createElement(w,{newName:s,newNumber:d,setNewName:i,setNewNumber:p,persons:n,setPersons:c,notification:y,setNotification:k,setError:T}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(N,{search:g,persons:n,person:M,setPersons:c,setError:T,deletePerson:B,setDeletePerson:I}))};o.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.12e955c3.chunk.js.map