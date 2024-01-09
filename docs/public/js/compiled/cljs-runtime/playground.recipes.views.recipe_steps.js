goog.provide('playground.recipes.views.recipe_steps');
var module$node_modules$$mui$icons_material$Create=shadow.js.require("module$node_modules$$mui$icons_material$Create", {});
var module$node_modules$$mui$icons_material$DeleteOutline=shadow.js.require("module$node_modules$$mui$icons_material$DeleteOutline", {});
var module$node_modules$$mui$material$node$index=shadow.js.require("module$node_modules$$mui$material$node$index", {});
playground.recipes.views.recipe_steps.modal_step_editor = (function playground$recipes$views$recipe_steps$modal_step_editor(p__50683){
var map__50684 = p__50683;
var map__50684__$1 = cljs.core.__destructure_map(map__50684);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50684__$1,new cljs.core.Keyword(null,"values","values",372645556));
var save = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50684__$1,new cljs.core.Keyword(null,"save","save",1850079149));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.components.modal.modal,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"modal-key","modal-key",-1201166068),new cljs.core.Keyword(null,"step-editor","step-editor",1799616437),new cljs.core.Keyword(null,"title","title",636505583),"Describe the step",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p","p",151049309),(5),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.FormControl,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),"fieldset",new cljs.core.Keyword(null,"variant","variant",-424354234),"standard",new cljs.core.Keyword(null,"fullWidth","fullWidth",-1436357554),true,new cljs.core.Keyword(null,"margin","margin",-995903681),"normal",new cljs.core.Keyword(null,"size","size",1098693007),"small"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.components.form_group.form_group,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"label","label",1718410804),"Description",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"text-area?","text-area?",1502915631),true,new cljs.core.Keyword(null,"values","values",372645556),values], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"px","px",281329899),(5),new cljs.core.Keyword(null,"py","py",1397985916),(3),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"18px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),(10)], null),new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$$mui$material$node$index.colors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grey","grey",1875582333),new cljs.core.Keyword(null,"100","100",943295053)], null))], null),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(values));
if(cljs.core.truth_(temp__5804__auto__)){
var step_id = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"color","color",1011675173),"warning",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(confirm("Are you sure?"))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe","delete-step","recipe/delete-step",-95434783),step_id], null));
} else {
return null;
}
})], null),"Delete"], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"color","color",1011675173),"warning",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipes","close-modal","recipes/close-modal",-833326660)], null));
})], null),"Cancel"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__50687 = cljs.core.deref(values);
return (save.cljs$core$IFn$_invoke$arity$1 ? save.cljs$core$IFn$_invoke$arity$1(G__50687) : save.call(null,G__50687));
})], null),"Save"], null)], null)], null)], null);
});
playground.recipes.views.recipe_steps.recipe_steps = (function playground$recipes$views$recipe_steps$recipe_steps(){
var initial_values = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"order","order",-1254677256),"",new cljs.core.Keyword(null,"desc","desc",2093485764),""], null);
var values = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(initial_values);
var open_modal = (function (p__50691){
var map__50692 = p__50691;
var map__50692__$1 = cljs.core.__destructure_map(map__50692);
var modal_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50692__$1,new cljs.core.Keyword(null,"modal-key","modal-key",-1201166068));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50692__$1,new cljs.core.Keyword(null,"step","step",1288888124));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipes","open-modal","recipes/open-modal",-113980987),modal_key], null));

return cljs.core.reset_BANG_(values,step);
});
var save = (function (p__50694){
var map__50695 = p__50694;
var map__50695__$1 = cljs.core.__destructure_map(map__50695);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50695__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50695__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50695__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
if((!(clojure.string.blank_QMARK_(desc)))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe","save-step","recipe/save-step",-884748105),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__5045__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["step-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join(''));
}
})(),new cljs.core.Keyword(null,"order","order",-1254677256),order,new cljs.core.Keyword(null,"desc","desc",2093485764),desc], null)], null));

return cljs.core.reset_BANG_(values,initial_values);
} else {
return null;
}
});
return (function (){
var steps = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe","steps","recipe/steps",875960540)], null)));
var author_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe","author?","recipe/author?",355827139)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"xs","xs",649443341),(6),new cljs.core.Keyword(null,"sm","sm",-1402575065),(6),new cljs.core.Keyword(null,"md","md",707286655),(6),new cljs.core.Keyword(null,"lg","lg",-80787836),(7),new cljs.core.Keyword(null,"xl","xl",-1689552936),(8)], null),(cljs.core.truth_(author_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.recipes.views.recipe_steps.modal_step_editor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"values","values",372645556),values,new cljs.core.Keyword(null,"save","save",1850079149),save], null)], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Paper,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"100%"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(cljs.core.truth_(author_QMARK_)?(11):(12)),new cljs.core.Keyword(null,"pb","pb",-1523127746),(0),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Typography,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h4",new cljs.core.Keyword(null,"align","align",1964212802),"center",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(500),new cljs.core.Keyword(null,"class-name","class-name",945142584),"text-slate-700"], null),"Preparation"], null)], null),(cljs.core.truth_(author_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"xs","xs",649443341),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.IconButton,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return open_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-key","modal-key",-1201166068),new cljs.core.Keyword(null,"step-editor","step-editor",1799616437),new cljs.core.Keyword(null,"step","step",1288888124),initial_values], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$icons_material$Create.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2rem"], null)], null)], null)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"w-full border-0 h-px my-2 bg-gray-200 dark:bg-gray-700"], null)], null)], null),(function (){var iter__5523__auto__ = (function playground$recipes$views$recipe_steps$recipe_steps_$_iter__50697(s__50698){
return (new cljs.core.LazySeq(null,(function (){
var s__50698__$1 = s__50698;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__50698__$1);
if(temp__5804__auto__){
var s__50698__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50698__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__50698__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__50700 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__50699 = (0);
while(true){
if((i__50699 < size__5522__auto__)){
var vec__50705 = cljs.core._nth(c__5521__auto__,i__50699);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50705,(0),null);
var map__50708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50705,(1),null);
var map__50708__$1 = cljs.core.__destructure_map(map__50708);
var values__$1 = map__50708__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50708__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50708__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
cljs.core.chunk_append(b__50700,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"direction","direction",-633359395),"row",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(6),new cljs.core.Keyword(null,"px","px",281329899),(3)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Typography,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h4",new cljs.core.Keyword(null,"class-name","class-name",945142584),"text-slate-600"], null),"Step ",(index + (1))], null)], null),(cljs.core.truth_(author_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end"], null),new cljs.core.Keyword(null,"pr","pr",-583594500),(4),new cljs.core.Keyword(null,"xs","xs",649443341),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.IconButton,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__50699,vec__50705,index,map__50708,map__50708__$1,values__$1,id,desc,c__5521__auto__,size__5522__auto__,b__50700,s__50698__$2,temp__5804__auto__,steps,author_QMARK_,initial_values,values,open_modal,save){
return (function (){
return open_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-key","modal-key",-1201166068),new cljs.core.Keyword(null,"step-editor","step-editor",1799616437),new cljs.core.Keyword(null,"step","step",1288888124),values__$1], null));
});})(i__50699,vec__50705,index,map__50708,map__50708__$1,values__$1,id,desc,c__5521__auto__,size__5522__auto__,b__50700,s__50698__$2,temp__5804__auto__,steps,author_QMARK_,initial_values,values,open_modal,save))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$icons_material$Create.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2rem"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.IconButton,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__50699,vec__50705,index,map__50708,map__50708__$1,values__$1,id,desc,c__5521__auto__,size__5522__auto__,b__50700,s__50698__$2,temp__5804__auto__,steps,author_QMARK_,initial_values,values,open_modal,save){
return (function (){
if(cljs.core.truth_(confirm("Are you sure you want to delete?"))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe","delete-step","recipe/delete-step",-95434783),id], null));
} else {
return null;
}
});})(i__50699,vec__50705,index,map__50708,map__50708__$1,values__$1,id,desc,c__5521__auto__,size__5522__auto__,b__50700,s__50698__$2,temp__5804__auto__,steps,author_QMARK_,initial_values,values,open_modal,save))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$icons_material$DeleteOutline.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"warning",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2rem"], null)], null)], null)], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"w-1/4 border-0 h-px my-2 bg-gray-200 dark:bg-gray-700"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Typography,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"body1",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2rem",new cljs.core.Keyword(null,"component","component",1555936782),"p",new cljs.core.Keyword(null,"class-name","class-name",945142584),"text-slate-800"], null),desc], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__50744 = (i__50699 + (1));
i__50699 = G__50744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50700),playground$recipes$views$recipe_steps$recipe_steps_$_iter__50697(cljs.core.chunk_rest(s__50698__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50700),null);
}
} else {
var vec__50714 = cljs.core.first(s__50698__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50714,(0),null);
var map__50717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50714,(1),null);
var map__50717__$1 = cljs.core.__destructure_map(map__50717);
var values__$1 = map__50717__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50717__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50717__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"direction","direction",-633359395),"row",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(6),new cljs.core.Keyword(null,"px","px",281329899),(3)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Typography,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h4",new cljs.core.Keyword(null,"class-name","class-name",945142584),"text-slate-600"], null),"Step ",(index + (1))], null)], null),(cljs.core.truth_(author_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end"], null),new cljs.core.Keyword(null,"pr","pr",-583594500),(4),new cljs.core.Keyword(null,"xs","xs",649443341),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.IconButton,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__50714,index,map__50717,map__50717__$1,values__$1,id,desc,s__50698__$2,temp__5804__auto__,steps,author_QMARK_,initial_values,values,open_modal,save){
return (function (){
return open_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-key","modal-key",-1201166068),new cljs.core.Keyword(null,"step-editor","step-editor",1799616437),new cljs.core.Keyword(null,"step","step",1288888124),values__$1], null));
});})(vec__50714,index,map__50717,map__50717__$1,values__$1,id,desc,s__50698__$2,temp__5804__auto__,steps,author_QMARK_,initial_values,values,open_modal,save))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$icons_material$Create.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2rem"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.IconButton,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__50714,index,map__50717,map__50717__$1,values__$1,id,desc,s__50698__$2,temp__5804__auto__,steps,author_QMARK_,initial_values,values,open_modal,save){
return (function (){
if(cljs.core.truth_(confirm("Are you sure you want to delete?"))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe","delete-step","recipe/delete-step",-95434783),id], null));
} else {
return null;
}
});})(vec__50714,index,map__50717,map__50717__$1,values__$1,id,desc,s__50698__$2,temp__5804__auto__,steps,author_QMARK_,initial_values,values,open_modal,save))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$icons_material$DeleteOutline.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"warning",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2rem"], null)], null)], null)], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"w-1/4 border-0 h-px my-2 bg-gray-200 dark:bg-gray-700"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Typography,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"body1",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2rem",new cljs.core.Keyword(null,"component","component",1555936782),"p",new cljs.core.Keyword(null,"class-name","class-name",945142584),"text-slate-800"], null),desc], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),playground$recipes$views$recipe_steps$recipe_steps_$_iter__50697(cljs.core.rest(s__50698__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,m], null);
}),steps));
})()], null)], null);
});
});

//# sourceMappingURL=playground.recipes.views.recipe_steps.js.map
