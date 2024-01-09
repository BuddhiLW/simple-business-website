goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__50353 = e.target.readyState;
var fexpr__50352 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__50352.cljs$core$IFn$_invoke$arity$1 ? fexpr__50352.cljs$core$IFn$_invoke$arity$1(G__50353) : fexpr__50352.call(null,G__50353));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__50355,handler){
var map__50356 = p__50355;
var map__50356__$1 = cljs.core.__destructure_map(map__50356);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50356__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50356__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50356__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50356__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50356__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50356__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50356__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__50354_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__50354_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___50379 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___50379)){
var response_type_50380 = temp__5804__auto___50379;
(this$__$1.responseType = cljs.core.name(response_type_50380));
} else {
}

var seq__50360_50381 = cljs.core.seq(headers);
var chunk__50361_50382 = null;
var count__50362_50383 = (0);
var i__50363_50384 = (0);
while(true){
if((i__50363_50384 < count__50362_50383)){
var vec__50370_50385 = chunk__50361_50382.cljs$core$IIndexed$_nth$arity$2(null,i__50363_50384);
var k_50386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50370_50385,(0),null);
var v_50387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50370_50385,(1),null);
this$__$1.setRequestHeader(k_50386,v_50387);


var G__50388 = seq__50360_50381;
var G__50389 = chunk__50361_50382;
var G__50390 = count__50362_50383;
var G__50391 = (i__50363_50384 + (1));
seq__50360_50381 = G__50388;
chunk__50361_50382 = G__50389;
count__50362_50383 = G__50390;
i__50363_50384 = G__50391;
continue;
} else {
var temp__5804__auto___50392 = cljs.core.seq(seq__50360_50381);
if(temp__5804__auto___50392){
var seq__50360_50393__$1 = temp__5804__auto___50392;
if(cljs.core.chunked_seq_QMARK_(seq__50360_50393__$1)){
var c__5568__auto___50394 = cljs.core.chunk_first(seq__50360_50393__$1);
var G__50395 = cljs.core.chunk_rest(seq__50360_50393__$1);
var G__50396 = c__5568__auto___50394;
var G__50397 = cljs.core.count(c__5568__auto___50394);
var G__50398 = (0);
seq__50360_50381 = G__50395;
chunk__50361_50382 = G__50396;
count__50362_50383 = G__50397;
i__50363_50384 = G__50398;
continue;
} else {
var vec__50373_50399 = cljs.core.first(seq__50360_50393__$1);
var k_50400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50373_50399,(0),null);
var v_50401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50373_50399,(1),null);
this$__$1.setRequestHeader(k_50400,v_50401);


var G__50402 = cljs.core.next(seq__50360_50393__$1);
var G__50403 = null;
var G__50404 = (0);
var G__50405 = (0);
seq__50360_50381 = G__50402;
chunk__50361_50382 = G__50403;
count__50362_50383 = G__50404;
i__50363_50384 = G__50405;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5045__auto__ = body;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
