goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__50496 = libspec;
var seq__50497 = cljs.core.seq(vec__50496);
var first__50499 = cljs.core.first(seq__50497);
var seq__50497__$1 = cljs.core.next(seq__50497);
var lib = first__50499;
var spec = seq__50497__$1;
var libspec__$1 = vec__50496;
var vec__50502 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50502,(0),null);
var vec__50505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50502,(1),null);
var seq__50506 = cljs.core.seq(vec__50505);
var first__50507 = cljs.core.first(seq__50506);
var seq__50506__$1 = cljs.core.next(seq__50506);
var _ = first__50507;
var first__50507__$1 = cljs.core.first(seq__50506__$1);
var seq__50506__$2 = cljs.core.next(seq__50506__$1);
var alias = first__50507__$1;
var post_spec = seq__50506__$2;
var post = vec__50505;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__50516 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50516,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__50516;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__50521 = cljs.core.seq(new_as_aliases);
var chunk__50522 = null;
var count__50523 = (0);
var i__50524 = (0);
while(true){
if((i__50524 < count__50523)){
var vec__50549 = chunk__50522.cljs$core$IIndexed$_nth$arity$2(null,i__50524);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50549,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50549,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__50586 = seq__50521;
var G__50587 = chunk__50522;
var G__50588 = count__50523;
var G__50589 = (i__50524 + (1));
seq__50521 = G__50586;
chunk__50522 = G__50587;
count__50523 = G__50588;
i__50524 = G__50589;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50521);
if(temp__5804__auto__){
var seq__50521__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50521__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50521__$1);
var G__50590 = cljs.core.chunk_rest(seq__50521__$1);
var G__50591 = c__5568__auto__;
var G__50592 = cljs.core.count(c__5568__auto__);
var G__50593 = (0);
seq__50521 = G__50590;
chunk__50522 = G__50591;
count__50523 = G__50592;
i__50524 = G__50593;
continue;
} else {
var vec__50552 = cljs.core.first(seq__50521__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50552,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50552,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__50596 = cljs.core.next(seq__50521__$1);
var G__50597 = null;
var G__50598 = (0);
var G__50599 = (0);
seq__50521 = G__50596;
chunk__50522 = G__50597;
count__50523 = G__50598;
i__50524 = G__50599;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__50559 = arguments.length;
switch (G__50559) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__50576 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__50576__$1 = cljs.core.__destructure_map(map__50576);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50576__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50576__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__50577 = ret__$1;
var G__50577__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50577,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__50577);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50577__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__50577__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__50578,p__50579){
var map__50580 = p__50578;
var map__50580__$1 = cljs.core.__destructure_map(map__50580);
var ret__$1 = map__50580__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50580__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__50581 = p__50579;
var seq__50582 = cljs.core.seq(vec__50581);
var first__50583 = cljs.core.first(seq__50582);
var seq__50582__$1 = cljs.core.next(seq__50582);
var spec_key = first__50583;
var libspecs = seq__50582__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__50584 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__50584__$1 = cljs.core.__destructure_map(map__50584);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50584__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50584__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__50585 = ret__$1;
var G__50585__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50585,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__50585);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50585__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__50585__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
