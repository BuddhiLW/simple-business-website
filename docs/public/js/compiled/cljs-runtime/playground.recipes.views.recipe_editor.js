goog.provide('playground.recipes.views.recipe_editor');
var module$node_modules$$mui$icons_material$AddCircleOutline=shadow.js.require("module$node_modules$$mui$icons_material$AddCircleOutline", {});
var module$node_modules$$mui$material$node$index=shadow.js.require("module$node_modules$$mui$material$node$index", {});
playground.recipes.views.recipe_editor.modal_recipe_editor = (function playground$recipes$views$recipe_editor$modal_recipe_editor(p__49179){
var map__49181 = p__49179;
var map__49181__$1 = cljs.core.__destructure_map(map__49181);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49181__$1,new cljs.core.Keyword(null,"values","values",372645556));
var save = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49181__$1,new cljs.core.Keyword(null,"save","save",1850079149));
return playground.components.modal.modal(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"modal-key","modal-key",-1201166068),new cljs.core.Keyword(null,"recipe-editor","recipe-editor",-1313452010),new cljs.core.Keyword(null,"title","title",636505583),"Edit Recipe",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"p","p",151049309),(5),new cljs.core.Keyword(null,"pt","pt",556460867),(0),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"class-name","class-name",945142584),"w-full"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__49173_SHARP_){
var G__49183 = p1__49173_SHARP_;
var G__49184 = cljs.core.deref(values);
return (save.cljs$core$IFn$_invoke$arity$2 ? save.cljs$core$IFn$_invoke$arity$2(G__49183,G__49184) : save.call(null,G__49183,G__49184));
}),new cljs.core.Keyword(null,"class-name","class-name",945142584),"w-full"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"fullWidth","fullWidth",-1436357554),true,new cljs.core.Keyword(null,"class-name","class-name",945142584),"w-full",new cljs.core.Keyword(null,"gap","gap",80255254),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.components.form_group.form_group,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804),"Name",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"values","values",372645556),values], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.components.form_group.form_group,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"prep-time","prep-time",-2097570172),new cljs.core.Keyword(null,"label","label",1718410804),"Cooking time (min)",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"values","values",372645556),values,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__49174_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__49174_SHARP_.which,(13))){
var G__49186 = p1__49174_SHARP_;
var G__49187 = cljs.core.deref(values);
return (save.cljs$core$IFn$_invoke$arity$2 ? save.cljs$core$IFn$_invoke$arity$2(G__49186,G__49187) : save.call(null,G__49186,G__49187));
} else {
return null;
}
})], null)], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"px","px",281329899),(5),new cljs.core.Keyword(null,"py","py",1397985916),(3),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"18px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),(10)], null),new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$$mui$material$node$index.colors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grey","grey",1875582333),new cljs.core.Keyword(null,"100","100",943295053)], null))], null),(function (){var temp__5804__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipes","recipe","recipes/recipe",1047767396),new cljs.core.Keyword(null,"author?","author?",-1083349935)], null)));
if(cljs.core.truth_(temp__5804__auto__)){
var author_QMARK_ = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$$mui$material$node$index.colors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"600","600",452917180)], null))], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(confirm("Are you sure?"))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe","delete-recipe","recipe/delete-recipe",1883680065)], null));
} else {
return null;
}
})], null),"Delete"], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"color","color",1011675173),"warning",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipes","close-modal","recipes/close-modal",-833326660)], null));
})], null),"Cancel"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__49176_SHARP_){
var G__49221 = p1__49176_SHARP_;
var G__49222 = cljs.core.deref(values);
return (save.cljs$core$IFn$_invoke$arity$2 ? save.cljs$core$IFn$_invoke$arity$2(G__49221,G__49222) : save.call(null,G__49221,G__49222));
})], null),"Save"], null)], null)], null));
});
playground.recipes.views.recipe_editor.recipe_editor = (function playground$recipes$views$recipe_editor$recipe_editor(){
var initial_values = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"prep-time","prep-time",-2097570172),""], null);
var values = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(initial_values);
var open_modal = (function (p__49223){
var map__49224 = p__49223;
var map__49224__$1 = cljs.core.__destructure_map(map__49224);
var modal_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49224__$1,new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394));
var recipe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49224__$1,new cljs.core.Keyword(null,"recipe","recipe",-17826617));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipes","open-modal","recipes/open-modal",-113980987),modal_name], null));

return cljs.core.reset_BANG_(values,recipe);
});
var save = (function (e,p__49241){
var map__49242 = p__49241;
var map__49242__$1 = cljs.core.__destructure_map(map__49242);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49242__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var prep_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49242__$1,new cljs.core.Keyword(null,"prep-time","prep-time",-2097570172));
e.preventDefault();

if((((!(clojure.string.blank_QMARK_(name)))) && (playground.helpers.valid_number(prep_time)))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe","save-recipe","recipe/save-recipe",238744640),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"prep-time","prep-time",-2097570172),prep_time], null)], null));

return cljs.core.reset_BANG_(values,initial_values);
} else {
return null;
}
});
return (function (){
var map__49244 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipes","recipe","recipes/recipe",1047767396)], null)));
var map__49244__$1 = cljs.core.__destructure_map(map__49244);
var recipe = map__49244__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49244__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var prep_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49244__$1,new cljs.core.Keyword(null,"prep-time","prep-time",-2097570172));
var active_page = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-page","active-page",370357330)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item","item",249373802),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.recipes.views.recipe_editor.modal_recipe_editor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"values","values",372645556),values,new cljs.core.Keyword(null,"save","save",1850079149),save], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,new cljs.core.Keyword(null,"recipe","recipe",-17826617)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),playground.utilites.color(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indigo","indigo",-280252374),new cljs.core.Keyword(null,"700","700",-54226475)], null)),"&:hover",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),playground.utilites.color(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pink","pink",393815864),new cljs.core.Keyword(null,"500","500",-2074771382)], null))], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Typography,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h2",new cljs.core.Keyword(null,"as","as",1148689641),"a",new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(700),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return open_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394),new cljs.core.Keyword(null,"recipe-editor","recipe-editor",-1313452010),new cljs.core.Keyword(null,"recipe","recipe",-17826617),recipe], null));
})], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.IconButton,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipes","open-modal","recipes/open-modal",-113980987),new cljs.core.Keyword(null,"recipe-editor","recipe-editor",-1313452010)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$icons_material$AddCircleOutline.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em"], null)], null)], null)], null))], null);
});
});

//# sourceMappingURL=playground.recipes.views.recipe_editor.js.map
