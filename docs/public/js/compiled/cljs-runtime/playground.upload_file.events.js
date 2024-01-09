goog.provide('playground.upload_file.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("http","upload-file","http/upload-file",1971500494),(function (_,p__50898){
var vec__50901 = p__50898;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50901,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50901,(1),null);
var form_data = (function (){var G__50905 = (new FormData());
G__50905.append("file",file);

return G__50905;
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),playground.helpers.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["v1","upload","file"], 0)),new cljs.core.Keyword(null,"params","params",710516235),form_data,new cljs.core.Keyword(null,"body","body",-2049205669),form_data,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("http","upload-file-success","http/upload-file-success",-1685882130)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (response){
return console.log("response error: ",response);
})], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("http","upload-file-success","http/upload-file-success",-1685882130),(function (db,p__50909){
var vec__50910 = p__50909;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50910,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50910,(1),null);
var paths = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),new cljs.core.Keyword(null,"path","path",-188191168)], null));
var log_response = console.log("response success:",cljs.core.clj__GT_js(response));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),new cljs.core.Keyword(null,"path","path",-188191168)], null),cljs.core.second(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"file","file",-1269645878)], null)),/resources/)));
}));

//# sourceMappingURL=playground.upload_file.events.js.map
