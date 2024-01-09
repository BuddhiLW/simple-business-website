goog.provide('playground.nav.views.authenticated');
var module$node_modules$$mui$material$node$index=shadow.js.require("module$node_modules$$mui$material$node$index", {});
playground.nav.views.authenticated.authenticated = (function playground$nav$views$authenticated$authenticated(){
var active_page = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-page","active-page",370357330)], null)));
var nav_items = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"stripe","stripe",-2092535278),new cljs.core.Keyword(null,"name","name",1843675177),"Pay-wall",new cljs.core.Keyword(null,"href","href",-793805698),playground.router.path_for(new cljs.core.Keyword(null,"free-paywall","free-paywall",-785970405)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"free-paywall","free-paywall",-785970405)], null));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"stripe","stripe",-2092535278),new cljs.core.Keyword(null,"name","name",1843675177),"Stripe",new cljs.core.Keyword(null,"href","href",-793805698),playground.router.path_for(new cljs.core.Keyword(null,"stripe","stripe",-2092535278)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"stripe","stripe",-2092535278)], null));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"upload-file","upload-file",1968287526),new cljs.core.Keyword(null,"name","name",1843675177),"Upload File",new cljs.core.Keyword(null,"href","href",-793805698),playground.router.path_for(new cljs.core.Keyword(null,"upload-file","upload-file",1968287526)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"upload-file","upload-file",1968287526)], null));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"saved","saved",288760660),new cljs.core.Keyword(null,"name","name",1843675177),"Saved",new cljs.core.Keyword(null,"href","href",-793805698),playground.router.path_for(new cljs.core.Keyword(null,"saved","saved",288760660)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"saved","saved",288760660)], null));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"recipes","recipes",-325236209),new cljs.core.Keyword(null,"name","name",1843675177),"Recipes",new cljs.core.Keyword(null,"href","href",-793805698),playground.router.path_for(new cljs.core.Keyword(null,"recipes","recipes",-325236209)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"inboxes","inboxes",-619615989),new cljs.core.Keyword(null,"name","name",1843675177),"Inbox",new cljs.core.Keyword(null,"href","href",-793805698),playground.router.path_for(new cljs.core.Keyword(null,"inboxes","inboxes",-619615989)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"inboxes","inboxes",-619615989)], null));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"become-a-chef","become-a-chef",1113742810),new cljs.core.Keyword(null,"name","name",1843675177),"Chef",new cljs.core.Keyword(null,"href","href",-793805698),playground.router.path_for(new cljs.core.Keyword(null,"become-a-chef","become-a-chef",1113742810)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"become-a-chef","become-a-chef",1113742810)], null));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"name","name",1843675177),"Profile",new cljs.core.Keyword(null,"href","href",-793805698),playground.router.path_for(new cljs.core.Keyword(null,"profile","profile",-545963874)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"profile","profile",-545963874)], null));
})], null)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end",new cljs.core.Keyword(null,"py","py",1397985916),(1)], null),(function (){var iter__5523__auto__ = (function playground$nav$views$authenticated$authenticated_$_iter__49269(s__49270){
return (new cljs.core.LazySeq(null,(function (){
var s__49270__$1 = s__49270;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__49270__$1);
if(temp__5804__auto__){
var s__49270__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49270__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__49270__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__49272 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__49271 = (0);
while(true){
if((i__49271 < size__5522__auto__)){
var map__49289 = cljs.core._nth(c__5521__auto__,i__49271);
var map__49289__$1 = cljs.core.__destructure_map(map__49289);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49289__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49289__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49289__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49289__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
cljs.core.chunk_append(b__49272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.nav.views.nav_item.box,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"active-page","active-page",370357330),active_page], null)], null));

var G__49305 = (i__49271 + (1));
i__49271 = G__49305;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49272),playground$nav$views$authenticated$authenticated_$_iter__49269(cljs.core.chunk_rest(s__49270__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49272),null);
}
} else {
var map__49295 = cljs.core.first(s__49270__$2);
var map__49295__$1 = cljs.core.__destructure_map(map__49295);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49295__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49295__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49295__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49295__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.nav.views.nav_item.box,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"active-page","active-page",370357330),active_page], null)], null),playground$nav$views$authenticated$authenticated_$_iter__49269(cljs.core.rest(s__49270__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(nav_items);
})()], null)], null);
});

//# sourceMappingURL=playground.nav.views.authenticated.js.map
