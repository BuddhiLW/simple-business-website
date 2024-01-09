goog.provide('playground.inbox.views.inboxes_page');
var module$node_modules$$mui$material$node$index=shadow.js.require("module$node_modules$$mui$material$node$index", {});
playground.inbox.views.inboxes_page.inboxes_page = (function playground$inbox$views$inboxes_page$inboxes_page(){
var user_inboxes = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","inboxes","user/inboxes",-624325288)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.components.page_nav.page_nav,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"center","center",-748944368),"Inbox"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"direction","direction",-633359395),"row",new cljs.core.Keyword(null,"spacing","spacing",204422175),(2),new cljs.core.Keyword(null,"pl","pl",-1690940563),(20)], null),(function (){var iter__5523__auto__ = (function playground$inbox$views$inboxes_page$inboxes_page_$_iter__60191(s__60192){
return (new cljs.core.LazySeq(null,(function (){
var s__60192__$1 = s__60192;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__60192__$1);
if(temp__5804__auto__){
var s__60192__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60192__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__60192__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__60194 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__60193 = (0);
while(true){
if((i__60193 < size__5522__auto__)){
var vec__60200 = cljs.core._nth(c__5521__auto__,i__60193);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60200,(0),null);
var map__60203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60200,(1),null);
var map__60203__$1 = cljs.core.__destructure_map(map__60203);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60203__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var notifications = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60203__$1,new cljs.core.Keyword(null,"notifications","notifications",1685638001));
var updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60203__$1,new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336));
var notifications_QMARK_ = (notifications > (0));
cljs.core.chunk_append(b__60194,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.inbox.views.inbox_card.inbox_card,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),k,new cljs.core.Keyword(null,"inbox-id","inbox-id",-859711618),id,new cljs.core.Keyword(null,"notifications?","notifications?",865377596),notifications_QMARK_,new cljs.core.Keyword(null,"notifications","notifications",1685638001),notifications,new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),updated_at], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__60222 = (i__60193 + (1));
i__60193 = G__60222;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60194),playground$inbox$views$inboxes_page$inboxes_page_$_iter__60191(cljs.core.chunk_rest(s__60192__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60194),null);
}
} else {
var vec__60208 = cljs.core.first(s__60192__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60208,(0),null);
var map__60211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60208,(1),null);
var map__60211__$1 = cljs.core.__destructure_map(map__60211);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60211__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var notifications = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60211__$1,new cljs.core.Keyword(null,"notifications","notifications",1685638001));
var updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60211__$1,new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336));
var notifications_QMARK_ = (notifications > (0));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.inbox.views.inbox_card.inbox_card,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),k,new cljs.core.Keyword(null,"inbox-id","inbox-id",-859711618),id,new cljs.core.Keyword(null,"notifications?","notifications?",865377596),notifications_QMARK_,new cljs.core.Keyword(null,"notifications","notifications",1685638001),notifications,new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),updated_at], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),playground$inbox$views$inboxes_page$inboxes_page_$_iter__60191(cljs.core.rest(s__60192__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(user_inboxes);
})()], null)], null);
});

//# sourceMappingURL=playground.inbox.views.inboxes_page.js.map
