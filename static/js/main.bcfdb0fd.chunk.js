(this.webpackJsonptest_quest=this.webpackJsonptest_quest||[]).push([[0],{115:function(e,t,r){e.exports=r(148)},120:function(e,t,r){},148:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(11),i=r.n(o),c=(r(120),r(78)),l=r(98),s=r(7),d={workers:[{id:1,name:"\u0410\u043d\u0434\u0440\u0435\u0439",position:"Programmer",birth_date:"2000-05-24",sex:"\u043c\u0443\u0436.",fired:!1},{id:2,name:"\u0413\u0440\u0438\u0433\u043e\u0440\u0438\u0439",position:"Programmer",birth_date:"2000-05-24",sex:"\u043c\u0443\u0436.",fired:!1},{id:3,name:"\u0414\u0430\u0432\u0438\u0434",position:"Programmer",birth_date:"2000-05-24",sex:"\u043c\u0443\u0436.",fired:!1},{id:4,name:"\u0410\u043b\u0451\u043d\u0430",position:"Programmer",birth_date:"2000-05-24",sex:"\u0436\u0435\u043d.",fired:!1}],NewWorker:{name:"",position:"",birth_date:"2000-05-24",sex:"",fired:!1},deleteId:void 0,count:5,errorMessage:""},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_NEW_WORKER":if(""!==e.NewWorker.name&&""!==e.NewWorker.position){e.count+=1,e.errorMessage="";var r={id:e.count,name:e.NewWorker.name,position:e.NewWorker.position,birth_date:e.NewWorker.birth_date,sex:e.NewWorker.sex,fired:e.NewWorker.fired};return Object(s.a)(Object(s.a)({},e),{},{workers:[].concat(Object(l.a)(e.workers),[r]),deleteId:e.count})}return e.errorMessage="\u041f\u043e\u043b\u044f \u0424\u0418\u041e \u0438 \u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b",e;case"SET_ID_FOR_DELETE":return void 0!==t.deleteId?(""===e.NewWorker.name||""===e.NewWorker.position?e.errorMessage="\u041f\u043e\u043b\u044f \u0424\u0418\u041e \u0438 \u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b":e.errorMessage="",Object(s.a)(Object(s.a)({},e),{},{deleteId:t.deleteId})):e;case"DELETE_WORKER":if(void 0!==e.deleteId){var a=e.workers.filter((function(t){return t.id!==e.deleteId}));return Object(s.a)(Object(s.a)({},e),{},{workers:a,deleteId:void 0})}break;case"CHANGE_WORKER_NAME":if(e.deleteId){""===t.name?e.errorMessage="\u041f\u043e\u043b\u044f \u0424\u0418\u041e \u0438 \u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b":e.errorMessage="";for(var n=0;n<e.workers.length;n++)e.workers[n].id===e.deleteId&&(e.workers[n].name=t.name);return Object(s.a)(Object(s.a)({},e),{},{NewWorker:Object(s.a)(Object(s.a)({},e.NewWorker),{},{name:t.name})})}if(void 0!==t.name)return Object(s.a)(Object(s.a)({},e),{},{NewWorker:Object(s.a)(Object(s.a)({},e.NewWorker),{},{name:t.name})});break;case"CHANGE_WORKER_POSITION":if(""===t.position?e.errorMessage="\u041f\u043e\u043b\u044f \u0424\u0418\u041e \u0438 \u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b":e.errorMessage="",e.deleteId){for(var o=0;o<e.workers.length;o++)e.workers[o].id===e.deleteId&&(e.workers[o].position=t.position);return Object(s.a)(Object(s.a)({},e),{},{NewWorker:Object(s.a)(Object(s.a)({},e.NewWorker),{},{position:t.position})})}if(void 0!==t.position)return Object(s.a)(Object(s.a)({},e),{},{NewWorker:Object(s.a)(Object(s.a)({},e.NewWorker),{},{position:t.position})});break;case"CHANGE_WORKER_BIRTH_DATE":if(e.deleteId){for(var i=0;i<e.workers.length;i++)e.workers[i].id===e.deleteId&&(e.workers[i].birth_date=t.birth_date);return Object(s.a)(Object(s.a)({},e),{},{NewWorker:Object(s.a)(Object(s.a)({},e.NewWorker),{},{birth_date:t.birth_date})})}if(void 0!==t.birth_date)return Object(s.a)(Object(s.a)({},e),{},{NewWorker:Object(s.a)(Object(s.a)({},e.NewWorker),{},{birth_date:t.birth_date})});break;case"CHANGE_WORKER_SEX":if(e.deleteId){for(var c=0;c<e.workers.length;c++)e.workers[c].id===e.deleteId&&(e.workers[c].sex=t.sex);return Object(s.a)(Object(s.a)({},e),{},{NewWorker:Object(s.a)(Object(s.a)({},e.NewWorker),{},{sex:t.sex})})}if(void 0!==t.sex)return Object(s.a)(Object(s.a)({},e),{},{NewWorker:Object(s.a)(Object(s.a)({},e.NewWorker),{},{sex:t.sex})});break;case"GET_WORKER_DATA_BY_ID":if(void 0!==t.id){for(var u,m=0;m<e.workers.length;m++)e.workers[m].id===t.id&&(u=e.workers[m]);return e.NewWorker=u,e}break;case"CHANGE_WORKER_FIRED":if(e.deleteId){for(var E=0;E<e.workers.length;E++)e.workers[E].id===e.deleteId&&(e.workers[E].fired=t.fired);return Object(s.a)(Object(s.a)({},e),{},{NewWorker:Object(s.a)(Object(s.a)({},e.NewWorker),{},{fired:t.fired})})}if(void 0!==t.fired)return Object(s.a)(Object(s.a)({},e),{},{NewWorker:Object(s.a)(Object(s.a)({},e.NewWorker),{},{fired:t.fired})});break;case"CLEAR_EDIT_BLOCK":var b={id:"",name:"",position:"",birth_date:"2000-05-24",sex:"",fired:!1};return Object(s.a)(Object(s.a)({},e),{},{NewWorker:b,deleteId:void 0});default:return e}},m=Object(c.a)({workers:u}),E=Object(c.b)(m);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=r(189),f=r(190),k=r(191),h=r(96),g=r.n(h),p=r(153),O=r(187),w=Object(O.a)((function(e){return{icon:{marginRight:e.spacing(2)}}}));function v(e){var t=w();return n.a.createElement("div",null,n.a.createElement(b.a,null),n.a.createElement(f.a,{position:"relative"},n.a.createElement(k.a,null,n.a.createElement(g.a,{className:t.icon}),n.a.createElement(p.a,{variant:"h6",color:"inherit",noWrap:!0},"Workers"))))}var W=r(39),j=r(40),_=r(44),N=r(43),y=r(204),C=r(205),R=r(80),I=r(152),x=r(193),D=r(197),A=r(196),T=r(192),K=r(194),P=r(209),S=r(195);function G(e){var t=e.workers.workers,r=e.columns,a=Object(O.a)({root:{width:"100%"},container:{maxHeight:550}}),o=n.a.useState(0),i=Object(R.a)(o,2),c=i[0],l=i[1],s=n.a.useState(10),d=Object(R.a)(s,2),u=d[0],m=d[1];return n.a.createElement(I.a,{className:a.root},n.a.createElement(T.a,{className:a.container},n.a.createElement(x.a,{stickyHeader:!0,"aria-label":"sticky table"},n.a.createElement(K.a,null,n.a.createElement(S.a,null,r.map((function(e){return n.a.createElement(A.a,{key:e.id,style:{minWidth:e.minWidth}},e.label)})))),n.a.createElement(D.a,null,t.slice(c*u,c*u+u).map((function(t){return n.a.createElement(S.a,{id:t.id,onClick:function(){return r=t.id,void e.setNewDeleteId(r);var r},selected:t.id===e.workers.deleteId,hover:!0,role:"checkbox",tabIndex:-1,key:t.id},r.map((function(e){var r=t[e.id];return n.a.createElement(A.a,{key:e.id},"boolean"===typeof r?r?"\u0414\u0410":"\u041d\u0415\u0422":"birth_date"===e.id?function(e){for(var t="",r="",a="",n=0;n<e.length;n++)"-"!==e[n]&&(n<4&&(a+=e[n]),n>4&&n<7&&(r+=e[n]),n>7&&(t+=e[n]));return t+"."+r+"."+a}(r):r)})))}))))),n.a.createElement(P.a,{rowsPerPageOptions:[5,8,10],component:"div",count:t.length,rowsPerPage:u,page:c,onChangePage:function(e,t){l(t)},onChangeRowsPerPage:function(e){m(+e.target.value),l(0)}}))}var M=n.a.createContext(E),H=function(e){Object(_.a)(r,e);var t=Object(N.a)(r);function r(){var e;Object(W.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).columns=[{id:"name",label:"\u0424\u0418\u041e",minWidth:100},{id:"position",label:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c",minWidth:60},{id:"birth_date",label:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",minWidth:60},{id:"sex",label:"\u041f\u043e\u043b",minWidth:100},{id:"fired",label:"\u0423\u0432\u043e\u043b\u0435\u043d",minWidth:60}],e}return Object(j.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement(M.Consumer,null,(function(t){var r=t.getState().workers;return n.a.createElement(G,{columns:e.columns,setNewDeleteId:function(e){t.dispatch(function(e){return{type:"GET_WORKER_DATA_BY_ID",id:e}}(e)),t.dispatch({type:"SET_ID_FOR_DELETE",deleteId:e})},useStyles:e.useStyles,workers:r})}))}}]),r}(n.a.Component),B=r(206),L=r(156),F=r(211),J=r(200),q=r(155),X=r(212),Y=r(202),z=r(208),V=r(203),$=r(210),Q=r(201),U=r(207),Z=Object(O.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"25ch"},formControl:{margin:e.spacing(3),minWidth:150}}})),ee=function(e){var t=Z();return n.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off",style:{margin:20}},n.a.createElement(F.a,{onChange:function(t){e.onChangeWorkerName(t.target.value)},value:e.workerData.name,id:"name",label:"\u0424\u0418\u041e",variant:"outlined",fullWidth:!0,style:{margin:10}}),n.a.createElement(F.a,{style:{margin:10},id:"birth_date",label:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",type:"date",onChange:function(t){e.onChangeWorkerBirthDate(t.target.value)},value:e.workerData.birth_date,className:t.textField,InputLabelProps:{shrink:!0}}),n.a.createElement(J.a,{variant:"outlined",className:t.formControl,style:{margin:10}},n.a.createElement(Q.a,{id:"select-outlined-label"},"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"),n.a.createElement(U.a,{labelId:"select-outlined-label",id:"position",value:e.workerData.position,onChange:function(t){e.onChangeWorkerPosition(t.target.value)},label:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"},n.a.createElement($.a,{value:""},n.a.createElement("em",null,"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c")),n.a.createElement($.a,{value:"Programmer"},"Programmer"),n.a.createElement($.a,{value:"Manager"},"Manager"),n.a.createElement($.a,{value:"Analyst"},"Analyst"))),n.a.createElement(J.a,{component:"fieldset",style:{margin:10}},n.a.createElement(q.a,{component:"legend"},"\u041f\u043e\u043b"),n.a.createElement(X.a,{"aria-label":"gender",name:"gender",value:e.workerData.sex,onChange:function(t){return e.onChangeWorkerSex(t.target.value)}},n.a.createElement(Y.a,{value:"\u0436\u0435\u043d.",control:n.a.createElement(z.a,null),label:"\u0416\u0435\u043d\u0441\u043a\u0438\u0439"}),n.a.createElement(Y.a,{value:"\u043c\u0443\u0436.",control:n.a.createElement(z.a,{color:"primary"}),label:"\u041c\u0443\u0436\u0441\u043a\u043e\u0439"}))),n.a.createElement(Y.a,{style:{margin:10},control:n.a.createElement(V.a,{checked:e.workerData.fired,onChange:function(t){return e.onChangeWorkerFired(t.target.checked)},name:"checked",color:"primary"}),label:"\u0423\u0432\u043e\u043b\u0435\u043d"}))},te=function(e){Object(_.a)(r,e);var t=Object(N.a)(r);function r(){return Object(W.a)(this,r),t.apply(this,arguments)}return Object(j.a)(r,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(M.Consumer,null,(function(e){var t=e.getState().workers;return n.a.createElement(ee,{onChangeWorkerBirthDate:function(t){return e.dispatch({type:"CHANGE_WORKER_BIRTH_DATE",birth_date:t})},onChangeWorkerFired:function(t){return e.dispatch(function(e){return{type:"CHANGE_WORKER_FIRED",fired:e}}(t))},onChangeWorkerName:function(t){return e.dispatch(function(e){return{type:"CHANGE_WORKER_NAME",name:e}}(t))},onChangeWorkerPosition:function(t){return e.dispatch(function(e){return{type:"CHANGE_WORKER_POSITION",position:e}}(t))},onChangeWorkerSex:function(t){return e.dispatch(function(e){return{type:"CHANGE_WORKER_SEX",sex:e}}(t))},workerData:t.NewWorker})})))}}]),r}(n.a.Component);function re(e){var t=Object(O.a)((function(e){return{root:{flexGrow:1,marginTop:e.spacing(3)},rootGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)}}}))();return n.a.createElement("main",null,n.a.createElement(y.a,{className:t.rootGrid},n.a.createElement(C.a,{container:!0,className:t.root,justify:"center",spacing:2},n.a.createElement(C.a,{item:!0,xs:12,md:6},n.a.createElement(p.a,{variant:"h6",noWrap:!0},"\u0421\u043f\u0438\u0441\u043e\u043a \u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u043e\u0432"),n.a.createElement(H,null)),n.a.createElement(C.a,{item:!0,xs:12,md:6},n.a.createElement(p.a,{variant:"h6",noWrap:!0},"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430"),n.a.createElement(p.a,{variant:"h6",noWrap:!0,color:"secondary"},e.workers.errorMessage),n.a.createElement(C.a,{item:!0,md:12},n.a.createElement(te,null)),n.a.createElement(C.a,{item:!0,md:12},n.a.createElement(B.a,{size:"large","aria-label":"large outlined primary button group"},n.a.createElement(L.a,{onClick:function(){return e.AddNewWorker()},color:"primary"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),n.a.createElement(L.a,{onClick:function(){return e.DeleteWorker()},disabled:void 0===e.workers.deleteId,color:"secondary"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),n.a.createElement(L.a,{onClick:function(){return e.clearEdit()}},"\u041e\u0447\u0438\u0441\u0442\u043a\u0430")))))))}var ae=function(e){Object(_.a)(r,e);var t=Object(N.a)(r);function r(){return Object(W.a)(this,r),t.apply(this,arguments)}return Object(j.a)(r,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(M.Consumer,null,(function(e){var t=e.getState().workers;return n.a.createElement(re,{workers:t,clearEdit:function(){e.dispatch({type:"CLEAR_EDIT_BLOCK"})},DeleteWorker:function(){e.dispatch({type:"DELETE_WORKER"}),e.dispatch({type:"CLEAR_EDIT_BLOCK"})},AddNewWorker:function(){e.dispatch({type:"CREATE_NEW_WORKER"})}})})))}}]),r}(n.a.Component),ne=r(97),oe=r.n(ne)()((function(e){return{footer:{padding:e.spacing(6)}}}));function ie(){var e=oe();return n.a.createElement("footer",{className:e.footer},n.a.createElement(p.a,{variant:"h6",align:"center",gutterBottom:!0},"Junior developer"),n.a.createElement(p.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Martynov Danil"))}var ce=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(v,null),n.a.createElement(ae,null),n.a.createElement(ie,null))},le=function(){i.a.render(n.a.createElement(M.Provider,{value:E},n.a.createElement(ce,null)),document.getElementById("root"))};le(),E.subscribe((function(){le()})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[115,1,2]]]);
//# sourceMappingURL=main.bcfdb0fd.chunk.js.map