(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{Hrv5:function(n,l,t){"use strict";t.r(l);var o=t("CcnG"),r=t("ZZ/e"),i=t("mrSG"),u=t("7Y6Z"),e=t("q8lh"),a=t("Px6c"),s=(t("BuZO"),t("t/Na")),c=function(){function n(n,l,t){this.http=n,this._as=l,this._ds=t,this.pagina=0}return n.prototype.getDetalles=function(n){var l=this;return!!this._as.online&&(this._as.presentLoading("Cargando..."),this.http.get(u.a+"/patrocinadores.php?id="+n).toPromise().then(function(n){return l.patrocinadores=n.resultados,l._as.loading.dismiss(),n}).catch(function(n){return l._as.loading.dismiss(),Promise.reject(n)}))},n.prototype.cargar_todos=function(){var n=this;if(this._as.online)return this._as.presentLoading("Cargando..."),this.http.get(u.a+"/patrocinadores.php?todos&pagina="+this.pagina).toPromise().then(function(l){return n.patrocinadores=l.resultados,n.pagina=n.pagina+=1,n._as.loading.dismiss(),l}).catch(function(l){return n._as.loading.dismiss(),Promise.reject(l)});this._ds.getPatrocinadores().then(function(l){return n.patrocinadores=l,n.pagina=100,n._as.loading.dismiss(),l})},n.prototype.siguiente_pagina=function(){return i.b(this,void 0,void 0,function(){var n,l=this;return i.e(this,function(t){switch(t.label){case 0:return this._as.online?[4,this.http.get(u.a+"/patrocinadores.php?todos&pagina="+this.pagina).toPromise().then(function(t){var o;return t.resultados.length>0?((o=l.patrocinadores).push.apply(o,t.resultados),l.pagina=l.pagina+=1):l._as.presentToast("No hay mas informaci\xf3n"),n}).catch(function(n){return l._as.presentToast("Ocurrio un error"),Promise.reject(n)})]:[2,!1];case 1:return[2,n=t.sent()]}})})},n.prototype.buscar=function(n){return i.b(this,void 0,void 0,function(){var l,t,o=this;return i.e(this,function(r){switch(r.label){case 0:return this._as.online?[3,2]:(n=n.toUpperCase(),[4,this._ds.getPatrocinadores().then(function(t){return o.patrocinadores=[],t.forEach(function(l){l.patrocinador.toUpperCase().indexOf(n)>=0&&o.patrocinadores.push(l)}),l})]);case 1:return l=r.sent(),[3,4];case 2:return[4,this.http.get(u.a+"/patrocinadores.php?search="+n).toPromise().then(function(n){return o.patrocinadores=null,o.patrocinadores=n.resultados,o.pagina=1,t}).catch(function(n){return o._as.presentToast("Ocurrio un error"),Promise.reject(n)})];case 3:return[2,t=r.sent()];case 4:return[2]}})})},n.prototype.recargar=function(n){return i.b(this,void 0,void 0,function(){var l,t=this;return i.e(this,function(o){switch(o.label){case 0:return this._as.online?[3,1]:(this.cargar_todos(),[2,!0]);case 1:return this.pagina=0,this._as.presentLoading("Recargando..."),[4,this.http.get(u.a+"/patrocinadores.php?todos&pagina="+this.pagina+"&search="+n).toPromise().then(function(n){return n.resultados.length>0?(t.patrocinadores=n.resultados,t.pagina=1):t._as.presentToast("No hay mas informaci\xf3n"),t._as.loading.dismiss(),l}).catch(function(n){return t._as.loading.dismiss(),Promise.reject(n)})];case 2:return[2,l=o.sent()]}})})},n.ngInjectableDef=o.S({factory:function(){return new n(o.W(s.c),o.W(e.a),o.W(a.a))},token:n,providedIn:"root"}),n}(),b=t("9B/o"),p=function(){function n(n,l,t){this.modalCtrl=n,this._ps=l,this.iab=t,this.variable=""}return n.prototype.ngOnInit=function(){this._ps.pagina=0,this._ps.patrocinadores=[],this._ps.cargar_todos()},n.prototype.abrirWeb=function(n){this.iab.create(n,"_system")},n.prototype.buscar=function(n){this.variable=n.target.value,this._ps.buscar(this.variable)},n.prototype.siguiente_pagina=function(n){this._ps.siguiente_pagina().then(function(){n.target.complete(),n.target.disabled=!1})},n.prototype.recargar=function(n){this._ps.recargar(this.variable).then(function(){n.target.complete(),n.target.disabled=!1})},n}(),h=function(){return function(){}}(),d=t("pMnS"),g=t("oBZk"),f=t("Ip0R"),m=t("gIcY"),_=o.nb({encapsulation:0,styles:[["[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:none;background-color:#dbdbdb}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:none;background-color:#dbdbdb}[_nghost-%COMP%]   ion-card[_ngcontent-%COMP%]{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0}"]],data:{}});function k(n){return o.Fb(0,[(n()(),o.pb(0,0,null,null,4,"ion-button",[["color","primary"],["text-center",""]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.abrirWeb(n.parent.context.$implicit.pagina)&&o),o},g.U,g.e)),o.ob(1,49152,null,0,r.k,[o.h,o.k],{color:[0,"color"]},null),(n()(),o.pb(2,0,null,0,1,"ion-icon",[["name","link"]],null,null,null,g.ib,g.s)),o.ob(3,49152,null,0,r.C,[o.h,o.k],{name:[0,"name"]},null),(n()(),o.Eb(-1,0,[" Visitar p\xe1gina "]))],function(n,l){n(l,1,0,"primary"),n(l,3,0,"link")},null)}function x(n){return o.Fb(0,[(n()(),o.pb(0,0,null,null,11,"ion-item",[["ion-item",""]],null,null,null,g.nb,g.x)),o.ob(1,49152,null,0,r.H,[o.h,o.k],null,null),(n()(),o.pb(2,0,null,0,9,"ion-card",[["color","light"]],null,null,null,g.ab,g.g)),o.ob(3,49152,null,0,r.m,[o.h,o.k],{color:[0,"color"]},null),(n()(),o.pb(4,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),o.pb(5,0,null,0,0,"h3",[["text-center",""]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),o.pb(6,0,null,0,2,"ion-card-content",[["text-justify",""]],null,null,null,g.W,g.h)),o.ob(7,49152,null,0,r.n,[o.h,o.k],null,null),(n()(),o.pb(8,0,null,0,0,"p",[["text-justify",""]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),o.pb(9,0,null,0,2,"h5",[["text-right",""]],null,null,null,null,null)),(n()(),o.gb(16777216,null,null,1,null,k)),o.ob(11,16384,null,0,f.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,"light"),n(l,11,0,""!=l.context.$implicit.pagina)},function(n,l){n(l,4,0,o.rb(1,"",l.context.$implicit.logo,"")),n(l,5,0,l.context.$implicit.patrocinador),n(l,8,0,l.context.$implicit.descripcion)})}function v(n){return o.Fb(0,[(n()(),o.pb(0,0,null,null,19,"ion-header",[],null,null,null,g.hb,g.r)),o.ob(1,49152,null,0,r.B,[o.h,o.k],null,null),(n()(),o.pb(2,0,null,0,11,"ion-toolbar",[["color","primary"]],null,null,null,g.Fb,g.P)),o.ob(3,49152,null,0,r.Bb,[o.h,o.k],{color:[0,"color"]},null),(n()(),o.pb(4,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,g.V,g.f)),o.ob(5,49152,null,0,r.l,[o.h,o.k],null,null),(n()(),o.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,g.rb,g.B)),o.ob(7,49152,null,0,r.R,[o.h,o.k],null,null),(n()(),o.pb(8,0,null,0,2,"ion-back-button",[["color","light"],["text","Atras"]],null,[[null,"click"]],function(n,l,t){var r=!0;return"click"===l&&(r=!1!==o.zb(n,10).onClick(t)&&r),r},g.S,g.c)),o.ob(9,49152,null,0,r.g,[o.h,o.k],{color:[0,"color"],text:[1,"text"]},null),o.ob(10,16384,null,0,r.h,[[2,r.hb],r.Hb],null,null),(n()(),o.pb(11,0,null,0,2,"ion-title",[],null,null,null,g.Eb,g.O)),o.ob(12,49152,null,0,r.zb,[o.h,o.k],null,null),(n()(),o.Eb(-1,0,["Patrocinadores"])),(n()(),o.pb(14,0,null,0,5,"ion-toolbar",[["class","buscadores"],["color","primary"]],null,null,null,g.Fb,g.P)),o.ob(15,49152,null,0,r.Bb,[o.h,o.k],{color:[0,"color"]},null),(n()(),o.pb(16,0,null,0,3,"ion-searchbar",[["animated",""],["cancelButtonText","OK"],["class","buscador"],["color","light"],["debounce","550"],["placeholder","Buscar patrocinador..."],["showCancelButton",""]],null,[[null,"ionChange"],[null,"ionBlur"]],function(n,l,t){var r=!0,i=n.component;return"ionBlur"===l&&(r=!1!==o.zb(n,19)._handleBlurEvent()&&r),"ionChange"===l&&(r=!1!==o.zb(n,19)._handleInputEvent(t.target.value)&&r),"ionChange"===l&&(r=!1!==i.buscar(t)&&r),r},g.wb,g.G)),o.Bb(5120,null,m.d,function(n){return[n]},[r.Lb]),o.ob(18,49152,null,0,r.jb,[o.h,o.k],{color:[0,"color"],animated:[1,"animated"],cancelButtonText:[2,"cancelButtonText"],debounce:[3,"debounce"],placeholder:[4,"placeholder"],showCancelButton:[5,"showCancelButton"]},null),o.ob(19,16384,null,0,r.Lb,[o.k],null,null),(n()(),o.pb(20,0,null,null,13,"ion-content",[["ion-padding","ion-padding"]],null,null,null,g.eb,g.o)),o.ob(21,49152,null,0,r.u,[o.h,o.k],null,null),(n()(),o.pb(22,0,null,0,3,"ion-refresher",[],null,[[null,"ionRefresh"]],function(n,l,t){var o=!0;return"ionRefresh"===l&&(o=!1!==n.component.recargar(t)&&o),o},g.ub,g.D)),o.ob(23,49152,null,0,r.cb,[o.h,o.k],null,null),(n()(),o.pb(24,0,null,0,1,"ion-refresher-content",[],null,null,null,g.tb,g.E)),o.ob(25,49152,null,0,r.db,[o.h,o.k],null,null),(n()(),o.pb(26,0,null,0,3,"ion-list",[],null,null,null,g.qb,g.z)),o.ob(27,49152,null,0,r.O,[o.h,o.k],null,null),(n()(),o.gb(16777216,null,0,1,null,x)),o.ob(29,278528,null,0,f.i,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null),(n()(),o.pb(30,0,null,0,3,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],function(n,l,t){var o=!0;return"ionInfinite"===l&&(o=!1!==n.component.siguiente_pagina(t)&&o),o},g.lb,g.u)),o.ob(31,49152,null,0,r.E,[o.h,o.k],null,null),(n()(),o.pb(32,0,null,0,1,"ion-infinite-scroll-content",[["loadingText","Cargando mas informaci\xf3n\u2026"]],null,null,null,g.kb,g.v)),o.ob(33,49152,null,0,r.F,[o.h,o.k],{loadingText:[0,"loadingText"]},null)],function(n,l){var t=l.component;n(l,3,0,"primary"),n(l,9,0,"light","Atras"),n(l,15,0,"primary"),n(l,18,0,"light","","OK","550","Buscar patrocinador...",""),n(l,29,0,t._ps.patrocinadores),n(l,33,0,"Cargando mas informaci\xf3n\u2026")},null)}function y(n){return o.Fb(0,[(n()(),o.pb(0,0,null,null,1,"app-patrocinadores",[],null,null,null,v,_)),o.ob(1,114688,null,0,p,[r.Gb,c,b.a],null,null)],function(n,l){n(l,1,0)},null)}var P=o.lb("app-patrocinadores",p,y,{},{},[]),C=t("ZYCi");t.d(l,"PatrocinadoresPageModuleNgFactory",function(){return B});var B=o.mb(h,[],function(n){return o.wb([o.xb(512,o.j,o.bb,[[8,[d.a,P]],[3,o.j],o.x]),o.xb(4608,f.l,f.k,[o.u,[2,f.t]]),o.xb(4608,m.m,m.m,[]),o.xb(4608,r.b,r.b,[o.z,o.g]),o.xb(4608,r.Gb,r.Gb,[r.b,o.j,o.q,f.c]),o.xb(4608,r.Jb,r.Jb,[r.b,o.j,o.q,f.c]),o.xb(1073742336,f.b,f.b,[]),o.xb(1073742336,m.k,m.k,[]),o.xb(1073742336,m.b,m.b,[]),o.xb(1073742336,r.Db,r.Db,[]),o.xb(1073742336,C.n,C.n,[[2,C.t],[2,C.m]]),o.xb(1073742336,h,h,[]),o.xb(1024,C.k,function(){return[[{path:"",component:p}]]},[])])})}}]);