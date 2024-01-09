goog.provide('playground.components.form_group');
var module$node_modules$$mui$material$node$index=shadow.js.require("module$node_modules$$mui$material$node$index", {});
playground.components.form_group.r_input = reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1((function (props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"ref","ref",1289896967))], null);
}));
playground.components.form_group.form_group = (function playground$components$form_group$form_group(p__47389){
var map__47394 = p__47389;
var map__47394__$1 = cljs.core.__destructure_map(map__47394);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47394__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47394__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47394__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47394__$1,new cljs.core.Keyword(null,"values","values",372645556));
var _AMPERSAND_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47394__$1,new cljs.core.Keyword(null,"&","&",509580121));
var not_deref_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47394__$1,new cljs.core.Keyword(null,"not-deref?","not-deref?",-513579813));
var text_area_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47394__$1,new cljs.core.Keyword(null,"text-area?","text-area?",1502915631));
var on_key_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47394__$1,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.FormControl,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"full-width","full-width",1911330562),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null),new cljs.core.Keyword(null,"class-name","class-name",945142584),"pl-1 text-slate-700",new cljs.core.Keyword(null,"html-for","html-for",594503920),id,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(500),new cljs.core.Keyword(null,"component","component",1555936782),"h4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),label], null)], null),(function (){var errors = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form","errors","form/errors",-911949778)], null)));
var input_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(errors,id);
var error = (cljs.core.truth_(input_error)?true:false);
var is_empty_QMARK_ = clojure.string.blank_QMARK_((function (){var G__47427 = cljs.core.deref(values);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__47427) : id.call(null,G__47427));
})());
var validate = (function (){
if(is_empty_QMARK_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form","has-value?","form/has-value?",-571722516),id], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form","clear-error","form/clear-error",1332591714),id], null));
}
});
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item","item",249373802),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Input,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"full-width","full-width",1911330562),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"multiline","multiline",-1084693234),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"inputComponent","inputComponent",1255542456),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[true,"outlined",(cljs.core.truth_(not_deref_QMARK_)?(id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(values) : id.call(null,values)):(function (){var G__47454 = cljs.core.deref(values);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__47454) : id.call(null,G__47454));
})()),validate,type,true,(cljs.core.truth_(text_area_QMARK_)?(4):(1)),((clojure.string.blank_QMARK_((function (){var G__47463 = cljs.core.deref(values);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__47463) : id.call(null,G__47463));
})()))?null:validate),error,playground.components.form_group.r_input,(function (p1__47385_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(values,cljs.core.assoc,id,p1__47385_SHARP_.target.value);
}),on_key_down])], null),((error)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Typography,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"caption",new cljs.core.Keyword(null,"color","color",1011675173),playground.utilites.color(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"600","600",452917180)], null)),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mt","mt",1155907933),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),input_error], null)], null):null)], null);
})()], null)], null);
});

//# sourceMappingURL=playground.components.form_group.js.map
