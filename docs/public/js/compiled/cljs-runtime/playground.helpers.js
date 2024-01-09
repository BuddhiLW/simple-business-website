goog.provide('playground.helpers');
playground.helpers.time_ago = (function playground$helpers$time_ago(timestamp){
var units = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"second",new cljs.core.Keyword(null,"limit","limit",-1355822363),(60),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"minute",new cljs.core.Keyword(null,"limit","limit",-1355822363),(3600),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(60)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"hour",new cljs.core.Keyword(null,"limit","limit",-1355822363),(86400),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(3600)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"day",new cljs.core.Keyword(null,"limit","limit",-1355822363),(604800),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(86400)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"week",new cljs.core.Keyword(null,"limit","limit",-1355822363),(2629743),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(604800)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"month",new cljs.core.Keyword(null,"limit","limit",-1355822363),(31556926),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(2629743)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"year",new cljs.core.Keyword(null,"limit","limit",-1355822363),Number.MAX_VALUE,new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(31556926)], null)], null);
var time = (new Date(timestamp));
var diff = cljs_time.core.in_seconds(cljs_time.core.interval(time,cljs_time.core.now()));
if((diff < (5))){
return "just now";
} else {
var unit = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__49152_SHARP_){
return (((diff >= new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(p1__49152_SHARP_))) || (cljs.core.not(new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(p1__49152_SHARP_))));
}),units));
return (function (p1__49153_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49153_SHARP_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(unit)),(((p1__49153_SHARP_ > (1)))?"s":null)," ago"].join('');
})((Math.floor((diff / new cljs.core.Keyword(null,"in-second","in-second",-1351007453).cljs$core$IFn$_invoke$arity$1(unit))) | (0)));
}
});
playground.helpers.format_price = (function playground$helpers$format_price(price){
return ["R$ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((price / (100)))].join('');
});
playground.helpers.valid_number = (function playground$helpers$valid_number(number){
return ((cljs.core.not(isNaN(parseInt(number)))) && (typeof parseInt(number) === 'number'));
});
/**
 * Associate by key the key-work values and transform key to keyword, as well as it's value.
 *   Generally, used for grouping data by the unique values in a coll, coming from requests.
 */
playground.helpers.associate_by_kkeyword_value = (function playground$helpers$associate_by_kkeyword_value(key,coll){
return playground.utilites.associate_by(key,playground.utilites.keywordize_at_keys(cljs.core.PersistentHashSet.createAsIfByAssoc([key]),coll));
});
playground.helpers.api_url = "http://localhost:8666";
/**
 * Concat any params to api-url separated by /
 */
playground.helpers.endpoint = (function playground$helpers$endpoint(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49168 = arguments.length;
var i__5770__auto___49169 = (0);
while(true){
if((i__5770__auto___49169 < len__5769__auto___49168)){
args__5775__auto__.push((arguments[i__5770__auto___49169]));

var G__49170 = (i__5770__auto___49169 + (1));
i__5770__auto___49169 = G__49170;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return playground.helpers.endpoint.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(playground.helpers.endpoint.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.cons(playground.helpers.api_url,params));
}));

(playground.helpers.endpoint.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(playground.helpers.endpoint.cljs$lang$applyTo = (function (seq49161){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49161));
}));


//# sourceMappingURL=playground.helpers.js.map
