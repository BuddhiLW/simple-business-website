goog.provide('playground.recipes.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"cursos","cursos",1400607432),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
console.log(cljs.core.clj__GT_js(new cljs.core.Keyword(null,"cursos","cursos",1400607432).cljs$core$IFn$_invoke$arity$1(playground.db.initial_app_db)));

return new cljs.core.Keyword(null,"cursos","cursos",1400607432).cljs$core$IFn$_invoke$arity$1(playground.db.initial_app_db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("filter","draft","filter/draft",417871354),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursos","cursos",1400607432)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uid","uid",-1447769400)], null),(function (p__50226,_){
var vec__50227 = p__50226;
var recipes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50227,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50227,(1),null);
var filters = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__50224_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"public?","public?",786025269).cljs$core$IFn$_invoke$arity$1(p1__50224_SHARP_),false);
}),(function (p1__50225_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cook","cook",1825923808).cljs$core$IFn$_invoke$arity$1(p1__50225_SHARP_),uid);
})], null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,filters),cljs.core.vals(recipes));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("filter","public","filter/public",-1453207405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursos","cursos",1400607432)], null),(function (cursos,_){
var filtered = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50230_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"public","public",1566243851).cljs$core$IFn$_invoke$arity$1(p1__50230_SHARP_),true);
}),cljs.core.vals(cursos));
var log = console.log(["filtered: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.clj__GT_js(filtered))].join(''));
return filtered;
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("recipe","author?","recipe/author?",355827139),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cursos","recipe","cursos/recipe",-783912802)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","current-user","auth/current-user",-884955987)], null),(function (p__50235,_){
var vec__50236 = p__50235;
var map__50239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50236,(0),null);
var map__50239__$1 = cljs.core.__destructure_map(map__50239);
var cook = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50239__$1,new cljs.core.Keyword(null,"cook","cook",1825923808));
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50236,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cook,uid);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("cursos","active-modal","cursos/active-modal",255472927),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-modal","active-modal",1608517958)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("recipe","ingredients","recipe/ingredients",-651240419),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cursos","recipe","cursos/recipe",-783912802)], null),(function (recipe,_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.vals(new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917).cljs$core$IFn$_invoke$arity$1(recipe)));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("recipe","steps","recipe/steps",875960540),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cursos","recipe","cursos/recipe",-783912802)], null),(function (recipe,_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.vals(new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(recipe)));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("recipe","ingredient","recipe/ingredient",84651909),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__50240){
var vec__50241 = p__50240;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50241,(0),null);
var id_ingredient = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50241,(1),null);
var active_recipe = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursos","cursos",1400607432),active_recipe,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),id_ingredient], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("recipe","public?","recipe/public?",-147823197),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__50244){
var vec__50245 = p__50244;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50245,(0),null);
var active_recipe = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursos","cursos",1400607432),active_recipe,new cljs.core.Keyword(null,"public?","public?",786025269)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("cursos","saved","cursos/saved",1098927913),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursos","cursos",1400607432)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cursos","user","cursos/user",-1950807887)], null),(function (p__50249,_){
var vec__50250 = p__50249;
var recipes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50250,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50250,(1),null);
var saved = new cljs.core.Keyword(null,"saved","saved",288760660).cljs$core$IFn$_invoke$arity$1(user);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50248_SHARP_){
return cljs.core.contains_QMARK_(saved,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__50248_SHARP_));
}),cljs.core.vals(recipes));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("cursos","loaded?","cursos/loaded?",235608583),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__50253){
var vec__50254 = p__50253;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50254,(0),null);
var log = console.log("recipes loaded?",cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"cursos","cursos",1400607432)], null))));
return cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"cursos","cursos",1400607432)], null)));
})], 0));

//# sourceMappingURL=playground.recipes.subs.js.map
