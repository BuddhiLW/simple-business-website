goog.provide('playground.become_a_chef.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("become-a-chef","agree","become-a-chef/agree",-278716685),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.spec.check_spec_interceptor], null),(function (p__45568,_){
var map__45569 = p__45568;
var map__45569__$1 = cljs.core.__destructure_map(map__45569);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45569__$1,new cljs.core.Keyword(null,"db","db",993250759));
var user = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),user,new cljs.core.Keyword(null,"role","role",-736691072)], null),new cljs.core.Keyword(null,"chef","chef",-1931823886)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipes","close-modal","recipes/close-modal",-833326660)], null)], null);
}));

//# sourceMappingURL=playground.become_a_chef.events.js.map
