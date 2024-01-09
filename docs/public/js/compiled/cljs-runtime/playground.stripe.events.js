goog.provide('playground.stripe.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("http","redirect","http/redirect",-1972455726),(function (_,p__50957){
var vec__50958 = p__50957;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50958,(0),null);
var map__50961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50958,(1),null);
var map__50961__$1 = cljs.core.__destructure_map(map__50961);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50961__$1,new cljs.core.Keyword(null,"url","url",276297046));
return window.open(url);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stripe","checkout","stripe/checkout",-1963123502),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),playground.helpers.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["v1","stripe","create-checkout-session"], 0)),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("http","redirect","http/redirect",-1972455726)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (response){
return console.log("response error, stripe:",response);
})], null)], null);
}));

//# sourceMappingURL=playground.stripe.events.js.map
