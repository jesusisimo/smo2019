(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{ImLp:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),t=u("mrSG"),i=u("H+l1"),e=u("ZZ/e"),c=function(){function l(l){this.modalCtrl=l}return l.prototype.ngOnInit=function(){console.log(this.notificacion)},l.prototype.salir=function(){this.modalCtrl.dismiss()},l}(),r=(u("YTHQ"),u("q8lh")),s=function(){function l(l,n,u,o,t){this.pushService=l,this.applicationRef=n,this.alertCtrl=u,this.modalCtrl=o,this._as=t,this.msgs=[{title:"Titulo de la push",body:"Este es el body de la push",date:"Jueves 3:30pm"}],this.existen=!1}return l.prototype.ngOnInit=function(){var l=this;this.pushService.pushListener.subscribe(function(n){l.mensajes.unshift(n),l.mensajes.length>0?(console.log("no hay"),l.existen=!0):(l.existen=!1,console.log("si hay"))})},l.prototype.ionViewWillEnter=function(){return t.b(this,void 0,void 0,function(){var l;return t.e(this,function(n){switch(n.label){case 0:return this.mensajes=[],l=this,[4,this.pushService.cargar_todos()];case 1:return l.mensajes=n.sent(),this.mensajes.length>0?(console.log("si hay will"),this.existen=!0):(console.log("no hay will"),this.existen=!1),[2]}})})},l.prototype.borrarMensajes=function(){return t.b(this,void 0,void 0,function(){var l=this;return t.e(this,function(n){switch(n.label){case 0:return[4,this.alertCtrl.create({header:"Borrar noticiaciones",message:"\xbfSeguro que desea borrar todas las noticifaciones?",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:function(l){console.log("Confirm Cancel: blah")}},{text:"Borrar",handler:function(){l.mensajes=[],l.existen=!1,l.pushService.borrarMensajes()}}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},l.prototype.verNotificacion=function(l){return t.b(this,void 0,void 0,function(){var n;return t.e(this,function(u){switch(u.label){case 0:return[4,this.modalCtrl.create({component:c,componentProps:{notificacion:l}})];case 1:return n=u.sent(),this._as.sinleer>0&&(this._as.sinleer=this._as.sinleer-1),this.pushService.marcar_visto(l.id),[4,n.present()];case 2:return[2,u.sent()]}})})},l}(),b=function(){return function(){}}(),a=u("pMnS"),p=u("oBZk"),h=u("Ip0R"),f=o.nb({encapsulation:0,styles:[[".novisto[_ngcontent-%COMP%]{--ion-background-color:#e4e4e4}h3[_ngcontent-%COMP%]{color:#373744}"]],data:{}});function m(l){return o.Eb(0,[(l()(),o.pb(0,0,null,null,10,"ion-item",[["href","javascript:;"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(l.component.verNotificacion(l.context.$implicit),o=!1!==(l.context.$implicit.visto=1)&&o),o},p.kb,p.u)),o.ob(1,278528,null,0,h.h,[o.s,o.t,o.k,o.D],{ngClass:[0,"ngClass"]},null),o.ob(2,49152,null,0,e.H,[o.h,o.k],{href:[0,"href"]},null),(l()(),o.pb(3,0,null,0,7,"ion-label",[],null,null,null,p.lb,p.v)),o.ob(4,49152,null,0,e.N,[o.h,o.k],null,null),(l()(),o.pb(5,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),o.Db(6,null,["",""])),(l()(),o.pb(7,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Db(8,null,["",""])),(l()(),o.pb(9,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Db(10,null,["",""]))],function(l,n){l(n,1,0,n.context.$implicit.visto?"":"novisto"),l(n,2,0,"javascript:;")},function(l,n){l(n,6,0,n.context.$implicit.titulo),l(n,8,0,n.context.$implicit.mensaje),l(n,10,0,n.context.$implicit.time)})}function d(l){return o.Eb(0,[(l()(),o.pb(0,0,null,null,5,"ion-item",[],null,null,null,p.kb,p.u)),o.ob(1,49152,null,0,e.H,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,3,"ion-label",[],null,null,null,p.lb,p.v)),o.ob(3,49152,null,0,e.N,[o.h,o.k],null,null),(l()(),o.pb(4,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Db(-1,null,["No hay notificaciones"]))],null,null)}function k(l){return o.Eb(0,[(l()(),o.pb(0,0,null,null,6,"ion-header",[],null,null,null,p.fb,p.p)),o.ob(1,49152,null,0,e.B,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,p.Fb,p.P)),o.ob(3,49152,null,0,e.Bb,[o.h,o.k],{color:[0,"color"]},null),(l()(),o.pb(4,0,null,0,2,"ion-title",[],null,null,null,p.Db,p.N)),o.ob(5,49152,null,0,e.zb,[o.h,o.k],null,null),(l()(),o.Db(-1,0,["Notificaciones"])),(l()(),o.pb(7,0,null,null,7,"ion-content",[],null,null,null,p.db,p.n)),o.ob(8,49152,null,0,e.u,[o.h,o.k],null,null),(l()(),o.pb(9,0,null,0,5,"ion-list",[],null,null,null,p.nb,p.w)),o.ob(10,49152,null,0,e.O,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,m)),o.ob(12,278528,null,0,h.i,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null),(l()(),o.gb(16777216,null,0,1,null,d)),o.ob(14,16384,null,0,h.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,12,0,u.mensajes),l(n,14,0,!u.existen)},null)}function v(l){return o.Eb(0,[(l()(),o.pb(0,0,null,null,1,"app-notificaciones",[],null,null,null,k,f)),o.ob(1,114688,null,0,s,[i.a,o.g,e.a,e.Gb,r.a],null,null)],function(l,n){l(n,1,0)},null)}var g=o.lb("app-notificaciones",s,v,{},{},[]),x=o.nb({encapsulation:0,styles:[[""]],data:{}});function y(l){return o.Eb(0,[(l()(),o.pb(0,0,null,null,10,"ion-header",[],null,null,null,p.fb,p.p)),o.ob(1,49152,null,0,e.B,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,8,"ion-toolbar",[["color","primary"]],null,null,null,p.Fb,p.P)),o.ob(3,49152,null,0,e.Bb,[o.h,o.k],{color:[0,"color"]},null),(l()(),o.pb(4,0,null,0,2,"ion-title",[],null,null,null,p.Db,p.N)),o.ob(5,49152,null,0,e.zb,[o.h,o.k],null,null),(l()(),o.Db(-1,0,["Notificaci\xf3n"])),(l()(),o.pb(7,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,p.V,p.f)),o.ob(8,49152,null,0,e.l,[o.h,o.k],null,null),(l()(),o.pb(9,0,null,0,1,"ion-icon",[["name","close"],["slot","icon-only"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.salir()&&o),o},p.gb,p.q)),o.ob(10,49152,null,0,e.C,[o.h,o.k],{name:[0,"name"]},null),(l()(),o.pb(11,0,null,null,14,"ion-content",[],null,null,null,p.db,p.n)),o.ob(12,49152,null,0,e.u,[o.h,o.k],null,null),(l()(),o.pb(13,0,null,0,12,"ion-card",[],null,null,null,p.ab,p.g)),o.ob(14,49152,null,0,e.m,[o.h,o.k],null,null),(l()(),o.pb(15,0,null,0,7,"ion-card-header",[],null,null,null,p.X,p.i)),o.ob(16,49152,null,0,e.o,[o.h,o.k],null,null),(l()(),o.pb(17,0,null,0,2,"ion-card-title",[],null,null,null,p.Z,p.k)),o.ob(18,49152,null,0,e.q,[o.h,o.k],null,null),(l()(),o.Db(19,0,["",""])),(l()(),o.pb(20,0,null,0,2,"ion-card-subtitle",[],null,null,null,p.Y,p.j)),o.ob(21,49152,null,0,e.p,[o.h,o.k],null,null),(l()(),o.Db(22,0,["",""])),(l()(),o.pb(23,0,null,0,2,"ion-card-content",[],null,null,null,p.W,p.h)),o.ob(24,49152,null,0,e.n,[o.h,o.k],null,null),(l()(),o.Db(25,0,[" "," "]))],function(l,n){l(n,3,0,"primary"),l(n,10,0,"close")},function(l,n){var u=n.component;l(n,19,0,u.notificacion.titulo),l(n,22,0,u.notificacion.time),l(n,25,0,u.notificacion.mensaje)})}function j(l){return o.Eb(0,[(l()(),o.pb(0,0,null,null,1,"app-notificacion",[],null,null,null,y,x)),o.ob(1,114688,null,0,c,[e.Gb],null,null)],function(l,n){l(n,1,0)},null)}var C=o.lb("app-notificacion",c,j,{notificacion:"notificacion"},{},[]),w=u("gIcY"),D=function(){return function(){}}(),N=u("ZYCi");u.d(n,"NotificacionesPageModuleNgFactory",function(){return O});var O=o.mb(b,[],function(l){return o.wb([o.xb(512,o.j,o.bb,[[8,[a.a,g,C]],[3,o.j],o.x]),o.xb(4608,h.l,h.k,[o.u,[2,h.t]]),o.xb(4608,w.m,w.m,[]),o.xb(4608,e.b,e.b,[o.z,o.g]),o.xb(4608,e.Gb,e.Gb,[e.b,o.j,o.q,h.c]),o.xb(4608,e.Kb,e.Kb,[e.b,o.j,o.q,h.c]),o.xb(1073742336,h.b,h.b,[]),o.xb(1073742336,w.k,w.k,[]),o.xb(1073742336,w.b,w.b,[]),o.xb(1073742336,e.Db,e.Db,[]),o.xb(1073742336,D,D,[]),o.xb(1073742336,N.n,N.n,[[2,N.t],[2,N.m]]),o.xb(1073742336,b,b,[]),o.xb(1024,N.k,function(){return[[{path:"",component:s}]]},[])])})},YTHQ:function(l,n){}}]);