goog.provide('playground.recipes.views.recipe_ingredients');
var module$node_modules$$mui$icons_material$AddCircleOutline=shadow.js.require("module$node_modules$$mui$icons_material$AddCircleOutline", {});
var module$node_modules$$mui$icons_material$Create=shadow.js.require("module$node_modules$$mui$icons_material$Create", {});
var module$node_modules$$mui$icons_material$DeleteOutline=shadow.js.require("module$node_modules$$mui$icons_material$DeleteOutline", {});
var module$node_modules$$mui$material$node$index=shadow.js.require("module$node_modules$$mui$material$node$index", {});
playground.recipes.views.recipe_ingredients.ingredients_modal = (function playground$recipes$views$recipe_ingredients$ingredients_modal(p__50675){
var map__50676 = p__50675;
var map__50676__$1 = cljs.core.__destructure_map(map__50676);
var save = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50676__$1,new cljs.core.Keyword(null,"save","save",1850079149));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50676__$1,new cljs.core.Keyword(null,"values","values",372645556));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.components.modal.modal,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"modal-key","modal-key",-1201166068),new cljs.core.Keyword(null,"ingredient-editor","ingredient-editor",-375505998),new cljs.core.Keyword(null,"title","title",636505583),"Ingredient",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__50672_SHARP_){
var G__50677 = p1__50672_SHARP_;
var G__50678 = cljs.core.deref(values);
return (save.cljs$core$IFn$_invoke$arity$2 ? save.cljs$core$IFn$_invoke$arity$2(G__50677,G__50678) : save.call(null,G__50677,G__50678));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p","p",151049309),(5),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.FormControl,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),"fieldset",new cljs.core.Keyword(null,"variant","variant",-424354234),"standard",new cljs.core.Keyword(null,"fullWidth","fullWidth",-1436357554),true,new cljs.core.Keyword(null,"margin","margin",-995903681),"normal",new cljs.core.Keyword(null,"size","size",1098693007),"small"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.components.form_group.form_group,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804),"Name",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"values","values",372645556),values], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.components.form_group.form_group,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"label","label",1718410804),"Amount",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"values","values",372645556),values], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.components.form_group.form_group,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"measure","measure",-1857519826),new cljs.core.Keyword(null,"label","label",1718410804),"Measure",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"values","values",372645556),values,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__50673_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__50673_SHARP_.which,(13))){
var G__50679 = p1__50673_SHARP_;
var G__50680 = cljs.core.deref(values);
return (save.cljs$core$IFn$_invoke$arity$2 ? save.cljs$core$IFn$_invoke$arity$2(G__50679,G__50680) : save.call(null,G__50679,G__50680));
} else {
return null;
}
})], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"px","px",281329899),(5),new cljs.core.Keyword(null,"py","py",1397985916),(3),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"18px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),(10)], null),new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$$mui$material$node$index.colors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grey","grey",1875582333),new cljs.core.Keyword(null,"100","100",943295053)], null))], null),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(values));
if(cljs.core.truth_(temp__5804__auto__)){
var ingredient_id = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"color","color",1011675173),"warning",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(confirm("Are you sure?"))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe","delete-ingredient","recipe/delete-ingredient",1388411881),ingredient_id], null));
} else {
return null;
}
})], null),"Delete"], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"color","color",1011675173),"warning",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipes","close-modal","recipes/close-modal",-833326660)], null));
})], null),"Cancel"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__50674_SHARP_){
var G__50681 = p1__50674_SHARP_;
var G__50682 = cljs.core.deref(values);
return (save.cljs$core$IFn$_invoke$arity$2 ? save.cljs$core$IFn$_invoke$arity$2(G__50681,G__50682) : save.call(null,G__50681,G__50682));
})], null),"Save"], null)], null)], null)], null);
});
playground.recipes.views.recipe_ingredients.ingredient_comp = (function playground$recipes$views$recipe_ingredients$ingredient_comp(p__50685,open_modal){
var map__50686 = p__50685;
var map__50686__$1 = cljs.core.__destructure_map(map__50686);
var ingredient = map__50686__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50686__$1,new cljs.core.Keyword("recipe","id","recipe/id",-166656858));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50686__$1,new cljs.core.Keyword("recipe","name","recipe/name",639772091));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50686__$1,new cljs.core.Keyword("recipe","amount","recipe/amount",1299191434));
var measure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50686__$1,new cljs.core.Keyword("recipe","measure","recipe/measure",-645780828));
return (function (){
var author_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe","author?","recipe/author?",355827139)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"p","p",151049309),(2),new cljs.core.Keyword(null,"m","m",1632677161),(1),new cljs.core.Keyword(null,"mx","mx",-199887020),(3),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"18px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),(10),new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$$mui$material$node$index.colors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grey","grey",1875582333),new cljs.core.Keyword(null,"100","100",943295053)], null)),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"px","px",281329899),(2),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item","item",249373802),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Typography,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h5",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(700),new cljs.core.Keyword(null,"class-name","class-name",945142584),"text-slate-700"], null),name], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item","item",249373802),true], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Typography,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"body2",new cljs.core.Keyword(null,"color","color",1011675173),"text.secondary"], null),amount," ",measure], null)], null)], null),(cljs.core.truth_(author_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"right",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.IconButton,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__50696 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-key","modal-key",-1201166068),new cljs.core.Keyword(null,"ingredient-editor","ingredient-editor",-375505998),new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),ingredient], null);
return (open_modal.cljs$core$IFn$_invoke$arity$1 ? open_modal.cljs$core$IFn$_invoke$arity$1(G__50696) : open_modal.call(null,G__50696));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$icons_material$Create.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2rem"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.IconButton,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(confirm("Are you sure you want to delete?"))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe","delete-ingredient","recipe/delete-ingredient",1388411881),id], null));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$icons_material$DeleteOutline.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"warning",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2rem"], null)], null)], null)], null)], null):null)], null)], null);
});
});
playground.recipes.views.recipe_ingredients.header_ingredients = (function playground$recipes$views$recipe_ingredients$header_ingredients(p__50709){
var map__50710 = p__50709;
var map__50710__$1 = cljs.core.__destructure_map(map__50710);
var open_modal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50710__$1,new cljs.core.Keyword(null,"open-modal","open-modal",947793572));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50710__$1,new cljs.core.Keyword(null,"values","values",372645556));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"spacing","spacing",204422175),(2),new cljs.core.Keyword(null,"p","p",151049309),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Typography,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"p","p",151049309),(2),new cljs.core.Keyword(null,"variant","variant",-424354234),"h4",new cljs.core.Keyword(null,"component","component",1555936782),"h4",new cljs.core.Keyword(null,"align","align",1964212802),"center",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(500),new cljs.core.Keyword(null,"class-name","class-name",945142584),"text-slate-700"], null),"Ingredients"], null),(function (){var temp__5804__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe","author?","recipe/author?",355827139)], null)));
if(cljs.core.truth_(temp__5804__auto__)){
var author_QMARK_ = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.IconButton,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__50713 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-key","modal-key",-1201166068),new cljs.core.Keyword(null,"ingredient-editor","ingredient-editor",-375505998),new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),values], null);
return (open_modal.cljs$core$IFn$_invoke$arity$1 ? open_modal.cljs$core$IFn$_invoke$arity$1(G__50713) : open_modal.call(null,G__50713));
}),new cljs.core.Keyword(null,"class-name","class-name",945142584),"text-slate-700"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$icons_material$AddCircleOutline.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2rem"], null)], null)], null)], null)], null);
} else {
return null;
}
})()], null);
});
playground.recipes.views.recipe_ingredients.ingredients = (function playground$recipes$views$recipe_ingredients$ingredients(){
var initial_values = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"amount","amount",364489504),"",new cljs.core.Keyword(null,"measure","measure",-1857519826),""], null);
var values = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(initial_values);
var open_modal = (function (p__50721){
var map__50722 = p__50721;
var map__50722__$1 = cljs.core.__destructure_map(map__50722);
var modal_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50722__$1,new cljs.core.Keyword(null,"modal-key","modal-key",-1201166068));
var ingredient = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50722__$1,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipes","open-modal","recipes/open-modal",-113980987),modal_key], null));

return cljs.core.reset_BANG_(values,ingredient);
});
var save = (function (e,p__50723){
var map__50724 = p__50723;
var map__50724__$1 = cljs.core.__destructure_map(map__50724);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50724__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50724__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50724__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var measure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50724__$1,new cljs.core.Keyword(null,"measure","measure",-1857519826));
e.preventDefault();

if((((!(clojure.string.blank_QMARK_(name)))) && (((playground.helpers.valid_number(amount)) && ((!(clojure.string.blank_QMARK_(measure)))))))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe","save-ingredient","recipe/save-ingredient",1585790349),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__5045__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["ingredient-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join(''));
}
})(),new cljs.core.Keyword(null,"name","name",1843675177),clojure.string.trim(name),new cljs.core.Keyword(null,"amount","amount",364489504),parseInt(amount),new cljs.core.Keyword(null,"measure","measure",-1857519826),clojure.string.trim(measure)], null)], null));

return cljs.core.reset_BANG_(values,initial_values);
} else {
return null;
}
});
return (function (){
var ingredients = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe","ingredients","recipe/ingredients",-651240419)], null)));
var author_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe","author?","recipe/author?",355827139)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(author_QMARK_)?null:null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pt","pt",556460867),(2),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"class-name","class-name",945142584),"flex-wrap"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Paper,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"p","p",151049309),(2),new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"pl","pl",-1690940563),(2),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"10px"], null),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"class-name","class-name",945142584),"flex-wrap"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"spacing","spacing",204422175),(2),new cljs.core.Keyword(null,"pl","pl",-1690940563),(2),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"10px",new cljs.core.Keyword(null,"class-name","class-name",945142584),"flex-wrap",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),(0),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"600px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"w-full border-0 h-px my-2 bg-gray-200 dark:bg-gray-700"], null)], null)], null)], null)], null)], null);
});
});

//# sourceMappingURL=playground.recipes.views.recipe_ingredients.js.map
