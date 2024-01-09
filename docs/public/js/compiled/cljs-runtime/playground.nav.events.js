goog.provide('playground.nav.events');
playground.nav.events.nav_interceptors = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.spec.check_spec_interceptor,re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nav","nav",719540477)], 0))], null);
re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),(function (p__49256){
var map__49257 = p__49256;
var map__49257__$1 = cljs.core.__destructure_map(map__49257);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49257__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return playground.router.set_token_BANG_(path);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"route-changed","route-changed",455870141),playground.nav.events.nav_interceptors,(function (p__49258,p__49259){
var map__49262 = p__49258;
var map__49262__$1 = cljs.core.__destructure_map(map__49262);
var nav = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49262__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49263 = p__49259;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49263,(0),null);
var map__49266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49263,(1),null);
var map__49266__$1 = cljs.core.__destructure_map(map__49266);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49266__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49266__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
var nav__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nav,new cljs.core.Keyword(null,"active-page","active-page",370357330),handler);
var log_route_params = console.log(["route-params: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(route_params)].join(''));
var log_nav = console.log(["nav: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nav__$1)].join(''));
var log_handler = console.log(["handler: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler)].join(''));
var G__49268 = handler;
switch (G__49268) {
default:
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){
console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"nav","nav",-1934895292,null),new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148),new cljs.core.Keyword(null,"active-inbox","active-inbox",524121188))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(nav__$1,new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"active-inbox","active-inbox",524121188)], 0)))].join(''));

console.log(["nav: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nav__$1)].join(''));

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(nav__$1,new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"active-inbox","active-inbox",524121188)], 0));
})()
], null);

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),playground.nav.events.nav_interceptors,(function (nav,p__49275){
var vec__49276 = p__49275;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49276,(0),null);
var active_nav = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49276,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nav,new cljs.core.Keyword(null,"active-nav","active-nav",-275650057),active_nav);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),playground.nav.events.nav_interceptors,(function (nav,p__49283){
var vec__49285 = p__49283;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49285,(0),null);
var active_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49285,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nav,new cljs.core.Keyword(null,"active-page","active-page",370357330),active_page);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("recipes","close-modal","recipes/close-modal",-833326660),playground.nav.events.nav_interceptors,(function (nav,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nav,new cljs.core.Keyword(null,"active-modal","active-modal",1608517958),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-open-nav-menu","set-open-nav-menu",274942970),(function (nav,p__49291){
var vec__49292 = p__49291;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49292,(0),null);
var open_nav_menu = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49292,(1),null);
cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nav,new cljs.core.Keyword(null,"active-menu","active-menu",166024009),open_nav_menu);

return console.log(open_nav_menu);
}));

//# sourceMappingURL=playground.nav.events.js.map
