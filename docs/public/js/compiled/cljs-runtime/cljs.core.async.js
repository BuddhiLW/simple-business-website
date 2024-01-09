goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__43381 = arguments.length;
switch (G__43381) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43384 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43384 = (function (f,blockable,meta43385){
this.f = f;
this.blockable = blockable;
this.meta43385 = meta43385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43386,meta43385__$1){
var self__ = this;
var _43386__$1 = this;
return (new cljs.core.async.t_cljs$core$async43384(self__.f,self__.blockable,meta43385__$1));
}));

(cljs.core.async.t_cljs$core$async43384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43386){
var self__ = this;
var _43386__$1 = this;
return self__.meta43385;
}));

(cljs.core.async.t_cljs$core$async43384.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43384.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43384.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async43384.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async43384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43385","meta43385",1609301201,null)], null);
}));

(cljs.core.async.t_cljs$core$async43384.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43384");

(cljs.core.async.t_cljs$core$async43384.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43384");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43384.
 */
cljs.core.async.__GT_t_cljs$core$async43384 = (function cljs$core$async$__GT_t_cljs$core$async43384(f__$1,blockable__$1,meta43385){
return (new cljs.core.async.t_cljs$core$async43384(f__$1,blockable__$1,meta43385));
});

}

return (new cljs.core.async.t_cljs$core$async43384(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__43448 = arguments.length;
switch (G__43448) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__43466 = arguments.length;
switch (G__43466) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__43480 = arguments.length;
switch (G__43480) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_45950 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45950) : fn1.call(null,val_45950));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45950) : fn1.call(null,val_45950));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__43502 = arguments.length;
switch (G__43502) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___45959 = n;
var x_45960 = (0);
while(true){
if((x_45960 < n__5636__auto___45959)){
(a[x_45960] = x_45960);

var G__45966 = (x_45960 + (1));
x_45960 = G__45966;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43509 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43509 = (function (flag,meta43510){
this.flag = flag;
this.meta43510 = meta43510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43511,meta43510__$1){
var self__ = this;
var _43511__$1 = this;
return (new cljs.core.async.t_cljs$core$async43509(self__.flag,meta43510__$1));
}));

(cljs.core.async.t_cljs$core$async43509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43511){
var self__ = this;
var _43511__$1 = this;
return self__.meta43510;
}));

(cljs.core.async.t_cljs$core$async43509.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43509.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43509.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43509.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async43509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43510","meta43510",-1873974655,null)], null);
}));

(cljs.core.async.t_cljs$core$async43509.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43509");

(cljs.core.async.t_cljs$core$async43509.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43509");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43509.
 */
cljs.core.async.__GT_t_cljs$core$async43509 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43509(flag__$1,meta43510){
return (new cljs.core.async.t_cljs$core$async43509(flag__$1,meta43510));
});

}

return (new cljs.core.async.t_cljs$core$async43509(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43518 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43518 = (function (flag,cb,meta43519){
this.flag = flag;
this.cb = cb;
this.meta43519 = meta43519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43520,meta43519__$1){
var self__ = this;
var _43520__$1 = this;
return (new cljs.core.async.t_cljs$core$async43518(self__.flag,self__.cb,meta43519__$1));
}));

(cljs.core.async.t_cljs$core$async43518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43520){
var self__ = this;
var _43520__$1 = this;
return self__.meta43519;
}));

(cljs.core.async.t_cljs$core$async43518.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43518.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43518.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43518.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async43518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43519","meta43519",1458179234,null)], null);
}));

(cljs.core.async.t_cljs$core$async43518.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43518");

(cljs.core.async.t_cljs$core$async43518.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43518");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43518.
 */
cljs.core.async.__GT_t_cljs$core$async43518 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43518(flag__$1,cb__$1,meta43519){
return (new cljs.core.async.t_cljs$core$async43518(flag__$1,cb__$1,meta43519));
});

}

return (new cljs.core.async.t_cljs$core$async43518(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43524_SHARP_){
var G__43526 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43524_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43526) : fret.call(null,G__43526));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43525_SHARP_){
var G__43528 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43525_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43528) : fret.call(null,G__43528));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46014 = (i + (1));
i = G__46014;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46025 = arguments.length;
var i__5770__auto___46026 = (0);
while(true){
if((i__5770__auto___46026 < len__5769__auto___46025)){
args__5775__auto__.push((arguments[i__5770__auto___46026]));

var G__46027 = (i__5770__auto___46026 + (1));
i__5770__auto___46026 = G__46027;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43535){
var map__43536 = p__43535;
var map__43536__$1 = cljs.core.__destructure_map(map__43536);
var opts = map__43536__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43530){
var G__43531 = cljs.core.first(seq43530);
var seq43530__$1 = cljs.core.next(seq43530);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43531,seq43530__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__43538 = arguments.length;
switch (G__43538) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__43292__auto___46031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43144__auto__ = (function (state_43580){
var state_val_43581 = (state_43580[(1)]);
if((state_val_43581 === (7))){
var inst_43576 = (state_43580[(2)]);
var state_43580__$1 = state_43580;
var statearr_43586_46032 = state_43580__$1;
(statearr_43586_46032[(2)] = inst_43576);

(statearr_43586_46032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (1))){
var state_43580__$1 = state_43580;
var statearr_43587_46033 = state_43580__$1;
(statearr_43587_46033[(2)] = null);

(statearr_43587_46033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (4))){
var inst_43550 = (state_43580[(7)]);
var inst_43550__$1 = (state_43580[(2)]);
var inst_43556 = (inst_43550__$1 == null);
var state_43580__$1 = (function (){var statearr_43588 = state_43580;
(statearr_43588[(7)] = inst_43550__$1);

return statearr_43588;
})();
if(cljs.core.truth_(inst_43556)){
var statearr_43589_46034 = state_43580__$1;
(statearr_43589_46034[(1)] = (5));

} else {
var statearr_43590_46035 = state_43580__$1;
(statearr_43590_46035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (13))){
var state_43580__$1 = state_43580;
var statearr_43593_46036 = state_43580__$1;
(statearr_43593_46036[(2)] = null);

(statearr_43593_46036[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (6))){
var inst_43550 = (state_43580[(7)]);
var state_43580__$1 = state_43580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43580__$1,(11),to,inst_43550);
} else {
if((state_val_43581 === (3))){
var inst_43578 = (state_43580[(2)]);
var state_43580__$1 = state_43580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43580__$1,inst_43578);
} else {
if((state_val_43581 === (12))){
var state_43580__$1 = state_43580;
var statearr_43594_46037 = state_43580__$1;
(statearr_43594_46037[(2)] = null);

(statearr_43594_46037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (2))){
var state_43580__$1 = state_43580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43580__$1,(4),from);
} else {
if((state_val_43581 === (11))){
var inst_43568 = (state_43580[(2)]);
var state_43580__$1 = state_43580;
if(cljs.core.truth_(inst_43568)){
var statearr_43595_46038 = state_43580__$1;
(statearr_43595_46038[(1)] = (12));

} else {
var statearr_43596_46039 = state_43580__$1;
(statearr_43596_46039[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (9))){
var state_43580__$1 = state_43580;
var statearr_43597_46040 = state_43580__$1;
(statearr_43597_46040[(2)] = null);

(statearr_43597_46040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (5))){
var state_43580__$1 = state_43580;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43598_46041 = state_43580__$1;
(statearr_43598_46041[(1)] = (8));

} else {
var statearr_43599_46042 = state_43580__$1;
(statearr_43599_46042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (14))){
var inst_43574 = (state_43580[(2)]);
var state_43580__$1 = state_43580;
var statearr_43600_46045 = state_43580__$1;
(statearr_43600_46045[(2)] = inst_43574);

(statearr_43600_46045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (10))){
var inst_43565 = (state_43580[(2)]);
var state_43580__$1 = state_43580;
var statearr_43601_46050 = state_43580__$1;
(statearr_43601_46050[(2)] = inst_43565);

(statearr_43601_46050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (8))){
var inst_43560 = cljs.core.async.close_BANG_(to);
var state_43580__$1 = state_43580;
var statearr_43602_46051 = state_43580__$1;
(statearr_43602_46051[(2)] = inst_43560);

(statearr_43602_46051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43145__auto__ = null;
var cljs$core$async$state_machine__43145__auto____0 = (function (){
var statearr_43603 = [null,null,null,null,null,null,null,null];
(statearr_43603[(0)] = cljs$core$async$state_machine__43145__auto__);

(statearr_43603[(1)] = (1));

return statearr_43603;
});
var cljs$core$async$state_machine__43145__auto____1 = (function (state_43580){
while(true){
var ret_value__43146__auto__ = (function (){try{while(true){
var result__43147__auto__ = switch__43144__auto__(state_43580);
if(cljs.core.keyword_identical_QMARK_(result__43147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43147__auto__;
}
break;
}
}catch (e43606){var ex__43148__auto__ = e43606;
var statearr_43607_46052 = state_43580;
(statearr_43607_46052[(2)] = ex__43148__auto__);


if(cljs.core.seq((state_43580[(4)]))){
var statearr_43608_46053 = state_43580;
(statearr_43608_46053[(1)] = cljs.core.first((state_43580[(4)])));

} else {
throw ex__43148__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46054 = state_43580;
state_43580 = G__46054;
continue;
} else {
return ret_value__43146__auto__;
}
break;
}
});
cljs$core$async$state_machine__43145__auto__ = function(state_43580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43145__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43145__auto____1.call(this,state_43580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43145__auto____0;
cljs$core$async$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43145__auto____1;
return cljs$core$async$state_machine__43145__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_43609 = f__43293__auto__();
(statearr_43609[(6)] = c__43292__auto___46031);

return statearr_43609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__43610){
var vec__43611 = p__43610;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43611,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43611,(1),null);
var job = vec__43611;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43292__auto___46056 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43144__auto__ = (function (state_43618){
var state_val_43619 = (state_43618[(1)]);
if((state_val_43619 === (1))){
var state_43618__$1 = state_43618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43618__$1,(2),res,v);
} else {
if((state_val_43619 === (2))){
var inst_43615 = (state_43618[(2)]);
var inst_43616 = cljs.core.async.close_BANG_(res);
var state_43618__$1 = (function (){var statearr_43620 = state_43618;
(statearr_43620[(7)] = inst_43615);

return statearr_43620;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43618__$1,inst_43616);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____0 = (function (){
var statearr_43624 = [null,null,null,null,null,null,null,null];
(statearr_43624[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__);

(statearr_43624[(1)] = (1));

return statearr_43624;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____1 = (function (state_43618){
while(true){
var ret_value__43146__auto__ = (function (){try{while(true){
var result__43147__auto__ = switch__43144__auto__(state_43618);
if(cljs.core.keyword_identical_QMARK_(result__43147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43147__auto__;
}
break;
}
}catch (e43625){var ex__43148__auto__ = e43625;
var statearr_43626_46059 = state_43618;
(statearr_43626_46059[(2)] = ex__43148__auto__);


if(cljs.core.seq((state_43618[(4)]))){
var statearr_43627_46061 = state_43618;
(statearr_43627_46061[(1)] = cljs.core.first((state_43618[(4)])));

} else {
throw ex__43148__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46062 = state_43618;
state_43618 = G__46062;
continue;
} else {
return ret_value__43146__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__ = function(state_43618){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____1.call(this,state_43618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_43628 = f__43293__auto__();
(statearr_43628[(6)] = c__43292__auto___46056);

return statearr_43628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__43629){
var vec__43633 = p__43629;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43633,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43633,(1),null);
var job = vec__43633;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___46068 = n;
var __46069 = (0);
while(true){
if((__46069 < n__5636__auto___46068)){
var G__43636_46070 = type;
var G__43636_46071__$1 = (((G__43636_46070 instanceof cljs.core.Keyword))?G__43636_46070.fqn:null);
switch (G__43636_46071__$1) {
case "compute":
var c__43292__auto___46074 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46069,c__43292__auto___46074,G__43636_46070,G__43636_46071__$1,n__5636__auto___46068,jobs,results,process__$1,async){
return (function (){
var f__43293__auto__ = (function (){var switch__43144__auto__ = ((function (__46069,c__43292__auto___46074,G__43636_46070,G__43636_46071__$1,n__5636__auto___46068,jobs,results,process__$1,async){
return (function (state_43650){
var state_val_43651 = (state_43650[(1)]);
if((state_val_43651 === (1))){
var state_43650__$1 = state_43650;
var statearr_43653_46075 = state_43650__$1;
(statearr_43653_46075[(2)] = null);

(statearr_43653_46075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43651 === (2))){
var state_43650__$1 = state_43650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43650__$1,(4),jobs);
} else {
if((state_val_43651 === (3))){
var inst_43648 = (state_43650[(2)]);
var state_43650__$1 = state_43650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43650__$1,inst_43648);
} else {
if((state_val_43651 === (4))){
var inst_43639 = (state_43650[(2)]);
var inst_43640 = process__$1(inst_43639);
var state_43650__$1 = state_43650;
if(cljs.core.truth_(inst_43640)){
var statearr_43654_46076 = state_43650__$1;
(statearr_43654_46076[(1)] = (5));

} else {
var statearr_43655_46077 = state_43650__$1;
(statearr_43655_46077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43651 === (5))){
var state_43650__$1 = state_43650;
var statearr_43656_46078 = state_43650__$1;
(statearr_43656_46078[(2)] = null);

(statearr_43656_46078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43651 === (6))){
var state_43650__$1 = state_43650;
var statearr_43657_46079 = state_43650__$1;
(statearr_43657_46079[(2)] = null);

(statearr_43657_46079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43651 === (7))){
var inst_43646 = (state_43650[(2)]);
var state_43650__$1 = state_43650;
var statearr_43658_46080 = state_43650__$1;
(statearr_43658_46080[(2)] = inst_43646);

(statearr_43658_46080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46069,c__43292__auto___46074,G__43636_46070,G__43636_46071__$1,n__5636__auto___46068,jobs,results,process__$1,async))
;
return ((function (__46069,switch__43144__auto__,c__43292__auto___46074,G__43636_46070,G__43636_46071__$1,n__5636__auto___46068,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____0 = (function (){
var statearr_43663 = [null,null,null,null,null,null,null];
(statearr_43663[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__);

(statearr_43663[(1)] = (1));

return statearr_43663;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____1 = (function (state_43650){
while(true){
var ret_value__43146__auto__ = (function (){try{while(true){
var result__43147__auto__ = switch__43144__auto__(state_43650);
if(cljs.core.keyword_identical_QMARK_(result__43147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43147__auto__;
}
break;
}
}catch (e43664){var ex__43148__auto__ = e43664;
var statearr_43665_46087 = state_43650;
(statearr_43665_46087[(2)] = ex__43148__auto__);


if(cljs.core.seq((state_43650[(4)]))){
var statearr_43666_46088 = state_43650;
(statearr_43666_46088[(1)] = cljs.core.first((state_43650[(4)])));

} else {
throw ex__43148__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46089 = state_43650;
state_43650 = G__46089;
continue;
} else {
return ret_value__43146__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__ = function(state_43650){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____1.call(this,state_43650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__;
})()
;})(__46069,switch__43144__auto__,c__43292__auto___46074,G__43636_46070,G__43636_46071__$1,n__5636__auto___46068,jobs,results,process__$1,async))
})();
var state__43294__auto__ = (function (){var statearr_43667 = f__43293__auto__();
(statearr_43667[(6)] = c__43292__auto___46074);

return statearr_43667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
});})(__46069,c__43292__auto___46074,G__43636_46070,G__43636_46071__$1,n__5636__auto___46068,jobs,results,process__$1,async))
);


break;
case "async":
var c__43292__auto___46090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46069,c__43292__auto___46090,G__43636_46070,G__43636_46071__$1,n__5636__auto___46068,jobs,results,process__$1,async){
return (function (){
var f__43293__auto__ = (function (){var switch__43144__auto__ = ((function (__46069,c__43292__auto___46090,G__43636_46070,G__43636_46071__$1,n__5636__auto___46068,jobs,results,process__$1,async){
return (function (state_43680){
var state_val_43681 = (state_43680[(1)]);
if((state_val_43681 === (1))){
var state_43680__$1 = state_43680;
var statearr_43682_46091 = state_43680__$1;
(statearr_43682_46091[(2)] = null);

(statearr_43682_46091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (2))){
var state_43680__$1 = state_43680;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43680__$1,(4),jobs);
} else {
if((state_val_43681 === (3))){
var inst_43678 = (state_43680[(2)]);
var state_43680__$1 = state_43680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43680__$1,inst_43678);
} else {
if((state_val_43681 === (4))){
var inst_43670 = (state_43680[(2)]);
var inst_43671 = async(inst_43670);
var state_43680__$1 = state_43680;
if(cljs.core.truth_(inst_43671)){
var statearr_43687_46093 = state_43680__$1;
(statearr_43687_46093[(1)] = (5));

} else {
var statearr_43688_46094 = state_43680__$1;
(statearr_43688_46094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (5))){
var state_43680__$1 = state_43680;
var statearr_43689_46095 = state_43680__$1;
(statearr_43689_46095[(2)] = null);

(statearr_43689_46095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (6))){
var state_43680__$1 = state_43680;
var statearr_43690_46097 = state_43680__$1;
(statearr_43690_46097[(2)] = null);

(statearr_43690_46097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (7))){
var inst_43676 = (state_43680[(2)]);
var state_43680__$1 = state_43680;
var statearr_43691_46098 = state_43680__$1;
(statearr_43691_46098[(2)] = inst_43676);

(statearr_43691_46098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46069,c__43292__auto___46090,G__43636_46070,G__43636_46071__$1,n__5636__auto___46068,jobs,results,process__$1,async))
;
return ((function (__46069,switch__43144__auto__,c__43292__auto___46090,G__43636_46070,G__43636_46071__$1,n__5636__auto___46068,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____0 = (function (){
var statearr_43692 = [null,null,null,null,null,null,null];
(statearr_43692[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__);

(statearr_43692[(1)] = (1));

return statearr_43692;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____1 = (function (state_43680){
while(true){
var ret_value__43146__auto__ = (function (){try{while(true){
var result__43147__auto__ = switch__43144__auto__(state_43680);
if(cljs.core.keyword_identical_QMARK_(result__43147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43147__auto__;
}
break;
}
}catch (e43693){var ex__43148__auto__ = e43693;
var statearr_43694_46099 = state_43680;
(statearr_43694_46099[(2)] = ex__43148__auto__);


if(cljs.core.seq((state_43680[(4)]))){
var statearr_43695_46100 = state_43680;
(statearr_43695_46100[(1)] = cljs.core.first((state_43680[(4)])));

} else {
throw ex__43148__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46101 = state_43680;
state_43680 = G__46101;
continue;
} else {
return ret_value__43146__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__ = function(state_43680){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____1.call(this,state_43680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__;
})()
;})(__46069,switch__43144__auto__,c__43292__auto___46090,G__43636_46070,G__43636_46071__$1,n__5636__auto___46068,jobs,results,process__$1,async))
})();
var state__43294__auto__ = (function (){var statearr_43698 = f__43293__auto__();
(statearr_43698[(6)] = c__43292__auto___46090);

return statearr_43698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
});})(__46069,c__43292__auto___46090,G__43636_46070,G__43636_46071__$1,n__5636__auto___46068,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43636_46071__$1)].join('')));

}

var G__46102 = (__46069 + (1));
__46069 = G__46102;
continue;
} else {
}
break;
}

var c__43292__auto___46103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43144__auto__ = (function (state_43723){
var state_val_43724 = (state_43723[(1)]);
if((state_val_43724 === (7))){
var inst_43719 = (state_43723[(2)]);
var state_43723__$1 = state_43723;
var statearr_43726_46104 = state_43723__$1;
(statearr_43726_46104[(2)] = inst_43719);

(statearr_43726_46104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43724 === (1))){
var state_43723__$1 = state_43723;
var statearr_43728_46105 = state_43723__$1;
(statearr_43728_46105[(2)] = null);

(statearr_43728_46105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43724 === (4))){
var inst_43701 = (state_43723[(7)]);
var inst_43701__$1 = (state_43723[(2)]);
var inst_43702 = (inst_43701__$1 == null);
var state_43723__$1 = (function (){var statearr_43730 = state_43723;
(statearr_43730[(7)] = inst_43701__$1);

return statearr_43730;
})();
if(cljs.core.truth_(inst_43702)){
var statearr_43731_46106 = state_43723__$1;
(statearr_43731_46106[(1)] = (5));

} else {
var statearr_43732_46107 = state_43723__$1;
(statearr_43732_46107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43724 === (6))){
var inst_43701 = (state_43723[(7)]);
var inst_43706 = (state_43723[(8)]);
var inst_43706__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_43710 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43711 = [inst_43701,inst_43706__$1];
var inst_43712 = (new cljs.core.PersistentVector(null,2,(5),inst_43710,inst_43711,null));
var state_43723__$1 = (function (){var statearr_43742 = state_43723;
(statearr_43742[(8)] = inst_43706__$1);

return statearr_43742;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43723__$1,(8),jobs,inst_43712);
} else {
if((state_val_43724 === (3))){
var inst_43721 = (state_43723[(2)]);
var state_43723__$1 = state_43723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43723__$1,inst_43721);
} else {
if((state_val_43724 === (2))){
var state_43723__$1 = state_43723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43723__$1,(4),from);
} else {
if((state_val_43724 === (9))){
var inst_43716 = (state_43723[(2)]);
var state_43723__$1 = (function (){var statearr_43743 = state_43723;
(statearr_43743[(9)] = inst_43716);

return statearr_43743;
})();
var statearr_43744_46111 = state_43723__$1;
(statearr_43744_46111[(2)] = null);

(statearr_43744_46111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43724 === (5))){
var inst_43704 = cljs.core.async.close_BANG_(jobs);
var state_43723__$1 = state_43723;
var statearr_43745_46112 = state_43723__$1;
(statearr_43745_46112[(2)] = inst_43704);

(statearr_43745_46112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43724 === (8))){
var inst_43706 = (state_43723[(8)]);
var inst_43714 = (state_43723[(2)]);
var state_43723__$1 = (function (){var statearr_43755 = state_43723;
(statearr_43755[(10)] = inst_43714);

return statearr_43755;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43723__$1,(9),results,inst_43706);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____0 = (function (){
var statearr_43756 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43756[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__);

(statearr_43756[(1)] = (1));

return statearr_43756;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____1 = (function (state_43723){
while(true){
var ret_value__43146__auto__ = (function (){try{while(true){
var result__43147__auto__ = switch__43144__auto__(state_43723);
if(cljs.core.keyword_identical_QMARK_(result__43147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43147__auto__;
}
break;
}
}catch (e43757){var ex__43148__auto__ = e43757;
var statearr_43758_46115 = state_43723;
(statearr_43758_46115[(2)] = ex__43148__auto__);


if(cljs.core.seq((state_43723[(4)]))){
var statearr_43759_46116 = state_43723;
(statearr_43759_46116[(1)] = cljs.core.first((state_43723[(4)])));

} else {
throw ex__43148__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46117 = state_43723;
state_43723 = G__46117;
continue;
} else {
return ret_value__43146__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__ = function(state_43723){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____1.call(this,state_43723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_43760 = f__43293__auto__();
(statearr_43760[(6)] = c__43292__auto___46103);

return statearr_43760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


var c__43292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43144__auto__ = (function (state_43801){
var state_val_43802 = (state_43801[(1)]);
if((state_val_43802 === (7))){
var inst_43797 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
var statearr_43806_46120 = state_43801__$1;
(statearr_43806_46120[(2)] = inst_43797);

(statearr_43806_46120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (20))){
var state_43801__$1 = state_43801;
var statearr_43807_46121 = state_43801__$1;
(statearr_43807_46121[(2)] = null);

(statearr_43807_46121[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (1))){
var state_43801__$1 = state_43801;
var statearr_43808_46122 = state_43801__$1;
(statearr_43808_46122[(2)] = null);

(statearr_43808_46122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (4))){
var inst_43763 = (state_43801[(7)]);
var inst_43763__$1 = (state_43801[(2)]);
var inst_43764 = (inst_43763__$1 == null);
var state_43801__$1 = (function (){var statearr_43809 = state_43801;
(statearr_43809[(7)] = inst_43763__$1);

return statearr_43809;
})();
if(cljs.core.truth_(inst_43764)){
var statearr_43810_46124 = state_43801__$1;
(statearr_43810_46124[(1)] = (5));

} else {
var statearr_43811_46125 = state_43801__$1;
(statearr_43811_46125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (15))){
var inst_43779 = (state_43801[(8)]);
var state_43801__$1 = state_43801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43801__$1,(18),to,inst_43779);
} else {
if((state_val_43802 === (21))){
var inst_43792 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
var statearr_43812_46129 = state_43801__$1;
(statearr_43812_46129[(2)] = inst_43792);

(statearr_43812_46129[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (13))){
var inst_43794 = (state_43801[(2)]);
var state_43801__$1 = (function (){var statearr_43813 = state_43801;
(statearr_43813[(9)] = inst_43794);

return statearr_43813;
})();
var statearr_43814_46130 = state_43801__$1;
(statearr_43814_46130[(2)] = null);

(statearr_43814_46130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (6))){
var inst_43763 = (state_43801[(7)]);
var state_43801__$1 = state_43801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43801__$1,(11),inst_43763);
} else {
if((state_val_43802 === (17))){
var inst_43787 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
if(cljs.core.truth_(inst_43787)){
var statearr_43818_46131 = state_43801__$1;
(statearr_43818_46131[(1)] = (19));

} else {
var statearr_43819_46132 = state_43801__$1;
(statearr_43819_46132[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (3))){
var inst_43799 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43801__$1,inst_43799);
} else {
if((state_val_43802 === (12))){
var inst_43773 = (state_43801[(10)]);
var state_43801__$1 = state_43801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43801__$1,(14),inst_43773);
} else {
if((state_val_43802 === (2))){
var state_43801__$1 = state_43801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43801__$1,(4),results);
} else {
if((state_val_43802 === (19))){
var state_43801__$1 = state_43801;
var statearr_43823_46133 = state_43801__$1;
(statearr_43823_46133[(2)] = null);

(statearr_43823_46133[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (11))){
var inst_43773 = (state_43801[(2)]);
var state_43801__$1 = (function (){var statearr_43824 = state_43801;
(statearr_43824[(10)] = inst_43773);

return statearr_43824;
})();
var statearr_43825_46134 = state_43801__$1;
(statearr_43825_46134[(2)] = null);

(statearr_43825_46134[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (9))){
var state_43801__$1 = state_43801;
var statearr_43826_46135 = state_43801__$1;
(statearr_43826_46135[(2)] = null);

(statearr_43826_46135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (5))){
var state_43801__$1 = state_43801;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43831_46136 = state_43801__$1;
(statearr_43831_46136[(1)] = (8));

} else {
var statearr_43832_46137 = state_43801__$1;
(statearr_43832_46137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (14))){
var inst_43779 = (state_43801[(8)]);
var inst_43781 = (state_43801[(11)]);
var inst_43779__$1 = (state_43801[(2)]);
var inst_43780 = (inst_43779__$1 == null);
var inst_43781__$1 = cljs.core.not(inst_43780);
var state_43801__$1 = (function (){var statearr_43833 = state_43801;
(statearr_43833[(8)] = inst_43779__$1);

(statearr_43833[(11)] = inst_43781__$1);

return statearr_43833;
})();
if(inst_43781__$1){
var statearr_43834_46139 = state_43801__$1;
(statearr_43834_46139[(1)] = (15));

} else {
var statearr_43835_46141 = state_43801__$1;
(statearr_43835_46141[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (16))){
var inst_43781 = (state_43801[(11)]);
var state_43801__$1 = state_43801;
var statearr_43840_46142 = state_43801__$1;
(statearr_43840_46142[(2)] = inst_43781);

(statearr_43840_46142[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (10))){
var inst_43770 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
var statearr_43841_46143 = state_43801__$1;
(statearr_43841_46143[(2)] = inst_43770);

(statearr_43841_46143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (18))){
var inst_43784 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
var statearr_43842_46144 = state_43801__$1;
(statearr_43842_46144[(2)] = inst_43784);

(statearr_43842_46144[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (8))){
var inst_43767 = cljs.core.async.close_BANG_(to);
var state_43801__$1 = state_43801;
var statearr_43843_46145 = state_43801__$1;
(statearr_43843_46145[(2)] = inst_43767);

(statearr_43843_46145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____0 = (function (){
var statearr_43845 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43845[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__);

(statearr_43845[(1)] = (1));

return statearr_43845;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____1 = (function (state_43801){
while(true){
var ret_value__43146__auto__ = (function (){try{while(true){
var result__43147__auto__ = switch__43144__auto__(state_43801);
if(cljs.core.keyword_identical_QMARK_(result__43147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43147__auto__;
}
break;
}
}catch (e43846){var ex__43148__auto__ = e43846;
var statearr_43847_46147 = state_43801;
(statearr_43847_46147[(2)] = ex__43148__auto__);


if(cljs.core.seq((state_43801[(4)]))){
var statearr_43848_46148 = state_43801;
(statearr_43848_46148[(1)] = cljs.core.first((state_43801[(4)])));

} else {
throw ex__43148__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46149 = state_43801;
state_43801 = G__46149;
continue;
} else {
return ret_value__43146__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__ = function(state_43801){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____1.call(this,state_43801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43145__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43145__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_43850 = f__43293__auto__();
(statearr_43850[(6)] = c__43292__auto__);

return statearr_43850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));

return c__43292__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__43858 = arguments.length;
switch (G__43858) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__43860 = arguments.length;
switch (G__43860) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__43864 = arguments.length;
switch (G__43864) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__43292__auto___46165 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43144__auto__ = (function (state_43890){
var state_val_43891 = (state_43890[(1)]);
if((state_val_43891 === (7))){
var inst_43886 = (state_43890[(2)]);
var state_43890__$1 = state_43890;
var statearr_43896_46166 = state_43890__$1;
(statearr_43896_46166[(2)] = inst_43886);

(statearr_43896_46166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43891 === (1))){
var state_43890__$1 = state_43890;
var statearr_43897_46167 = state_43890__$1;
(statearr_43897_46167[(2)] = null);

(statearr_43897_46167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43891 === (4))){
var inst_43867 = (state_43890[(7)]);
var inst_43867__$1 = (state_43890[(2)]);
var inst_43868 = (inst_43867__$1 == null);
var state_43890__$1 = (function (){var statearr_43899 = state_43890;
(statearr_43899[(7)] = inst_43867__$1);

return statearr_43899;
})();
if(cljs.core.truth_(inst_43868)){
var statearr_43900_46168 = state_43890__$1;
(statearr_43900_46168[(1)] = (5));

} else {
var statearr_43901_46169 = state_43890__$1;
(statearr_43901_46169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43891 === (13))){
var state_43890__$1 = state_43890;
var statearr_43902_46170 = state_43890__$1;
(statearr_43902_46170[(2)] = null);

(statearr_43902_46170[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43891 === (6))){
var inst_43867 = (state_43890[(7)]);
var inst_43873 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43867) : p.call(null,inst_43867));
var state_43890__$1 = state_43890;
if(cljs.core.truth_(inst_43873)){
var statearr_43903_46171 = state_43890__$1;
(statearr_43903_46171[(1)] = (9));

} else {
var statearr_43904_46172 = state_43890__$1;
(statearr_43904_46172[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43891 === (3))){
var inst_43888 = (state_43890[(2)]);
var state_43890__$1 = state_43890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43890__$1,inst_43888);
} else {
if((state_val_43891 === (12))){
var state_43890__$1 = state_43890;
var statearr_43906_46174 = state_43890__$1;
(statearr_43906_46174[(2)] = null);

(statearr_43906_46174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43891 === (2))){
var state_43890__$1 = state_43890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43890__$1,(4),ch);
} else {
if((state_val_43891 === (11))){
var inst_43867 = (state_43890[(7)]);
var inst_43877 = (state_43890[(2)]);
var state_43890__$1 = state_43890;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43890__$1,(8),inst_43877,inst_43867);
} else {
if((state_val_43891 === (9))){
var state_43890__$1 = state_43890;
var statearr_43908_46176 = state_43890__$1;
(statearr_43908_46176[(2)] = tc);

(statearr_43908_46176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43891 === (5))){
var inst_43870 = cljs.core.async.close_BANG_(tc);
var inst_43871 = cljs.core.async.close_BANG_(fc);
var state_43890__$1 = (function (){var statearr_43912 = state_43890;
(statearr_43912[(8)] = inst_43870);

return statearr_43912;
})();
var statearr_43913_46177 = state_43890__$1;
(statearr_43913_46177[(2)] = inst_43871);

(statearr_43913_46177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43891 === (14))){
var inst_43884 = (state_43890[(2)]);
var state_43890__$1 = state_43890;
var statearr_43914_46178 = state_43890__$1;
(statearr_43914_46178[(2)] = inst_43884);

(statearr_43914_46178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43891 === (10))){
var state_43890__$1 = state_43890;
var statearr_43915_46179 = state_43890__$1;
(statearr_43915_46179[(2)] = fc);

(statearr_43915_46179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43891 === (8))){
var inst_43879 = (state_43890[(2)]);
var state_43890__$1 = state_43890;
if(cljs.core.truth_(inst_43879)){
var statearr_43916_46180 = state_43890__$1;
(statearr_43916_46180[(1)] = (12));

} else {
var statearr_43917_46182 = state_43890__$1;
(statearr_43917_46182[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43145__auto__ = null;
var cljs$core$async$state_machine__43145__auto____0 = (function (){
var statearr_43918 = [null,null,null,null,null,null,null,null,null];
(statearr_43918[(0)] = cljs$core$async$state_machine__43145__auto__);

(statearr_43918[(1)] = (1));

return statearr_43918;
});
var cljs$core$async$state_machine__43145__auto____1 = (function (state_43890){
while(true){
var ret_value__43146__auto__ = (function (){try{while(true){
var result__43147__auto__ = switch__43144__auto__(state_43890);
if(cljs.core.keyword_identical_QMARK_(result__43147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43147__auto__;
}
break;
}
}catch (e43919){var ex__43148__auto__ = e43919;
var statearr_43920_46186 = state_43890;
(statearr_43920_46186[(2)] = ex__43148__auto__);


if(cljs.core.seq((state_43890[(4)]))){
var statearr_43921_46188 = state_43890;
(statearr_43921_46188[(1)] = cljs.core.first((state_43890[(4)])));

} else {
throw ex__43148__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46189 = state_43890;
state_43890 = G__46189;
continue;
} else {
return ret_value__43146__auto__;
}
break;
}
});
cljs$core$async$state_machine__43145__auto__ = function(state_43890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43145__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43145__auto____1.call(this,state_43890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43145__auto____0;
cljs$core$async$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43145__auto____1;
return cljs$core$async$state_machine__43145__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_43922 = f__43293__auto__();
(statearr_43922[(6)] = c__43292__auto___46165);

return statearr_43922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__43292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43144__auto__ = (function (state_43948){
var state_val_43949 = (state_43948[(1)]);
if((state_val_43949 === (7))){
var inst_43944 = (state_43948[(2)]);
var state_43948__$1 = state_43948;
var statearr_43950_46193 = state_43948__$1;
(statearr_43950_46193[(2)] = inst_43944);

(statearr_43950_46193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43949 === (1))){
var inst_43924 = init;
var inst_43928 = inst_43924;
var state_43948__$1 = (function (){var statearr_43952 = state_43948;
(statearr_43952[(7)] = inst_43928);

return statearr_43952;
})();
var statearr_43953_46194 = state_43948__$1;
(statearr_43953_46194[(2)] = null);

(statearr_43953_46194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43949 === (4))){
var inst_43931 = (state_43948[(8)]);
var inst_43931__$1 = (state_43948[(2)]);
var inst_43932 = (inst_43931__$1 == null);
var state_43948__$1 = (function (){var statearr_43954 = state_43948;
(statearr_43954[(8)] = inst_43931__$1);

return statearr_43954;
})();
if(cljs.core.truth_(inst_43932)){
var statearr_43955_46195 = state_43948__$1;
(statearr_43955_46195[(1)] = (5));

} else {
var statearr_43956_46196 = state_43948__$1;
(statearr_43956_46196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43949 === (6))){
var inst_43928 = (state_43948[(7)]);
var inst_43931 = (state_43948[(8)]);
var inst_43935 = (state_43948[(9)]);
var inst_43935__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_43928,inst_43931) : f.call(null,inst_43928,inst_43931));
var inst_43936 = cljs.core.reduced_QMARK_(inst_43935__$1);
var state_43948__$1 = (function (){var statearr_43957 = state_43948;
(statearr_43957[(9)] = inst_43935__$1);

return statearr_43957;
})();
if(inst_43936){
var statearr_43958_46197 = state_43948__$1;
(statearr_43958_46197[(1)] = (8));

} else {
var statearr_43959_46198 = state_43948__$1;
(statearr_43959_46198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43949 === (3))){
var inst_43946 = (state_43948[(2)]);
var state_43948__$1 = state_43948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43948__$1,inst_43946);
} else {
if((state_val_43949 === (2))){
var state_43948__$1 = state_43948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43948__$1,(4),ch);
} else {
if((state_val_43949 === (9))){
var inst_43935 = (state_43948[(9)]);
var inst_43928 = inst_43935;
var state_43948__$1 = (function (){var statearr_43960 = state_43948;
(statearr_43960[(7)] = inst_43928);

return statearr_43960;
})();
var statearr_43961_46199 = state_43948__$1;
(statearr_43961_46199[(2)] = null);

(statearr_43961_46199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43949 === (5))){
var inst_43928 = (state_43948[(7)]);
var state_43948__$1 = state_43948;
var statearr_43962_46200 = state_43948__$1;
(statearr_43962_46200[(2)] = inst_43928);

(statearr_43962_46200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43949 === (10))){
var inst_43942 = (state_43948[(2)]);
var state_43948__$1 = state_43948;
var statearr_43963_46202 = state_43948__$1;
(statearr_43963_46202[(2)] = inst_43942);

(statearr_43963_46202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43949 === (8))){
var inst_43935 = (state_43948[(9)]);
var inst_43938 = cljs.core.deref(inst_43935);
var state_43948__$1 = state_43948;
var statearr_43964_46204 = state_43948__$1;
(statearr_43964_46204[(2)] = inst_43938);

(statearr_43964_46204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__43145__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43145__auto____0 = (function (){
var statearr_43965 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43965[(0)] = cljs$core$async$reduce_$_state_machine__43145__auto__);

(statearr_43965[(1)] = (1));

return statearr_43965;
});
var cljs$core$async$reduce_$_state_machine__43145__auto____1 = (function (state_43948){
while(true){
var ret_value__43146__auto__ = (function (){try{while(true){
var result__43147__auto__ = switch__43144__auto__(state_43948);
if(cljs.core.keyword_identical_QMARK_(result__43147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43147__auto__;
}
break;
}
}catch (e43966){var ex__43148__auto__ = e43966;
var statearr_43967_46214 = state_43948;
(statearr_43967_46214[(2)] = ex__43148__auto__);


if(cljs.core.seq((state_43948[(4)]))){
var statearr_43968_46215 = state_43948;
(statearr_43968_46215[(1)] = cljs.core.first((state_43948[(4)])));

} else {
throw ex__43148__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46216 = state_43948;
state_43948 = G__46216;
continue;
} else {
return ret_value__43146__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43145__auto__ = function(state_43948){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43145__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43145__auto____1.call(this,state_43948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43145__auto____0;
cljs$core$async$reduce_$_state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43145__auto____1;
return cljs$core$async$reduce_$_state_machine__43145__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_43969 = f__43293__auto__();
(statearr_43969[(6)] = c__43292__auto__);

return statearr_43969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));

return c__43292__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__43292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43144__auto__ = (function (state_43977){
var state_val_43978 = (state_43977[(1)]);
if((state_val_43978 === (1))){
var inst_43972 = cljs.core.async.reduce(f__$1,init,ch);
var state_43977__$1 = state_43977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43977__$1,(2),inst_43972);
} else {
if((state_val_43978 === (2))){
var inst_43974 = (state_43977[(2)]);
var inst_43975 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_43974) : f__$1.call(null,inst_43974));
var state_43977__$1 = state_43977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43977__$1,inst_43975);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43145__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43145__auto____0 = (function (){
var statearr_43979 = [null,null,null,null,null,null,null];
(statearr_43979[(0)] = cljs$core$async$transduce_$_state_machine__43145__auto__);

(statearr_43979[(1)] = (1));

return statearr_43979;
});
var cljs$core$async$transduce_$_state_machine__43145__auto____1 = (function (state_43977){
while(true){
var ret_value__43146__auto__ = (function (){try{while(true){
var result__43147__auto__ = switch__43144__auto__(state_43977);
if(cljs.core.keyword_identical_QMARK_(result__43147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43147__auto__;
}
break;
}
}catch (e43980){var ex__43148__auto__ = e43980;
var statearr_43981_46225 = state_43977;
(statearr_43981_46225[(2)] = ex__43148__auto__);


if(cljs.core.seq((state_43977[(4)]))){
var statearr_43982_46226 = state_43977;
(statearr_43982_46226[(1)] = cljs.core.first((state_43977[(4)])));

} else {
throw ex__43148__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46230 = state_43977;
state_43977 = G__46230;
continue;
} else {
return ret_value__43146__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43145__auto__ = function(state_43977){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43145__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43145__auto____1.call(this,state_43977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43145__auto____0;
cljs$core$async$transduce_$_state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43145__auto____1;
return cljs$core$async$transduce_$_state_machine__43145__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_43983 = f__43293__auto__();
(statearr_43983[(6)] = c__43292__auto__);

return statearr_43983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));

return c__43292__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__43985 = arguments.length;
switch (G__43985) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__43292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43144__auto__ = (function (state_44010){
var state_val_44011 = (state_44010[(1)]);
if((state_val_44011 === (7))){
var inst_43992 = (state_44010[(2)]);
var state_44010__$1 = state_44010;
var statearr_44012_46239 = state_44010__$1;
(statearr_44012_46239[(2)] = inst_43992);

(statearr_44012_46239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44011 === (1))){
var inst_43986 = cljs.core.seq(coll);
var inst_43987 = inst_43986;
var state_44010__$1 = (function (){var statearr_44013 = state_44010;
(statearr_44013[(7)] = inst_43987);

return statearr_44013;
})();
var statearr_44014_46242 = state_44010__$1;
(statearr_44014_46242[(2)] = null);

(statearr_44014_46242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44011 === (4))){
var inst_43987 = (state_44010[(7)]);
var inst_43990 = cljs.core.first(inst_43987);
var state_44010__$1 = state_44010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44010__$1,(7),ch,inst_43990);
} else {
if((state_val_44011 === (13))){
var inst_44004 = (state_44010[(2)]);
var state_44010__$1 = state_44010;
var statearr_44021_46243 = state_44010__$1;
(statearr_44021_46243[(2)] = inst_44004);

(statearr_44021_46243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44011 === (6))){
var inst_43995 = (state_44010[(2)]);
var state_44010__$1 = state_44010;
if(cljs.core.truth_(inst_43995)){
var statearr_44022_46248 = state_44010__$1;
(statearr_44022_46248[(1)] = (8));

} else {
var statearr_44023_46250 = state_44010__$1;
(statearr_44023_46250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44011 === (3))){
var inst_44008 = (state_44010[(2)]);
var state_44010__$1 = state_44010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44010__$1,inst_44008);
} else {
if((state_val_44011 === (12))){
var state_44010__$1 = state_44010;
var statearr_44024_46251 = state_44010__$1;
(statearr_44024_46251[(2)] = null);

(statearr_44024_46251[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44011 === (2))){
var inst_43987 = (state_44010[(7)]);
var state_44010__$1 = state_44010;
if(cljs.core.truth_(inst_43987)){
var statearr_44025_46255 = state_44010__$1;
(statearr_44025_46255[(1)] = (4));

} else {
var statearr_44026_46256 = state_44010__$1;
(statearr_44026_46256[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44011 === (11))){
var inst_44001 = cljs.core.async.close_BANG_(ch);
var state_44010__$1 = state_44010;
var statearr_44027_46258 = state_44010__$1;
(statearr_44027_46258[(2)] = inst_44001);

(statearr_44027_46258[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44011 === (9))){
var state_44010__$1 = state_44010;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44032_46260 = state_44010__$1;
(statearr_44032_46260[(1)] = (11));

} else {
var statearr_44033_46261 = state_44010__$1;
(statearr_44033_46261[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44011 === (5))){
var inst_43987 = (state_44010[(7)]);
var state_44010__$1 = state_44010;
var statearr_44038_46265 = state_44010__$1;
(statearr_44038_46265[(2)] = inst_43987);

(statearr_44038_46265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44011 === (10))){
var inst_44006 = (state_44010[(2)]);
var state_44010__$1 = state_44010;
var statearr_44039_46270 = state_44010__$1;
(statearr_44039_46270[(2)] = inst_44006);

(statearr_44039_46270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44011 === (8))){
var inst_43987 = (state_44010[(7)]);
var inst_43997 = cljs.core.next(inst_43987);
var inst_43987__$1 = inst_43997;
var state_44010__$1 = (function (){var statearr_44040 = state_44010;
(statearr_44040[(7)] = inst_43987__$1);

return statearr_44040;
})();
var statearr_44041_46271 = state_44010__$1;
(statearr_44041_46271[(2)] = null);

(statearr_44041_46271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43145__auto__ = null;
var cljs$core$async$state_machine__43145__auto____0 = (function (){
var statearr_44047 = [null,null,null,null,null,null,null,null];
(statearr_44047[(0)] = cljs$core$async$state_machine__43145__auto__);

(statearr_44047[(1)] = (1));

return statearr_44047;
});
var cljs$core$async$state_machine__43145__auto____1 = (function (state_44010){
while(true){
var ret_value__43146__auto__ = (function (){try{while(true){
var result__43147__auto__ = switch__43144__auto__(state_44010);
if(cljs.core.keyword_identical_QMARK_(result__43147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43147__auto__;
}
break;
}
}catch (e44050){var ex__43148__auto__ = e44050;
var statearr_44051_46273 = state_44010;
(statearr_44051_46273[(2)] = ex__43148__auto__);


if(cljs.core.seq((state_44010[(4)]))){
var statearr_44052_46274 = state_44010;
(statearr_44052_46274[(1)] = cljs.core.first((state_44010[(4)])));

} else {
throw ex__43148__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46275 = state_44010;
state_44010 = G__46275;
continue;
} else {
return ret_value__43146__auto__;
}
break;
}
});
cljs$core$async$state_machine__43145__auto__ = function(state_44010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43145__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43145__auto____1.call(this,state_44010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43145__auto____0;
cljs$core$async$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43145__auto____1;
return cljs$core$async$state_machine__43145__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_44060 = f__43293__auto__();
(statearr_44060[(6)] = c__43292__auto__);

return statearr_44060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));

return c__43292__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__44063 = arguments.length;
switch (G__44063) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_46277 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_46277(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_46278 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_46278(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_46279 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_46279(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_46280 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_46280(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44105 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44105 = (function (ch,cs,meta44106){
this.ch = ch;
this.cs = cs;
this.meta44106 = meta44106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44107,meta44106__$1){
var self__ = this;
var _44107__$1 = this;
return (new cljs.core.async.t_cljs$core$async44105(self__.ch,self__.cs,meta44106__$1));
}));

(cljs.core.async.t_cljs$core$async44105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44107){
var self__ = this;
var _44107__$1 = this;
return self__.meta44106;
}));

(cljs.core.async.t_cljs$core$async44105.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44105.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44105.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44105.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44105.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44105.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44105.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44106","meta44106",1083202696,null)], null);
}));

(cljs.core.async.t_cljs$core$async44105.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44105");

(cljs.core.async.t_cljs$core$async44105.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44105");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44105.
 */
cljs.core.async.__GT_t_cljs$core$async44105 = (function cljs$core$async$mult_$___GT_t_cljs$core$async44105(ch__$1,cs__$1,meta44106){
return (new cljs.core.async.t_cljs$core$async44105(ch__$1,cs__$1,meta44106));
});

}

return (new cljs.core.async.t_cljs$core$async44105(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__43292__auto___46290 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43144__auto__ = (function (state_44251){
var state_val_44252 = (state_44251[(1)]);
if((state_val_44252 === (7))){
var inst_44247 = (state_44251[(2)]);
var state_44251__$1 = state_44251;
var statearr_44255_46291 = state_44251__$1;
(statearr_44255_46291[(2)] = inst_44247);

(statearr_44255_46291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (20))){
var inst_44150 = (state_44251[(7)]);
var inst_44164 = cljs.core.first(inst_44150);
var inst_44165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44164,(0),null);
var inst_44166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44164,(1),null);
var state_44251__$1 = (function (){var statearr_44256 = state_44251;
(statearr_44256[(8)] = inst_44165);

return statearr_44256;
})();
if(cljs.core.truth_(inst_44166)){
var statearr_44257_46293 = state_44251__$1;
(statearr_44257_46293[(1)] = (22));

} else {
var statearr_44258_46294 = state_44251__$1;
(statearr_44258_46294[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (27))){
var inst_44194 = (state_44251[(9)]);
var inst_44119 = (state_44251[(10)]);
var inst_44196 = (state_44251[(11)]);
var inst_44201 = (state_44251[(12)]);
var inst_44201__$1 = cljs.core._nth(inst_44194,inst_44196);
var inst_44202 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44201__$1,inst_44119,done);
var state_44251__$1 = (function (){var statearr_44259 = state_44251;
(statearr_44259[(12)] = inst_44201__$1);

return statearr_44259;
})();
if(cljs.core.truth_(inst_44202)){
var statearr_44260_46296 = state_44251__$1;
(statearr_44260_46296[(1)] = (30));

} else {
var statearr_44261_46297 = state_44251__$1;
(statearr_44261_46297[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (1))){
var state_44251__$1 = state_44251;
var statearr_44262_46298 = state_44251__$1;
(statearr_44262_46298[(2)] = null);

(statearr_44262_46298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (24))){
var inst_44150 = (state_44251[(7)]);
var inst_44171 = (state_44251[(2)]);
var inst_44172 = cljs.core.next(inst_44150);
var inst_44128 = inst_44172;
var inst_44129 = null;
var inst_44130 = (0);
var inst_44131 = (0);
var state_44251__$1 = (function (){var statearr_44263 = state_44251;
(statearr_44263[(13)] = inst_44129);

(statearr_44263[(14)] = inst_44128);

(statearr_44263[(15)] = inst_44131);

(statearr_44263[(16)] = inst_44130);

(statearr_44263[(17)] = inst_44171);

return statearr_44263;
})();
var statearr_44266_46299 = state_44251__$1;
(statearr_44266_46299[(2)] = null);

(statearr_44266_46299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (39))){
var state_44251__$1 = state_44251;
var statearr_44270_46300 = state_44251__$1;
(statearr_44270_46300[(2)] = null);

(statearr_44270_46300[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (4))){
var inst_44119 = (state_44251[(10)]);
var inst_44119__$1 = (state_44251[(2)]);
var inst_44120 = (inst_44119__$1 == null);
var state_44251__$1 = (function (){var statearr_44271 = state_44251;
(statearr_44271[(10)] = inst_44119__$1);

return statearr_44271;
})();
if(cljs.core.truth_(inst_44120)){
var statearr_44272_46301 = state_44251__$1;
(statearr_44272_46301[(1)] = (5));

} else {
var statearr_44273_46302 = state_44251__$1;
(statearr_44273_46302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (15))){
var inst_44129 = (state_44251[(13)]);
var inst_44128 = (state_44251[(14)]);
var inst_44131 = (state_44251[(15)]);
var inst_44130 = (state_44251[(16)]);
var inst_44146 = (state_44251[(2)]);
var inst_44147 = (inst_44131 + (1));
var tmp44267 = inst_44129;
var tmp44268 = inst_44128;
var tmp44269 = inst_44130;
var inst_44128__$1 = tmp44268;
var inst_44129__$1 = tmp44267;
var inst_44130__$1 = tmp44269;
var inst_44131__$1 = inst_44147;
var state_44251__$1 = (function (){var statearr_44274 = state_44251;
(statearr_44274[(18)] = inst_44146);

(statearr_44274[(13)] = inst_44129__$1);

(statearr_44274[(14)] = inst_44128__$1);

(statearr_44274[(15)] = inst_44131__$1);

(statearr_44274[(16)] = inst_44130__$1);

return statearr_44274;
})();
var statearr_44275_46303 = state_44251__$1;
(statearr_44275_46303[(2)] = null);

(statearr_44275_46303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (21))){
var inst_44175 = (state_44251[(2)]);
var state_44251__$1 = state_44251;
var statearr_44279_46304 = state_44251__$1;
(statearr_44279_46304[(2)] = inst_44175);

(statearr_44279_46304[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (31))){
var inst_44201 = (state_44251[(12)]);
var inst_44205 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44201);
var state_44251__$1 = state_44251;
var statearr_44280_46309 = state_44251__$1;
(statearr_44280_46309[(2)] = inst_44205);

(statearr_44280_46309[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (32))){
var inst_44194 = (state_44251[(9)]);
var inst_44193 = (state_44251[(19)]);
var inst_44196 = (state_44251[(11)]);
var inst_44195 = (state_44251[(20)]);
var inst_44207 = (state_44251[(2)]);
var inst_44208 = (inst_44196 + (1));
var tmp44276 = inst_44194;
var tmp44277 = inst_44193;
var tmp44278 = inst_44195;
var inst_44193__$1 = tmp44277;
var inst_44194__$1 = tmp44276;
var inst_44195__$1 = tmp44278;
var inst_44196__$1 = inst_44208;
var state_44251__$1 = (function (){var statearr_44281 = state_44251;
(statearr_44281[(9)] = inst_44194__$1);

(statearr_44281[(21)] = inst_44207);

(statearr_44281[(19)] = inst_44193__$1);

(statearr_44281[(11)] = inst_44196__$1);

(statearr_44281[(20)] = inst_44195__$1);

return statearr_44281;
})();
var statearr_44282_46314 = state_44251__$1;
(statearr_44282_46314[(2)] = null);

(statearr_44282_46314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (40))){
var inst_44220 = (state_44251[(22)]);
var inst_44224 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44220);
var state_44251__$1 = state_44251;
var statearr_44283_46315 = state_44251__$1;
(statearr_44283_46315[(2)] = inst_44224);

(statearr_44283_46315[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (33))){
var inst_44211 = (state_44251[(23)]);
var inst_44213 = cljs.core.chunked_seq_QMARK_(inst_44211);
var state_44251__$1 = state_44251;
if(inst_44213){
var statearr_44284_46318 = state_44251__$1;
(statearr_44284_46318[(1)] = (36));

} else {
var statearr_44285_46319 = state_44251__$1;
(statearr_44285_46319[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (13))){
var inst_44140 = (state_44251[(24)]);
var inst_44143 = cljs.core.async.close_BANG_(inst_44140);
var state_44251__$1 = state_44251;
var statearr_44286_46322 = state_44251__$1;
(statearr_44286_46322[(2)] = inst_44143);

(statearr_44286_46322[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (22))){
var inst_44165 = (state_44251[(8)]);
var inst_44168 = cljs.core.async.close_BANG_(inst_44165);
var state_44251__$1 = state_44251;
var statearr_44288_46327 = state_44251__$1;
(statearr_44288_46327[(2)] = inst_44168);

(statearr_44288_46327[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (36))){
var inst_44211 = (state_44251[(23)]);
var inst_44215 = cljs.core.chunk_first(inst_44211);
var inst_44216 = cljs.core.chunk_rest(inst_44211);
var inst_44217 = cljs.core.count(inst_44215);
var inst_44193 = inst_44216;
var inst_44194 = inst_44215;
var inst_44195 = inst_44217;
var inst_44196 = (0);
var state_44251__$1 = (function (){var statearr_44289 = state_44251;
(statearr_44289[(9)] = inst_44194);

(statearr_44289[(19)] = inst_44193);

(statearr_44289[(11)] = inst_44196);

(statearr_44289[(20)] = inst_44195);

return statearr_44289;
})();
var statearr_44290_46334 = state_44251__$1;
(statearr_44290_46334[(2)] = null);

(statearr_44290_46334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (41))){
var inst_44211 = (state_44251[(23)]);
var inst_44226 = (state_44251[(2)]);
var inst_44227 = cljs.core.next(inst_44211);
var inst_44193 = inst_44227;
var inst_44194 = null;
var inst_44195 = (0);
var inst_44196 = (0);
var state_44251__$1 = (function (){var statearr_44291 = state_44251;
(statearr_44291[(9)] = inst_44194);

(statearr_44291[(19)] = inst_44193);

(statearr_44291[(25)] = inst_44226);

(statearr_44291[(11)] = inst_44196);

(statearr_44291[(20)] = inst_44195);

return statearr_44291;
})();
var statearr_44293_46342 = state_44251__$1;
(statearr_44293_46342[(2)] = null);

(statearr_44293_46342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (43))){
var state_44251__$1 = state_44251;
var statearr_44294_46343 = state_44251__$1;
(statearr_44294_46343[(2)] = null);

(statearr_44294_46343[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (29))){
var inst_44235 = (state_44251[(2)]);
var state_44251__$1 = state_44251;
var statearr_44295_46344 = state_44251__$1;
(statearr_44295_46344[(2)] = inst_44235);

(statearr_44295_46344[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (44))){
var inst_44244 = (state_44251[(2)]);
var state_44251__$1 = (function (){var statearr_44296 = state_44251;
(statearr_44296[(26)] = inst_44244);

return statearr_44296;
})();
var statearr_44297_46345 = state_44251__$1;
(statearr_44297_46345[(2)] = null);

(statearr_44297_46345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (6))){
var inst_44185 = (state_44251[(27)]);
var inst_44184 = cljs.core.deref(cs);
var inst_44185__$1 = cljs.core.keys(inst_44184);
var inst_44186 = cljs.core.count(inst_44185__$1);
var inst_44187 = cljs.core.reset_BANG_(dctr,inst_44186);
var inst_44192 = cljs.core.seq(inst_44185__$1);
var inst_44193 = inst_44192;
var inst_44194 = null;
var inst_44195 = (0);
var inst_44196 = (0);
var state_44251__$1 = (function (){var statearr_44302 = state_44251;
(statearr_44302[(9)] = inst_44194);

(statearr_44302[(19)] = inst_44193);

(statearr_44302[(28)] = inst_44187);

(statearr_44302[(27)] = inst_44185__$1);

(statearr_44302[(11)] = inst_44196);

(statearr_44302[(20)] = inst_44195);

return statearr_44302;
})();
var statearr_44303_46346 = state_44251__$1;
(statearr_44303_46346[(2)] = null);

(statearr_44303_46346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (28))){
var inst_44193 = (state_44251[(19)]);
var inst_44211 = (state_44251[(23)]);
var inst_44211__$1 = cljs.core.seq(inst_44193);
var state_44251__$1 = (function (){var statearr_44307 = state_44251;
(statearr_44307[(23)] = inst_44211__$1);

return statearr_44307;
})();
if(inst_44211__$1){
var statearr_44308_46347 = state_44251__$1;
(statearr_44308_46347[(1)] = (33));

} else {
var statearr_44309_46348 = state_44251__$1;
(statearr_44309_46348[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (25))){
var inst_44196 = (state_44251[(11)]);
var inst_44195 = (state_44251[(20)]);
var inst_44198 = (inst_44196 < inst_44195);
var inst_44199 = inst_44198;
var state_44251__$1 = state_44251;
if(cljs.core.truth_(inst_44199)){
var statearr_44310_46349 = state_44251__$1;
(statearr_44310_46349[(1)] = (27));

} else {
var statearr_44311_46350 = state_44251__$1;
(statearr_44311_46350[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (34))){
var state_44251__$1 = state_44251;
var statearr_44312_46351 = state_44251__$1;
(statearr_44312_46351[(2)] = null);

(statearr_44312_46351[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (17))){
var state_44251__$1 = state_44251;
var statearr_44313_46352 = state_44251__$1;
(statearr_44313_46352[(2)] = null);

(statearr_44313_46352[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (3))){
var inst_44249 = (state_44251[(2)]);
var state_44251__$1 = state_44251;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44251__$1,inst_44249);
} else {
if((state_val_44252 === (12))){
var inst_44180 = (state_44251[(2)]);
var state_44251__$1 = state_44251;
var statearr_44314_46353 = state_44251__$1;
(statearr_44314_46353[(2)] = inst_44180);

(statearr_44314_46353[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (2))){
var state_44251__$1 = state_44251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44251__$1,(4),ch);
} else {
if((state_val_44252 === (23))){
var state_44251__$1 = state_44251;
var statearr_44315_46354 = state_44251__$1;
(statearr_44315_46354[(2)] = null);

(statearr_44315_46354[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (35))){
var inst_44233 = (state_44251[(2)]);
var state_44251__$1 = state_44251;
var statearr_44318_46355 = state_44251__$1;
(statearr_44318_46355[(2)] = inst_44233);

(statearr_44318_46355[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (19))){
var inst_44150 = (state_44251[(7)]);
var inst_44156 = cljs.core.chunk_first(inst_44150);
var inst_44157 = cljs.core.chunk_rest(inst_44150);
var inst_44158 = cljs.core.count(inst_44156);
var inst_44128 = inst_44157;
var inst_44129 = inst_44156;
var inst_44130 = inst_44158;
var inst_44131 = (0);
var state_44251__$1 = (function (){var statearr_44319 = state_44251;
(statearr_44319[(13)] = inst_44129);

(statearr_44319[(14)] = inst_44128);

(statearr_44319[(15)] = inst_44131);

(statearr_44319[(16)] = inst_44130);

return statearr_44319;
})();
var statearr_44320_46364 = state_44251__$1;
(statearr_44320_46364[(2)] = null);

(statearr_44320_46364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (11))){
var inst_44128 = (state_44251[(14)]);
var inst_44150 = (state_44251[(7)]);
var inst_44150__$1 = cljs.core.seq(inst_44128);
var state_44251__$1 = (function (){var statearr_44321 = state_44251;
(statearr_44321[(7)] = inst_44150__$1);

return statearr_44321;
})();
if(inst_44150__$1){
var statearr_44322_46365 = state_44251__$1;
(statearr_44322_46365[(1)] = (16));

} else {
var statearr_44323_46366 = state_44251__$1;
(statearr_44323_46366[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (9))){
var inst_44182 = (state_44251[(2)]);
var state_44251__$1 = state_44251;
var statearr_44324_46368 = state_44251__$1;
(statearr_44324_46368[(2)] = inst_44182);

(statearr_44324_46368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (5))){
var inst_44126 = cljs.core.deref(cs);
var inst_44127 = cljs.core.seq(inst_44126);
var inst_44128 = inst_44127;
var inst_44129 = null;
var inst_44130 = (0);
var inst_44131 = (0);
var state_44251__$1 = (function (){var statearr_44325 = state_44251;
(statearr_44325[(13)] = inst_44129);

(statearr_44325[(14)] = inst_44128);

(statearr_44325[(15)] = inst_44131);

(statearr_44325[(16)] = inst_44130);

return statearr_44325;
})();
var statearr_44326_46370 = state_44251__$1;
(statearr_44326_46370[(2)] = null);

(statearr_44326_46370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (14))){
var state_44251__$1 = state_44251;
var statearr_44327_46371 = state_44251__$1;
(statearr_44327_46371[(2)] = null);

(statearr_44327_46371[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (45))){
var inst_44241 = (state_44251[(2)]);
var state_44251__$1 = state_44251;
var statearr_44328_46374 = state_44251__$1;
(statearr_44328_46374[(2)] = inst_44241);

(statearr_44328_46374[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (26))){
var inst_44185 = (state_44251[(27)]);
var inst_44237 = (state_44251[(2)]);
var inst_44238 = cljs.core.seq(inst_44185);
var state_44251__$1 = (function (){var statearr_44329 = state_44251;
(statearr_44329[(29)] = inst_44237);

return statearr_44329;
})();
if(inst_44238){
var statearr_44330_46377 = state_44251__$1;
(statearr_44330_46377[(1)] = (42));

} else {
var statearr_44331_46378 = state_44251__$1;
(statearr_44331_46378[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (16))){
var inst_44150 = (state_44251[(7)]);
var inst_44154 = cljs.core.chunked_seq_QMARK_(inst_44150);
var state_44251__$1 = state_44251;
if(inst_44154){
var statearr_44332_46379 = state_44251__$1;
(statearr_44332_46379[(1)] = (19));

} else {
var statearr_44333_46380 = state_44251__$1;
(statearr_44333_46380[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (38))){
var inst_44230 = (state_44251[(2)]);
var state_44251__$1 = state_44251;
var statearr_44334_46381 = state_44251__$1;
(statearr_44334_46381[(2)] = inst_44230);

(statearr_44334_46381[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (30))){
var state_44251__$1 = state_44251;
var statearr_44335_46382 = state_44251__$1;
(statearr_44335_46382[(2)] = null);

(statearr_44335_46382[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (10))){
var inst_44129 = (state_44251[(13)]);
var inst_44131 = (state_44251[(15)]);
var inst_44139 = cljs.core._nth(inst_44129,inst_44131);
var inst_44140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44139,(0),null);
var inst_44141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44139,(1),null);
var state_44251__$1 = (function (){var statearr_44342 = state_44251;
(statearr_44342[(24)] = inst_44140);

return statearr_44342;
})();
if(cljs.core.truth_(inst_44141)){
var statearr_44343_46383 = state_44251__$1;
(statearr_44343_46383[(1)] = (13));

} else {
var statearr_44344_46390 = state_44251__$1;
(statearr_44344_46390[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (18))){
var inst_44178 = (state_44251[(2)]);
var state_44251__$1 = state_44251;
var statearr_44345_46392 = state_44251__$1;
(statearr_44345_46392[(2)] = inst_44178);

(statearr_44345_46392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (42))){
var state_44251__$1 = state_44251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44251__$1,(45),dchan);
} else {
if((state_val_44252 === (37))){
var inst_44220 = (state_44251[(22)]);
var inst_44119 = (state_44251[(10)]);
var inst_44211 = (state_44251[(23)]);
var inst_44220__$1 = cljs.core.first(inst_44211);
var inst_44221 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44220__$1,inst_44119,done);
var state_44251__$1 = (function (){var statearr_44355 = state_44251;
(statearr_44355[(22)] = inst_44220__$1);

return statearr_44355;
})();
if(cljs.core.truth_(inst_44221)){
var statearr_44356_46394 = state_44251__$1;
(statearr_44356_46394[(1)] = (39));

} else {
var statearr_44357_46395 = state_44251__$1;
(statearr_44357_46395[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (8))){
var inst_44131 = (state_44251[(15)]);
var inst_44130 = (state_44251[(16)]);
var inst_44133 = (inst_44131 < inst_44130);
var inst_44134 = inst_44133;
var state_44251__$1 = state_44251;
if(cljs.core.truth_(inst_44134)){
var statearr_44358_46396 = state_44251__$1;
(statearr_44358_46396[(1)] = (10));

} else {
var statearr_44359_46397 = state_44251__$1;
(statearr_44359_46397[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__43145__auto__ = null;
var cljs$core$async$mult_$_state_machine__43145__auto____0 = (function (){
var statearr_44360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44360[(0)] = cljs$core$async$mult_$_state_machine__43145__auto__);

(statearr_44360[(1)] = (1));

return statearr_44360;
});
var cljs$core$async$mult_$_state_machine__43145__auto____1 = (function (state_44251){
while(true){
var ret_value__43146__auto__ = (function (){try{while(true){
var result__43147__auto__ = switch__43144__auto__(state_44251);
if(cljs.core.keyword_identical_QMARK_(result__43147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43147__auto__;
}
break;
}
}catch (e44364){var ex__43148__auto__ = e44364;
var statearr_44365_46402 = state_44251;
(statearr_44365_46402[(2)] = ex__43148__auto__);


if(cljs.core.seq((state_44251[(4)]))){
var statearr_44366_46403 = state_44251;
(statearr_44366_46403[(1)] = cljs.core.first((state_44251[(4)])));

} else {
throw ex__43148__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46404 = state_44251;
state_44251 = G__46404;
continue;
} else {
return ret_value__43146__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43145__auto__ = function(state_44251){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43145__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43145__auto____1.call(this,state_44251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43145__auto____0;
cljs$core$async$mult_$_state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43145__auto____1;
return cljs$core$async$mult_$_state_machine__43145__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_44368 = f__43293__auto__();
(statearr_44368[(6)] = c__43292__auto___46290);

return statearr_44368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__44370 = arguments.length;
switch (G__44370) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_46420 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_46420(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_46421 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_46421(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_46423 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_46423(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_46426 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_46426(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_46429 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_46429(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46432 = arguments.length;
var i__5770__auto___46433 = (0);
while(true){
if((i__5770__auto___46433 < len__5769__auto___46432)){
args__5775__auto__.push((arguments[i__5770__auto___46433]));

var G__46434 = (i__5770__auto___46433 + (1));
i__5770__auto___46433 = G__46434;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44399){
var map__44400 = p__44399;
var map__44400__$1 = cljs.core.__destructure_map(map__44400);
var opts = map__44400__$1;
var statearr_44401_46435 = state;
(statearr_44401_46435[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_44402_46436 = state;
(statearr_44402_46436[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_44405_46437 = state;
(statearr_44405_46437[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44391){
var G__44392 = cljs.core.first(seq44391);
var seq44391__$1 = cljs.core.next(seq44391);
var G__44393 = cljs.core.first(seq44391__$1);
var seq44391__$2 = cljs.core.next(seq44391__$1);
var G__44394 = cljs.core.first(seq44391__$2);
var seq44391__$3 = cljs.core.next(seq44391__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44392,G__44393,G__44394,seq44391__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44424 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44424 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44425){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44425 = meta44425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44426,meta44425__$1){
var self__ = this;
var _44426__$1 = this;
return (new cljs.core.async.t_cljs$core$async44424(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44425__$1));
}));

(cljs.core.async.t_cljs$core$async44424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44426){
var self__ = this;
var _44426__$1 = this;
return self__.meta44425;
}));

(cljs.core.async.t_cljs$core$async44424.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44424.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async44424.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44424.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44424.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44424.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44424.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44424.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44425","meta44425",-1797750383,null)], null);
}));

(cljs.core.async.t_cljs$core$async44424.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44424");

(cljs.core.async.t_cljs$core$async44424.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44424");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44424.
 */
cljs.core.async.__GT_t_cljs$core$async44424 = (function cljs$core$async$mix_$___GT_t_cljs$core$async44424(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44425){
return (new cljs.core.async.t_cljs$core$async44424(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44425));
});

}

return (new cljs.core.async.t_cljs$core$async44424(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43292__auto___46455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43144__auto__ = (function (state_44523){
var state_val_44526 = (state_44523[(1)]);
if((state_val_44526 === (7))){
var inst_44473 = (state_44523[(2)]);
var state_44523__$1 = state_44523;
if(cljs.core.truth_(inst_44473)){
var statearr_44528_46456 = state_44523__$1;
(statearr_44528_46456[(1)] = (8));

} else {
var statearr_44529_46457 = state_44523__$1;
(statearr_44529_46457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44526 === (20))){
var inst_44463 = (state_44523[(7)]);
var state_44523__$1 = state_44523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44523__$1,(23),out,inst_44463);
} else {
if((state_val_44526 === (1))){
var inst_44443 = calc_state();
var inst_44444 = cljs.core.__destructure_map(inst_44443);
var inst_44445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44444,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44444,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44444,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44451 = inst_44443;
var state_44523__$1 = (function (){var statearr_44530 = state_44523;
(statearr_44530[(8)] = inst_44449);

(statearr_44530[(9)] = inst_44448);

(statearr_44530[(10)] = inst_44445);

(statearr_44530[(11)] = inst_44451);

return statearr_44530;
})();
var statearr_44535_46458 = state_44523__$1;
(statearr_44535_46458[(2)] = null);

(statearr_44535_46458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44526 === (24))){
var inst_44454 = (state_44523[(12)]);
var inst_44451 = inst_44454;
var state_44523__$1 = (function (){var statearr_44536 = state_44523;
(statearr_44536[(11)] = inst_44451);

return statearr_44536;
})();
var statearr_44537_46459 = state_44523__$1;
(statearr_44537_46459[(2)] = null);

(statearr_44537_46459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44526 === (4))){
var inst_44463 = (state_44523[(7)]);
var inst_44467 = (state_44523[(13)]);
var inst_44462 = (state_44523[(2)]);
var inst_44463__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44462,(0),null);
var inst_44464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44462,(1),null);
var inst_44467__$1 = (inst_44463__$1 == null);
var state_44523__$1 = (function (){var statearr_44538 = state_44523;
(statearr_44538[(7)] = inst_44463__$1);

(statearr_44538[(13)] = inst_44467__$1);

(statearr_44538[(14)] = inst_44464);

return statearr_44538;
})();
if(cljs.core.truth_(inst_44467__$1)){
var statearr_44539_46461 = state_44523__$1;
(statearr_44539_46461[(1)] = (5));

} else {
var statearr_44540_46462 = state_44523__$1;
(statearr_44540_46462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44526 === (15))){
var inst_44493 = (state_44523[(15)]);
var inst_44455 = (state_44523[(16)]);
var inst_44493__$1 = cljs.core.empty_QMARK_(inst_44455);
var state_44523__$1 = (function (){var statearr_44545 = state_44523;
(statearr_44545[(15)] = inst_44493__$1);

return statearr_44545;
})();
if(inst_44493__$1){
var statearr_44546_46464 = state_44523__$1;
(statearr_44546_46464[(1)] = (17));

} else {
var statearr_44547_46465 = state_44523__$1;
(statearr_44547_46465[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44526 === (21))){
var inst_44454 = (state_44523[(12)]);
var inst_44451 = inst_44454;
var state_44523__$1 = (function (){var statearr_44548 = state_44523;
(statearr_44548[(11)] = inst_44451);

return statearr_44548;
})();
var statearr_44555_46466 = state_44523__$1;
(statearr_44555_46466[(2)] = null);

(statearr_44555_46466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44526 === (13))){
var inst_44480 = (state_44523[(2)]);
var inst_44484 = calc_state();
var inst_44451 = inst_44484;
var state_44523__$1 = (function (){var statearr_44556 = state_44523;
(statearr_44556[(11)] = inst_44451);

(statearr_44556[(17)] = inst_44480);

return statearr_44556;
})();
var statearr_44557_46467 = state_44523__$1;
(statearr_44557_46467[(2)] = null);

(statearr_44557_46467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44526 === (22))){
var inst_44515 = (state_44523[(2)]);
var state_44523__$1 = state_44523;
var statearr_44562_46468 = state_44523__$1;
(statearr_44562_46468[(2)] = inst_44515);

(statearr_44562_46468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44526 === (6))){
var inst_44464 = (state_44523[(14)]);
var inst_44471 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44464,change);
var state_44523__$1 = state_44523;
var statearr_44563_46473 = state_44523__$1;
(statearr_44563_46473[(2)] = inst_44471);

(statearr_44563_46473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44526 === (25))){
var state_44523__$1 = state_44523;
var statearr_44564_46474 = state_44523__$1;
(statearr_44564_46474[(2)] = null);

(statearr_44564_46474[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44526 === (17))){
var inst_44464 = (state_44523[(14)]);
var inst_44456 = (state_44523[(18)]);
var inst_44497 = (inst_44456.cljs$core$IFn$_invoke$arity$1 ? inst_44456.cljs$core$IFn$_invoke$arity$1(inst_44464) : inst_44456.call(null,inst_44464));
var inst_44498 = cljs.core.not(inst_44497);
var state_44523__$1 = state_44523;
var statearr_44566_46475 = state_44523__$1;
(statearr_44566_46475[(2)] = inst_44498);

(statearr_44566_46475[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44526 === (3))){
var inst_44519 = (state_44523[(2)]);
var state_44523__$1 = state_44523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44523__$1,inst_44519);
} else {
if((state_val_44526 === (12))){
var state_44523__$1 = state_44523;
var statearr_44573_46476 = state_44523__$1;
(statearr_44573_46476[(2)] = null);

(statearr_44573_46476[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44526 === (2))){
var inst_44451 = (state_44523[(11)]);
var inst_44454 = (state_44523[(12)]);
var inst_44454__$1 = cljs.core.__destructure_map(inst_44451);
var inst_44455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44454__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44454__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44454__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44523__$1 = (function (){var statearr_44575 = state_44523;
(statearr_44575[(18)] = inst_44456);

(statearr_44575[(16)] = inst_44455);

(statearr_44575[(12)] = inst_44454__$1);

return statearr_44575;
})();
return cljs.core.async.ioc_alts_BANG_(state_44523__$1,(4),inst_44457);
} else {
if((state_val_44526 === (23))){
var inst_44506 = (state_44523[(2)]);
var state_44523__$1 = state_44523;
if(cljs.core.truth_(inst_44506)){
var statearr_44577_46477 = state_44523__$1;
(statearr_44577_46477[(1)] = (24));

} else {
var statearr_44578_46478 = state_44523__$1;
(statearr_44578_46478[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44526 === (19))){
var inst_44501 = (state_44523[(2)]);
var state_44523__$1 = state_44523;
var statearr_44585_46479 = state_44523__$1;
(statearr_44585_46479[(2)] = inst_44501);

(statearr_44585_46479[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44526 === (11))){
var inst_44464 = (state_44523[(14)]);
var inst_44477 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44464);
var state_44523__$1 = state_44523;
var statearr_44588_46480 = state_44523__$1;
(statearr_44588_46480[(2)] = inst_44477);

(statearr_44588_46480[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44526 === (9))){
var inst_44487 = (state_44523[(19)]);
var inst_44464 = (state_44523[(14)]);
var inst_44455 = (state_44523[(16)]);
var inst_44487__$1 = (inst_44455.cljs$core$IFn$_invoke$arity$1 ? inst_44455.cljs$core$IFn$_invoke$arity$1(inst_44464) : inst_44455.call(null,inst_44464));
var state_44523__$1 = (function (){var statearr_44589 = state_44523;
(statearr_44589[(19)] = inst_44487__$1);

return statearr_44589;
})();
if(cljs.core.truth_(inst_44487__$1)){
var statearr_44590_46485 = state_44523__$1;
(statearr_44590_46485[(1)] = (14));

} else {
var statearr_44591_46486 = state_44523__$1;
(statearr_44591_46486[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44526 === (5))){
var inst_44467 = (state_44523[(13)]);
var state_44523__$1 = state_44523;
var statearr_44593_46487 = state_44523__$1;
(statearr_44593_46487[(2)] = inst_44467);

(statearr_44593_46487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44526 === (14))){
var inst_44487 = (state_44523[(19)]);
var state_44523__$1 = state_44523;
var statearr_44594_46489 = state_44523__$1;
(statearr_44594_46489[(2)] = inst_44487);

(statearr_44594_46489[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44526 === (26))){
var inst_44511 = (state_44523[(2)]);
var state_44523__$1 = state_44523;
var statearr_44595_46492 = state_44523__$1;
(statearr_44595_46492[(2)] = inst_44511);

(statearr_44595_46492[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44526 === (16))){
var inst_44503 = (state_44523[(2)]);
var state_44523__$1 = state_44523;
if(cljs.core.truth_(inst_44503)){
var statearr_44596_46493 = state_44523__$1;
(statearr_44596_46493[(1)] = (20));

} else {
var statearr_44597_46494 = state_44523__$1;
(statearr_44597_46494[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44526 === (10))){
var inst_44517 = (state_44523[(2)]);
var state_44523__$1 = state_44523;
var statearr_44598_46495 = state_44523__$1;
(statearr_44598_46495[(2)] = inst_44517);

(statearr_44598_46495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44526 === (18))){
var inst_44493 = (state_44523[(15)]);
var state_44523__$1 = state_44523;
var statearr_44599_46498 = state_44523__$1;
(statearr_44599_46498[(2)] = inst_44493);

(statearr_44599_46498[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44526 === (8))){
var inst_44463 = (state_44523[(7)]);
var inst_44475 = (inst_44463 == null);
var state_44523__$1 = state_44523;
if(cljs.core.truth_(inst_44475)){
var statearr_44600_46501 = state_44523__$1;
(statearr_44600_46501[(1)] = (11));

} else {
var statearr_44601_46502 = state_44523__$1;
(statearr_44601_46502[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__43145__auto__ = null;
var cljs$core$async$mix_$_state_machine__43145__auto____0 = (function (){
var statearr_44605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44605[(0)] = cljs$core$async$mix_$_state_machine__43145__auto__);

(statearr_44605[(1)] = (1));

return statearr_44605;
});
var cljs$core$async$mix_$_state_machine__43145__auto____1 = (function (state_44523){
while(true){
var ret_value__43146__auto__ = (function (){try{while(true){
var result__43147__auto__ = switch__43144__auto__(state_44523);
if(cljs.core.keyword_identical_QMARK_(result__43147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43147__auto__;
}
break;
}
}catch (e44606){var ex__43148__auto__ = e44606;
var statearr_44607_46503 = state_44523;
(statearr_44607_46503[(2)] = ex__43148__auto__);


if(cljs.core.seq((state_44523[(4)]))){
var statearr_44608_46504 = state_44523;
(statearr_44608_46504[(1)] = cljs.core.first((state_44523[(4)])));

} else {
throw ex__43148__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46505 = state_44523;
state_44523 = G__46505;
continue;
} else {
return ret_value__43146__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43145__auto__ = function(state_44523){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43145__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43145__auto____1.call(this,state_44523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43145__auto____0;
cljs$core$async$mix_$_state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43145__auto____1;
return cljs$core$async$mix_$_state_machine__43145__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_44612 = f__43293__auto__();
(statearr_44612[(6)] = c__43292__auto___46455);

return statearr_44612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_46508 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_46508(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_46513 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_46513(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_46519 = (function() {
var G__46520 = null;
var G__46520__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__46520__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__46520 = function(p,v){
switch(arguments.length){
case 1:
return G__46520__1.call(this,p);
case 2:
return G__46520__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46520.cljs$core$IFn$_invoke$arity$1 = G__46520__1;
G__46520.cljs$core$IFn$_invoke$arity$2 = G__46520__2;
return G__46520;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__44632 = arguments.length;
switch (G__44632) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46519(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46519(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__44641 = arguments.length;
switch (G__44641) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__44639_SHARP_){
if(cljs.core.truth_((p1__44639_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44639_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__44639_SHARP_.call(null,topic)))){
return p1__44639_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44639_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44643 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44643 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44644){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44644 = meta44644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44645,meta44644__$1){
var self__ = this;
var _44645__$1 = this;
return (new cljs.core.async.t_cljs$core$async44643(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44644__$1));
}));

(cljs.core.async.t_cljs$core$async44643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44645){
var self__ = this;
var _44645__$1 = this;
return self__.meta44644;
}));

(cljs.core.async.t_cljs$core$async44643.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44643.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44643.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44643.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async44643.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async44643.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async44643.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async44643.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44644","meta44644",-837374264,null)], null);
}));

(cljs.core.async.t_cljs$core$async44643.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44643");

(cljs.core.async.t_cljs$core$async44643.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44643");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44643.
 */
cljs.core.async.__GT_t_cljs$core$async44643 = (function cljs$core$async$__GT_t_cljs$core$async44643(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44644){
return (new cljs.core.async.t_cljs$core$async44643(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44644));
});

}

return (new cljs.core.async.t_cljs$core$async44643(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43292__auto___46548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43144__auto__ = (function (state_44735){
var state_val_44736 = (state_44735[(1)]);
if((state_val_44736 === (7))){
var inst_44731 = (state_44735[(2)]);
var state_44735__$1 = state_44735;
var statearr_44743_46551 = state_44735__$1;
(statearr_44743_46551[(2)] = inst_44731);

(statearr_44743_46551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44736 === (20))){
var state_44735__$1 = state_44735;
var statearr_44745_46553 = state_44735__$1;
(statearr_44745_46553[(2)] = null);

(statearr_44745_46553[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44736 === (1))){
var state_44735__$1 = state_44735;
var statearr_44746_46555 = state_44735__$1;
(statearr_44746_46555[(2)] = null);

(statearr_44746_46555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44736 === (24))){
var inst_44714 = (state_44735[(7)]);
var inst_44723 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_44714);
var state_44735__$1 = state_44735;
var statearr_44747_46556 = state_44735__$1;
(statearr_44747_46556[(2)] = inst_44723);

(statearr_44747_46556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44736 === (4))){
var inst_44664 = (state_44735[(8)]);
var inst_44664__$1 = (state_44735[(2)]);
var inst_44665 = (inst_44664__$1 == null);
var state_44735__$1 = (function (){var statearr_44751 = state_44735;
(statearr_44751[(8)] = inst_44664__$1);

return statearr_44751;
})();
if(cljs.core.truth_(inst_44665)){
var statearr_44752_46561 = state_44735__$1;
(statearr_44752_46561[(1)] = (5));

} else {
var statearr_44753_46562 = state_44735__$1;
(statearr_44753_46562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44736 === (15))){
var inst_44708 = (state_44735[(2)]);
var state_44735__$1 = state_44735;
var statearr_44755_46563 = state_44735__$1;
(statearr_44755_46563[(2)] = inst_44708);

(statearr_44755_46563[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44736 === (21))){
var inst_44728 = (state_44735[(2)]);
var state_44735__$1 = (function (){var statearr_44757 = state_44735;
(statearr_44757[(9)] = inst_44728);

return statearr_44757;
})();
var statearr_44762_46568 = state_44735__$1;
(statearr_44762_46568[(2)] = null);

(statearr_44762_46568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44736 === (13))){
var inst_44690 = (state_44735[(10)]);
var inst_44692 = cljs.core.chunked_seq_QMARK_(inst_44690);
var state_44735__$1 = state_44735;
if(inst_44692){
var statearr_44763_46572 = state_44735__$1;
(statearr_44763_46572[(1)] = (16));

} else {
var statearr_44774_46573 = state_44735__$1;
(statearr_44774_46573[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44736 === (22))){
var inst_44720 = (state_44735[(2)]);
var state_44735__$1 = state_44735;
if(cljs.core.truth_(inst_44720)){
var statearr_44776_46575 = state_44735__$1;
(statearr_44776_46575[(1)] = (23));

} else {
var statearr_44777_46576 = state_44735__$1;
(statearr_44777_46576[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44736 === (6))){
var inst_44664 = (state_44735[(8)]);
var inst_44714 = (state_44735[(7)]);
var inst_44716 = (state_44735[(11)]);
var inst_44714__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_44664) : topic_fn.call(null,inst_44664));
var inst_44715 = cljs.core.deref(mults);
var inst_44716__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44715,inst_44714__$1);
var state_44735__$1 = (function (){var statearr_44780 = state_44735;
(statearr_44780[(7)] = inst_44714__$1);

(statearr_44780[(11)] = inst_44716__$1);

return statearr_44780;
})();
if(cljs.core.truth_(inst_44716__$1)){
var statearr_44781_46578 = state_44735__$1;
(statearr_44781_46578[(1)] = (19));

} else {
var statearr_44782_46582 = state_44735__$1;
(statearr_44782_46582[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44736 === (25))){
var inst_44725 = (state_44735[(2)]);
var state_44735__$1 = state_44735;
var statearr_44783_46583 = state_44735__$1;
(statearr_44783_46583[(2)] = inst_44725);

(statearr_44783_46583[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44736 === (17))){
var inst_44690 = (state_44735[(10)]);
var inst_44699 = cljs.core.first(inst_44690);
var inst_44700 = cljs.core.async.muxch_STAR_(inst_44699);
var inst_44701 = cljs.core.async.close_BANG_(inst_44700);
var inst_44702 = cljs.core.next(inst_44690);
var inst_44674 = inst_44702;
var inst_44675 = null;
var inst_44676 = (0);
var inst_44677 = (0);
var state_44735__$1 = (function (){var statearr_44785 = state_44735;
(statearr_44785[(12)] = inst_44675);

(statearr_44785[(13)] = inst_44676);

(statearr_44785[(14)] = inst_44701);

(statearr_44785[(15)] = inst_44674);

(statearr_44785[(16)] = inst_44677);

return statearr_44785;
})();
var statearr_44786_46587 = state_44735__$1;
(statearr_44786_46587[(2)] = null);

(statearr_44786_46587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44736 === (3))){
var inst_44733 = (state_44735[(2)]);
var state_44735__$1 = state_44735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44735__$1,inst_44733);
} else {
if((state_val_44736 === (12))){
var inst_44710 = (state_44735[(2)]);
var state_44735__$1 = state_44735;
var statearr_44795_46588 = state_44735__$1;
(statearr_44795_46588[(2)] = inst_44710);

(statearr_44795_46588[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44736 === (2))){
var state_44735__$1 = state_44735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44735__$1,(4),ch);
} else {
if((state_val_44736 === (23))){
var state_44735__$1 = state_44735;
var statearr_44802_46593 = state_44735__$1;
(statearr_44802_46593[(2)] = null);

(statearr_44802_46593[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44736 === (19))){
var inst_44664 = (state_44735[(8)]);
var inst_44716 = (state_44735[(11)]);
var inst_44718 = cljs.core.async.muxch_STAR_(inst_44716);
var state_44735__$1 = state_44735;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44735__$1,(22),inst_44718,inst_44664);
} else {
if((state_val_44736 === (11))){
var inst_44690 = (state_44735[(10)]);
var inst_44674 = (state_44735[(15)]);
var inst_44690__$1 = cljs.core.seq(inst_44674);
var state_44735__$1 = (function (){var statearr_44803 = state_44735;
(statearr_44803[(10)] = inst_44690__$1);

return statearr_44803;
})();
if(inst_44690__$1){
var statearr_44810_46599 = state_44735__$1;
(statearr_44810_46599[(1)] = (13));

} else {
var statearr_44811_46600 = state_44735__$1;
(statearr_44811_46600[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44736 === (9))){
var inst_44712 = (state_44735[(2)]);
var state_44735__$1 = state_44735;
var statearr_44812_46601 = state_44735__$1;
(statearr_44812_46601[(2)] = inst_44712);

(statearr_44812_46601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44736 === (5))){
var inst_44671 = cljs.core.deref(mults);
var inst_44672 = cljs.core.vals(inst_44671);
var inst_44673 = cljs.core.seq(inst_44672);
var inst_44674 = inst_44673;
var inst_44675 = null;
var inst_44676 = (0);
var inst_44677 = (0);
var state_44735__$1 = (function (){var statearr_44814 = state_44735;
(statearr_44814[(12)] = inst_44675);

(statearr_44814[(13)] = inst_44676);

(statearr_44814[(15)] = inst_44674);

(statearr_44814[(16)] = inst_44677);

return statearr_44814;
})();
var statearr_44815_46602 = state_44735__$1;
(statearr_44815_46602[(2)] = null);

(statearr_44815_46602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44736 === (14))){
var state_44735__$1 = state_44735;
var statearr_44819_46603 = state_44735__$1;
(statearr_44819_46603[(2)] = null);

(statearr_44819_46603[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44736 === (16))){
var inst_44690 = (state_44735[(10)]);
var inst_44694 = cljs.core.chunk_first(inst_44690);
var inst_44695 = cljs.core.chunk_rest(inst_44690);
var inst_44696 = cljs.core.count(inst_44694);
var inst_44674 = inst_44695;
var inst_44675 = inst_44694;
var inst_44676 = inst_44696;
var inst_44677 = (0);
var state_44735__$1 = (function (){var statearr_44820 = state_44735;
(statearr_44820[(12)] = inst_44675);

(statearr_44820[(13)] = inst_44676);

(statearr_44820[(15)] = inst_44674);

(statearr_44820[(16)] = inst_44677);

return statearr_44820;
})();
var statearr_44821_46604 = state_44735__$1;
(statearr_44821_46604[(2)] = null);

(statearr_44821_46604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44736 === (10))){
var inst_44675 = (state_44735[(12)]);
var inst_44676 = (state_44735[(13)]);
var inst_44674 = (state_44735[(15)]);
var inst_44677 = (state_44735[(16)]);
var inst_44684 = cljs.core._nth(inst_44675,inst_44677);
var inst_44685 = cljs.core.async.muxch_STAR_(inst_44684);
var inst_44686 = cljs.core.async.close_BANG_(inst_44685);
var inst_44687 = (inst_44677 + (1));
var tmp44816 = inst_44675;
var tmp44817 = inst_44676;
var tmp44818 = inst_44674;
var inst_44674__$1 = tmp44818;
var inst_44675__$1 = tmp44816;
var inst_44676__$1 = tmp44817;
var inst_44677__$1 = inst_44687;
var state_44735__$1 = (function (){var statearr_44826 = state_44735;
(statearr_44826[(12)] = inst_44675__$1);

(statearr_44826[(13)] = inst_44676__$1);

(statearr_44826[(17)] = inst_44686);

(statearr_44826[(15)] = inst_44674__$1);

(statearr_44826[(16)] = inst_44677__$1);

return statearr_44826;
})();
var statearr_44827_46605 = state_44735__$1;
(statearr_44827_46605[(2)] = null);

(statearr_44827_46605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44736 === (18))){
var inst_44705 = (state_44735[(2)]);
var state_44735__$1 = state_44735;
var statearr_44828_46607 = state_44735__$1;
(statearr_44828_46607[(2)] = inst_44705);

(statearr_44828_46607[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44736 === (8))){
var inst_44676 = (state_44735[(13)]);
var inst_44677 = (state_44735[(16)]);
var inst_44681 = (inst_44677 < inst_44676);
var inst_44682 = inst_44681;
var state_44735__$1 = state_44735;
if(cljs.core.truth_(inst_44682)){
var statearr_44830_46609 = state_44735__$1;
(statearr_44830_46609[(1)] = (10));

} else {
var statearr_44832_46610 = state_44735__$1;
(statearr_44832_46610[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43145__auto__ = null;
var cljs$core$async$state_machine__43145__auto____0 = (function (){
var statearr_44834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44834[(0)] = cljs$core$async$state_machine__43145__auto__);

(statearr_44834[(1)] = (1));

return statearr_44834;
});
var cljs$core$async$state_machine__43145__auto____1 = (function (state_44735){
while(true){
var ret_value__43146__auto__ = (function (){try{while(true){
var result__43147__auto__ = switch__43144__auto__(state_44735);
if(cljs.core.keyword_identical_QMARK_(result__43147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43147__auto__;
}
break;
}
}catch (e44835){var ex__43148__auto__ = e44835;
var statearr_44836_46612 = state_44735;
(statearr_44836_46612[(2)] = ex__43148__auto__);


if(cljs.core.seq((state_44735[(4)]))){
var statearr_44837_46613 = state_44735;
(statearr_44837_46613[(1)] = cljs.core.first((state_44735[(4)])));

} else {
throw ex__43148__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46614 = state_44735;
state_44735 = G__46614;
continue;
} else {
return ret_value__43146__auto__;
}
break;
}
});
cljs$core$async$state_machine__43145__auto__ = function(state_44735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43145__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43145__auto____1.call(this,state_44735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43145__auto____0;
cljs$core$async$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43145__auto____1;
return cljs$core$async$state_machine__43145__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_44839 = f__43293__auto__();
(statearr_44839[(6)] = c__43292__auto___46548);

return statearr_44839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__44842 = arguments.length;
switch (G__44842) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__44844 = arguments.length;
switch (G__44844) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__44847 = arguments.length;
switch (G__44847) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__43292__auto___46618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43144__auto__ = (function (state_44906){
var state_val_44907 = (state_44906[(1)]);
if((state_val_44907 === (7))){
var state_44906__$1 = state_44906;
var statearr_44910_46619 = state_44906__$1;
(statearr_44910_46619[(2)] = null);

(statearr_44910_46619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44907 === (1))){
var state_44906__$1 = state_44906;
var statearr_44911_46620 = state_44906__$1;
(statearr_44911_46620[(2)] = null);

(statearr_44911_46620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44907 === (4))){
var inst_44861 = (state_44906[(7)]);
var inst_44860 = (state_44906[(8)]);
var inst_44863 = (inst_44861 < inst_44860);
var state_44906__$1 = state_44906;
if(cljs.core.truth_(inst_44863)){
var statearr_44912_46621 = state_44906__$1;
(statearr_44912_46621[(1)] = (6));

} else {
var statearr_44915_46622 = state_44906__$1;
(statearr_44915_46622[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44907 === (15))){
var inst_44887 = (state_44906[(9)]);
var inst_44892 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_44887);
var state_44906__$1 = state_44906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44906__$1,(17),out,inst_44892);
} else {
if((state_val_44907 === (13))){
var inst_44887 = (state_44906[(9)]);
var inst_44887__$1 = (state_44906[(2)]);
var inst_44888 = cljs.core.some(cljs.core.nil_QMARK_,inst_44887__$1);
var state_44906__$1 = (function (){var statearr_44918 = state_44906;
(statearr_44918[(9)] = inst_44887__$1);

return statearr_44918;
})();
if(cljs.core.truth_(inst_44888)){
var statearr_44919_46627 = state_44906__$1;
(statearr_44919_46627[(1)] = (14));

} else {
var statearr_44921_46628 = state_44906__$1;
(statearr_44921_46628[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44907 === (6))){
var state_44906__$1 = state_44906;
var statearr_44922_46629 = state_44906__$1;
(statearr_44922_46629[(2)] = null);

(statearr_44922_46629[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44907 === (17))){
var inst_44894 = (state_44906[(2)]);
var state_44906__$1 = (function (){var statearr_44936 = state_44906;
(statearr_44936[(10)] = inst_44894);

return statearr_44936;
})();
var statearr_44938_46630 = state_44906__$1;
(statearr_44938_46630[(2)] = null);

(statearr_44938_46630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44907 === (3))){
var inst_44902 = (state_44906[(2)]);
var state_44906__$1 = state_44906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44906__$1,inst_44902);
} else {
if((state_val_44907 === (12))){
var _ = (function (){var statearr_44943 = state_44906;
(statearr_44943[(4)] = cljs.core.rest((state_44906[(4)])));

return statearr_44943;
})();
var state_44906__$1 = state_44906;
var ex44934 = (state_44906__$1[(2)]);
var statearr_44944_46631 = state_44906__$1;
(statearr_44944_46631[(5)] = ex44934);


if((ex44934 instanceof Object)){
var statearr_44952_46632 = state_44906__$1;
(statearr_44952_46632[(1)] = (11));

(statearr_44952_46632[(5)] = null);

} else {
throw ex44934;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44907 === (2))){
var inst_44859 = cljs.core.reset_BANG_(dctr,cnt);
var inst_44860 = cnt;
var inst_44861 = (0);
var state_44906__$1 = (function (){var statearr_44960 = state_44906;
(statearr_44960[(7)] = inst_44861);

(statearr_44960[(8)] = inst_44860);

(statearr_44960[(11)] = inst_44859);

return statearr_44960;
})();
var statearr_44961_46636 = state_44906__$1;
(statearr_44961_46636[(2)] = null);

(statearr_44961_46636[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44907 === (11))){
var inst_44866 = (state_44906[(2)]);
var inst_44867 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_44906__$1 = (function (){var statearr_44962 = state_44906;
(statearr_44962[(12)] = inst_44866);

return statearr_44962;
})();
var statearr_44963_46637 = state_44906__$1;
(statearr_44963_46637[(2)] = inst_44867);

(statearr_44963_46637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44907 === (9))){
var inst_44861 = (state_44906[(7)]);
var _ = (function (){var statearr_44964 = state_44906;
(statearr_44964[(4)] = cljs.core.cons((12),(state_44906[(4)])));

return statearr_44964;
})();
var inst_44873 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_44861) : chs__$1.call(null,inst_44861));
var inst_44874 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_44861) : done.call(null,inst_44861));
var inst_44875 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_44873,inst_44874);
var ___$1 = (function (){var statearr_44965 = state_44906;
(statearr_44965[(4)] = cljs.core.rest((state_44906[(4)])));

return statearr_44965;
})();
var state_44906__$1 = state_44906;
var statearr_44966_46645 = state_44906__$1;
(statearr_44966_46645[(2)] = inst_44875);

(statearr_44966_46645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44907 === (5))){
var inst_44885 = (state_44906[(2)]);
var state_44906__$1 = (function (){var statearr_44969 = state_44906;
(statearr_44969[(13)] = inst_44885);

return statearr_44969;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44906__$1,(13),dchan);
} else {
if((state_val_44907 === (14))){
var inst_44890 = cljs.core.async.close_BANG_(out);
var state_44906__$1 = state_44906;
var statearr_44976_46647 = state_44906__$1;
(statearr_44976_46647[(2)] = inst_44890);

(statearr_44976_46647[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44907 === (16))){
var inst_44897 = (state_44906[(2)]);
var state_44906__$1 = state_44906;
var statearr_44977_46648 = state_44906__$1;
(statearr_44977_46648[(2)] = inst_44897);

(statearr_44977_46648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44907 === (10))){
var inst_44861 = (state_44906[(7)]);
var inst_44878 = (state_44906[(2)]);
var inst_44879 = (inst_44861 + (1));
var inst_44861__$1 = inst_44879;
var state_44906__$1 = (function (){var statearr_44979 = state_44906;
(statearr_44979[(14)] = inst_44878);

(statearr_44979[(7)] = inst_44861__$1);

return statearr_44979;
})();
var statearr_44980_46649 = state_44906__$1;
(statearr_44980_46649[(2)] = null);

(statearr_44980_46649[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44907 === (8))){
var inst_44883 = (state_44906[(2)]);
var state_44906__$1 = state_44906;
var statearr_44985_46650 = state_44906__$1;
(statearr_44985_46650[(2)] = inst_44883);

(statearr_44985_46650[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43145__auto__ = null;
var cljs$core$async$state_machine__43145__auto____0 = (function (){
var statearr_44989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44989[(0)] = cljs$core$async$state_machine__43145__auto__);

(statearr_44989[(1)] = (1));

return statearr_44989;
});
var cljs$core$async$state_machine__43145__auto____1 = (function (state_44906){
while(true){
var ret_value__43146__auto__ = (function (){try{while(true){
var result__43147__auto__ = switch__43144__auto__(state_44906);
if(cljs.core.keyword_identical_QMARK_(result__43147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43147__auto__;
}
break;
}
}catch (e44990){var ex__43148__auto__ = e44990;
var statearr_44991_46655 = state_44906;
(statearr_44991_46655[(2)] = ex__43148__auto__);


if(cljs.core.seq((state_44906[(4)]))){
var statearr_44992_46656 = state_44906;
(statearr_44992_46656[(1)] = cljs.core.first((state_44906[(4)])));

} else {
throw ex__43148__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46657 = state_44906;
state_44906 = G__46657;
continue;
} else {
return ret_value__43146__auto__;
}
break;
}
});
cljs$core$async$state_machine__43145__auto__ = function(state_44906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43145__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43145__auto____1.call(this,state_44906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43145__auto____0;
cljs$core$async$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43145__auto____1;
return cljs$core$async$state_machine__43145__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_44993 = f__43293__auto__();
(statearr_44993[(6)] = c__43292__auto___46618);

return statearr_44993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__44999 = arguments.length;
switch (G__44999) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43292__auto___46659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43144__auto__ = (function (state_45096){
var state_val_45101 = (state_45096[(1)]);
if((state_val_45101 === (7))){
var inst_45024 = (state_45096[(7)]);
var inst_45023 = (state_45096[(8)]);
var inst_45023__$1 = (state_45096[(2)]);
var inst_45024__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45023__$1,(0),null);
var inst_45025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45023__$1,(1),null);
var inst_45026 = (inst_45024__$1 == null);
var state_45096__$1 = (function (){var statearr_45124 = state_45096;
(statearr_45124[(7)] = inst_45024__$1);

(statearr_45124[(9)] = inst_45025);

(statearr_45124[(8)] = inst_45023__$1);

return statearr_45124;
})();
if(cljs.core.truth_(inst_45026)){
var statearr_45125_46664 = state_45096__$1;
(statearr_45125_46664[(1)] = (8));

} else {
var statearr_45126_46669 = state_45096__$1;
(statearr_45126_46669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45101 === (1))){
var inst_45009 = cljs.core.vec(chs);
var inst_45010 = inst_45009;
var state_45096__$1 = (function (){var statearr_45131 = state_45096;
(statearr_45131[(10)] = inst_45010);

return statearr_45131;
})();
var statearr_45132_46670 = state_45096__$1;
(statearr_45132_46670[(2)] = null);

(statearr_45132_46670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45101 === (4))){
var inst_45010 = (state_45096[(10)]);
var state_45096__$1 = state_45096;
return cljs.core.async.ioc_alts_BANG_(state_45096__$1,(7),inst_45010);
} else {
if((state_val_45101 === (6))){
var inst_45069 = (state_45096[(2)]);
var state_45096__$1 = state_45096;
var statearr_45134_46675 = state_45096__$1;
(statearr_45134_46675[(2)] = inst_45069);

(statearr_45134_46675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45101 === (3))){
var inst_45073 = (state_45096[(2)]);
var state_45096__$1 = state_45096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45096__$1,inst_45073);
} else {
if((state_val_45101 === (2))){
var inst_45010 = (state_45096[(10)]);
var inst_45016 = cljs.core.count(inst_45010);
var inst_45017 = (inst_45016 > (0));
var state_45096__$1 = state_45096;
if(cljs.core.truth_(inst_45017)){
var statearr_45140_46676 = state_45096__$1;
(statearr_45140_46676[(1)] = (4));

} else {
var statearr_45141_46677 = state_45096__$1;
(statearr_45141_46677[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45101 === (11))){
var inst_45010 = (state_45096[(10)]);
var inst_45051 = (state_45096[(2)]);
var tmp45135 = inst_45010;
var inst_45010__$1 = tmp45135;
var state_45096__$1 = (function (){var statearr_45143 = state_45096;
(statearr_45143[(10)] = inst_45010__$1);

(statearr_45143[(11)] = inst_45051);

return statearr_45143;
})();
var statearr_45145_46678 = state_45096__$1;
(statearr_45145_46678[(2)] = null);

(statearr_45145_46678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45101 === (9))){
var inst_45024 = (state_45096[(7)]);
var state_45096__$1 = state_45096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45096__$1,(11),out,inst_45024);
} else {
if((state_val_45101 === (5))){
var inst_45067 = cljs.core.async.close_BANG_(out);
var state_45096__$1 = state_45096;
var statearr_45148_46679 = state_45096__$1;
(statearr_45148_46679[(2)] = inst_45067);

(statearr_45148_46679[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45101 === (10))){
var inst_45057 = (state_45096[(2)]);
var state_45096__$1 = state_45096;
var statearr_45149_46680 = state_45096__$1;
(statearr_45149_46680[(2)] = inst_45057);

(statearr_45149_46680[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45101 === (8))){
var inst_45024 = (state_45096[(7)]);
var inst_45010 = (state_45096[(10)]);
var inst_45025 = (state_45096[(9)]);
var inst_45023 = (state_45096[(8)]);
var inst_45046 = (function (){var cs = inst_45010;
var vec__45019 = inst_45023;
var v = inst_45024;
var c = inst_45025;
return (function (p1__44995_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__44995_SHARP_);
});
})();
var inst_45047 = cljs.core.filterv(inst_45046,inst_45010);
var inst_45010__$1 = inst_45047;
var state_45096__$1 = (function (){var statearr_45150 = state_45096;
(statearr_45150[(10)] = inst_45010__$1);

return statearr_45150;
})();
var statearr_45151_46681 = state_45096__$1;
(statearr_45151_46681[(2)] = null);

(statearr_45151_46681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43145__auto__ = null;
var cljs$core$async$state_machine__43145__auto____0 = (function (){
var statearr_45161 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45161[(0)] = cljs$core$async$state_machine__43145__auto__);

(statearr_45161[(1)] = (1));

return statearr_45161;
});
var cljs$core$async$state_machine__43145__auto____1 = (function (state_45096){
while(true){
var ret_value__43146__auto__ = (function (){try{while(true){
var result__43147__auto__ = switch__43144__auto__(state_45096);
if(cljs.core.keyword_identical_QMARK_(result__43147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43147__auto__;
}
break;
}
}catch (e45162){var ex__43148__auto__ = e45162;
var statearr_45163_46683 = state_45096;
(statearr_45163_46683[(2)] = ex__43148__auto__);


if(cljs.core.seq((state_45096[(4)]))){
var statearr_45164_46684 = state_45096;
(statearr_45164_46684[(1)] = cljs.core.first((state_45096[(4)])));

} else {
throw ex__43148__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46688 = state_45096;
state_45096 = G__46688;
continue;
} else {
return ret_value__43146__auto__;
}
break;
}
});
cljs$core$async$state_machine__43145__auto__ = function(state_45096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43145__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43145__auto____1.call(this,state_45096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43145__auto____0;
cljs$core$async$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43145__auto____1;
return cljs$core$async$state_machine__43145__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_45166 = f__43293__auto__();
(statearr_45166[(6)] = c__43292__auto___46659);

return statearr_45166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__45175 = arguments.length;
switch (G__45175) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43292__auto___46690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43144__auto__ = (function (state_45207){
var state_val_45208 = (state_45207[(1)]);
if((state_val_45208 === (7))){
var inst_45189 = (state_45207[(7)]);
var inst_45189__$1 = (state_45207[(2)]);
var inst_45190 = (inst_45189__$1 == null);
var inst_45191 = cljs.core.not(inst_45190);
var state_45207__$1 = (function (){var statearr_45209 = state_45207;
(statearr_45209[(7)] = inst_45189__$1);

return statearr_45209;
})();
if(inst_45191){
var statearr_45210_46692 = state_45207__$1;
(statearr_45210_46692[(1)] = (8));

} else {
var statearr_45211_46693 = state_45207__$1;
(statearr_45211_46693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45208 === (1))){
var inst_45184 = (0);
var state_45207__$1 = (function (){var statearr_45213 = state_45207;
(statearr_45213[(8)] = inst_45184);

return statearr_45213;
})();
var statearr_45215_46694 = state_45207__$1;
(statearr_45215_46694[(2)] = null);

(statearr_45215_46694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45208 === (4))){
var state_45207__$1 = state_45207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45207__$1,(7),ch);
} else {
if((state_val_45208 === (6))){
var inst_45202 = (state_45207[(2)]);
var state_45207__$1 = state_45207;
var statearr_45216_46695 = state_45207__$1;
(statearr_45216_46695[(2)] = inst_45202);

(statearr_45216_46695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45208 === (3))){
var inst_45204 = (state_45207[(2)]);
var inst_45205 = cljs.core.async.close_BANG_(out);
var state_45207__$1 = (function (){var statearr_45217 = state_45207;
(statearr_45217[(9)] = inst_45204);

return statearr_45217;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45207__$1,inst_45205);
} else {
if((state_val_45208 === (2))){
var inst_45184 = (state_45207[(8)]);
var inst_45186 = (inst_45184 < n);
var state_45207__$1 = state_45207;
if(cljs.core.truth_(inst_45186)){
var statearr_45218_46697 = state_45207__$1;
(statearr_45218_46697[(1)] = (4));

} else {
var statearr_45219_46698 = state_45207__$1;
(statearr_45219_46698[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45208 === (11))){
var inst_45184 = (state_45207[(8)]);
var inst_45194 = (state_45207[(2)]);
var inst_45195 = (inst_45184 + (1));
var inst_45184__$1 = inst_45195;
var state_45207__$1 = (function (){var statearr_45220 = state_45207;
(statearr_45220[(8)] = inst_45184__$1);

(statearr_45220[(10)] = inst_45194);

return statearr_45220;
})();
var statearr_45221_46699 = state_45207__$1;
(statearr_45221_46699[(2)] = null);

(statearr_45221_46699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45208 === (9))){
var state_45207__$1 = state_45207;
var statearr_45222_46700 = state_45207__$1;
(statearr_45222_46700[(2)] = null);

(statearr_45222_46700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45208 === (5))){
var state_45207__$1 = state_45207;
var statearr_45223_46701 = state_45207__$1;
(statearr_45223_46701[(2)] = null);

(statearr_45223_46701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45208 === (10))){
var inst_45199 = (state_45207[(2)]);
var state_45207__$1 = state_45207;
var statearr_45224_46703 = state_45207__$1;
(statearr_45224_46703[(2)] = inst_45199);

(statearr_45224_46703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45208 === (8))){
var inst_45189 = (state_45207[(7)]);
var state_45207__$1 = state_45207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45207__$1,(11),out,inst_45189);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43145__auto__ = null;
var cljs$core$async$state_machine__43145__auto____0 = (function (){
var statearr_45227 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45227[(0)] = cljs$core$async$state_machine__43145__auto__);

(statearr_45227[(1)] = (1));

return statearr_45227;
});
var cljs$core$async$state_machine__43145__auto____1 = (function (state_45207){
while(true){
var ret_value__43146__auto__ = (function (){try{while(true){
var result__43147__auto__ = switch__43144__auto__(state_45207);
if(cljs.core.keyword_identical_QMARK_(result__43147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43147__auto__;
}
break;
}
}catch (e45228){var ex__43148__auto__ = e45228;
var statearr_45229_46705 = state_45207;
(statearr_45229_46705[(2)] = ex__43148__auto__);


if(cljs.core.seq((state_45207[(4)]))){
var statearr_45230_46706 = state_45207;
(statearr_45230_46706[(1)] = cljs.core.first((state_45207[(4)])));

} else {
throw ex__43148__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46707 = state_45207;
state_45207 = G__46707;
continue;
} else {
return ret_value__43146__auto__;
}
break;
}
});
cljs$core$async$state_machine__43145__auto__ = function(state_45207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43145__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43145__auto____1.call(this,state_45207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43145__auto____0;
cljs$core$async$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43145__auto____1;
return cljs$core$async$state_machine__43145__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_45233 = f__43293__auto__();
(statearr_45233[(6)] = c__43292__auto___46690);

return statearr_45233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45235 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45235 = (function (f,ch,meta45236){
this.f = f;
this.ch = ch;
this.meta45236 = meta45236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45237,meta45236__$1){
var self__ = this;
var _45237__$1 = this;
return (new cljs.core.async.t_cljs$core$async45235(self__.f,self__.ch,meta45236__$1));
}));

(cljs.core.async.t_cljs$core$async45235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45237){
var self__ = this;
var _45237__$1 = this;
return self__.meta45236;
}));

(cljs.core.async.t_cljs$core$async45235.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45235.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45235.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45235.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45235.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45238 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45238 = (function (f,ch,meta45236,_,fn1,meta45239){
this.f = f;
this.ch = ch;
this.meta45236 = meta45236;
this._ = _;
this.fn1 = fn1;
this.meta45239 = meta45239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45240,meta45239__$1){
var self__ = this;
var _45240__$1 = this;
return (new cljs.core.async.t_cljs$core$async45238(self__.f,self__.ch,self__.meta45236,self__._,self__.fn1,meta45239__$1));
}));

(cljs.core.async.t_cljs$core$async45238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45240){
var self__ = this;
var _45240__$1 = this;
return self__.meta45239;
}));

(cljs.core.async.t_cljs$core$async45238.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45238.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async45238.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45238.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__45234_SHARP_){
var G__45265 = (((p1__45234_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__45234_SHARP_) : self__.f.call(null,p1__45234_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__45265) : f1.call(null,G__45265));
});
}));

(cljs.core.async.t_cljs$core$async45238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45236","meta45236",259352496,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45235","cljs.core.async/t_cljs$core$async45235",167981459,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45239","meta45239",-406545856,null)], null);
}));

(cljs.core.async.t_cljs$core$async45238.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45238");

(cljs.core.async.t_cljs$core$async45238.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45238");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45238.
 */
cljs.core.async.__GT_t_cljs$core$async45238 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45238(f__$1,ch__$1,meta45236__$1,___$2,fn1__$1,meta45239){
return (new cljs.core.async.t_cljs$core$async45238(f__$1,ch__$1,meta45236__$1,___$2,fn1__$1,meta45239));
});

}

return (new cljs.core.async.t_cljs$core$async45238(self__.f,self__.ch,self__.meta45236,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__45268 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45268) : self__.f.call(null,G__45268));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async45235.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45235.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async45235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45236","meta45236",259352496,null)], null);
}));

(cljs.core.async.t_cljs$core$async45235.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45235");

(cljs.core.async.t_cljs$core$async45235.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45235");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45235.
 */
cljs.core.async.__GT_t_cljs$core$async45235 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45235(f__$1,ch__$1,meta45236){
return (new cljs.core.async.t_cljs$core$async45235(f__$1,ch__$1,meta45236));
});

}

return (new cljs.core.async.t_cljs$core$async45235(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45275 = (function (f,ch,meta45276){
this.f = f;
this.ch = ch;
this.meta45276 = meta45276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45277,meta45276__$1){
var self__ = this;
var _45277__$1 = this;
return (new cljs.core.async.t_cljs$core$async45275(self__.f,self__.ch,meta45276__$1));
}));

(cljs.core.async.t_cljs$core$async45275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45277){
var self__ = this;
var _45277__$1 = this;
return self__.meta45276;
}));

(cljs.core.async.t_cljs$core$async45275.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45275.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45275.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45275.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45275.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45275.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async45275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45276","meta45276",-1518341381,null)], null);
}));

(cljs.core.async.t_cljs$core$async45275.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45275");

(cljs.core.async.t_cljs$core$async45275.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45275");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45275.
 */
cljs.core.async.__GT_t_cljs$core$async45275 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45275(f__$1,ch__$1,meta45276){
return (new cljs.core.async.t_cljs$core$async45275(f__$1,ch__$1,meta45276));
});

}

return (new cljs.core.async.t_cljs$core$async45275(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45302 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45302 = (function (p,ch,meta45303){
this.p = p;
this.ch = ch;
this.meta45303 = meta45303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45304,meta45303__$1){
var self__ = this;
var _45304__$1 = this;
return (new cljs.core.async.t_cljs$core$async45302(self__.p,self__.ch,meta45303__$1));
}));

(cljs.core.async.t_cljs$core$async45302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45304){
var self__ = this;
var _45304__$1 = this;
return self__.meta45303;
}));

(cljs.core.async.t_cljs$core$async45302.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45302.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45302.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45302.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45302.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45302.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45302.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async45302.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45303","meta45303",-1000415673,null)], null);
}));

(cljs.core.async.t_cljs$core$async45302.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45302.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45302");

(cljs.core.async.t_cljs$core$async45302.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45302");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45302.
 */
cljs.core.async.__GT_t_cljs$core$async45302 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45302(p__$1,ch__$1,meta45303){
return (new cljs.core.async.t_cljs$core$async45302(p__$1,ch__$1,meta45303));
});

}

return (new cljs.core.async.t_cljs$core$async45302(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__45355 = arguments.length;
switch (G__45355) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43292__auto___46723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43144__auto__ = (function (state_45376){
var state_val_45378 = (state_45376[(1)]);
if((state_val_45378 === (7))){
var inst_45372 = (state_45376[(2)]);
var state_45376__$1 = state_45376;
var statearr_45379_46725 = state_45376__$1;
(statearr_45379_46725[(2)] = inst_45372);

(statearr_45379_46725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45378 === (1))){
var state_45376__$1 = state_45376;
var statearr_45380_46726 = state_45376__$1;
(statearr_45380_46726[(2)] = null);

(statearr_45380_46726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45378 === (4))){
var inst_45358 = (state_45376[(7)]);
var inst_45358__$1 = (state_45376[(2)]);
var inst_45359 = (inst_45358__$1 == null);
var state_45376__$1 = (function (){var statearr_45381 = state_45376;
(statearr_45381[(7)] = inst_45358__$1);

return statearr_45381;
})();
if(cljs.core.truth_(inst_45359)){
var statearr_45382_46728 = state_45376__$1;
(statearr_45382_46728[(1)] = (5));

} else {
var statearr_45383_46730 = state_45376__$1;
(statearr_45383_46730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45378 === (6))){
var inst_45358 = (state_45376[(7)]);
var inst_45363 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45358) : p.call(null,inst_45358));
var state_45376__$1 = state_45376;
if(cljs.core.truth_(inst_45363)){
var statearr_45384_46731 = state_45376__$1;
(statearr_45384_46731[(1)] = (8));

} else {
var statearr_45385_46732 = state_45376__$1;
(statearr_45385_46732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45378 === (3))){
var inst_45374 = (state_45376[(2)]);
var state_45376__$1 = state_45376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45376__$1,inst_45374);
} else {
if((state_val_45378 === (2))){
var state_45376__$1 = state_45376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45376__$1,(4),ch);
} else {
if((state_val_45378 === (11))){
var inst_45366 = (state_45376[(2)]);
var state_45376__$1 = state_45376;
var statearr_45386_46738 = state_45376__$1;
(statearr_45386_46738[(2)] = inst_45366);

(statearr_45386_46738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45378 === (9))){
var state_45376__$1 = state_45376;
var statearr_45387_46739 = state_45376__$1;
(statearr_45387_46739[(2)] = null);

(statearr_45387_46739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45378 === (5))){
var inst_45361 = cljs.core.async.close_BANG_(out);
var state_45376__$1 = state_45376;
var statearr_45392_46741 = state_45376__$1;
(statearr_45392_46741[(2)] = inst_45361);

(statearr_45392_46741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45378 === (10))){
var inst_45369 = (state_45376[(2)]);
var state_45376__$1 = (function (){var statearr_45398 = state_45376;
(statearr_45398[(8)] = inst_45369);

return statearr_45398;
})();
var statearr_45399_46742 = state_45376__$1;
(statearr_45399_46742[(2)] = null);

(statearr_45399_46742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45378 === (8))){
var inst_45358 = (state_45376[(7)]);
var state_45376__$1 = state_45376;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45376__$1,(11),out,inst_45358);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43145__auto__ = null;
var cljs$core$async$state_machine__43145__auto____0 = (function (){
var statearr_45404 = [null,null,null,null,null,null,null,null,null];
(statearr_45404[(0)] = cljs$core$async$state_machine__43145__auto__);

(statearr_45404[(1)] = (1));

return statearr_45404;
});
var cljs$core$async$state_machine__43145__auto____1 = (function (state_45376){
while(true){
var ret_value__43146__auto__ = (function (){try{while(true){
var result__43147__auto__ = switch__43144__auto__(state_45376);
if(cljs.core.keyword_identical_QMARK_(result__43147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43147__auto__;
}
break;
}
}catch (e45405){var ex__43148__auto__ = e45405;
var statearr_45407_46743 = state_45376;
(statearr_45407_46743[(2)] = ex__43148__auto__);


if(cljs.core.seq((state_45376[(4)]))){
var statearr_45409_46744 = state_45376;
(statearr_45409_46744[(1)] = cljs.core.first((state_45376[(4)])));

} else {
throw ex__43148__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46745 = state_45376;
state_45376 = G__46745;
continue;
} else {
return ret_value__43146__auto__;
}
break;
}
});
cljs$core$async$state_machine__43145__auto__ = function(state_45376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43145__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43145__auto____1.call(this,state_45376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43145__auto____0;
cljs$core$async$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43145__auto____1;
return cljs$core$async$state_machine__43145__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_45411 = f__43293__auto__();
(statearr_45411[(6)] = c__43292__auto___46723);

return statearr_45411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45413 = arguments.length;
switch (G__45413) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__43292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43144__auto__ = (function (state_45480){
var state_val_45481 = (state_45480[(1)]);
if((state_val_45481 === (7))){
var inst_45476 = (state_45480[(2)]);
var state_45480__$1 = state_45480;
var statearr_45482_46747 = state_45480__$1;
(statearr_45482_46747[(2)] = inst_45476);

(statearr_45482_46747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45481 === (20))){
var inst_45446 = (state_45480[(7)]);
var inst_45457 = (state_45480[(2)]);
var inst_45458 = cljs.core.next(inst_45446);
var inst_45431 = inst_45458;
var inst_45432 = null;
var inst_45433 = (0);
var inst_45434 = (0);
var state_45480__$1 = (function (){var statearr_45484 = state_45480;
(statearr_45484[(8)] = inst_45432);

(statearr_45484[(9)] = inst_45433);

(statearr_45484[(10)] = inst_45457);

(statearr_45484[(11)] = inst_45434);

(statearr_45484[(12)] = inst_45431);

return statearr_45484;
})();
var statearr_45485_46750 = state_45480__$1;
(statearr_45485_46750[(2)] = null);

(statearr_45485_46750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45481 === (1))){
var state_45480__$1 = state_45480;
var statearr_45486_46751 = state_45480__$1;
(statearr_45486_46751[(2)] = null);

(statearr_45486_46751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45481 === (4))){
var inst_45420 = (state_45480[(13)]);
var inst_45420__$1 = (state_45480[(2)]);
var inst_45421 = (inst_45420__$1 == null);
var state_45480__$1 = (function (){var statearr_45488 = state_45480;
(statearr_45488[(13)] = inst_45420__$1);

return statearr_45488;
})();
if(cljs.core.truth_(inst_45421)){
var statearr_45489_46752 = state_45480__$1;
(statearr_45489_46752[(1)] = (5));

} else {
var statearr_45490_46753 = state_45480__$1;
(statearr_45490_46753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45481 === (15))){
var state_45480__$1 = state_45480;
var statearr_45494_46754 = state_45480__$1;
(statearr_45494_46754[(2)] = null);

(statearr_45494_46754[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45481 === (21))){
var state_45480__$1 = state_45480;
var statearr_45495_46755 = state_45480__$1;
(statearr_45495_46755[(2)] = null);

(statearr_45495_46755[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45481 === (13))){
var inst_45432 = (state_45480[(8)]);
var inst_45433 = (state_45480[(9)]);
var inst_45434 = (state_45480[(11)]);
var inst_45431 = (state_45480[(12)]);
var inst_45442 = (state_45480[(2)]);
var inst_45443 = (inst_45434 + (1));
var tmp45491 = inst_45432;
var tmp45492 = inst_45433;
var tmp45493 = inst_45431;
var inst_45431__$1 = tmp45493;
var inst_45432__$1 = tmp45491;
var inst_45433__$1 = tmp45492;
var inst_45434__$1 = inst_45443;
var state_45480__$1 = (function (){var statearr_45496 = state_45480;
(statearr_45496[(8)] = inst_45432__$1);

(statearr_45496[(9)] = inst_45433__$1);

(statearr_45496[(11)] = inst_45434__$1);

(statearr_45496[(14)] = inst_45442);

(statearr_45496[(12)] = inst_45431__$1);

return statearr_45496;
})();
var statearr_45497_46756 = state_45480__$1;
(statearr_45497_46756[(2)] = null);

(statearr_45497_46756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45481 === (22))){
var state_45480__$1 = state_45480;
var statearr_45498_46757 = state_45480__$1;
(statearr_45498_46757[(2)] = null);

(statearr_45498_46757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45481 === (6))){
var inst_45420 = (state_45480[(13)]);
var inst_45429 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45420) : f.call(null,inst_45420));
var inst_45430 = cljs.core.seq(inst_45429);
var inst_45431 = inst_45430;
var inst_45432 = null;
var inst_45433 = (0);
var inst_45434 = (0);
var state_45480__$1 = (function (){var statearr_45499 = state_45480;
(statearr_45499[(8)] = inst_45432);

(statearr_45499[(9)] = inst_45433);

(statearr_45499[(11)] = inst_45434);

(statearr_45499[(12)] = inst_45431);

return statearr_45499;
})();
var statearr_45500_46758 = state_45480__$1;
(statearr_45500_46758[(2)] = null);

(statearr_45500_46758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45481 === (17))){
var inst_45446 = (state_45480[(7)]);
var inst_45450 = cljs.core.chunk_first(inst_45446);
var inst_45451 = cljs.core.chunk_rest(inst_45446);
var inst_45452 = cljs.core.count(inst_45450);
var inst_45431 = inst_45451;
var inst_45432 = inst_45450;
var inst_45433 = inst_45452;
var inst_45434 = (0);
var state_45480__$1 = (function (){var statearr_45501 = state_45480;
(statearr_45501[(8)] = inst_45432);

(statearr_45501[(9)] = inst_45433);

(statearr_45501[(11)] = inst_45434);

(statearr_45501[(12)] = inst_45431);

return statearr_45501;
})();
var statearr_45502_46760 = state_45480__$1;
(statearr_45502_46760[(2)] = null);

(statearr_45502_46760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45481 === (3))){
var inst_45478 = (state_45480[(2)]);
var state_45480__$1 = state_45480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45480__$1,inst_45478);
} else {
if((state_val_45481 === (12))){
var inst_45466 = (state_45480[(2)]);
var state_45480__$1 = state_45480;
var statearr_45503_46761 = state_45480__$1;
(statearr_45503_46761[(2)] = inst_45466);

(statearr_45503_46761[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45481 === (2))){
var state_45480__$1 = state_45480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45480__$1,(4),in$);
} else {
if((state_val_45481 === (23))){
var inst_45474 = (state_45480[(2)]);
var state_45480__$1 = state_45480;
var statearr_45504_46765 = state_45480__$1;
(statearr_45504_46765[(2)] = inst_45474);

(statearr_45504_46765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45481 === (19))){
var inst_45461 = (state_45480[(2)]);
var state_45480__$1 = state_45480;
var statearr_45505_46766 = state_45480__$1;
(statearr_45505_46766[(2)] = inst_45461);

(statearr_45505_46766[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45481 === (11))){
var inst_45431 = (state_45480[(12)]);
var inst_45446 = (state_45480[(7)]);
var inst_45446__$1 = cljs.core.seq(inst_45431);
var state_45480__$1 = (function (){var statearr_45506 = state_45480;
(statearr_45506[(7)] = inst_45446__$1);

return statearr_45506;
})();
if(inst_45446__$1){
var statearr_45507_46768 = state_45480__$1;
(statearr_45507_46768[(1)] = (14));

} else {
var statearr_45508_46769 = state_45480__$1;
(statearr_45508_46769[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45481 === (9))){
var inst_45468 = (state_45480[(2)]);
var inst_45469 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45480__$1 = (function (){var statearr_45509 = state_45480;
(statearr_45509[(15)] = inst_45468);

return statearr_45509;
})();
if(cljs.core.truth_(inst_45469)){
var statearr_45510_46770 = state_45480__$1;
(statearr_45510_46770[(1)] = (21));

} else {
var statearr_45511_46771 = state_45480__$1;
(statearr_45511_46771[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45481 === (5))){
var inst_45423 = cljs.core.async.close_BANG_(out);
var state_45480__$1 = state_45480;
var statearr_45512_46773 = state_45480__$1;
(statearr_45512_46773[(2)] = inst_45423);

(statearr_45512_46773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45481 === (14))){
var inst_45446 = (state_45480[(7)]);
var inst_45448 = cljs.core.chunked_seq_QMARK_(inst_45446);
var state_45480__$1 = state_45480;
if(inst_45448){
var statearr_45513_46778 = state_45480__$1;
(statearr_45513_46778[(1)] = (17));

} else {
var statearr_45514_46779 = state_45480__$1;
(statearr_45514_46779[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45481 === (16))){
var inst_45464 = (state_45480[(2)]);
var state_45480__$1 = state_45480;
var statearr_45515_46780 = state_45480__$1;
(statearr_45515_46780[(2)] = inst_45464);

(statearr_45515_46780[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45481 === (10))){
var inst_45432 = (state_45480[(8)]);
var inst_45434 = (state_45480[(11)]);
var inst_45440 = cljs.core._nth(inst_45432,inst_45434);
var state_45480__$1 = state_45480;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45480__$1,(13),out,inst_45440);
} else {
if((state_val_45481 === (18))){
var inst_45446 = (state_45480[(7)]);
var inst_45455 = cljs.core.first(inst_45446);
var state_45480__$1 = state_45480;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45480__$1,(20),out,inst_45455);
} else {
if((state_val_45481 === (8))){
var inst_45433 = (state_45480[(9)]);
var inst_45434 = (state_45480[(11)]);
var inst_45436 = (inst_45434 < inst_45433);
var inst_45437 = inst_45436;
var state_45480__$1 = state_45480;
if(cljs.core.truth_(inst_45437)){
var statearr_45516_46790 = state_45480__$1;
(statearr_45516_46790[(1)] = (10));

} else {
var statearr_45517_46791 = state_45480__$1;
(statearr_45517_46791[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43145__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43145__auto____0 = (function (){
var statearr_45518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45518[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43145__auto__);

(statearr_45518[(1)] = (1));

return statearr_45518;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43145__auto____1 = (function (state_45480){
while(true){
var ret_value__43146__auto__ = (function (){try{while(true){
var result__43147__auto__ = switch__43144__auto__(state_45480);
if(cljs.core.keyword_identical_QMARK_(result__43147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43147__auto__;
}
break;
}
}catch (e45519){var ex__43148__auto__ = e45519;
var statearr_45520_46795 = state_45480;
(statearr_45520_46795[(2)] = ex__43148__auto__);


if(cljs.core.seq((state_45480[(4)]))){
var statearr_45521_46797 = state_45480;
(statearr_45521_46797[(1)] = cljs.core.first((state_45480[(4)])));

} else {
throw ex__43148__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46799 = state_45480;
state_45480 = G__46799;
continue;
} else {
return ret_value__43146__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43145__auto__ = function(state_45480){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43145__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43145__auto____1.call(this,state_45480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43145__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43145__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43145__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_45522 = f__43293__auto__();
(statearr_45522[(6)] = c__43292__auto__);

return statearr_45522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));

return c__43292__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45524 = arguments.length;
switch (G__45524) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__45526 = arguments.length;
switch (G__45526) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__45531 = arguments.length;
switch (G__45531) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43292__auto___46806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43144__auto__ = (function (state_45559){
var state_val_45560 = (state_45559[(1)]);
if((state_val_45560 === (7))){
var inst_45554 = (state_45559[(2)]);
var state_45559__$1 = state_45559;
var statearr_45564_46809 = state_45559__$1;
(statearr_45564_46809[(2)] = inst_45554);

(statearr_45564_46809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (1))){
var inst_45534 = null;
var state_45559__$1 = (function (){var statearr_45565 = state_45559;
(statearr_45565[(7)] = inst_45534);

return statearr_45565;
})();
var statearr_45566_46811 = state_45559__$1;
(statearr_45566_46811[(2)] = null);

(statearr_45566_46811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (4))){
var inst_45537 = (state_45559[(8)]);
var inst_45537__$1 = (state_45559[(2)]);
var inst_45540 = (inst_45537__$1 == null);
var inst_45541 = cljs.core.not(inst_45540);
var state_45559__$1 = (function (){var statearr_45577 = state_45559;
(statearr_45577[(8)] = inst_45537__$1);

return statearr_45577;
})();
if(inst_45541){
var statearr_45578_46813 = state_45559__$1;
(statearr_45578_46813[(1)] = (5));

} else {
var statearr_45579_46814 = state_45559__$1;
(statearr_45579_46814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (6))){
var state_45559__$1 = state_45559;
var statearr_45580_46815 = state_45559__$1;
(statearr_45580_46815[(2)] = null);

(statearr_45580_46815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (3))){
var inst_45556 = (state_45559[(2)]);
var inst_45557 = cljs.core.async.close_BANG_(out);
var state_45559__$1 = (function (){var statearr_45581 = state_45559;
(statearr_45581[(9)] = inst_45556);

return statearr_45581;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45559__$1,inst_45557);
} else {
if((state_val_45560 === (2))){
var state_45559__$1 = state_45559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45559__$1,(4),ch);
} else {
if((state_val_45560 === (11))){
var inst_45537 = (state_45559[(8)]);
var inst_45548 = (state_45559[(2)]);
var inst_45534 = inst_45537;
var state_45559__$1 = (function (){var statearr_45582 = state_45559;
(statearr_45582[(7)] = inst_45534);

(statearr_45582[(10)] = inst_45548);

return statearr_45582;
})();
var statearr_45583_46818 = state_45559__$1;
(statearr_45583_46818[(2)] = null);

(statearr_45583_46818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (9))){
var inst_45537 = (state_45559[(8)]);
var state_45559__$1 = state_45559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45559__$1,(11),out,inst_45537);
} else {
if((state_val_45560 === (5))){
var inst_45534 = (state_45559[(7)]);
var inst_45537 = (state_45559[(8)]);
var inst_45543 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45537,inst_45534);
var state_45559__$1 = state_45559;
if(inst_45543){
var statearr_45585_46819 = state_45559__$1;
(statearr_45585_46819[(1)] = (8));

} else {
var statearr_45586_46820 = state_45559__$1;
(statearr_45586_46820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (10))){
var inst_45551 = (state_45559[(2)]);
var state_45559__$1 = state_45559;
var statearr_45587_46823 = state_45559__$1;
(statearr_45587_46823[(2)] = inst_45551);

(statearr_45587_46823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (8))){
var inst_45534 = (state_45559[(7)]);
var tmp45584 = inst_45534;
var inst_45534__$1 = tmp45584;
var state_45559__$1 = (function (){var statearr_45588 = state_45559;
(statearr_45588[(7)] = inst_45534__$1);

return statearr_45588;
})();
var statearr_45589_46824 = state_45559__$1;
(statearr_45589_46824[(2)] = null);

(statearr_45589_46824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43145__auto__ = null;
var cljs$core$async$state_machine__43145__auto____0 = (function (){
var statearr_45590 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45590[(0)] = cljs$core$async$state_machine__43145__auto__);

(statearr_45590[(1)] = (1));

return statearr_45590;
});
var cljs$core$async$state_machine__43145__auto____1 = (function (state_45559){
while(true){
var ret_value__43146__auto__ = (function (){try{while(true){
var result__43147__auto__ = switch__43144__auto__(state_45559);
if(cljs.core.keyword_identical_QMARK_(result__43147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43147__auto__;
}
break;
}
}catch (e45591){var ex__43148__auto__ = e45591;
var statearr_45593_46829 = state_45559;
(statearr_45593_46829[(2)] = ex__43148__auto__);


if(cljs.core.seq((state_45559[(4)]))){
var statearr_45594_46830 = state_45559;
(statearr_45594_46830[(1)] = cljs.core.first((state_45559[(4)])));

} else {
throw ex__43148__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46831 = state_45559;
state_45559 = G__46831;
continue;
} else {
return ret_value__43146__auto__;
}
break;
}
});
cljs$core$async$state_machine__43145__auto__ = function(state_45559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43145__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43145__auto____1.call(this,state_45559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43145__auto____0;
cljs$core$async$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43145__auto____1;
return cljs$core$async$state_machine__43145__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_45600 = f__43293__auto__();
(statearr_45600[(6)] = c__43292__auto___46806);

return statearr_45600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45602 = arguments.length;
switch (G__45602) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43292__auto___46834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43144__auto__ = (function (state_45648){
var state_val_45649 = (state_45648[(1)]);
if((state_val_45649 === (7))){
var inst_45644 = (state_45648[(2)]);
var state_45648__$1 = state_45648;
var statearr_45651_46835 = state_45648__$1;
(statearr_45651_46835[(2)] = inst_45644);

(statearr_45651_46835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45649 === (1))){
var inst_45607 = (new Array(n));
var inst_45608 = inst_45607;
var inst_45609 = (0);
var state_45648__$1 = (function (){var statearr_45653 = state_45648;
(statearr_45653[(7)] = inst_45608);

(statearr_45653[(8)] = inst_45609);

return statearr_45653;
})();
var statearr_45659_46839 = state_45648__$1;
(statearr_45659_46839[(2)] = null);

(statearr_45659_46839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45649 === (4))){
var inst_45612 = (state_45648[(9)]);
var inst_45612__$1 = (state_45648[(2)]);
var inst_45613 = (inst_45612__$1 == null);
var inst_45614 = cljs.core.not(inst_45613);
var state_45648__$1 = (function (){var statearr_45660 = state_45648;
(statearr_45660[(9)] = inst_45612__$1);

return statearr_45660;
})();
if(inst_45614){
var statearr_45661_46846 = state_45648__$1;
(statearr_45661_46846[(1)] = (5));

} else {
var statearr_45662_46847 = state_45648__$1;
(statearr_45662_46847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45649 === (15))){
var inst_45636 = (state_45648[(2)]);
var state_45648__$1 = state_45648;
var statearr_45665_46848 = state_45648__$1;
(statearr_45665_46848[(2)] = inst_45636);

(statearr_45665_46848[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45649 === (13))){
var state_45648__$1 = state_45648;
var statearr_45666_46852 = state_45648__$1;
(statearr_45666_46852[(2)] = null);

(statearr_45666_46852[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45649 === (6))){
var inst_45609 = (state_45648[(8)]);
var inst_45630 = (inst_45609 > (0));
var state_45648__$1 = state_45648;
if(cljs.core.truth_(inst_45630)){
var statearr_45667_46853 = state_45648__$1;
(statearr_45667_46853[(1)] = (12));

} else {
var statearr_45668_46854 = state_45648__$1;
(statearr_45668_46854[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45649 === (3))){
var inst_45646 = (state_45648[(2)]);
var state_45648__$1 = state_45648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45648__$1,inst_45646);
} else {
if((state_val_45649 === (12))){
var inst_45608 = (state_45648[(7)]);
var inst_45634 = cljs.core.vec(inst_45608);
var state_45648__$1 = state_45648;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45648__$1,(15),out,inst_45634);
} else {
if((state_val_45649 === (2))){
var state_45648__$1 = state_45648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45648__$1,(4),ch);
} else {
if((state_val_45649 === (11))){
var inst_45624 = (state_45648[(2)]);
var inst_45625 = (new Array(n));
var inst_45608 = inst_45625;
var inst_45609 = (0);
var state_45648__$1 = (function (){var statearr_45671 = state_45648;
(statearr_45671[(7)] = inst_45608);

(statearr_45671[(10)] = inst_45624);

(statearr_45671[(8)] = inst_45609);

return statearr_45671;
})();
var statearr_45672_46857 = state_45648__$1;
(statearr_45672_46857[(2)] = null);

(statearr_45672_46857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45649 === (9))){
var inst_45608 = (state_45648[(7)]);
var inst_45622 = cljs.core.vec(inst_45608);
var state_45648__$1 = state_45648;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45648__$1,(11),out,inst_45622);
} else {
if((state_val_45649 === (5))){
var inst_45608 = (state_45648[(7)]);
var inst_45612 = (state_45648[(9)]);
var inst_45617 = (state_45648[(11)]);
var inst_45609 = (state_45648[(8)]);
var inst_45616 = (inst_45608[inst_45609] = inst_45612);
var inst_45617__$1 = (inst_45609 + (1));
var inst_45618 = (inst_45617__$1 < n);
var state_45648__$1 = (function (){var statearr_45677 = state_45648;
(statearr_45677[(11)] = inst_45617__$1);

(statearr_45677[(12)] = inst_45616);

return statearr_45677;
})();
if(cljs.core.truth_(inst_45618)){
var statearr_45678_46861 = state_45648__$1;
(statearr_45678_46861[(1)] = (8));

} else {
var statearr_45679_46863 = state_45648__$1;
(statearr_45679_46863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45649 === (14))){
var inst_45640 = (state_45648[(2)]);
var inst_45642 = cljs.core.async.close_BANG_(out);
var state_45648__$1 = (function (){var statearr_45683 = state_45648;
(statearr_45683[(13)] = inst_45640);

return statearr_45683;
})();
var statearr_45684_46867 = state_45648__$1;
(statearr_45684_46867[(2)] = inst_45642);

(statearr_45684_46867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45649 === (10))){
var inst_45628 = (state_45648[(2)]);
var state_45648__$1 = state_45648;
var statearr_45685_46868 = state_45648__$1;
(statearr_45685_46868[(2)] = inst_45628);

(statearr_45685_46868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45649 === (8))){
var inst_45608 = (state_45648[(7)]);
var inst_45617 = (state_45648[(11)]);
var tmp45682 = inst_45608;
var inst_45608__$1 = tmp45682;
var inst_45609 = inst_45617;
var state_45648__$1 = (function (){var statearr_45692 = state_45648;
(statearr_45692[(7)] = inst_45608__$1);

(statearr_45692[(8)] = inst_45609);

return statearr_45692;
})();
var statearr_45697_46873 = state_45648__$1;
(statearr_45697_46873[(2)] = null);

(statearr_45697_46873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43145__auto__ = null;
var cljs$core$async$state_machine__43145__auto____0 = (function (){
var statearr_45699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45699[(0)] = cljs$core$async$state_machine__43145__auto__);

(statearr_45699[(1)] = (1));

return statearr_45699;
});
var cljs$core$async$state_machine__43145__auto____1 = (function (state_45648){
while(true){
var ret_value__43146__auto__ = (function (){try{while(true){
var result__43147__auto__ = switch__43144__auto__(state_45648);
if(cljs.core.keyword_identical_QMARK_(result__43147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43147__auto__;
}
break;
}
}catch (e45703){var ex__43148__auto__ = e45703;
var statearr_45704_46874 = state_45648;
(statearr_45704_46874[(2)] = ex__43148__auto__);


if(cljs.core.seq((state_45648[(4)]))){
var statearr_45705_46875 = state_45648;
(statearr_45705_46875[(1)] = cljs.core.first((state_45648[(4)])));

} else {
throw ex__43148__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46879 = state_45648;
state_45648 = G__46879;
continue;
} else {
return ret_value__43146__auto__;
}
break;
}
});
cljs$core$async$state_machine__43145__auto__ = function(state_45648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43145__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43145__auto____1.call(this,state_45648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43145__auto____0;
cljs$core$async$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43145__auto____1;
return cljs$core$async$state_machine__43145__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_45706 = f__43293__auto__();
(statearr_45706[(6)] = c__43292__auto___46834);

return statearr_45706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45716 = arguments.length;
switch (G__45716) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43292__auto___46881 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43144__auto__ = (function (state_45801){
var state_val_45802 = (state_45801[(1)]);
if((state_val_45802 === (7))){
var inst_45797 = (state_45801[(2)]);
var state_45801__$1 = state_45801;
var statearr_45803_46883 = state_45801__$1;
(statearr_45803_46883[(2)] = inst_45797);

(statearr_45803_46883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45802 === (1))){
var inst_45757 = [];
var inst_45758 = inst_45757;
var inst_45759 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45801__$1 = (function (){var statearr_45804 = state_45801;
(statearr_45804[(7)] = inst_45758);

(statearr_45804[(8)] = inst_45759);

return statearr_45804;
})();
var statearr_45805_46884 = state_45801__$1;
(statearr_45805_46884[(2)] = null);

(statearr_45805_46884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45802 === (4))){
var inst_45762 = (state_45801[(9)]);
var inst_45762__$1 = (state_45801[(2)]);
var inst_45763 = (inst_45762__$1 == null);
var inst_45764 = cljs.core.not(inst_45763);
var state_45801__$1 = (function (){var statearr_45806 = state_45801;
(statearr_45806[(9)] = inst_45762__$1);

return statearr_45806;
})();
if(inst_45764){
var statearr_45807_46885 = state_45801__$1;
(statearr_45807_46885[(1)] = (5));

} else {
var statearr_45812_46886 = state_45801__$1;
(statearr_45812_46886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45802 === (15))){
var inst_45758 = (state_45801[(7)]);
var inst_45789 = cljs.core.vec(inst_45758);
var state_45801__$1 = state_45801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45801__$1,(18),out,inst_45789);
} else {
if((state_val_45802 === (13))){
var inst_45784 = (state_45801[(2)]);
var state_45801__$1 = state_45801;
var statearr_45829_46887 = state_45801__$1;
(statearr_45829_46887[(2)] = inst_45784);

(statearr_45829_46887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45802 === (6))){
var inst_45758 = (state_45801[(7)]);
var inst_45786 = inst_45758.length;
var inst_45787 = (inst_45786 > (0));
var state_45801__$1 = state_45801;
if(cljs.core.truth_(inst_45787)){
var statearr_45830_46893 = state_45801__$1;
(statearr_45830_46893[(1)] = (15));

} else {
var statearr_45831_46895 = state_45801__$1;
(statearr_45831_46895[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45802 === (17))){
var inst_45794 = (state_45801[(2)]);
var inst_45795 = cljs.core.async.close_BANG_(out);
var state_45801__$1 = (function (){var statearr_45832 = state_45801;
(statearr_45832[(10)] = inst_45794);

return statearr_45832;
})();
var statearr_45833_46902 = state_45801__$1;
(statearr_45833_46902[(2)] = inst_45795);

(statearr_45833_46902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45802 === (3))){
var inst_45799 = (state_45801[(2)]);
var state_45801__$1 = state_45801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45801__$1,inst_45799);
} else {
if((state_val_45802 === (12))){
var inst_45758 = (state_45801[(7)]);
var inst_45777 = cljs.core.vec(inst_45758);
var state_45801__$1 = state_45801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45801__$1,(14),out,inst_45777);
} else {
if((state_val_45802 === (2))){
var state_45801__$1 = state_45801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45801__$1,(4),ch);
} else {
if((state_val_45802 === (11))){
var inst_45762 = (state_45801[(9)]);
var inst_45766 = (state_45801[(11)]);
var inst_45758 = (state_45801[(7)]);
var inst_45774 = inst_45758.push(inst_45762);
var tmp45834 = inst_45758;
var inst_45758__$1 = tmp45834;
var inst_45759 = inst_45766;
var state_45801__$1 = (function (){var statearr_45835 = state_45801;
(statearr_45835[(7)] = inst_45758__$1);

(statearr_45835[(12)] = inst_45774);

(statearr_45835[(8)] = inst_45759);

return statearr_45835;
})();
var statearr_45836_46910 = state_45801__$1;
(statearr_45836_46910[(2)] = null);

(statearr_45836_46910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45802 === (9))){
var inst_45759 = (state_45801[(8)]);
var inst_45770 = cljs.core.keyword_identical_QMARK_(inst_45759,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_45801__$1 = state_45801;
var statearr_45837_46911 = state_45801__$1;
(statearr_45837_46911[(2)] = inst_45770);

(statearr_45837_46911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45802 === (5))){
var inst_45762 = (state_45801[(9)]);
var inst_45766 = (state_45801[(11)]);
var inst_45759 = (state_45801[(8)]);
var inst_45767 = (state_45801[(13)]);
var inst_45766__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45762) : f.call(null,inst_45762));
var inst_45767__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45766__$1,inst_45759);
var state_45801__$1 = (function (){var statearr_45838 = state_45801;
(statearr_45838[(11)] = inst_45766__$1);

(statearr_45838[(13)] = inst_45767__$1);

return statearr_45838;
})();
if(inst_45767__$1){
var statearr_45839_46913 = state_45801__$1;
(statearr_45839_46913[(1)] = (8));

} else {
var statearr_45840_46914 = state_45801__$1;
(statearr_45840_46914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45802 === (14))){
var inst_45762 = (state_45801[(9)]);
var inst_45766 = (state_45801[(11)]);
var inst_45779 = (state_45801[(2)]);
var inst_45780 = [];
var inst_45781 = inst_45780.push(inst_45762);
var inst_45758 = inst_45780;
var inst_45759 = inst_45766;
var state_45801__$1 = (function (){var statearr_45841 = state_45801;
(statearr_45841[(14)] = inst_45779);

(statearr_45841[(7)] = inst_45758);

(statearr_45841[(8)] = inst_45759);

(statearr_45841[(15)] = inst_45781);

return statearr_45841;
})();
var statearr_45842_46915 = state_45801__$1;
(statearr_45842_46915[(2)] = null);

(statearr_45842_46915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45802 === (16))){
var state_45801__$1 = state_45801;
var statearr_45843_46916 = state_45801__$1;
(statearr_45843_46916[(2)] = null);

(statearr_45843_46916[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45802 === (10))){
var inst_45772 = (state_45801[(2)]);
var state_45801__$1 = state_45801;
if(cljs.core.truth_(inst_45772)){
var statearr_45844_46917 = state_45801__$1;
(statearr_45844_46917[(1)] = (11));

} else {
var statearr_45845_46918 = state_45801__$1;
(statearr_45845_46918[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45802 === (18))){
var inst_45791 = (state_45801[(2)]);
var state_45801__$1 = state_45801;
var statearr_45846_46919 = state_45801__$1;
(statearr_45846_46919[(2)] = inst_45791);

(statearr_45846_46919[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45802 === (8))){
var inst_45767 = (state_45801[(13)]);
var state_45801__$1 = state_45801;
var statearr_45847_46920 = state_45801__$1;
(statearr_45847_46920[(2)] = inst_45767);

(statearr_45847_46920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43145__auto__ = null;
var cljs$core$async$state_machine__43145__auto____0 = (function (){
var statearr_45848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45848[(0)] = cljs$core$async$state_machine__43145__auto__);

(statearr_45848[(1)] = (1));

return statearr_45848;
});
var cljs$core$async$state_machine__43145__auto____1 = (function (state_45801){
while(true){
var ret_value__43146__auto__ = (function (){try{while(true){
var result__43147__auto__ = switch__43144__auto__(state_45801);
if(cljs.core.keyword_identical_QMARK_(result__43147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43147__auto__;
}
break;
}
}catch (e45849){var ex__43148__auto__ = e45849;
var statearr_45850_46927 = state_45801;
(statearr_45850_46927[(2)] = ex__43148__auto__);


if(cljs.core.seq((state_45801[(4)]))){
var statearr_45851_46928 = state_45801;
(statearr_45851_46928[(1)] = cljs.core.first((state_45801[(4)])));

} else {
throw ex__43148__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46929 = state_45801;
state_45801 = G__46929;
continue;
} else {
return ret_value__43146__auto__;
}
break;
}
});
cljs$core$async$state_machine__43145__auto__ = function(state_45801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43145__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43145__auto____1.call(this,state_45801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43145__auto____0;
cljs$core$async$state_machine__43145__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43145__auto____1;
return cljs$core$async$state_machine__43145__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_45852 = f__43293__auto__();
(statearr_45852[(6)] = c__43292__auto___46881);

return statearr_45852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
