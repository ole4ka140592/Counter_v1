(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(e,n,t){e.exports={count:"Counter_count__3m3eA",number:"Counter_number__2yK2J",numberRed:"Counter_numberRed__2nhXV",buttons:"Counter_buttons__1HkYF"}},,,,function(e,n,t){e.exports={information:"App_information__1s41A"}},function(e,n,t){e.exports={button:"Button_button__1fyT6"}},,,,,function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),s=t(5),u=t.n(s),r=(t(12),t(3)),o=t(6),i=t.n(o),l=t(7),b=t.n(l),m=t(0),d=function(e){return Object(m.jsx)("button",{onClick:function(){e.callBack()},disabled:e.disabled,className:b.a.button,children:e.name})},j=t(2),f=t.n(j),_=function(e){return Object(m.jsxs)("div",{className:f.a.count,children:[Object(m.jsx)("div",{className:f.a.number,children:Object(m.jsxs)("span",{className:5===e.number?f.a.numberRed:"",children:[e.number," "]})}),Object(m.jsxs)("div",{className:f.a.buttons,children:[Object(m.jsx)(d,{name:"inc",callBack:e.callBackHandlerIncrement,disabled:e.number===e.maxValue}),Object(m.jsx)(d,{name:"reset",callBack:e.callBackHandlerReset,disabled:e.number===e.startValue})]})]})};var O=function(){var e=Object(a.useState)(0),n=Object(r.a)(e,2),t=n[0],c=n[1],s=Object(a.useState)(!1),u=Object(r.a)(s,2),o=(u[0],u[1]),l=Object(a.useState)(!0),b=Object(r.a)(l,2),d=(b[0],b[1]);return Object(m.jsx)("div",{className:i.a.information,children:Object(m.jsx)(_,{number:t,callBackHandlerIncrement:function(){t<5?(c(t+1),d(!1)):5===t&&o(!0)},callBackHandlerReset:function(){5===t?(c(0),d(!0),o(!1)):0===t?(d(!0),o(!1)):c(t-1)},startValue:0,maxValue:5})})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,s=n.getLCP,u=n.getTTFB;t(e),a(e),c(e),s(e),u(e)}))};u.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),x()}],[[14,1,2]]]);
//# sourceMappingURL=main.74f3a2b3.chunk.js.map