import './polyfills.server.mjs';
import{E as u,a as r,b as p,c as h,d as s,e as v,f as y,g as m,h as a,i as l,j as c,r as C,s as g,t as M,u as x,v as w,y as D}from"./chunk-ACA5KPFV.mjs";var j=(()=>{let t=class t{constructor(i){this.httpClient=i}fetchData(){return this.httpClient.get("http://localhost:3000/recipes")}};t.\u0275fac=function(o){return new(o||t)(v(g))},t.\u0275prov=h({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var F=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=r({type:t,selectors:[["app-recipe-details"]],decls:2,vars:0,template:function(o,f){o&1&&(m(0,"p"),c(1,"recipe-details works!"),a())}});let e=t;return e})();var b=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=r({type:t,selectors:[["app-recipe-form"]],decls:2,vars:0,template:function(o,f){o&1&&(m(0,"p"),c(1,"recipe-form works!"),a())}});let e=t;return e})();var I=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=r({type:t,selectors:[["app-search-bar"]],decls:2,vars:0,template:function(o,f){o&1&&(m(0,"p"),c(1,"search-bar works!"),a())}});let e=t;return e})();var N=(()=>{let t=class t{constructor(i){this.heroService=i,this.allRecipes=[]}ngOnInit(){this.heroService.fetchData().subscribe(i=>{this.allRecipes=i,console.log(i)})}};t.\u0275fac=function(o){return new(o||t)(y(j))},t.\u0275cmp=r({type:t,selectors:[["app-main-page"]],decls:3,vars:0,template:function(o,f){o&1&&l(0,"app-search-bar")(1,"app-recipe-details")(2,"app-recipe-form")},dependencies:[F,b,I]});let e=t;return e})();var R=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=p({type:t}),t.\u0275inj=s({imports:[C,M]});let e=t;return e})();var O=[],S=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=p({type:t}),t.\u0275inj=s({imports:[u.forRoot(O),u]});let e=t;return e})();var d=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=r({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(o,f){o&1&&l(0,"app-main-page")},dependencies:[N]});let e=t;return e})();var T=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=p({type:t,bootstrap:[d]}),t.\u0275inj=s({providers:[w()],imports:[x,S,R]});let e=t;return e})();var q=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=p({type:t,bootstrap:[d]}),t.\u0275inj=s({imports:[T,D]});let e=t;return e})();export{q as a};
