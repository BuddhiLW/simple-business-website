goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__45527,res){
var map__45528 = p__45527;
var map__45528__$1 = cljs.core.__destructure_map(map__45528);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45528__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45528__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__45529 = res;
var G__45529__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45529,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__45529);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45529__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__45529__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__45533 = arguments.length;
switch (G__45533) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__45538,msg,handlers,timeout_after_ms){
var map__45539 = p__45538;
var map__45539__$1 = cljs.core.__destructure_map(map__45539);
var runtime = map__45539__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45539__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45730 = arguments.length;
var i__5770__auto___45731 = (0);
while(true){
if((i__5770__auto___45731 < len__5769__auto___45730)){
args__5775__auto__.push((arguments[i__5770__auto___45731]));

var G__45732 = (i__5770__auto___45731 + (1));
i__5770__auto___45731 = G__45732;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__45567,ev,args){
var map__45568 = p__45567;
var map__45568__$1 = cljs.core.__destructure_map(map__45568);
var runtime = map__45568__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45568__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__45569 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__45572 = null;
var count__45573 = (0);
var i__45574 = (0);
while(true){
if((i__45574 < count__45573)){
var ext = chunk__45572.cljs$core$IIndexed$_nth$arity$2(null,i__45574);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__45737 = seq__45569;
var G__45738 = chunk__45572;
var G__45739 = count__45573;
var G__45740 = (i__45574 + (1));
seq__45569 = G__45737;
chunk__45572 = G__45738;
count__45573 = G__45739;
i__45574 = G__45740;
continue;
} else {
var G__45741 = seq__45569;
var G__45742 = chunk__45572;
var G__45743 = count__45573;
var G__45744 = (i__45574 + (1));
seq__45569 = G__45741;
chunk__45572 = G__45742;
count__45573 = G__45743;
i__45574 = G__45744;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45569);
if(temp__5804__auto__){
var seq__45569__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45569__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45569__$1);
var G__45745 = cljs.core.chunk_rest(seq__45569__$1);
var G__45746 = c__5568__auto__;
var G__45747 = cljs.core.count(c__5568__auto__);
var G__45748 = (0);
seq__45569 = G__45745;
chunk__45572 = G__45746;
count__45573 = G__45747;
i__45574 = G__45748;
continue;
} else {
var ext = cljs.core.first(seq__45569__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__45749 = cljs.core.next(seq__45569__$1);
var G__45750 = null;
var G__45751 = (0);
var G__45752 = (0);
seq__45569 = G__45749;
chunk__45572 = G__45750;
count__45573 = G__45751;
i__45574 = G__45752;
continue;
} else {
var G__45753 = cljs.core.next(seq__45569__$1);
var G__45754 = null;
var G__45755 = (0);
var G__45756 = (0);
seq__45569 = G__45753;
chunk__45572 = G__45754;
count__45573 = G__45755;
i__45574 = G__45756;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq45561){
var G__45562 = cljs.core.first(seq45561);
var seq45561__$1 = cljs.core.next(seq45561);
var G__45563 = cljs.core.first(seq45561__$1);
var seq45561__$2 = cljs.core.next(seq45561__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45562,G__45563,seq45561__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__45595,p__45596){
var map__45597 = p__45595;
var map__45597__$1 = cljs.core.__destructure_map(map__45597);
var runtime = map__45597__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45597__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__45598 = p__45596;
var map__45598__$1 = cljs.core.__destructure_map(map__45598);
var msg = map__45598__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45598__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__45599 = cljs.core.deref(state_ref);
var map__45599__$1 = cljs.core.__destructure_map(map__45599);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45599__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45599__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__45603){
var map__45604 = p__45603;
var map__45604__$1 = cljs.core.__destructure_map(map__45604);
var runtime = map__45604__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45604__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__45605,msg){
var map__45606 = p__45605;
var map__45606__$1 = cljs.core.__destructure_map(map__45606);
var runtime = map__45606__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45606__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__45632,key,p__45633){
var map__45639 = p__45632;
var map__45639__$1 = cljs.core.__destructure_map(map__45639);
var state = map__45639__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45639__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__45641 = p__45633;
var map__45641__$1 = cljs.core.__destructure_map(map__45641);
var spec = map__45641__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45641__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__45650,key,spec){
var map__45652 = p__45650;
var map__45652__$1 = cljs.core.__destructure_map(map__45652);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45652__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__45654_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__45654_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__45655_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__45655_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__45656_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__45656_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__45657_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__45657_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__45658_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__45658_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__45663,key){
var map__45664 = p__45663;
var map__45664__$1 = cljs.core.__destructure_map(map__45664);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45664__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__45669,msg){
var map__45670 = p__45669;
var map__45670__$1 = cljs.core.__destructure_map(map__45670);
var runtime = map__45670__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45670__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__45673,p__45674){
var map__45675 = p__45673;
var map__45675__$1 = cljs.core.__destructure_map(map__45675);
var runtime = map__45675__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45675__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__45676 = p__45674;
var map__45676__$1 = cljs.core.__destructure_map(map__45676);
var msg = map__45676__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45676__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45676__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__45686 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__45688 = null;
var count__45689 = (0);
var i__45690 = (0);
while(true){
if((i__45690 < count__45689)){
var map__45701 = chunk__45688.cljs$core$IIndexed$_nth$arity$2(null,i__45690);
var map__45701__$1 = cljs.core.__destructure_map(map__45701);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45701__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__45808 = seq__45686;
var G__45809 = chunk__45688;
var G__45810 = count__45689;
var G__45811 = (i__45690 + (1));
seq__45686 = G__45808;
chunk__45688 = G__45809;
count__45689 = G__45810;
i__45690 = G__45811;
continue;
} else {
var G__45813 = seq__45686;
var G__45814 = chunk__45688;
var G__45815 = count__45689;
var G__45816 = (i__45690 + (1));
seq__45686 = G__45813;
chunk__45688 = G__45814;
count__45689 = G__45815;
i__45690 = G__45816;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45686);
if(temp__5804__auto__){
var seq__45686__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45686__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45686__$1);
var G__45817 = cljs.core.chunk_rest(seq__45686__$1);
var G__45818 = c__5568__auto__;
var G__45819 = cljs.core.count(c__5568__auto__);
var G__45820 = (0);
seq__45686 = G__45817;
chunk__45688 = G__45818;
count__45689 = G__45819;
i__45690 = G__45820;
continue;
} else {
var map__45702 = cljs.core.first(seq__45686__$1);
var map__45702__$1 = cljs.core.__destructure_map(map__45702);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45702__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__45821 = cljs.core.next(seq__45686__$1);
var G__45822 = null;
var G__45823 = (0);
var G__45824 = (0);
seq__45686 = G__45821;
chunk__45688 = G__45822;
count__45689 = G__45823;
i__45690 = G__45824;
continue;
} else {
var G__45825 = cljs.core.next(seq__45686__$1);
var G__45826 = null;
var G__45827 = (0);
var G__45828 = (0);
seq__45686 = G__45825;
chunk__45688 = G__45826;
count__45689 = G__45827;
i__45690 = G__45828;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
