(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{10:function(e,t,n){e.exports=n(24)},15:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),s=n.n(c),l=(n(15),n(4)),u={resetInputValue:function(){return{type:"RESET_INPUT_VALUE",payload:""}},setInputValue:function(e){return{type:"SET_INPUT_VALUE",payload:e}}},o=Object(l.b)((function(e){return{value:e.input.value}}),u)((function(e){var t=e.resetInputValue,n=e.setInputValue,a=e.value,c=r.a.createRef();return r.a.createElement(r.a.Fragment,null,r.a.createElement("textarea",{className:"textarea container__textarea",placeholder:"Enter assignment...",ref:c,value:a,onChange:function(e){n(e.target.value)}}),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{className:"btn"},"Add note"),r.a.createElement("button",{className:"btn",onClick:function(){t(),c.current.focus()}},"Reset")))})),i=[{task:"third task",id:2},{task:"second task",id:1},{task:"first task",id:0}],m=(n(22),function(){return r.a.createElement("div",{className:"notes-list container__notes-list"},i.map((function(e){return r.a.createElement("div",{className:"note",key:e.id},e.task,r.a.createElement("span",{className:"note__cross"},"X"))})))}),d=function(){return r.a.createElement("div",{className:"container body__container"},r.a.createElement(o,null),r.a.createElement(m,null))},E=n(1),p=n(2),f={value:""},v=Object(E.b)({input:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESET_INPUT_VALUE":case"SET_INPUT_VALUE":return Object(p.a)(Object(p.a)({},e),{},{value:t.payload});default:return e}}}),_=Object(E.c)(v);n(23);s.a.render(r.a.createElement(l.a,{store:_},r.a.createElement(d,null),","),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.c0adf531.chunk.js.map