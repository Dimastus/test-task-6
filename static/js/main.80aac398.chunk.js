(this["webpackJsonptask-6"]=this["webpackJsonptask-6"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),i=n.n(c),s=(n(28),n(4)),o=n(5),u=n(7),j=n(6),d=n(13),l=n(2),b=(n(29),n(30),n(1)),h=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("header",{children:Object(b.jsxs)("nav",{className:"site-navigation",children:[Object(b.jsx)(d.b,{exact:!0,to:"/test-task-6/",activeClassName:"active",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(b.jsx)(d.b,{exact:!0,to:"/test-task-6/employees",activeClassName:"active",children:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438"})]})})}}]),n}(a.Component),p=(n(37),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"main-page",children:"Main page"})}}]),n}(a.Component)),f=n(20),O=(n(38),n(14)),v=n.n(O),m=n(19),x=function(){function e(){Object(s.a)(this,e),this._apiBase="https://reqres.in/api"}return Object(o.a)(e,[{key:"getResource",value:function(){var e=Object(m.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase).concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch '".concat(t,"', received '").concat(n.status,"'"));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var e=Object(m.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/users?per_page=".concat(t));case 2:return n=e.sent,e.next=5,n.data;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),y=(n(40),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.name,a=e.onDelete;return Object(b.jsxs)("li",{className:"empl",children:[Object(b.jsx)("span",{children:n}),Object(b.jsx)("input",{type:"button",value:"delete",onClick:function(){return a(t)}})]})}}]),n}(a.Component)),g=(n(41),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={first_name:""},e}return Object(o.a)(n,[{key:"onNameChange",value:function(e){this.setState({first_name:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.onAdd(this.state.first_name),this.setState({first_name:""})}},{key:"render",value:function(){return Object(b.jsxs)("form",{onSubmit:this.onSubmit.bind(this),children:[Object(b.jsx)("input",{type:"text",className:"input-add-form",placeholder:"enter name for added",onChange:this.onNameChange.bind(this),value:this.state.first_name,required:!0}),Object(b.jsx)("button",{children:"Add item"})]})}}]),n}(a.Component)),k=(n(42),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"loadingio-spinner-bean-eater-t12ms0terka",children:Object(b.jsxs)("div",{className:"ldio-r8fnb80zeqh",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]})]})})}}]),n}(a.Component)),C=(n(43),n.p+"static/media/oops.4de22c86.jpg"),N=function(){return Object(b.jsxs)("div",{className:"error",children:[Object(b.jsx)("img",{src:C,alt:"oops",width:"200px"}),Object(b.jsx)("span",{className:"error-title",children:"Hm..."}),Object(b.jsx)("span",{children:"something has gone terribly wrong"})]})},w=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:[],loading:!0,error:!1},e.employeesService=new x,e}return Object(o.a)(n,[{key:"updateEmployees",value:function(){var e=this;this.employeesService.getUsers(12).then((function(t){return e.setState({data:t,loading:!1})})).catch((function(t){e.onError(),console.log(t)}))}},{key:"onError",value:function(){this.setState({error:!0,loading:!1})}},{key:"onDelete",value:function(e){this.setState((function(t){var n=t.data,a=n.findIndex((function(t){return t.id===e}));return{data:[].concat(Object(f.a)(n.slice(0,a)),Object(f.a)(n.slice(a+1)))}}))}},{key:"onAdd",value:function(e){var t={id:this.state.data[this.state.data.length-1].id+1,first_name:e};this.setState((function(e){var n=e.data,a=[].concat(n);return a.push(t),{data:a}}))}},{key:"componentDidMount",value:function(){this.updateEmployees()}},{key:"render",value:function(){var e=this,t=this.state,n=t.data,a=t.loading,r=t.error;n=n.map((function(t){return Object(b.jsx)(y,{name:t.first_name,id:t.id,onDelete:e.onDelete.bind(e)},t.id)}));var c=a?Object(b.jsx)(k,{}):n,i=r?Object(b.jsx)(N,{}):c;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g,{onAdd:this.onAdd.bind(this)}),Object(b.jsx)("ul",{className:"list-empls",children:i})]})}}]),n}(a.Component),S=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(d.a,{children:[Object(b.jsx)(h,{}),Object(b.jsxs)("main",{children:[Object(b.jsx)(l.a,{exact:!0,path:"/test-task-6/",render:function(){return Object(b.jsx)(p,{})}}),Object(b.jsx)(l.a,{path:"/test-task-6/employees",render:function(){return Object(b.jsx)(w,{})}})]})]})}}]),n}(a.Component);i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.80aac398.chunk.js.map
