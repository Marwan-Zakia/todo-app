(this["webpackJsonpclass-32-solution-todo"]=this["webpackJsonpclass-32-solution-todo"]||[]).push([[0],{254:function(e,t){},256:function(e,t){},270:function(e,t){},272:function(e,t){},300:function(e,t){},302:function(e,t){},303:function(e,t){},308:function(e,t){},310:function(e,t){},316:function(e,t){},318:function(e,t){},337:function(e,t){},349:function(e,t){},352:function(e,t){},393:function(e,t,n){},394:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return X}));var a=n(0),c=n.n(a),i=n(16),s=n.n(i),r=n(56),l=n(6),o=(n(242),n(243),n(244),n(245),n(246),n(15)),j=n(1),d=c.a.createContext();function b(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(2),r=Object(o.a)(s,2),l=r[0],b=r[1],u={numberOfshow:l,toggeleComplte:c};return Object(a.useEffect)((function(){var e=localStorage.getItem("settings"),t=JSON.parse(e);t&&(i(t.numberOfshow),b(Number(t.numberOfItem)))}),[]),Object(j.jsx)(d.Provider,{value:u,children:e.children})}var u=n(398),h=n(27),O=n(17),p=n(183),m=n(99),x=function(e){var t=Object(a.useState)({}),n=Object(o.a)(t,2),c=n[0],i=n[1];return{handleChange:function(e){e.persist(),i((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(O.a)({},e.target.name,e.target.value))}))},handleSubmit:function(t){t&&t.preventDefault(),e(c)},values:c}},f=n(42),g=n(43),v=n(46),y=n(45),C=n(55),N=n(67),S=n(100),w=n.n(S),k=n(101),I=n.n(k),T={admin:{password:"password",name:"Administrator",role:"admin",capabilities:["create","read","update","delete"]},editor:{password:"password",name:"Editor",role:"editor",capabilities:["read","update"]},writer:{password:"password",name:"Writer",role:"writer",capabilities:["create"]}},D=c.a.createContext(),L=function(e){Object(v.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).can=function(e){var t,n,c,i;return null===(t=Object(N.a)(a))||void 0===t||null===(n=t.state)||void 0===n||null===(c=n.user)||void 0===c||null===(i=c.capabilities)||void 0===i?void 0:i.includes(e)},a.login=function(e,t){if(T[e]){var n=I.a.sign(T[e],"sadsadsa");a.validateToken(n)}},a.logout=function(){a.setLoginState(!1,null,{})},a.validateToken=function(e){try{var t=I.a.verify(e,"sadsadsa");a.setLoginState(!0,e,t)}catch(n){a.setLoginState(!1,null,{}),console.log("Token Validation Error",n)}},a.setLoginState=function(e,t,n){w.a.save("auth",t),a.setState({token:t,loggedIn:e,user:n})},a.state={loggedIn:!1,can:a.can,login:a.login,logout:a.logout,user:{capabilities:[]}},a}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=new URLSearchParams(window.location.search),t=w.a.load("auth"),n=e.get("token")||t||null;this.validateToken(n)}},{key:"render",value:function(){return Object(j.jsx)(D.Provider,{value:this.state,children:this.props.children})}}]),n}(c.a.Component),A=function(e){Object(v.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.context.login(a.state.username,a.state.password)},a.state={username:"",password:""},a}return Object(g.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(C.a,{condition:this.context.loggedIn,children:Object(j.jsx)("button",{className:"btn btn-primary",onClick:this.context.logout,children:"Log Out"})}),Object(j.jsx)(C.a,{condition:!this.context.loggedIn,children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("input",{placeholder:"UserName",name:"username",onChange:this.handleChange}),Object(j.jsx)("input",{placeholder:"password",name:"password",onChange:this.handleChange}),Object(j.jsx)("button",{className:"btn btn-primary",children:"Log in"})]})})]})}}]),n}(c.a.Component);A.contextType=D;var F=A;function E(){var e,t;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(u.e,{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",(e={className:"col",xs:6},Object(O.a)(e,"xs",{order:"first"}),Object(O.a)(e,"children",[Object(j.jsx)(u.e.Heading,{className:"bp3-navbar-group bp3-align-left",style:{fontSize:"1.5rem"},children:Object(j.jsx)(r.b,{style:{color:"blue"},to:"/",children:"home"})}),Object(j.jsx)(u.e.Heading,{className:"bp3-navbar-group bp3-align-left",style:{fontSize:"1.5rem"},children:Object(j.jsx)(r.b,{style:{color:"blue"},to:"/setting",children:"settings"})})]),e)),Object(j.jsx)("div",(t={className:"col",xs:6},Object(O.a)(t,"xs",{order:"last"}),Object(O.a)(t,"children",Object(j.jsx)(F,{style:{marginTop:"20px"}})),t))]})})})})}var P=function(e){Object(v.a)(n,e);var t=Object(y.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"render",value:function(){var e=this.context.loggedIn,t=!this.props.capability||this.context.can(this.props.capability),n=e&&t;return Object(j.jsx)(C.a,{condition:n,children:this.props.children})}}]),n}(c.a.Component);P.contextType=D;var B=P,J=n(182);function W(e){var t=e.handleSubmit,n=e.handleChange;return Object(j.jsx)(J.a,{interactive:!0,style:{width:"20rem",height:"20rem"},children:Object(j.jsxs)(u.c,{children:[Object(j.jsx)("h2",{children:"Add To Do Item"}),Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{children:"To Do Item"}),Object(j.jsx)(u.d,{className:"bp3-intent-primary",onChange:n,name:"text",type:"text",placeholder:"Item Details"})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{children:"Assigned To"}),Object(j.jsx)(u.d,{className:"bp3-intent-primary",onChange:n,name:"assignee",type:"text",placeholder:"Assignee Name"})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{children:"Difficulty"}),Object(j.jsx)(u.d,{onChange:n,className:"bp3-intent-primary",defaultValue:3,type:"range",min:1,max:5,name:"difficulty"})]}),Object(j.jsx)("label",{children:Object(j.jsx)(B,{capability:"create",children:Object(j.jsx)(u.a,{onClick:t,className:"bp3-intent-primary",type:"submit",children:"Add Item"})})})]})})}var z=n(399),H=n(180),M=n.n(H);n(393);function U(e){var t=e.toggleComplete,n=e.list,c=e.deleteItem,i=Object(a.useContext)(d),s=Object(a.useState)(0),r=Object(o.a)(s,2),l=r[0],b=r[1],O=i.numberOfshow,p=l*O,m=n.slice(p,p+O).map((function(e){return Object(j.jsx)(B,{capability:"read",children:Object(j.jsx)("div",{style:{width:"650px",margin:"15px"},children:Object(j.jsxs)(u.b,{interactive:!0,elevation:h.a.TWO,children:[Object(j.jsx)("p",{children:e.text}),Object(j.jsx)("p",{children:Object(j.jsxs)("small",{children:["Assigned to: ",e.assignee]})}),Object(j.jsx)("p",{children:Object(j.jsxs)("small",{children:["Difficulty: ",e.difficulty]})}),Object(j.jsx)(B,{capability:"update",children:Object(j.jsxs)(u.a,{className:"bp3-intent-success",onClick:function(){return t(e.id)},children:["Complete: ",e.complete.toString()]})}),Object(j.jsx)(B,{capability:"delete",children:Object(j.jsxs)(u.a,{className:"bp3-intent-danger",onClick:function(){return c(e.id)},children:["Delete: ",e.complete.toString()]})})]})},e.id)})})),x=Math.ceil(n.length/O);return Object(j.jsxs)(j.Fragment,{children:[m,Object(j.jsx)(B,{capability:"read",children:Object(j.jsx)(M.a,{previousLabel:"Previous",nextLabel:"Next",pageCount:x,onPageChange:function(e){var t=e.selected;b(t)},containerClassName:"paginationBttns",previousLinkClassName:"previousBttn",nextLinkClassName:"nextBttn",disabledClassName:"paginationDisabled",activeClassName:"paginationActive"})})]})}var V=n(98),R=n(68),q=n(181),G=function(){var e,t,n=Object(a.useState)([]),c=Object(o.a)(n,2),i=c[0],s=c[1],r=Object(a.useState)([]),l=Object(o.a)(r,2),d=l[0],b=l[1],u=x((function(e){e.id=Object(z.a)(),e.complete=!1,s([].concat(Object(p.a)(i),[e]))})),h=u.handleChange,m=u.handleSubmit;return Object(a.useEffect)((function(){var e=i.filter((function(e){return!e.complete})).length;b(e),document.title="To Do List: ".concat(d)}),[i]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h1",{children:[" To Do List: ",d," items pending"]}),Object(j.jsx)(V.a,{fluid:"md",children:Object(j.jsxs)(q.a,{children:[Object(j.jsx)(R.a,(e={xs:4},Object(O.a)(e,"xs",{order:"first"}),Object(O.a)(e,"children",Object(j.jsx)(B,{children:Object(j.jsx)(W,{handleSubmit:m,handleChange:h})})),e)),Object(j.jsx)(R.a,(t={xs:4},Object(O.a)(t,"xs",{order:"last"}),Object(O.a)(t,"children",Object(j.jsx)(B,{children:Object(j.jsx)(U,{incomplete:d,toggleComplete:function(e){var t=i.map((function(t){return t.id==e&&(t.complete=!t.complete),t}));s(t)},list:i,deleteItem:function(e){var t=i.filter((function(t){return t.id!==e}));s(t)}})})),t))]})})]})};function K(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"toDo",children:Object(j.jsx)(u.b,{interactive:!0,elevation:h.a.TWO,children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){localStorage.setItem("settings",JSON.stringify(e))}({display:e.target.disply.value,numberOfItem:e.target.numberOfItem.value}),e.target.reset(),window.location.href="/"},children:[Object(j.jsx)("h2",{children:" Settings Tab"}),Object(j.jsx)(u.c,{label:"show completed tasks",labelFor:"disply",children:Object(j.jsxs)("select",{name:"disply",dir:"auto",className:"bp3-input .modifier",children:[Object(j.jsx)("option",{value:!0,children:"true"}),Object(j.jsx)("option",{value:!1,children:"false"})]})}),Object(j.jsx)(u.c,{label:"Number of cards ",labelFor:"assignee",children:Object(j.jsx)("input",{className:"bp3-input .modifier",name:"numberOfItem",type:"text",placeholder:"Assignee Name",dir:"auto"})}),Object(j.jsx)("br",{}),Object(j.jsx)(u.a,{type:"submit",children:"Add Item"})]})})})})}function Q(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)(L,{children:[Object(j.jsx)(E,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/setting",element:Object(j.jsx)(B,{capability:"delete",children:Object(j.jsx)(b,{children:Object(j.jsx)(K,{})})})}),Object(j.jsx)(l.a,{path:"/",element:Object(j.jsx)(B,{children:Object(j.jsx)(b,{children:Object(j.jsx)(G,{})})})})]})]})})}function X(){return Object(j.jsx)(Q,{})}var Y=document.getElementById("root");s.a.render(Object(j.jsx)(X,{}),Y)}},[[394,1,2]]]);
//# sourceMappingURL=main.e2208a16.chunk.js.map