goog.provide('playground.validation.events');
playground.validation.events.validation_interceptor = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.spec.check_spec_interceptor], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("form","has-value?","form/has-value?",-571722516),playground.validation.events.validation_interceptor,(function (db,p__45570){
var vec__45573 = p__45570;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45573,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45573,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),id], null),"Can't be blank");
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("form","clear-error","form/clear-error",1332591714),playground.validation.events.validation_interceptor,(function (db,p__45578){
var vec__45583 = p__45578;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45583,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45583,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.dissoc,id);
}));

//# sourceMappingURL=playground.validation.events.js.map
