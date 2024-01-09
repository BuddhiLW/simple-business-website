goog.provide('playground.inbox.subs');
playground.inbox.subs.reverse_cmp = (function playground$inbox$subs$reverse_cmp(a,b){
return cljs.core.compare(b,a);
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"inboxes","inboxes",-619615989),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"inboxes","inboxes",-619615989));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("user","inboxes","user/inboxes",-624325288),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipes","user","recipes/user",281719143)], null),(function (user,_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"update-at","update-at",361230601),playground.inbox.subs.reverse_cmp,cljs.core.get.cljs$core$IFn$_invoke$arity$2(user,new cljs.core.Keyword(null,"inboxes","inboxes",-619615989)));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("inbox","user-image","inbox/user-image",1636715571),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705)], null),(function (users,p__48423){
var vec__48424 = p__48423;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48424,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48424,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(users,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"img","img",1442687358)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("inbox","inbox-messages","inbox/inbox-messages",-547986361),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inboxes","inboxes",-619615989)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nav","active-inbox","nav/active-inbox",524196679)], null),(function (p__48427,_){
var vec__48428 = p__48427;
var inboxes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48428,(0),null);
var active_inbox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48428,(1),null);
var messages = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inboxes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_inbox,new cljs.core.Keyword(null,"messages","messages",345434482)], null));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"created-at","created-at",-89248644),playground.inbox.subs.reverse_cmp,messages);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("inbox","chat-with","inbox/chat-with",-757251133),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uid","uid",-1447769400)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inboxes","inboxes",-619615989)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nav","active-inbox","nav/active-inbox",524196679)], null),(function (p__48431,_){
var vec__48432 = p__48431;
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48432,(0),null);
var inboxes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48432,(1),null);
var active_inbox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48432,(2),null);
var participants = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inboxes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_inbox,new cljs.core.Keyword(null,"participants","participants",673603367)], null));
return cljs.core.first(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(participants,uid));
})], 0));

//# sourceMappingURL=playground.inbox.subs.js.map
