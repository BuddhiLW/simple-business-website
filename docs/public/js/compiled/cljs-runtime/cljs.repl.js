goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45680){
var map__45681 = p__45680;
var map__45681__$1 = cljs.core.__destructure_map(map__45681);
var m = map__45681__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45681__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45681__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45693_45937 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45694_45938 = null;
var count__45695_45939 = (0);
var i__45696_45940 = (0);
while(true){
if((i__45696_45940 < count__45695_45939)){
var f_45943 = chunk__45694_45938.cljs$core$IIndexed$_nth$arity$2(null,i__45696_45940);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45943], 0));


var G__45953 = seq__45693_45937;
var G__45954 = chunk__45694_45938;
var G__45955 = count__45695_45939;
var G__45956 = (i__45696_45940 + (1));
seq__45693_45937 = G__45953;
chunk__45694_45938 = G__45954;
count__45695_45939 = G__45955;
i__45696_45940 = G__45956;
continue;
} else {
var temp__5804__auto___45957 = cljs.core.seq(seq__45693_45937);
if(temp__5804__auto___45957){
var seq__45693_45958__$1 = temp__5804__auto___45957;
if(cljs.core.chunked_seq_QMARK_(seq__45693_45958__$1)){
var c__5568__auto___45961 = cljs.core.chunk_first(seq__45693_45958__$1);
var G__45962 = cljs.core.chunk_rest(seq__45693_45958__$1);
var G__45963 = c__5568__auto___45961;
var G__45964 = cljs.core.count(c__5568__auto___45961);
var G__45965 = (0);
seq__45693_45937 = G__45962;
chunk__45694_45938 = G__45963;
count__45695_45939 = G__45964;
i__45696_45940 = G__45965;
continue;
} else {
var f_45967 = cljs.core.first(seq__45693_45958__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45967], 0));


var G__45968 = cljs.core.next(seq__45693_45958__$1);
var G__45969 = null;
var G__45970 = (0);
var G__45971 = (0);
seq__45693_45937 = G__45968;
chunk__45694_45938 = G__45969;
count__45695_45939 = G__45970;
i__45696_45940 = G__45971;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45972 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45972], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45972)))?cljs.core.second(arglists_45972):arglists_45972)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45707_45977 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45708_45978 = null;
var count__45709_45979 = (0);
var i__45710_45980 = (0);
while(true){
if((i__45710_45980 < count__45709_45979)){
var vec__45722_45981 = chunk__45708_45978.cljs$core$IIndexed$_nth$arity$2(null,i__45710_45980);
var name_45982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45722_45981,(0),null);
var map__45725_45983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45722_45981,(1),null);
var map__45725_45984__$1 = cljs.core.__destructure_map(map__45725_45983);
var doc_45985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45725_45984__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45725_45984__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45982], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45986], 0));

if(cljs.core.truth_(doc_45985)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45985], 0));
} else {
}


var G__45987 = seq__45707_45977;
var G__45988 = chunk__45708_45978;
var G__45989 = count__45709_45979;
var G__45990 = (i__45710_45980 + (1));
seq__45707_45977 = G__45987;
chunk__45708_45978 = G__45988;
count__45709_45979 = G__45989;
i__45710_45980 = G__45990;
continue;
} else {
var temp__5804__auto___45991 = cljs.core.seq(seq__45707_45977);
if(temp__5804__auto___45991){
var seq__45707_45992__$1 = temp__5804__auto___45991;
if(cljs.core.chunked_seq_QMARK_(seq__45707_45992__$1)){
var c__5568__auto___45993 = cljs.core.chunk_first(seq__45707_45992__$1);
var G__45994 = cljs.core.chunk_rest(seq__45707_45992__$1);
var G__45995 = c__5568__auto___45993;
var G__45996 = cljs.core.count(c__5568__auto___45993);
var G__45997 = (0);
seq__45707_45977 = G__45994;
chunk__45708_45978 = G__45995;
count__45709_45979 = G__45996;
i__45710_45980 = G__45997;
continue;
} else {
var vec__45726_45998 = cljs.core.first(seq__45707_45992__$1);
var name_45999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45726_45998,(0),null);
var map__45729_46000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45726_45998,(1),null);
var map__45729_46001__$1 = cljs.core.__destructure_map(map__45729_46000);
var doc_46002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45729_46001__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45729_46001__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45999], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46003], 0));

if(cljs.core.truth_(doc_46002)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46002], 0));
} else {
}


var G__46004 = cljs.core.next(seq__45707_45992__$1);
var G__46005 = null;
var G__46006 = (0);
var G__46007 = (0);
seq__45707_45977 = G__46004;
chunk__45708_45978 = G__46005;
count__45709_45979 = G__46006;
i__45710_45980 = G__46007;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__45733 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45734 = null;
var count__45735 = (0);
var i__45736 = (0);
while(true){
if((i__45736 < count__45735)){
var role = chunk__45734.cljs$core$IIndexed$_nth$arity$2(null,i__45736);
var temp__5804__auto___46008__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___46008__$1)){
var spec_46009 = temp__5804__auto___46008__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46009)], 0));
} else {
}


var G__46010 = seq__45733;
var G__46011 = chunk__45734;
var G__46012 = count__45735;
var G__46013 = (i__45736 + (1));
seq__45733 = G__46010;
chunk__45734 = G__46011;
count__45735 = G__46012;
i__45736 = G__46013;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__45733);
if(temp__5804__auto____$1){
var seq__45733__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45733__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45733__$1);
var G__46015 = cljs.core.chunk_rest(seq__45733__$1);
var G__46016 = c__5568__auto__;
var G__46017 = cljs.core.count(c__5568__auto__);
var G__46018 = (0);
seq__45733 = G__46015;
chunk__45734 = G__46016;
count__45735 = G__46017;
i__45736 = G__46018;
continue;
} else {
var role = cljs.core.first(seq__45733__$1);
var temp__5804__auto___46019__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___46019__$2)){
var spec_46020 = temp__5804__auto___46019__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46020)], 0));
} else {
}


var G__46021 = cljs.core.next(seq__45733__$1);
var G__46022 = null;
var G__46023 = (0);
var G__46024 = (0);
seq__45733 = G__46021;
chunk__45734 = G__46022;
count__45735 = G__46023;
i__45736 = G__46024;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__46028 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__46029 = cljs.core.ex_cause(t);
via = G__46028;
t = G__46029;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__45855 = datafied_throwable;
var map__45855__$1 = cljs.core.__destructure_map(map__45855);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45855__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45855__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45855__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45856 = cljs.core.last(via);
var map__45856__$1 = cljs.core.__destructure_map(map__45856);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45856__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45856__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45856__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45857 = data;
var map__45857__$1 = cljs.core.__destructure_map(map__45857);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45857__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45857__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45857__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45858 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45858__$1 = cljs.core.__destructure_map(map__45858);
var top_data = map__45858__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45858__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45859 = phase;
var G__45859__$1 = (((G__45859 instanceof cljs.core.Keyword))?G__45859.fqn:null);
switch (G__45859__$1) {
case "read-source":
var map__45860 = data;
var map__45860__$1 = cljs.core.__destructure_map(map__45860);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45860__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45860__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45861 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45861__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45861,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45861);
var G__45861__$2 = (cljs.core.truth_((function (){var fexpr__45862 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45862.cljs$core$IFn$_invoke$arity$1 ? fexpr__45862.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45862.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45861__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45861__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45861__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45861__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45863 = top_data;
var G__45863__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45863,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45863);
var G__45863__$2 = (cljs.core.truth_((function (){var fexpr__45864 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45864.cljs$core$IFn$_invoke$arity$1 ? fexpr__45864.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45864.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45863__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45863__$1);
var G__45863__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45863__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45863__$2);
var G__45863__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45863__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45863__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45863__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45863__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45865 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45865,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45865,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45865,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45865,(3),null);
var G__45870 = top_data;
var G__45870__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45870,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45870);
var G__45870__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45870__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45870__$1);
var G__45870__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45870__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45870__$2);
var G__45870__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45870__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45870__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45870__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45870__$4;
}

break;
case "execution":
var vec__45873 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45873,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45873,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45873,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45873,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45854_SHARP_){
var or__5045__auto__ = (p1__45854_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__45878 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45878.cljs$core$IFn$_invoke$arity$1 ? fexpr__45878.cljs$core$IFn$_invoke$arity$1(p1__45854_SHARP_) : fexpr__45878.call(null,p1__45854_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__45879 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45879__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45879,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45879);
var G__45879__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45879__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45879__$1);
var G__45879__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45879__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45879__$2);
var G__45879__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45879__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45879__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45879__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45879__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45859__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45886){
var map__45887 = p__45886;
var map__45887__$1 = cljs.core.__destructure_map(map__45887);
var triage_data = map__45887__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45887__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45887__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45887__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45887__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45887__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45887__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45887__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45887__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__45888 = phase;
var G__45888__$1 = (((G__45888 instanceof cljs.core.Keyword))?G__45888.fqn:null);
switch (G__45888__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45889 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45890 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45891 = loc;
var G__45892 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45894_46063 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45895_46064 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45896_46065 = true;
var _STAR_print_fn_STAR__temp_val__45897_46066 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45896_46065);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45897_46066);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45881_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45881_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45895_46064);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45894_46063);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45889,G__45890,G__45891,G__45892) : format.call(null,G__45889,G__45890,G__45891,G__45892));

break;
case "macroexpansion":
var G__45906 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45907 = cause_type;
var G__45908 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45909 = loc;
var G__45910 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45906,G__45907,G__45908,G__45909,G__45910) : format.call(null,G__45906,G__45907,G__45908,G__45909,G__45910));

break;
case "compile-syntax-check":
var G__45911 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45912 = cause_type;
var G__45913 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45914 = loc;
var G__45915 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45911,G__45912,G__45913,G__45914,G__45915) : format.call(null,G__45911,G__45912,G__45913,G__45914,G__45915));

break;
case "compilation":
var G__45916 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45917 = cause_type;
var G__45918 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45919 = loc;
var G__45920 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45916,G__45917,G__45918,G__45919,G__45920) : format.call(null,G__45916,G__45917,G__45918,G__45919,G__45920));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45921 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45922 = symbol;
var G__45923 = loc;
var G__45924 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45925_46082 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45926_46083 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45927_46084 = true;
var _STAR_print_fn_STAR__temp_val__45928_46085 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45927_46084);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45928_46085);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45885_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45885_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45926_46083);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45925_46082);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45921,G__45922,G__45923,G__45924) : format.call(null,G__45921,G__45922,G__45923,G__45924));
} else {
var G__45929 = "Execution error%s at %s(%s).\n%s\n";
var G__45930 = cause_type;
var G__45931 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45932 = loc;
var G__45933 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45929,G__45930,G__45931,G__45932,G__45933) : format.call(null,G__45929,G__45930,G__45931,G__45932,G__45933));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45888__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
