goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_46992 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_46992(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_46994 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_46994(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__45941 = coll;
var G__45942 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__45941,G__45942) : shadow.dom.lazy_native_coll_seq.call(null,G__45941,G__45942));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__46057 = arguments.length;
switch (G__46057) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__46072 = arguments.length;
switch (G__46072) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__46086 = arguments.length;
switch (G__46086) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__46096 = arguments.length;
switch (G__46096) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__46127 = arguments.length;
switch (G__46127) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__46140 = arguments.length;
switch (G__46140) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e46151){if((e46151 instanceof Object)){
var e = e46151;
return console.log("didnt support attachEvent",el,e);
} else {
throw e46151;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__46159 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__46160 = null;
var count__46161 = (0);
var i__46162 = (0);
while(true){
if((i__46162 < count__46161)){
var el = chunk__46160.cljs$core$IIndexed$_nth$arity$2(null,i__46162);
var handler_47017__$1 = ((function (seq__46159,chunk__46160,count__46161,i__46162,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46159,chunk__46160,count__46161,i__46162,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47017__$1);


var G__47018 = seq__46159;
var G__47019 = chunk__46160;
var G__47020 = count__46161;
var G__47021 = (i__46162 + (1));
seq__46159 = G__47018;
chunk__46160 = G__47019;
count__46161 = G__47020;
i__46162 = G__47021;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46159);
if(temp__5804__auto__){
var seq__46159__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46159__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46159__$1);
var G__47023 = cljs.core.chunk_rest(seq__46159__$1);
var G__47024 = c__5568__auto__;
var G__47025 = cljs.core.count(c__5568__auto__);
var G__47026 = (0);
seq__46159 = G__47023;
chunk__46160 = G__47024;
count__46161 = G__47025;
i__46162 = G__47026;
continue;
} else {
var el = cljs.core.first(seq__46159__$1);
var handler_47027__$1 = ((function (seq__46159,chunk__46160,count__46161,i__46162,el,seq__46159__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46159,chunk__46160,count__46161,i__46162,el,seq__46159__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47027__$1);


var G__47028 = cljs.core.next(seq__46159__$1);
var G__47029 = null;
var G__47030 = (0);
var G__47031 = (0);
seq__46159 = G__47028;
chunk__46160 = G__47029;
count__46161 = G__47030;
i__46162 = G__47031;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__46190 = arguments.length;
switch (G__46190) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__46205 = cljs.core.seq(events);
var chunk__46206 = null;
var count__46207 = (0);
var i__46208 = (0);
while(true){
if((i__46208 < count__46207)){
var vec__46222 = chunk__46206.cljs$core$IIndexed$_nth$arity$2(null,i__46208);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46222,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46222,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47033 = seq__46205;
var G__47034 = chunk__46206;
var G__47035 = count__46207;
var G__47036 = (i__46208 + (1));
seq__46205 = G__47033;
chunk__46206 = G__47034;
count__46207 = G__47035;
i__46208 = G__47036;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46205);
if(temp__5804__auto__){
var seq__46205__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46205__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46205__$1);
var G__47037 = cljs.core.chunk_rest(seq__46205__$1);
var G__47038 = c__5568__auto__;
var G__47039 = cljs.core.count(c__5568__auto__);
var G__47040 = (0);
seq__46205 = G__47037;
chunk__46206 = G__47038;
count__46207 = G__47039;
i__46208 = G__47040;
continue;
} else {
var vec__46227 = cljs.core.first(seq__46205__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46227,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46227,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47041 = cljs.core.next(seq__46205__$1);
var G__47042 = null;
var G__47043 = (0);
var G__47044 = (0);
seq__46205 = G__47041;
chunk__46206 = G__47042;
count__46207 = G__47043;
i__46208 = G__47044;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__46232 = cljs.core.seq(styles);
var chunk__46233 = null;
var count__46234 = (0);
var i__46235 = (0);
while(true){
if((i__46235 < count__46234)){
var vec__46252 = chunk__46233.cljs$core$IIndexed$_nth$arity$2(null,i__46235);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46252,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46252,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47046 = seq__46232;
var G__47047 = chunk__46233;
var G__47048 = count__46234;
var G__47049 = (i__46235 + (1));
seq__46232 = G__47046;
chunk__46233 = G__47047;
count__46234 = G__47048;
i__46235 = G__47049;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46232);
if(temp__5804__auto__){
var seq__46232__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46232__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46232__$1);
var G__47050 = cljs.core.chunk_rest(seq__46232__$1);
var G__47051 = c__5568__auto__;
var G__47052 = cljs.core.count(c__5568__auto__);
var G__47053 = (0);
seq__46232 = G__47050;
chunk__46233 = G__47051;
count__46234 = G__47052;
i__46235 = G__47053;
continue;
} else {
var vec__46262 = cljs.core.first(seq__46232__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46262,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46262,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47054 = cljs.core.next(seq__46232__$1);
var G__47055 = null;
var G__47056 = (0);
var G__47057 = (0);
seq__46232 = G__47054;
chunk__46233 = G__47055;
count__46234 = G__47056;
i__46235 = G__47057;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__46272_47058 = key;
var G__46272_47059__$1 = (((G__46272_47058 instanceof cljs.core.Keyword))?G__46272_47058.fqn:null);
switch (G__46272_47059__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_47064 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_47064,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_47064,"aria-");
}
})())){
el.setAttribute(ks_47064,value);
} else {
(el[ks_47064] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__46284){
var map__46285 = p__46284;
var map__46285__$1 = cljs.core.__destructure_map(map__46285);
var props = map__46285__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46285__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__46286 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46286,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46286,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46286,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__46289 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__46289,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__46289;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__46295 = arguments.length;
switch (G__46295) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__46305){
var vec__46306 = p__46305;
var seq__46307 = cljs.core.seq(vec__46306);
var first__46308 = cljs.core.first(seq__46307);
var seq__46307__$1 = cljs.core.next(seq__46307);
var nn = first__46308;
var first__46308__$1 = cljs.core.first(seq__46307__$1);
var seq__46307__$2 = cljs.core.next(seq__46307__$1);
var np = first__46308__$1;
var nc = seq__46307__$2;
var node = vec__46306;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46311 = nn;
var G__46312 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46311,G__46312) : create_fn.call(null,G__46311,G__46312));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46316 = nn;
var G__46317 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46316,G__46317) : create_fn.call(null,G__46316,G__46317));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__46323 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46323,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46323,(1),null);
var seq__46330_47104 = cljs.core.seq(node_children);
var chunk__46331_47105 = null;
var count__46332_47106 = (0);
var i__46333_47107 = (0);
while(true){
if((i__46333_47107 < count__46332_47106)){
var child_struct_47108 = chunk__46331_47105.cljs$core$IIndexed$_nth$arity$2(null,i__46333_47107);
var children_47109 = shadow.dom.dom_node(child_struct_47108);
if(cljs.core.seq_QMARK_(children_47109)){
var seq__46384_47110 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47109));
var chunk__46386_47111 = null;
var count__46387_47112 = (0);
var i__46388_47113 = (0);
while(true){
if((i__46388_47113 < count__46387_47112)){
var child_47115 = chunk__46386_47111.cljs$core$IIndexed$_nth$arity$2(null,i__46388_47113);
if(cljs.core.truth_(child_47115)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47115);


var G__47117 = seq__46384_47110;
var G__47118 = chunk__46386_47111;
var G__47119 = count__46387_47112;
var G__47120 = (i__46388_47113 + (1));
seq__46384_47110 = G__47117;
chunk__46386_47111 = G__47118;
count__46387_47112 = G__47119;
i__46388_47113 = G__47120;
continue;
} else {
var G__47125 = seq__46384_47110;
var G__47126 = chunk__46386_47111;
var G__47127 = count__46387_47112;
var G__47128 = (i__46388_47113 + (1));
seq__46384_47110 = G__47125;
chunk__46386_47111 = G__47126;
count__46387_47112 = G__47127;
i__46388_47113 = G__47128;
continue;
}
} else {
var temp__5804__auto___47129 = cljs.core.seq(seq__46384_47110);
if(temp__5804__auto___47129){
var seq__46384_47130__$1 = temp__5804__auto___47129;
if(cljs.core.chunked_seq_QMARK_(seq__46384_47130__$1)){
var c__5568__auto___47132 = cljs.core.chunk_first(seq__46384_47130__$1);
var G__47133 = cljs.core.chunk_rest(seq__46384_47130__$1);
var G__47134 = c__5568__auto___47132;
var G__47135 = cljs.core.count(c__5568__auto___47132);
var G__47136 = (0);
seq__46384_47110 = G__47133;
chunk__46386_47111 = G__47134;
count__46387_47112 = G__47135;
i__46388_47113 = G__47136;
continue;
} else {
var child_47137 = cljs.core.first(seq__46384_47130__$1);
if(cljs.core.truth_(child_47137)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47137);


var G__47139 = cljs.core.next(seq__46384_47130__$1);
var G__47140 = null;
var G__47141 = (0);
var G__47142 = (0);
seq__46384_47110 = G__47139;
chunk__46386_47111 = G__47140;
count__46387_47112 = G__47141;
i__46388_47113 = G__47142;
continue;
} else {
var G__47143 = cljs.core.next(seq__46384_47130__$1);
var G__47144 = null;
var G__47145 = (0);
var G__47146 = (0);
seq__46384_47110 = G__47143;
chunk__46386_47111 = G__47144;
count__46387_47112 = G__47145;
i__46388_47113 = G__47146;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47109);
}


var G__47147 = seq__46330_47104;
var G__47148 = chunk__46331_47105;
var G__47149 = count__46332_47106;
var G__47150 = (i__46333_47107 + (1));
seq__46330_47104 = G__47147;
chunk__46331_47105 = G__47148;
count__46332_47106 = G__47149;
i__46333_47107 = G__47150;
continue;
} else {
var temp__5804__auto___47151 = cljs.core.seq(seq__46330_47104);
if(temp__5804__auto___47151){
var seq__46330_47152__$1 = temp__5804__auto___47151;
if(cljs.core.chunked_seq_QMARK_(seq__46330_47152__$1)){
var c__5568__auto___47153 = cljs.core.chunk_first(seq__46330_47152__$1);
var G__47154 = cljs.core.chunk_rest(seq__46330_47152__$1);
var G__47155 = c__5568__auto___47153;
var G__47156 = cljs.core.count(c__5568__auto___47153);
var G__47157 = (0);
seq__46330_47104 = G__47154;
chunk__46331_47105 = G__47155;
count__46332_47106 = G__47156;
i__46333_47107 = G__47157;
continue;
} else {
var child_struct_47158 = cljs.core.first(seq__46330_47152__$1);
var children_47159 = shadow.dom.dom_node(child_struct_47158);
if(cljs.core.seq_QMARK_(children_47159)){
var seq__46405_47160 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47159));
var chunk__46407_47161 = null;
var count__46408_47162 = (0);
var i__46409_47163 = (0);
while(true){
if((i__46409_47163 < count__46408_47162)){
var child_47164 = chunk__46407_47161.cljs$core$IIndexed$_nth$arity$2(null,i__46409_47163);
if(cljs.core.truth_(child_47164)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47164);


var G__47165 = seq__46405_47160;
var G__47166 = chunk__46407_47161;
var G__47167 = count__46408_47162;
var G__47168 = (i__46409_47163 + (1));
seq__46405_47160 = G__47165;
chunk__46407_47161 = G__47166;
count__46408_47162 = G__47167;
i__46409_47163 = G__47168;
continue;
} else {
var G__47169 = seq__46405_47160;
var G__47170 = chunk__46407_47161;
var G__47171 = count__46408_47162;
var G__47172 = (i__46409_47163 + (1));
seq__46405_47160 = G__47169;
chunk__46407_47161 = G__47170;
count__46408_47162 = G__47171;
i__46409_47163 = G__47172;
continue;
}
} else {
var temp__5804__auto___47173__$1 = cljs.core.seq(seq__46405_47160);
if(temp__5804__auto___47173__$1){
var seq__46405_47174__$1 = temp__5804__auto___47173__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46405_47174__$1)){
var c__5568__auto___47175 = cljs.core.chunk_first(seq__46405_47174__$1);
var G__47176 = cljs.core.chunk_rest(seq__46405_47174__$1);
var G__47177 = c__5568__auto___47175;
var G__47178 = cljs.core.count(c__5568__auto___47175);
var G__47179 = (0);
seq__46405_47160 = G__47176;
chunk__46407_47161 = G__47177;
count__46408_47162 = G__47178;
i__46409_47163 = G__47179;
continue;
} else {
var child_47180 = cljs.core.first(seq__46405_47174__$1);
if(cljs.core.truth_(child_47180)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47180);


var G__47181 = cljs.core.next(seq__46405_47174__$1);
var G__47182 = null;
var G__47183 = (0);
var G__47184 = (0);
seq__46405_47160 = G__47181;
chunk__46407_47161 = G__47182;
count__46408_47162 = G__47183;
i__46409_47163 = G__47184;
continue;
} else {
var G__47185 = cljs.core.next(seq__46405_47174__$1);
var G__47186 = null;
var G__47187 = (0);
var G__47188 = (0);
seq__46405_47160 = G__47185;
chunk__46407_47161 = G__47186;
count__46408_47162 = G__47187;
i__46409_47163 = G__47188;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47159);
}


var G__47189 = cljs.core.next(seq__46330_47152__$1);
var G__47190 = null;
var G__47191 = (0);
var G__47192 = (0);
seq__46330_47104 = G__47189;
chunk__46331_47105 = G__47190;
count__46332_47106 = G__47191;
i__46333_47107 = G__47192;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__46443 = cljs.core.seq(node);
var chunk__46444 = null;
var count__46445 = (0);
var i__46446 = (0);
while(true){
if((i__46446 < count__46445)){
var n = chunk__46444.cljs$core$IIndexed$_nth$arity$2(null,i__46446);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47202 = seq__46443;
var G__47203 = chunk__46444;
var G__47204 = count__46445;
var G__47205 = (i__46446 + (1));
seq__46443 = G__47202;
chunk__46444 = G__47203;
count__46445 = G__47204;
i__46446 = G__47205;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46443);
if(temp__5804__auto__){
var seq__46443__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46443__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46443__$1);
var G__47206 = cljs.core.chunk_rest(seq__46443__$1);
var G__47207 = c__5568__auto__;
var G__47208 = cljs.core.count(c__5568__auto__);
var G__47209 = (0);
seq__46443 = G__47206;
chunk__46444 = G__47207;
count__46445 = G__47208;
i__46446 = G__47209;
continue;
} else {
var n = cljs.core.first(seq__46443__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47210 = cljs.core.next(seq__46443__$1);
var G__47211 = null;
var G__47212 = (0);
var G__47213 = (0);
seq__46443 = G__47210;
chunk__46444 = G__47211;
count__46445 = G__47212;
i__46446 = G__47213;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__46454 = arguments.length;
switch (G__46454) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__46463 = arguments.length;
switch (G__46463) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__46491 = arguments.length;
switch (G__46491) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47226 = arguments.length;
var i__5770__auto___47227 = (0);
while(true){
if((i__5770__auto___47227 < len__5769__auto___47226)){
args__5775__auto__.push((arguments[i__5770__auto___47227]));

var G__47228 = (i__5770__auto___47227 + (1));
i__5770__auto___47227 = G__47228;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__46541_47229 = cljs.core.seq(nodes);
var chunk__46542_47230 = null;
var count__46543_47231 = (0);
var i__46544_47232 = (0);
while(true){
if((i__46544_47232 < count__46543_47231)){
var node_47233 = chunk__46542_47230.cljs$core$IIndexed$_nth$arity$2(null,i__46544_47232);
fragment.appendChild(shadow.dom._to_dom(node_47233));


var G__47234 = seq__46541_47229;
var G__47235 = chunk__46542_47230;
var G__47236 = count__46543_47231;
var G__47237 = (i__46544_47232 + (1));
seq__46541_47229 = G__47234;
chunk__46542_47230 = G__47235;
count__46543_47231 = G__47236;
i__46544_47232 = G__47237;
continue;
} else {
var temp__5804__auto___47238 = cljs.core.seq(seq__46541_47229);
if(temp__5804__auto___47238){
var seq__46541_47239__$1 = temp__5804__auto___47238;
if(cljs.core.chunked_seq_QMARK_(seq__46541_47239__$1)){
var c__5568__auto___47240 = cljs.core.chunk_first(seq__46541_47239__$1);
var G__47241 = cljs.core.chunk_rest(seq__46541_47239__$1);
var G__47242 = c__5568__auto___47240;
var G__47243 = cljs.core.count(c__5568__auto___47240);
var G__47244 = (0);
seq__46541_47229 = G__47241;
chunk__46542_47230 = G__47242;
count__46543_47231 = G__47243;
i__46544_47232 = G__47244;
continue;
} else {
var node_47245 = cljs.core.first(seq__46541_47239__$1);
fragment.appendChild(shadow.dom._to_dom(node_47245));


var G__47246 = cljs.core.next(seq__46541_47239__$1);
var G__47247 = null;
var G__47248 = (0);
var G__47249 = (0);
seq__46541_47229 = G__47246;
chunk__46542_47230 = G__47247;
count__46543_47231 = G__47248;
i__46544_47232 = G__47249;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq46533){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46533));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__46564_47250 = cljs.core.seq(scripts);
var chunk__46565_47251 = null;
var count__46566_47252 = (0);
var i__46567_47253 = (0);
while(true){
if((i__46567_47253 < count__46566_47252)){
var vec__46584_47255 = chunk__46565_47251.cljs$core$IIndexed$_nth$arity$2(null,i__46567_47253);
var script_tag_47256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46584_47255,(0),null);
var script_body_47257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46584_47255,(1),null);
eval(script_body_47257);


var G__47260 = seq__46564_47250;
var G__47261 = chunk__46565_47251;
var G__47262 = count__46566_47252;
var G__47263 = (i__46567_47253 + (1));
seq__46564_47250 = G__47260;
chunk__46565_47251 = G__47261;
count__46566_47252 = G__47262;
i__46567_47253 = G__47263;
continue;
} else {
var temp__5804__auto___47264 = cljs.core.seq(seq__46564_47250);
if(temp__5804__auto___47264){
var seq__46564_47265__$1 = temp__5804__auto___47264;
if(cljs.core.chunked_seq_QMARK_(seq__46564_47265__$1)){
var c__5568__auto___47266 = cljs.core.chunk_first(seq__46564_47265__$1);
var G__47267 = cljs.core.chunk_rest(seq__46564_47265__$1);
var G__47268 = c__5568__auto___47266;
var G__47269 = cljs.core.count(c__5568__auto___47266);
var G__47270 = (0);
seq__46564_47250 = G__47267;
chunk__46565_47251 = G__47268;
count__46566_47252 = G__47269;
i__46567_47253 = G__47270;
continue;
} else {
var vec__46590_47271 = cljs.core.first(seq__46564_47265__$1);
var script_tag_47272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46590_47271,(0),null);
var script_body_47273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46590_47271,(1),null);
eval(script_body_47273);


var G__47274 = cljs.core.next(seq__46564_47265__$1);
var G__47275 = null;
var G__47276 = (0);
var G__47277 = (0);
seq__46564_47250 = G__47274;
chunk__46565_47251 = G__47275;
count__46566_47252 = G__47276;
i__46567_47253 = G__47277;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__46595){
var vec__46596 = p__46595;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46596,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46596,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__46608 = arguments.length;
switch (G__46608) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__46623 = cljs.core.seq(style_keys);
var chunk__46624 = null;
var count__46625 = (0);
var i__46626 = (0);
while(true){
if((i__46626 < count__46625)){
var it = chunk__46624.cljs$core$IIndexed$_nth$arity$2(null,i__46626);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47282 = seq__46623;
var G__47283 = chunk__46624;
var G__47284 = count__46625;
var G__47285 = (i__46626 + (1));
seq__46623 = G__47282;
chunk__46624 = G__47283;
count__46625 = G__47284;
i__46626 = G__47285;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46623);
if(temp__5804__auto__){
var seq__46623__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46623__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46623__$1);
var G__47286 = cljs.core.chunk_rest(seq__46623__$1);
var G__47287 = c__5568__auto__;
var G__47288 = cljs.core.count(c__5568__auto__);
var G__47289 = (0);
seq__46623 = G__47286;
chunk__46624 = G__47287;
count__46625 = G__47288;
i__46626 = G__47289;
continue;
} else {
var it = cljs.core.first(seq__46623__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47290 = cljs.core.next(seq__46623__$1);
var G__47291 = null;
var G__47292 = (0);
var G__47293 = (0);
seq__46623 = G__47290;
chunk__46624 = G__47291;
count__46625 = G__47292;
i__46626 = G__47293;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k46639,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__46646 = k46639;
var G__46646__$1 = (((G__46646 instanceof cljs.core.Keyword))?G__46646.fqn:null);
switch (G__46646__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46639,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__46651){
var vec__46652 = p__46651;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46652,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46652,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46638){
var self__ = this;
var G__46638__$1 = this;
return (new cljs.core.RecordIter((0),G__46638__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46640,other46641){
var self__ = this;
var this46640__$1 = this;
return (((!((other46641 == null)))) && ((((this46640__$1.constructor === other46641.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46640__$1.x,other46641.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46640__$1.y,other46641.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46640__$1.__extmap,other46641.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k46639){
var self__ = this;
var this__5350__auto____$1 = this;
var G__46682 = k46639;
var G__46682__$1 = (((G__46682 instanceof cljs.core.Keyword))?G__46682.fqn:null);
switch (G__46682__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46639);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__46638){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__46685 = cljs.core.keyword_identical_QMARK_;
var expr__46686 = k__5352__auto__;
if(cljs.core.truth_((pred__46685.cljs$core$IFn$_invoke$arity$2 ? pred__46685.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__46686) : pred__46685.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__46686)))){
return (new shadow.dom.Coordinate(G__46638,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46685.cljs$core$IFn$_invoke$arity$2 ? pred__46685.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__46686) : pred__46685.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__46686)))){
return (new shadow.dom.Coordinate(self__.x,G__46638,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__46638),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__46638){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__46638,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__46644){
var extmap__5385__auto__ = (function (){var G__46702 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46644,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__46644)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46702);
} else {
return G__46702;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__46644),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__46644),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k46709,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__46713 = k46709;
var G__46713__$1 = (((G__46713 instanceof cljs.core.Keyword))?G__46713.fqn:null);
switch (G__46713__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46709,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__46714){
var vec__46715 = p__46714;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46715,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46715,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46708){
var self__ = this;
var G__46708__$1 = this;
return (new cljs.core.RecordIter((0),G__46708__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46710,other46711){
var self__ = this;
var this46710__$1 = this;
return (((!((other46711 == null)))) && ((((this46710__$1.constructor === other46711.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46710__$1.w,other46711.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46710__$1.h,other46711.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46710__$1.__extmap,other46711.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k46709){
var self__ = this;
var this__5350__auto____$1 = this;
var G__46729 = k46709;
var G__46729__$1 = (((G__46729 instanceof cljs.core.Keyword))?G__46729.fqn:null);
switch (G__46729__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46709);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__46708){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__46735 = cljs.core.keyword_identical_QMARK_;
var expr__46736 = k__5352__auto__;
if(cljs.core.truth_((pred__46735.cljs$core$IFn$_invoke$arity$2 ? pred__46735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__46736) : pred__46735.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__46736)))){
return (new shadow.dom.Size(G__46708,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46735.cljs$core$IFn$_invoke$arity$2 ? pred__46735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__46736) : pred__46735.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__46736)))){
return (new shadow.dom.Size(self__.w,G__46708,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__46708),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__46708){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__46708,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__46712){
var extmap__5385__auto__ = (function (){var G__46749 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46712,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__46712)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46749);
} else {
return G__46749;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__46712),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__46712),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__47328 = (i + (1));
var G__47329 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__47328;
ret = G__47329;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46781){
var vec__46782 = p__46781;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46782,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46782,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__46794 = arguments.length;
switch (G__46794) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__47336 = ps;
var G__47337 = (i + (1));
el__$1 = G__47336;
i = G__47337;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__46836 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46836,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46836,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46836,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__46842_47338 = cljs.core.seq(props);
var chunk__46843_47339 = null;
var count__46844_47340 = (0);
var i__46845_47341 = (0);
while(true){
if((i__46845_47341 < count__46844_47340)){
var vec__46864_47342 = chunk__46843_47339.cljs$core$IIndexed$_nth$arity$2(null,i__46845_47341);
var k_47343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46864_47342,(0),null);
var v_47344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46864_47342,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_47343);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47343),v_47344);


var G__47346 = seq__46842_47338;
var G__47347 = chunk__46843_47339;
var G__47348 = count__46844_47340;
var G__47349 = (i__46845_47341 + (1));
seq__46842_47338 = G__47346;
chunk__46843_47339 = G__47347;
count__46844_47340 = G__47348;
i__46845_47341 = G__47349;
continue;
} else {
var temp__5804__auto___47350 = cljs.core.seq(seq__46842_47338);
if(temp__5804__auto___47350){
var seq__46842_47351__$1 = temp__5804__auto___47350;
if(cljs.core.chunked_seq_QMARK_(seq__46842_47351__$1)){
var c__5568__auto___47352 = cljs.core.chunk_first(seq__46842_47351__$1);
var G__47353 = cljs.core.chunk_rest(seq__46842_47351__$1);
var G__47354 = c__5568__auto___47352;
var G__47355 = cljs.core.count(c__5568__auto___47352);
var G__47356 = (0);
seq__46842_47338 = G__47353;
chunk__46843_47339 = G__47354;
count__46844_47340 = G__47355;
i__46845_47341 = G__47356;
continue;
} else {
var vec__46876_47357 = cljs.core.first(seq__46842_47351__$1);
var k_47358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46876_47357,(0),null);
var v_47359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46876_47357,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_47358);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47358),v_47359);


var G__47360 = cljs.core.next(seq__46842_47351__$1);
var G__47361 = null;
var G__47362 = (0);
var G__47363 = (0);
seq__46842_47338 = G__47360;
chunk__46843_47339 = G__47361;
count__46844_47340 = G__47362;
i__46845_47341 = G__47363;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__46888 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46888,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46888,(1),null);
var seq__46891_47364 = cljs.core.seq(node_children);
var chunk__46897_47365 = null;
var count__46898_47366 = (0);
var i__46899_47367 = (0);
while(true){
if((i__46899_47367 < count__46898_47366)){
var child_struct_47368 = chunk__46897_47365.cljs$core$IIndexed$_nth$arity$2(null,i__46899_47367);
if((!((child_struct_47368 == null)))){
if(typeof child_struct_47368 === 'string'){
var text_47369 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47369),child_struct_47368].join(''));
} else {
var children_47370 = shadow.dom.svg_node(child_struct_47368);
if(cljs.core.seq_QMARK_(children_47370)){
var seq__46934_47371 = cljs.core.seq(children_47370);
var chunk__46936_47372 = null;
var count__46937_47373 = (0);
var i__46938_47374 = (0);
while(true){
if((i__46938_47374 < count__46937_47373)){
var child_47375 = chunk__46936_47372.cljs$core$IIndexed$_nth$arity$2(null,i__46938_47374);
if(cljs.core.truth_(child_47375)){
node.appendChild(child_47375);


var G__47376 = seq__46934_47371;
var G__47377 = chunk__46936_47372;
var G__47378 = count__46937_47373;
var G__47379 = (i__46938_47374 + (1));
seq__46934_47371 = G__47376;
chunk__46936_47372 = G__47377;
count__46937_47373 = G__47378;
i__46938_47374 = G__47379;
continue;
} else {
var G__47380 = seq__46934_47371;
var G__47381 = chunk__46936_47372;
var G__47382 = count__46937_47373;
var G__47383 = (i__46938_47374 + (1));
seq__46934_47371 = G__47380;
chunk__46936_47372 = G__47381;
count__46937_47373 = G__47382;
i__46938_47374 = G__47383;
continue;
}
} else {
var temp__5804__auto___47386 = cljs.core.seq(seq__46934_47371);
if(temp__5804__auto___47386){
var seq__46934_47387__$1 = temp__5804__auto___47386;
if(cljs.core.chunked_seq_QMARK_(seq__46934_47387__$1)){
var c__5568__auto___47388 = cljs.core.chunk_first(seq__46934_47387__$1);
var G__47390 = cljs.core.chunk_rest(seq__46934_47387__$1);
var G__47391 = c__5568__auto___47388;
var G__47392 = cljs.core.count(c__5568__auto___47388);
var G__47393 = (0);
seq__46934_47371 = G__47390;
chunk__46936_47372 = G__47391;
count__46937_47373 = G__47392;
i__46938_47374 = G__47393;
continue;
} else {
var child_47396 = cljs.core.first(seq__46934_47387__$1);
if(cljs.core.truth_(child_47396)){
node.appendChild(child_47396);


var G__47397 = cljs.core.next(seq__46934_47387__$1);
var G__47398 = null;
var G__47399 = (0);
var G__47400 = (0);
seq__46934_47371 = G__47397;
chunk__46936_47372 = G__47398;
count__46937_47373 = G__47399;
i__46938_47374 = G__47400;
continue;
} else {
var G__47401 = cljs.core.next(seq__46934_47387__$1);
var G__47402 = null;
var G__47403 = (0);
var G__47404 = (0);
seq__46934_47371 = G__47401;
chunk__46936_47372 = G__47402;
count__46937_47373 = G__47403;
i__46938_47374 = G__47404;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47370);
}
}


var G__47405 = seq__46891_47364;
var G__47406 = chunk__46897_47365;
var G__47407 = count__46898_47366;
var G__47408 = (i__46899_47367 + (1));
seq__46891_47364 = G__47405;
chunk__46897_47365 = G__47406;
count__46898_47366 = G__47407;
i__46899_47367 = G__47408;
continue;
} else {
var G__47409 = seq__46891_47364;
var G__47410 = chunk__46897_47365;
var G__47411 = count__46898_47366;
var G__47412 = (i__46899_47367 + (1));
seq__46891_47364 = G__47409;
chunk__46897_47365 = G__47410;
count__46898_47366 = G__47411;
i__46899_47367 = G__47412;
continue;
}
} else {
var temp__5804__auto___47413 = cljs.core.seq(seq__46891_47364);
if(temp__5804__auto___47413){
var seq__46891_47414__$1 = temp__5804__auto___47413;
if(cljs.core.chunked_seq_QMARK_(seq__46891_47414__$1)){
var c__5568__auto___47415 = cljs.core.chunk_first(seq__46891_47414__$1);
var G__47416 = cljs.core.chunk_rest(seq__46891_47414__$1);
var G__47417 = c__5568__auto___47415;
var G__47418 = cljs.core.count(c__5568__auto___47415);
var G__47419 = (0);
seq__46891_47364 = G__47416;
chunk__46897_47365 = G__47417;
count__46898_47366 = G__47418;
i__46899_47367 = G__47419;
continue;
} else {
var child_struct_47420 = cljs.core.first(seq__46891_47414__$1);
if((!((child_struct_47420 == null)))){
if(typeof child_struct_47420 === 'string'){
var text_47421 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47421),child_struct_47420].join(''));
} else {
var children_47422 = shadow.dom.svg_node(child_struct_47420);
if(cljs.core.seq_QMARK_(children_47422)){
var seq__46944_47423 = cljs.core.seq(children_47422);
var chunk__46946_47424 = null;
var count__46947_47425 = (0);
var i__46948_47426 = (0);
while(true){
if((i__46948_47426 < count__46947_47425)){
var child_47428 = chunk__46946_47424.cljs$core$IIndexed$_nth$arity$2(null,i__46948_47426);
if(cljs.core.truth_(child_47428)){
node.appendChild(child_47428);


var G__47429 = seq__46944_47423;
var G__47430 = chunk__46946_47424;
var G__47431 = count__46947_47425;
var G__47432 = (i__46948_47426 + (1));
seq__46944_47423 = G__47429;
chunk__46946_47424 = G__47430;
count__46947_47425 = G__47431;
i__46948_47426 = G__47432;
continue;
} else {
var G__47433 = seq__46944_47423;
var G__47434 = chunk__46946_47424;
var G__47435 = count__46947_47425;
var G__47436 = (i__46948_47426 + (1));
seq__46944_47423 = G__47433;
chunk__46946_47424 = G__47434;
count__46947_47425 = G__47435;
i__46948_47426 = G__47436;
continue;
}
} else {
var temp__5804__auto___47437__$1 = cljs.core.seq(seq__46944_47423);
if(temp__5804__auto___47437__$1){
var seq__46944_47439__$1 = temp__5804__auto___47437__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46944_47439__$1)){
var c__5568__auto___47440 = cljs.core.chunk_first(seq__46944_47439__$1);
var G__47441 = cljs.core.chunk_rest(seq__46944_47439__$1);
var G__47442 = c__5568__auto___47440;
var G__47443 = cljs.core.count(c__5568__auto___47440);
var G__47444 = (0);
seq__46944_47423 = G__47441;
chunk__46946_47424 = G__47442;
count__46947_47425 = G__47443;
i__46948_47426 = G__47444;
continue;
} else {
var child_47445 = cljs.core.first(seq__46944_47439__$1);
if(cljs.core.truth_(child_47445)){
node.appendChild(child_47445);


var G__47446 = cljs.core.next(seq__46944_47439__$1);
var G__47447 = null;
var G__47448 = (0);
var G__47449 = (0);
seq__46944_47423 = G__47446;
chunk__46946_47424 = G__47447;
count__46947_47425 = G__47448;
i__46948_47426 = G__47449;
continue;
} else {
var G__47450 = cljs.core.next(seq__46944_47439__$1);
var G__47451 = null;
var G__47452 = (0);
var G__47453 = (0);
seq__46944_47423 = G__47450;
chunk__46946_47424 = G__47451;
count__46947_47425 = G__47452;
i__46948_47426 = G__47453;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47422);
}
}


var G__47455 = cljs.core.next(seq__46891_47414__$1);
var G__47456 = null;
var G__47457 = (0);
var G__47458 = (0);
seq__46891_47364 = G__47455;
chunk__46897_47365 = G__47456;
count__46898_47366 = G__47457;
i__46899_47367 = G__47458;
continue;
} else {
var G__47459 = cljs.core.next(seq__46891_47414__$1);
var G__47460 = null;
var G__47461 = (0);
var G__47462 = (0);
seq__46891_47364 = G__47459;
chunk__46897_47365 = G__47460;
count__46898_47366 = G__47461;
i__46899_47367 = G__47462;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47469 = arguments.length;
var i__5770__auto___47470 = (0);
while(true){
if((i__5770__auto___47470 < len__5769__auto___47469)){
args__5775__auto__.push((arguments[i__5770__auto___47470]));

var G__47471 = (i__5770__auto___47470 + (1));
i__5770__auto___47470 = G__47471;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq46956){
var G__46957 = cljs.core.first(seq46956);
var seq46956__$1 = cljs.core.next(seq46956);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46957,seq46956__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__46965 = arguments.length;
switch (G__46965) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__43292__auto___47477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43144__auto__ = (function (state_46972){
var state_val_46973 = (state_46972[(1)]);
if((state_val_46973 === (1))){
var state_46972__$1 = state_46972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46972__$1,(2),once_or_cleanup);
} else {
if((state_val_46973 === (2))){
var inst_46969 = (state_46972[(2)]);
var inst_46970 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_46972__$1 = (function (){var statearr_46974 = state_46972;
(statearr_46974[(7)] = inst_46969);

return statearr_46974;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46972__$1,inst_46970);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__43145__auto__ = null;
var shadow$dom$state_machine__43145__auto____0 = (function (){
var statearr_46975 = [null,null,null,null,null,null,null,null];
(statearr_46975[(0)] = shadow$dom$state_machine__43145__auto__);

(statearr_46975[(1)] = (1));

return statearr_46975;
});
var shadow$dom$state_machine__43145__auto____1 = (function (state_46972){
while(true){
var ret_value__43146__auto__ = (function (){try{while(true){
var result__43147__auto__ = switch__43144__auto__(state_46972);
if(cljs.core.keyword_identical_QMARK_(result__43147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43147__auto__;
}
break;
}
}catch (e46976){var ex__43148__auto__ = e46976;
var statearr_46977_47482 = state_46972;
(statearr_46977_47482[(2)] = ex__43148__auto__);


if(cljs.core.seq((state_46972[(4)]))){
var statearr_46978_47483 = state_46972;
(statearr_46978_47483[(1)] = cljs.core.first((state_46972[(4)])));

} else {
throw ex__43148__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47484 = state_46972;
state_46972 = G__47484;
continue;
} else {
return ret_value__43146__auto__;
}
break;
}
});
shadow$dom$state_machine__43145__auto__ = function(state_46972){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__43145__auto____0.call(this);
case 1:
return shadow$dom$state_machine__43145__auto____1.call(this,state_46972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__43145__auto____0;
shadow$dom$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__43145__auto____1;
return shadow$dom$state_machine__43145__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_46981 = f__43293__auto__();
(statearr_46981[(6)] = c__43292__auto___47477);

return statearr_46981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
