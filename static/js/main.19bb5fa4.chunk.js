(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(e,t,c){e.exports={card:"Contact_card__1-kej",cardContent:"Contact_cardContent__1TtvD",cardButton:"Contact_cardButton__fliZm"}},14:function(e,t,c){e.exports={screenBodyItem:"Filter_screenBodyItem__2LAgR",left:"Filter_left__1jXIr",appFormGroup:"Filter_appFormGroup__1za8M",appFormControl:"Filter_appFormControl__Neqdw"}},17:function(e,t,c){e.exports={container:"ContactList_container__2pXgy",cardContainer:"ContactList_cardContainer__KodA7"}},2:function(e,t,c){e.exports={background:"ContactForm_background__3Xrtl",container:"ContactForm_container__i-n1b",screen:"ContactForm_screen__31mdY",screenHeader:"ContactForm_screenHeader__3CMHk",screenHeaderLeft:"ContactForm_screenHeaderLeft__3Sw6C",screenHeaderButton:"ContactForm_screenHeaderButton__3NlJp",close:"ContactForm_close__35y2c",maximize:"ContactForm_maximize__2MABO",minimize:"ContactForm_minimize__1-_hc",screenHeaderRight:"ContactForm_screenHeaderRight__2T_Er",screenHeaderEllipsis:"ContactForm_screenHeaderEllipsis__10aqd",screenBody:"ContactForm_screenBody__PDvWP",screenBodyItem:"ContactForm_screenBodyItem__eeL41",left:"ContactForm_left__zJtmE",appTitle:"ContactForm_appTitle__kz2ld",appContact:"ContactForm_appContact__BU7vX",appFormGroup:"ContactForm_appFormGroup__1jWYL",appFormControl:"ContactForm_appFormControl__XMxEz",appFormButton:"ContactForm_appFormButton__c3_Sg"}},21:function(e,t,c){e.exports={container:"Container_container__3142n"}},35:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(12),o=c.n(r),s=c(4),i=c(20),l=(c(34),c(35),c(7)),d=c(40),j=c(21),m=c.n(j),b=c(0);var u=function(e){var t=e.children;return Object(b.jsx)("div",{className:m.a.container,children:t})},_=c(18),p=c(8),O=c(5),x=Object(O.b)("contact/add",(function(e){return{payload:Object(p.a)(Object(p.a)({},e),{},{id:Object(d.a)()})}})),h=Object(O.b)("contact/delete"),f=Object(O.b)("contact/filter"),C=c(2),v=c.n(C);var F=function(){var e=Object(a.useState)(""),t=Object(_.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),o=Object(_.a)(r,2),i=o[0],l=o[1],d=Object(s.c)((function(e){return e.contacts.items})),j=Object(s.b)(),m=function(e){var t=e.target,c=t.name,a=t.value;switch(c){case"name":n(a);break;case"number":l(a)}},u=function(){n(""),l("")};return Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault(),d.some((function(e){return e.name.includes(c)}))?window.alert("".concat(c," is already in contacts")):(j(x({name:c,number:i})),u())},children:Object(b.jsx)("div",{className:v.a.background,children:Object(b.jsx)("div",{className:v.a.container,children:Object(b.jsxs)("div",{className:v.a.screen,children:[Object(b.jsxs)("div",{className:v.a.screenHeader,children:[Object(b.jsxs)("div",{className:v.a.screenHeaderLeft,children:[Object(b.jsx)("div",{className:"".concat(v.a.screenHeaderButton," ").concat(v.a.close)}),Object(b.jsx)("div",{className:"".concat(v.a.screenHeaderButton," ").concat(v.a.maximize)}),Object(b.jsx)("div",{className:"".concat(v.a.screenHeaderButton," ").concat(v.a.minimize)})]}),Object(b.jsxs)("div",{className:v.a.screenHeaderRight,children:[Object(b.jsx)("div",{className:v.a.screenHeaderEllipsis}),Object(b.jsx)("div",{className:v.a.screenHeaderEllipsis}),Object(b.jsx)("div",{className:v.a.screenHeaderEllipsis})]})]}),Object(b.jsx)("div",{className:v.a.screenBody,children:Object(b.jsxs)("div",{className:v.a.screenBodyItem,children:[Object(b.jsxs)("label",{className:v.a.appFormGroup,children:["Name",Object(b.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:c,onChange:m,className:v.a.appFormControl})]}),Object(b.jsxs)("label",{className:v.a.appFormGroup,children:["Number",Object(b.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:i,onChange:m,className:v.a.appFormControl})]}),Object(b.jsx)("button",{className:v.a.appFormButton,children:"Add contact"})]})})]})})})})},N=c(14),B=c.n(N);var g=function(){var e=Object(s.c)((function(e){return e.contacts.filter})),t=Object(s.b)();return Object(b.jsx)("div",{className:B.a.screenBodyItem,children:Object(b.jsxs)("label",{className:B.a.appFormGroup,children:["Find contacts by name",Object(b.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){return t(f(e.currentTarget.value))},className:B.a.appFormControl})]})})},y=c(17),H=c.n(y);var k=function(e){var t=e.children;return Object(b.jsx)("div",{className:H.a.container,children:Object(b.jsx)("ul",{className:"list ".concat(H.a.cardContainer),children:t})})},z=c(10),w=c.n(z);var A=function(e){var t=e.contact,c=t.name,a=t.number,n=t.id,r=Object(s.b)();return Object(b.jsx)("li",{className:w.a.card,children:Object(b.jsxs)("div",{className:w.a.cardContent,children:[Object(b.jsx)("p",{className:w.a.cardInfo,children:c}),Object(b.jsx)("p",{className:w.a.cardInfo,children:a}),Object(b.jsx)("button",{className:w.a.cardButton,onClick:function(){return r(h(n))},children:"Delete contact"})]})})};var I,E=function(){var e=Object(s.c)((function(e){return e.contacts.items})),t=Object(s.c)((function(e){return e.contacts.filter})),c=Object(l.a)(e).filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(b.jsxs)(u,{children:[Object(b.jsx)("h1",{className:"title",children:"Phonebook"}),Object(b.jsx)(F,{}),Object(b.jsx)("h2",{className:"title",children:"Contacts"}),Object(b.jsx)(g,{}),Object(b.jsx)(k,{children:c.map((function(e){return Object(b.jsx)(A,{contact:e},Object(d.a)())}))})]})},L=c(9),G=c(3),M=Object(O.c)([],(I={},Object(L.a)(I,x,(function(e,t){var c=t.payload;return[].concat(Object(l.a)(e),[c])})),Object(L.a)(I,h,(function(e,t){var c=t.payload;return e.filter((function(e){return e.id!==c}))})),I)),S=Object(O.c)("",Object(L.a)({},f,(function(e,t){return t.payload}))),T=Object(G.b)({items:M,filter:S}),J=c(6),X=c(22),q=c.n(X),D=Object(l.a)(Object(O.d)({serializableCheck:{ignoredActions:[J.a,J.f,J.b,J.c,J.d,J.e]}})),R={key:"contacts",storage:q.a,blacklist:["filter"]},Z=Object(O.a)({reducer:{contacts:Object(J.g)(R,T)},middleware:D,devTools:!1}),P=Object(J.h)(Z);o.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(s.a,{store:Z,children:Object(b.jsx)(i.a,{loading:null,persistor:P,children:Object(b.jsx)(E,{})})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.19bb5fa4.chunk.js.map