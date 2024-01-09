goog.provide('playground.upload_file.views.upload_file_page');
var module$node_modules$$mui$icons_material$UploadFile=shadow.js.require("module$node_modules$$mui$icons_material$UploadFile", {});
var module$node_modules$$mui$material$node$index=shadow.js.require("module$node_modules$$mui$material$node$index", {});
playground.upload_file.views.upload_file_page.title = (function playground$upload_file$views$upload_file_page$title(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Box,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"mb","mb",1534459853),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$$mui$material$node$index.colors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indigo","indigo",-280252374),new cljs.core.Keyword(null,"50","50",-510472304)], null)),new cljs.core.Keyword(null,"border","border",1444987323),(1),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(1)], null),new cljs.core.Keyword(null,"my","my",-1055703269),"auto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h5"], null),"Demo"], null)], null)], null);
});
playground.upload_file.views.upload_file_page.upload_button = (function playground$upload_file$views$upload_file_page$upload_button(handle_change){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"component","component",1555936782),"label",new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60195_SHARP_){
return (handle_change.cljs$core$IFn$_invoke$arity$1 ? handle_change.cljs$core$IFn$_invoke$arity$1(p1__60195_SHARP_) : handle_change.call(null,p1__60195_SHARP_));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$icons_material$UploadFile.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mr","mr",-1224518357),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"id","id",-1388402092),"input",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Insert File",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null)], null),"Upload File"], null);
});
playground.upload_file.views.upload_file_page.preview_image = (function playground$upload_file$views$upload_file_page$preview_image(path){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Card,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mt","mt",1155907933),(2),new cljs.core.Keyword(null,"mx","mx",-199887020),"auto",new cljs.core.Keyword(null,"as","as",1148689641),"a"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipes","open-modal","recipes/open-modal",-113980987),new cljs.core.Keyword(null,"upload-file-modal","upload-file-modal",1756724864)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.CardMedia,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(250),new cljs.core.Keyword(null,"width","width",-384071477),(350)], null),new cljs.core.Keyword(null,"image","image",-58725096),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = path;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "../img/placeholder.jpg";
}
})()),new cljs.core.Keyword(null,"alt","alt",-3214426),cljs.core.name], null)], null)], null);
});
playground.upload_file.views.upload_file_page.preview_image_modal = (function playground$upload_file$views$upload_file_page$preview_image_modal(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60225 = arguments.length;
var i__5770__auto___60226 = (0);
while(true){
if((i__5770__auto___60226 < len__5769__auto___60225)){
args__5775__auto__.push((arguments[i__5770__auto___60226]));

var G__60227 = (i__5770__auto___60226 + (1));
i__5770__auto___60226 = G__60227;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return playground.upload_file.views.upload_file_page.preview_image_modal.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(playground.upload_file.views.upload_file_page.preview_image_modal.cljs$core$IFn$_invoke$arity$variadic = (function (p__60219){
var map__60220 = p__60219;
var map__60220__$1 = cljs.core.__destructure_map(map__60220);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60220__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60220__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mt","mt",1155907933),(2),new cljs.core.Keyword(null,"mx","mx",-199887020),"auto"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.CardMedia,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(function (){var or__5045__auto__ = height;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1080);
}
})(),new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__5045__auto__ = width;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1200);
}
})()], null),new cljs.core.Keyword(null,"image","image",-58725096),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("upload","latest-upload","upload/latest-upload",1805904586)], null)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "../img/placeholder.jpg";
}
})()),new cljs.core.Keyword(null,"alt","alt",-3214426),cljs.core.name], null)], null)], null);
});
}));

(playground.upload_file.views.upload_file_page.preview_image_modal.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(playground.upload_file.views.upload_file_page.preview_image_modal.cljs$lang$applyTo = (function (seq60213){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60213));
}));

playground.upload_file.views.upload_file_page.upload_file_page = (function playground$upload_file$views$upload_file_page$upload_file_page(){
var handle_change = (function (e){
var file = cljs.core.first(e.target.files);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("http","upload-file","http/upload-file",1971500494),file], null));
});
return (function (){
var path = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("upload","latest-upload","upload/latest-upload",1805904586)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.components.page_nav.page_nav,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"center","center",-748944368),"Upload File Example"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"direction","direction",-633359395),"column",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.upload_file.views.upload_file_page.title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.upload_file.views.upload_file_page.upload_button,handle_change], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.upload_file.views.upload_file_page.preview_image,path], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.components.modal.modal,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"modal-key","modal-key",-1201166068),new cljs.core.Keyword(null,"upload-file-modal","upload-file-modal",1756724864),new cljs.core.Keyword(null,"title","title",636505583),"Zoomed preview",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.upload_file.views.upload_file_page.preview_image_modal,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"30rem",new cljs.core.Keyword(null,"width","width",-384071477),"50rem"], null)], null),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Grid,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"my","my",-1055703269),(2),new cljs.core.Keyword(null,"px","px",281329899),(3),new cljs.core.Keyword(null,"direction","direction",-633359395),"row",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"right"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$index.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipes","close-modal","recipes/close-modal",-833326660)], null));
})], null),"Close"], null)], null)], null)], null)], null)], null)], null);
});
});

//# sourceMappingURL=playground.upload_file.views.upload_file_page.js.map
