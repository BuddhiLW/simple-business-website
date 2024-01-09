goog.provide('playground.recipes.views.publish_recipe');
var module$node_modules$$mui$material$node$index=shadow.js.require("module$node_modules$$mui$material$node$index", {});
playground.recipes.views.publish_recipe.public_recipe_modal = (function playground$recipes$views$publish_recipe$public_recipe_modal(p__50193){
var map__50194 = p__50193;
var map__50194__$1 = cljs.core.__destructure_map(map__50194);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50194__$1,new cljs.core.Keyword(null,"values","values",372645556));
return (function (){
var publish = (function (e,p__50195){
var map__50196 = p__50195;
var map__50196__$1 = cljs.core.__destructure_map(map__50196);
var price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50196__$1,new cljs.core.Keyword(null,"price","price",22129180));
e.preventDefault();

if(playground.helpers.valid_number(price)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe","publish","recipe/publish",1645651476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"price","price",22129180),parseInt(price)], null)], null));

return cljs.core.reset_BANG_(values,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"price","price",22129180),""], null));
} else {
return null;
}
});
return playground.components.modal.modal(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"modal-key","modal-key",-1201166068),new cljs.core.Keyword(null,"publish-recipe","publish-recipe",53101208),new cljs.core.Keyword(null,"title","title",636505583),"Publish Recipe",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null),new cljs.core.Keyword(null,"pb","pb",-1523127746),(5),new cljs.core.Keyword(null,"pt","pt",556460867),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

return publish(e,cljs.core.deref(values));
}),new cljs.core.Keyword(null,"class-name","class-name",945142584),"w-full"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"direction","direction",-633359395),"column",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null),new cljs.core.Keyword(null,"pb","pb",-1523127746),(5),new cljs.core.Keyword(null,"px","px",281329899),(5),new cljs.core.Keyword(null,"pt","pt",556460867),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.components.form_group.form_group,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"price","price",22129180),new cljs.core.Keyword(null,"label","label",1718410804),"Price",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"values","values",372645556),values,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__50189_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__50189_SHARP_.which,(13))){
return publish(p1__50189_SHARP_,cljs.core.deref(values));
} else {
return null;
}
})], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"footer","footer",1606445390),(function (){
var public_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe","public?","recipe/public?",-147823197)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"px","px",281329899),(5),new cljs.core.Keyword(null,"py","py",1397985916),(3),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"18px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),(10)], null),new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),playground.utilites.color(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grey","grey",1875582333),new cljs.core.Keyword(null,"100","100",943295053)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"color","color",1011675173),"warning",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipes","close-modal","recipes/close-modal",-833326660)], null));
})], null),"Cancel"], null),(cljs.core.truth_(public_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),playground.utilites.color(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"500","500",-2074771382)], null))], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe","unpublish","recipe/unpublish",1683516752)], null));
})], null),"Unpublish"], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__50190_SHARP_){
return publish(p1__50190_SHARP_,cljs.core.deref(values));
})], null),"Publish"], null))], null)], null);
})], null));
});
});
playground.recipes.views.publish_recipe.publish_recipe = (function playground$recipes$views$publish_recipe$publish_recipe(){
var initial_values = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"price","price",22129180),""], null);
var values = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(initial_values);
var open_modal = (function (p__50201){
var map__50202 = p__50201;
var map__50202__$1 = cljs.core.__destructure_map(map__50202);
var modal_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50202__$1,new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394));
var recipe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50202__$1,new cljs.core.Keyword(null,"recipe","recipe",-17826617));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipes","open-modal","recipes/open-modal",-113980987),modal_name], null));

return cljs.core.reset_BANG_(values,(cljs.core.truth_(recipe)?recipe:initial_values));
});
return (function (){
var map__50203 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipes","recipe","recipes/recipe",1047767396)], null)));
var map__50203__$1 = cljs.core.__destructure_map(map__50203);
var price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50203__$1,new cljs.core.Keyword(null,"price","price",22129180));
var public_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe","public?","recipe/public?",-147823197)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,(cljs.core.truth_(public_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return open_modal(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394),new cljs.core.Keyword(null,"publish-recipe","publish-recipe",53101208)], null));
}),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),playground.utilites.color(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"500","500",-2074771382)], null)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),playground.helpers.format_price(price)], null):((cljs.core.not(public_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return open_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394),new cljs.core.Keyword(null,"publish-recipe","publish-recipe",53101208),new cljs.core.Keyword(null,"recipe","recipe",-17826617),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"price","price",22129180),price], null)], null));
}),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),playground.utilites.color(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"500","500",-2074771382)], null)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),"Publish"], null):null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.recipes.views.publish_recipe.public_recipe_modal,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),values], null)], null)], null);
});
});

//# sourceMappingURL=playground.recipes.views.publish_recipe.js.map
