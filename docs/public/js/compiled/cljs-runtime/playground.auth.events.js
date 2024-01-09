goog.provide('playground.auth.events');
playground.auth.events.playground_user_key = "playgroud-user";
/**
 * Interceptor function to set user in local storage
 */
playground.auth.events.set_user_ls_BANG_ = (function playground$auth$events$set_user_ls_BANG_(p__45577){
var map__45579 = p__45577;
var map__45579__$1 = cljs.core.__destructure_map(map__45579);
var auth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45579__$1,new cljs.core.Keyword(null,"auth","auth",1389754926));
if(cljs.core.truth_(auth)){
return localStorage.setItem(playground.auth.events.playground_user_key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(auth));
} else {
return null;
}
});
/**
 * Interceptor function to remove user from local storage
 */
playground.auth.events.remove_user_ls_BANG_ = (function playground$auth$events$remove_user_ls_BANG_(){
return localStorage.removeItem(playground.auth.events.playground_user_key);
});
playground.auth.events.set_user_interceptors = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.after(playground.auth.events.set_user_ls_BANG_),playground.spec.check_spec_interceptor], null);
playground.auth.events.remove_user_interceptors = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.after(playground.auth.events.remove_user_ls_BANG_),playground.spec.check_spec_interceptor], null);
re_frame.core.reg_cofx(new cljs.core.Keyword(null,"local-store-user","local-store-user",1737970699),(function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,new cljs.core.Keyword(null,"local-store-user","local-store-user",1737970699),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(localStorage.getItem(playground.auth.events.playground_user_key)));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"sign-up","sign-up",-1190725688),playground.auth.events.set_user_interceptors,(function (p__45607,p__45608){
var map__45609 = p__45607;
var map__45609__$1 = cljs.core.__destructure_map(map__45609);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45609__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45610 = p__45608;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45610,(0),null);
var map__45613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45610,(1),null);
var map__45613__$1 = cljs.core.__destructure_map(map__45613);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45613__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45613__$1,new cljs.core.Keyword(null,"password","password",417022471));
var first_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45613__$1,new cljs.core.Keyword(null,"first-name","first-name",-1559982131));
var last_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45613__$1,new cljs.core.Keyword(null,"last-name","last-name",-1695738974));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null),email),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),email], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),email,new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"first-name","first-name",-1559982131),first_name,new cljs.core.Keyword(null,"last-name","last-name",-1695738974),last_name,new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"password","password",417022471),password,new cljs.core.Keyword(null,"img","img",1442687358),"img/avatar.jpg"], null),new cljs.core.Keyword(null,"saved","saved",288760660),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"inboxes","inboxes",-619615989),cljs.core.PersistentArrayMap.EMPTY], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"saved","saved",288760660)], null),new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),"/saved"], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"log-in","log-in",526627385),playground.auth.events.set_user_interceptors,(function (p__45626,p__45627){
var map__45628 = p__45626;
var map__45628__$1 = cljs.core.__destructure_map(map__45628);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45628__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45629 = p__45627;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45629,(0),null);
var map__45632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45629,(1),null);
var map__45632__$1 = cljs.core.__destructure_map(map__45632);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45632__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45632__$1,new cljs.core.Keyword(null,"password","password",417022471));
var user = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),email], null));
var correct_password_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(user,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"password","password",417022471)], null)),password);
if(cljs.core.not(user)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"email","email",1415816706)], null),"User not found")], null);
} else {
if((!(correct_password_QMARK_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"email","email",1415816706)], null),"Wrong password")], null);
} else {
if(correct_password_QMARK_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null),email),new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.dissoc,new cljs.core.Keyword(null,"email","email",1415816706)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"saved","saved",288760660)], null),new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),"/saved"], null)], null);
} else {
return null;
}
}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("auth","log-out","auth/log-out",-2095835685),playground.auth.events.remove_user_interceptors,(function (p__45641,_){
var map__45642 = p__45641;
var map__45642__$1 = cljs.core.__destructure_map(map__45642);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45642__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null),null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null),new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),"/"], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("update","profile","update/profile",762641253),(function (db,p__45643){
var vec__45644 = p__45643;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45644,(0),null);
var profile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45644,(1),null);
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),uid,new cljs.core.Keyword(null,"profile","profile",-545963874)], null),cljs.core.merge,cljs.core.select_keys(profile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first-name","first-name",-1559982131),new cljs.core.Keyword(null,"last-name","last-name",-1695738974)], null)));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("auth","delete-account","auth/delete-account",741042613),playground.auth.events.remove_user_interceptors,(function (p__45647,_){
var map__45648 = p__45647;
var map__45648__$1 = cljs.core.__destructure_map(map__45648);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45648__$1,new cljs.core.Keyword(null,"db","db",993250759));
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null),null),new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.dissoc,uid),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null),new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),"/recipes"], null)], null);
}));

//# sourceMappingURL=playground.auth.events.js.map
