(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{10:function(e,t,n){e.exports=n(23)},15:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(3),c=n.n(u),l=(n(15),n(4)),o={resetInputValue:function(){return{type:"RESET_INPUT_VALUE",payload:""}},setInputValue:function(e){return{type:"SET_INPUT_VALUE",payload:e}}},s=Object(l.b)((function(e){return{value:e.input.value}}),o)((function(e){var t=e.resetInputValue,n=e.setInputValue,a=e.value,u=r.a.createRef();return r.a.createElement(r.a.Fragment,null,r.a.createElement("textarea",{className:"textarea container__textarea",placeholder:"Enter assignment...",ref:u,value:a,onChange:function(e){n(e.target.value)}}),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{className:"btn"},"Add note"),r.a.createElement("button",{className:"btn",onClick:function(){t(),u.current.focus()}},"Reset")))})),i=function(){return r.a.createElement("div",{className:"container body__container"},r.a.createElement(s,null))},E=n(1),p=n(2),m={value:""},d=Object(E.b)({input:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESET_INPUT_VALUE":case"SET_INPUT_VALUE":return Object(p.a)(Object(p.a)({},e),{},{value:t.payload});default:return e}}}),f=Object(E.c)(d);n(22);c.a.render(r.a.createElement(l.a,{store:f},r.a.createElement(i,null),","),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.69adc132.chunk.js.map