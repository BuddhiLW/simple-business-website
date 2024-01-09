goog.provide('playground.router');
playground.router.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 4, ["",new cljs.core.Keyword(null,"become-a-chef","become-a-chef",1113742810),"cursos",new cljs.core.Keyword(null,"cursos","cursos",1400607432),"consultoria",new cljs.core.Keyword(null,"sign-up","sign-up",-1190725688),"comercializacao",new cljs.core.Keyword(null,"log-in","log-in",526627385)], null)], null);
playground.router.history = (function (){var dispatch = (function (p1__49252_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-changed","route-changed",455870141),p1__49252_SHARP_], null));
});
var match = (function (p1__49253_SHARP_){
return bidi.bidi.match_route(playground.router.routes,p1__49253_SHARP_);
});
return pushy.core.pushy(dispatch,match);
})();
playground.router.start_BANG_ = (function playground$router$start_BANG_(){
return playground.router.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
playground.router.path_for = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,playground.router.routes);
playground.router.set_token_BANG_ = (function playground$router$set_token_BANG_(token){
return playground.router.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,token);
});

//# sourceMappingURL=playground.router.js.map
