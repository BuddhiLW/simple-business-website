goog.provide('playground.inbox.events');
playground.inbox.events.inbox_interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.spec.check_spec_interceptor], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("inbox","mark-as-read","inbox/mark-as-read",-808720740),playground.inbox.events.inbox_interceptors,(function (db,p__45576){
var vec__45580 = p__45576;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45580,(0),null);
var user_email = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45580,(1),null);
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),uid,new cljs.core.Keyword(null,"inboxes","inboxes",-619615989),user_email,new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null),(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("inbox","send-notification","inbox/send-notification",463258527),playground.inbox.events.inbox_interceptors,(function (db,p__45594){
var vec__45595 = p__45594;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45595,(0),null);
var map__45598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45595,(1),null);
var map__45598__$1 = cljs.core.__destructure_map(map__45598);
var notify = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45598__$1,new cljs.core.Keyword(null,"notify","notify",-1256867814));
var inbox_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45598__$1,new cljs.core.Keyword(null,"inbox-id","inbox-id",-859711618));
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
var notification_count = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),notify,new cljs.core.Keyword(null,"inboxes","inboxes",-619615989),uid,new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),notify,new cljs.core.Keyword(null,"inboxes","inboxes",-619615989),uid], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),inbox_id,new cljs.core.Keyword(null,"notifications","notifications",1685638001),(notification_count + (1)),new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),Date.now()], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),uid,new cljs.core.Keyword(null,"inboxes","inboxes",-619615989),notify], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),inbox_id,new cljs.core.Keyword(null,"notifications","notifications",1685638001),(0),new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),Date.now()], null));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("inbox","insert-message","inbox/insert-message",1938603283),playground.inbox.events.inbox_interceptors,(function (p__45614,p__45615){
var map__45617 = p__45614;
var map__45617__$1 = cljs.core.__destructure_map(map__45617);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45617__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45618 = p__45615;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45618,(0),null);
var map__45621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45618,(1),null);
var map__45621__$1 = cljs.core.__destructure_map(map__45621);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45621__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
var inbox_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-inbox","active-inbox",524121188)], null));
var participants = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inboxes","inboxes",-619615989),inbox_id,new cljs.core.Keyword(null,"participants","participants",673603367)], null));
var chat_with = cljs.core.first(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(participants,uid));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inboxes","inboxes",-619615989),inbox_id,new cljs.core.Keyword(null,"messages","messages",345434482)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"author","author",2111686192),uid,new cljs.core.Keyword(null,"created-at","created-at",-89248644),Date.now()], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("inbox","send-notification","inbox/send-notification",463258527),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"notify","notify",-1256867814),chat_with,new cljs.core.Keyword(null,"inbox-id","inbox-id",-859711618),inbox_id], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("recipe","request-message","recipe/request-message",458707902),playground.inbox.events.inbox_interceptors,(function (p__45633,p__45634){
var map__45635 = p__45633;
var map__45635__$1 = cljs.core.__destructure_map(map__45635);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45635__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45636 = p__45634;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45636,(0),null);
var map__45639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45636,(1),null);
var map__45639__$1 = cljs.core.__destructure_map(map__45639);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45639__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
var recipe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148)], null));
var cook = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipe_id,new cljs.core.Keyword(null,"cook","cook",1825923808)], null));
var existing_inbox_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),uid,new cljs.core.Keyword(null,"inboxes","inboxes",-619615989),cook,new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var new_inbox_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var map__45640 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipe_id], null));
var map__45640__$1 = cljs.core.__destructure_map(map__45640);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45640__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45640__$1,new cljs.core.Keyword(null,"price","price",22129180));
var message__$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",playground.helpers.format_price(price),") \n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join(''),new cljs.core.Keyword(null,"author","author",2111686192),uid,new cljs.core.Keyword(null,"created-at","created-at",-89248644),Date.now()], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(cljs.core.truth_(existing_inbox_id)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inboxes","inboxes",-619615989),existing_inbox_id,new cljs.core.Keyword(null,"messages","messages",345434482)], null),cljs.core.conj,message__$1):cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inboxes","inboxes",-619615989),new_inbox_id], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new_inbox_id,new cljs.core.Keyword(null,"participants","participants",673603367),cljs.core.PersistentHashSet.createAsIfByAssoc([cook,uid]),new cljs.core.Keyword(null,"messages","messages",345434482),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [message__$1], null),new cljs.core.Keyword(null,"notifications","notifications",1685638001),(0),new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),Date.now()], null))),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("inbox","send-notification","inbox/send-notification",463258527),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"notify","notify",-1256867814),cook,new cljs.core.Keyword(null,"inbox-id","inbox-id",-859711618),(function (){var or__5045__auto__ = existing_inbox_id;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new_inbox_id;
}
})()], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipes","close-modal","recipes/close-modal",-833326660)], null)], null)], null);
}));

//# sourceMappingURL=playground.inbox.events.js.map
