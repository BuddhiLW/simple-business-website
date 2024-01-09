goog.provide('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component');
goog.scope(function(){
  day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.extract_props = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$extract_props(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core.map_QMARK_(p)){
return p;
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.extract_children = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$extract_children(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
var first_child = (((((p == null)) || (cljs.core.map_QMARK_(p))))?(2):(1));
if((cljs.core.count(v) > first_child)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.props_argv = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$props_argv(c,p){
var temp__5806__auto__ = p.argv;
if((temp__5806__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.constructor,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.shallow_obj_to_map(p)], null);
} else {
var a = temp__5806__auto__;
return a;
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.get_argv = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$get_argv(c){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.props_argv(c,c.props);
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.get_props = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$get_props(c){
var p = c.props;
var temp__5806__auto__ = p.argv;
if((temp__5806__auto__ == null)){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.shallow_obj_to_map(p);
} else {
var v = temp__5806__auto__;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.extract_props(v);
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.get_children = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$get_children(c){
var p = c.props;
var temp__5806__auto__ = p.argv;
if((temp__5806__auto__ == null)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,module$node_modules$react$index.Children.toArray(p.children));
} else {
var v = temp__5806__auto__;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.extract_children(v);
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_class_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$reagent_class_QMARK_(c){
return ((cljs.core.fn_QMARK_(c)) && ((!(((function (){var G__31775 = c;
var G__31775__$1 = (((G__31775 == null))?null:G__31775.prototype);
if((G__31775__$1 == null)){
return null;
} else {
return G__31775__$1.reagentRender;
}
})() == null)))));
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.react_class_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$react_class_QMARK_(c){
return ((cljs.core.fn_QMARK_(c)) && ((!(((function (){var G__31776 = c;
var G__31776__$1 = (((G__31776 == null))?null:G__31776.prototype);
if((G__31776__$1 == null)){
return null;
} else {
return G__31776__$1.render;
}
})() == null)))));
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_component_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$reagent_component_QMARK_(c){
return (!((c.reagentRender == null)));
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.state_atom = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$state_atom(this$){
var sa = this$.cljsState;
if((!((sa == null)))){
return sa;
} else {
return (this$.cljsState = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
/**
 * Calls the render function of the component `c`.  If result `res` evaluates to a:
 *   1) Vector (form-1 component) - Treats the vector as hiccup and returns
 *      a react element with a render function based on that hiccup
 *   2) Function (form-2 component) - updates the render function to `res` i.e. the internal function
 *      and calls wrap-render again (`recur`), until the render result doesn't evaluate to a function.
 *   3) Anything else - Returns the result of evaluating `c`
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.wrap_render = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$wrap_render(c,compiler){
while(true){
var f = c.reagentRender;
var _ = ((cljs.core.ifn_QMARK_(f))?null:(function(){throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')))})());
var res = ((c.cljsLegacyRender === true)?f.call(c,c):(function (){var v = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.get_argv(c);
var n = cljs.core.count(v);
var G__31783 = n;
switch (G__31783) {
case (1):
return f.call(c);

break;
case (2):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)));

break;
case (3):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)));

break;
case (4):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(3)));

break;
case (5):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(4)));

break;
default:
return f.apply(c,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(v).slice((1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element(compiler,res);
} else {
if(cljs.core.ifn_QMARK_(res)){
var f__$1 = ((day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_class_QMARK_(res))?((function (c,compiler,f,_,res){
return (function() { 
var G__31876__delegate = function (args){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element(compiler,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args));
};
var G__31876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31877__i = 0, G__31877__a = new Array(arguments.length -  0);
while (G__31877__i < G__31877__a.length) {G__31877__a[G__31877__i] = arguments[G__31877__i + 0]; ++G__31877__i;}
  args = new cljs.core.IndexedSeq(G__31877__a,0,null);
} 
return G__31876__delegate.call(this,args);};
G__31876.cljs$lang$maxFixedArity = 0;
G__31876.cljs$lang$applyTo = (function (arglist__31878){
var args = cljs.core.seq(arglist__31878);
return G__31876__delegate(args);
});
G__31876.cljs$core$IFn$_invoke$arity$variadic = G__31876__delegate;
return G__31876;
})()
;})(c,compiler,f,_,res))
:res);
(c.reagentRender = f__$1);

var G__31879 = c;
var G__31880 = compiler;
c = G__31879;
compiler = G__31880;
continue;
} else {
return res;

}
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.component_name = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$component_name(c){
var or__5045__auto__ = (function (){var G__31784 = c;
var G__31784__$1 = (((G__31784 == null))?null:G__31784.constructor);
if((G__31784__$1 == null)){
return null;
} else {
return G__31784__$1.displayName;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__31785 = c;
var G__31785__$1 = (((G__31785 == null))?null:G__31785.constructor);
if((G__31785__$1 == null)){
return null;
} else {
return G__31785__$1.name;
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.comp_name = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$comp_name(){
var c = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component._STAR_current_component_STAR_;
var n = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.component_name(c);
if((!(cljs.core.empty_QMARK_(n)))){
return [" (in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),")"].join('');
} else {
return "";
}

});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.do_render = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$do_render(c,compiler){
var _STAR_current_component_STAR__orig_val__31786 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__31787 = c;
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__31787);

try{var ok = [false];
try{var res = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.wrap_render(c,compiler);
(ok[(0)] = true);

return res;
}finally {if(cljs.core.truth_((ok[(0)]))){
} else {
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.has_console){
((day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.track_console:console).error(["Error rendering component",day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.comp_name()].join(''));
} else {
}
}
}
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__31786);
}});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.rat_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null);
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.custom_wrapper = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper(key,f){
var G__31795 = key;
var G__31795__$1 = (((G__31795 instanceof cljs.core.Keyword))?G__31795.fqn:null);
switch (G__31795__$1) {
case "getDefaultProps":
throw (new Error("getDefaultProps not supported"));

break;
case "getDerivedStateFromProps":
return (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_getDerivedStateFromProps(props,state){
return f.call(null,(function (){var temp__5806__auto__ = props.argv;
if((temp__5806__auto__ == null)){
return props;
} else {
var a = temp__5806__auto__;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.extract_props(a);
}
})(),state);
});

break;
case "getInitialState":
return (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_getInitialState(c){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.state_atom(c),f.call(c,c));
});

break;
case "getSnapshotBeforeUpdate":
return (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_getSnapshotBeforeUpdate(oldprops,oldstate){
var c = this;
return f.call(c,c,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.props_argv(c,oldprops),oldstate);
});

break;
case "componentWillReceiveProps":
return (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.props_argv(c,nextprops));
});

break;
case "UNSAFE_componentWillReceiveProps":
return (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.props_argv(c,nextprops));
});

break;
case "shouldComponentUpdate":
return (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_shouldComponentUpdate(nextprops,nextstate){
var or__5045__auto__ = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var c = this;
var old_argv = c.props.argv;
var new_argv = nextprops.argv;
var noargv = (((old_argv == null)) || ((new_argv == null)));
if((f == null)){
var or__5045__auto____$1 = noargv;
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
try{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv);
}catch (e31831){var e = e31831;
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.has_console){
((day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.track_console:console).warn(["Warning: ","Exception thrown while comparing argv's in shouldComponentUpdate: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
} else {
}

return false;
}}
} else {
if(noargv){
return f.call(c,c,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.get_argv(c),day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.props_argv(c,nextprops));
} else {
return f.call(c,c,old_argv,new_argv);

}
}
}
});

break;
case "componentWillUpdate":
return (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops,nextstate){
var c = this;
return f.call(c,c,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.props_argv(c,nextprops),nextstate);
});

break;
case "UNSAFE_componentWillUpdate":
return (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops,nextstate){
var c = this;
return f.call(c,c,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.props_argv(c,nextprops),nextstate);
});

break;
case "componentDidUpdate":
return (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_componentDidUpdate(oldprops,oldstate,snapshot){
var c = this;
return f.call(c,c,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.props_argv(c,oldprops),oldstate,snapshot);
});

break;
case "componentWillMount":
return (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
return f.call(c,c);
});

break;
case "UNSAFE_componentWillMount":
return (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
return f.call(c,c);
});

break;
case "componentDidMount":
return (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_componentDidMount(){
var c = this;
return f.call(c,c);
});

break;
case "componentWillUnmount":
return (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_componentWillUnmount(){
var c = this;
var G__31855_31884 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.goog$module$goog$object.get(c,"cljsRatom");
if((G__31855_31884 == null)){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.dispose_BANG_(G__31855_31884);
}

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.mark_rendered(c);

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});

break;
case "componentDidCatch":
return (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_componentDidCatch(error,info){
var c = this;
return f.call(c,c,error,info);
});

break;
default:
return null;

}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.get_wrapper = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$get_wrapper(key,f){
var wrap = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__5043__auto__ = wrap;
if(cljs.core.truth_(and__5043__auto__)){
return f;
} else {
return and__5043__auto__;
}
})())){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')));
}
} else {
}

var or__5045__auto__ = wrap;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return f;
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null);
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.dash_to_method_name = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.memoize_1(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.dash_to_method_name);
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.camelify_map_keys = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.dash_to_method_name(k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.add_obligatory = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.obligatory,fun_map], 0));
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.wrap_funs = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$wrap_funs(fmap,compiler){
var renders_31885 = cljs.core.select_keys(fmap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383)], null));
var render_fun_31886 = cljs.core.first(cljs.core.vals(renders_31885));
if(cljs.core.not(new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104).cljs$core$IFn$_invoke$arity$1(fmap))){
} else {
throw (new Error(["Assert failed: ",":component-function is no longer supported, use :reagent-render instead.","\n","(not (:componentFunction fmap))"].join('')));
}

if((cljs.core.count(renders_31885) > (0))){
} else {
throw (new Error(["Assert failed: ","Missing reagent-render","\n","(pos? (count renders))"].join('')));
}

if(((1) === cljs.core.count(renders_31885))){
} else {
throw (new Error(["Assert failed: ","Too many render functions supplied","\n","(== 1 (count renders))"].join('')));
}

if(cljs.core.ifn_QMARK_(render_fun_31886)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([render_fun_31886], 0))].join(''),"\n","(clojure.core/ifn? render-fun)"].join('')));
}


var render_fun = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var legacy_render = (new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fmap) == null);
var name = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.fun_name(render_fun);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"));
}
}
})();
var fmap__$1 = cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.get_wrapper(k,v));
}),cljs.core.PersistentArrayMap.EMPTY,fmap);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fmap__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613),legacy_render,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),render_fun,new cljs.core.Keyword(null,"render","render",-1408033454),(function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$wrap_funs_$_render(){
var c = this;
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_non_reactive_STAR_){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.do_render(c,compiler);
} else {
var rat = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.goog$module$goog$object.get(c,"cljsRatom");
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.mark_rendered(c);

if((rat == null)){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.run_in_reaction((function (){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.do_render(c,compiler);
}),c,"cljsRatom",day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.queue_render,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
})], 0));
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.map_to_js = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__31867 = o;
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.goog$module$goog$object.set(G__31867,cljs.core.name(k),v);

return G__31867;
}),({}),m);
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.cljsify = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$cljsify(body,compiler){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.wrap_funs(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.add_obligatory(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.camelify_map_keys(body)),compiler);
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.built_in_static_method_names = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"childContextTypes","childContextTypes",578717991),new cljs.core.Keyword(null,"contextTypes","contextTypes",-2023853910),new cljs.core.Keyword(null,"contextType","contextType",1033066077),new cljs.core.Keyword(null,"getDerivedStateFromProps","getDerivedStateFromProps",-991834739),new cljs.core.Keyword(null,"getDerivedStateFromError","getDerivedStateFromError",166658477)], null);
/**
 * Creates JS class based on provided Clojure map.
 * 
 *   Map keys should use `React.Component` method names (https://reactjs.org/docs/react-component.html),
 *   and can be provided in snake-case or camelCase.
 *   Constructor function is defined using key `:getInitialState`.
 * 
 *   React built-in static methods or properties are automatically defined as statics.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.create_class = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$create_class(body,compiler){
if(cljs.core.map_QMARK_(body)){
} else {
throw (new Error("Assert failed: (map? body)"));
}

var body__$1 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.cljsify(body,compiler);
var methods$ = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.map_to_js(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc,body__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.built_in_static_method_names], 0)));
var static_methods = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.map_to_js(cljs.core.select_keys(body__$1,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.built_in_static_method_names));
var display_name = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(body__$1);
var get_initial_state = new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916).cljs$core$IFn$_invoke$arity$1(body__$1);
var construct = new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(body__$1);
var cmp = (function (props,context,updater){
var this$ = this;
module$node_modules$react$index.Component.call(this$,props,context,updater);

if(cljs.core.truth_(construct)){
(construct.cljs$core$IFn$_invoke$arity$2 ? construct.cljs$core$IFn$_invoke$arity$2(this$,props) : construct.call(null,this$,props));
} else {
}

if(cljs.core.truth_(get_initial_state)){
(this$.state = (get_initial_state.cljs$core$IFn$_invoke$arity$1 ? get_initial_state.cljs$core$IFn$_invoke$arity$1(this$) : get_initial_state.call(null,this$)));
} else {
}

(this$.cljsMountOrder = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.next_mount_count());

return this$;
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.goog$module$goog$object.extend(cmp.prototype,module$node_modules$react$index.Component.prototype,methods$);

if(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(body__$1))){
(cmp.prototype.render = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(body__$1));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(body__$1))){
(cmp.prototype.reagentRender = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(body__$1));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613).cljs$core$IFn$_invoke$arity$1(body__$1))){
(cmp.prototype.cljsLegacyRender = new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613).cljs$core$IFn$_invoke$arity$1(body__$1));
} else {
}

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.goog$module$goog$object.extend(cmp,module$node_modules$react$index.Component,static_methods);

if(cljs.core.truth_(display_name)){
(cmp.displayName = display_name);

(cmp.cljs$lang$ctorStr = display_name);

(cmp.cljs$lang$ctorPrWriter = (function (this$,writer,opt){
return cljs.core._write(writer,display_name);
}));
} else {
}

(cmp.cljs$lang$type = true);

(cmp.prototype.constructor = cmp);

return cmp;
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.cached_react_class = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$cached_react_class(compiler,c){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.goog$module$goog$object.get(c,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.get_id(compiler));
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.cache_react_class = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$cache_react_class(compiler,c,constructor$){
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.goog$module$goog$object.set(c,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.get_id(compiler),constructor$);

return constructor$;
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.fn_to_class = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$fn_to_class(compiler,f){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')));
}

if((!((!(((day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.react_class_QMARK_(f)) && ((!(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_class_QMARK_(f)))))))))){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.has_console){
((day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.track_console:console).warn(["Warning: ","Using native React classes directly in Hiccup forms ","is not supported. Use create-element or ","adapt-react-class instead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.fun_name(f);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return f;
}
})()),day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.comp_name()].join(''));
} else {
}
} else {
}

if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_class_QMARK_(f)){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.cache_react_class(compiler,f,f);
} else {
var spec = cljs.core.meta(f);
var withrender = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),f);
var res = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.create_class(withrender,compiler);
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.cache_react_class(compiler,f,res);
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.as_class = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$as_class(tag,compiler){
var temp__5806__auto__ = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.cached_react_class(compiler,tag);
if((temp__5806__auto__ == null)){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.fn_to_class(compiler,tag);
} else {
var cached_class = temp__5806__auto__;
return cached_class;
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.reactify_component = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$reactify_component(comp,compiler){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.react_class_QMARK_(comp)){
return comp;
} else {
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.as_class(comp,compiler);
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.functional_wrap_render = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$functional_wrap_render(compiler,c){
while(true){
var f = c.reagentRender;
var _ = ((cljs.core.ifn_QMARK_(f))?null:(function(){throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')))})());
var argv = c.argv;
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,argv);
if(cljs.core.vector_QMARK_(res)){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element(compiler,res);
} else {
if(cljs.core.ifn_QMARK_(res)){
var f__$1 = ((day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_class_QMARK_(res))?((function (compiler,c,f,_,argv,res){
return (function() { 
var G__31887__delegate = function (args){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element(compiler,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args));
};
var G__31887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31888__i = 0, G__31888__a = new Array(arguments.length -  0);
while (G__31888__i < G__31888__a.length) {G__31888__a[G__31888__i] = arguments[G__31888__i + 0]; ++G__31888__i;}
  args = new cljs.core.IndexedSeq(G__31888__a,0,null);
} 
return G__31887__delegate.call(this,args);};
G__31887.cljs$lang$maxFixedArity = 0;
G__31887.cljs$lang$applyTo = (function (arglist__31889){
var args = cljs.core.seq(arglist__31889);
return G__31887__delegate(args);
});
G__31887.cljs$core$IFn$_invoke$arity$variadic = G__31887__delegate;
return G__31887;
})()
;})(compiler,c,f,_,argv,res))
:res);
(c.reagentRender = f__$1);

var G__31890 = compiler;
var G__31891 = c;
compiler = G__31890;
c = G__31891;
continue;
} else {
return res;

}
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.functional_do_render = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$functional_do_render(compiler,c){
var _STAR_current_component_STAR__orig_val__31868 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__31869 = c;
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__31869);

try{var ok = [false];
try{var res = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.functional_wrap_render(compiler,c);
(ok[(0)] = true);

return res;
}finally {if(cljs.core.truth_((ok[(0)]))){
} else {
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.has_console){
((day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.track_console:console).error(["Error rendering component",day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.comp_name()].join(''));
} else {
}
}
}
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__31868);
}});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.functional_render = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$functional_render(compiler,jsprops){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_non_reactive_STAR_){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.functional_do_render(compiler,jsprops);
} else {
var argv = jsprops.argv;
var tag = jsprops.reagentRender;
var vec__31870 = module$node_modules$react$index.useState((0));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31870,(0),null);
var update_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31870,(1),null);
var state_ref = module$node_modules$react$index.useRef();
var ___$1 = (cljs.core.truth_(state_ref.current)?null:(function (){var obj = ({});
(obj.forceUpdate = (function (){
return (update_count.cljs$core$IFn$_invoke$arity$1 ? update_count.cljs$core$IFn$_invoke$arity$1(cljs.core.inc) : update_count.call(null,cljs.core.inc));
}));

(obj.cljsMountOrder = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.next_mount_count());

(obj.constructor = tag);

(obj.reagentRender = tag);

return (state_ref.current = obj);
})());
var reagent_state = state_ref.current;
var rat = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.goog$module$goog$object.get(reagent_state,"cljsRatom");
module$node_modules$react$index.useEffect((function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$functional_render_$_mount(){
return (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$functional_render_$_mount_$_unmount(){
var G__31873 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.goog$module$goog$object.get(reagent_state,"cljsRatom");
if((G__31873 == null)){
return null;
} else {
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.dispose_BANG_(G__31873);
}
});
}),[]);

(reagent_state.argv = argv);

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.mark_rendered(reagent_state);

if((rat == null)){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.run_in_reaction((function (){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.functional_do_render(compiler,reagent_state);
}),reagent_state,"cljsRatom",day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.queue_render,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.functional_render_memo_fn = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$functional_render_memo_fn(prev_props,next_props){
var old_argv = prev_props.argv;
var new_argv = next_props.argv;
var and__5043__auto__ = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ === false;
if(and__5043__auto__){
try{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv);
}catch (e31874){var e = e31874;
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.has_console){
((day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.track_console:console).warn(["Warning: ","Exception thrown while comparing argv's in shouldComponentUpdate: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
} else {
}

return false;
}} else {
return and__5043__auto__;
}
});
/**
 * Create copy of functional-render with displayName set to name of the
 *   original Reagent component.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.functional_render_fn = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$component$functional_render_fn(compiler,tag){
var or__5045__auto__ = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.cached_react_class(compiler,tag);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var f = (function (jsprops){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.functional_render(compiler,jsprops);
});
var _ = (f.displayName = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.fun_name(tag));
var f__$1 = module$node_modules$react$index.memo(f,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.functional_render_memo_fn);
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.cache_react_class(compiler,tag,f__$1);

return f__$1;
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.js.map
