goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__46469,p__46470){
var map__46471 = p__46469;
var map__46471__$1 = cljs.core.__destructure_map(map__46471);
var svc = map__46471__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46471__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46471__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46471__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__46472 = p__46470;
var map__46472__$1 = cljs.core.__destructure_map(map__46472);
var msg = map__46472__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46472__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46472__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46472__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46472__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__46481,p__46482){
var map__46483 = p__46481;
var map__46483__$1 = cljs.core.__destructure_map(map__46483);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46483__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__46484 = p__46482;
var map__46484__$1 = cljs.core.__destructure_map(map__46484);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46484__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__46496,p__46497){
var map__46499 = p__46496;
var map__46499__$1 = cljs.core.__destructure_map(map__46499);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46499__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46499__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__46500 = p__46497;
var map__46500__$1 = cljs.core.__destructure_map(map__46500);
var msg = map__46500__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46500__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__46506,tid){
var map__46507 = p__46506;
var map__46507__$1 = cljs.core.__destructure_map(map__46507);
var svc = map__46507__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46507__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__46524 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__46525 = null;
var count__46526 = (0);
var i__46527 = (0);
while(true){
if((i__46527 < count__46526)){
var vec__46545 = chunk__46525.cljs$core$IIndexed$_nth$arity$2(null,i__46527);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46545,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46545,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__46660 = seq__46524;
var G__46661 = chunk__46525;
var G__46662 = count__46526;
var G__46663 = (i__46527 + (1));
seq__46524 = G__46660;
chunk__46525 = G__46661;
count__46526 = G__46662;
i__46527 = G__46663;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46524);
if(temp__5804__auto__){
var seq__46524__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46524__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46524__$1);
var G__46665 = cljs.core.chunk_rest(seq__46524__$1);
var G__46666 = c__5568__auto__;
var G__46667 = cljs.core.count(c__5568__auto__);
var G__46668 = (0);
seq__46524 = G__46665;
chunk__46525 = G__46666;
count__46526 = G__46667;
i__46527 = G__46668;
continue;
} else {
var vec__46558 = cljs.core.first(seq__46524__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46558,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46558,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__46671 = cljs.core.next(seq__46524__$1);
var G__46672 = null;
var G__46673 = (0);
var G__46674 = (0);
seq__46524 = G__46671;
chunk__46525 = G__46672;
count__46526 = G__46673;
i__46527 = G__46674;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__46509_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__46509_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__46510_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__46510_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__46511_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__46511_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__46512_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__46512_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__46642){
var map__46643 = p__46642;
var map__46643__$1 = cljs.core.__destructure_map(map__46643);
var svc = map__46643__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46643__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46643__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
