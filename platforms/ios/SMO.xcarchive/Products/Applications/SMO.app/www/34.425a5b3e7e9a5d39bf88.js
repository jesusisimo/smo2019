(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{Hrv5:function(n,l,t){"use strict";t.r(l);var o=t("CcnG"),i=t("ZZ/e"),r=t("mrSG"),u=t("7Y6Z"),e=t("q8lh"),a=t("Px6c"),s=(t("BuZO"),t("t/Na")),c=function(){function n(n,l,t){this.http=n,this._as=l,this._ds=t,this.pagina=0}return n.prototype.getDetalles=function(n){var l=this;return!!this._as.online&&(this._as.presentLoading("Cargando..."),this.http.get(u.a+"/patrocinadores.php?id="+n).toPromise().then(function(n){return l.patrocinadores=n.resultados,l._as.loading.dismiss(),n}).catch(function(n){return l._as.loading.dismiss(),Promise.reject(n)}))},n.prototype.cargar_todos=function(){var n=this;if(this._as.online)return this._as.presentLoading("Cargando..."),this.http.get(u.a+"/patrocinadores.php?todos&pagina="+this.pagina).toPromise().then(function(l){return n.patrocinadores=l.resultados,n.pagina=n.pagina+=1,n._as.loading.dismiss(),l}).catch(function(l){return n._as.loading.dismiss(),Promise.reject(l)});this._ds.getPatrocinadores().then(function(l){return n.patrocinadores=l,n.pagina=100,n._as.loading.dismiss(),l})},n.prototype.siguiente_pagina=function(){return r.b(this,void 0,void 0,function(){var n,l=this;return r.e(this,function(t){switch(t.label){case 0:return this._as.online?[4,this.http.get(u.a+"/patrocinadores.php?todos&pagina="+this.pagina).toPromise().then(function(t){var o;return t.resultados.length>0?((o=l.patrocinadores).push.apply(o,t.resultados),l.pagina=l.pagina+=1):l._as.presentToast("No hay mas informaci\xf3n"),n}).catch(function(n){return l._as.presentToast("Ocurrio un error"),Promise.reject(n)})]:[2,!1];case 1:return[2,n=t.sent()]}})})},n.prototype.buscar=function(n){return r.b(this,void 0,void 0,function(){var l,t,o=this;return r.e(this,function(i){switch(i.label){case 0:return this._as.online?[3,2]:(n=n.toUpperCase(),[4,this._ds.getPatrocinadores().then(function(t){return o.patrocinadores=[],t.forEach(function(l){l.patrocinador.toUpperCase().indexOf(n)>=0&&o.patrocinadores.push(l)}),l})]);case 1:return l=i.sent(),[3,4];case 2:return[4,this.http.get(u.a+"/patrocinadores.php?search="+n).toPromise().then(function(n){return o.patrocinadores=null,o.patrocinadores=n.resultados,o.pagina=1,t}).catch(function(n){return o._as.presentToast("Ocurrio un error"),Promise.reject(n)})];case 3:return[2,t=i.sent()];case 4:return[2]}})})},n.prototype.recargar=function(n){return r.b(this,void 0,void 0,function(){var l,t=this;return r.e(this,function(o){switch(o.label){case 0:return this._as.online?[3,1]:(this.cargar_todos(),[2,!0]);case 1:return this.pagina=0,this._as.presentLoading("Recargando..."),[4,this.http.get(u.a+"/patrocinadores.php?todos&pagina="+this.pagina+"&search="+n).toPromise().then(function(n){return n.resultados.length>0?(t.patrocinadores=n.resultados,t.pagina=1):t._as.presentToast("No hay mas informaci\xf3n"),t._as.loading.dismiss(),l}).catch(function(n){return t._as.loading.dismiss(),Promise.reject(n)})];case 2:return[2,l=o.sent()]}})})},n.ngInjectableDef=o.Ob({factory:function(){return new n(o.Pb(s.c),o.Pb(e.a),o.Pb(a.a))},token:n,providedIn:"root"}),n}(),b=t("9B/o"),p=function(){function n(n,l,t){this.modalCtrl=n,this._ps=l,this.iab=t,this.variable=""}return n.prototype.ngOnInit=function(){this._ps.pagina=0,this._ps.patrocinadores=[],this._ps.cargar_todos()},n.prototype.abrirWeb=function(n){this.iab.create(n,"_system")},n.prototype.buscar=function(n){this.variable=n.target.value,this._ps.buscar(this.variable)},n.prototype.siguiente_pagina=function(n){this._ps.siguiente_pagina().then(function(){n.target.complete(),n.target.disabled=!1})},n.prototype.recargar=function(n){this._ps.recargar(this.variable).then(function(){n.target.complete(),n.target.disabled=!1})},n}(),h=function(){return function(){}}(),d=t("pMnS"),g=t("oBZk"),f=t("Ip0R"),m=t("gIcY"),k=o.rb({encapsulation:0,styles:[["[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:none;background-color:#dbdbdb}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:none;background-color:#dbdbdb}[_nghost-%COMP%]   ion-card[_ngcontent-%COMP%]{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0}"]],data:{}});function _(n){return o.Kb(0,[(n()(),o.tb(0,0,null,null,5,"ion-button",[["color","primary"],["text-center",""]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.abrirWeb(n.parent.context.$implicit.pagina)&&o),o},g.U,g.e)),o.sb(1,49152,null,0,i.l,[o.h,o.k,o.z],{color:[0,"color"]},null),o.sb(2,16384,null,0,i.e,[o.k],null,null),(n()(),o.tb(3,0,null,0,1,"ion-icon",[["name","link"]],null,null,null,g.gb,g.q)),o.sb(4,49152,null,0,i.D,[o.h,o.k,o.z],{name:[0,"name"]},null),(n()(),o.Jb(-1,0,[" Visitar p\xe1gina "]))],function(n,l){n(l,1,0,"primary"),n(l,4,0,"link")},null)}function v(n){return o.Kb(0,[(n()(),o.tb(0,0,null,null,15,"ion-item",[["ion-item",""]],null,null,null,g.kb,g.u)),o.sb(1,49152,null,0,i.I,[o.h,o.k,o.z],null,null),(n()(),o.tb(2,0,null,0,13,"ion-card",[["color","light"]],null,null,null,g.ab,g.g)),o.sb(3,49152,null,0,i.n,[o.h,o.k,o.z],{color:[0,"color"]},null),(n()(),o.tb(4,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),o.tb(5,0,null,0,1,"h3",[["text-center",""]],[[8,"innerHTML",1]],null,null,null,null)),o.sb(6,16384,null,0,i.e,[o.k],null,null),(n()(),o.tb(7,0,null,0,4,"ion-card-content",[["text-justify",""]],null,null,null,g.W,g.h)),o.sb(8,49152,null,0,i.o,[o.h,o.k,o.z],null,null),o.sb(9,16384,null,0,i.e,[o.k],null,null),(n()(),o.tb(10,0,null,0,1,"p",[["text-justify",""]],[[8,"innerHTML",1]],null,null,null,null)),o.sb(11,16384,null,0,i.e,[o.k],null,null),(n()(),o.tb(12,0,null,0,3,"h5",[["text-right",""]],null,null,null,null,null)),o.sb(13,16384,null,0,i.e,[o.k],null,null),(n()(),o.ib(16777216,null,null,1,null,_)),o.sb(15,16384,null,0,f.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,"light"),n(l,15,0,""!=l.context.$implicit.pagina)},function(n,l){n(l,4,0,o.xb(1,"",l.context.$implicit.logo,"")),n(l,5,0,l.context.$implicit.patrocinador),n(l,10,0,l.context.$implicit.descripcion)})}function P(n){return o.Kb(0,[(n()(),o.tb(0,0,null,null,19,"ion-header",[],null,null,null,g.fb,g.p)),o.sb(1,49152,null,0,i.C,[o.h,o.k,o.z],null,null),(n()(),o.tb(2,0,null,0,11,"ion-toolbar",[["color","primary"]],null,null,null,g.Fb,g.P)),o.sb(3,49152,null,0,i.Db,[o.h,o.k,o.z],{color:[0,"color"]},null),(n()(),o.tb(4,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,g.V,g.f)),o.sb(5,49152,null,0,i.m,[o.h,o.k,o.z],null,null),(n()(),o.tb(6,0,null,0,1,"ion-menu-button",[],null,null,null,g.ob,g.y)),o.sb(7,49152,null,0,i.S,[o.h,o.k,o.z],null,null),(n()(),o.tb(8,0,null,0,2,"ion-back-button",[["color","light"],["text","Atras"]],null,[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==o.Fb(n,10).onClick(t)&&i),i},g.S,g.c)),o.sb(9,49152,null,0,i.h,[o.h,o.k,o.z],{color:[0,"color"],text:[1,"text"]},null),o.sb(10,16384,null,0,i.i,[[2,i.jb],i.Jb],null,null),(n()(),o.tb(11,0,null,0,2,"ion-title",[],null,null,null,g.Db,g.N)),o.sb(12,49152,null,0,i.Bb,[o.h,o.k,o.z],null,null),(n()(),o.Jb(-1,0,["Patrocinadores"])),(n()(),o.tb(14,0,null,0,5,"ion-toolbar",[["class","buscadores"],["color","primary"]],null,null,null,g.Fb,g.P)),o.sb(15,49152,null,0,i.Db,[o.h,o.k,o.z],{color:[0,"color"]},null),(n()(),o.tb(16,0,null,0,3,"ion-searchbar",[["animated",""],["cancelButtonText","OK"],["class","buscador"],["color","light"],["debounce","550"],["placeholder","Buscar patrocinador..."],["showCancelButton",""]],null,[[null,"ionChange"],[null,"ionBlur"]],function(n,l,t){var i=!0,r=n.component;return"ionBlur"===l&&(i=!1!==o.Fb(n,19)._handleBlurEvent(t.target)&&i),"ionChange"===l&&(i=!1!==o.Fb(n,19)._handleInputEvent(t.target)&&i),"ionChange"===l&&(i=!1!==r.buscar(t)&&i),i},g.tb,g.D)),o.Gb(5120,null,m.d,function(n){return[n]},[i.Ob]),o.sb(18,49152,null,0,i.lb,[o.h,o.k,o.z],{animated:[0,"animated"],cancelButtonText:[1,"cancelButtonText"],color:[2,"color"],debounce:[3,"debounce"],placeholder:[4,"placeholder"],showCancelButton:[5,"showCancelButton"]},null),o.sb(19,16384,null,0,i.Ob,[o.k],null,null),(n()(),o.tb(20,0,null,null,13,"ion-content",[["ion-padding","ion-padding"]],null,null,null,g.db,g.n)),o.sb(21,49152,null,0,i.v,[o.h,o.k,o.z],null,null),(n()(),o.tb(22,0,null,0,3,"ion-refresher",[],null,[[null,"ionRefresh"]],function(n,l,t){var o=!0;return"ionRefresh"===l&&(o=!1!==n.component.recargar(t)&&o),o},g.rb,g.A)),o.sb(23,49152,null,0,i.eb,[o.h,o.k,o.z],null,null),(n()(),o.tb(24,0,null,0,1,"ion-refresher-content",[],null,null,null,g.qb,g.B)),o.sb(25,49152,null,0,i.fb,[o.h,o.k,o.z],null,null),(n()(),o.tb(26,0,null,0,3,"ion-list",[],null,null,null,g.nb,g.w)),o.sb(27,49152,null,0,i.P,[o.h,o.k,o.z],null,null),(n()(),o.ib(16777216,null,0,1,null,v)),o.sb(29,278528,null,0,f.i,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null),(n()(),o.tb(30,0,null,0,3,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],function(n,l,t){var o=!0;return"ionInfinite"===l&&(o=!1!==n.component.siguiente_pagina(t)&&o),o},g.ib,g.r)),o.sb(31,49152,null,0,i.F,[o.h,o.k,o.z],null,null),(n()(),o.tb(32,0,null,0,1,"ion-infinite-scroll-content",[["loadingText","Cargando mas informaci\xf3n\u2026"]],null,null,null,g.hb,g.s)),o.sb(33,49152,null,0,i.G,[o.h,o.k,o.z],{loadingText:[0,"loadingText"]},null)],function(n,l){var t=l.component;n(l,3,0,"primary"),n(l,9,0,"light","Atras"),n(l,15,0,"primary"),n(l,18,0,"","OK","light","550","Buscar patrocinador...",""),n(l,29,0,t._ps.patrocinadores),n(l,33,0,"Cargando mas informaci\xf3n\u2026")},null)}function y(n){return o.Kb(0,[(n()(),o.tb(0,0,null,null,1,"app-patrocinadores",[],null,null,null,P,k)),o.sb(1,114688,null,0,p,[i.Ib,c,b.a],null,null)],function(n,l){n(l,1,0)},null)}var C=o.pb("app-patrocinadores",p,y,{},{},[]),x=t("ZYCi");t.d(l,"PatrocinadoresPageModuleNgFactory",function(){return z});var z=o.qb(h,[],function(n){return o.Cb([o.Db(512,o.j,o.bb,[[8,[d.a,C]],[3,o.j],o.x]),o.Db(4608,f.l,f.k,[o.u,[2,f.v]]),o.Db(4608,m.l,m.l,[]),o.Db(4608,i.b,i.b,[o.z,o.g]),o.Db(4608,i.Ib,i.Ib,[i.b,o.j,o.q]),o.Db(4608,i.Mb,i.Mb,[i.b,o.j,o.q]),o.Db(1073742336,f.b,f.b,[]),o.Db(1073742336,m.k,m.k,[]),o.Db(1073742336,m.b,m.b,[]),o.Db(1073742336,i.Fb,i.Fb,[]),o.Db(1073742336,x.n,x.n,[[2,x.s],[2,x.m]]),o.Db(1073742336,h,h,[]),o.Db(1024,x.k,function(){return[[{path:"",component:p}]]},[])])})}}]);