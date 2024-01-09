goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48701 = arguments.length;
var i__5770__auto___48702 = (0);
while(true){
if((i__5770__auto___48702 < len__5769__auto___48701)){
args__5775__auto__.push((arguments[i__5770__auto___48702]));

var G__48703 = (i__5770__auto___48702 + (1));
i__5770__auto___48702 = G__48703;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq48308){
var G__48309 = cljs.core.first(seq48308);
var seq48308__$1 = cljs.core.next(seq48308);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48309,seq48308__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__48310 = cljs.core.seq(sources);
var chunk__48311 = null;
var count__48312 = (0);
var i__48313 = (0);
while(true){
if((i__48313 < count__48312)){
var map__48318 = chunk__48311.cljs$core$IIndexed$_nth$arity$2(null,i__48313);
var map__48318__$1 = cljs.core.__destructure_map(map__48318);
var src = map__48318__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48318__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48318__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48318__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48318__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e48319){var e_48704 = e48319;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48704);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48704.message)].join('')));
}

var G__48705 = seq__48310;
var G__48706 = chunk__48311;
var G__48707 = count__48312;
var G__48708 = (i__48313 + (1));
seq__48310 = G__48705;
chunk__48311 = G__48706;
count__48312 = G__48707;
i__48313 = G__48708;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48310);
if(temp__5804__auto__){
var seq__48310__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48310__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48310__$1);
var G__48709 = cljs.core.chunk_rest(seq__48310__$1);
var G__48710 = c__5568__auto__;
var G__48711 = cljs.core.count(c__5568__auto__);
var G__48712 = (0);
seq__48310 = G__48709;
chunk__48311 = G__48710;
count__48312 = G__48711;
i__48313 = G__48712;
continue;
} else {
var map__48320 = cljs.core.first(seq__48310__$1);
var map__48320__$1 = cljs.core.__destructure_map(map__48320);
var src = map__48320__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48320__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48320__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48320__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48320__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e48321){var e_48713 = e48321;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48713);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48713.message)].join('')));
}

var G__48714 = cljs.core.next(seq__48310__$1);
var G__48715 = null;
var G__48716 = (0);
var G__48717 = (0);
seq__48310 = G__48714;
chunk__48311 = G__48715;
count__48312 = G__48716;
i__48313 = G__48717;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__48329 = cljs.core.seq(js_requires);
var chunk__48330 = null;
var count__48331 = (0);
var i__48332 = (0);
while(true){
if((i__48332 < count__48331)){
var js_ns = chunk__48330.cljs$core$IIndexed$_nth$arity$2(null,i__48332);
var require_str_48718 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48718);


var G__48719 = seq__48329;
var G__48720 = chunk__48330;
var G__48721 = count__48331;
var G__48722 = (i__48332 + (1));
seq__48329 = G__48719;
chunk__48330 = G__48720;
count__48331 = G__48721;
i__48332 = G__48722;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48329);
if(temp__5804__auto__){
var seq__48329__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48329__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48329__$1);
var G__48723 = cljs.core.chunk_rest(seq__48329__$1);
var G__48724 = c__5568__auto__;
var G__48725 = cljs.core.count(c__5568__auto__);
var G__48726 = (0);
seq__48329 = G__48723;
chunk__48330 = G__48724;
count__48331 = G__48725;
i__48332 = G__48726;
continue;
} else {
var js_ns = cljs.core.first(seq__48329__$1);
var require_str_48727 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48727);


var G__48728 = cljs.core.next(seq__48329__$1);
var G__48729 = null;
var G__48730 = (0);
var G__48731 = (0);
seq__48329 = G__48728;
chunk__48330 = G__48729;
count__48331 = G__48730;
i__48332 = G__48731;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__48335){
var map__48336 = p__48335;
var map__48336__$1 = cljs.core.__destructure_map(map__48336);
var msg = map__48336__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48336__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48336__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48337(s__48338){
return (new cljs.core.LazySeq(null,(function (){
var s__48338__$1 = s__48338;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__48338__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__48343 = cljs.core.first(xs__6360__auto__);
var map__48343__$1 = cljs.core.__destructure_map(map__48343);
var src = map__48343__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48343__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48343__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__48338__$1,map__48343,map__48343__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__48336,map__48336__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48337_$_iter__48339(s__48340){
return (new cljs.core.LazySeq(null,((function (s__48338__$1,map__48343,map__48343__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__48336,map__48336__$1,msg,info,reload_info){
return (function (){
var s__48340__$1 = s__48340;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__48340__$1);
if(temp__5804__auto____$1){
var s__48340__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48340__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__48340__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__48342 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__48341 = (0);
while(true){
if((i__48341 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__48341);
cljs.core.chunk_append(b__48342,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__48732 = (i__48341 + (1));
i__48341 = G__48732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48342),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48337_$_iter__48339(cljs.core.chunk_rest(s__48340__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48342),null);
}
} else {
var warning = cljs.core.first(s__48340__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48337_$_iter__48339(cljs.core.rest(s__48340__$2)));
}
} else {
return null;
}
break;
}
});})(s__48338__$1,map__48343,map__48343__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__48336,map__48336__$1,msg,info,reload_info))
,null,null));
});})(s__48338__$1,map__48343,map__48343__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__48336,map__48336__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48337(cljs.core.rest(s__48338__$1)));
} else {
var G__48733 = cljs.core.rest(s__48338__$1);
s__48338__$1 = G__48733;
continue;
}
} else {
var G__48734 = cljs.core.rest(s__48338__$1);
s__48338__$1 = G__48734;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__48344_48735 = cljs.core.seq(warnings);
var chunk__48345_48736 = null;
var count__48346_48737 = (0);
var i__48347_48738 = (0);
while(true){
if((i__48347_48738 < count__48346_48737)){
var map__48351_48739 = chunk__48345_48736.cljs$core$IIndexed$_nth$arity$2(null,i__48347_48738);
var map__48351_48740__$1 = cljs.core.__destructure_map(map__48351_48739);
var w_48741 = map__48351_48740__$1;
var msg_48742__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48351_48740__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48351_48740__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48351_48740__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48351_48740__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48745)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48743),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48744),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48742__$1)].join(''));


var G__48746 = seq__48344_48735;
var G__48747 = chunk__48345_48736;
var G__48748 = count__48346_48737;
var G__48749 = (i__48347_48738 + (1));
seq__48344_48735 = G__48746;
chunk__48345_48736 = G__48747;
count__48346_48737 = G__48748;
i__48347_48738 = G__48749;
continue;
} else {
var temp__5804__auto___48750 = cljs.core.seq(seq__48344_48735);
if(temp__5804__auto___48750){
var seq__48344_48751__$1 = temp__5804__auto___48750;
if(cljs.core.chunked_seq_QMARK_(seq__48344_48751__$1)){
var c__5568__auto___48752 = cljs.core.chunk_first(seq__48344_48751__$1);
var G__48753 = cljs.core.chunk_rest(seq__48344_48751__$1);
var G__48754 = c__5568__auto___48752;
var G__48755 = cljs.core.count(c__5568__auto___48752);
var G__48756 = (0);
seq__48344_48735 = G__48753;
chunk__48345_48736 = G__48754;
count__48346_48737 = G__48755;
i__48347_48738 = G__48756;
continue;
} else {
var map__48353_48757 = cljs.core.first(seq__48344_48751__$1);
var map__48353_48758__$1 = cljs.core.__destructure_map(map__48353_48757);
var w_48759 = map__48353_48758__$1;
var msg_48760__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48353_48758__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48353_48758__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48353_48758__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48353_48758__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48763)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48761),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48762),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48760__$1)].join(''));


var G__48764 = cljs.core.next(seq__48344_48751__$1);
var G__48765 = null;
var G__48766 = (0);
var G__48767 = (0);
seq__48344_48735 = G__48764;
chunk__48345_48736 = G__48765;
count__48346_48737 = G__48766;
i__48347_48738 = G__48767;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__48334_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__48334_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__48356){
var map__48357 = p__48356;
var map__48357__$1 = cljs.core.__destructure_map(map__48357);
var msg = map__48357__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__48358 = cljs.core.seq(updates);
var chunk__48360 = null;
var count__48361 = (0);
var i__48362 = (0);
while(true){
if((i__48362 < count__48361)){
var path = chunk__48360.cljs$core$IIndexed$_nth$arity$2(null,i__48362);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48509_48768 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48513_48769 = null;
var count__48514_48770 = (0);
var i__48515_48771 = (0);
while(true){
if((i__48515_48771 < count__48514_48770)){
var node_48772 = chunk__48513_48769.cljs$core$IIndexed$_nth$arity$2(null,i__48515_48771);
if(cljs.core.not(node_48772.shadow$old)){
var path_match_48773 = shadow.cljs.devtools.client.browser.match_paths(node_48772.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48773)){
var new_link_48774 = (function (){var G__48555 = node_48772.cloneNode(true);
G__48555.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48773),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48555;
})();
(node_48772.shadow$old = true);

(new_link_48774.onload = ((function (seq__48509_48768,chunk__48513_48769,count__48514_48770,i__48515_48771,seq__48358,chunk__48360,count__48361,i__48362,new_link_48774,path_match_48773,node_48772,path,map__48357,map__48357__$1,msg,updates,reload_info){
return (function (e){
var seq__48556_48775 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48558_48776 = null;
var count__48559_48777 = (0);
var i__48560_48778 = (0);
while(true){
if((i__48560_48778 < count__48559_48777)){
var map__48565_48779 = chunk__48558_48776.cljs$core$IIndexed$_nth$arity$2(null,i__48560_48778);
var map__48565_48780__$1 = cljs.core.__destructure_map(map__48565_48779);
var task_48781 = map__48565_48780__$1;
var fn_str_48782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48565_48780__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48565_48780__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48784 = goog.getObjectByName(fn_str_48782,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48783)].join(''));

(fn_obj_48784.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48784.cljs$core$IFn$_invoke$arity$2(path,new_link_48774) : fn_obj_48784.call(null,path,new_link_48774));


var G__48785 = seq__48556_48775;
var G__48786 = chunk__48558_48776;
var G__48787 = count__48559_48777;
var G__48788 = (i__48560_48778 + (1));
seq__48556_48775 = G__48785;
chunk__48558_48776 = G__48786;
count__48559_48777 = G__48787;
i__48560_48778 = G__48788;
continue;
} else {
var temp__5804__auto___48789 = cljs.core.seq(seq__48556_48775);
if(temp__5804__auto___48789){
var seq__48556_48791__$1 = temp__5804__auto___48789;
if(cljs.core.chunked_seq_QMARK_(seq__48556_48791__$1)){
var c__5568__auto___48792 = cljs.core.chunk_first(seq__48556_48791__$1);
var G__48793 = cljs.core.chunk_rest(seq__48556_48791__$1);
var G__48794 = c__5568__auto___48792;
var G__48795 = cljs.core.count(c__5568__auto___48792);
var G__48796 = (0);
seq__48556_48775 = G__48793;
chunk__48558_48776 = G__48794;
count__48559_48777 = G__48795;
i__48560_48778 = G__48796;
continue;
} else {
var map__48570_48797 = cljs.core.first(seq__48556_48791__$1);
var map__48570_48798__$1 = cljs.core.__destructure_map(map__48570_48797);
var task_48799 = map__48570_48798__$1;
var fn_str_48800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48570_48798__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48570_48798__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48802 = goog.getObjectByName(fn_str_48800,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48801)].join(''));

(fn_obj_48802.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48802.cljs$core$IFn$_invoke$arity$2(path,new_link_48774) : fn_obj_48802.call(null,path,new_link_48774));


var G__48804 = cljs.core.next(seq__48556_48791__$1);
var G__48805 = null;
var G__48806 = (0);
var G__48807 = (0);
seq__48556_48775 = G__48804;
chunk__48558_48776 = G__48805;
count__48559_48777 = G__48806;
i__48560_48778 = G__48807;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48772);
});})(seq__48509_48768,chunk__48513_48769,count__48514_48770,i__48515_48771,seq__48358,chunk__48360,count__48361,i__48362,new_link_48774,path_match_48773,node_48772,path,map__48357,map__48357__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48773], 0));

goog.dom.insertSiblingAfter(new_link_48774,node_48772);


var G__48808 = seq__48509_48768;
var G__48809 = chunk__48513_48769;
var G__48810 = count__48514_48770;
var G__48811 = (i__48515_48771 + (1));
seq__48509_48768 = G__48808;
chunk__48513_48769 = G__48809;
count__48514_48770 = G__48810;
i__48515_48771 = G__48811;
continue;
} else {
var G__48812 = seq__48509_48768;
var G__48813 = chunk__48513_48769;
var G__48814 = count__48514_48770;
var G__48815 = (i__48515_48771 + (1));
seq__48509_48768 = G__48812;
chunk__48513_48769 = G__48813;
count__48514_48770 = G__48814;
i__48515_48771 = G__48815;
continue;
}
} else {
var G__48816 = seq__48509_48768;
var G__48817 = chunk__48513_48769;
var G__48818 = count__48514_48770;
var G__48819 = (i__48515_48771 + (1));
seq__48509_48768 = G__48816;
chunk__48513_48769 = G__48817;
count__48514_48770 = G__48818;
i__48515_48771 = G__48819;
continue;
}
} else {
var temp__5804__auto___48820 = cljs.core.seq(seq__48509_48768);
if(temp__5804__auto___48820){
var seq__48509_48822__$1 = temp__5804__auto___48820;
if(cljs.core.chunked_seq_QMARK_(seq__48509_48822__$1)){
var c__5568__auto___48823 = cljs.core.chunk_first(seq__48509_48822__$1);
var G__48824 = cljs.core.chunk_rest(seq__48509_48822__$1);
var G__48825 = c__5568__auto___48823;
var G__48826 = cljs.core.count(c__5568__auto___48823);
var G__48827 = (0);
seq__48509_48768 = G__48824;
chunk__48513_48769 = G__48825;
count__48514_48770 = G__48826;
i__48515_48771 = G__48827;
continue;
} else {
var node_48828 = cljs.core.first(seq__48509_48822__$1);
if(cljs.core.not(node_48828.shadow$old)){
var path_match_48829 = shadow.cljs.devtools.client.browser.match_paths(node_48828.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48829)){
var new_link_48830 = (function (){var G__48577 = node_48828.cloneNode(true);
G__48577.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48829),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48577;
})();
(node_48828.shadow$old = true);

(new_link_48830.onload = ((function (seq__48509_48768,chunk__48513_48769,count__48514_48770,i__48515_48771,seq__48358,chunk__48360,count__48361,i__48362,new_link_48830,path_match_48829,node_48828,seq__48509_48822__$1,temp__5804__auto___48820,path,map__48357,map__48357__$1,msg,updates,reload_info){
return (function (e){
var seq__48579_48831 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48581_48832 = null;
var count__48582_48833 = (0);
var i__48583_48834 = (0);
while(true){
if((i__48583_48834 < count__48582_48833)){
var map__48588_48835 = chunk__48581_48832.cljs$core$IIndexed$_nth$arity$2(null,i__48583_48834);
var map__48588_48836__$1 = cljs.core.__destructure_map(map__48588_48835);
var task_48837 = map__48588_48836__$1;
var fn_str_48838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48588_48836__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48588_48836__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48840 = goog.getObjectByName(fn_str_48838,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48839)].join(''));

(fn_obj_48840.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48840.cljs$core$IFn$_invoke$arity$2(path,new_link_48830) : fn_obj_48840.call(null,path,new_link_48830));


var G__48841 = seq__48579_48831;
var G__48842 = chunk__48581_48832;
var G__48843 = count__48582_48833;
var G__48844 = (i__48583_48834 + (1));
seq__48579_48831 = G__48841;
chunk__48581_48832 = G__48842;
count__48582_48833 = G__48843;
i__48583_48834 = G__48844;
continue;
} else {
var temp__5804__auto___48846__$1 = cljs.core.seq(seq__48579_48831);
if(temp__5804__auto___48846__$1){
var seq__48579_48847__$1 = temp__5804__auto___48846__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48579_48847__$1)){
var c__5568__auto___48848 = cljs.core.chunk_first(seq__48579_48847__$1);
var G__48849 = cljs.core.chunk_rest(seq__48579_48847__$1);
var G__48850 = c__5568__auto___48848;
var G__48851 = cljs.core.count(c__5568__auto___48848);
var G__48852 = (0);
seq__48579_48831 = G__48849;
chunk__48581_48832 = G__48850;
count__48582_48833 = G__48851;
i__48583_48834 = G__48852;
continue;
} else {
var map__48593_48854 = cljs.core.first(seq__48579_48847__$1);
var map__48593_48855__$1 = cljs.core.__destructure_map(map__48593_48854);
var task_48856 = map__48593_48855__$1;
var fn_str_48857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48593_48855__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48593_48855__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48859 = goog.getObjectByName(fn_str_48857,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48858)].join(''));

(fn_obj_48859.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48859.cljs$core$IFn$_invoke$arity$2(path,new_link_48830) : fn_obj_48859.call(null,path,new_link_48830));


var G__48861 = cljs.core.next(seq__48579_48847__$1);
var G__48862 = null;
var G__48863 = (0);
var G__48864 = (0);
seq__48579_48831 = G__48861;
chunk__48581_48832 = G__48862;
count__48582_48833 = G__48863;
i__48583_48834 = G__48864;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48828);
});})(seq__48509_48768,chunk__48513_48769,count__48514_48770,i__48515_48771,seq__48358,chunk__48360,count__48361,i__48362,new_link_48830,path_match_48829,node_48828,seq__48509_48822__$1,temp__5804__auto___48820,path,map__48357,map__48357__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48829], 0));

goog.dom.insertSiblingAfter(new_link_48830,node_48828);


var G__48865 = cljs.core.next(seq__48509_48822__$1);
var G__48866 = null;
var G__48867 = (0);
var G__48868 = (0);
seq__48509_48768 = G__48865;
chunk__48513_48769 = G__48866;
count__48514_48770 = G__48867;
i__48515_48771 = G__48868;
continue;
} else {
var G__48869 = cljs.core.next(seq__48509_48822__$1);
var G__48870 = null;
var G__48871 = (0);
var G__48872 = (0);
seq__48509_48768 = G__48869;
chunk__48513_48769 = G__48870;
count__48514_48770 = G__48871;
i__48515_48771 = G__48872;
continue;
}
} else {
var G__48873 = cljs.core.next(seq__48509_48822__$1);
var G__48874 = null;
var G__48875 = (0);
var G__48876 = (0);
seq__48509_48768 = G__48873;
chunk__48513_48769 = G__48874;
count__48514_48770 = G__48875;
i__48515_48771 = G__48876;
continue;
}
}
} else {
}
}
break;
}


var G__48877 = seq__48358;
var G__48878 = chunk__48360;
var G__48879 = count__48361;
var G__48880 = (i__48362 + (1));
seq__48358 = G__48877;
chunk__48360 = G__48878;
count__48361 = G__48879;
i__48362 = G__48880;
continue;
} else {
var G__48881 = seq__48358;
var G__48882 = chunk__48360;
var G__48883 = count__48361;
var G__48884 = (i__48362 + (1));
seq__48358 = G__48881;
chunk__48360 = G__48882;
count__48361 = G__48883;
i__48362 = G__48884;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48358);
if(temp__5804__auto__){
var seq__48358__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48358__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48358__$1);
var G__48885 = cljs.core.chunk_rest(seq__48358__$1);
var G__48886 = c__5568__auto__;
var G__48887 = cljs.core.count(c__5568__auto__);
var G__48888 = (0);
seq__48358 = G__48885;
chunk__48360 = G__48886;
count__48361 = G__48887;
i__48362 = G__48888;
continue;
} else {
var path = cljs.core.first(seq__48358__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48595_48889 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48599_48890 = null;
var count__48600_48891 = (0);
var i__48601_48892 = (0);
while(true){
if((i__48601_48892 < count__48600_48891)){
var node_48893 = chunk__48599_48890.cljs$core$IIndexed$_nth$arity$2(null,i__48601_48892);
if(cljs.core.not(node_48893.shadow$old)){
var path_match_48894 = shadow.cljs.devtools.client.browser.match_paths(node_48893.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48894)){
var new_link_48895 = (function (){var G__48631 = node_48893.cloneNode(true);
G__48631.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48894),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48631;
})();
(node_48893.shadow$old = true);

(new_link_48895.onload = ((function (seq__48595_48889,chunk__48599_48890,count__48600_48891,i__48601_48892,seq__48358,chunk__48360,count__48361,i__48362,new_link_48895,path_match_48894,node_48893,path,seq__48358__$1,temp__5804__auto__,map__48357,map__48357__$1,msg,updates,reload_info){
return (function (e){
var seq__48632_48896 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48634_48897 = null;
var count__48635_48898 = (0);
var i__48636_48899 = (0);
while(true){
if((i__48636_48899 < count__48635_48898)){
var map__48640_48900 = chunk__48634_48897.cljs$core$IIndexed$_nth$arity$2(null,i__48636_48899);
var map__48640_48901__$1 = cljs.core.__destructure_map(map__48640_48900);
var task_48902 = map__48640_48901__$1;
var fn_str_48903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48640_48901__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48640_48901__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48905 = goog.getObjectByName(fn_str_48903,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48904)].join(''));

(fn_obj_48905.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48905.cljs$core$IFn$_invoke$arity$2(path,new_link_48895) : fn_obj_48905.call(null,path,new_link_48895));


var G__48906 = seq__48632_48896;
var G__48907 = chunk__48634_48897;
var G__48908 = count__48635_48898;
var G__48909 = (i__48636_48899 + (1));
seq__48632_48896 = G__48906;
chunk__48634_48897 = G__48907;
count__48635_48898 = G__48908;
i__48636_48899 = G__48909;
continue;
} else {
var temp__5804__auto___48910__$1 = cljs.core.seq(seq__48632_48896);
if(temp__5804__auto___48910__$1){
var seq__48632_48911__$1 = temp__5804__auto___48910__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48632_48911__$1)){
var c__5568__auto___48912 = cljs.core.chunk_first(seq__48632_48911__$1);
var G__48913 = cljs.core.chunk_rest(seq__48632_48911__$1);
var G__48914 = c__5568__auto___48912;
var G__48915 = cljs.core.count(c__5568__auto___48912);
var G__48916 = (0);
seq__48632_48896 = G__48913;
chunk__48634_48897 = G__48914;
count__48635_48898 = G__48915;
i__48636_48899 = G__48916;
continue;
} else {
var map__48642_48917 = cljs.core.first(seq__48632_48911__$1);
var map__48642_48918__$1 = cljs.core.__destructure_map(map__48642_48917);
var task_48919 = map__48642_48918__$1;
var fn_str_48920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48642_48918__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48642_48918__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48922 = goog.getObjectByName(fn_str_48920,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48921)].join(''));

(fn_obj_48922.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48922.cljs$core$IFn$_invoke$arity$2(path,new_link_48895) : fn_obj_48922.call(null,path,new_link_48895));


var G__48923 = cljs.core.next(seq__48632_48911__$1);
var G__48924 = null;
var G__48925 = (0);
var G__48926 = (0);
seq__48632_48896 = G__48923;
chunk__48634_48897 = G__48924;
count__48635_48898 = G__48925;
i__48636_48899 = G__48926;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48893);
});})(seq__48595_48889,chunk__48599_48890,count__48600_48891,i__48601_48892,seq__48358,chunk__48360,count__48361,i__48362,new_link_48895,path_match_48894,node_48893,path,seq__48358__$1,temp__5804__auto__,map__48357,map__48357__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48894], 0));

goog.dom.insertSiblingAfter(new_link_48895,node_48893);


var G__48928 = seq__48595_48889;
var G__48929 = chunk__48599_48890;
var G__48930 = count__48600_48891;
var G__48931 = (i__48601_48892 + (1));
seq__48595_48889 = G__48928;
chunk__48599_48890 = G__48929;
count__48600_48891 = G__48930;
i__48601_48892 = G__48931;
continue;
} else {
var G__48932 = seq__48595_48889;
var G__48933 = chunk__48599_48890;
var G__48934 = count__48600_48891;
var G__48935 = (i__48601_48892 + (1));
seq__48595_48889 = G__48932;
chunk__48599_48890 = G__48933;
count__48600_48891 = G__48934;
i__48601_48892 = G__48935;
continue;
}
} else {
var G__48936 = seq__48595_48889;
var G__48937 = chunk__48599_48890;
var G__48938 = count__48600_48891;
var G__48939 = (i__48601_48892 + (1));
seq__48595_48889 = G__48936;
chunk__48599_48890 = G__48937;
count__48600_48891 = G__48938;
i__48601_48892 = G__48939;
continue;
}
} else {
var temp__5804__auto___48941__$1 = cljs.core.seq(seq__48595_48889);
if(temp__5804__auto___48941__$1){
var seq__48595_48942__$1 = temp__5804__auto___48941__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48595_48942__$1)){
var c__5568__auto___48943 = cljs.core.chunk_first(seq__48595_48942__$1);
var G__48944 = cljs.core.chunk_rest(seq__48595_48942__$1);
var G__48945 = c__5568__auto___48943;
var G__48946 = cljs.core.count(c__5568__auto___48943);
var G__48947 = (0);
seq__48595_48889 = G__48944;
chunk__48599_48890 = G__48945;
count__48600_48891 = G__48946;
i__48601_48892 = G__48947;
continue;
} else {
var node_48948 = cljs.core.first(seq__48595_48942__$1);
if(cljs.core.not(node_48948.shadow$old)){
var path_match_48949 = shadow.cljs.devtools.client.browser.match_paths(node_48948.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48949)){
var new_link_48950 = (function (){var G__48648 = node_48948.cloneNode(true);
G__48648.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48949),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48648;
})();
(node_48948.shadow$old = true);

(new_link_48950.onload = ((function (seq__48595_48889,chunk__48599_48890,count__48600_48891,i__48601_48892,seq__48358,chunk__48360,count__48361,i__48362,new_link_48950,path_match_48949,node_48948,seq__48595_48942__$1,temp__5804__auto___48941__$1,path,seq__48358__$1,temp__5804__auto__,map__48357,map__48357__$1,msg,updates,reload_info){
return (function (e){
var seq__48649_48951 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48651_48952 = null;
var count__48652_48953 = (0);
var i__48653_48954 = (0);
while(true){
if((i__48653_48954 < count__48652_48953)){
var map__48659_48955 = chunk__48651_48952.cljs$core$IIndexed$_nth$arity$2(null,i__48653_48954);
var map__48659_48956__$1 = cljs.core.__destructure_map(map__48659_48955);
var task_48957 = map__48659_48956__$1;
var fn_str_48958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48659_48956__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48659_48956__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48960 = goog.getObjectByName(fn_str_48958,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48959)].join(''));

(fn_obj_48960.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48960.cljs$core$IFn$_invoke$arity$2(path,new_link_48950) : fn_obj_48960.call(null,path,new_link_48950));


var G__48961 = seq__48649_48951;
var G__48962 = chunk__48651_48952;
var G__48963 = count__48652_48953;
var G__48964 = (i__48653_48954 + (1));
seq__48649_48951 = G__48961;
chunk__48651_48952 = G__48962;
count__48652_48953 = G__48963;
i__48653_48954 = G__48964;
continue;
} else {
var temp__5804__auto___48965__$2 = cljs.core.seq(seq__48649_48951);
if(temp__5804__auto___48965__$2){
var seq__48649_48966__$1 = temp__5804__auto___48965__$2;
if(cljs.core.chunked_seq_QMARK_(seq__48649_48966__$1)){
var c__5568__auto___48967 = cljs.core.chunk_first(seq__48649_48966__$1);
var G__48968 = cljs.core.chunk_rest(seq__48649_48966__$1);
var G__48969 = c__5568__auto___48967;
var G__48970 = cljs.core.count(c__5568__auto___48967);
var G__48971 = (0);
seq__48649_48951 = G__48968;
chunk__48651_48952 = G__48969;
count__48652_48953 = G__48970;
i__48653_48954 = G__48971;
continue;
} else {
var map__48663_48972 = cljs.core.first(seq__48649_48966__$1);
var map__48663_48973__$1 = cljs.core.__destructure_map(map__48663_48972);
var task_48974 = map__48663_48973__$1;
var fn_str_48975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48663_48973__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48663_48973__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48977 = goog.getObjectByName(fn_str_48975,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48976)].join(''));

(fn_obj_48977.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48977.cljs$core$IFn$_invoke$arity$2(path,new_link_48950) : fn_obj_48977.call(null,path,new_link_48950));


var G__48978 = cljs.core.next(seq__48649_48966__$1);
var G__48979 = null;
var G__48980 = (0);
var G__48981 = (0);
seq__48649_48951 = G__48978;
chunk__48651_48952 = G__48979;
count__48652_48953 = G__48980;
i__48653_48954 = G__48981;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48948);
});})(seq__48595_48889,chunk__48599_48890,count__48600_48891,i__48601_48892,seq__48358,chunk__48360,count__48361,i__48362,new_link_48950,path_match_48949,node_48948,seq__48595_48942__$1,temp__5804__auto___48941__$1,path,seq__48358__$1,temp__5804__auto__,map__48357,map__48357__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48949], 0));

goog.dom.insertSiblingAfter(new_link_48950,node_48948);


var G__48982 = cljs.core.next(seq__48595_48942__$1);
var G__48983 = null;
var G__48984 = (0);
var G__48985 = (0);
seq__48595_48889 = G__48982;
chunk__48599_48890 = G__48983;
count__48600_48891 = G__48984;
i__48601_48892 = G__48985;
continue;
} else {
var G__48986 = cljs.core.next(seq__48595_48942__$1);
var G__48987 = null;
var G__48988 = (0);
var G__48989 = (0);
seq__48595_48889 = G__48986;
chunk__48599_48890 = G__48987;
count__48600_48891 = G__48988;
i__48601_48892 = G__48989;
continue;
}
} else {
var G__48990 = cljs.core.next(seq__48595_48942__$1);
var G__48991 = null;
var G__48992 = (0);
var G__48993 = (0);
seq__48595_48889 = G__48990;
chunk__48599_48890 = G__48991;
count__48600_48891 = G__48992;
i__48601_48892 = G__48993;
continue;
}
}
} else {
}
}
break;
}


var G__48994 = cljs.core.next(seq__48358__$1);
var G__48995 = null;
var G__48996 = (0);
var G__48997 = (0);
seq__48358 = G__48994;
chunk__48360 = G__48995;
count__48361 = G__48996;
i__48362 = G__48997;
continue;
} else {
var G__48998 = cljs.core.next(seq__48358__$1);
var G__48999 = null;
var G__49000 = (0);
var G__49001 = (0);
seq__48358 = G__48998;
chunk__48360 = G__48999;
count__48361 = G__49000;
i__48362 = G__49001;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__48665){
var map__48666 = p__48665;
var map__48666__$1 = cljs.core.__destructure_map(map__48666);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48666__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__48680){
var map__48681 = p__48680;
var map__48681__$1 = cljs.core.__destructure_map(map__48681);
var _ = map__48681__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48681__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__48682,done,error){
var map__48683 = p__48682;
var map__48683__$1 = cljs.core.__destructure_map(map__48683);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48683__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__48687,done,error){
var map__48688 = p__48687;
var map__48688__$1 = cljs.core.__destructure_map(map__48688);
var msg = map__48688__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48688__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48688__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48688__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__48689){
var map__48690 = p__48689;
var map__48690__$1 = cljs.core.__destructure_map(map__48690);
var src = map__48690__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48690__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__48691 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__48691) : done.call(null,G__48691));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__48692){
var map__48693 = p__48692;
var map__48693__$1 = cljs.core.__destructure_map(map__48693);
var msg__$1 = map__48693__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48693__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e48694){var ex = e48694;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__48695){
var map__48696 = p__48695;
var map__48696__$1 = cljs.core.__destructure_map(map__48696);
var env = map__48696__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48696__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__48697){
var map__48698 = p__48697;
var map__48698__$1 = cljs.core.__destructure_map(map__48698);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48698__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48698__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__48699){
var map__48700 = p__48699;
var map__48700__$1 = cljs.core.__destructure_map(map__48700);
var svc = map__48700__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48700__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
