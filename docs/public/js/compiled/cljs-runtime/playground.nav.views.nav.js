goog.provide('playground.nav.views.nav');
playground.nav.views.nav.nav = (function playground$nav$views$nav$nav(){
var logged_in_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089)], null)));
if(cljs.core.truth_(logged_in_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.nav.views.authenticated.authenticated], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.nav.views.public$.public$], null);
}
});

//# sourceMappingURL=playground.nav.views.nav.js.map
