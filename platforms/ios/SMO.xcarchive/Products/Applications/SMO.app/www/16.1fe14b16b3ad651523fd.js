(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"n/Zq":function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),t=u("mrSG"),i=u("9B/o"),c=u("7Y6Z"),b=u("q8lh"),r=(u("BuZO"),u("t/Na")),s=function(){function l(l,n){this.http=l,this._as=n}return l.prototype.cargar_todos=function(){return t.b(this,void 0,void 0,(function(){var l=this;return t.e(this,(function(n){switch(n.label){case 0:return[4,this.http.get(c.a+"/comunicados.php").toPromise().then((function(n){return console.log(n.comunicados),l.comunicados=n.comunicados,l.comunicados})).catch((function(n){return l._as.loading.dismiss(),Promise.reject(n)}))];case 1:return[2,n.sent()]}}))}))},l.ngInjectableDef=o.Ob({factory:function(){return new l(o.Pb(r.c),o.Pb(b.a))},token:l,providedIn:"root"}),l}(),e=(u("xBmc"),function(){function l(l,n){this.iab=l,this.comunicado=n,this.cargarComunicados()}return l.prototype.abrirWeb=function(l,n){this.iab.create(l,n)},l.prototype.cargarComunicados=function(){return t.b(this,void 0,void 0,(function(){var l;return t.e(this,(function(n){switch(n.label){case 0:return l=this,[4,this.comunicado.cargar_todos()];case 1:return l.comunicados=n.sent(),[2]}}))}))},l.prototype.ngOnInit=function(){},l}()),a=function(){return function(){}}(),h=u("pMnS"),m=u("oBZk"),p=u("ZZ/e"),f=u("Ip0R"),d=o.rb({encapsulation:0,styles:[[""]],data:{}});function k(l){return o.Kb(0,[(l()(),o.tb(0,0,null,null,16,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.abrirWeb(l.context.$implicit.url,"_system")&&o),o}),m.kb,m.u)),o.sb(1,49152,null,0,p.I,[o.h,o.k,o.z],null,null),(l()(),o.tb(2,0,null,0,14,"ion-label",[["class","ion-text-wrap"]],null,null,null,m.lb,m.v)),o.sb(3,49152,null,0,p.O,[o.h,o.k,o.z],null,null),(l()(),o.tb(4,0,null,0,12,"ion-row",[],null,null,null,m.sb,m.C)),o.sb(5,49152,null,0,p.kb,[o.h,o.k,o.z],null,null),(l()(),o.tb(6,0,null,0,2,"ion-col",[["size","4"]],null,null,null,m.cb,m.m)),o.sb(7,49152,null,0,p.u,[o.h,o.k,o.z],{size:[0,"size"]},null),(l()(),o.tb(8,0,null,0,0,"img",[["class","logoSmall"]],[[8,"src",4]],null,null,null,null)),(l()(),o.tb(9,0,null,0,7,"ion-col",[["size","8"]],null,null,null,m.cb,m.m)),o.sb(10,49152,null,0,p.u,[o.h,o.k,o.z],{size:[0,"size"]},null),(l()(),o.tb(11,0,null,0,5,"ion-text",[["color","secondary"]],null,null,null,m.Bb,m.L)),o.sb(12,49152,null,0,p.yb,[o.h,o.k,o.z],{color:[0,"color"]},null),(l()(),o.tb(13,0,null,0,3,"ion-text",[["color","primary"]],null,null,null,m.Bb,m.L)),o.sb(14,49152,null,0,p.yb,[o.h,o.k,o.z],{color:[0,"color"]},null),(l()(),o.tb(15,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Jb(16,null,["",""]))],(function(l,n){l(n,7,0,"4"),l(n,10,0,"8"),l(n,12,0,"secondary"),l(n,14,0,"primary")}),(function(l,n){l(n,8,0,o.xb(1,"",n.context.$implicit.ruta_icono,"")),l(n,16,0,n.context.$implicit.titulo)}))}function z(l){return o.Kb(0,[(l()(),o.tb(0,0,null,null,13,"ion-header",[],null,null,null,m.fb,m.p)),o.sb(1,49152,null,0,p.C,[o.h,o.k,o.z],null,null),(l()(),o.tb(2,0,null,0,11,"ion-toolbar",[["color","primary"]],null,null,null,m.Fb,m.P)),o.sb(3,49152,null,0,p.Db,[o.h,o.k,o.z],{color:[0,"color"]},null),(l()(),o.tb(4,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,m.V,m.f)),o.sb(5,49152,null,0,p.m,[o.h,o.k,o.z],null,null),(l()(),o.tb(6,0,null,0,1,"ion-menu-button",[],null,null,null,m.ob,m.y)),o.sb(7,49152,null,0,p.S,[o.h,o.k,o.z],null,null),(l()(),o.tb(8,0,null,0,2,"ion-back-button",[["color","light"],["text","Volver"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.Fb(l,10).onClick(u)&&t),t}),m.S,m.c)),o.sb(9,49152,null,0,p.h,[o.h,o.k,o.z],{color:[0,"color"],text:[1,"text"]},null),o.sb(10,16384,null,0,p.i,[[2,p.jb],p.Jb],null,null),(l()(),o.tb(11,0,null,0,2,"ion-title",[],null,null,null,m.Db,m.N)),o.sb(12,49152,null,0,p.Bb,[o.h,o.k,o.z],null,null),(l()(),o.Jb(-1,0,["Comunicados"])),(l()(),o.tb(14,0,null,null,5,"ion-content",[],null,null,null,m.db,m.n)),o.sb(15,49152,null,0,p.v,[o.h,o.k,o.z],null,null),(l()(),o.tb(16,0,null,0,3,"ion-list",[],null,null,null,m.nb,m.w)),o.sb(17,49152,null,0,p.P,[o.h,o.k,o.z],null,null),(l()(),o.ib(16777216,null,0,1,null,k)),o.sb(19,278528,null,0,f.i,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,9,0,"light","Volver"),l(n,19,0,u.comunicados)}),null)}function g(l){return o.Kb(0,[(l()(),o.tb(0,0,null,null,1,"app-comunicados",[],null,null,null,z,d)),o.sb(1,114688,null,0,e,[i.a,s],null,null)],(function(l,n){l(n,1,0)}),null)}var v=o.pb("app-comunicados",e,g,{},{},[]),y=u("gIcY"),D=u("ZYCi");u.d(n,"ComunicadosPageModuleNgFactory",(function(){return x}));var x=o.qb(a,[],(function(l){return o.Cb([o.Db(512,o.j,o.bb,[[8,[h.a,v]],[3,o.j],o.x]),o.Db(4608,f.l,f.k,[o.u,[2,f.v]]),o.Db(4608,y.l,y.l,[]),o.Db(4608,p.b,p.b,[o.z,o.g]),o.Db(4608,p.Ib,p.Ib,[p.b,o.j,o.q]),o.Db(4608,p.Mb,p.Mb,[p.b,o.j,o.q]),o.Db(1073742336,f.b,f.b,[]),o.Db(1073742336,y.k,y.k,[]),o.Db(1073742336,y.b,y.b,[]),o.Db(1073742336,p.Fb,p.Fb,[]),o.Db(1073742336,D.n,D.n,[[2,D.s],[2,D.m]]),o.Db(1073742336,a,a,[]),o.Db(1024,D.k,(function(){return[[{path:"",component:e}]]}),[])])}))},xBmc:function(l,n){}}]);