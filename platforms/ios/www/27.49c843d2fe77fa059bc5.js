(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{ImLp:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),t=u("mrSG"),i=u("H+l1"),e=u("ZZ/e"),c=function(){function l(l){this.modalCtrl=l}return l.prototype.ngOnInit=function(){console.log(this.notificacion)},l.prototype.salir=function(){this.modalCtrl.dismiss()},l}(),r=function(){function l(l,n,u,o){this.pushService=l,this.applicationRef=n,this.alertCtrl=u,this.modalCtrl=o,this.mensajes=[],this.msgs=[{title:"Titulo de la push",body:"Este es el body de la push",date:"Jueves 3:30pm"}],this.existen=!1}return l.prototype.ngOnInit=function(){var l=this;this.pushService.pushListener.subscribe(function(n){l.mensajes.unshift(n),l.mensajes.length>0?(console.log("no hay"),l.existen=!0):(l.existen=!1,console.log("si hay"))})},l.prototype.ionViewWillEnter=function(){return t.b(this,void 0,void 0,function(){var l;return t.e(this,function(n){switch(n.label){case 0:return this.mensajes=[],l=this,[4,this.pushService.getMensajes()];case 1:return l.mensajes=n.sent(),this.mensajes.length>0?(console.log("si hay will"),this.existen=!0):(console.log("no hay will"),this.existen=!1),[2]}})})},l.prototype.borrarMensajes=function(){return t.b(this,void 0,void 0,function(){var l=this;return t.e(this,function(n){switch(n.label){case 0:return[4,this.alertCtrl.create({header:"Borrar noticiaciones",message:"\xbfSeguro que desea borrar todas las noticifaciones?",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:function(l){console.log("Confirm Cancel: blah")}},{text:"Borrar",handler:function(){l.mensajes=[],l.existen=!1,l.pushService.borrarMensajes()}}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},l.prototype.verNotificacion=function(l){return t.b(this,void 0,void 0,function(){return t.e(this,function(n){switch(n.label){case 0:return[4,this.modalCtrl.create({component:c,componentProps:{notificacion:l}})];case 1:return[4,n.sent().present()];case 2:return[2,n.sent()]}})})},l}(),b=function(){return function(){}}(),s=u("pMnS"),a=u("oBZk"),p=u("Ip0R"),h=o.nb({encapsulation:0,styles:[[""]],data:{}});function f(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,7,"ion-item",[["href","javascript:;"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.verNotificacion(l.context.$implicit)&&o),o},a.nb,a.x)),o.ob(1,49152,null,0,e.H,[o.h,o.k],{href:[0,"href"]},null),(l()(),o.pb(2,0,null,0,5,"ion-label",[],null,null,null,a.ob,a.y)),o.ob(3,49152,null,0,e.N,[o.h,o.k],null,null),(l()(),o.pb(4,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),o.Eb(5,null,["",""])),(l()(),o.pb(6,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Eb(7,null,["",""]))],function(l,n){l(n,1,0,"javascript:;")},function(l,n){l(n,5,0,n.context.$implicit.title),l(n,7,0,n.context.$implicit.body)})}function m(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,5,"ion-item",[],null,null,null,a.nb,a.x)),o.ob(1,49152,null,0,e.H,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,3,"ion-label",[],null,null,null,a.ob,a.y)),o.ob(3,49152,null,0,e.N,[o.h,o.k],null,null),(l()(),o.pb(4,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Eb(-1,null,["No hay notificaciones"]))],null,null)}function d(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,12,"ion-header",[],null,null,null,a.hb,a.r)),o.ob(1,49152,null,0,e.B,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,10,"ion-toolbar",[["color","primary"]],null,null,null,a.Fb,a.P)),o.ob(3,49152,null,0,e.Bb,[o.h,o.k],{color:[0,"color"]},null),(l()(),o.pb(4,0,null,0,2,"ion-title",[],null,null,null,a.Eb,a.O)),o.ob(5,49152,null,0,e.zb,[o.h,o.k],null,null),(l()(),o.Eb(-1,0,["Notificaciones"])),(l()(),o.pb(7,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,a.V,a.f)),o.ob(8,49152,null,0,e.l,[o.h,o.k],null,null),(l()(),o.pb(9,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.borrarMensajes()&&o),o},a.U,a.e)),o.ob(10,49152,null,0,e.k,[o.h,o.k],null,null),(l()(),o.pb(11,0,null,0,1,"ion-icon",[["name","trash"],["slot","icon-only"]],null,null,null,a.ib,a.s)),o.ob(12,49152,null,0,e.C,[o.h,o.k],{name:[0,"name"]},null),(l()(),o.pb(13,0,null,null,7,"ion-content",[],null,null,null,a.eb,a.o)),o.ob(14,49152,null,0,e.u,[o.h,o.k],null,null),(l()(),o.pb(15,0,null,0,5,"ion-list",[],null,null,null,a.qb,a.z)),o.ob(16,49152,null,0,e.O,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,f)),o.ob(18,278528,null,0,p.i,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null),(l()(),o.gb(16777216,null,0,1,null,m)),o.ob(20,16384,null,0,p.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,12,0,"trash"),l(n,18,0,u.mensajes),l(n,20,0,!u.existen)},null)}function k(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,1,"app-notificaciones",[],null,null,null,d,h)),o.ob(1,114688,null,0,r,[i.a,o.g,e.a,e.Gb],null,null)],function(l,n){l(n,1,0)},null)}var x=o.lb("app-notificaciones",r,k,{},{},[]),v=o.nb({encapsulation:0,styles:[[""]],data:{}});function y(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,10,"ion-header",[],null,null,null,a.hb,a.r)),o.ob(1,49152,null,0,e.B,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,8,"ion-toolbar",[["color","primary"]],null,null,null,a.Fb,a.P)),o.ob(3,49152,null,0,e.Bb,[o.h,o.k],{color:[0,"color"]},null),(l()(),o.pb(4,0,null,0,2,"ion-title",[],null,null,null,a.Eb,a.O)),o.ob(5,49152,null,0,e.zb,[o.h,o.k],null,null),(l()(),o.Eb(-1,0,["Notificaci\xf3n"])),(l()(),o.pb(7,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,a.V,a.f)),o.ob(8,49152,null,0,e.l,[o.h,o.k],null,null),(l()(),o.pb(9,0,null,0,1,"ion-icon",[["name","close"],["slot","icon-only"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.salir()&&o),o},a.ib,a.s)),o.ob(10,49152,null,0,e.C,[o.h,o.k],{name:[0,"name"]},null),(l()(),o.pb(11,0,null,null,11,"ion-content",[],null,null,null,a.eb,a.o)),o.ob(12,49152,null,0,e.u,[o.h,o.k],null,null),(l()(),o.pb(13,0,null,0,9,"ion-card",[],null,null,null,a.ab,a.g)),o.ob(14,49152,null,0,e.m,[o.h,o.k],null,null),(l()(),o.pb(15,0,null,0,4,"ion-card-header",[],null,null,null,a.X,a.i)),o.ob(16,49152,null,0,e.o,[o.h,o.k],null,null),(l()(),o.pb(17,0,null,0,2,"ion-card-title",[],null,null,null,a.Z,a.k)),o.ob(18,49152,null,0,e.q,[o.h,o.k],null,null),(l()(),o.Eb(19,0,["",""])),(l()(),o.pb(20,0,null,0,2,"ion-card-content",[],null,null,null,a.W,a.h)),o.ob(21,49152,null,0,e.n,[o.h,o.k],null,null),(l()(),o.Eb(22,0,[" "," "]))],function(l,n){l(n,3,0,"primary"),l(n,10,0,"close")},function(l,n){var u=n.component;l(n,19,0,u.notificacion.title),l(n,22,0,u.notificacion.body)})}function g(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,1,"app-notificacion",[],null,null,null,y,v)),o.ob(1,114688,null,0,c,[e.Gb],null,null)],function(l,n){l(n,1,0)},null)}var j=o.lb("app-notificacion",c,g,{notificacion:"notificacion"},{},[]),C=u("gIcY"),w=function(){return function(){}}(),E=u("ZYCi");u.d(n,"NotificacionesPageModuleNgFactory",function(){return F});var F=o.mb(b,[],function(l){return o.wb([o.xb(512,o.j,o.bb,[[8,[s.a,x,j]],[3,o.j],o.x]),o.xb(4608,p.l,p.k,[o.u,[2,p.t]]),o.xb(4608,C.m,C.m,[]),o.xb(4608,e.b,e.b,[o.z,o.g]),o.xb(4608,e.Gb,e.Gb,[e.b,o.j,o.q,p.c]),o.xb(4608,e.Jb,e.Jb,[e.b,o.j,o.q,p.c]),o.xb(1073742336,p.b,p.b,[]),o.xb(1073742336,C.k,C.k,[]),o.xb(1073742336,C.b,C.b,[]),o.xb(1073742336,e.Db,e.Db,[]),o.xb(1073742336,w,w,[]),o.xb(1073742336,E.n,E.n,[[2,E.t],[2,E.m]]),o.xb(1073742336,b,b,[]),o.xb(1024,E.k,function(){return[[{path:"",component:r}]]},[])])})}}]);