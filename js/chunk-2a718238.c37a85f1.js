(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2a718238"],{6813:function(e,t,n){},"736e":function(e,t,n){"use strict";n("6813")},"9ed6":function(e,t,n){"use strict";n.r(t);var a=n("1da1"),r=n("d4ec"),o=n("bee2"),s=n("262e"),i=n("2caf"),l=(n("96cf"),n("9ab4")),c=n("1b40"),u=function(e){Object(s.a)(l,e);var t,n=Object(i.a)(l);function l(){var e;return Object(r.a)(this,l),(e=n.apply(this,arguments)).form={name:"test",password:"",validateInfo:""},e}return Object(o.a)(l,[{key:"onSubmit",value:(t=Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("UserModel/login",this.form);case 2:this.$router.push("/");case 3:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),l}(c.d),f=u=Object(l.a)([Object(c.a)({})],u),m=(n("736e"),n("2877")),p=Object(m.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("el-card",{staticClass:"login-form"},[n("h2",{staticClass:"title"},[e._v("欢迎登录模版系统")]),n("el-form",{ref:"formContainer",staticClass:"container",attrs:{model:e.form,"label-position":"left","label-width":"60px"}},[n("el-form-item",{staticClass:"item",attrs:{label:"用户名"}},[n("el-input",{attrs:{type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSubmit(t)}},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("el-form-item",{staticClass:"item",attrs:{label:"密码"}},[n("el-input",{attrs:{type:"password"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSubmit(t)}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),n("el-form-item",{staticClass:"item",attrs:{label:"验证码"}},[n("el-input",{attrs:{type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSubmit(t)}},model:{value:e.form.validateInfo,callback:function(t){e.$set(e.form,"validateInfo",t)},expression:"form.validateInfo"}})],1),n("div",{staticClass:"button-container"},[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("登录")])],1)],1)],1)],1)}),[],!1,null,"2927ec39",null);t.default=p.exports}}]);