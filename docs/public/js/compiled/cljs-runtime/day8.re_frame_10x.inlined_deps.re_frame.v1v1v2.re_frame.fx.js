goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__33210 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__33211 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__33211);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___33356 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___33356)){
var new_db_33357 = temp__5804__auto___33356;
var fexpr__33214_33358 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__33214_33358.cljs$core$IFn$_invoke$arity$1 ? fexpr__33214_33358.cljs$core$IFn$_invoke$arity$1(new_db_33357) : fexpr__33214_33358.call(null,new_db_33357));
} else {
}

var seq__33217 = cljs.core.seq(effects_without_db);
var chunk__33218 = null;
var count__33219 = (0);
var i__33220 = (0);
while(true){
if((i__33220 < count__33219)){
var vec__33232 = chunk__33218.cljs$core$IIndexed$_nth$arity$2(null,i__33220);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33232,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33232,(1),null);
var temp__5802__auto___33365 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___33365)){
var effect_fn_33366 = temp__5802__auto___33365;
(effect_fn_33366.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33366.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33366.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33368 = seq__33217;
var G__33369 = chunk__33218;
var G__33370 = count__33219;
var G__33371 = (i__33220 + (1));
seq__33217 = G__33368;
chunk__33218 = G__33369;
count__33219 = G__33370;
i__33220 = G__33371;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33217);
if(temp__5804__auto__){
var seq__33217__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33217__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33217__$1);
var G__33372 = cljs.core.chunk_rest(seq__33217__$1);
var G__33373 = c__5568__auto__;
var G__33374 = cljs.core.count(c__5568__auto__);
var G__33375 = (0);
seq__33217 = G__33372;
chunk__33218 = G__33373;
count__33219 = G__33374;
i__33220 = G__33375;
continue;
} else {
var vec__33237 = cljs.core.first(seq__33217__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33237,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33237,(1),null);
var temp__5802__auto___33376 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___33376)){
var effect_fn_33377 = temp__5802__auto___33376;
(effect_fn_33377.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33377.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33377.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33378 = cljs.core.next(seq__33217__$1);
var G__33379 = null;
var G__33380 = (0);
var G__33381 = (0);
seq__33217 = G__33378;
chunk__33218 = G__33379;
count__33219 = G__33380;
i__33220 = G__33381;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__32581__auto___33382 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__32582__auto___33383 = (end__32581__auto___33382 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32582__auto___33383,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__32581__auto___33382);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__33210);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___33384 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___33384)){
var new_db_33385 = temp__5804__auto___33384;
var fexpr__33253_33386 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__33253_33386.cljs$core$IFn$_invoke$arity$1 ? fexpr__33253_33386.cljs$core$IFn$_invoke$arity$1(new_db_33385) : fexpr__33253_33386.call(null,new_db_33385));
} else {
}

var seq__33254 = cljs.core.seq(effects_without_db);
var chunk__33255 = null;
var count__33256 = (0);
var i__33257 = (0);
while(true){
if((i__33257 < count__33256)){
var vec__33274 = chunk__33255.cljs$core$IIndexed$_nth$arity$2(null,i__33257);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33274,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33274,(1),null);
var temp__5802__auto___33387 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___33387)){
var effect_fn_33388 = temp__5802__auto___33387;
(effect_fn_33388.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33388.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33388.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33389 = seq__33254;
var G__33390 = chunk__33255;
var G__33391 = count__33256;
var G__33392 = (i__33257 + (1));
seq__33254 = G__33389;
chunk__33255 = G__33390;
count__33256 = G__33391;
i__33257 = G__33392;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33254);
if(temp__5804__auto__){
var seq__33254__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33254__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33254__$1);
var G__33393 = cljs.core.chunk_rest(seq__33254__$1);
var G__33394 = c__5568__auto__;
var G__33395 = cljs.core.count(c__5568__auto__);
var G__33396 = (0);
seq__33254 = G__33393;
chunk__33255 = G__33394;
count__33256 = G__33395;
i__33257 = G__33396;
continue;
} else {
var vec__33286 = cljs.core.first(seq__33254__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33286,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33286,(1),null);
var temp__5802__auto___33397 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___33397)){
var effect_fn_33398 = temp__5802__auto___33397;
(effect_fn_33398.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33398.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33398.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33399 = cljs.core.next(seq__33254__$1);
var G__33400 = null;
var G__33401 = (0);
var G__33402 = (0);
seq__33254 = G__33399;
chunk__33255 = G__33400;
count__33256 = G__33401;
i__33257 = G__33402;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__33289){
var map__33290 = p__33289;
var map__33290__$1 = cljs.core.__destructure_map(map__33290);
var effect = map__33290__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33290__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33290__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__33292 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__33293 = null;
var count__33294 = (0);
var i__33295 = (0);
while(true){
if((i__33295 < count__33294)){
var effect = chunk__33293.cljs$core$IIndexed$_nth$arity$2(null,i__33295);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__33405 = seq__33292;
var G__33406 = chunk__33293;
var G__33407 = count__33294;
var G__33408 = (i__33295 + (1));
seq__33292 = G__33405;
chunk__33293 = G__33406;
count__33294 = G__33407;
i__33295 = G__33408;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33292);
if(temp__5804__auto__){
var seq__33292__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33292__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33292__$1);
var G__33409 = cljs.core.chunk_rest(seq__33292__$1);
var G__33410 = c__5568__auto__;
var G__33411 = cljs.core.count(c__5568__auto__);
var G__33412 = (0);
seq__33292 = G__33409;
chunk__33293 = G__33410;
count__33294 = G__33411;
i__33295 = G__33412;
continue;
} else {
var effect = cljs.core.first(seq__33292__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__33413 = cljs.core.next(seq__33292__$1);
var G__33414 = null;
var G__33415 = (0);
var G__33416 = (0);
seq__33292 = G__33413;
chunk__33293 = G__33414;
count__33294 = G__33415;
i__33295 = G__33416;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__33305 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__33306 = null;
var count__33307 = (0);
var i__33308 = (0);
while(true){
if((i__33308 < count__33307)){
var vec__33328 = chunk__33306.cljs$core$IIndexed$_nth$arity$2(null,i__33308);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33328,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33328,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___33418 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___33418)){
var effect_fn_33420 = temp__5802__auto___33418;
(effect_fn_33420.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33420.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33420.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__33421 = seq__33305;
var G__33422 = chunk__33306;
var G__33423 = count__33307;
var G__33424 = (i__33308 + (1));
seq__33305 = G__33421;
chunk__33306 = G__33422;
count__33307 = G__33423;
i__33308 = G__33424;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33305);
if(temp__5804__auto__){
var seq__33305__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33305__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33305__$1);
var G__33425 = cljs.core.chunk_rest(seq__33305__$1);
var G__33426 = c__5568__auto__;
var G__33427 = cljs.core.count(c__5568__auto__);
var G__33428 = (0);
seq__33305 = G__33425;
chunk__33306 = G__33426;
count__33307 = G__33427;
i__33308 = G__33428;
continue;
} else {
var vec__33331 = cljs.core.first(seq__33305__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33331,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33331,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___33430 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___33430)){
var effect_fn_33432 = temp__5802__auto___33430;
(effect_fn_33432.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33432.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33432.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__33433 = cljs.core.next(seq__33305__$1);
var G__33434 = null;
var G__33435 = (0);
var G__33436 = (0);
seq__33305 = G__33433;
chunk__33306 = G__33434;
count__33307 = G__33435;
i__33308 = G__33436;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__33338 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__33339 = null;
var count__33340 = (0);
var i__33341 = (0);
while(true){
if((i__33341 < count__33340)){
var event = chunk__33339.cljs$core$IIndexed$_nth$arity$2(null,i__33341);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__33439 = seq__33338;
var G__33440 = chunk__33339;
var G__33441 = count__33340;
var G__33442 = (i__33341 + (1));
seq__33338 = G__33439;
chunk__33339 = G__33440;
count__33340 = G__33441;
i__33341 = G__33442;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33338);
if(temp__5804__auto__){
var seq__33338__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33338__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33338__$1);
var G__33443 = cljs.core.chunk_rest(seq__33338__$1);
var G__33444 = c__5568__auto__;
var G__33445 = cljs.core.count(c__5568__auto__);
var G__33446 = (0);
seq__33338 = G__33443;
chunk__33339 = G__33444;
count__33340 = G__33445;
i__33341 = G__33446;
continue;
} else {
var event = cljs.core.first(seq__33338__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__33447 = cljs.core.next(seq__33338__$1);
var G__33448 = null;
var G__33449 = (0);
var G__33450 = (0);
seq__33338 = G__33447;
chunk__33339 = G__33448;
count__33340 = G__33449;
i__33341 = G__33450;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__33344 = cljs.core.seq(value);
var chunk__33345 = null;
var count__33346 = (0);
var i__33347 = (0);
while(true){
if((i__33347 < count__33346)){
var event = chunk__33345.cljs$core$IIndexed$_nth$arity$2(null,i__33347);
clear_event(event);


var G__33454 = seq__33344;
var G__33455 = chunk__33345;
var G__33456 = count__33346;
var G__33457 = (i__33347 + (1));
seq__33344 = G__33454;
chunk__33345 = G__33455;
count__33346 = G__33456;
i__33347 = G__33457;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33344);
if(temp__5804__auto__){
var seq__33344__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33344__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33344__$1);
var G__33458 = cljs.core.chunk_rest(seq__33344__$1);
var G__33459 = c__5568__auto__;
var G__33460 = cljs.core.count(c__5568__auto__);
var G__33461 = (0);
seq__33344 = G__33458;
chunk__33345 = G__33459;
count__33346 = G__33460;
i__33347 = G__33461;
continue;
} else {
var event = cljs.core.first(seq__33344__$1);
clear_event(event);


var G__33464 = cljs.core.next(seq__33344__$1);
var G__33465 = null;
var G__33466 = (0);
var G__33467 = (0);
seq__33344 = G__33464;
chunk__33345 = G__33465;
count__33346 = G__33466;
i__33347 = G__33467;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
