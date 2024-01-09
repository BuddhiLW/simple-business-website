goog.provide('playground.recipes.views.recipe_list');
var module$node_modules$$mui$material$node$index=shadow.js.require("module$node_modules$$mui$material$node$index", {});
playground.recipes.views.recipe_list.recipe_list = (function playground$recipes$views$recipe_list$recipe_list(recipes){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1)], null),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"start"], null),(function (){var iter__5523__auto__ = (function playground$recipes$views$recipe_list$recipe_list_$_iter__50430(s__50431){
return (new cljs.core.LazySeq(null,(function (){
var s__50431__$1 = s__50431;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__50431__$1);
if(temp__5804__auto__){
var s__50431__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50431__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__50431__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__50433 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__50432 = (0);
while(true){
if((i__50432 < size__5522__auto__)){
var recipe = cljs.core._nth(c__5521__auto__,i__50432);
cljs.core.chunk_append(b__50433,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.recipes.views.recipe_card.recipe_card,recipe], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(recipe)], null)));

var G__50434 = (i__50432 + (1));
i__50432 = G__50434;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50433),playground$recipes$views$recipe_list$recipe_list_$_iter__50430(cljs.core.chunk_rest(s__50431__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50433),null);
}
} else {
var recipe = cljs.core.first(s__50431__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.recipes.views.recipe_card.recipe_card,recipe], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(recipe)], null)),playground$recipes$views$recipe_list$recipe_list_$_iter__50430(cljs.core.rest(s__50431__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(recipes);
})()], null);
});

//# sourceMappingURL=playground.recipes.views.recipe_list.js.map
