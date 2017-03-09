module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-native");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.Manager=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);



var _reactNative=__webpack_require__(1);


var _reactNativeRootSiblings=__webpack_require__(5);var _reactNativeRootSiblings2=_interopRequireDefault(_reactNativeRootSiblings);
var _ToastContainer=__webpack_require__(3);var _ToastContainer2=_interopRequireDefault(_ToastContainer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Toast=function(_Component){_inherits(Toast,_Component);function Toast(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Toast);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Toast.__proto__||Object.getPrototypeOf(Toast)).call.apply(_ref,[this].concat(args))),_this),_this.






















_toast=null,_this.

componentWillMount=function(){
_this._toast=new _reactNativeRootSiblings2.default(_react2.default.createElement(_ToastContainer2.default,_extends({},
_this.props,{
duration:0})));

},_this.

componentWillReceiveProps=function(nextProps){
_this._toast.update(_react2.default.createElement(_ToastContainer2.default,_extends({},
nextProps,{
duration:0})));

},_this.

componentWillUnmount=function(){
_this._toast.destroy();
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Toast,[{key:'render',value:function render()

{
return null;
}}]);return Toast;}(_react.Component);Toast.displayName='Toast';Toast.propTypes=_ToastContainer2.default.propTypes;Toast.positions=_ToastContainer.positions;Toast.durations=_ToastContainer.durations;Toast.show=function(message){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{position:_ToastContainer.positions.BOTTOM,duration:_ToastContainer.durations.SHORT};return new _reactNativeRootSiblings2.default(_react2.default.createElement(_ToastContainer2.default,_extends({},options,{visible:true}),message));};Toast.hide=function(toast){if(toast instanceof _reactNativeRootSiblings2.default){toast.destroy();}else{console.warn('Toast.hide expected a `RootSiblings` instance as argument.\nBut got `'+typeof toast+'` instead.');}};exports.



Manager=_reactNativeRootSiblings2.default;exports.default=

Toast;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.durations=exports.positions=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);



var _reactNative=__webpack_require__(1);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}








var TOAST_MAX_WIDTH=0.89;
var TOAST_ANIMATION_DURATION=200;
var DIMENSION=_reactNative.Dimensions.get('window');
var WINDOW_WIDTH=DIMENSION.width;
var positions={
TOP:20,
BOTTOM:-65,
CENTER:0};


var durations={
LONG:3500,
SHORT:2000};


var styles=_reactNative.StyleSheet.create({
defaultStyle:{
position:'absolute',
width:WINDOW_WIDTH,
justifyContent:'center',
alignItems:'center'},

containerStyle:{
padding:15,
backgroundColor:'#000',
opacity:0.87,
borderRadius:50,
marginHorizontal:WINDOW_WIDTH*((1-TOAST_MAX_WIDTH)/2)},

shadowStyle:{
shadowColor:'#000',
shadowOffset:{
width:0,
height:1},

shadowOpacity:0.1,
shadowRadius:6,
elevation:10},

textStyle:{
fontSize:14,
lineHeight:19,
color:'#fff',
textAlign:'center'}});var



ToastContainer=function(_Component){_inherits(ToastContainer,_Component);






























function ToastContainer(){_classCallCheck(this,ToastContainer);var _this=_possibleConstructorReturn(this,(ToastContainer.__proto__||Object.getPrototypeOf(ToastContainer)).apply(this,
arguments));_this.






componentDidMount=function(){
if(_this.state.visible){
_this._showTimeout=setTimeout(function(){return _this._show();},_this.props.delay);
}
};_this.

componentWillReceiveProps=function(nextProps){
if(nextProps.visible!==_this.props.visible){
if(nextProps.visible){
clearTimeout(_this._showTimeout);
clearTimeout(_this._hideTimeout);
_this._showTimeout=setTimeout(function(){return _this._show();},_this.props.delay);
}else{
_this._hide();
}

_this.setState({
visible:nextProps.visible});

}
};_this.

componentWillUnmount=function(){
_this._hide();
};_this.

shouldComponentUpdate=function(nextProps,nextState){
return _this.state.visible!==nextState.visible;
};_this.

_animating=false;_this.
_root=null;_this.
_hideTimeout=null;_this.
_showTimeout=null;_this.

_show=function(){
clearTimeout(_this._showTimeout);
if(!_this._animating){
clearTimeout(_this._hideTimeout);
_this._animating=true;
_this._root.setNativeProps({
pointerEvents:'auto'});

_this.props.onShow&&_this.props.onShow(_this.props.siblingManager);
_reactNative.Animated.timing(_this.state.opacity,{
toValue:0.8,
duration:_this.props.animation?TOAST_ANIMATION_DURATION:0,
easing:_reactNative.Easing.out(_reactNative.Easing.ease)}).
start(function(_ref){var finished=_ref.finished;
if(finished){
_this._animating=!finished;
_this.props.onShown&&_this.props.onShown(_this.props.siblingManager);
if(_this.props.duration>0){
_this._hideTimeout=setTimeout(function(){return _this._hide();},_this.props.duration);
}
}
});
}
};_this.

_hide=function(){
clearTimeout(_this._showTimeout);
clearTimeout(_this._hideTimeout);
if(!_this._animating){
_this._root.setNativeProps({
pointerEvents:'none'});

_this.props.onHide&&_this.props.onHide(_this.props.siblingManager);
_reactNative.Animated.timing(_this.state.opacity,{
toValue:0,
duration:_this.props.animation?TOAST_ANIMATION_DURATION:0,
easing:_reactNative.Easing.in(_reactNative.Easing.ease)}).
start(function(_ref2){var finished=_ref2.finished;
if(finished){
_this._animating=false;
_this.props.onHidden&&_this.props.onHidden(_this.props.siblingManager);
}
});
}
};_this.state={visible:_this.props.visible,opacity:new _reactNative.Animated.Value(0)};return _this;}_createClass(ToastContainer,[{key:'render',value:function render()

{var _this2=this;var
props=this.props;
var offset=props.position;
var position=offset?_defineProperty({},
offset<0?'bottom':'top',Math.abs(offset)):
{
top:0,
bottom:0};

return this.state.visible||this._animating?_react2.default.createElement(_reactNative.View,{
style:[
styles.defaultStyle,
position],

pointerEvents:'box-none'},

_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{
onPress:this.props.hideOnPress?this._hide:null},

_react2.default.createElement(_reactNative.Animated.View,{
style:[
styles.containerStyle,
props.backgroundColor&&{backgroundColor:props.backgroundColor},
{
opacity:this.state.opacity},

props.shadow&&styles.shadowStyle,
props.shadowColor&&{shadowColor:props.shadowColor}],

pointerEvents:'none',
ref:function ref(ele){return _this2._root=ele;}},

_react2.default.createElement(_reactNative.Text,{style:[
styles.textStyle,
props.textColor&&{color:props.textColor}]},

this.props.children)))):



null;
}}]);return ToastContainer;}(_react.Component);ToastContainer.displayName='ToastContainer';ToastContainer.propTypes=_extends({},_reactNative.View.propTypes,{duration:_react.PropTypes.number,visible:_react.PropTypes.bool,position:_react.PropTypes.number,animation:_react.PropTypes.bool,shadow:_react.PropTypes.bool,backgroundColor:_react.PropTypes.string,shadowColor:_react.PropTypes.string,textColor:_react.PropTypes.string,delay:_react.PropTypes.number,hideOnPress:_react.PropTypes.bool,onHide:_react.PropTypes.func,onHidden:_react.PropTypes.func,onShow:_react.PropTypes.func,onShown:_react.PropTypes.func});ToastContainer.defaultProps={visible:false,duration:durations.SHORT,animation:true,shadow:true,position:positions.BOTTOM,delay:0,hideOnPress:true};exports.default=


ToastContainer;exports.

positions=positions;exports.
durations=durations;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _reactNative=__webpack_require__(1);
var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _StaticContainer=__webpack_require__(6);var _StaticContainer2=_interopRequireDefault(_StaticContainer);
var _EventEmitter=__webpack_require__(7);var _EventEmitter2=_interopRequireDefault(_EventEmitter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
position:'relative'}});



var emitter=new _EventEmitter2.default();


var originRegister=_reactNative.AppRegistry.registerComponent;

_reactNative.AppRegistry.registerComponent=function(appKey,getAppComponent){
var siblings=new Map();
var updates=new Set();

return originRegister(appKey,function(){var _class,_temp;
var OriginAppComponent=getAppComponent();

return _temp=_class=function(_Component){_inherits(_class,_Component);function _class(){_classCallCheck(this,_class);return _possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).apply(this,arguments));}_createClass(_class,[{key:'componentWillMount',value:function componentWillMount()


{
this._update=this._update.bind(this);
emitter.addListener('siblings.update',this._update);
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
emitter.removeListener('siblings.update',this._update);
siblings.clear();
updates.clear();
}},{key:'_update',value:function _update(

id,element,callback){
if(siblings.has(id)&&!element){
siblings.delete(id);
}else{
siblings.set(id,element);
}
updates.add(id);
this.forceUpdate(callback);
}},{key:'render',value:function render()

{
var elements=[];
siblings.forEach(function(element,id){
elements.push(
_react2.default.createElement(_StaticContainer2.default,{
key:'root-sibling-'+id,
shouldUpdate:updates.has(id)},

element));


});
updates.clear();

return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_StaticContainer2.default,{shouldUpdate:false},
_react2.default.createElement(OriginAppComponent,this.props)),

elements));


}}]);return _class;}(_react.Component),_class.displayName='Root('+appKey+')',_temp;

});
};exports.default=

emitter;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(1);
var _AppRegistryInjection=__webpack_require__(4);var _AppRegistryInjection2=_interopRequireDefault(_AppRegistryInjection);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var styles=_reactNative.StyleSheet.create({
offStream:{
position:'absolute'}});


var uid=0;var _class=function(){


function _class(element,callback){_classCallCheck(this,_class);this.
















_id=null;Object.defineProperty(this,'_id',{enumerable:false,configurable:false,writable:false,value:uid++});this.update(element,callback);}_createClass(_class,[{key:'_offstreamElement',value:function _offstreamElement(element){return(0,_react.cloneElement)(element,{style:[element.props.style,styles.offStream]});}},{key:'update',value:function update(

element,callback){
_AppRegistryInjection2.default.emit('siblings.update',this._id,this._offstreamElement(element),callback);
}},{key:'destroy',value:function destroy(

callback){
_AppRegistryInjection2.default.emit('siblings.update',this._id,null,callback);
}}]);return _class;}();exports.default=_class;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-native/Libraries/Components/StaticContainer");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-native/Libraries/EventEmitter/EventEmitter");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _Toast=__webpack_require__(2);
Object.keys(_Toast).forEach(function(key){if(key==="default"||key==="__esModule")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _Toast[key];}});});var _Toast2=_interopRequireDefault(_Toast);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_Toast2.default;

/***/ })
/******/ ]);