(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"/yGZ":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),i=u("mrSG"),o=u("ZZ/e"),t=u("on2l"),a=u("q8lh"),b=function(){function l(l,n,u){this._us=l,this.navCtrl=n,this._as=u,this.avatars=[{img:"av-1.png",seleccionado:!0},{img:"av-2.png",seleccionado:!1},{img:"av-3.png",seleccionado:!1},{img:"av-4.png",seleccionado:!1},{img:"av-5.png",seleccionado:!1},{img:"av-6.png",seleccionado:!1},{img:"av-7.png",seleccionado:!1},{img:"av-8.png",seleccionado:!1}],this.avatarSlide={slidesPerView:3.5},this.loginUser={email:"",password:""},this.registerUser={email:"",password:"",nombre:"",apellidos:"",telefono:"",institucion:"",avatar:"av-1.png"}}return l.prototype.ngOnInit=function(){this.slides.lockSwipes(!0)},l.prototype.login=function(l){return i.b(this,void 0,void 0,function(){return i.e(this,function(n){switch(n.label){case 0:return l.invalid?[2,!1]:[4,this._us.login(this.loginUser.email,this.loginUser.password)];case 1:return n.sent()?(this._as.presentAlert("Bienvenido"),this.navCtrl.navigateRoot("/tabs/login/usuario",{animated:!0})):this._as.presentAlert("Usuario o contrase\xf1a incorrectos"),[2]}})})},l.prototype.registro=function(l){return i.b(this,void 0,void 0,function(){return i.e(this,function(n){switch(n.label){case 0:return console.log(l),l.invalid?[2,!1]:[4,this._us.registro(this.registerUser)];case 1:return n.sent()&&(this._as.presentAlert("Registro exitoso"),this.navCtrl.navigateRoot("/tabs/login/usuario",{animated:!0})),[2]}})})},l.prototype.seleccionarAvatar=function(l){console.log(l.img),this.avatars.forEach(function(l){return l.seleccionado=!1}),l.seleccionado=!0,this.registerUser.avatar=l.img},l.prototype.mostrarRegistro=function(){this.slides.lockSwipes(!1),this.slides.slideTo(1),this.slides.lockSwipes(!0)},l.prototype.mostrarLogin=function(){this.slides.lockSwipes(!1),this.slides.slideTo(0),this.slides.lockSwipes(!0)},l}(),r=function(){return function(){}}(),s=u("pMnS"),d=u("oBZk"),g=u("Ip0R"),c=u("gIcY"),p=e.nb({encapsulation:0,styles:[[".mainSlide[_ngcontent-%COMP%], .mainSlide[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{width:100%;height:100%}img[_ngcontent-%COMP%]{width:120px}.pick-avatar[_ngcontent-%COMP%]{width:80px;opacity:.3}.pick-avatar-seleccionado[_ngcontent-%COMP%]{transition:opacity .5s linear;opacity:1!important}.leyenda[_ngcontent-%COMP%]{font-size:10px;color:red}"]],data:{}});function h(l){return e.Fb(0,[(l()(),e.pb(0,0,null,null,5,"ion-slide",[],null,null,null,d.zb,d.J)),e.ob(1,49152,null,0,o.pb,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,3,"ion-img",[["class","pick-avatar"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.seleccionarAvatar(l.context.$implicit)&&e),e},d.jb,d.t)),e.ob(3,278528,null,0,g.h,[e.s,e.t,e.k,e.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Ab(4,{"pick-avatar-seleccionado":0}),e.ob(5,49152,null,0,o.D,[e.h,e.k],{src:[0,"src"]},null)],function(l,n){var u=l(n,4,0,n.context.$implicit.seleccionado);l(n,3,0,"pick-avatar",u),l(n,5,0,e.rb(1,"/assets/avatars/",n.context.$implicit.img,""))},null)}function m(l){return e.Fb(0,[e.Cb(402653184,1,{slides:0}),(l()(),e.pb(1,0,null,null,233,"ion-content",[],null,null,null,d.eb,d.o)),e.ob(2,49152,null,0,o.u,[e.h,e.k],null,null),(l()(),e.pb(3,0,null,0,231,"ion-slides",[["class","mainSlide"]],null,null,null,d.Ab,d.K)),e.ob(4,49152,[[1,4],["slidePrincipal",4]],0,o.qb,[e.h,e.k],null,null),(l()(),e.pb(5,0,null,0,54,"ion-slide",[],null,null,null,d.zb,d.J)),e.ob(6,49152,null,0,o.pb,[e.h,e.k],null,null),(l()(),e.pb(7,0,null,0,52,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var i=!0,o=l.component;return"submit"===n&&(i=!1!==e.zb(l,9).onSubmit(u)&&i),"reset"===n&&(i=!1!==e.zb(l,9).onReset()&&i),"ngSubmit"===n&&(i=!1!==o.login(e.zb(l,9))&&i),i},null,null)),e.ob(8,16384,null,0,c.l,[],null,null),e.ob(9,4210688,[["fLogin",4]],0,c.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Bb(2048,null,c.a,null,[c.h]),e.ob(11,16384,null,0,c.g,[[4,c.a]],null,null),(l()(),e.pb(12,0,null,null,47,"ion-grid",[["fixed",""]],null,null,null,d.gb,d.q)),e.ob(13,49152,null,0,o.A,[e.h,e.k],{fixed:[0,"fixed"]},null),(l()(),e.pb(14,0,null,0,4,"ion-row",[],null,null,null,d.vb,d.F)),e.ob(15,49152,null,0,o.ib,[e.h,e.k],null,null),(l()(),e.pb(16,0,null,0,2,"ion-col",[],null,null,null,d.db,d.n)),e.ob(17,49152,null,0,o.t,[e.h,e.k],null,null),(l()(),e.pb(18,0,null,0,0,"img",[["src","/assets/avatars/av-1.png"]],null,null,null,null,null)),(l()(),e.pb(19,0,null,0,33,"ion-row",[],null,null,null,d.vb,d.F)),e.ob(20,49152,null,0,o.ib,[e.h,e.k],null,null),(l()(),e.pb(21,0,null,0,31,"ion-col",[],null,null,null,d.db,d.n)),e.ob(22,49152,null,0,o.t,[e.h,e.k],null,null),(l()(),e.pb(23,0,null,0,29,"ion-list",[],null,null,null,d.qb,d.z)),e.ob(24,49152,null,0,o.O,[e.h,e.k],null,null),(l()(),e.pb(25,0,null,0,13,"ion-item",[],null,null,null,d.nb,d.x)),e.ob(26,49152,null,0,o.H,[e.h,e.k],null,null),(l()(),e.pb(27,0,null,0,2,"ion-label",[],null,null,null,d.ob,d.y)),e.ob(28,49152,null,0,o.N,[e.h,e.k],null,null),(l()(),e.Eb(-1,0,["Email:"])),(l()(),e.pb(30,0,null,0,8,"ion-input",[["name","email"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0,o=l.component;return"ionBlur"===n&&(i=!1!==e.zb(l,33)._handleBlurEvent()&&i),"ionChange"===n&&(i=!1!==e.zb(l,33)._handleInputEvent(u.target.value)&&i),"ngModelChange"===n&&(i=!1!==(o.loginUser.email=u)&&i),i},d.mb,d.w)),e.ob(31,16384,null,0,c.j,[],{required:[0,"required"]},null),e.Bb(1024,null,c.c,function(l){return[l]},[c.j]),e.ob(33,16384,null,0,o.Lb,[e.k],null,null),e.Bb(1024,null,c.d,function(l){return[l]},[o.Lb]),e.ob(35,671744,null,0,c.i,[[2,c.a],[6,c.c],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Bb(2048,null,c.e,null,[c.i]),e.ob(37,16384,null,0,c.f,[[4,c.e]],null,null),e.ob(38,49152,null,0,o.G,[e.h,e.k],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.pb(39,0,null,0,13,"ion-item",[],null,null,null,d.nb,d.x)),e.ob(40,49152,null,0,o.H,[e.h,e.k],null,null),(l()(),e.pb(41,0,null,0,2,"ion-label",[],null,null,null,d.ob,d.y)),e.ob(42,49152,null,0,o.N,[e.h,e.k],null,null),(l()(),e.Eb(-1,0,["Contrase\xf1a:"])),(l()(),e.pb(44,0,null,0,8,"ion-input",[["name","password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0,o=l.component;return"ionBlur"===n&&(i=!1!==e.zb(l,47)._handleBlurEvent()&&i),"ionChange"===n&&(i=!1!==e.zb(l,47)._handleInputEvent(u.target.value)&&i),"ngModelChange"===n&&(i=!1!==(o.loginUser.password=u)&&i),i},d.mb,d.w)),e.ob(45,16384,null,0,c.j,[],{required:[0,"required"]},null),e.Bb(1024,null,c.c,function(l){return[l]},[c.j]),e.ob(47,16384,null,0,o.Lb,[e.k],null,null),e.Bb(1024,null,c.d,function(l){return[l]},[o.Lb]),e.ob(49,671744,null,0,c.i,[[2,c.a],[6,c.c],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Bb(2048,null,c.e,null,[c.i]),e.ob(51,16384,null,0,c.f,[[4,c.e]],null,null),e.ob(52,49152,null,0,o.G,[e.h,e.k],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.pb(53,0,null,0,6,"ion-row",[],null,null,null,d.vb,d.F)),e.ob(54,49152,null,0,o.ib,[e.h,e.k],null,null),(l()(),e.pb(55,0,null,0,4,"ion-col",[],null,null,null,d.db,d.n)),e.ob(56,49152,null,0,o.t,[e.h,e.k],null,null),(l()(),e.pb(57,0,null,0,2,"ion-button",[["color","primary"],["shape","round"],["type","submit"]],null,null,null,d.U,d.e)),e.ob(58,49152,null,0,o.k,[e.h,e.k],{color:[0,"color"],shape:[1,"shape"],type:[2,"type"]},null),(l()(),e.Eb(-1,0,[" Iniciar Sesi\xf3n "])),(l()(),e.pb(60,0,null,0,174,"ion-slide",[],null,null,null,d.zb,d.J)),e.ob(61,49152,null,0,o.pb,[e.h,e.k],null,null),(l()(),e.pb(62,0,null,0,172,"ion-grid",[["fixed",""]],null,null,null,d.gb,d.q)),e.ob(63,49152,null,0,o.A,[e.h,e.k],{fixed:[0,"fixed"]},null),(l()(),e.pb(64,0,null,0,5,"ion-row",[],null,null,null,d.vb,d.F)),e.ob(65,49152,null,0,o.ib,[e.h,e.k],null,null),(l()(),e.pb(66,0,null,0,3,"ion-col",[],null,null,null,d.db,d.n)),e.ob(67,49152,null,0,o.t,[e.h,e.k],null,null),(l()(),e.pb(68,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Seleccione Avatar"])),(l()(),e.pb(70,0,null,0,7,"ion-row",[],null,null,null,d.vb,d.F)),e.ob(71,49152,null,0,o.ib,[e.h,e.k],null,null),(l()(),e.pb(72,0,null,0,5,"ion-col",[],null,null,null,d.db,d.n)),e.ob(73,49152,null,0,o.t,[e.h,e.k],null,null),(l()(),e.pb(74,0,null,0,3,"ion-slides",[],null,null,null,d.Ab,d.K)),e.ob(75,49152,null,0,o.qb,[e.h,e.k],{options:[0,"options"]},null),(l()(),e.gb(16777216,null,0,1,null,h)),e.ob(77,278528,null,0,g.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(78,0,null,0,156,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var i=!0,o=l.component;return"submit"===n&&(i=!1!==e.zb(l,80).onSubmit(u)&&i),"reset"===n&&(i=!1!==e.zb(l,80).onReset()&&i),"ngSubmit"===n&&(i=!1!==o.registro(e.zb(l,80))&&i),i},null,null)),e.ob(79,16384,null,0,c.l,[],null,null),e.ob(80,4210688,[["fRegistro",4]],0,c.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Bb(2048,null,c.a,null,[c.h]),e.ob(82,16384,null,0,c.g,[[4,c.a]],null,null),(l()(),e.pb(83,0,null,null,7,"ion-row",[],null,null,null,d.vb,d.F)),e.ob(84,49152,null,0,o.ib,[e.h,e.k],null,null),(l()(),e.pb(85,0,null,0,1,"ion-col",[["size","6"]],null,null,null,d.db,d.n)),e.ob(86,49152,null,0,o.t,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.pb(87,0,null,0,3,"ion-col",[["size","6"],["text-right",""]],null,null,null,d.db,d.n)),e.ob(88,49152,null,0,o.t,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.pb(89,0,null,0,1,"span",[["class","leyenda"]],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Marcar para compartir"])),(l()(),e.pb(91,0,null,null,26,"ion-row",[],null,null,null,d.vb,d.F)),e.ob(92,49152,null,0,o.ib,[e.h,e.k],null,null),(l()(),e.pb(93,0,null,0,15,"ion-col",[["size","10"]],null,null,null,d.db,d.n)),e.ob(94,49152,null,0,o.t,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.pb(95,0,null,0,13,"ion-item",[],null,null,null,d.nb,d.x)),e.ob(96,49152,null,0,o.H,[e.h,e.k],null,null),(l()(),e.pb(97,0,null,0,2,"ion-label",[],null,null,null,d.ob,d.y)),e.ob(98,49152,null,0,o.N,[e.h,e.k],null,null),(l()(),e.Eb(-1,0,["Email:"])),(l()(),e.pb(100,0,null,0,8,"ion-input",[["name","email"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0,o=l.component;return"ionBlur"===n&&(i=!1!==e.zb(l,103)._handleBlurEvent()&&i),"ionChange"===n&&(i=!1!==e.zb(l,103)._handleInputEvent(u.target.value)&&i),"ngModelChange"===n&&(i=!1!==(o.registerUser.email=u)&&i),i},d.mb,d.w)),e.ob(101,16384,null,0,c.j,[],{required:[0,"required"]},null),e.Bb(1024,null,c.c,function(l){return[l]},[c.j]),e.ob(103,16384,null,0,o.Lb,[e.k],null,null),e.Bb(1024,null,c.d,function(l){return[l]},[o.Lb]),e.ob(105,671744,null,0,c.i,[[2,c.a],[6,c.c],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Bb(2048,null,c.e,null,[c.i]),e.ob(107,16384,null,0,c.f,[[4,c.e]],null,null),e.ob(108,49152,null,0,o.G,[e.h,e.k],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.pb(109,0,null,0,8,"ion-col",[["size","2"]],null,null,null,d.db,d.n)),e.ob(110,49152,null,0,o.t,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.pb(111,0,null,0,6,"ion-checkbox",[["checked",""],["color","primary"],["name","email_c"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0,o=l.component;return"ionBlur"===n&&(i=!1!==e.zb(l,112)._handleBlurEvent()&&i),"ionChange"===n&&(i=!1!==e.zb(l,112)._handleIonChange(u.target.checked)&&i),"ngModelChange"===n&&(i=!1!==(o.registerUser.email_c=u)&&i),i},d.bb,d.l)),e.ob(112,16384,null,0,o.c,[e.k],null,null),e.Bb(1024,null,c.d,function(l){return[l]},[o.c]),e.ob(114,671744,null,0,c.i,[[2,c.a],[8,null],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Bb(2048,null,c.e,null,[c.i]),e.ob(116,16384,null,0,c.f,[[4,c.e]],null,null),e.ob(117,49152,null,0,o.r,[e.h,e.k],{color:[0,"color"],name:[1,"name"],checked:[2,"checked"]},null),(l()(),e.pb(118,0,null,null,19,"ion-row",[],null,null,null,d.vb,d.F)),e.ob(119,49152,null,0,o.ib,[e.h,e.k],null,null),(l()(),e.pb(120,0,null,0,15,"ion-col",[["size","10"]],null,null,null,d.db,d.n)),e.ob(121,49152,null,0,o.t,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.pb(122,0,null,0,13,"ion-item",[],null,null,null,d.nb,d.x)),e.ob(123,49152,null,0,o.H,[e.h,e.k],null,null),(l()(),e.pb(124,0,null,0,2,"ion-label",[],null,null,null,d.ob,d.y)),e.ob(125,49152,null,0,o.N,[e.h,e.k],null,null),(l()(),e.Eb(-1,0,["Password:"])),(l()(),e.pb(127,0,null,0,8,"ion-input",[["name","password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0,o=l.component;return"ionBlur"===n&&(i=!1!==e.zb(l,130)._handleBlurEvent()&&i),"ionChange"===n&&(i=!1!==e.zb(l,130)._handleInputEvent(u.target.value)&&i),"ngModelChange"===n&&(i=!1!==(o.registerUser.password=u)&&i),i},d.mb,d.w)),e.ob(128,16384,null,0,c.j,[],{required:[0,"required"]},null),e.Bb(1024,null,c.c,function(l){return[l]},[c.j]),e.ob(130,16384,null,0,o.Lb,[e.k],null,null),e.Bb(1024,null,c.d,function(l){return[l]},[o.Lb]),e.ob(132,671744,null,0,c.i,[[2,c.a],[6,c.c],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Bb(2048,null,c.e,null,[c.i]),e.ob(134,16384,null,0,c.f,[[4,c.e]],null,null),e.ob(135,49152,null,0,o.G,[e.h,e.k],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.pb(136,0,null,0,1,"ion-col",[["size","2"]],null,null,null,d.db,d.n)),e.ob(137,49152,null,0,o.t,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.pb(138,0,null,null,19,"ion-row",[],null,null,null,d.vb,d.F)),e.ob(139,49152,null,0,o.ib,[e.h,e.k],null,null),(l()(),e.pb(140,0,null,0,15,"ion-col",[["size","10"]],null,null,null,d.db,d.n)),e.ob(141,49152,null,0,o.t,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.pb(142,0,null,0,13,"ion-item",[],null,null,null,d.nb,d.x)),e.ob(143,49152,null,0,o.H,[e.h,e.k],null,null),(l()(),e.pb(144,0,null,0,2,"ion-label",[],null,null,null,d.ob,d.y)),e.ob(145,49152,null,0,o.N,[e.h,e.k],null,null),(l()(),e.Eb(-1,0,["Nombre:"])),(l()(),e.pb(147,0,null,0,8,"ion-input",[["name","nombre"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0,o=l.component;return"ionBlur"===n&&(i=!1!==e.zb(l,150)._handleBlurEvent()&&i),"ionChange"===n&&(i=!1!==e.zb(l,150)._handleInputEvent(u.target.value)&&i),"ngModelChange"===n&&(i=!1!==(o.registerUser.nombre=u)&&i),i},d.mb,d.w)),e.ob(148,16384,null,0,c.j,[],{required:[0,"required"]},null),e.Bb(1024,null,c.c,function(l){return[l]},[c.j]),e.ob(150,16384,null,0,o.Lb,[e.k],null,null),e.Bb(1024,null,c.d,function(l){return[l]},[o.Lb]),e.ob(152,671744,null,0,c.i,[[2,c.a],[6,c.c],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Bb(2048,null,c.e,null,[c.i]),e.ob(154,16384,null,0,c.f,[[4,c.e]],null,null),e.ob(155,49152,null,0,o.G,[e.h,e.k],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.pb(156,0,null,0,1,"ion-col",[["size","2"]],null,null,null,d.db,d.n)),e.ob(157,49152,null,0,o.t,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.pb(158,0,null,null,19,"ion-row",[],null,null,null,d.vb,d.F)),e.ob(159,49152,null,0,o.ib,[e.h,e.k],null,null),(l()(),e.pb(160,0,null,0,15,"ion-col",[["size","10"]],null,null,null,d.db,d.n)),e.ob(161,49152,null,0,o.t,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.pb(162,0,null,0,13,"ion-item",[],null,null,null,d.nb,d.x)),e.ob(163,49152,null,0,o.H,[e.h,e.k],null,null),(l()(),e.pb(164,0,null,0,2,"ion-label",[],null,null,null,d.ob,d.y)),e.ob(165,49152,null,0,o.N,[e.h,e.k],null,null),(l()(),e.Eb(-1,0,["Apellidos:"])),(l()(),e.pb(167,0,null,0,8,"ion-input",[["name","apellidos"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0,o=l.component;return"ionBlur"===n&&(i=!1!==e.zb(l,170)._handleBlurEvent()&&i),"ionChange"===n&&(i=!1!==e.zb(l,170)._handleInputEvent(u.target.value)&&i),"ngModelChange"===n&&(i=!1!==(o.registerUser.apellidos=u)&&i),i},d.mb,d.w)),e.ob(168,16384,null,0,c.j,[],{required:[0,"required"]},null),e.Bb(1024,null,c.c,function(l){return[l]},[c.j]),e.ob(170,16384,null,0,o.Lb,[e.k],null,null),e.Bb(1024,null,c.d,function(l){return[l]},[o.Lb]),e.ob(172,671744,null,0,c.i,[[2,c.a],[6,c.c],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Bb(2048,null,c.e,null,[c.i]),e.ob(174,16384,null,0,c.f,[[4,c.e]],null,null),e.ob(175,49152,null,0,o.G,[e.h,e.k],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.pb(176,0,null,0,1,"ion-col",[["size","2"]],null,null,null,d.db,d.n)),e.ob(177,49152,null,0,o.t,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.pb(178,0,null,null,24,"ion-row",[],null,null,null,d.vb,d.F)),e.ob(179,49152,null,0,o.ib,[e.h,e.k],null,null),(l()(),e.pb(180,0,null,0,13,"ion-col",[["size","10"]],null,null,null,d.db,d.n)),e.ob(181,49152,null,0,o.t,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.pb(182,0,null,0,11,"ion-item",[],null,null,null,d.nb,d.x)),e.ob(183,49152,null,0,o.H,[e.h,e.k],null,null),(l()(),e.pb(184,0,null,0,2,"ion-label",[],null,null,null,d.ob,d.y)),e.ob(185,49152,null,0,o.N,[e.h,e.k],null,null),(l()(),e.Eb(-1,0,["Tel\xe9fono:"])),(l()(),e.pb(187,0,null,0,6,"ion-input",[["name","telefono"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0,o=l.component;return"ionBlur"===n&&(i=!1!==e.zb(l,188)._handleBlurEvent()&&i),"ionChange"===n&&(i=!1!==e.zb(l,188)._handleInputEvent(u.target.value)&&i),"ngModelChange"===n&&(i=!1!==(o.registerUser.telefono=u)&&i),i},d.mb,d.w)),e.ob(188,16384,null,0,o.Lb,[e.k],null,null),e.Bb(1024,null,c.d,function(l){return[l]},[o.Lb]),e.ob(190,671744,null,0,c.i,[[2,c.a],[8,null],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Bb(2048,null,c.e,null,[c.i]),e.ob(192,16384,null,0,c.f,[[4,c.e]],null,null),e.ob(193,49152,null,0,o.G,[e.h,e.k],{name:[0,"name"],type:[1,"type"]},null),(l()(),e.pb(194,0,null,0,8,"ion-col",[["size","2"]],null,null,null,d.db,d.n)),e.ob(195,49152,null,0,o.t,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.pb(196,0,null,0,6,"ion-checkbox",[["checked",""],["color","primary"],["name","telefono_c"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0,o=l.component;return"ionBlur"===n&&(i=!1!==e.zb(l,197)._handleBlurEvent()&&i),"ionChange"===n&&(i=!1!==e.zb(l,197)._handleIonChange(u.target.checked)&&i),"ngModelChange"===n&&(i=!1!==(o.registerUser.telefono_c=u)&&i),i},d.bb,d.l)),e.ob(197,16384,null,0,o.c,[e.k],null,null),e.Bb(1024,null,c.d,function(l){return[l]},[o.c]),e.ob(199,671744,null,0,c.i,[[2,c.a],[8,null],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Bb(2048,null,c.e,null,[c.i]),e.ob(201,16384,null,0,c.f,[[4,c.e]],null,null),e.ob(202,49152,null,0,o.r,[e.h,e.k],{color:[0,"color"],name:[1,"name"],checked:[2,"checked"]},null),(l()(),e.pb(203,0,null,null,24,"ion-row",[],null,null,null,d.vb,d.F)),e.ob(204,49152,null,0,o.ib,[e.h,e.k],null,null),(l()(),e.pb(205,0,null,0,13,"ion-col",[["size","10"]],null,null,null,d.db,d.n)),e.ob(206,49152,null,0,o.t,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.pb(207,0,null,0,11,"ion-item",[],null,null,null,d.nb,d.x)),e.ob(208,49152,null,0,o.H,[e.h,e.k],null,null),(l()(),e.pb(209,0,null,0,2,"ion-label",[],null,null,null,d.ob,d.y)),e.ob(210,49152,null,0,o.N,[e.h,e.k],null,null),(l()(),e.Eb(-1,0,["Instituci\xf3n:"])),(l()(),e.pb(212,0,null,0,6,"ion-input",[["name","institucion"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0,o=l.component;return"ionBlur"===n&&(i=!1!==e.zb(l,213)._handleBlurEvent()&&i),"ionChange"===n&&(i=!1!==e.zb(l,213)._handleInputEvent(u.target.value)&&i),"ngModelChange"===n&&(i=!1!==(o.registerUser.institucion=u)&&i),i},d.mb,d.w)),e.ob(213,16384,null,0,o.Lb,[e.k],null,null),e.Bb(1024,null,c.d,function(l){return[l]},[o.Lb]),e.ob(215,671744,null,0,c.i,[[2,c.a],[8,null],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Bb(2048,null,c.e,null,[c.i]),e.ob(217,16384,null,0,c.f,[[4,c.e]],null,null),e.ob(218,49152,null,0,o.G,[e.h,e.k],{name:[0,"name"],type:[1,"type"]},null),(l()(),e.pb(219,0,null,0,8,"ion-col",[["size","2"]],null,null,null,d.db,d.n)),e.ob(220,49152,null,0,o.t,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.pb(221,0,null,0,6,"ion-checkbox",[["checked",""],["color","primary"],["name","institucion_c"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0,o=l.component;return"ionBlur"===n&&(i=!1!==e.zb(l,222)._handleBlurEvent()&&i),"ionChange"===n&&(i=!1!==e.zb(l,222)._handleIonChange(u.target.checked)&&i),"ngModelChange"===n&&(i=!1!==(o.registerUser.institucion_c=u)&&i),i},d.bb,d.l)),e.ob(222,16384,null,0,o.c,[e.k],null,null),e.Bb(1024,null,c.d,function(l){return[l]},[o.c]),e.ob(224,671744,null,0,c.i,[[2,c.a],[8,null],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Bb(2048,null,c.e,null,[c.i]),e.ob(226,16384,null,0,c.f,[[4,c.e]],null,null),e.ob(227,49152,null,0,o.r,[e.h,e.k],{color:[0,"color"],name:[1,"name"],checked:[2,"checked"]},null),(l()(),e.pb(228,0,null,null,6,"ion-row",[],null,null,null,d.vb,d.F)),e.ob(229,49152,null,0,o.ib,[e.h,e.k],null,null),(l()(),e.pb(230,0,null,0,4,"ion-col",[],null,null,null,d.db,d.n)),e.ob(231,49152,null,0,o.t,[e.h,e.k],null,null),(l()(),e.pb(232,0,null,0,2,"ion-button",[["color","primary"],["shape","round"],["type","submit"]],null,null,null,d.U,d.e)),e.ob(233,49152,null,0,o.k,[e.h,e.k],{color:[0,"color"],shape:[1,"shape"],type:[2,"type"]},null),(l()(),e.Eb(-1,0,[" Crear usuario "])),(l()(),e.pb(235,0,null,null,15,"ion-footer",[["no-border",""]],null,null,null,d.fb,d.p)),e.ob(236,49152,null,0,o.z,[e.h,e.k],null,null),(l()(),e.pb(237,0,null,0,13,"ion-toolbar",[],null,null,null,d.Fb,d.P)),e.ob(238,49152,null,0,o.Bb,[e.h,e.k],null,null),(l()(),e.pb(239,0,null,0,11,"ion-row",[],null,null,null,d.vb,d.F)),e.ob(240,49152,null,0,o.ib,[e.h,e.k],null,null),(l()(),e.pb(241,0,null,0,4,"ion-col",[],null,null,null,d.db,d.n)),e.ob(242,49152,null,0,o.t,[e.h,e.k],null,null),(l()(),e.pb(243,0,null,0,2,"ion-button",[["color","primary"],["expand","full"],["fill","outline"],["shape","round"],["size","small"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.mostrarLogin()&&e),e},d.U,d.e)),e.ob(244,49152,null,0,o.k,[e.h,e.k],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],shape:[3,"shape"],size:[4,"size"]},null),(l()(),e.Eb(-1,0,[" Ingresar "])),(l()(),e.pb(246,0,null,0,4,"ion-col",[],null,null,null,d.db,d.n)),e.ob(247,49152,null,0,o.t,[e.h,e.k],null,null),(l()(),e.pb(248,0,null,0,2,"ion-button",[["color","primary"],["expand","full"],["fill","outline"],["shape","round"],["size","small"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.mostrarRegistro()&&e),e},d.U,d.e)),e.ob(249,49152,null,0,o.k,[e.h,e.k],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],shape:[3,"shape"],size:[4,"size"]},null),(l()(),e.Eb(-1,0,[" Registrarme "]))],function(l,n){var u=n.component;l(n,13,0,""),l(n,31,0,""),l(n,35,0,"email",u.loginUser.email),l(n,38,0,"email","","email"),l(n,45,0,""),l(n,49,0,"password",u.loginUser.password),l(n,52,0,"password","","password"),l(n,58,0,"primary","round","submit"),l(n,63,0,""),l(n,75,0,u.avatarSlide),l(n,77,0,u.avatars),l(n,86,0,"6"),l(n,88,0,"6"),l(n,94,0,"10"),l(n,101,0,""),l(n,105,0,"email",u.registerUser.email),l(n,108,0,"email","","email"),l(n,110,0,"2"),l(n,114,0,"email_c",u.registerUser.email_c),l(n,117,0,"primary","email_c",""),l(n,121,0,"10"),l(n,128,0,""),l(n,132,0,"password",u.registerUser.password),l(n,135,0,"password","","password"),l(n,137,0,"2"),l(n,141,0,"10"),l(n,148,0,""),l(n,152,0,"nombre",u.registerUser.nombre),l(n,155,0,"nombre","","text"),l(n,157,0,"2"),l(n,161,0,"10"),l(n,168,0,""),l(n,172,0,"apellidos",u.registerUser.apellidos),l(n,175,0,"apellidos","","text"),l(n,177,0,"2"),l(n,181,0,"10"),l(n,190,0,"telefono",u.registerUser.telefono),l(n,193,0,"telefono","text"),l(n,195,0,"2"),l(n,199,0,"telefono_c",u.registerUser.telefono_c),l(n,202,0,"primary","telefono_c",""),l(n,206,0,"10"),l(n,215,0,"institucion",u.registerUser.institucion),l(n,218,0,"institucion","text"),l(n,220,0,"2"),l(n,224,0,"institucion_c",u.registerUser.institucion_c),l(n,227,0,"primary","institucion_c",""),l(n,233,0,"primary","round","submit"),l(n,244,0,"primary","full","outline","round","small"),l(n,249,0,"primary","full","outline","round","small")},function(l,n){l(n,7,0,e.zb(n,11).ngClassUntouched,e.zb(n,11).ngClassTouched,e.zb(n,11).ngClassPristine,e.zb(n,11).ngClassDirty,e.zb(n,11).ngClassValid,e.zb(n,11).ngClassInvalid,e.zb(n,11).ngClassPending),l(n,30,0,e.zb(n,31).required?"":null,e.zb(n,37).ngClassUntouched,e.zb(n,37).ngClassTouched,e.zb(n,37).ngClassPristine,e.zb(n,37).ngClassDirty,e.zb(n,37).ngClassValid,e.zb(n,37).ngClassInvalid,e.zb(n,37).ngClassPending),l(n,44,0,e.zb(n,45).required?"":null,e.zb(n,51).ngClassUntouched,e.zb(n,51).ngClassTouched,e.zb(n,51).ngClassPristine,e.zb(n,51).ngClassDirty,e.zb(n,51).ngClassValid,e.zb(n,51).ngClassInvalid,e.zb(n,51).ngClassPending),l(n,78,0,e.zb(n,82).ngClassUntouched,e.zb(n,82).ngClassTouched,e.zb(n,82).ngClassPristine,e.zb(n,82).ngClassDirty,e.zb(n,82).ngClassValid,e.zb(n,82).ngClassInvalid,e.zb(n,82).ngClassPending),l(n,100,0,e.zb(n,101).required?"":null,e.zb(n,107).ngClassUntouched,e.zb(n,107).ngClassTouched,e.zb(n,107).ngClassPristine,e.zb(n,107).ngClassDirty,e.zb(n,107).ngClassValid,e.zb(n,107).ngClassInvalid,e.zb(n,107).ngClassPending),l(n,111,0,e.zb(n,116).ngClassUntouched,e.zb(n,116).ngClassTouched,e.zb(n,116).ngClassPristine,e.zb(n,116).ngClassDirty,e.zb(n,116).ngClassValid,e.zb(n,116).ngClassInvalid,e.zb(n,116).ngClassPending),l(n,127,0,e.zb(n,128).required?"":null,e.zb(n,134).ngClassUntouched,e.zb(n,134).ngClassTouched,e.zb(n,134).ngClassPristine,e.zb(n,134).ngClassDirty,e.zb(n,134).ngClassValid,e.zb(n,134).ngClassInvalid,e.zb(n,134).ngClassPending),l(n,147,0,e.zb(n,148).required?"":null,e.zb(n,154).ngClassUntouched,e.zb(n,154).ngClassTouched,e.zb(n,154).ngClassPristine,e.zb(n,154).ngClassDirty,e.zb(n,154).ngClassValid,e.zb(n,154).ngClassInvalid,e.zb(n,154).ngClassPending),l(n,167,0,e.zb(n,168).required?"":null,e.zb(n,174).ngClassUntouched,e.zb(n,174).ngClassTouched,e.zb(n,174).ngClassPristine,e.zb(n,174).ngClassDirty,e.zb(n,174).ngClassValid,e.zb(n,174).ngClassInvalid,e.zb(n,174).ngClassPending),l(n,187,0,e.zb(n,192).ngClassUntouched,e.zb(n,192).ngClassTouched,e.zb(n,192).ngClassPristine,e.zb(n,192).ngClassDirty,e.zb(n,192).ngClassValid,e.zb(n,192).ngClassInvalid,e.zb(n,192).ngClassPending),l(n,196,0,e.zb(n,201).ngClassUntouched,e.zb(n,201).ngClassTouched,e.zb(n,201).ngClassPristine,e.zb(n,201).ngClassDirty,e.zb(n,201).ngClassValid,e.zb(n,201).ngClassInvalid,e.zb(n,201).ngClassPending),l(n,212,0,e.zb(n,217).ngClassUntouched,e.zb(n,217).ngClassTouched,e.zb(n,217).ngClassPristine,e.zb(n,217).ngClassDirty,e.zb(n,217).ngClassValid,e.zb(n,217).ngClassInvalid,e.zb(n,217).ngClassPending),l(n,221,0,e.zb(n,226).ngClassUntouched,e.zb(n,226).ngClassTouched,e.zb(n,226).ngClassPristine,e.zb(n,226).ngClassDirty,e.zb(n,226).ngClassValid,e.zb(n,226).ngClassInvalid,e.zb(n,226).ngClassPending)})}function z(l){return e.Fb(0,[(l()(),e.pb(0,0,null,null,1,"app-login",[],null,null,null,m,p)),e.ob(1,114688,null,0,b,[t.a,o.Hb,a.a],null,null)],function(l,n){l(n,1,0)},null)}var C=e.lb("app-login",b,z,{},{},[]),v=u("ZYCi");u.d(n,"LoginPageModuleNgFactory",function(){return k});var k=e.mb(r,[],function(l){return e.wb([e.xb(512,e.j,e.bb,[[8,[s.a,C]],[3,e.j],e.x]),e.xb(4608,g.l,g.k,[e.u,[2,g.t]]),e.xb(4608,c.m,c.m,[]),e.xb(4608,o.b,o.b,[e.z,e.g]),e.xb(4608,o.Gb,o.Gb,[o.b,e.j,e.q,g.c]),e.xb(4608,o.Jb,o.Jb,[o.b,e.j,e.q,g.c]),e.xb(1073742336,g.b,g.b,[]),e.xb(1073742336,c.k,c.k,[]),e.xb(1073742336,c.b,c.b,[]),e.xb(1073742336,o.Db,o.Db,[]),e.xb(1073742336,v.n,v.n,[[2,v.t],[2,v.m]]),e.xb(1073742336,r,r,[]),e.xb(1024,v.k,function(){return[[{path:"",component:b}]]},[])])})}}]);