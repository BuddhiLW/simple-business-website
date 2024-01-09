goog.provide('playground.core');
var module$node_modules$$mui$material$node$index=shadow.js.require("module$node_modules$$mui$material$node$index", {});
playground.core.pages = (function playground$core$pages(page_name){
var G__60186 = page_name;
var G__60186__$1 = (((G__60186 instanceof cljs.core.Keyword))?G__60186.fqn:null);
switch (G__60186__$1) {
case "sign-up":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.auth.views.sign_up.sign_up], null);

break;
case "log-in":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.auth.views.log_in.log_in], null);

break;
case "become-a-chef":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.become_a_chef.views.become_a_chef.become_a_chef], null);

break;
case "cursos":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.recipes.views.recipes_page.recipes_page], null);

break;
case "saved":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.recipes.views.saved_page.saved_page], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.become_a_chef.views.become_a_chef.become_a_chef], null);

}
});
playground.core.main = (function playground$core$main(){
var active_page = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-page","active-page",370357330)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.CssBaseline], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.ThemeProvider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),playground.theme.theme], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"primary.main-background",new cljs.core.Keyword(null,"id","id",-1388402092),"wrapper",new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100vw",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.nav.views.nav.nav], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.core.pages,active_page], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.footer.views.footer.footer], null)], null)], null)], null);
});
playground.core.render = (function playground$core$render(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.core.main], null),goog.dom.getElement("app"));
});
playground.core.init = (function playground$core$init(){
playground.router.start_BANG_();

if(re_frame_flow.trace.dispatch_trace_enabled_QMARK_()){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref((((typeof re_frame_flow !== 'undefined') && (typeof re_frame_flow.core !== 'undefined') && (typeof re_frame_flow.core.state_STAR_ !== 'undefined'))?(new cljs.core.Var((function (){
return re_frame_flow.core.state_STAR_;
}),cljs.core.with_meta(new cljs.core.Symbol("re-frame-flow.core","state*","re-frame-flow.core/state*",470244731,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),null)):null)),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatches","dispatches",-331249187),new cljs.core.Keyword(null,"playground.core","playground.core",-861442896)], null),clojure.set.union,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),null], null), null)], 0));
} else {
}

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return playground.core.render();
});
goog.exportSymbol('playground.core.init', playground.core.init);
/**
 * The `:dev/after-load` metadata causes this function to be called after
 *   shadow-cljs hot-reloads code. This function is called implicitly by its
 *   annotation.
 */
playground.core.re_render = (function playground$core$re_render(){
return playground.core.render();
});

//# sourceMappingURL=playground.core.js.map
