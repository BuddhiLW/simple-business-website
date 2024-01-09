goog.provide('playground.recipes.views.recipe_image');
var module$node_modules$$mui$material$node$index=shadow.js.require("module$node_modules$$mui$material$node$index", {});
playground.recipes.views.recipe_image.recipe_img = (function playground$recipes$views$recipe_image$recipe_img(){
var initial_values = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"img","img",1442687358),""], null);
var values = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(initial_values);
var author_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe","author?","recipe/author?",355827139)], null)));
var save = (function (e,p__50665){
var map__50666 = p__50665;
var map__50666__$1 = cljs.core.__destructure_map(map__50666);
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50666__$1,new cljs.core.Keyword(null,"img","img",1442687358));
e.preventDefault();

if((!(clojure.string.blank_QMARK_(img)))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe","upsert-image","recipe/upsert-image",-933247862),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"img","img",1442687358),img], null)], null));

return cljs.core.reset_BANG_(values,initial_values);
} else {
return null;
}
});
var open_modal = (function (p__50667){
var map__50668 = p__50667;
var map__50668__$1 = cljs.core.__destructure_map(map__50668);
var modal_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50668__$1,new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394));
var recipe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50668__$1,new cljs.core.Keyword(null,"recipe","recipe",-17826617));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipes","open-modal","recipes/open-modal",-113980987),modal_name], null));

return cljs.core.reset_BANG_(values,recipe);
});
return (function (){
var map__50669 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipes","recipe","recipes/recipe",1047767396)], null)));
var map__50669__$1 = cljs.core.__destructure_map(map__50669);
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50669__$1,new cljs.core.Keyword("recipe","img","recipe/img",108023284));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50669__$1,new cljs.core.Keyword("recipe","name","recipe/name",639772091));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Card,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"p","p",151049309),(2),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),(10),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"10px"], null),new cljs.core.Keyword(null,"class-name","class-name",945142584),"hover:shadow-2xl"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.CardMedia,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(author_QMARK_)?"editable":null),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(500),new cljs.core.Keyword(null,"width","width",-384071477),(600)], null),new cljs.core.Keyword(null,"image","image",-58725096),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = img;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "../img/placeholder.jpg";
}
})()),new cljs.core.Keyword(null,"alt","alt",-3214426),name,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(author_QMARK_)?(function (){
return open_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394),new cljs.core.Keyword(null,"image-editor","image-editor",-2051753721),new cljs.core.Keyword(null,"recipe","recipe",-17826617),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"img","img",1442687358),img], null)], null));
}):null)], null)], null)], null),(cljs.core.truth_(author_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.components.modal.modal,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"modal-key","modal-key",-1201166068),new cljs.core.Keyword(null,"image-editor","image-editor",-2051753721),new cljs.core.Keyword(null,"title","title",636505583),"Image",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__50662_SHARP_){
return save(p1__50662_SHARP_,values);
}),new cljs.core.Keyword(null,"class-name","class-name",945142584),"w-full"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p","p",151049309),(5),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.components.form_group.form_group,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"label","label",1718410804),"URL",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"values","values",372645556),values,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__50663_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__50663_SHARP_.which,(13))){
return save(p1__50663_SHARP_,values);
} else {
return null;
}
})], null)], null)], null)], null),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"px","px",281329899),(5),new cljs.core.Keyword(null,"py","py",1397985916),(3),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"18px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),(10)], null),new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$$mui$material$node$index.colors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grey","grey",1875582333),new cljs.core.Keyword(null,"100","100",943295053)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"color","color",1011675173),"warning",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipes","close-modal","recipes/close-modal",-833326660)], null));
})], null),"Cancel"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__50664_SHARP_){
return save(p1__50664_SHARP_,values);
})], null),"Save"], null)], null)], null)], null):null)], null);
});
});

//# sourceMappingURL=playground.recipes.views.recipe_image.js.map
