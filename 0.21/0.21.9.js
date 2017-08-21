/* WEEX JS RUNTIME 0.21.9, Build 2017-08-15 16:45. */


(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.WeexRuntime = factory());
}(this, (function () { 'use strict';

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable */

// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from

/* istanbul ignore if */
if (!Array.from) {
  Array.from = (function() {
    var toStr = Object.prototype.toString;
    var isCallable = function(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') { __g = global; } // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.0' };
if (typeof __e == 'number') { __e = core; } // eslint-disable-line no-undef
});

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var isObject = _isObject;
var _anObject = function (it) {
  if (!isObject(it)) { throw TypeError(it + ' is not an object!'); }
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var isObject$1 = _isObject;
var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = isObject$1(document$1) && isObject$1(document$1.createElement);
var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject$2 = _isObject;
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!isObject$2(it)) { return it; }
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))) { return val; }
  if (typeof (fn = it.valueOf) == 'function' && !isObject$2(val = fn.call(it))) { return val; }
  if (!S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))) { return val; }
  throw TypeError("Can't convert object to primitive value");
};

var anObject = _anObject;
var IE8_DOM_DEFINE = _ie8DomDefine;
var toPrimitive = _toPrimitive;
var dP$1 = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) { try {
    return dP$1(O, P, Attributes);
  } catch (e) { /* empty */ } }
  if ('get' in Attributes || 'set' in Attributes) { throw TypeError('Accessors not supported!'); }
  if ('value' in Attributes) { O[P] = Attributes.value; }
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var dP = _objectDp;
var createDesc = _propertyDesc;
var _hide = _descriptors ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _redefine = createCommonjsModule(function (module) {
var global = _global;
var hide = _hide;
var has = _has;
var SRC = _uid('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

_core.inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) { has(val, 'name') || hide(val, 'name', key); }
  if (O[key] === val) { return; }
  if (isFunction) { has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key))); }
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
});

var _aFunction = function (it) {
  if (typeof it != 'function') { throw TypeError(it + ' is not a function!'); }
  return it;
};

// optional / simple context binding
var aFunction = _aFunction;
var _ctx = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) { return fn; }
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var global$1 = _global;
var core = _core;
var hide = _hide;
var redefine = _redefine;
var ctx = _ctx;
var PROTOTYPE = 'prototype';

var $export$1 = function (type, name, source) {
  var IS_FORCED = type & $export$1.F;
  var IS_GLOBAL = type & $export$1.G;
  var IS_STATIC = type & $export$1.S;
  var IS_PROTO = type & $export$1.P;
  var IS_BIND = type & $export$1.B;
  var target = IS_GLOBAL ? global$1 : IS_STATIC ? global$1[name] || (global$1[name] = {}) : (global$1[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) { source = name; }
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global$1) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) { redefine(target, key, out, type & $export$1.U); }
    // export
    if (exports[key] != out) { hide(exports, key, exp); }
    if (IS_PROTO && expProto[key] != out) { expProto[key] = out; }
  }
};
global$1.core = core;
// type bitmap
$export$1.F = 1;   // forced
$export$1.G = 2;   // global
$export$1.S = 4;   // static
$export$1.P = 8;   // proto
$export$1.B = 16;  // bind
$export$1.W = 32;  // wrap
$export$1.U = 64;  // safe
$export$1.R = 128; // real proto method for `library`
var _export = $export$1;

var toString$1 = {}.toString;

var _cof = function (it) {
  return toString$1.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = _cof;
// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) { throw TypeError("Can't call method on  " + it); }
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject$1 = _iobject;
var defined = _defined;
var _toIobject = function (it) {
  return IObject$1(defined(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength
var toInteger = _toInteger;
var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var toInteger$1 = _toInteger;
var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = toInteger$1(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes
var toIObject$1 = _toIobject;
var toLength = _toLength;
var toAbsoluteIndex = _toAbsoluteIndex;
var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject$1($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) { while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) { return true; }
    // Array#indexOf ignores holes, Array#includes - not
    } } else { for (;length > index; index++) { if (IS_INCLUDES || index in O) {
      if (O[index] === el) { return IS_INCLUDES || index || 0; }
    } } } return !IS_INCLUDES && -1;
  };
};

var global$2 = _global;
var SHARED = '__core-js_shared__';
var store = global$2[SHARED] || (global$2[SHARED] = {});
var _shared = function (key) {
  return store[key] || (store[key] = {});
};

var shared = _shared('keys');
var uid = _uid;
var _sharedKey = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

var has = _has;
var toIObject = _toIobject;
var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) { if (key != IE_PROTO) { has(O, key) && result.push(key); } }
  // Don't enum bug & hidden keys
  while (names.length > i) { if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  } }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = _objectKeysInternal;
var enumBugKeys = _enumBugKeys;

var _objectKeys = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

var f$1 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$1
};

var f$2 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$2
};

// 7.1.13 ToObject(argument)
var defined$1 = _defined;
var _toObject = function (it) {
  return Object(defined$1(it));
};

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = _objectKeys;
var gOPS = _objectGops;
var pIE = _objectPie;
var toObject = _toObject;
var IObject = _iobject;
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  var arguments$1 = arguments;
 // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments$1[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) { if (isEnum.call(S, key = keys[j++])) { T[key] = S[key]; } }
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)
var $export = _export;

$export($export.S + $export.F, 'Object', { assign: _objectAssign });

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable */

// https://gist.github.com/WebReflection/5593554

/* istanbul ignore if */
if (!Object.setPrototypeOf) {
  Object.setPrototypeOf = (function(Object, magic) {
    var set;
    function setPrototypeOf(O, proto) {
      set.call(O, proto);
      return O;
    }
    try {
      // this works already in Firefox and Safari
      set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
      set.call({}, null);
    } catch (e) {
      if (
        // IE < 11 cannot be shimmed
        Object.prototype !== {}[magic] ||
        // neither can any browser that actually
        // implemented __proto__ correctly
        // (all but old V8 will return here)
        {__proto__: null}.__proto__ === void 0
        // this case means null objects cannot be passed
        // through setPrototypeOf in a reliable way
        // which means here a **Sham** is needed instead
      ) {
        return;
      }
      // nodejs 0.8 and 0.10 are (buggy and..) fine here
      // probably Chrome or some old Mobile stock browser
      set = function(proto) {
        this[magic] = proto;
      };
      // please note that this will **not** work
      // in those browsers that do not inherit
      // __proto__ by mistake from Object.prototype
      // in these cases we should probably throw an error
      // or at least be informed about the issue
      setPrototypeOf.polyfill = setPrototypeOf(
        setPrototypeOf({}, null),
        Object.prototype
      ) instanceof Object;
      // setPrototypeOf.polyfill === true means it works as meant
      // setPrototypeOf.polyfill === false means it's not 100% reliable
      // setPrototypeOf.polyfill === undefined
      // or
      // setPrototypeOf.polyfill ==  null means it's not a polyfill
      // which means it works as expected
      // we can even delete Object.prototype.__proto__;
    }
    return setPrototypeOf;
  }(Object, '__proto__'));
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// fix Promise Problem on JSContext of iOS7~8
// @see https://bugs.webkit.org/show_bug.cgi?id=135866

var ref = commonjsGlobal;
var WXEnvironment = ref.WXEnvironment;

/* istanbul ignore next */
if (WXEnvironment && WXEnvironment.platform === 'iOS') {
  commonjsGlobal.Promise = undefined;
}

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');
var uid = _uid;
var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
});

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof$1 = _cof;
var TAG = _wks('toStringTag');
// ES3 wrong here
var ARG = cof$1(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

var _classof = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof$1(O)
    // ES3 arguments fallback
    : (B = cof$1(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

// 19.1.3.6 Object.prototype.toString()
var classof = _classof;
var test = {};
test[_wks('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  _redefine(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

var toInteger$2 = _toInteger;
var defined$2 = _defined;
// true  -> String#at
// false -> String#codePointAt
var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined$2(that));
    var i = toInteger$2(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) { return TO_STRING ? '' : undefined; }
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library = false;

var _iterators = {};

var dP$2 = _objectDp;
var anObject$2 = _anObject;
var getKeys$1 = _objectKeys;

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$2(O);
  var keys = getKeys$1(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) { dP$2.f(O, P = keys[i++], Properties[P]); }
  return O;
};

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject$1 = _anObject;
var dPs = _objectDps;
var enumBugKeys$1 = _enumBugKeys;
var IE_PROTO$1 = _sharedKey('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = enumBugKeys$1.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) { delete createDict[PROTOTYPE$1][enumBugKeys$1[i]]; }
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = anObject$1(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else { result = createDict(); }
  return Properties === undefined ? result : dPs(result, Properties);
};

var def = _objectDp.f;
var has$2 = _has;
var TAG$1 = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !has$2(it = stat ? it : it.prototype, TAG$1)) { def(it, TAG$1, { configurable: true, value: tag }); }
};

var create$1 = _objectCreate;
var descriptor = _propertyDesc;
var setToStringTag$1 = _setToStringTag;
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = create$1(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag$1(Constructor, NAME + ' Iterator');
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has$3 = _has;
var toObject$1 = _toObject;
var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = toObject$1(O);
  if (has$3(O, IE_PROTO$2)) { return O[IE_PROTO$2]; }
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var LIBRARY = _library;
var $export$2 = _export;
var redefine$1 = _redefine;
var hide$1 = _hide;
var has$1 = _has;
var Iterators = _iterators;
var $iterCreate = _iterCreate;
var setToStringTag = _setToStringTag;
var getPrototypeOf = _objectGpo;
var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) { return proto[kind]; }
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has$1(IteratorPrototype, ITERATOR)) { hide$1(IteratorPrototype, ITERATOR, returnThis); }
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide$1(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) { for (key in methods) {
      if (!(key in proto)) { redefine$1(proto, key, methods[key]); }
    } } else { $export$2($export$2.P + $export$2.F * (BUGGY || VALUES_BUG), NAME, methods); }
  }
  return methods;
};

var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) { return { value: undefined, done: true }; }
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _wks('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) { _hide(ArrayProto, UNSCOPABLES, {}); }
var _addToUnscopables = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

var _iterStep = function (done, value) {
  return { value: value, done: !!done };
};

var addToUnscopables = _addToUnscopables;
var step = _iterStep;
var Iterators$2 = _iterators;
var toIObject$2 = _toIobject;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = toIObject$2(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') { return step(0, index); }
  if (kind == 'values') { return step(0, O[index]); }
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators$2.Arguments = Iterators$2.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var $iterators = es6_array_iterator;
var getKeys$2 = _objectKeys;
var redefine$2 = _redefine;
var global$3 = _global;
var hide$2 = _hide;
var Iterators$1 = _iterators;
var wks = _wks;
var ITERATOR$1 = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators$1.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys$2(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global$3[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR$1]) { hide$2(proto, ITERATOR$1, ArrayValues); }
    if (!proto[TO_STRING_TAG]) { hide$2(proto, TO_STRING_TAG, NAME); }
    Iterators$1[NAME] = ArrayValues;
    if (explicit) { for (key in $iterators) { if (!proto[key]) { redefine$2(proto, key, $iterators[key], true); } } }
  }
}

var _anInstance = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

// call something on iterator step with safe closing on error
var anObject$3 = _anObject;
var _iterCall = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject$3(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) { anObject$3(ret.call(iterator)); }
    throw e;
  }
};

// check on default Array iterator
var Iterators$3 = _iterators;
var ITERATOR$2 = _wks('iterator');
var ArrayProto$1 = Array.prototype;

var _isArrayIter = function (it) {
  return it !== undefined && (Iterators$3.Array === it || ArrayProto$1[ITERATOR$2] === it);
};

var classof$2 = _classof;
var ITERATOR$3 = _wks('iterator');
var Iterators$4 = _iterators;
var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
  if (it != undefined) { return it[ITERATOR$3]
    || it['@@iterator']
    || Iterators$4[classof$2(it)]; }
};

var _forOf = createCommonjsModule(function (module) {
var ctx = _ctx;
var call = _iterCall;
var isArrayIter = _isArrayIter;
var anObject = _anObject;
var toLength = _toLength;
var getIterFn = core_getIteratorMethod;
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') { throw TypeError(iterable + ' is not iterable!'); }
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) { for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) { return result; }
  } } else { for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) { return result; }
  } }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;
});

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject$4 = _anObject;
var aFunction$2 = _aFunction;
var SPECIES = _wks('species');
var _speciesConstructor = function (O, D) {
  var C = anObject$4(O).constructor;
  var S;
  return C === undefined || (S = anObject$4(C)[SPECIES]) == undefined ? D : aFunction$2(S);
};

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

var ctx$2 = _ctx;
var invoke = _invoke;
var html = _html;
var cel = _domCreate;
var global$5 = _global;
var process$1 = global$5.process;
var setTask = global$5.setImmediate;
var clearTask = global$5.clearImmediate;
var MessageChannel = global$5.MessageChannel;
var Dispatch = global$5.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer;
var channel;
var port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var arguments$1 = arguments;

    var args = [];
    var i = 1;
    while (arguments.length > i) { args.push(arguments$1[i++]); }
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (_cof(process$1) == 'process') {
    defer = function (id) {
      process$1.nextTick(ctx$2(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx$2(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx$2(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global$5.addEventListener && typeof postMessage == 'function' && !global$5.importScripts) {
    defer = function (id) {
      global$5.postMessage(id + '', '*');
    };
    global$5.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx$2(run, id, 1), 0);
    };
  }
}
var _task = {
  set: setTask,
  clear: clearTask
};

var global$6 = _global;
var macrotask = _task.set;
var Observer = global$6.MutationObserver || global$6.WebKitMutationObserver;
var process$2 = global$6.process;
var Promise$1 = global$6.Promise;
var isNode$1 = _cof(process$2) == 'process';

var _microtask = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode$1 && (parent = process$2.domain)) { parent.exit(); }
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) { notify(); }
        else { last = undefined; }
        throw e;
      }
    } last = undefined;
    if (parent) { parent.enter(); }
  };

  // Node.js
  if (isNode$1) {
    notify = function () {
      process$2.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise$1 && Promise$1.resolve) {
    var promise = Promise$1.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global$6, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) { last.next = task; }
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

// 25.4.1.5 NewPromiseCapability(C)
var aFunction$3 = _aFunction;

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) { throw TypeError('Bad Promise constructor'); }
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction$3(resolve);
  this.reject = aFunction$3(reject);
}

var f$3 = function (C) {
  return new PromiseCapability(C);
};

var _newPromiseCapability = {
	f: f$3
};

var _perform = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

var newPromiseCapability$1 = _newPromiseCapability;

var _promiseResolve = function (C, x) {
  var promiseCapability = newPromiseCapability$1.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var redefine$3 = _redefine;
var _redefineAll = function (target, src, safe) {
  for (var key in src) { redefine$3(target, key, src[key], safe); }
  return target;
};

var global$7 = _global;
var dP$3 = _objectDp;
var DESCRIPTORS = _descriptors;
var SPECIES$1 = _wks('species');

var _setSpecies = function (KEY) {
  var C = global$7[KEY];
  if (DESCRIPTORS && C && !C[SPECIES$1]) { dP$3.f(C, SPECIES$1, {
    configurable: true,
    get: function () { return this; }
  }); }
};

var ITERATOR$4 = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$4]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

var _iterDetect = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) { return false; }
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$4]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR$4] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

var LIBRARY$1 = _library;
var global$4 = _global;
var ctx$1 = _ctx;
var classof$1 = _classof;
var $export$3 = _export;
var isObject$3 = _isObject;
var aFunction$1 = _aFunction;
var anInstance = _anInstance;
var forOf = _forOf;
var speciesConstructor = _speciesConstructor;
var task = _task.set;
var microtask = _microtask();
var newPromiseCapabilityModule = _newPromiseCapability;
var perform = _perform;
var promiseResolve = _promiseResolve;
var PROMISE = 'Promise';
var TypeError$1 = global$4.TypeError;
var process = global$4.process;
var $Promise = global$4[PROMISE];
var isNode = classof$1(process) == 'process';
var empty = function () { /* empty */ };
var Internal;
var newGenericPromiseCapability;
var OwnPromiseCapability;
var Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var sameConstructor = LIBRARY$1 ? function (a, b) {
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
} : function (a, b) {
  return a === b;
};
var isThenable = function (it) {
  var then;
  return isObject$3(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) { return; }
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) { onHandleUnhandled(promise); }
            promise._h = 1;
          }
          if (handler === true) { result = value; }
          else {
            if (domain) { domain.enter(); }
            result = handler(value);
            if (domain) { domain.exit(); }
          }
          if (result === reaction.promise) {
            reject(TypeError$1('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else { resolve(result); }
        } else { reject(value); }
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) { run(chain[i++]); } // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) { onUnhandled(promise); }
  });
};
var onUnhandled = function (promise) {
  task.call(global$4, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global$4.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global$4.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) { throw result.v; }
  });
};
var isUnhandled = function (promise) {
  if (promise._h == 1) { return false; }
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) { return false; }
  } return true;
};
var onHandleUnhandled = function (promise) {
  task.call(global$4, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global$4.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) { return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) { promise._a = promise._c.slice(); }
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) { return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) { throw TypeError$1("Promise can't be resolved itself"); }
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx$1($resolve, wrapper, 1), ctx$1($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction$1(executor);
    Internal.call(this);
    try {
      executor(ctx$1($resolve, this, 1), ctx$1($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) { this._a.push(reaction); }
      if (this._s) { notify(this, false); }
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx$1($resolve, promise, 1);
    this.reject = ctx$1($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return sameConstructor($Promise, C)
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export$3($export$3.G + $export$3.W + $export$3.F * !USE_NATIVE, { Promise: $Promise });
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core[PROMISE];

// statics
$export$3($export$3.S + $export$3.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export$3($export$3.S + $export$3.F * (LIBRARY$1 || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if (x instanceof $Promise && sameConstructor(x.constructor, this)) { return x; }
    return promiseResolve(this, x);
  }
});
$export$3($export$3.S + $export$3.F * !(USE_NATIVE && _iterDetect(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) { return; }
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) { reject(result.v); }
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) { reject(result.v); }
    return capability.promise;
  }
});

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * @fileOverview
 * This file will hack `console` methods by `WXEnvironment.logLevel`.
 * So we can control how many and which messages will be sent by change the log level.
 * Additionally in native platform the message content must be primitive values and
 * using `nativeLog(...args, logLevelMark)` so we create a new `console` object in
 * global add a format process for its methods.
 */

var LEVELS = ['off', 'error', 'warn', 'info', 'log', 'debug'];
var levelMap = {};

var originalConsole = global.console;

/**
 * Hack console for native environment.
 */
function setNativeConsole () {
  generateLevelMap();

  /* istanbul ignore next */
  // mock console in native environment
  if (global.WXEnvironment && global.WXEnvironment.platform !== 'Web') {
    global.console = {
      debug: function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        if (checkLevel('debug')) { global.nativeLog.apply(global, format(args).concat( ['__DEBUG'] )); }
      },
      log: function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        if (checkLevel('log')) { global.nativeLog.apply(global, format(args).concat( ['__LOG'] )); }
      },
      info: function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        if (checkLevel('info')) { global.nativeLog.apply(global, format(args).concat( ['__INFO'] )); }
      },
      warn: function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        if (checkLevel('warn')) { global.nativeLog.apply(global, format(args).concat( ['__WARN'] )); }
      },
      error: function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        if (checkLevel('error')) { global.nativeLog.apply(global, format(args).concat( ['__ERROR'] )); }
      }
    };
  }

  // Web or Node
  else {
    var debug = console.debug;
    var log = console.log;
    var info = console.info;
    var warn = console.warn;
    var error = console.error;
    console.__ori__ = { debug: debug, log: log, info: info, warn: warn, error: error };
    console.debug = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (checkLevel('debug')) { console.__ori__.debug.apply(console, args); }
    };
    console.log = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (checkLevel('log')) { console.__ori__.log.apply(console, args); }
    };
    console.info = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (checkLevel('info')) { console.__ori__.info.apply(console, args); }
    };
    console.warn = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (checkLevel('warn')) { console.__ori__.warn.apply(console, args); }
    };
    console.error = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (checkLevel('error')) { console.__ori__.error.apply(console, args); }
    };
  }
}

/**
 * Reset hacked console to original.
 */
/* istanbul ignore next */
function resetNativeConsole () {
  levelMap = {};
  global.console = originalConsole;
}

/**
 * Generate map for which types of message will be sent in a certain message level
 * as the order of LEVELS.
 */
function generateLevelMap () {
  LEVELS.forEach(function (level) {
    var levelIndex = LEVELS.indexOf(level);
    levelMap[level] = {};
    LEVELS.forEach(function (type) {
      var typeIndex = LEVELS.indexOf(type);
      if (typeIndex <= levelIndex) {
        levelMap[level][type] = true;
      }
    });
  });
}

/**
 * Check if a certain type of message will be sent in current log level of env.
 * @param  {string} type
 * @return {boolean}
 */
function checkLevel (type) {
  var logLevel = (global.WXEnvironment && global.WXEnvironment.logLevel) || 'log';
  return levelMap[logLevel] && levelMap[logLevel][type]
}

/**
 * Convert all log arguments into primitive values.
 * @param  {array} args
 * @return {array}
 */
/* istanbul ignore next */
function format (args) {
  return args.map(function (v) {
    var type = Object.prototype.toString.call(v);
    if (type.toLowerCase() === '[object object]') {
      v = JSON.stringify(v);
    }
    else {
      v = String(v);
    }
    return v
  })
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * @fileOverview
 * Polyfill `setTimeout` on Android V8 using native method
 * `setTimeoutNative(callbackId, time)` and JS method
 * `setTimeoutCallback(callbackId)`.
 * This polyfill is only used in virtual-DOM diff & flush agorithm. Not
 * accessed by JS Bundle code (The timer APIs polyfill for JS Bundle is in
 * `html5/default/app/ctrl.js`).
 */

var originalSetTimeout = global.setTimeout;
var setTimeoutNative = global.setTimeoutNative;

/**
 * Set up native timer
 */
/* istanbul ignore next */
function setNativeTimer () {
  if (typeof setTimeout === 'undefined' &&
  typeof setTimeoutNative === 'function') {
    var timeoutMap = {};
    var timeoutId = 0;

    global.setTimeout = function (cb, time) {
      timeoutMap[++timeoutId] = cb;
      setTimeoutNative(timeoutId.toString(), time);
    };

    global.setTimeoutCallback = function (id) {
      if (typeof timeoutMap[id] === 'function') {
        timeoutMap[id]();
        delete timeoutMap[id];
      }
    };
  }
}

/* istanbul ignore next */
function resetNativeTimer () {
  global.setTimeout = originalSetTimeout;
  global.setTimeoutCallback = null;
}

setNativeTimer();

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/**
 * Freeze the prototype of javascript build-in objects.
 */
/* istanbul ignore next */
function freezePrototype$1 () {
  Object.freeze(Object);
  Object.freeze(Array);

  // Object.freeze(Object.prototype)
  freezeObjectProto();
  Object.freeze(Array.prototype);
  Object.freeze(String.prototype);
  Object.freeze(Number.prototype);
  Object.freeze(Boolean.prototype);

  // Object.freeze(Error.prototype)
  freezeErrorProto();
  Object.freeze(Date.prototype);
  Object.freeze(RegExp.prototype);
}

function freezeObjectProto () {
  var proto = Object.prototype;
  var protoName = 'Object.prototype';
  freezeProtoProperty(proto, '__defineGetter__', protoName);
  freezeProtoProperty(proto, '__defineSetter__', protoName);
  freezeProtoProperty(proto, '__lookupGetter__', protoName);
  freezeProtoProperty(proto, '__lookupSetter__', protoName);
  freezeProtoProperty(proto, 'constructor', protoName);
  freezeProtoProperty(proto, 'hasOwnProperty', protoName);
  freezeProtoProperty(proto, 'isPrototypeOf', protoName);
  freezeProtoProperty(proto, 'propertyIsEnumerable', protoName);
  freezeProtoProperty(proto, 'toLocaleString', protoName);
  freezeProtoProperty(proto, 'toString', protoName);
  freezeProtoProperty(proto, 'valueOf', protoName);
  Object.seal(proto);
}

function freezeErrorProto () {
  var proto = Error.prototype;
  var protoName = 'Error.prototype';
  freezeProtoProperty(proto, 'name', protoName);
  freezeProtoProperty(proto, 'message', protoName);
  freezeProtoProperty(proto, 'toString', protoName);
  freezeProtoProperty(proto, 'constructor', protoName);
  Object.seal(proto);
}

function freezeProtoProperty (proto, propertyName, protoName) {
  if (!proto.hasOwnProperty(propertyName)) {
    return
  }

  var origin = proto[propertyName];
  Object.defineProperty(proto, propertyName, {
    get: function () {
      return origin
    },
    set: function (value) {
      if (this === proto) {
        throw Error(("Cannot assign to read only property " + propertyName + " of " + protoName))
      }

      Object.defineProperty(this, propertyName, {
        value: value,
        writable: true
      });

      return value
    }
  });
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// import promise hack and polyfills

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Get a unique id.
 */
var nextNodeRef = 1;
function uniqueId () {
  return (nextNodeRef++).toString()
}

function typof (v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1)
}

function bufferToBase64 (buffer) {
  if (typeof btoa !== 'function') {
    return ''
  }
  var string = Array.prototype.map.call(
    new Uint8Array(buffer),
    function (code) { return String.fromCharCode(code); }
  ).join('');
  return btoa(string) // eslint-disable-line no-undef
}

function base64ToBuffer (base64) {
  if (typeof atob !== 'function') {
    return new ArrayBuffer(0)
  }
  var string = atob(base64); // eslint-disable-line no-undef
  var array = new Uint8Array(string.length);
  Array.prototype.forEach.call(string, function (ch, i) {
    array[i] = ch.charCodeAt(0);
  });
  return array.buffer
}

/**
 * Normalize a primitive value.
 * @param  {any}        v
 * @return {primitive}
 */
function normalizePrimitive (v) {
  var type = typof(v);

  switch (type) {
    case 'Undefined':
    case 'Null':
      return ''

    case 'RegExp':
      return v.toString()
    case 'Date':
      return v.toISOString()

    case 'Number':
    case 'String':
    case 'Boolean':
    case 'Array':
    case 'Object':
      return v

    case 'ArrayBuffer':
      return {
        '@type': 'binary',
        dataType: type,
        base64: bufferToBase64(v)
      }

    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
      return {
        '@type': 'binary',
        dataType: type,
        base64: bufferToBase64(v.buffer)
      }

    default:
      return JSON.stringify(v)
  }
}

function decodePrimitive (data) {
  if (typof(data) === 'Object') {
    // decode base64 into binary
    if (data['@type'] && data['@type'] === 'binary') {
      return base64ToBuffer(data.base64 || '')
    }

    var realData = {};
    for (var key in data) {
      realData[key] = decodePrimitive(data[key]);
    }
    return realData
  }
  if (typof(data) === 'Array') {
    return data.map(decodePrimitive)
  }
  return data
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * For general callback management of a certain Weex instance.
 * Because function can not passed into native, so we create callback
 * callback id for each function and pass the callback id into native
 * in fact. And when a callback called from native, we can find the real
 * callback through the callback id we have passed before.
 */
var CallbackManager = function CallbackManager (instanceId) {
  this.instanceId = instanceId;
  this.lastCallbackId = 0;
  this.callbacks = {};
};
CallbackManager.prototype.add = function add (callback) {
  this.lastCallbackId++;
  this.callbacks[this.lastCallbackId] = callback;
  return this.lastCallbackId
};
CallbackManager.prototype.remove = function remove (callbackId) {
  var callback = this.callbacks[callbackId];
  delete this.callbacks[callbackId];
  return callback
};
CallbackManager.prototype.consume = function consume (callbackId, data, ifKeepAlive) {
  var callback = this.callbacks[callbackId];
  if (typeof ifKeepAlive === 'undefined' || ifKeepAlive === false) {
    delete this.callbacks[callbackId];
  }
  if (typeof callback === 'function') {
    return callback(decodePrimitive(data))
  }
  return new Error(("invalid callback id \"" + callbackId + "\""))
};
CallbackManager.prototype.close = function close () {
  this.callbacks = {};
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var docMap = {};

/**
 * Add a document object into docMap.
 * @param {string} id
 * @param {object} document
 */
function addDoc (id, doc) {
  if (id) {
    docMap[id] = doc;
  }
}

/**
 * Get the document object by id.
 * @param {string} id
 */
function getDoc (id) {
  return docMap[id]
}

/**
 * Remove the document from docMap by id.
 * @param {string} id
 */
function removeDoc (id) {
  delete docMap[id];
}

/**
 * @deprecated
 * Get listener by document id.
 * @param {string} id
 * @return {object} listener
 */


/**
 * Get TaskCenter instance by id.
 * @param {string} id
 * @return {object} TaskCenter
 */
function getTaskCenter (id) {
  var doc = docMap[id];
  if (doc && doc.taskCenter) {
    return doc.taskCenter
  }
  return null
}

/**
 * Append body node to documentElement.
 * @param {object} document
 * @param {object} node
 * @param {object} before
 */
function appendBody (doc, node, before) {
  var documentElement = doc.documentElement;

  if (documentElement.pureChildren.length > 0 || node.parentNode) {
    return
  }
  var children = documentElement.children;
  var beforeIndex = children.indexOf(before);
  if (beforeIndex < 0) {
    children.push(node);
  }
  else {
    children.splice(beforeIndex, 0, node);
  }

  if (node.nodeType === 1) {
    if (node.role === 'body') {
      node.docId = doc.id;
      node.ownerDocument = doc;
      node.parentNode = documentElement;
      linkParent(node, documentElement);
    }
    else {
      node.children.forEach(function (child) {
        child.parentNode = node;
      });
      setBody(doc, node);
      node.docId = doc.id;
      node.ownerDocument = doc;
      linkParent(node, documentElement);
      delete doc.nodeMap[node.nodeId];
    }
    documentElement.pureChildren.push(node);
    sendBody(doc, node);
  }
  else {
    node.parentNode = documentElement;
    doc.nodeMap[node.ref] = node;
  }
}

function sendBody (doc, node) {
  var body = node.toJSON();
  var children = body.children;
  delete body.children;
  var result = doc.taskCenter.send('dom', { action: 'createBody' }, [body]);
  if (children) {
    children.forEach(function (child) {
      result = doc.taskCenter.send('dom', { action: 'addElement' }, [body.ref, child, -1]);
    });
  }
  return result
}

/**
 * Set up body node.
 * @param {object} document
 * @param {object} element
 */
function setBody (doc, el) {
  el.role = 'body';
  el.depth = 1;
  delete doc.nodeMap[el.nodeId];
  el.ref = '_root';
  doc.nodeMap._root = el;
  doc.body = el;
}

/**
 * Establish the connection between parent and child node.
 * @param {object} child node
 * @param {object} parent node
 */
function linkParent (node, parent) {
  node.parentNode = parent;
  if (parent.docId) {
    node.docId = parent.docId;
    node.ownerDocument = parent.ownerDocument;
    node.ownerDocument.nodeMap[node.nodeId] = node;
    node.depth = parent.depth + 1;
  }
  node.children.forEach(function (child) {
    linkParent(child, node);
  });
}

/**
 * Get the next sibling element.
 * @param {object} node
 */
function nextElement (node) {
  while (node) {
    if (node.nodeType === 1) {
      return node
    }
    node = node.nextSibling;
  }
}

/**
 * Get the previous sibling element.
 * @param {object} node
 */
function previousElement (node) {
  while (node) {
    if (node.nodeType === 1) {
      return node
    }
    node = node.previousSibling;
  }
}

/**
 * Insert a node into list at the specified index.
 * @param {object} target node
 * @param {array} list
 * @param {number} newIndex
 * @param {boolean} changeSibling
 * @return {number} newIndex
 */
function insertIndex (target, list, newIndex, changeSibling) {
  /* istanbul ignore next */
  if (newIndex < 0) {
    newIndex = 0;
  }
  var before = list[newIndex - 1];
  var after = list[newIndex];
  list.splice(newIndex, 0, target);
  if (changeSibling) {
    before && (before.nextSibling = target);
    target.previousSibling = before;
    target.nextSibling = after;
    after && (after.previousSibling = target);
  }
  return newIndex
}

/**
 * Move the node to a new index in list.
 * @param {object} target node
 * @param {array} list
 * @param {number} newIndex
 * @param {boolean} changeSibling
 * @return {number} newIndex
 */
function moveIndex (target, list, newIndex, changeSibling) {
  var index = list.indexOf(target);
  /* istanbul ignore next */
  if (index < 0) {
    return -1
  }
  if (changeSibling) {
    var before = list[index - 1];
    var after = list[index + 1];
    before && (before.nextSibling = after);
    after && (after.previousSibling = before);
  }
  list.splice(index, 1);
  var newIndexAfter = newIndex;
  if (index <= newIndex) {
    newIndexAfter = newIndex - 1;
  }
  var beforeNew = list[newIndexAfter - 1];
  var afterNew = list[newIndexAfter];
  list.splice(newIndexAfter, 0, target);
  if (changeSibling) {
    beforeNew && (beforeNew.nextSibling = target);
    target.previousSibling = beforeNew;
    target.nextSibling = afterNew;
    afterNew && (afterNew.previousSibling = target);
  }
  if (index === newIndexAfter) {
    return -1
  }
  return newIndex
}

/**
 * Remove the node from list.
 * @param {object} target node
 * @param {array} list
 * @param {boolean} changeSibling
 */
function removeIndex (target, list, changeSibling) {
  var index = list.indexOf(target);
  /* istanbul ignore next */
  if (index < 0) {
    return
  }
  if (changeSibling) {
    var before = list[index - 1];
    var after = list[index + 1];
    before && (before.nextSibling = after);
    after && (after.previousSibling = before);
  }
  list.splice(index, 1);
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var Node = function Node () {
  this.nodeId = uniqueId();
  this.ref = this.nodeId;
  this.children = [];
  this.pureChildren = [];
  this.parentNode = null;
  this.nextSibling = null;
  this.previousSibling = null;
};

/**
* Destroy current node, and remove itself form nodeMap.
*/
Node.prototype.destroy = function destroy () {
  var doc = getDoc(this.docId);
  if (doc) {
    delete this.docId;
    delete doc.nodeMap[this.nodeId];
  }
  this.children.forEach(function (child) {
    child.destroy();
  });
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var Element$2;

function setElement (El) {
  Element$2 = El;
}

/**
 * A map which stores all type of elements.
 * @type {Object}
 */
var registeredElements = {};

/**
 * Register an extended element type with component methods.
 * @param  {string} type    component type
 * @param  {array}  methods a list of method names
 */
function registerElement (type, methods) {
  // Skip when no special component methods.
  if (!methods || !methods.length) {
    return
  }

  // Init constructor.
  var WeexElement = (function (Element) {
    function WeexElement () {
      Element.apply(this, arguments);
    }if ( Element ) WeexElement.__proto__ = Element;
    WeexElement.prototype = Object.create( Element && Element.prototype );
    WeexElement.prototype.constructor = WeexElement;

    

    return WeexElement;
  }(Element$2));

  // Add methods to prototype.
  methods.forEach(function (methodName) {
    WeexElement.prototype[methodName] = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var taskCenter = getTaskCenter(this.docId);
      if (taskCenter) {
        return taskCenter.send('component', {
          ref: this.ref,
          component: type,
          method: methodName
        }, args)
      }
    };
  });

  // Add to element type map.
  registeredElements[type] = WeexElement;
}



function getWeexElement (type) {
  return registeredElements[type]
}



/**
 * Clear all element types. Only for testing.
 */

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var DEFAULT_TAG_NAME = 'div';
var BUBBLE_EVENTS = [
  'click', 'longpress', 'touchstart', 'touchmove', 'touchend',
  'panstart', 'panmove', 'panend', 'horizontalpan', 'verticalpan', 'swipe'
];

function registerNode (docId, node) {
  var doc = getDoc(docId);
  doc.nodeMap[node.nodeId] = node;
}

var Element = (function (Node$$1) {
  function Element (type, props, isExtended) {
    if ( type === void 0 ) type = DEFAULT_TAG_NAME;

    Node$$1.call(this);

    var WeexElement = getWeexElement(type);
    if (WeexElement && !isExtended) {
      return new WeexElement(props)
    }

    props = props || {};
    this.nodeType = 1;
    this.nodeId = uniqueId();
    this.ref = this.nodeId;
    this.type = type;
    this.attr = props.attr || {};
    this.style = props.style || {};
    this.classStyle = props.classStyle || {};
    this.event = {};
    this.children = [];
    this.pureChildren = [];
  }

  if ( Node$$1 ) Element.__proto__ = Node$$1;
  Element.prototype = Object.create( Node$$1 && Node$$1.prototype );
  Element.prototype.constructor = Element;

  /**
   * Append a child node.
   * @param {object} node
   * @return {undefined | number} the signal sent by native
   */
  Element.prototype.appendChild = function appendChild (node) {
    if (node.parentNode && node.parentNode !== this) {
      return
    }
    /* istanbul ignore else */
    if (!node.parentNode) {
      linkParent(node, this);
      insertIndex(node, this.children, this.children.length, true);
      if (this.docId) {
        registerNode(this.docId, node);
      }
      if (node.nodeType === 1) {
        insertIndex(node, this.pureChildren, this.pureChildren.length);
        var taskCenter = getTaskCenter(this.docId);
        if (taskCenter) {
          return taskCenter.send(
            'dom',
            { action: 'addElement' },
            [this.ref, node.toJSON(), -1]
          )
        }
      }
    }
    else {
      moveIndex(node, this.children, this.children.length, true);
      if (node.nodeType === 1) {
        var index = moveIndex(node, this.pureChildren, this.pureChildren.length);
        var taskCenter$1 = getTaskCenter(this.docId);
        if (taskCenter$1 && index >= 0) {
          return taskCenter$1.send(
            'dom',
            { action: 'moveElement' },
            [node.ref, this.ref, index]
          )
        }
      }
    }
  };

  /**
   * Insert a node before specified node.
   * @param {object} node
   * @param {object} before
   * @return {undefined | number} the signal sent by native
   */
  Element.prototype.insertBefore = function insertBefore (node, before) {
    if (node.parentNode && node.parentNode !== this) {
      return
    }
    if (node === before || (node.nextSibling && node.nextSibling === before)) {
      return
    }
    if (!node.parentNode) {
      linkParent(node, this);
      insertIndex(node, this.children, this.children.indexOf(before), true);
      if (this.docId) {
        registerNode(this.docId, node);
      }
      if (node.nodeType === 1) {
        var pureBefore = nextElement(before);
        var index = insertIndex(
          node,
          this.pureChildren,
          pureBefore
          ? this.pureChildren.indexOf(pureBefore)
          : this.pureChildren.length
        );
        var taskCenter = getTaskCenter(this.docId);
        if (taskCenter) {
          return taskCenter.send(
            'dom',
            { action: 'addElement' },
            [this.ref, node.toJSON(), index]
          )
        }
      }
    }
    else {
      moveIndex(node, this.children, this.children.indexOf(before), true);
      if (node.nodeType === 1) {
        var pureBefore$1 = nextElement(before);
        /* istanbul ignore next */
        var index$1 = moveIndex(
          node,
          this.pureChildren,
          pureBefore$1
          ? this.pureChildren.indexOf(pureBefore$1)
          : this.pureChildren.length
        );
        var taskCenter$1 = getTaskCenter(this.docId);
        if (taskCenter$1 && index$1 >= 0) {
          return taskCenter$1.send(
            'dom',
            { action: 'moveElement' },
            [node.ref, this.ref, index$1]
          )
        }
      }
    }
  };

  /**
   * Insert a node after specified node.
   * @param {object} node
   * @param {object} after
   * @return {undefined | number} the signal sent by native
   */
  Element.prototype.insertAfter = function insertAfter (node, after) {
    if (node.parentNode && node.parentNode !== this) {
      return
    }
    if (node === after || (node.previousSibling && node.previousSibling === after)) {
      return
    }
    if (!node.parentNode) {
      linkParent(node, this);
      insertIndex(node, this.children, this.children.indexOf(after) + 1, true);
      /* istanbul ignore else */
      if (this.docId) {
        registerNode(this.docId, node);
      }
      if (node.nodeType === 1) {
        var index = insertIndex(
          node,
          this.pureChildren,
          this.pureChildren.indexOf(previousElement(after)) + 1
        );
        var taskCenter = getTaskCenter(this.docId);
        /* istanbul ignore else */
        if (taskCenter) {
          return taskCenter.send(
            'dom',
            { action: 'addElement' },
            [this.ref, node.toJSON(), index]
          )
        }
      }
    }
    else {
      moveIndex(node, this.children, this.children.indexOf(after) + 1, true);
      if (node.nodeType === 1) {
        var index$1 = moveIndex(
          node,
          this.pureChildren,
          this.pureChildren.indexOf(previousElement(after)) + 1
        );
        var taskCenter$1 = getTaskCenter(this.docId);
        if (taskCenter$1 && index$1 >= 0) {
          return taskCenter$1.send(
            'dom',
            { action: 'moveElement' },
            [node.ref, this.ref, index$1]
          )
        }
      }
    }
  };

  /**
   * Remove a child node, and decide whether it should be destroyed.
   * @param {object} node
   * @param {boolean} preserved
   */
  Element.prototype.removeChild = function removeChild (node, preserved) {
    if (node.parentNode) {
      removeIndex(node, this.children, true);
      if (node.nodeType === 1) {
        removeIndex(node, this.pureChildren);
        var taskCenter = getTaskCenter(this.docId);
        if (taskCenter) {
          taskCenter.send(
            'dom',
            { action: 'removeElement' },
            [node.ref]
          );
        }
      }
    }
    if (!preserved) {
      node.destroy();
    }
  };

  /**
   * Clear all child nodes.
   */
  Element.prototype.clear = function clear () {
    var taskCenter = getTaskCenter(this.docId);
    /* istanbul ignore else */
    if (taskCenter) {
      this.pureChildren.forEach(function (node) {
        taskCenter.send(
          'dom',
          { action: 'removeElement' },
          [node.ref]
        );
      });
    }
    this.children.forEach(function (node) {
      node.destroy();
    });
    this.children.length = 0;
    this.pureChildren.length = 0;
  };

  /**
   * Set an attribute, and decide whether the task should be send to native.
   * @param {string} key
   * @param {string | number} value
   * @param {boolean} silent
   */
  Element.prototype.setAttr = function setAttr (key, value, silent) {
    if (this.attr[key] === value && silent !== false) {
      return
    }
    this.attr[key] = value;
    var taskCenter = getTaskCenter(this.docId);
    if (!silent && taskCenter) {
      var result = {};
      result[key] = value;
      taskCenter.send(
        'dom',
        { action: 'updateAttrs' },
        [this.ref, result]
      );
    }
  };

  /**
   * Set a style property, and decide whether the task should be send to native.
   * @param {string} key
   * @param {string | number} value
   * @param {boolean} silent
   */
  Element.prototype.setStyle = function setStyle (key, value, silent) {
    if (this.style[key] === value && silent !== false) {
      return
    }
    this.style[key] = value;
    var taskCenter = getTaskCenter(this.docId);
    if (!silent && taskCenter) {
      var result = {};
      result[key] = value;
      taskCenter.send(
        'dom',
        { action: 'updateStyle' },
        [this.ref, result]
      );
    }
  };

  /**
   * Set style properties from class.
   * @param {object} classStyle
   */
  Element.prototype.setClassStyle = function setClassStyle (classStyle) {
    var this$1 = this;

    // reset previous class style to empty string
    for (var key in this.classStyle) {
      this$1.classStyle[key] = '';
    }

    Object.assign(this.classStyle, classStyle);
    var taskCenter = getTaskCenter(this.docId);
    if (taskCenter) {
      taskCenter.send(
        'dom',
        { action: 'updateStyle' },
        [this.ref, this.toStyle()]
      );
    }
  };

  /**
   * Add an event handler.
   * @param {string} event type
   * @param {function} event handler
   */
  Element.prototype.addEvent = function addEvent (type, handler) {
    if (!this.event[type]) {
      this.event[type] = handler;
      var taskCenter = getTaskCenter(this.docId);
      if (taskCenter) {
        taskCenter.send(
          'dom',
          { action: 'addEvent' },
          [this.ref, type]
        );
      }
    }
  };

  /**
   * Remove an event handler.
   * @param {string} event type
   */
  Element.prototype.removeEvent = function removeEvent (type) {
    if (this.event[type]) {
      delete this.event[type];
      var taskCenter = getTaskCenter(this.docId);
      if (taskCenter) {
        taskCenter.send(
          'dom',
          { action: 'removeEvent' },
          [this.ref, type]
        );
      }
    }
  };

  /**
   * Fire an event manually.
   * @param {string} type type
   * @param {function} e handler
   * @param {boolean} isBubble whether or not event bubble
   * @return {} anything returned by handler function
   */
  Element.prototype.fireEvent = function fireEvent (type, e, isBubble) {
    var result = null;
    var isStopPropagation = false;
    var handler = this.event[type];
    if (handler && e) {
      e.stopPropagation = function () {
        isStopPropagation = true;
      };
      result = handler.call(this, e);
    }

    if (!isStopPropagation
      && isBubble
      && BUBBLE_EVENTS.includes(type)
      && this.parentNode
      && this.parentNode.fireEvent) {
      e.currentTarget = this.parentNode;
      this.parentNode.fireEvent(type, e, isBubble);
    }

    return result
  };

  /**
   * Get all styles of current element.
   * @return {object} style
   */
  Element.prototype.toStyle = function toStyle () {
    return Object.assign({}, this.classStyle, this.style)
  };

  /**
   * Convert current element to JSON like object.
   * @return {object} element
   */
  Element.prototype.toJSON = function toJSON () {
    var result = {
      ref: this.ref.toString(),
      type: this.type,
      attr: this.attr,
      style: this.toStyle()
    };
    var event = Object.keys(this.event);
    if (event.length) {
      result.event = event;
    }
    if (this.pureChildren.length) {
      result.children = this.pureChildren.map(function (child) { return child.toJSON(); });
    }
    return result
  };

  /**
   * Convert to HTML element tag string.
   * @return {stirng} html
   */
  Element.prototype.toString = function toString () {
    return '<' + this.type +
    ' attr=' + JSON.stringify(this.attr) +
    ' style=' + JSON.stringify(this.toStyle()) + '>' +
    this.pureChildren.map(function (child) { return child.toString(); }).join('') +
    '</' + this.type + '>'
  };

  return Element;
}(Node));

setElement(Element);

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var fallback = function () {};

// The API of TaskCenter would be re-design.
var TaskCenter = function TaskCenter (id, sendTasks) {
  Object.defineProperty(this, 'instanceId', {
    enumerable: true,
    value: id
  });
  Object.defineProperty(this, 'callbackManager', {
    enumerable: true,
    value: new CallbackManager(id)
  });
  fallback = sendTasks || function () {};
};

TaskCenter.prototype.callback = function callback (callbackId, data, ifKeepAlive) {
  return this.callbackManager.consume(callbackId, data, ifKeepAlive)
};

TaskCenter.prototype.destroyCallback = function destroyCallback () {
  return this.callbackManager.close()
};

/**
 * Normalize a value. Specially, if the value is a function, then generate a function id
 * and save it to `CallbackManager`, at last return the function id.
 * @param{any}      v
 * @return {primitive}
 */
TaskCenter.prototype.normalize = function normalize (v) {
  var type = typof(v);
  if (v && v instanceof Element) {
    return v.ref
  }
  if (v && v._isVue && v.$el instanceof Element) {
    return v.$el.ref
  }
  if (type === 'Function') {
    return this.callbackManager.add(v).toString()
  }
  return normalizePrimitive(v)
};

TaskCenter.prototype.send = function send (type, params, args, options) {
    var this$1 = this;

  var action = params.action;
    var component = params.component;
    var ref = params.ref;
    var module = params.module;
    var method = params.method;

  args = args.map(function (arg) { return this$1.normalize(arg); });

  switch (type) {
    case 'dom':
      return this[action](this.instanceId, args)
    case 'component':
      return this.componentHandler(this.instanceId, ref, method, args, Object.assign({ component: component }, options))
    default:
      return this.moduleHandler(this.instanceId, module, method, args, options)
  }
};

TaskCenter.prototype.callDOM = function callDOM (action, args) {
  return this[action](this.instanceId, args)
};

TaskCenter.prototype.callComponent = function callComponent (ref, method, args, options) {
  return this.componentHandler(this.instanceId, ref, method, args, options)
};

TaskCenter.prototype.callModule = function callModule (module, method, args, options) {
  return this.moduleHandler(this.instanceId, module, method, args, options)
};

function init$1 () {
  var DOM_METHODS = {
    createFinish: global.callCreateFinish,
    updateFinish: global.callUpdateFinish,
    refreshFinish: global.callRefreshFinish,

    createBody: global.callCreateBody,

    addElement: global.callAddElement,
    removeElement: global.callRemoveElement,
    moveElement: global.callMoveElement,
    updateAttrs: global.callUpdateAttrs,
    updateStyle: global.callUpdateStyle,

    addEvent: global.callAddEvent,
    removeEvent: global.callRemoveEvent
  };
  var proto = TaskCenter.prototype;

  var loop = function ( name ) {
    var method = DOM_METHODS[name];
    proto[name] = method ?
      function (id, args) { return method.apply(void 0, [ id ].concat( args )); } :
      function (id, args) { return fallback(id, [{ module: 'dom', method: name, args: args }], '-1'); };
  };

  for (var name in DOM_METHODS) loop( name );

  proto.componentHandler = global.callNativeComponent ||
    (function (id, ref, method, args, options) { return fallback(id, [{ component: options.component, ref: ref, method: method, args: args }]); });

  proto.moduleHandler = global.callNativeModule ||
    (function (id, module, method, args) { return fallback(id, [{ module: module, method: method, args: args }]); });
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// JS Services
var services = [];

/**
 * Register a JavaScript service.
 * A JavaScript service options could have a set of lifecycle methods
 * for each Weex instance. For example: create, refresh, destroy.
 * For the JS framework maintainer if you want to supply some features
 * which need to work well in different Weex instances, even in different
 * frameworks separately. You can make a JavaScript service to init
 * its variables or classes for each Weex instance when it's created
 * and recycle them when it's destroyed.
 * @param {object} options Could have { create, refresh, destroy }
 *                         lifecycle methods. In create method it should
 *                         return an object of what variables or classes
 *                         would be injected into the Weex instance.
 */
function registerService (name, options) {
  if (hasService(name)) {
    console.warn(("Service \"" + name + "\" has been registered already!"));
  }
  else {
    options = Object.assign({}, options);
    services.push({ name: name, options: options });
  }
}

/**
 * Unregister a JavaScript service by name
 * @param {string} name
 */
function unregisterService (name) {
  services.some(function (service, index) {
    if (service.name === name) {
      services.splice(index, 1);
      return true
    }
  });
}

/**
 * Check if a JavaScript service with a certain name existed.
 * @param  {string}  name
 * @return {Boolean}
 */
function hasService (name) {
  return services.map(function (service) { return service.name; }).indexOf(name) >= 0
}

/**
 * Generate service map
 */
function createServices (id, env, config) {
  // Init JavaScript services for this instance.
  var serviceMap = Object.create(null);
  serviceMap.service = Object.create(null);
  services.forEach(function (ref) {
    var name = ref.name;
    var options = ref.options;

    {
      console.debug(("[JS Runtime] create service " + name + "."));
    }
    var create = options.create;
    if (create) {
      var result = create(id, env, config);
      Object.assign(serviceMap.service, result);
      Object.assign(serviceMap, result.instance);
    }
  });
  delete serviceMap.service.instance;
  Object.freeze(serviceMap.service);
  return serviceMap
}

function refreshServices (id, env, config) {
  services.forEach(function (service) {
    var refresh = service.options.refresh;
    if (typeof refresh === 'function') {
      refresh(id, env, config);
    }
  });
}

function destroyServices (id, env, config) {
  services.forEach(function (service) {
    var destroy = service.options.destroy;
    if (typeof destroy === 'function') {
      destroy(id, env, config);
    }
  });
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var versionRegExp = /^\s*\/\/ *(\{[^}]*\}) *\r?\n/;

/**
 * Detect a JS Bundle code and make sure which framework it's based to. Each JS
 * Bundle should make sure that it starts with a line of JSON comment and is
 * more that one line.
 * @param  {string} code
 * @return {object}
 */
function getBundleType (code) {
  var result = versionRegExp.exec(code);
  if (result) {
    try {
      var info = JSON.parse(result[1]);
      return info.framework
    }
    catch (e) {}
  }

  // default bundle type
  return 'Weex'
}

var instanceMap = {};

function getFrameworkType (id) {
  if (instanceMap[id]) {
    return instanceMap[id].framework
  }
  return 'Weex'
}

/**
 * Check which framework a certain JS Bundle code based to. And create instance
 * by this framework.
 * @param {string} id
 * @param {string} code
 * @param {object} config
 * @param {object} data
 */
function createInstance (id, code, config, data) {
  if (instanceMap[id]) {
    return new Error(("invalid instance id \"" + id + "\""))
  }

  // Init instance info.
  var bundleType = getBundleType(code);
  var runtimeConfig = getRuntimeConfig();

  // Init instance config.
  config = JSON.parse(JSON.stringify(config || {}));
  config.env = JSON.parse(JSON.stringify(global.WXEnvironment || {}));

  var context = {
    config: config,
    created: Date.now(),
    framework: bundleType
  };
  context.services = createServices(id, context, runtimeConfig);
  instanceMap[id] = context;

  {
    console.debug(("[JS Framework] create an " + bundleType + " instance"));
  }

  var fm = runtimeConfig.frameworks[bundleType];
  if (!fm) {
    return new Error(("invalid bundle type \"" + bundleType + "\"."))
  }
  return fm.createInstance(id, code, config, data, context)
}

function refreshInstance (id) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var type = getFrameworkType(id);
  var runtimeConfig = getRuntimeConfig();
  refreshServices(id, {
    info: { framework: type },
    runtime: runtimeConfig
  });

  var fm = runtimeConfig.frameworks[type];
  if (!fm) {
    return new Error(("invalid bundle type \"" + type + "\"."))
  }
  return fm.refreshInstance.apply(fm, [ id ].concat( args ))
}

function destroyInstance (id) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var type = getFrameworkType(id);
  var runtimeConfig = getRuntimeConfig();
  destroyServices(id, {
    info: { framework: type },
    runtime: runtimeConfig
  });

  var fm = runtimeConfig.frameworks[type];
  if (!fm) {
    return new Error(("invalid bundle type \"" + type + "\"."))
  }
  delete instanceMap[id];
  return fm.destroyInstance.apply(fm, [ id ].concat( args ))
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var runtimeConfig = {};

function getRuntimeConfig () {
  return runtimeConfig
}

var methods = {
  createInstance: createInstance,
  refreshInstance: refreshInstance,
  destroyInstance: destroyInstance,
  registerService: registerService,
  unregisterService: unregisterService
};

/**
 * Register methods which init each frameworks.
 * @param {string} methodName
 */
function genInit (methodName) {
  methods[methodName] = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (methodName === 'registerComponents') {
      checkComponentMethods(args[0]);
    }
    for (var name in runtimeConfig.frameworks) {
      var framework = runtimeConfig.frameworks[name];
      if (framework && framework[methodName]) {
        framework[methodName].apply(framework, args);
      }
    }
  };
}

function checkComponentMethods (components) {
  if (Array.isArray(components)) {
    components.forEach(function (name) {
      if (name && name.type && name.methods) {
        registerElement(name.type, name.methods);
      }
    });
  }
}

/**
 * Register methods which will be called for each instance.
 * @param {string} methodName
 */
function genInstance (methodName) {
  methods[methodName] = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var id = args[0];
    var type = getFrameworkType(id);
    var framework = runtimeConfig.frameworks[type];
    if (type && framework) {
      return framework[methodName].apply(framework, args)
    }
    return new Error(("invalid instance id \"" + id + "\""))
  };
}

function init$$1 (config) {
  Object.assign(runtimeConfig, config);

  init$1();

  // Init each framework by `init` method and `config` which contains three
  // virtual-DOM Class: `Document`, `Element` & `Comment`, and a JS bridge method:
  // `sendTasks(...args)`.
  var frameworks = runtimeConfig.frameworks || {};
  for (var name in frameworks) {
    var framework = frameworks[name];
    framework.init(config);
  }

  // @todo: The method `registerMethods` will be re-designed or removed later.
   ['registerComponents', 'registerModules', 'registerMethods'].forEach(genInit)

  ; ['receiveTasks', 'getRoot'].forEach(genInstance);

  // adapt instance
  methods.callJS = methods.receiveTasks;

  return methods
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var Comment = (function (Node$$1) {
  function Comment (value) {
    Node$$1.call(this);

    this.nodeType = 8;
    this.nodeId = uniqueId();
    this.ref = this.nodeId;
    this.type = 'comment';
    this.value = value;
    this.children = [];
    this.pureChildren = [];
  }

  if ( Node$$1 ) Comment.__proto__ = Node$$1;
  Comment.prototype = Object.create( Node$$1 && Node$$1.prototype );
  Comment.prototype.constructor = Comment;

  /**
  * Convert to HTML comment string.
  * @return {stirng} html
  */
  Comment.prototype.toString = function toString () {
    return '<!-- ' + this.value + ' -->'
  };

  return Comment;
}(Node));

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
* Create the action object.
* @param {string} name
* @param {array} arguments
* @return {object} action
*/
function createAction (name, args) {
  if ( args === void 0 ) args = [];

  return { module: 'dom', method: name, args: args }
}

var Listener = function Listener (id, handler) {
  this.id = id;
  this.batched = false;
  this.updates = [];
  if (typeof handler === 'function') {
    Object.defineProperty(this, 'handler', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: handler
    });
  }
  else {
    console.error('[JS Runtime] invalid parameter, handler must be a function');
  }
};

/**
 * Send the "createFinish" signal.
 * @param {function} callback
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.createFinish = function createFinish (callback) {
  var handler = this.handler;
  return handler([createAction('createFinish')], callback)
};

/**
 * Send the "updateFinish" signal.
 * @param {function} callback
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.updateFinish = function updateFinish (callback) {
  var handler = this.handler;
  return handler([createAction('updateFinish')], callback)
};

/**
 * Send the "refreshFinish" signal.
 * @param {function} callback
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.refreshFinish = function refreshFinish (callback) {
  var handler = this.handler;
  return handler([createAction('refreshFinish')], callback)
};

/**
 * Send the "createBody" signal.
 * @param {object} element
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.createBody = function createBody (element) {
  var body = element.toJSON();
  var children = body.children;
  delete body.children;
  var actions = [createAction('createBody', [body])];
  if (children) {
    actions.push.apply(actions, children.map(function (child) {
      return createAction('addElement', [body.ref, child, -1])
    }));
  }
  return this.addActions(actions)
};

/**
 * Send the "addElement" signal.
 * @param {object} element
 * @param {stirng} reference id
 * @param {number} index
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.addElement = function addElement (element, ref, index) {
  if (!(index >= 0)) {
    index = -1;
  }
  return this.addActions(createAction('addElement', [ref, element.toJSON(), index]))
};

/**
 * Send the "removeElement" signal.
 * @param {stirng} reference id
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.removeElement = function removeElement (ref) {
  if (Array.isArray(ref)) {
    var actions = ref.map(function (r) { return createAction('removeElement', [r]); });
    return this.addActions(actions)
  }
  return this.addActions(createAction('removeElement', [ref]))
};

/**
 * Send the "moveElement" signal.
 * @param {stirng} target reference id
 * @param {stirng} parent reference id
 * @param {number} index
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.moveElement = function moveElement (targetRef, parentRef, index) {
  return this.addActions(createAction('moveElement', [targetRef, parentRef, index]))
};

/**
 * Send the "updateAttrs" signal.
 * @param {stirng} reference id
 * @param {stirng} key
 * @param {stirng} value
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.setAttr = function setAttr (ref, key, value) {
  var result = {};
  result[key] = value;
  return this.addActions(createAction('updateAttrs', [ref, result]))
};

/**
 * Send the "updateStyle" signal, update a sole style.
 * @param {stirng} reference id
 * @param {stirng} key
 * @param {stirng} value
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.setStyle = function setStyle (ref, key, value) {
  var result = {};
  result[key] = value;
  return this.addActions(createAction('updateStyle', [ref, result]))
};

/**
 * Send the "updateStyle" signal.
 * @param {stirng} reference id
 * @param {object} style
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.setStyles = function setStyles (ref, style) {
  return this.addActions(createAction('updateStyle', [ref, style]))
};

/**
 * Send the "addEvent" signal.
 * @param {stirng} reference id
 * @param {string} event type
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.addEvent = function addEvent (ref, type) {
  return this.addActions(createAction('addEvent', [ref, type]))
};

/**
 * Send the "removeEvent" signal.
 * @param {stirng} reference id
 * @param {string} event type
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.removeEvent = function removeEvent (ref, type) {
  return this.addActions(createAction('removeEvent', [ref, type]))
};

/**
 * Default handler.
 * @param {object | array} actions
 * @param {function} callback
 * @return {} anything returned by callback function
 */
Listener.prototype.handler = function handler (actions, cb) {
  return cb && cb()
};

/**
 * Add actions into updates.
 * @param {object | array} actions
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.addActions = function addActions (actions) {
  var updates = this.updates;
  var handler = this.handler;

  if (!Array.isArray(actions)) {
    actions = [actions];
  }

  if (this.batched) {
    updates.push.apply(updates, actions);
  }
  else {
    return handler(actions)
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * @fileOverview
 * Task handler for communication between javascript and native.
 */

var handlerMap = {
  createBody: 'callCreateBody',
  addElement: 'callAddElement',
  removeElement: 'callRemoveElement',
  moveElement: 'callMoveElement',
  updateAttrs: 'callUpdateAttrs',
  updateStyle: 'callUpdateStyle',
  addEvent: 'callAddEvent',
  removeEvent: 'callRemoveEvent'
};

/**
 * Create a task handler.
 * @param {string} id
 * @param {function} handler
 * @return {function} taskHandler
 */
function createHandler (id, handler) {
  var defaultHandler = handler || global.callNative;

  /* istanbul ignore if */
  if (typeof defaultHandler !== 'function') {
    console.error('[JS Runtime] no default handler');
  }

  return function taskHandler (tasks) {
    /* istanbul ignore if */
    if (!Array.isArray(tasks)) {
      tasks = [tasks];
    }
    for (var i = 0; i < tasks.length; i++) {
      var returnValue = dispatchTask(id, tasks[i], defaultHandler);
      if (returnValue === -1) {
        return returnValue
      }
    }
  }
}

/**
 * Check if there is a corresponding available handler in the environment.
 * @param {string} module
 * @param {string} method
 * @return {boolean}
 */
function hasAvailableHandler (module, method) {
  return module === 'dom'
    && handlerMap[method]
    && typeof global[handlerMap[method]] === 'function'
}

/**
 * Dispatch the task to the specified handler.
 * @param {string} id
 * @param {object} task
 * @param {function} defaultHandler
 * @return {number} signal returned from native
 */
function dispatchTask (id, task, defaultHandler) {
  var module = task.module;
  var method = task.method;
  var args = task.args;

  if (hasAvailableHandler(module, method)) {
    return global[handlerMap[method]].apply(global, [ id ].concat( args, ['-1'] ))
  }

  return defaultHandler(id, [task], '-1')
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Update all changes for an element.
 * @param {object} element
 * @param {object} changes
 */
function updateElement (el, changes) {
  var attrs = changes.attrs || {};
  for (var name in attrs) {
    el.setAttr(name, attrs[name], true);
  }
  var style = changes.style || {};
  for (var name$1 in style) {
    el.setStyle(name$1, style[name$1], true);
  }
}

var Document = function Document (id, url, handler) {
  id = id ? id.toString() : '';
  this.id = id;
  this.URL = url;

  addDoc(id, this);
  this.nodeMap = {};
  var L = Document.Listener || Listener;
  this.listener = new L(id, handler || createHandler(id, Document.handler)); // deprecated
  this.taskCenter = new TaskCenter(id, handler ? function (id) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    return handler.apply(void 0, args);
  } : Document.handler);
  this.createDocumentElement();
};

/**
* Get the node from nodeMap.
* @param {string} reference id
* @return {object} node
*/
Document.prototype.getRef = function getRef (ref) {
  return this.nodeMap[ref]
};

/**
* Turn on batched updates.
*/
Document.prototype.open = function open () {
  this.listener.batched = false;
};

/**
* Turn off batched updates.
*/
Document.prototype.close = function close () {
  this.listener.batched = true;
};

/**
* Create the document element.
* @return {object} documentElement
*/
Document.prototype.createDocumentElement = function createDocumentElement () {
    var this$1 = this;

  if (!this.documentElement) {
    var el = new Element('document');
    el.docId = this.id;
    el.ownerDocument = this;
    el.role = 'documentElement';
    el.depth = 0;
    el.ref = '_documentElement';
    this.nodeMap._documentElement = el;
    this.documentElement = el;

    Object.defineProperty(el, 'appendChild', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function (node) {
        appendBody(this$1, node);
      }
    });

    Object.defineProperty(el, 'insertBefore', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function (node, before) {
        appendBody(this$1, node, before);
      }
    });
  }

  return this.documentElement
};

/**
* Create the body element.
* @param {string} type
* @param {objct} props
* @return {object} body element
*/
Document.prototype.createBody = function createBody (type, props) {
  if (!this.body) {
    var el = new Element(type, props);
    setBody(this, el);
  }

  return this.body
};

/**
* Create an element.
* @param {string} tagName
* @param {objct} props
* @return {object} element
*/
Document.prototype.createElement = function createElement (tagName, props) {
  return new Element(tagName, props)
};

/**
* Create an comment.
* @param {string} text
* @return {object} comment
*/
Document.prototype.createComment = function createComment (text) {
  return new Comment(text)
};

/**
* Fire an event on specified element manually.
* @param {object} element
* @param {string} event type
* @param {object} event object
* @param {object} dom changes
* @return {} anything returned by handler function
*/
Document.prototype.fireEvent = function fireEvent (el, type, e, domChanges) {
  if (!el) {
    return
  }
  e = e || {};
  e.type = type;
  e.target = el;
  e.currentTarget = el;
  e.timestamp = Date.now();
  if (domChanges) {
    updateElement(el, domChanges);
  }
  var isBubble = this.getRef('_root').attr['bubble'] === 'true';
  return el.fireEvent(type, e, isBubble)
};

/**
* Destroy current document, and remove itself form docMap.
*/
Document.prototype.destroy = function destroy () {
  this.taskCenter.destroyCallback();
  delete this.listener;
  delete this.nodeMap;
  delete this.taskCenter;
  removeDoc(this.id);
};

// default task handler
Document.handler = null;

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var config = {
  Document: Document, Element: Element, Comment: Comment, Listener: Listener,
  TaskCenter: TaskCenter,
  sendTasks: function sendTasks () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (typeof callNative === 'function') {
      return callNative.apply(void 0, args)
    }
    return (global.callNative || (function () {})).apply(void 0, args)
  }
};

Document.handler = config.sendTasks;

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * @fileOverview
 * Register framework(s) in JS runtime. Weex supply two layers for 3rd-party
 * framework(s): one is the instance management layer, another is the
 * virtual-DOM layer.
 */

/* istanbul ignore next */
function freezePrototype$$1 () {
  freezePrototype$1();

  Object.freeze(config.Element);
  Object.freeze(config.Comment);
  Object.freeze(config.Listener);
  Object.freeze(config.Document.prototype);
  Object.freeze(config.Element.prototype);
  Object.freeze(config.Comment.prototype);
  Object.freeze(config.Listener.prototype);
}

var index = {
  setNativeConsole: setNativeConsole,
  resetNativeConsole: resetNativeConsole,
  setNativeTimer: setNativeTimer,
  resetNativeTimer: resetNativeTimer,
  service: { registerService: registerService, unregisterService: unregisterService, hasService: hasService },
  freezePrototype: freezePrototype$$1,
  init: init$$1,
  config: config
};

return index;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi4uLy4uL2h0bWw1L3NoYXJlZC9hcnJheUZyb20uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIi4uLy4uL2h0bWw1L3NoYXJlZC9vYmplY3RBc3NpZ24uanMiLCIuLi8uLi9odG1sNS9zaGFyZWQvb2JqZWN0U2V0UHJvdG90eXBlT2YuanMiLCIuLi8uLi9odG1sNS9zaGFyZWQvcHJvbWlzZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZm9yLW9mLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ludm9rZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Rhc2suanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19taWNyb3Rhc2suanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcGVyZm9ybS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwiLi4vLi4vaHRtbDUvc2hhcmVkL2NvbnNvbGUuanMiLCIuLi8uLi9odG1sNS9zaGFyZWQvc2V0VGltZW91dC5qcyIsIi4uLy4uL2h0bWw1L3NoYXJlZC9mcmVlemUuanMiLCIuLi8uLi9odG1sNS9zaGFyZWQvaW5kZXguanMiLCIuLi8uLi9odG1sNS9ydW50aW1lL3V0aWxzLmpzIiwiLi4vLi4vaHRtbDUvcnVudGltZS9icmlkZ2Uvbm9ybWFsaXplLmpzIiwiLi4vLi4vaHRtbDUvcnVudGltZS9icmlkZ2UvQ2FsbGJhY2tNYW5hZ2VyLmpzIiwiLi4vLi4vaHRtbDUvcnVudGltZS92ZG9tL29wZXJhdGlvbi5qcyIsIi4uLy4uL2h0bWw1L3J1bnRpbWUvdmRvbS9Ob2RlLmpzIiwiLi4vLi4vaHRtbDUvcnVudGltZS92ZG9tL1dlZXhFbGVtZW50LmpzIiwiLi4vLi4vaHRtbDUvcnVudGltZS92ZG9tL0VsZW1lbnQuanMiLCIuLi8uLi9odG1sNS9ydW50aW1lL2JyaWRnZS9UYXNrQ2VudGVyLmpzIiwiLi4vLi4vaHRtbDUvcnVudGltZS9hcGkvc2VydmljZS5qcyIsIi4uLy4uL2h0bWw1L3J1bnRpbWUvYXBpL2luc3RhbmNlLmpzIiwiLi4vLi4vaHRtbDUvcnVudGltZS9hcGkvaW5pdC5qcyIsIi4uLy4uL2h0bWw1L3J1bnRpbWUvdmRvbS9Db21tZW50LmpzIiwiLi4vLi4vaHRtbDUvcnVudGltZS9icmlkZ2UvTGlzdGVuZXIuanMiLCIuLi8uLi9odG1sNS9ydW50aW1lL2JyaWRnZS9IYW5kbGVyLmpzIiwiLi4vLi4vaHRtbDUvcnVudGltZS92ZG9tL0RvY3VtZW50LmpzIiwiLi4vLi4vaHRtbDUvcnVudGltZS92ZG9tL2luZGV4LmpzIiwiLi4vLi4vaHRtbDUvcnVudGltZS9hcGkvY29uZmlnLmpzIiwiLi4vLi4vaHRtbDUvcnVudGltZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuLy8gUHJvZHVjdGlvbiBzdGVwcyBvZiBFQ01BLTI2MiwgRWRpdGlvbiA2LCAyMi4xLjIuMVxuLy8gUmVmZXJlbmNlOiBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtYXJyYXkuZnJvbVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmICghQXJyYXkuZnJvbSkge1xuICBBcnJheS5mcm9tID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gICAgdmFyIGlzQ2FsbGFibGUgPSBmdW5jdGlvbihmbikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyB8fCB0b1N0ci5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgICB9O1xuICAgIHZhciB0b0ludGVnZXIgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIG51bWJlciA9IE51bWJlcih2YWx1ZSk7XG4gICAgICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIGlmIChudW1iZXIgPT09IDAgfHwgIWlzRmluaXRlKG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiAobnVtYmVyID4gMCA/IDEgOiAtMSkgKiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpO1xuICAgIH07XG4gICAgdmFyIG1heFNhZmVJbnRlZ2VyID0gTWF0aC5wb3coMiwgNTMpIC0gMTtcbiAgICB2YXIgdG9MZW5ndGggPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIGxlbiA9IHRvSW50ZWdlcih2YWx1ZSk7XG4gICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobGVuLCAwKSwgbWF4U2FmZUludGVnZXIpO1xuICAgIH07XG5cbiAgICAvLyBUaGUgbGVuZ3RoIHByb3BlcnR5IG9mIHRoZSBmcm9tIG1ldGhvZCBpcyAxLlxuICAgIHJldHVybiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBGbiwgdGhpc0FyZyAqLykge1xuICAgICAgLy8gMS4gTGV0IEMgYmUgdGhlIHRoaXMgdmFsdWUuXG4gICAgICB2YXIgQyA9IHRoaXM7XG5cbiAgICAgIC8vIDIuIExldCBpdGVtcyBiZSBUb09iamVjdChhcnJheUxpa2UpLlxuICAgICAgdmFyIGl0ZW1zID0gT2JqZWN0KGFycmF5TGlrZSk7XG5cbiAgICAgIC8vIDMuIFJldHVybklmQWJydXB0KGl0ZW1zKS5cbiAgICAgIGlmIChhcnJheUxpa2UgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheS5mcm9tIHJlcXVpcmVzIGFuIGFycmF5LWxpa2Ugb2JqZWN0IC0gbm90IG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIDQuIElmIG1hcGZuIGlzIHVuZGVmaW5lZCwgdGhlbiBsZXQgbWFwcGluZyBiZSBmYWxzZS5cbiAgICAgIHZhciBtYXBGbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCB1bmRlZmluZWQ7XG4gICAgICB2YXIgVDtcbiAgICAgIGlmICh0eXBlb2YgbWFwRm4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIDUuIGVsc2VcbiAgICAgICAgLy8gNS4gYSBJZiBJc0NhbGxhYmxlKG1hcGZuKSBpcyBmYWxzZSwgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLlxuICAgICAgICBpZiAoIWlzQ2FsbGFibGUobWFwRm4pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkuZnJvbTogd2hlbiBwcm92aWRlZCwgdGhlIHNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDUuIGIuIElmIHRoaXNBcmcgd2FzIHN1cHBsaWVkLCBsZXQgVCBiZSB0aGlzQXJnOyBlbHNlIGxldCBUIGJlIHVuZGVmaW5lZC5cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgVCA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyAxMC4gTGV0IGxlblZhbHVlIGJlIEdldChpdGVtcywgXCJsZW5ndGhcIikuXG4gICAgICAvLyAxMS4gTGV0IGxlbiBiZSBUb0xlbmd0aChsZW5WYWx1ZSkuXG4gICAgICB2YXIgbGVuID0gdG9MZW5ndGgoaXRlbXMubGVuZ3RoKTtcblxuICAgICAgLy8gMTMuIElmIElzQ29uc3RydWN0b3IoQykgaXMgdHJ1ZSwgdGhlblxuICAgICAgLy8gMTMuIGEuIExldCBBIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tDb25zdHJ1Y3RdXSBpbnRlcm5hbCBtZXRob2Qgb2YgQyB3aXRoIGFuIGFyZ3VtZW50IGxpc3QgY29udGFpbmluZyB0aGUgc2luZ2xlIGl0ZW0gbGVuLlxuICAgICAgLy8gMTQuIGEuIEVsc2UsIExldCBBIGJlIEFycmF5Q3JlYXRlKGxlbikuXG4gICAgICB2YXIgQSA9IGlzQ2FsbGFibGUoQykgPyBPYmplY3QobmV3IEMobGVuKSkgOiBuZXcgQXJyYXkobGVuKTtcblxuICAgICAgLy8gMTYuIExldCBrIGJlIDAuXG4gICAgICB2YXIgayA9IDA7XG4gICAgICAvLyAxNy4gUmVwZWF0LCB3aGlsZSBrIDwgbGVu4oCmIChhbHNvIHN0ZXBzIGEgLSBoKVxuICAgICAgdmFyIGtWYWx1ZTtcbiAgICAgIHdoaWxlIChrIDwgbGVuKSB7XG4gICAgICAgIGtWYWx1ZSA9IGl0ZW1zW2tdO1xuICAgICAgICBpZiAobWFwRm4pIHtcbiAgICAgICAgICBBW2tdID0gdHlwZW9mIFQgPT09ICd1bmRlZmluZWQnID8gbWFwRm4oa1ZhbHVlLCBrKSA6IG1hcEZuLmNhbGwoVCwga1ZhbHVlLCBrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBBW2tdID0ga1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGsgKz0gMTtcbiAgICAgIH1cbiAgICAgIC8vIDE4LiBMZXQgcHV0U3RhdHVzIGJlIFB1dChBLCBcImxlbmd0aFwiLCBsZW4sIHRydWUpLlxuICAgICAgQS5sZW5ndGggPSBsZW47XG4gICAgICAvLyAyMC4gUmV0dXJuIEEuXG4gICAgICByZXR1cm4gQTtcbiAgICB9O1xuICB9KCkpO1xufVxuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS4wJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFNSQyA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR107XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0JywgeyBhc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKSB9KTtcbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0ICdjb3JlLWpzL2ZuL29iamVjdC9hc3NpZ24nXG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vV2ViUmVmbGVjdGlvbi81NTkzNTU0XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKCFPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mID0gKGZ1bmN0aW9uKE9iamVjdCwgbWFnaWMpIHtcbiAgICB2YXIgc2V0O1xuICAgIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICBzZXQuY2FsbChPLCBwcm90byk7XG4gICAgICByZXR1cm4gTztcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIHRoaXMgd29ya3MgYWxyZWFkeSBpbiBGaXJlZm94IGFuZCBTYWZhcmlcbiAgICAgIHNldCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LnByb3RvdHlwZSwgbWFnaWMpLnNldDtcbiAgICAgIHNldC5jYWxsKHt9LCBudWxsKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIC8vIElFIDwgMTEgY2Fubm90IGJlIHNoaW1tZWRcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZSAhPT0ge31bbWFnaWNdIHx8XG4gICAgICAgIC8vIG5laXRoZXIgY2FuIGFueSBicm93c2VyIHRoYXQgYWN0dWFsbHlcbiAgICAgICAgLy8gaW1wbGVtZW50ZWQgX19wcm90b19fIGNvcnJlY3RseVxuICAgICAgICAvLyAoYWxsIGJ1dCBvbGQgVjggd2lsbCByZXR1cm4gaGVyZSlcbiAgICAgICAge19fcHJvdG9fXzogbnVsbH0uX19wcm90b19fID09PSB2b2lkIDBcbiAgICAgICAgLy8gdGhpcyBjYXNlIG1lYW5zIG51bGwgb2JqZWN0cyBjYW5ub3QgYmUgcGFzc2VkXG4gICAgICAgIC8vIHRocm91Z2ggc2V0UHJvdG90eXBlT2YgaW4gYSByZWxpYWJsZSB3YXlcbiAgICAgICAgLy8gd2hpY2ggbWVhbnMgaGVyZSBhICoqU2hhbSoqIGlzIG5lZWRlZCBpbnN0ZWFkXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gbm9kZWpzIDAuOCBhbmQgMC4xMCBhcmUgKGJ1Z2d5IGFuZC4uKSBmaW5lIGhlcmVcbiAgICAgIC8vIHByb2JhYmx5IENocm9tZSBvciBzb21lIG9sZCBNb2JpbGUgc3RvY2sgYnJvd3NlclxuICAgICAgc2V0ID0gZnVuY3Rpb24ocHJvdG8pIHtcbiAgICAgICAgdGhpc1ttYWdpY10gPSBwcm90bztcbiAgICAgIH07XG4gICAgICAvLyBwbGVhc2Ugbm90ZSB0aGF0IHRoaXMgd2lsbCAqKm5vdCoqIHdvcmtcbiAgICAgIC8vIGluIHRob3NlIGJyb3dzZXJzIHRoYXQgZG8gbm90IGluaGVyaXRcbiAgICAgIC8vIF9fcHJvdG9fXyBieSBtaXN0YWtlIGZyb20gT2JqZWN0LnByb3RvdHlwZVxuICAgICAgLy8gaW4gdGhlc2UgY2FzZXMgd2Ugc2hvdWxkIHByb2JhYmx5IHRocm93IGFuIGVycm9yXG4gICAgICAvLyBvciBhdCBsZWFzdCBiZSBpbmZvcm1lZCBhYm91dCB0aGUgaXNzdWVcbiAgICAgIHNldFByb3RvdHlwZU9mLnBvbHlmaWxsID0gc2V0UHJvdG90eXBlT2YoXG4gICAgICAgIHNldFByb3RvdHlwZU9mKHt9LCBudWxsKSxcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZVxuICAgICAgKSBpbnN0YW5jZW9mIE9iamVjdDtcbiAgICAgIC8vIHNldFByb3RvdHlwZU9mLnBvbHlmaWxsID09PSB0cnVlIG1lYW5zIGl0IHdvcmtzIGFzIG1lYW50XG4gICAgICAvLyBzZXRQcm90b3R5cGVPZi5wb2x5ZmlsbCA9PT0gZmFsc2UgbWVhbnMgaXQncyBub3QgMTAwJSByZWxpYWJsZVxuICAgICAgLy8gc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPT09IHVuZGVmaW5lZFxuICAgICAgLy8gb3JcbiAgICAgIC8vIHNldFByb3RvdHlwZU9mLnBvbHlmaWxsID09ICBudWxsIG1lYW5zIGl0J3Mgbm90IGEgcG9seWZpbGxcbiAgICAgIC8vIHdoaWNoIG1lYW5zIGl0IHdvcmtzIGFzIGV4cGVjdGVkXG4gICAgICAvLyB3ZSBjYW4gZXZlbiBkZWxldGUgT2JqZWN0LnByb3RvdHlwZS5fX3Byb3RvX187XG4gICAgfVxuICAgIHJldHVybiBzZXRQcm90b3R5cGVPZjtcbiAgfShPYmplY3QsICdfX3Byb3RvX18nKSk7XG59XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gZml4IFByb21pc2UgUHJvYmxlbSBvbiBKU0NvbnRleHQgb2YgaU9TN344XG4vLyBAc2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzU4NjZcblxuY29uc3QgeyBXWEVudmlyb25tZW50IH0gPSBnbG9iYWxcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChXWEVudmlyb25tZW50ICYmIFdYRW52aXJvbm1lbnQucGxhdGZvcm0gPT09ICdpT1MnKSB7XG4gIGdsb2JhbC5Qcm9taXNlID0gdW5kZWZpbmVkXG59XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIHRlc3QgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYgKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufVxuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSByZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCJ2YXIgJGl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgSVRFUkFUT1IgPSB3a3MoJ2l0ZXJhdG9yJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKTtcbnZhciBBcnJheVZhbHVlcyA9IEl0ZXJhdG9ycy5BcnJheTtcblxudmFyIERPTUl0ZXJhYmxlcyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiBmYWxzZSxcbiAgQ1NTVmFsdWVMaXN0OiBmYWxzZSxcbiAgQ2xpZW50UmVjdExpc3Q6IGZhbHNlLFxuICBET01SZWN0TGlzdDogZmFsc2UsXG4gIERPTVN0cmluZ0xpc3Q6IGZhbHNlLFxuICBET01Ub2tlbkxpc3Q6IHRydWUsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiBmYWxzZSxcbiAgRmlsZUxpc3Q6IGZhbHNlLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTEZvcm1FbGVtZW50OiBmYWxzZSxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IGZhbHNlLFxuICBNZWRpYUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBNaW1lVHlwZUFycmF5OiBmYWxzZSxcbiAgTmFtZWROb2RlTWFwOiBmYWxzZSxcbiAgTm9kZUxpc3Q6IHRydWUsXG4gIFBhaW50UmVxdWVzdExpc3Q6IGZhbHNlLFxuICBQbHVnaW46IGZhbHNlLFxuICBQbHVnaW5BcnJheTogZmFsc2UsXG4gIFNWR0xlbmd0aExpc3Q6IGZhbHNlLFxuICBTVkdOdW1iZXJMaXN0OiBmYWxzZSxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IGZhbHNlLFxuICBTVkdQb2ludExpc3Q6IGZhbHNlLFxuICBTVkdTdHJpbmdMaXN0OiBmYWxzZSxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogZmFsc2UsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IGZhbHNlLFxuICBTdHlsZVNoZWV0TGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIFRleHRUcmFja0N1ZUxpc3Q6IGZhbHNlLFxuICBUZXh0VHJhY2tMaXN0OiBmYWxzZSxcbiAgVG91Y2hMaXN0OiBmYWxzZVxufTtcblxuZm9yICh2YXIgY29sbGVjdGlvbnMgPSBnZXRLZXlzKERPTUl0ZXJhYmxlcyksIGkgPSAwOyBpIDwgY29sbGVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgdmFyIGV4cGxpY2l0ID0gRE9NSXRlcmFibGVzW05BTUVdO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGtleTtcbiAgaWYgKHByb3RvKSB7XG4gICAgaWYgKCFwcm90b1tJVEVSQVRPUl0pIGhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgaWYgKCFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgaWYgKGV4cGxpY2l0KSBmb3IgKGtleSBpbiAkaXRlcmF0b3JzKSBpZiAoIXByb3RvW2tleV0pIHJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcbiIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIE9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBpc05vZGUgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZTogZmFsc2UsIHY6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZTogdHJ1ZSwgdjogZSB9O1xuICB9XG59O1xuIiwidmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gTElCUkFSWSA/IGZ1bmN0aW9uIChhLCBiKSB7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufSA6IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpc1JlamVjdCkge1xuICBpZiAocHJvbWlzZS5fbikgcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciBvayA9IHByb21pc2UuX3MgPT0gMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIChyZWFjdGlvbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgaWYgKHByb21pc2UuX2ggPT0gMSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2M7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlYWN0aW9uO1xuICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkge1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZiAocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpIHJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCkge1xuICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdiB9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZiAoIXByb21pc2UuX2EpIHByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICB2YXIgdGhlbjtcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcmVqZWN0LmNhbGwoeyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX2EpIHRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fcykgbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgUHJvbWlzZTogJFByb21pc2UgfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZiAoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSkgcmV0dXJuIHg7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKHRoaXMsIHgpO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQGZpbGVPdmVydmlld1xuICogVGhpcyBmaWxlIHdpbGwgaGFjayBgY29uc29sZWAgbWV0aG9kcyBieSBgV1hFbnZpcm9ubWVudC5sb2dMZXZlbGAuXG4gKiBTbyB3ZSBjYW4gY29udHJvbCBob3cgbWFueSBhbmQgd2hpY2ggbWVzc2FnZXMgd2lsbCBiZSBzZW50IGJ5IGNoYW5nZSB0aGUgbG9nIGxldmVsLlxuICogQWRkaXRpb25hbGx5IGluIG5hdGl2ZSBwbGF0Zm9ybSB0aGUgbWVzc2FnZSBjb250ZW50IG11c3QgYmUgcHJpbWl0aXZlIHZhbHVlcyBhbmRcbiAqIHVzaW5nIGBuYXRpdmVMb2coLi4uYXJncywgbG9nTGV2ZWxNYXJrKWAgc28gd2UgY3JlYXRlIGEgbmV3IGBjb25zb2xlYCBvYmplY3QgaW5cbiAqIGdsb2JhbCBhZGQgYSBmb3JtYXQgcHJvY2VzcyBmb3IgaXRzIG1ldGhvZHMuXG4gKi9cblxuY29uc3QgTEVWRUxTID0gWydvZmYnLCAnZXJyb3InLCAnd2FybicsICdpbmZvJywgJ2xvZycsICdkZWJ1ZyddXG5sZXQgbGV2ZWxNYXAgPSB7fVxuXG5jb25zdCBvcmlnaW5hbENvbnNvbGUgPSBnbG9iYWwuY29uc29sZVxuXG4vKipcbiAqIEhhY2sgY29uc29sZSBmb3IgbmF0aXZlIGVudmlyb25tZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0TmF0aXZlQ29uc29sZSAoKSB7XG4gIGdlbmVyYXRlTGV2ZWxNYXAoKVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIC8vIG1vY2sgY29uc29sZSBpbiBuYXRpdmUgZW52aXJvbm1lbnRcbiAgaWYgKGdsb2JhbC5XWEVudmlyb25tZW50ICYmIGdsb2JhbC5XWEVudmlyb25tZW50LnBsYXRmb3JtICE9PSAnV2ViJykge1xuICAgIGdsb2JhbC5jb25zb2xlID0ge1xuICAgICAgZGVidWc6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmIChjaGVja0xldmVsKCdkZWJ1ZycpKSB7IGdsb2JhbC5uYXRpdmVMb2coLi4uZm9ybWF0KGFyZ3MpLCAnX19ERUJVRycpIH1cbiAgICAgIH0sXG4gICAgICBsb2c6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmIChjaGVja0xldmVsKCdsb2cnKSkgeyBnbG9iYWwubmF0aXZlTG9nKC4uLmZvcm1hdChhcmdzKSwgJ19fTE9HJykgfVxuICAgICAgfSxcbiAgICAgIGluZm86ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmIChjaGVja0xldmVsKCdpbmZvJykpIHsgZ2xvYmFsLm5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0lORk8nKSB9XG4gICAgICB9LFxuICAgICAgd2FybjogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKGNoZWNrTGV2ZWwoJ3dhcm4nKSkgeyBnbG9iYWwubmF0aXZlTG9nKC4uLmZvcm1hdChhcmdzKSwgJ19fV0FSTicpIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKGNoZWNrTGV2ZWwoJ2Vycm9yJykpIHsgZ2xvYmFsLm5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0VSUk9SJykgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFdlYiBvciBOb2RlXG4gIGVsc2Uge1xuICAgIGNvbnN0IHsgZGVidWcsIGxvZywgaW5mbywgd2FybiwgZXJyb3IgfSA9IGNvbnNvbGVcbiAgICBjb25zb2xlLl9fb3JpX18gPSB7IGRlYnVnLCBsb2csIGluZm8sIHdhcm4sIGVycm9yIH1cbiAgICBjb25zb2xlLmRlYnVnID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCdkZWJ1ZycpKSB7IGNvbnNvbGUuX19vcmlfXy5kZWJ1Zy5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCdsb2cnKSkgeyBjb25zb2xlLl9fb3JpX18ubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpIH1cbiAgICB9XG4gICAgY29uc29sZS5pbmZvID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCdpbmZvJykpIHsgY29uc29sZS5fX29yaV9fLmluZm8uYXBwbHkoY29uc29sZSwgYXJncykgfVxuICAgIH1cbiAgICBjb25zb2xlLndhcm4gPSAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ3dhcm4nKSkgeyBjb25zb2xlLl9fb3JpX18ud2Fybi5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IgPSAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ2Vycm9yJykpIHsgY29uc29sZS5fX29yaV9fLmVycm9yLmFwcGx5KGNvbnNvbGUsIGFyZ3MpIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldCBoYWNrZWQgY29uc29sZSB0byBvcmlnaW5hbC5cbiAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldE5hdGl2ZUNvbnNvbGUgKCkge1xuICBsZXZlbE1hcCA9IHt9XG4gIGdsb2JhbC5jb25zb2xlID0gb3JpZ2luYWxDb25zb2xlXG59XG5cbi8qKlxuICogR2VuZXJhdGUgbWFwIGZvciB3aGljaCB0eXBlcyBvZiBtZXNzYWdlIHdpbGwgYmUgc2VudCBpbiBhIGNlcnRhaW4gbWVzc2FnZSBsZXZlbFxuICogYXMgdGhlIG9yZGVyIG9mIExFVkVMUy5cbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVMZXZlbE1hcCAoKSB7XG4gIExFVkVMUy5mb3JFYWNoKGxldmVsID0+IHtcbiAgICBjb25zdCBsZXZlbEluZGV4ID0gTEVWRUxTLmluZGV4T2YobGV2ZWwpXG4gICAgbGV2ZWxNYXBbbGV2ZWxdID0ge31cbiAgICBMRVZFTFMuZm9yRWFjaCh0eXBlID0+IHtcbiAgICAgIGNvbnN0IHR5cGVJbmRleCA9IExFVkVMUy5pbmRleE9mKHR5cGUpXG4gICAgICBpZiAodHlwZUluZGV4IDw9IGxldmVsSW5kZXgpIHtcbiAgICAgICAgbGV2ZWxNYXBbbGV2ZWxdW3R5cGVdID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBjZXJ0YWluIHR5cGUgb2YgbWVzc2FnZSB3aWxsIGJlIHNlbnQgaW4gY3VycmVudCBsb2cgbGV2ZWwgb2YgZW52LlxuICogQHBhcmFtICB7c3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBjaGVja0xldmVsICh0eXBlKSB7XG4gIGNvbnN0IGxvZ0xldmVsID0gKGdsb2JhbC5XWEVudmlyb25tZW50ICYmIGdsb2JhbC5XWEVudmlyb25tZW50LmxvZ0xldmVsKSB8fCAnbG9nJ1xuICByZXR1cm4gbGV2ZWxNYXBbbG9nTGV2ZWxdICYmIGxldmVsTWFwW2xvZ0xldmVsXVt0eXBlXVxufVxuXG4vKipcbiAqIENvbnZlcnQgYWxsIGxvZyBhcmd1bWVudHMgaW50byBwcmltaXRpdmUgdmFsdWVzLlxuICogQHBhcmFtICB7YXJyYXl9IGFyZ3NcbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gZm9ybWF0IChhcmdzKSB7XG4gIHJldHVybiBhcmdzLm1hcCgodikgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcbiAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09PSAnW29iamVjdCBvYmplY3RdJykge1xuICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdiA9IFN0cmluZyh2KVxuICAgIH1cbiAgICByZXR1cm4gdlxuICB9KVxufVxuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQGZpbGVPdmVydmlld1xuICogUG9seWZpbGwgYHNldFRpbWVvdXRgIG9uIEFuZHJvaWQgVjggdXNpbmcgbmF0aXZlIG1ldGhvZFxuICogYHNldFRpbWVvdXROYXRpdmUoY2FsbGJhY2tJZCwgdGltZSlgIGFuZCBKUyBtZXRob2RcbiAqIGBzZXRUaW1lb3V0Q2FsbGJhY2soY2FsbGJhY2tJZClgLlxuICogVGhpcyBwb2x5ZmlsbCBpcyBvbmx5IHVzZWQgaW4gdmlydHVhbC1ET00gZGlmZiAmIGZsdXNoIGFnb3JpdGhtLiBOb3RcbiAqIGFjY2Vzc2VkIGJ5IEpTIEJ1bmRsZSBjb2RlIChUaGUgdGltZXIgQVBJcyBwb2x5ZmlsbCBmb3IgSlMgQnVuZGxlIGlzIGluXG4gKiBgaHRtbDUvZGVmYXVsdC9hcHAvY3RybC5qc2ApLlxuICovXG5cbmNvbnN0IG9yaWdpbmFsU2V0VGltZW91dCA9IGdsb2JhbC5zZXRUaW1lb3V0XG5jb25zdCBzZXRUaW1lb3V0TmF0aXZlID0gZ2xvYmFsLnNldFRpbWVvdXROYXRpdmVcblxuLyoqXG4gKiBTZXQgdXAgbmF0aXZlIHRpbWVyXG4gKi9cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5leHBvcnQgZnVuY3Rpb24gc2V0TmF0aXZlVGltZXIgKCkge1xuICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBzZXRUaW1lb3V0TmF0aXZlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgdGltZW91dE1hcCA9IHt9XG4gICAgbGV0IHRpbWVvdXRJZCA9IDBcblxuICAgIGdsb2JhbC5zZXRUaW1lb3V0ID0gKGNiLCB0aW1lKSA9PiB7XG4gICAgICB0aW1lb3V0TWFwWysrdGltZW91dElkXSA9IGNiXG4gICAgICBzZXRUaW1lb3V0TmF0aXZlKHRpbWVvdXRJZC50b1N0cmluZygpLCB0aW1lKVxuICAgIH1cblxuICAgIGdsb2JhbC5zZXRUaW1lb3V0Q2FsbGJhY2sgPSAoaWQpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdGltZW91dE1hcFtpZF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGltZW91dE1hcFtpZF0oKVxuICAgICAgICBkZWxldGUgdGltZW91dE1hcFtpZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldE5hdGl2ZVRpbWVyICgpIHtcbiAgZ2xvYmFsLnNldFRpbWVvdXQgPSBvcmlnaW5hbFNldFRpbWVvdXRcbiAgZ2xvYmFsLnNldFRpbWVvdXRDYWxsYmFjayA9IG51bGxcbn1cblxuc2V0TmF0aXZlVGltZXIoKVxuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIEZyZWV6ZSB0aGUgcHJvdG90eXBlIG9mIGphdmFzY3JpcHQgYnVpbGQtaW4gb2JqZWN0cy5cbiAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBmdW5jdGlvbiBmcmVlemVQcm90b3R5cGUgKCkge1xuICBPYmplY3QuZnJlZXplKE9iamVjdClcbiAgT2JqZWN0LmZyZWV6ZShBcnJheSlcblxuICAvLyBPYmplY3QuZnJlZXplKE9iamVjdC5wcm90b3R5cGUpXG4gIGZyZWV6ZU9iamVjdFByb3RvKClcbiAgT2JqZWN0LmZyZWV6ZShBcnJheS5wcm90b3R5cGUpXG4gIE9iamVjdC5mcmVlemUoU3RyaW5nLnByb3RvdHlwZSlcbiAgT2JqZWN0LmZyZWV6ZShOdW1iZXIucHJvdG90eXBlKVxuICBPYmplY3QuZnJlZXplKEJvb2xlYW4ucHJvdG90eXBlKVxuXG4gIC8vIE9iamVjdC5mcmVlemUoRXJyb3IucHJvdG90eXBlKVxuICBmcmVlemVFcnJvclByb3RvKClcbiAgT2JqZWN0LmZyZWV6ZShEYXRlLnByb3RvdHlwZSlcbiAgT2JqZWN0LmZyZWV6ZShSZWdFeHAucHJvdG90eXBlKVxufVxuXG5mdW5jdGlvbiBmcmVlemVPYmplY3RQcm90byAoKSB7XG4gIGNvbnN0IHByb3RvID0gT2JqZWN0LnByb3RvdHlwZVxuICBjb25zdCBwcm90b05hbWUgPSAnT2JqZWN0LnByb3RvdHlwZSdcbiAgZnJlZXplUHJvdG9Qcm9wZXJ0eShwcm90bywgJ19fZGVmaW5lR2V0dGVyX18nLCBwcm90b05hbWUpXG4gIGZyZWV6ZVByb3RvUHJvcGVydHkocHJvdG8sICdfX2RlZmluZVNldHRlcl9fJywgcHJvdG9OYW1lKVxuICBmcmVlemVQcm90b1Byb3BlcnR5KHByb3RvLCAnX19sb29rdXBHZXR0ZXJfXycsIHByb3RvTmFtZSlcbiAgZnJlZXplUHJvdG9Qcm9wZXJ0eShwcm90bywgJ19fbG9va3VwU2V0dGVyX18nLCBwcm90b05hbWUpXG4gIGZyZWV6ZVByb3RvUHJvcGVydHkocHJvdG8sICdjb25zdHJ1Y3RvcicsIHByb3RvTmFtZSlcbiAgZnJlZXplUHJvdG9Qcm9wZXJ0eShwcm90bywgJ2hhc093blByb3BlcnR5JywgcHJvdG9OYW1lKVxuICBmcmVlemVQcm90b1Byb3BlcnR5KHByb3RvLCAnaXNQcm90b3R5cGVPZicsIHByb3RvTmFtZSlcbiAgZnJlZXplUHJvdG9Qcm9wZXJ0eShwcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgcHJvdG9OYW1lKVxuICBmcmVlemVQcm90b1Byb3BlcnR5KHByb3RvLCAndG9Mb2NhbGVTdHJpbmcnLCBwcm90b05hbWUpXG4gIGZyZWV6ZVByb3RvUHJvcGVydHkocHJvdG8sICd0b1N0cmluZycsIHByb3RvTmFtZSlcbiAgZnJlZXplUHJvdG9Qcm9wZXJ0eShwcm90bywgJ3ZhbHVlT2YnLCBwcm90b05hbWUpXG4gIE9iamVjdC5zZWFsKHByb3RvKVxufVxuXG5mdW5jdGlvbiBmcmVlemVFcnJvclByb3RvICgpIHtcbiAgY29uc3QgcHJvdG8gPSBFcnJvci5wcm90b3R5cGVcbiAgY29uc3QgcHJvdG9OYW1lID0gJ0Vycm9yLnByb3RvdHlwZSdcbiAgZnJlZXplUHJvdG9Qcm9wZXJ0eShwcm90bywgJ25hbWUnLCBwcm90b05hbWUpXG4gIGZyZWV6ZVByb3RvUHJvcGVydHkocHJvdG8sICdtZXNzYWdlJywgcHJvdG9OYW1lKVxuICBmcmVlemVQcm90b1Byb3BlcnR5KHByb3RvLCAndG9TdHJpbmcnLCBwcm90b05hbWUpXG4gIGZyZWV6ZVByb3RvUHJvcGVydHkocHJvdG8sICdjb25zdHJ1Y3RvcicsIHByb3RvTmFtZSlcbiAgT2JqZWN0LnNlYWwocHJvdG8pXG59XG5cbmZ1bmN0aW9uIGZyZWV6ZVByb3RvUHJvcGVydHkgKHByb3RvLCBwcm9wZXJ0eU5hbWUsIHByb3RvTmFtZSkge1xuICBpZiAoIXByb3RvLmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IG9yaWdpbiA9IHByb3RvW3Byb3BlcnR5TmFtZV1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBwcm9wZXJ0eU5hbWUsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBvcmlnaW5cbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gcHJvdG8pIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYENhbm5vdCBhc3NpZ24gdG8gcmVhZCBvbmx5IHByb3BlcnR5ICR7cHJvcGVydHlOYW1lfSBvZiAke3Byb3RvTmFtZX1gKVxuICAgICAgfVxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgcHJvcGVydHlOYW1lLCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cbiAgfSlcbn1cbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0ICcuL2FycmF5RnJvbSdcbmltcG9ydCAnLi9vYmplY3RBc3NpZ24nXG5pbXBvcnQgJy4vb2JqZWN0U2V0UHJvdG90eXBlT2YnXG5cbi8vIGltcG9ydCBwcm9taXNlIGhhY2sgYW5kIHBvbHlmaWxsc1xuaW1wb3J0ICcuL3Byb21pc2UnXG5pbXBvcnQgJ2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZydcbmltcG9ydCAnY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InXG5pbXBvcnQgJ2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJ1xuaW1wb3J0ICdjb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UnXG5cbmV4cG9ydCAqIGZyb20gJy4vY29uc29sZSdcbmV4cG9ydCAqIGZyb20gJy4vc2V0VGltZW91dCdcbmV4cG9ydCAqIGZyb20gJy4vZnJlZXplJ1xuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogR2V0IGEgdW5pcXVlIGlkLlxuICovXG5sZXQgbmV4dE5vZGVSZWYgPSAxXG5leHBvcnQgZnVuY3Rpb24gdW5pcXVlSWQgKCkge1xuICByZXR1cm4gKG5leHROb2RlUmVmKyspLnRvU3RyaW5nKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cG9mICh2KSB7XG4gIGNvbnN0IHMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcbiAgcmV0dXJuIHMuc3Vic3RyaW5nKDgsIHMubGVuZ3RoIC0gMSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1ZmZlclRvQmFzZTY0IChidWZmZXIpIHtcbiAgaWYgKHR5cGVvZiBidG9hICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbiAgY29uc3Qgc3RyaW5nID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKFxuICAgIG5ldyBVaW50OEFycmF5KGJ1ZmZlciksXG4gICAgY29kZSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpXG4gICkuam9pbignJylcbiAgcmV0dXJuIGJ0b2Eoc3RyaW5nKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYXNlNjRUb0J1ZmZlciAoYmFzZTY0KSB7XG4gIGlmICh0eXBlb2YgYXRvYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBuZXcgQXJyYXlCdWZmZXIoMClcbiAgfVxuICBjb25zdCBzdHJpbmcgPSBhdG9iKGJhc2U2NCkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICBjb25zdCBhcnJheSA9IG5ldyBVaW50OEFycmF5KHN0cmluZy5sZW5ndGgpXG4gIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc3RyaW5nLCAoY2gsIGkpID0+IHtcbiAgICBhcnJheVtpXSA9IGNoLmNoYXJDb2RlQXQoMClcbiAgfSlcbiAgcmV0dXJuIGFycmF5LmJ1ZmZlclxufVxuIiwiaW1wb3J0IHsgdHlwb2YsIGJ1ZmZlclRvQmFzZTY0LCBiYXNlNjRUb0J1ZmZlciB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHByaW1pdGl2ZSB2YWx1ZS5cbiAqIEBwYXJhbSAge2FueX0gICAgICAgIHZcbiAqIEByZXR1cm4ge3ByaW1pdGl2ZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVByaW1pdGl2ZSAodikge1xuICBjb25zdCB0eXBlID0gdHlwb2YodilcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdVbmRlZmluZWQnOlxuICAgIGNhc2UgJ051bGwnOlxuICAgICAgcmV0dXJuICcnXG5cbiAgICBjYXNlICdSZWdFeHAnOlxuICAgICAgcmV0dXJuIHYudG9TdHJpbmcoKVxuICAgIGNhc2UgJ0RhdGUnOlxuICAgICAgcmV0dXJuIHYudG9JU09TdHJpbmcoKVxuXG4gICAgY2FzZSAnTnVtYmVyJzpcbiAgICBjYXNlICdTdHJpbmcnOlxuICAgIGNhc2UgJ0Jvb2xlYW4nOlxuICAgIGNhc2UgJ0FycmF5JzpcbiAgICBjYXNlICdPYmplY3QnOlxuICAgICAgcmV0dXJuIHZcblxuICAgIGNhc2UgJ0FycmF5QnVmZmVyJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdAdHlwZSc6ICdiaW5hcnknLFxuICAgICAgICBkYXRhVHlwZTogdHlwZSxcbiAgICAgICAgYmFzZTY0OiBidWZmZXJUb0Jhc2U2NCh2KVxuICAgICAgfVxuXG4gICAgY2FzZSAnSW50OEFycmF5JzpcbiAgICBjYXNlICdVaW50OEFycmF5JzpcbiAgICBjYXNlICdVaW50OENsYW1wZWRBcnJheSc6XG4gICAgY2FzZSAnSW50MTZBcnJheSc6XG4gICAgY2FzZSAnVWludDE2QXJyYXknOlxuICAgIGNhc2UgJ0ludDMyQXJyYXknOlxuICAgIGNhc2UgJ1VpbnQzMkFycmF5JzpcbiAgICBjYXNlICdGbG9hdDMyQXJyYXknOlxuICAgIGNhc2UgJ0Zsb2F0NjRBcnJheSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnQHR5cGUnOiAnYmluYXJ5JyxcbiAgICAgICAgZGF0YVR5cGU6IHR5cGUsXG4gICAgICAgIGJhc2U2NDogYnVmZmVyVG9CYXNlNjQodi5idWZmZXIpXG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVByaW1pdGl2ZSAoZGF0YSkge1xuICBpZiAodHlwb2YoZGF0YSkgPT09ICdPYmplY3QnKSB7XG4gICAgLy8gZGVjb2RlIGJhc2U2NCBpbnRvIGJpbmFyeVxuICAgIGlmIChkYXRhWydAdHlwZSddICYmIGRhdGFbJ0B0eXBlJ10gPT09ICdiaW5hcnknKSB7XG4gICAgICByZXR1cm4gYmFzZTY0VG9CdWZmZXIoZGF0YS5iYXNlNjQgfHwgJycpXG4gICAgfVxuXG4gICAgY29uc3QgcmVhbERhdGEgPSB7fVxuICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgIHJlYWxEYXRhW2tleV0gPSBkZWNvZGVQcmltaXRpdmUoZGF0YVtrZXldKVxuICAgIH1cbiAgICByZXR1cm4gcmVhbERhdGFcbiAgfVxuICBpZiAodHlwb2YoZGF0YSkgPT09ICdBcnJheScpIHtcbiAgICByZXR1cm4gZGF0YS5tYXAoZGVjb2RlUHJpbWl0aXZlKVxuICB9XG4gIHJldHVybiBkYXRhXG59XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgZGVjb2RlUHJpbWl0aXZlIH0gZnJvbSAnLi9ub3JtYWxpemUnXG5cbi8qKlxuICogRm9yIGdlbmVyYWwgY2FsbGJhY2sgbWFuYWdlbWVudCBvZiBhIGNlcnRhaW4gV2VleCBpbnN0YW5jZS5cbiAqIEJlY2F1c2UgZnVuY3Rpb24gY2FuIG5vdCBwYXNzZWQgaW50byBuYXRpdmUsIHNvIHdlIGNyZWF0ZSBjYWxsYmFja1xuICogY2FsbGJhY2sgaWQgZm9yIGVhY2ggZnVuY3Rpb24gYW5kIHBhc3MgdGhlIGNhbGxiYWNrIGlkIGludG8gbmF0aXZlXG4gKiBpbiBmYWN0LiBBbmQgd2hlbiBhIGNhbGxiYWNrIGNhbGxlZCBmcm9tIG5hdGl2ZSwgd2UgY2FuIGZpbmQgdGhlIHJlYWxcbiAqIGNhbGxiYWNrIHRocm91Z2ggdGhlIGNhbGxiYWNrIGlkIHdlIGhhdmUgcGFzc2VkIGJlZm9yZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbGJhY2tNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IgKGluc3RhbmNlSWQpIHtcbiAgICB0aGlzLmluc3RhbmNlSWQgPSBpbnN0YW5jZUlkXG4gICAgdGhpcy5sYXN0Q2FsbGJhY2tJZCA9IDBcbiAgICB0aGlzLmNhbGxiYWNrcyA9IHt9XG4gIH1cbiAgYWRkIChjYWxsYmFjaykge1xuICAgIHRoaXMubGFzdENhbGxiYWNrSWQrK1xuICAgIHRoaXMuY2FsbGJhY2tzW3RoaXMubGFzdENhbGxiYWNrSWRdID0gY2FsbGJhY2tcbiAgICByZXR1cm4gdGhpcy5sYXN0Q2FsbGJhY2tJZFxuICB9XG4gIHJlbW92ZSAoY2FsbGJhY2tJZCkge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5jYWxsYmFja3NbY2FsbGJhY2tJZF1cbiAgICBkZWxldGUgdGhpcy5jYWxsYmFja3NbY2FsbGJhY2tJZF1cbiAgICByZXR1cm4gY2FsbGJhY2tcbiAgfVxuICBjb25zdW1lIChjYWxsYmFja0lkLCBkYXRhLCBpZktlZXBBbGl2ZSkge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5jYWxsYmFja3NbY2FsbGJhY2tJZF1cbiAgICBpZiAodHlwZW9mIGlmS2VlcEFsaXZlID09PSAndW5kZWZpbmVkJyB8fCBpZktlZXBBbGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNhbGxiYWNrc1tjYWxsYmFja0lkXVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZGVjb2RlUHJpbWl0aXZlKGRhdGEpKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGNhbGxiYWNrIGlkIFwiJHtjYWxsYmFja0lkfVwiYClcbiAgfVxuICBjbG9zZSAoKSB7XG4gICAgdGhpcy5jYWxsYmFja3MgPSB7fVxuICB9XG59XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuY29uc3QgZG9jTWFwID0ge31cblxuLyoqXG4gKiBBZGQgYSBkb2N1bWVudCBvYmplY3QgaW50byBkb2NNYXAuXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkb2N1bWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkRG9jIChpZCwgZG9jKSB7XG4gIGlmIChpZCkge1xuICAgIGRvY01hcFtpZF0gPSBkb2NcbiAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgZG9jdW1lbnQgb2JqZWN0IGJ5IGlkLlxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREb2MgKGlkKSB7XG4gIHJldHVybiBkb2NNYXBbaWRdXG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBkb2N1bWVudCBmcm9tIGRvY01hcCBieSBpZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRG9jIChpZCkge1xuICBkZWxldGUgZG9jTWFwW2lkXVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiBHZXQgbGlzdGVuZXIgYnkgZG9jdW1lbnQgaWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge29iamVjdH0gbGlzdGVuZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExpc3RlbmVyIChpZCkge1xuICBjb25zdCBkb2MgPSBkb2NNYXBbaWRdXG4gIGlmIChkb2MgJiYgZG9jLmxpc3RlbmVyKSB7XG4gICAgcmV0dXJuIGRvYy5saXN0ZW5lclxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbi8qKlxuICogR2V0IFRhc2tDZW50ZXIgaW5zdGFuY2UgYnkgaWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge29iamVjdH0gVGFza0NlbnRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza0NlbnRlciAoaWQpIHtcbiAgY29uc3QgZG9jID0gZG9jTWFwW2lkXVxuICBpZiAoZG9jICYmIGRvYy50YXNrQ2VudGVyKSB7XG4gICAgcmV0dXJuIGRvYy50YXNrQ2VudGVyXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuLyoqXG4gKiBBcHBlbmQgYm9keSBub2RlIHRvIGRvY3VtZW50RWxlbWVudC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBkb2N1bWVudFxuICogQHBhcmFtIHtvYmplY3R9IG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBiZWZvcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZEJvZHkgKGRvYywgbm9kZSwgYmVmb3JlKSB7XG4gIGNvbnN0IHsgZG9jdW1lbnRFbGVtZW50IH0gPSBkb2NcblxuICBpZiAoZG9jdW1lbnRFbGVtZW50LnB1cmVDaGlsZHJlbi5sZW5ndGggPiAwIHx8IG5vZGUucGFyZW50Tm9kZSkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGNoaWxkcmVuID0gZG9jdW1lbnRFbGVtZW50LmNoaWxkcmVuXG4gIGNvbnN0IGJlZm9yZUluZGV4ID0gY2hpbGRyZW4uaW5kZXhPZihiZWZvcmUpXG4gIGlmIChiZWZvcmVJbmRleCA8IDApIHtcbiAgICBjaGlsZHJlbi5wdXNoKG5vZGUpXG4gIH1cbiAgZWxzZSB7XG4gICAgY2hpbGRyZW4uc3BsaWNlKGJlZm9yZUluZGV4LCAwLCBub2RlKVxuICB9XG5cbiAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICBpZiAobm9kZS5yb2xlID09PSAnYm9keScpIHtcbiAgICAgIG5vZGUuZG9jSWQgPSBkb2MuaWRcbiAgICAgIG5vZGUub3duZXJEb2N1bWVudCA9IGRvY1xuICAgICAgbm9kZS5wYXJlbnROb2RlID0gZG9jdW1lbnRFbGVtZW50XG4gICAgICBsaW5rUGFyZW50KG5vZGUsIGRvY3VtZW50RWxlbWVudClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gbm9kZVxuICAgICAgfSlcbiAgICAgIHNldEJvZHkoZG9jLCBub2RlKVxuICAgICAgbm9kZS5kb2NJZCA9IGRvYy5pZFxuICAgICAgbm9kZS5vd25lckRvY3VtZW50ID0gZG9jXG4gICAgICBsaW5rUGFyZW50KG5vZGUsIGRvY3VtZW50RWxlbWVudClcbiAgICAgIGRlbGV0ZSBkb2Mubm9kZU1hcFtub2RlLm5vZGVJZF1cbiAgICB9XG4gICAgZG9jdW1lbnRFbGVtZW50LnB1cmVDaGlsZHJlbi5wdXNoKG5vZGUpXG4gICAgc2VuZEJvZHkoZG9jLCBub2RlKVxuICB9XG4gIGVsc2Uge1xuICAgIG5vZGUucGFyZW50Tm9kZSA9IGRvY3VtZW50RWxlbWVudFxuICAgIGRvYy5ub2RlTWFwW25vZGUucmVmXSA9IG5vZGVcbiAgfVxufVxuXG5mdW5jdGlvbiBzZW5kQm9keSAoZG9jLCBub2RlKSB7XG4gIGNvbnN0IGJvZHkgPSBub2RlLnRvSlNPTigpXG4gIGNvbnN0IGNoaWxkcmVuID0gYm9keS5jaGlsZHJlblxuICBkZWxldGUgYm9keS5jaGlsZHJlblxuICBsZXQgcmVzdWx0ID0gZG9jLnRhc2tDZW50ZXIuc2VuZCgnZG9tJywgeyBhY3Rpb246ICdjcmVhdGVCb2R5JyB9LCBbYm9keV0pXG4gIGlmIChjaGlsZHJlbikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgcmVzdWx0ID0gZG9jLnRhc2tDZW50ZXIuc2VuZCgnZG9tJywgeyBhY3Rpb246ICdhZGRFbGVtZW50JyB9LCBbYm9keS5yZWYsIGNoaWxkLCAtMV0pXG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogU2V0IHVwIGJvZHkgbm9kZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBkb2N1bWVudFxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEJvZHkgKGRvYywgZWwpIHtcbiAgZWwucm9sZSA9ICdib2R5J1xuICBlbC5kZXB0aCA9IDFcbiAgZGVsZXRlIGRvYy5ub2RlTWFwW2VsLm5vZGVJZF1cbiAgZWwucmVmID0gJ19yb290J1xuICBkb2Mubm9kZU1hcC5fcm9vdCA9IGVsXG4gIGRvYy5ib2R5ID0gZWxcbn1cblxuLyoqXG4gKiBFc3RhYmxpc2ggdGhlIGNvbm5lY3Rpb24gYmV0d2VlbiBwYXJlbnQgYW5kIGNoaWxkIG5vZGUuXG4gKiBAcGFyYW0ge29iamVjdH0gY2hpbGQgbm9kZVxuICogQHBhcmFtIHtvYmplY3R9IHBhcmVudCBub2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaW5rUGFyZW50IChub2RlLCBwYXJlbnQpIHtcbiAgbm9kZS5wYXJlbnROb2RlID0gcGFyZW50XG4gIGlmIChwYXJlbnQuZG9jSWQpIHtcbiAgICBub2RlLmRvY0lkID0gcGFyZW50LmRvY0lkXG4gICAgbm9kZS5vd25lckRvY3VtZW50ID0gcGFyZW50Lm93bmVyRG9jdW1lbnRcbiAgICBub2RlLm93bmVyRG9jdW1lbnQubm9kZU1hcFtub2RlLm5vZGVJZF0gPSBub2RlXG4gICAgbm9kZS5kZXB0aCA9IHBhcmVudC5kZXB0aCArIDFcbiAgfVxuICBub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgIGxpbmtQYXJlbnQoY2hpbGQsIG5vZGUpXG4gIH0pXG59XG5cbi8qKlxuICogR2V0IHRoZSBuZXh0IHNpYmxpbmcgZWxlbWVudC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBub2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0RWxlbWVudCAobm9kZSkge1xuICB3aGlsZSAobm9kZSkge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICByZXR1cm4gbm9kZVxuICAgIH1cbiAgICBub2RlID0gbm9kZS5uZXh0U2libGluZ1xuICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBwcmV2aW91cyBzaWJsaW5nIGVsZW1lbnQuXG4gKiBAcGFyYW0ge29iamVjdH0gbm9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJldmlvdXNFbGVtZW50IChub2RlKSB7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIHJldHVybiBub2RlXG4gICAgfVxuICAgIG5vZGUgPSBub2RlLnByZXZpb3VzU2libGluZ1xuICB9XG59XG5cbi8qKlxuICogSW5zZXJ0IGEgbm9kZSBpbnRvIGxpc3QgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgbm9kZVxuICogQHBhcmFtIHthcnJheX0gbGlzdFxuICogQHBhcmFtIHtudW1iZXJ9IG5ld0luZGV4XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNoYW5nZVNpYmxpbmdcbiAqIEByZXR1cm4ge251bWJlcn0gbmV3SW5kZXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc2VydEluZGV4ICh0YXJnZXQsIGxpc3QsIG5ld0luZGV4LCBjaGFuZ2VTaWJsaW5nKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGlmIChuZXdJbmRleCA8IDApIHtcbiAgICBuZXdJbmRleCA9IDBcbiAgfVxuICBjb25zdCBiZWZvcmUgPSBsaXN0W25ld0luZGV4IC0gMV1cbiAgY29uc3QgYWZ0ZXIgPSBsaXN0W25ld0luZGV4XVxuICBsaXN0LnNwbGljZShuZXdJbmRleCwgMCwgdGFyZ2V0KVxuICBpZiAoY2hhbmdlU2libGluZykge1xuICAgIGJlZm9yZSAmJiAoYmVmb3JlLm5leHRTaWJsaW5nID0gdGFyZ2V0KVxuICAgIHRhcmdldC5wcmV2aW91c1NpYmxpbmcgPSBiZWZvcmVcbiAgICB0YXJnZXQubmV4dFNpYmxpbmcgPSBhZnRlclxuICAgIGFmdGVyICYmIChhZnRlci5wcmV2aW91c1NpYmxpbmcgPSB0YXJnZXQpXG4gIH1cbiAgcmV0dXJuIG5ld0luZGV4XG59XG5cbi8qKlxuICogTW92ZSB0aGUgbm9kZSB0byBhIG5ldyBpbmRleCBpbiBsaXN0LlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCBub2RlXG4gKiBAcGFyYW0ge2FycmF5fSBsaXN0XG4gKiBAcGFyYW0ge251bWJlcn0gbmV3SW5kZXhcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY2hhbmdlU2libGluZ1xuICogQHJldHVybiB7bnVtYmVyfSBuZXdJbmRleFxuICovXG5leHBvcnQgZnVuY3Rpb24gbW92ZUluZGV4ICh0YXJnZXQsIGxpc3QsIG5ld0luZGV4LCBjaGFuZ2VTaWJsaW5nKSB7XG4gIGNvbnN0IGluZGV4ID0gbGlzdC5pbmRleE9mKHRhcmdldClcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChjaGFuZ2VTaWJsaW5nKSB7XG4gICAgY29uc3QgYmVmb3JlID0gbGlzdFtpbmRleCAtIDFdXG4gICAgY29uc3QgYWZ0ZXIgPSBsaXN0W2luZGV4ICsgMV1cbiAgICBiZWZvcmUgJiYgKGJlZm9yZS5uZXh0U2libGluZyA9IGFmdGVyKVxuICAgIGFmdGVyICYmIChhZnRlci5wcmV2aW91c1NpYmxpbmcgPSBiZWZvcmUpXG4gIH1cbiAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpXG4gIGxldCBuZXdJbmRleEFmdGVyID0gbmV3SW5kZXhcbiAgaWYgKGluZGV4IDw9IG5ld0luZGV4KSB7XG4gICAgbmV3SW5kZXhBZnRlciA9IG5ld0luZGV4IC0gMVxuICB9XG4gIGNvbnN0IGJlZm9yZU5ldyA9IGxpc3RbbmV3SW5kZXhBZnRlciAtIDFdXG4gIGNvbnN0IGFmdGVyTmV3ID0gbGlzdFtuZXdJbmRleEFmdGVyXVxuICBsaXN0LnNwbGljZShuZXdJbmRleEFmdGVyLCAwLCB0YXJnZXQpXG4gIGlmIChjaGFuZ2VTaWJsaW5nKSB7XG4gICAgYmVmb3JlTmV3ICYmIChiZWZvcmVOZXcubmV4dFNpYmxpbmcgPSB0YXJnZXQpXG4gICAgdGFyZ2V0LnByZXZpb3VzU2libGluZyA9IGJlZm9yZU5ld1xuICAgIHRhcmdldC5uZXh0U2libGluZyA9IGFmdGVyTmV3XG4gICAgYWZ0ZXJOZXcgJiYgKGFmdGVyTmV3LnByZXZpb3VzU2libGluZyA9IHRhcmdldClcbiAgfVxuICBpZiAoaW5kZXggPT09IG5ld0luZGV4QWZ0ZXIpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICByZXR1cm4gbmV3SW5kZXhcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIG5vZGUgZnJvbSBsaXN0LlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCBub2RlXG4gKiBAcGFyYW0ge2FycmF5fSBsaXN0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNoYW5nZVNpYmxpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUluZGV4ICh0YXJnZXQsIGxpc3QsIGNoYW5nZVNpYmxpbmcpIHtcbiAgY29uc3QgaW5kZXggPSBsaXN0LmluZGV4T2YodGFyZ2V0KVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKGNoYW5nZVNpYmxpbmcpIHtcbiAgICBjb25zdCBiZWZvcmUgPSBsaXN0W2luZGV4IC0gMV1cbiAgICBjb25zdCBhZnRlciA9IGxpc3RbaW5kZXggKyAxXVxuICAgIGJlZm9yZSAmJiAoYmVmb3JlLm5leHRTaWJsaW5nID0gYWZ0ZXIpXG4gICAgYWZ0ZXIgJiYgKGFmdGVyLnByZXZpb3VzU2libGluZyA9IGJlZm9yZSlcbiAgfVxuICBsaXN0LnNwbGljZShpbmRleCwgMSlcbn1cbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyB1bmlxdWVJZCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0RG9jIH0gZnJvbSAnLi9vcGVyYXRpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5ub2RlSWQgPSB1bmlxdWVJZCgpXG4gICAgdGhpcy5yZWYgPSB0aGlzLm5vZGVJZFxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuICAgIHRoaXMucHVyZUNoaWxkcmVuID0gW11cbiAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsXG4gICAgdGhpcy5uZXh0U2libGluZyA9IG51bGxcbiAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGxcbiAgfVxuXG4gIC8qKlxuICAqIERlc3Ryb3kgY3VycmVudCBub2RlLCBhbmQgcmVtb3ZlIGl0c2VsZiBmb3JtIG5vZGVNYXAuXG4gICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIGNvbnN0IGRvYyA9IGdldERvYyh0aGlzLmRvY0lkKVxuICAgIGlmIChkb2MpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmRvY0lkXG4gICAgICBkZWxldGUgZG9jLm5vZGVNYXBbdGhpcy5ub2RlSWRdXG4gICAgfVxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuICB9XG59XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IGdldFRhc2tDZW50ZXIgfSBmcm9tICcuL29wZXJhdGlvbidcblxubGV0IEVsZW1lbnRcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEVsZW1lbnQgKEVsKSB7XG4gIEVsZW1lbnQgPSBFbFxufVxuXG4vKipcbiAqIEEgbWFwIHdoaWNoIHN0b3JlcyBhbGwgdHlwZSBvZiBlbGVtZW50cy5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmNvbnN0IHJlZ2lzdGVyZWRFbGVtZW50cyA9IHt9XG5cbi8qKlxuICogUmVnaXN0ZXIgYW4gZXh0ZW5kZWQgZWxlbWVudCB0eXBlIHdpdGggY29tcG9uZW50IG1ldGhvZHMuXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGUgICAgY29tcG9uZW50IHR5cGVcbiAqIEBwYXJhbSAge2FycmF5fSAgbWV0aG9kcyBhIGxpc3Qgb2YgbWV0aG9kIG5hbWVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckVsZW1lbnQgKHR5cGUsIG1ldGhvZHMpIHtcbiAgLy8gU2tpcCB3aGVuIG5vIHNwZWNpYWwgY29tcG9uZW50IG1ldGhvZHMuXG4gIGlmICghbWV0aG9kcyB8fCAhbWV0aG9kcy5sZW5ndGgpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIEluaXQgY29uc3RydWN0b3IuXG4gIGNsYXNzIFdlZXhFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7fVxuXG4gIC8vIEFkZCBtZXRob2RzIHRvIHByb3RvdHlwZS5cbiAgbWV0aG9kcy5mb3JFYWNoKG1ldGhvZE5hbWUgPT4ge1xuICAgIFdlZXhFbGVtZW50LnByb3RvdHlwZVttZXRob2ROYW1lXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICBjb25zdCB0YXNrQ2VudGVyID0gZ2V0VGFza0NlbnRlcih0aGlzLmRvY0lkKVxuICAgICAgaWYgKHRhc2tDZW50ZXIpIHtcbiAgICAgICAgcmV0dXJuIHRhc2tDZW50ZXIuc2VuZCgnY29tcG9uZW50Jywge1xuICAgICAgICAgIHJlZjogdGhpcy5yZWYsXG4gICAgICAgICAgY29tcG9uZW50OiB0eXBlLFxuICAgICAgICAgIG1ldGhvZDogbWV0aG9kTmFtZVxuICAgICAgICB9LCBhcmdzKVxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICAvLyBBZGQgdG8gZWxlbWVudCB0eXBlIG1hcC5cbiAgcmVnaXN0ZXJlZEVsZW1lbnRzW3R5cGVdID0gV2VleEVsZW1lbnRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXJFbGVtZW50ICh0eXBlKSB7XG4gIGRlbGV0ZSByZWdpc3RlcmVkRWxlbWVudHNbdHlwZV1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZXhFbGVtZW50ICh0eXBlKSB7XG4gIHJldHVybiByZWdpc3RlcmVkRWxlbWVudHNbdHlwZV1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzV2VleEVsZW1lbnQgKHR5cGUpIHtcbiAgcmV0dXJuICEhcmVnaXN0ZXJlZEVsZW1lbnRzW3R5cGVdXG59XG5cbi8qKlxuICogQ2xlYXIgYWxsIGVsZW1lbnQgdHlwZXMuIE9ubHkgZm9yIHRlc3RpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcldlZXhFbGVtZW50cyAoKSB7XG4gIGZvciAoY29uc3QgdHlwZSBpbiByZWdpc3RlcmVkRWxlbWVudHMpIHtcbiAgICB1bnJlZ2lzdGVyRWxlbWVudCh0eXBlKVxuICB9XG59XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJ1xuaW1wb3J0IHtcbiAgZ2V0RG9jLFxuICBnZXRUYXNrQ2VudGVyLFxuICBsaW5rUGFyZW50LFxuICBuZXh0RWxlbWVudCxcbiAgcHJldmlvdXNFbGVtZW50LFxuICBpbnNlcnRJbmRleCxcbiAgbW92ZUluZGV4LFxuICByZW1vdmVJbmRleFxufSBmcm9tICcuL29wZXJhdGlvbidcbmltcG9ydCB7IHVuaXF1ZUlkIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBnZXRXZWV4RWxlbWVudCwgc2V0RWxlbWVudCB9IGZyb20gJy4vV2VleEVsZW1lbnQnXG5cbmNvbnN0IERFRkFVTFRfVEFHX05BTUUgPSAnZGl2J1xuY29uc3QgQlVCQkxFX0VWRU5UUyA9IFtcbiAgJ2NsaWNrJywgJ2xvbmdwcmVzcycsICd0b3VjaHN0YXJ0JywgJ3RvdWNobW92ZScsICd0b3VjaGVuZCcsXG4gICdwYW5zdGFydCcsICdwYW5tb3ZlJywgJ3BhbmVuZCcsICdob3Jpem9udGFscGFuJywgJ3ZlcnRpY2FscGFuJywgJ3N3aXBlJ1xuXVxuXG5mdW5jdGlvbiByZWdpc3Rlck5vZGUgKGRvY0lkLCBub2RlKSB7XG4gIGNvbnN0IGRvYyA9IGdldERvYyhkb2NJZClcbiAgZG9jLm5vZGVNYXBbbm9kZS5ub2RlSWRdID0gbm9kZVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yICh0eXBlID0gREVGQVVMVF9UQUdfTkFNRSwgcHJvcHMsIGlzRXh0ZW5kZWQpIHtcbiAgICBzdXBlcigpXG5cbiAgICBjb25zdCBXZWV4RWxlbWVudCA9IGdldFdlZXhFbGVtZW50KHR5cGUpXG4gICAgaWYgKFdlZXhFbGVtZW50ICYmICFpc0V4dGVuZGVkKSB7XG4gICAgICByZXR1cm4gbmV3IFdlZXhFbGVtZW50KHByb3BzKVxuICAgIH1cblxuICAgIHByb3BzID0gcHJvcHMgfHwge31cbiAgICB0aGlzLm5vZGVUeXBlID0gMVxuICAgIHRoaXMubm9kZUlkID0gdW5pcXVlSWQoKVxuICAgIHRoaXMucmVmID0gdGhpcy5ub2RlSWRcbiAgICB0aGlzLnR5cGUgPSB0eXBlXG4gICAgdGhpcy5hdHRyID0gcHJvcHMuYXR0ciB8fCB7fVxuICAgIHRoaXMuc3R5bGUgPSBwcm9wcy5zdHlsZSB8fCB7fVxuICAgIHRoaXMuY2xhc3NTdHlsZSA9IHByb3BzLmNsYXNzU3R5bGUgfHwge31cbiAgICB0aGlzLmV2ZW50ID0ge31cbiAgICB0aGlzLmNoaWxkcmVuID0gW11cbiAgICB0aGlzLnB1cmVDaGlsZHJlbiA9IFtdXG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kIGEgY2hpbGQgbm9kZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IG5vZGVcbiAgICogQHJldHVybiB7dW5kZWZpbmVkIHwgbnVtYmVyfSB0aGUgc2lnbmFsIHNlbnQgYnkgbmF0aXZlXG4gICAqL1xuICBhcHBlbmRDaGlsZCAobm9kZSkge1xuICAgIGlmIChub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5wYXJlbnROb2RlICE9PSB0aGlzKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgbGlua1BhcmVudChub2RlLCB0aGlzKVxuICAgICAgaW5zZXJ0SW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5sZW5ndGgsIHRydWUpXG4gICAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgICByZWdpc3Rlck5vZGUodGhpcy5kb2NJZCwgbm9kZSlcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIGluc2VydEluZGV4KG5vZGUsIHRoaXMucHVyZUNoaWxkcmVuLCB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGgpXG4gICAgICAgIGNvbnN0IHRhc2tDZW50ZXIgPSBnZXRUYXNrQ2VudGVyKHRoaXMuZG9jSWQpXG4gICAgICAgIGlmICh0YXNrQ2VudGVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRhc2tDZW50ZXIuc2VuZChcbiAgICAgICAgICAgICdkb20nLFxuICAgICAgICAgICAgeyBhY3Rpb246ICdhZGRFbGVtZW50JyB9LFxuICAgICAgICAgICAgW3RoaXMucmVmLCBub2RlLnRvSlNPTigpLCAtMV1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBtb3ZlSW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5sZW5ndGgsIHRydWUpXG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IG1vdmVJbmRleChub2RlLCB0aGlzLnB1cmVDaGlsZHJlbiwgdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgICBjb25zdCB0YXNrQ2VudGVyID0gZ2V0VGFza0NlbnRlcih0aGlzLmRvY0lkKVxuICAgICAgICBpZiAodGFza0NlbnRlciAmJiBpbmRleCA+PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRhc2tDZW50ZXIuc2VuZChcbiAgICAgICAgICAgICdkb20nLFxuICAgICAgICAgICAgeyBhY3Rpb246ICdtb3ZlRWxlbWVudCcgfSxcbiAgICAgICAgICAgIFtub2RlLnJlZiwgdGhpcy5yZWYsIGluZGV4XVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnQgYSBub2RlIGJlZm9yZSBzcGVjaWZpZWQgbm9kZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IG5vZGVcbiAgICogQHBhcmFtIHtvYmplY3R9IGJlZm9yZVxuICAgKiBAcmV0dXJuIHt1bmRlZmluZWQgfCBudW1iZXJ9IHRoZSBzaWduYWwgc2VudCBieSBuYXRpdmVcbiAgICovXG4gIGluc2VydEJlZm9yZSAobm9kZSwgYmVmb3JlKSB7XG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZSAmJiBub2RlLnBhcmVudE5vZGUgIT09IHRoaXMpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAobm9kZSA9PT0gYmVmb3JlIHx8IChub2RlLm5leHRTaWJsaW5nICYmIG5vZGUubmV4dFNpYmxpbmcgPT09IGJlZm9yZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgbGlua1BhcmVudChub2RlLCB0aGlzKVxuICAgICAgaW5zZXJ0SW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5pbmRleE9mKGJlZm9yZSksIHRydWUpXG4gICAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgICByZWdpc3Rlck5vZGUodGhpcy5kb2NJZCwgbm9kZSlcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIGNvbnN0IHB1cmVCZWZvcmUgPSBuZXh0RWxlbWVudChiZWZvcmUpXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5zZXJ0SW5kZXgoXG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbixcbiAgICAgICAgICBwdXJlQmVmb3JlXG4gICAgICAgICAgPyB0aGlzLnB1cmVDaGlsZHJlbi5pbmRleE9mKHB1cmVCZWZvcmUpXG4gICAgICAgICAgOiB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGhcbiAgICAgICAgKVxuICAgICAgICBjb25zdCB0YXNrQ2VudGVyID0gZ2V0VGFza0NlbnRlcih0aGlzLmRvY0lkKVxuICAgICAgICBpZiAodGFza0NlbnRlcikge1xuICAgICAgICAgIHJldHVybiB0YXNrQ2VudGVyLnNlbmQoXG4gICAgICAgICAgICAnZG9tJyxcbiAgICAgICAgICAgIHsgYWN0aW9uOiAnYWRkRWxlbWVudCcgfSxcbiAgICAgICAgICAgIFt0aGlzLnJlZiwgbm9kZS50b0pTT04oKSwgaW5kZXhdXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbW92ZUluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4uaW5kZXhPZihiZWZvcmUpLCB0cnVlKVxuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgY29uc3QgcHVyZUJlZm9yZSA9IG5leHRFbGVtZW50KGJlZm9yZSlcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgY29uc3QgaW5kZXggPSBtb3ZlSW5kZXgoXG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbixcbiAgICAgICAgICBwdXJlQmVmb3JlXG4gICAgICAgICAgPyB0aGlzLnB1cmVDaGlsZHJlbi5pbmRleE9mKHB1cmVCZWZvcmUpXG4gICAgICAgICAgOiB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGhcbiAgICAgICAgKVxuICAgICAgICBjb25zdCB0YXNrQ2VudGVyID0gZ2V0VGFza0NlbnRlcih0aGlzLmRvY0lkKVxuICAgICAgICBpZiAodGFza0NlbnRlciAmJiBpbmRleCA+PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRhc2tDZW50ZXIuc2VuZChcbiAgICAgICAgICAgICdkb20nLFxuICAgICAgICAgICAgeyBhY3Rpb246ICdtb3ZlRWxlbWVudCcgfSxcbiAgICAgICAgICAgIFtub2RlLnJlZiwgdGhpcy5yZWYsIGluZGV4XVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnQgYSBub2RlIGFmdGVyIHNwZWNpZmllZCBub2RlLlxuICAgKiBAcGFyYW0ge29iamVjdH0gbm9kZVxuICAgKiBAcGFyYW0ge29iamVjdH0gYWZ0ZXJcbiAgICogQHJldHVybiB7dW5kZWZpbmVkIHwgbnVtYmVyfSB0aGUgc2lnbmFsIHNlbnQgYnkgbmF0aXZlXG4gICAqL1xuICBpbnNlcnRBZnRlciAobm9kZSwgYWZ0ZXIpIHtcbiAgICBpZiAobm9kZS5wYXJlbnROb2RlICYmIG5vZGUucGFyZW50Tm9kZSAhPT0gdGhpcykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChub2RlID09PSBhZnRlciB8fCAobm9kZS5wcmV2aW91c1NpYmxpbmcgJiYgbm9kZS5wcmV2aW91c1NpYmxpbmcgPT09IGFmdGVyKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICBsaW5rUGFyZW50KG5vZGUsIHRoaXMpXG4gICAgICBpbnNlcnRJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmluZGV4T2YoYWZ0ZXIpICsgMSwgdHJ1ZSlcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgICByZWdpc3Rlck5vZGUodGhpcy5kb2NJZCwgbm9kZSlcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5zZXJ0SW5kZXgoXG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbixcbiAgICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbi5pbmRleE9mKHByZXZpb3VzRWxlbWVudChhZnRlcikpICsgMVxuICAgICAgICApXG4gICAgICAgIGNvbnN0IHRhc2tDZW50ZXIgPSBnZXRUYXNrQ2VudGVyKHRoaXMuZG9jSWQpXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIGlmICh0YXNrQ2VudGVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRhc2tDZW50ZXIuc2VuZChcbiAgICAgICAgICAgICdkb20nLFxuICAgICAgICAgICAgeyBhY3Rpb246ICdhZGRFbGVtZW50JyB9LFxuICAgICAgICAgICAgW3RoaXMucmVmLCBub2RlLnRvSlNPTigpLCBpbmRleF1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBtb3ZlSW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5pbmRleE9mKGFmdGVyKSArIDEsIHRydWUpXG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IG1vdmVJbmRleChcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLFxuICAgICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLmluZGV4T2YocHJldmlvdXNFbGVtZW50KGFmdGVyKSkgKyAxXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgdGFza0NlbnRlciA9IGdldFRhc2tDZW50ZXIodGhpcy5kb2NJZClcbiAgICAgICAgaWYgKHRhc2tDZW50ZXIgJiYgaW5kZXggPj0gMCkge1xuICAgICAgICAgIHJldHVybiB0YXNrQ2VudGVyLnNlbmQoXG4gICAgICAgICAgICAnZG9tJyxcbiAgICAgICAgICAgIHsgYWN0aW9uOiAnbW92ZUVsZW1lbnQnIH0sXG4gICAgICAgICAgICBbbm9kZS5yZWYsIHRoaXMucmVmLCBpbmRleF1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgY2hpbGQgbm9kZSwgYW5kIGRlY2lkZSB3aGV0aGVyIGl0IHNob3VsZCBiZSBkZXN0cm95ZWQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBub2RlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJlc2VydmVkXG4gICAqL1xuICByZW1vdmVDaGlsZCAobm9kZSwgcHJlc2VydmVkKSB7XG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgcmVtb3ZlSW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdHJ1ZSlcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIHJlbW92ZUluZGV4KG5vZGUsIHRoaXMucHVyZUNoaWxkcmVuKVxuICAgICAgICBjb25zdCB0YXNrQ2VudGVyID0gZ2V0VGFza0NlbnRlcih0aGlzLmRvY0lkKVxuICAgICAgICBpZiAodGFza0NlbnRlcikge1xuICAgICAgICAgIHRhc2tDZW50ZXIuc2VuZChcbiAgICAgICAgICAgICdkb20nLFxuICAgICAgICAgICAgeyBhY3Rpb246ICdyZW1vdmVFbGVtZW50JyB9LFxuICAgICAgICAgICAgW25vZGUucmVmXVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXByZXNlcnZlZCkge1xuICAgICAgbm9kZS5kZXN0cm95KClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIGNoaWxkIG5vZGVzLlxuICAgKi9cbiAgY2xlYXIgKCkge1xuICAgIGNvbnN0IHRhc2tDZW50ZXIgPSBnZXRUYXNrQ2VudGVyKHRoaXMuZG9jSWQpXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAodGFza0NlbnRlcikge1xuICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4uZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgdGFza0NlbnRlci5zZW5kKFxuICAgICAgICAgICdkb20nLFxuICAgICAgICAgIHsgYWN0aW9uOiAncmVtb3ZlRWxlbWVudCcgfSxcbiAgICAgICAgICBbbm9kZS5yZWZdXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgfVxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChub2RlID0+IHtcbiAgICAgIG5vZGUuZGVzdHJveSgpXG4gICAgfSlcbiAgICB0aGlzLmNoaWxkcmVuLmxlbmd0aCA9IDBcbiAgICB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGggPSAwXG4gIH1cblxuICAvKipcbiAgICogU2V0IGFuIGF0dHJpYnV0ZSwgYW5kIGRlY2lkZSB3aGV0aGVyIHRoZSB0YXNrIHNob3VsZCBiZSBzZW5kIHRvIG5hdGl2ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBzaWxlbnRcbiAgICovXG4gIHNldEF0dHIgKGtleSwgdmFsdWUsIHNpbGVudCkge1xuICAgIGlmICh0aGlzLmF0dHJba2V5XSA9PT0gdmFsdWUgJiYgc2lsZW50ICE9PSBmYWxzZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuYXR0cltrZXldID0gdmFsdWVcbiAgICBjb25zdCB0YXNrQ2VudGVyID0gZ2V0VGFza0NlbnRlcih0aGlzLmRvY0lkKVxuICAgIGlmICghc2lsZW50ICYmIHRhc2tDZW50ZXIpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHt9XG4gICAgICByZXN1bHRba2V5XSA9IHZhbHVlXG4gICAgICB0YXNrQ2VudGVyLnNlbmQoXG4gICAgICAgICdkb20nLFxuICAgICAgICB7IGFjdGlvbjogJ3VwZGF0ZUF0dHJzJyB9LFxuICAgICAgICBbdGhpcy5yZWYsIHJlc3VsdF1cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgc3R5bGUgcHJvcGVydHksIGFuZCBkZWNpZGUgd2hldGhlciB0aGUgdGFzayBzaG91bGQgYmUgc2VuZCB0byBuYXRpdmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2lsZW50XG4gICAqL1xuICBzZXRTdHlsZSAoa2V5LCB2YWx1ZSwgc2lsZW50KSB7XG4gICAgaWYgKHRoaXMuc3R5bGVba2V5XSA9PT0gdmFsdWUgJiYgc2lsZW50ICE9PSBmYWxzZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuc3R5bGVba2V5XSA9IHZhbHVlXG4gICAgY29uc3QgdGFza0NlbnRlciA9IGdldFRhc2tDZW50ZXIodGhpcy5kb2NJZClcbiAgICBpZiAoIXNpbGVudCAmJiB0YXNrQ2VudGVyKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSB7fVxuICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZVxuICAgICAgdGFza0NlbnRlci5zZW5kKFxuICAgICAgICAnZG9tJyxcbiAgICAgICAgeyBhY3Rpb246ICd1cGRhdGVTdHlsZScgfSxcbiAgICAgICAgW3RoaXMucmVmLCByZXN1bHRdXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBzdHlsZSBwcm9wZXJ0aWVzIGZyb20gY2xhc3MuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjbGFzc1N0eWxlXG4gICAqL1xuICBzZXRDbGFzc1N0eWxlIChjbGFzc1N0eWxlKSB7XG4gICAgLy8gcmVzZXQgcHJldmlvdXMgY2xhc3Mgc3R5bGUgdG8gZW1wdHkgc3RyaW5nXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jbGFzc1N0eWxlKSB7XG4gICAgICB0aGlzLmNsYXNzU3R5bGVba2V5XSA9ICcnXG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmNsYXNzU3R5bGUsIGNsYXNzU3R5bGUpXG4gICAgY29uc3QgdGFza0NlbnRlciA9IGdldFRhc2tDZW50ZXIodGhpcy5kb2NJZClcbiAgICBpZiAodGFza0NlbnRlcikge1xuICAgICAgdGFza0NlbnRlci5zZW5kKFxuICAgICAgICAnZG9tJyxcbiAgICAgICAgeyBhY3Rpb246ICd1cGRhdGVTdHlsZScgfSxcbiAgICAgICAgW3RoaXMucmVmLCB0aGlzLnRvU3R5bGUoKV1cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGFuIGV2ZW50IGhhbmRsZXIuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCB0eXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGV2ZW50IGhhbmRsZXJcbiAgICovXG4gIGFkZEV2ZW50ICh0eXBlLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50W3R5cGVdKSB7XG4gICAgICB0aGlzLmV2ZW50W3R5cGVdID0gaGFuZGxlclxuICAgICAgY29uc3QgdGFza0NlbnRlciA9IGdldFRhc2tDZW50ZXIodGhpcy5kb2NJZClcbiAgICAgIGlmICh0YXNrQ2VudGVyKSB7XG4gICAgICAgIHRhc2tDZW50ZXIuc2VuZChcbiAgICAgICAgICAnZG9tJyxcbiAgICAgICAgICB7IGFjdGlvbjogJ2FkZEV2ZW50JyB9LFxuICAgICAgICAgIFt0aGlzLnJlZiwgdHlwZV1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW4gZXZlbnQgaGFuZGxlci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IHR5cGVcbiAgICovXG4gIHJlbW92ZUV2ZW50ICh0eXBlKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRbdHlwZV0pIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50W3R5cGVdXG4gICAgICBjb25zdCB0YXNrQ2VudGVyID0gZ2V0VGFza0NlbnRlcih0aGlzLmRvY0lkKVxuICAgICAgaWYgKHRhc2tDZW50ZXIpIHtcbiAgICAgICAgdGFza0NlbnRlci5zZW5kKFxuICAgICAgICAgICdkb20nLFxuICAgICAgICAgIHsgYWN0aW9uOiAncmVtb3ZlRXZlbnQnIH0sXG4gICAgICAgICAgW3RoaXMucmVmLCB0eXBlXVxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmUgYW4gZXZlbnQgbWFudWFsbHkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIHR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZSBoYW5kbGVyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNCdWJibGUgd2hldGhlciBvciBub3QgZXZlbnQgYnViYmxlXG4gICAqIEByZXR1cm4ge30gYW55dGhpbmcgcmV0dXJuZWQgYnkgaGFuZGxlciBmdW5jdGlvblxuICAgKi9cbiAgZmlyZUV2ZW50ICh0eXBlLCBlLCBpc0J1YmJsZSkge1xuICAgIGxldCByZXN1bHQgPSBudWxsXG4gICAgbGV0IGlzU3RvcFByb3BhZ2F0aW9uID0gZmFsc2VcbiAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5ldmVudFt0eXBlXVxuICAgIGlmIChoYW5kbGVyICYmIGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uID0gKCkgPT4ge1xuICAgICAgICBpc1N0b3BQcm9wYWdhdGlvbiA9IHRydWVcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGhhbmRsZXIuY2FsbCh0aGlzLCBlKVxuICAgIH1cblxuICAgIGlmICghaXNTdG9wUHJvcGFnYXRpb25cbiAgICAgICYmIGlzQnViYmxlXG4gICAgICAmJiBCVUJCTEVfRVZFTlRTLmluY2x1ZGVzKHR5cGUpXG4gICAgICAmJiB0aGlzLnBhcmVudE5vZGVcbiAgICAgICYmIHRoaXMucGFyZW50Tm9kZS5maXJlRXZlbnQpIHtcbiAgICAgIGUuY3VycmVudFRhcmdldCA9IHRoaXMucGFyZW50Tm9kZVxuICAgICAgdGhpcy5wYXJlbnROb2RlLmZpcmVFdmVudCh0eXBlLCBlLCBpc0J1YmJsZSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBzdHlsZXMgb2YgY3VycmVudCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IHN0eWxlXG4gICAqL1xuICB0b1N0eWxlICgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jbGFzc1N0eWxlLCB0aGlzLnN0eWxlKVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgY3VycmVudCBlbGVtZW50IHRvIEpTT04gbGlrZSBvYmplY3QuXG4gICAqIEByZXR1cm4ge29iamVjdH0gZWxlbWVudFxuICAgKi9cbiAgdG9KU09OICgpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICByZWY6IHRoaXMucmVmLnRvU3RyaW5nKCksXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBhdHRyOiB0aGlzLmF0dHIsXG4gICAgICBzdHlsZTogdGhpcy50b1N0eWxlKClcbiAgICB9XG4gICAgY29uc3QgZXZlbnQgPSBPYmplY3Qua2V5cyh0aGlzLmV2ZW50KVxuICAgIGlmIChldmVudC5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdC5ldmVudCA9IGV2ZW50XG4gICAgfVxuICAgIGlmICh0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdC5jaGlsZHJlbiA9IHRoaXMucHVyZUNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkLnRvSlNPTigpKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCB0byBIVE1MIGVsZW1lbnQgdGFnIHN0cmluZy5cbiAgICogQHJldHVybiB7c3Rpcm5nfSBodG1sXG4gICAqL1xuICB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuICc8JyArIHRoaXMudHlwZSArXG4gICAgJyBhdHRyPScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmF0dHIpICtcbiAgICAnIHN0eWxlPScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnRvU3R5bGUoKSkgKyAnPicgK1xuICAgIHRoaXMucHVyZUNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkLnRvU3RyaW5nKCkpLmpvaW4oJycpICtcbiAgICAnPC8nICsgdGhpcy50eXBlICsgJz4nXG4gIH1cbn1cblxuc2V0RWxlbWVudChFbGVtZW50KVxuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBDYWxsYmFja01hbmFnZXIgZnJvbSAnLi9DYWxsYmFja01hbmFnZXInXG5pbXBvcnQgRWxlbWVudCBmcm9tICcuLi92ZG9tL0VsZW1lbnQnXG5pbXBvcnQgeyB0eXBvZiB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgbm9ybWFsaXplUHJpbWl0aXZlIH0gZnJvbSAnLi9ub3JtYWxpemUnXG5cbmxldCBmYWxsYmFjayA9IGZ1bmN0aW9uICgpIHt9XG5cbi8vIFRoZSBBUEkgb2YgVGFza0NlbnRlciB3b3VsZCBiZSByZS1kZXNpZ24uXG5leHBvcnQgY2xhc3MgVGFza0NlbnRlciB7XG4gIGNvbnN0cnVjdG9yIChpZCwgc2VuZFRhc2tzKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdpbnN0YW5jZUlkJywge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBpZFxuICAgIH0pXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdjYWxsYmFja01hbmFnZXInLCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IG5ldyBDYWxsYmFja01hbmFnZXIoaWQpXG4gICAgfSlcbiAgICBmYWxsYmFjayA9IHNlbmRUYXNrcyB8fCBmdW5jdGlvbiAoKSB7fVxuICB9XG5cbiAgY2FsbGJhY2sgKGNhbGxiYWNrSWQsIGRhdGEsIGlmS2VlcEFsaXZlKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbGJhY2tNYW5hZ2VyLmNvbnN1bWUoY2FsbGJhY2tJZCwgZGF0YSwgaWZLZWVwQWxpdmUpXG4gIH1cblxuICBkZXN0cm95Q2FsbGJhY2sgKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrTWFuYWdlci5jbG9zZSgpXG4gIH1cblxuICAvKipcbiAgICogTm9ybWFsaXplIGEgdmFsdWUuIFNwZWNpYWxseSwgaWYgdGhlIHZhbHVlIGlzIGEgZnVuY3Rpb24sIHRoZW4gZ2VuZXJhdGUgYSBmdW5jdGlvbiBpZFxuICAgKiBhbmQgc2F2ZSBpdCB0byBgQ2FsbGJhY2tNYW5hZ2VyYCwgYXQgbGFzdCByZXR1cm4gdGhlIGZ1bmN0aW9uIGlkLlxuICAgKiBAcGFyYW0gIHthbnl9ICAgICAgICB2XG4gICAqIEByZXR1cm4ge3ByaW1pdGl2ZX1cbiAgICovXG4gIG5vcm1hbGl6ZSAodikge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBvZih2KVxuICAgIGlmICh2ICYmIHYgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICByZXR1cm4gdi5yZWZcbiAgICB9XG4gICAgaWYgKHYgJiYgdi5faXNWdWUgJiYgdi4kZWwgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICByZXR1cm4gdi4kZWwucmVmXG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnRnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWxsYmFja01hbmFnZXIuYWRkKHYpLnRvU3RyaW5nKClcbiAgICB9XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVByaW1pdGl2ZSh2KVxuICB9XG5cbiAgc2VuZCAodHlwZSwgcGFyYW1zLCBhcmdzLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBhY3Rpb24sIGNvbXBvbmVudCwgcmVmLCBtb2R1bGUsIG1ldGhvZCB9ID0gcGFyYW1zXG5cbiAgICBhcmdzID0gYXJncy5tYXAoYXJnID0+IHRoaXMubm9ybWFsaXplKGFyZykpXG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2RvbSc6XG4gICAgICAgIHJldHVybiB0aGlzW2FjdGlvbl0odGhpcy5pbnN0YW5jZUlkLCBhcmdzKVxuICAgICAgY2FzZSAnY29tcG9uZW50JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50SGFuZGxlcih0aGlzLmluc3RhbmNlSWQsIHJlZiwgbWV0aG9kLCBhcmdzLCBPYmplY3QuYXNzaWduKHsgY29tcG9uZW50IH0sIG9wdGlvbnMpKVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlSGFuZGxlcih0aGlzLmluc3RhbmNlSWQsIG1vZHVsZSwgbWV0aG9kLCBhcmdzLCBvcHRpb25zKVxuICAgIH1cbiAgfVxuXG4gIGNhbGxET00gKGFjdGlvbiwgYXJncykge1xuICAgIHJldHVybiB0aGlzW2FjdGlvbl0odGhpcy5pbnN0YW5jZUlkLCBhcmdzKVxuICB9XG5cbiAgY2FsbENvbXBvbmVudCAocmVmLCBtZXRob2QsIGFyZ3MsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRIYW5kbGVyKHRoaXMuaW5zdGFuY2VJZCwgcmVmLCBtZXRob2QsIGFyZ3MsIG9wdGlvbnMpXG4gIH1cblxuICBjYWxsTW9kdWxlIChtb2R1bGUsIG1ldGhvZCwgYXJncywgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLm1vZHVsZUhhbmRsZXIodGhpcy5pbnN0YW5jZUlkLCBtb2R1bGUsIG1ldGhvZCwgYXJncywgb3B0aW9ucylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCAoKSB7XG4gIGNvbnN0IERPTV9NRVRIT0RTID0ge1xuICAgIGNyZWF0ZUZpbmlzaDogZ2xvYmFsLmNhbGxDcmVhdGVGaW5pc2gsXG4gICAgdXBkYXRlRmluaXNoOiBnbG9iYWwuY2FsbFVwZGF0ZUZpbmlzaCxcbiAgICByZWZyZXNoRmluaXNoOiBnbG9iYWwuY2FsbFJlZnJlc2hGaW5pc2gsXG5cbiAgICBjcmVhdGVCb2R5OiBnbG9iYWwuY2FsbENyZWF0ZUJvZHksXG5cbiAgICBhZGRFbGVtZW50OiBnbG9iYWwuY2FsbEFkZEVsZW1lbnQsXG4gICAgcmVtb3ZlRWxlbWVudDogZ2xvYmFsLmNhbGxSZW1vdmVFbGVtZW50LFxuICAgIG1vdmVFbGVtZW50OiBnbG9iYWwuY2FsbE1vdmVFbGVtZW50LFxuICAgIHVwZGF0ZUF0dHJzOiBnbG9iYWwuY2FsbFVwZGF0ZUF0dHJzLFxuICAgIHVwZGF0ZVN0eWxlOiBnbG9iYWwuY2FsbFVwZGF0ZVN0eWxlLFxuXG4gICAgYWRkRXZlbnQ6IGdsb2JhbC5jYWxsQWRkRXZlbnQsXG4gICAgcmVtb3ZlRXZlbnQ6IGdsb2JhbC5jYWxsUmVtb3ZlRXZlbnRcbiAgfVxuICBjb25zdCBwcm90byA9IFRhc2tDZW50ZXIucHJvdG90eXBlXG5cbiAgZm9yIChjb25zdCBuYW1lIGluIERPTV9NRVRIT0RTKSB7XG4gICAgY29uc3QgbWV0aG9kID0gRE9NX01FVEhPRFNbbmFtZV1cbiAgICBwcm90b1tuYW1lXSA9IG1ldGhvZCA/XG4gICAgICAoaWQsIGFyZ3MpID0+IG1ldGhvZChpZCwgLi4uYXJncykgOlxuICAgICAgKGlkLCBhcmdzKSA9PiBmYWxsYmFjayhpZCwgW3sgbW9kdWxlOiAnZG9tJywgbWV0aG9kOiBuYW1lLCBhcmdzIH1dLCAnLTEnKVxuICB9XG5cbiAgcHJvdG8uY29tcG9uZW50SGFuZGxlciA9IGdsb2JhbC5jYWxsTmF0aXZlQ29tcG9uZW50IHx8XG4gICAgKChpZCwgcmVmLCBtZXRob2QsIGFyZ3MsIG9wdGlvbnMpID0+XG4gICAgICBmYWxsYmFjayhpZCwgW3sgY29tcG9uZW50OiBvcHRpb25zLmNvbXBvbmVudCwgcmVmLCBtZXRob2QsIGFyZ3MgfV0pKVxuXG4gIHByb3RvLm1vZHVsZUhhbmRsZXIgPSBnbG9iYWwuY2FsbE5hdGl2ZU1vZHVsZSB8fFxuICAgICgoaWQsIG1vZHVsZSwgbWV0aG9kLCBhcmdzKSA9PlxuICAgICAgZmFsbGJhY2soaWQsIFt7IG1vZHVsZSwgbWV0aG9kLCBhcmdzIH1dKSlcbn1cbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBKUyBTZXJ2aWNlc1xuZXhwb3J0IGNvbnN0IHNlcnZpY2VzID0gW11cblxuLyoqXG4gKiBSZWdpc3RlciBhIEphdmFTY3JpcHQgc2VydmljZS5cbiAqIEEgSmF2YVNjcmlwdCBzZXJ2aWNlIG9wdGlvbnMgY291bGQgaGF2ZSBhIHNldCBvZiBsaWZlY3ljbGUgbWV0aG9kc1xuICogZm9yIGVhY2ggV2VleCBpbnN0YW5jZS4gRm9yIGV4YW1wbGU6IGNyZWF0ZSwgcmVmcmVzaCwgZGVzdHJveS5cbiAqIEZvciB0aGUgSlMgZnJhbWV3b3JrIG1haW50YWluZXIgaWYgeW91IHdhbnQgdG8gc3VwcGx5IHNvbWUgZmVhdHVyZXNcbiAqIHdoaWNoIG5lZWQgdG8gd29yayB3ZWxsIGluIGRpZmZlcmVudCBXZWV4IGluc3RhbmNlcywgZXZlbiBpbiBkaWZmZXJlbnRcbiAqIGZyYW1ld29ya3Mgc2VwYXJhdGVseS4gWW91IGNhbiBtYWtlIGEgSmF2YVNjcmlwdCBzZXJ2aWNlIHRvIGluaXRcbiAqIGl0cyB2YXJpYWJsZXMgb3IgY2xhc3NlcyBmb3IgZWFjaCBXZWV4IGluc3RhbmNlIHdoZW4gaXQncyBjcmVhdGVkXG4gKiBhbmQgcmVjeWNsZSB0aGVtIHdoZW4gaXQncyBkZXN0cm95ZWQuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBDb3VsZCBoYXZlIHsgY3JlYXRlLCByZWZyZXNoLCBkZXN0cm95IH1cbiAqICAgICAgICAgICAgICAgICAgICAgICAgIGxpZmVjeWNsZSBtZXRob2RzLiBJbiBjcmVhdGUgbWV0aG9kIGl0IHNob3VsZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFuIG9iamVjdCBvZiB3aGF0IHZhcmlhYmxlcyBvciBjbGFzc2VzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICB3b3VsZCBiZSBpbmplY3RlZCBpbnRvIHRoZSBXZWV4IGluc3RhbmNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJTZXJ2aWNlIChuYW1lLCBvcHRpb25zKSB7XG4gIGlmIChoYXNTZXJ2aWNlKG5hbWUpKSB7XG4gICAgY29uc29sZS53YXJuKGBTZXJ2aWNlIFwiJHtuYW1lfVwiIGhhcyBiZWVuIHJlZ2lzdGVyZWQgYWxyZWFkeSFgKVxuICB9XG4gIGVsc2Uge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKVxuICAgIHNlcnZpY2VzLnB1c2goeyBuYW1lLCBvcHRpb25zIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBVbnJlZ2lzdGVyIGEgSmF2YVNjcmlwdCBzZXJ2aWNlIGJ5IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyU2VydmljZSAobmFtZSkge1xuICBzZXJ2aWNlcy5zb21lKChzZXJ2aWNlLCBpbmRleCkgPT4ge1xuICAgIGlmIChzZXJ2aWNlLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHNlcnZpY2VzLnNwbGljZShpbmRleCwgMSlcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9KVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgSmF2YVNjcmlwdCBzZXJ2aWNlIHdpdGggYSBjZXJ0YWluIG5hbWUgZXhpc3RlZC5cbiAqIEBwYXJhbSAge3N0cmluZ30gIG5hbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNTZXJ2aWNlIChuYW1lKSB7XG4gIHJldHVybiBzZXJ2aWNlcy5tYXAoc2VydmljZSA9PiBzZXJ2aWNlLm5hbWUpLmluZGV4T2YobmFtZSkgPj0gMFxufVxuXG4vKipcbiAqIEdlbmVyYXRlIHNlcnZpY2UgbWFwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZXJ2aWNlcyAoaWQsIGVudiwgY29uZmlnKSB7XG4gIC8vIEluaXQgSmF2YVNjcmlwdCBzZXJ2aWNlcyBmb3IgdGhpcyBpbnN0YW5jZS5cbiAgY29uc3Qgc2VydmljZU1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgc2VydmljZU1hcC5zZXJ2aWNlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICBzZXJ2aWNlcy5mb3JFYWNoKCh7IG5hbWUsIG9wdGlvbnMgfSkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgY29uc29sZS5kZWJ1ZyhgW0pTIFJ1bnRpbWVdIGNyZWF0ZSBzZXJ2aWNlICR7bmFtZX0uYClcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlID0gb3B0aW9ucy5jcmVhdGVcbiAgICBpZiAoY3JlYXRlKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBjcmVhdGUoaWQsIGVudiwgY29uZmlnKVxuICAgICAgT2JqZWN0LmFzc2lnbihzZXJ2aWNlTWFwLnNlcnZpY2UsIHJlc3VsdClcbiAgICAgIE9iamVjdC5hc3NpZ24oc2VydmljZU1hcCwgcmVzdWx0Lmluc3RhbmNlKVxuICAgIH1cbiAgfSlcbiAgZGVsZXRlIHNlcnZpY2VNYXAuc2VydmljZS5pbnN0YW5jZVxuICBPYmplY3QuZnJlZXplKHNlcnZpY2VNYXAuc2VydmljZSlcbiAgcmV0dXJuIHNlcnZpY2VNYXBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hTZXJ2aWNlcyAoaWQsIGVudiwgY29uZmlnKSB7XG4gIHNlcnZpY2VzLmZvckVhY2goc2VydmljZSA9PiB7XG4gICAgY29uc3QgcmVmcmVzaCA9IHNlcnZpY2Uub3B0aW9ucy5yZWZyZXNoXG4gICAgaWYgKHR5cGVvZiByZWZyZXNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZWZyZXNoKGlkLCBlbnYsIGNvbmZpZylcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95U2VydmljZXMgKGlkLCBlbnYsIGNvbmZpZykge1xuICBzZXJ2aWNlcy5mb3JFYWNoKHNlcnZpY2UgPT4ge1xuICAgIGNvbnN0IGRlc3Ryb3kgPSBzZXJ2aWNlLm9wdGlvbnMuZGVzdHJveVxuICAgIGlmICh0eXBlb2YgZGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZGVzdHJveShpZCwgZW52LCBjb25maWcpXG4gICAgfVxuICB9KVxufVxuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGNyZWF0ZVNlcnZpY2VzLCByZWZyZXNoU2VydmljZXMsIGRlc3Ryb3lTZXJ2aWNlcyB9IGZyb20gJy4vc2VydmljZSdcbmltcG9ydCB7IGdldFJ1bnRpbWVDb25maWcgfSBmcm9tICcuL2luaXQnXG5jb25zdCB2ZXJzaW9uUmVnRXhwID0gL15cXHMqXFwvXFwvICooXFx7W159XSpcXH0pICpcXHI/XFxuL1xuXG4vKipcbiAqIERldGVjdCBhIEpTIEJ1bmRsZSBjb2RlIGFuZCBtYWtlIHN1cmUgd2hpY2ggZnJhbWV3b3JrIGl0J3MgYmFzZWQgdG8uIEVhY2ggSlNcbiAqIEJ1bmRsZSBzaG91bGQgbWFrZSBzdXJlIHRoYXQgaXQgc3RhcnRzIHdpdGggYSBsaW5lIG9mIEpTT04gY29tbWVudCBhbmQgaXNcbiAqIG1vcmUgdGhhdCBvbmUgbGluZS5cbiAqIEBwYXJhbSAge3N0cmluZ30gY29kZVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5mdW5jdGlvbiBnZXRCdW5kbGVUeXBlIChjb2RlKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHZlcnNpb25SZWdFeHAuZXhlYyhjb2RlKVxuICBpZiAocmVzdWx0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGluZm8gPSBKU09OLnBhcnNlKHJlc3VsdFsxXSlcbiAgICAgIHJldHVybiBpbmZvLmZyYW1ld29ya1xuICAgIH1cbiAgICBjYXRjaCAoZSkge31cbiAgfVxuXG4gIC8vIGRlZmF1bHQgYnVuZGxlIHR5cGVcbiAgcmV0dXJuICdXZWV4J1xufVxuXG5jb25zdCBpbnN0YW5jZU1hcCA9IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGcmFtZXdvcmtUeXBlIChpZCkge1xuICBpZiAoaW5zdGFuY2VNYXBbaWRdKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlTWFwW2lkXS5mcmFtZXdvcmtcbiAgfVxuICByZXR1cm4gJ1dlZXgnXG59XG5cbi8qKlxuICogQ2hlY2sgd2hpY2ggZnJhbWV3b3JrIGEgY2VydGFpbiBKUyBCdW5kbGUgY29kZSBiYXNlZCB0by4gQW5kIGNyZWF0ZSBpbnN0YW5jZVxuICogYnkgdGhpcyBmcmFtZXdvcmsuXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UgKGlkLCBjb2RlLCBjb25maWcsIGRhdGEpIHtcbiAgaWYgKGluc3RhbmNlTWFwW2lkXSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbiAgfVxuXG4gIC8vIEluaXQgaW5zdGFuY2UgaW5mby5cbiAgY29uc3QgYnVuZGxlVHlwZSA9IGdldEJ1bmRsZVR5cGUoY29kZSlcbiAgY29uc3QgcnVudGltZUNvbmZpZyA9IGdldFJ1bnRpbWVDb25maWcoKVxuXG4gIC8vIEluaXQgaW5zdGFuY2UgY29uZmlnLlxuICBjb25maWcgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbmZpZyB8fCB7fSkpXG4gIGNvbmZpZy5lbnYgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdsb2JhbC5XWEVudmlyb25tZW50IHx8IHt9KSlcblxuICBjb25zdCBjb250ZXh0ID0ge1xuICAgIGNvbmZpZyxcbiAgICBjcmVhdGVkOiBEYXRlLm5vdygpLFxuICAgIGZyYW1ld29yazogYnVuZGxlVHlwZVxuICB9XG4gIGNvbnRleHQuc2VydmljZXMgPSBjcmVhdGVTZXJ2aWNlcyhpZCwgY29udGV4dCwgcnVudGltZUNvbmZpZylcbiAgaW5zdGFuY2VNYXBbaWRdID0gY29udGV4dFxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIGNyZWF0ZSBhbiAke2J1bmRsZVR5cGV9IGluc3RhbmNlYClcbiAgfVxuXG4gIGNvbnN0IGZtID0gcnVudGltZUNvbmZpZy5mcmFtZXdvcmtzW2J1bmRsZVR5cGVdXG4gIGlmICghZm0pIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGJ1bmRsZSB0eXBlIFwiJHtidW5kbGVUeXBlfVwiLmApXG4gIH1cbiAgcmV0dXJuIGZtLmNyZWF0ZUluc3RhbmNlKGlkLCBjb2RlLCBjb25maWcsIGRhdGEsIGNvbnRleHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoSW5zdGFuY2UgKGlkLCAuLi5hcmdzKSB7XG4gIGNvbnN0IHR5cGUgPSBnZXRGcmFtZXdvcmtUeXBlKGlkKVxuICBjb25zdCBydW50aW1lQ29uZmlnID0gZ2V0UnVudGltZUNvbmZpZygpXG4gIHJlZnJlc2hTZXJ2aWNlcyhpZCwge1xuICAgIGluZm86IHsgZnJhbWV3b3JrOiB0eXBlIH0sXG4gICAgcnVudGltZTogcnVudGltZUNvbmZpZ1xuICB9KVxuXG4gIGNvbnN0IGZtID0gcnVudGltZUNvbmZpZy5mcmFtZXdvcmtzW3R5cGVdXG4gIGlmICghZm0pIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGJ1bmRsZSB0eXBlIFwiJHt0eXBlfVwiLmApXG4gIH1cbiAgcmV0dXJuIGZtLnJlZnJlc2hJbnN0YW5jZShpZCwgLi4uYXJncylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lJbnN0YW5jZSAoaWQsIC4uLmFyZ3MpIHtcbiAgY29uc3QgdHlwZSA9IGdldEZyYW1ld29ya1R5cGUoaWQpXG4gIGNvbnN0IHJ1bnRpbWVDb25maWcgPSBnZXRSdW50aW1lQ29uZmlnKClcbiAgZGVzdHJveVNlcnZpY2VzKGlkLCB7XG4gICAgaW5mbzogeyBmcmFtZXdvcms6IHR5cGUgfSxcbiAgICBydW50aW1lOiBydW50aW1lQ29uZmlnXG4gIH0pXG5cbiAgY29uc3QgZm0gPSBydW50aW1lQ29uZmlnLmZyYW1ld29ya3NbdHlwZV1cbiAgaWYgKCFmbSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgYnVuZGxlIHR5cGUgXCIke3R5cGV9XCIuYClcbiAgfVxuICBkZWxldGUgaW5zdGFuY2VNYXBbaWRdXG4gIHJldHVybiBmbS5kZXN0cm95SW5zdGFuY2UoaWQsIC4uLmFyZ3MpXG59XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgaW5pdCBhcyBpbml0VGFza0hhbmRsZXIgfSBmcm9tICcuLi9icmlkZ2UvVGFza0NlbnRlcidcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJy4uL3Zkb20vV2VleEVsZW1lbnQnXG5pbXBvcnQgeyByZWdpc3RlclNlcnZpY2UsIHVucmVnaXN0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJ1xuaW1wb3J0IHsgZ2V0RnJhbWV3b3JrVHlwZSwgY3JlYXRlSW5zdGFuY2UsIHJlZnJlc2hJbnN0YW5jZSwgZGVzdHJveUluc3RhbmNlIH0gZnJvbSAnLi9pbnN0YW5jZSdcblxuY29uc3QgcnVudGltZUNvbmZpZyA9IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSdW50aW1lQ29uZmlnICgpIHtcbiAgcmV0dXJuIHJ1bnRpbWVDb25maWdcbn1cblxuY29uc3QgbWV0aG9kcyA9IHtcbiAgY3JlYXRlSW5zdGFuY2UsXG4gIHJlZnJlc2hJbnN0YW5jZSxcbiAgZGVzdHJveUluc3RhbmNlLFxuICByZWdpc3RlclNlcnZpY2UsXG4gIHVucmVnaXN0ZXJTZXJ2aWNlXG59XG5cbi8qKlxuICogUmVnaXN0ZXIgbWV0aG9kcyB3aGljaCBpbml0IGVhY2ggZnJhbWV3b3Jrcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lXG4gKi9cbmZ1bmN0aW9uIGdlbkluaXQgKG1ldGhvZE5hbWUpIHtcbiAgbWV0aG9kc1ttZXRob2ROYW1lXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgaWYgKG1ldGhvZE5hbWUgPT09ICdyZWdpc3RlckNvbXBvbmVudHMnKSB7XG4gICAgICBjaGVja0NvbXBvbmVudE1ldGhvZHMoYXJnc1swXSlcbiAgICB9XG4gICAgZm9yIChjb25zdCBuYW1lIGluIHJ1bnRpbWVDb25maWcuZnJhbWV3b3Jrcykge1xuICAgICAgY29uc3QgZnJhbWV3b3JrID0gcnVudGltZUNvbmZpZy5mcmFtZXdvcmtzW25hbWVdXG4gICAgICBpZiAoZnJhbWV3b3JrICYmIGZyYW1ld29ya1ttZXRob2ROYW1lXSkge1xuICAgICAgICBmcmFtZXdvcmtbbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tDb21wb25lbnRNZXRob2RzIChjb21wb25lbnRzKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGNvbXBvbmVudHMpKSB7XG4gICAgY29tcG9uZW50cy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBpZiAobmFtZSAmJiBuYW1lLnR5cGUgJiYgbmFtZS5tZXRob2RzKSB7XG4gICAgICAgIHJlZ2lzdGVyRWxlbWVudChuYW1lLnR5cGUsIG5hbWUubWV0aG9kcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogUmVnaXN0ZXIgbWV0aG9kcyB3aGljaCB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaCBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lXG4gKi9cbmZ1bmN0aW9uIGdlbkluc3RhbmNlIChtZXRob2ROYW1lKSB7XG4gIG1ldGhvZHNbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGNvbnN0IGlkID0gYXJnc1swXVxuICAgIGNvbnN0IHR5cGUgPSBnZXRGcmFtZXdvcmtUeXBlKGlkKVxuICAgIGNvbnN0IGZyYW1ld29yayA9IHJ1bnRpbWVDb25maWcuZnJhbWV3b3Jrc1t0eXBlXVxuICAgIGlmICh0eXBlICYmIGZyYW1ld29yaykge1xuICAgICAgcmV0dXJuIGZyYW1ld29ya1ttZXRob2ROYW1lXSguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpZH1cImApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCAoY29uZmlnKSB7XG4gIE9iamVjdC5hc3NpZ24ocnVudGltZUNvbmZpZywgY29uZmlnKVxuXG4gIGluaXRUYXNrSGFuZGxlcigpXG5cbiAgLy8gSW5pdCBlYWNoIGZyYW1ld29yayBieSBgaW5pdGAgbWV0aG9kIGFuZCBgY29uZmlnYCB3aGljaCBjb250YWlucyB0aHJlZVxuICAvLyB2aXJ0dWFsLURPTSBDbGFzczogYERvY3VtZW50YCwgYEVsZW1lbnRgICYgYENvbW1lbnRgLCBhbmQgYSBKUyBicmlkZ2UgbWV0aG9kOlxuICAvLyBgc2VuZFRhc2tzKC4uLmFyZ3MpYC5cbiAgY29uc3QgZnJhbWV3b3JrcyA9IHJ1bnRpbWVDb25maWcuZnJhbWV3b3JrcyB8fCB7fVxuICBmb3IgKGNvbnN0IG5hbWUgaW4gZnJhbWV3b3Jrcykge1xuICAgIGNvbnN0IGZyYW1ld29yayA9IGZyYW1ld29ya3NbbmFtZV1cbiAgICBmcmFtZXdvcmsuaW5pdChjb25maWcpXG4gIH1cblxuICAvLyBAdG9kbzogVGhlIG1ldGhvZCBgcmVnaXN0ZXJNZXRob2RzYCB3aWxsIGJlIHJlLWRlc2lnbmVkIG9yIHJlbW92ZWQgbGF0ZXIuXG4gIDsgWydyZWdpc3RlckNvbXBvbmVudHMnLCAncmVnaXN0ZXJNb2R1bGVzJywgJ3JlZ2lzdGVyTWV0aG9kcyddLmZvckVhY2goZ2VuSW5pdClcblxuICA7IFsncmVjZWl2ZVRhc2tzJywgJ2dldFJvb3QnXS5mb3JFYWNoKGdlbkluc3RhbmNlKVxuXG4gIC8vIGFkYXB0IGluc3RhbmNlXG4gIG1ldGhvZHMuY2FsbEpTID0gbWV0aG9kcy5yZWNlaXZlVGFza3NcblxuICByZXR1cm4gbWV0aG9kc1xufVxuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSdcbmltcG9ydCB7IHVuaXF1ZUlkIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnQgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IgKHZhbHVlKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5ub2RlVHlwZSA9IDhcbiAgICB0aGlzLm5vZGVJZCA9IHVuaXF1ZUlkKClcbiAgICB0aGlzLnJlZiA9IHRoaXMubm9kZUlkXG4gICAgdGhpcy50eXBlID0gJ2NvbW1lbnQnXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gICAgdGhpcy5wdXJlQ2hpbGRyZW4gPSBbXVxuICB9XG5cbiAgLyoqXG4gICogQ29udmVydCB0byBIVE1MIGNvbW1lbnQgc3RyaW5nLlxuICAqIEByZXR1cm4ge3N0aXJuZ30gaHRtbFxuICAqL1xuICB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuICc8IS0tICcgKyB0aGlzLnZhbHVlICsgJyAtLT4nXG4gIH1cbn1cbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiogQ3JlYXRlIHRoZSBhY3Rpb24gb2JqZWN0LlxuKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuKiBAcGFyYW0ge2FycmF5fSBhcmd1bWVudHNcbiogQHJldHVybiB7b2JqZWN0fSBhY3Rpb25cbiovXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb24gKG5hbWUsIGFyZ3MgPSBbXSkge1xuICByZXR1cm4geyBtb2R1bGU6ICdkb20nLCBtZXRob2Q6IG5hbWUsIGFyZ3M6IGFyZ3MgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0ZW5lciB7XG4gIGNvbnN0cnVjdG9yIChpZCwgaGFuZGxlcikge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMuYmF0Y2hlZCA9IGZhbHNlXG4gICAgdGhpcy51cGRhdGVzID0gW11cbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnaGFuZGxlcicsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGhhbmRsZXJcbiAgICAgIH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignW0pTIFJ1bnRpbWVdIGludmFsaWQgcGFyYW1ldGVyLCBoYW5kbGVyIG11c3QgYmUgYSBmdW5jdGlvbicpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgdGhlIFwiY3JlYXRlRmluaXNoXCIgc2lnbmFsLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKiBAcmV0dXJuIHt1bmRlZmluZWQgfCBudW1iZXJ9IHRoZSBzaWduYWwgc2VudCBieSBuYXRpdmVcbiAgICovXG4gIGNyZWF0ZUZpbmlzaCAoY2FsbGJhY2spIHtcbiAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyXG4gICAgcmV0dXJuIGhhbmRsZXIoW2NyZWF0ZUFjdGlvbignY3JlYXRlRmluaXNoJyldLCBjYWxsYmFjaylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHRoZSBcInVwZGF0ZUZpbmlzaFwiIHNpZ25hbC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICogQHJldHVybiB7dW5kZWZpbmVkIHwgbnVtYmVyfSB0aGUgc2lnbmFsIHNlbnQgYnkgbmF0aXZlXG4gICAqL1xuICB1cGRhdGVGaW5pc2ggKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuICAgIHJldHVybiBoYW5kbGVyKFtjcmVhdGVBY3Rpb24oJ3VwZGF0ZUZpbmlzaCcpXSwgY2FsbGJhY2spXG4gIH1cblxuICAvKipcbiAgICogU2VuZCB0aGUgXCJyZWZyZXNoRmluaXNoXCIgc2lnbmFsLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKiBAcmV0dXJuIHt1bmRlZmluZWQgfCBudW1iZXJ9IHRoZSBzaWduYWwgc2VudCBieSBuYXRpdmVcbiAgICovXG4gIHJlZnJlc2hGaW5pc2ggKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuICAgIHJldHVybiBoYW5kbGVyKFtjcmVhdGVBY3Rpb24oJ3JlZnJlc2hGaW5pc2gnKV0sIGNhbGxiYWNrKVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgdGhlIFwiY3JlYXRlQm9keVwiIHNpZ25hbC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnRcbiAgICogQHJldHVybiB7dW5kZWZpbmVkIHwgbnVtYmVyfSB0aGUgc2lnbmFsIHNlbnQgYnkgbmF0aXZlXG4gICAqL1xuICBjcmVhdGVCb2R5IChlbGVtZW50KSB7XG4gICAgY29uc3QgYm9keSA9IGVsZW1lbnQudG9KU09OKClcbiAgICBjb25zdCBjaGlsZHJlbiA9IGJvZHkuY2hpbGRyZW5cbiAgICBkZWxldGUgYm9keS5jaGlsZHJlblxuICAgIGNvbnN0IGFjdGlvbnMgPSBbY3JlYXRlQWN0aW9uKCdjcmVhdGVCb2R5JywgW2JvZHldKV1cbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgIGFjdGlvbnMucHVzaC5hcHBseShhY3Rpb25zLCBjaGlsZHJlbi5tYXAoY2hpbGQgPT4ge1xuICAgICAgICByZXR1cm4gY3JlYXRlQWN0aW9uKCdhZGRFbGVtZW50JywgW2JvZHkucmVmLCBjaGlsZCwgLTFdKVxuICAgICAgfSkpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoYWN0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHRoZSBcImFkZEVsZW1lbnRcIiBzaWduYWwuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7c3Rpcm5nfSByZWZlcmVuY2UgaWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEByZXR1cm4ge3VuZGVmaW5lZCB8IG51bWJlcn0gdGhlIHNpZ25hbCBzZW50IGJ5IG5hdGl2ZVxuICAgKi9cbiAgYWRkRWxlbWVudCAoZWxlbWVudCwgcmVmLCBpbmRleCkge1xuICAgIGlmICghKGluZGV4ID49IDApKSB7XG4gICAgICBpbmRleCA9IC0xXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdhZGRFbGVtZW50JywgW3JlZiwgZWxlbWVudC50b0pTT04oKSwgaW5kZXhdKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHRoZSBcInJlbW92ZUVsZW1lbnRcIiBzaWduYWwuXG4gICAqIEBwYXJhbSB7c3Rpcm5nfSByZWZlcmVuY2UgaWRcbiAgICogQHJldHVybiB7dW5kZWZpbmVkIHwgbnVtYmVyfSB0aGUgc2lnbmFsIHNlbnQgYnkgbmF0aXZlXG4gICAqL1xuICByZW1vdmVFbGVtZW50IChyZWYpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShyZWYpKSB7XG4gICAgICBjb25zdCBhY3Rpb25zID0gcmVmLm1hcCgocikgPT4gY3JlYXRlQWN0aW9uKCdyZW1vdmVFbGVtZW50JywgW3JdKSlcbiAgICAgIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoYWN0aW9ucylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3JlbW92ZUVsZW1lbnQnLCBbcmVmXSkpXG4gIH1cblxuICAvKipcbiAgICogU2VuZCB0aGUgXCJtb3ZlRWxlbWVudFwiIHNpZ25hbC5cbiAgICogQHBhcmFtIHtzdGlybmd9IHRhcmdldCByZWZlcmVuY2UgaWRcbiAgICogQHBhcmFtIHtzdGlybmd9IHBhcmVudCByZWZlcmVuY2UgaWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEByZXR1cm4ge3VuZGVmaW5lZCB8IG51bWJlcn0gdGhlIHNpZ25hbCBzZW50IGJ5IG5hdGl2ZVxuICAgKi9cbiAgbW92ZUVsZW1lbnQgKHRhcmdldFJlZiwgcGFyZW50UmVmLCBpbmRleCkge1xuICAgIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdtb3ZlRWxlbWVudCcsIFt0YXJnZXRSZWYsIHBhcmVudFJlZiwgaW5kZXhdKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHRoZSBcInVwZGF0ZUF0dHJzXCIgc2lnbmFsLlxuICAgKiBAcGFyYW0ge3N0aXJuZ30gcmVmZXJlbmNlIGlkXG4gICAqIEBwYXJhbSB7c3Rpcm5nfSBrZXlcbiAgICogQHBhcmFtIHtzdGlybmd9IHZhbHVlXG4gICAqIEByZXR1cm4ge3VuZGVmaW5lZCB8IG51bWJlcn0gdGhlIHNpZ25hbCBzZW50IGJ5IG5hdGl2ZVxuICAgKi9cbiAgc2V0QXR0ciAocmVmLCBrZXksIHZhbHVlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge31cbiAgICByZXN1bHRba2V5XSA9IHZhbHVlXG4gICAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3VwZGF0ZUF0dHJzJywgW3JlZiwgcmVzdWx0XSkpXG4gIH1cblxuICAvKipcbiAgICogU2VuZCB0aGUgXCJ1cGRhdGVTdHlsZVwiIHNpZ25hbCwgdXBkYXRlIGEgc29sZSBzdHlsZS5cbiAgICogQHBhcmFtIHtzdGlybmd9IHJlZmVyZW5jZSBpZFxuICAgKiBAcGFyYW0ge3N0aXJuZ30ga2V5XG4gICAqIEBwYXJhbSB7c3Rpcm5nfSB2YWx1ZVxuICAgKiBAcmV0dXJuIHt1bmRlZmluZWQgfCBudW1iZXJ9IHRoZSBzaWduYWwgc2VudCBieSBuYXRpdmVcbiAgICovXG4gIHNldFN0eWxlIChyZWYsIGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fVxuICAgIHJlc3VsdFtrZXldID0gdmFsdWVcbiAgICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbigndXBkYXRlU3R5bGUnLCBbcmVmLCByZXN1bHRdKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHRoZSBcInVwZGF0ZVN0eWxlXCIgc2lnbmFsLlxuICAgKiBAcGFyYW0ge3N0aXJuZ30gcmVmZXJlbmNlIGlkXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdHlsZVxuICAgKiBAcmV0dXJuIHt1bmRlZmluZWQgfCBudW1iZXJ9IHRoZSBzaWduYWwgc2VudCBieSBuYXRpdmVcbiAgICovXG4gIHNldFN0eWxlcyAocmVmLCBzdHlsZSkge1xuICAgIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCd1cGRhdGVTdHlsZScsIFtyZWYsIHN0eWxlXSkpXG4gIH1cblxuICAvKipcbiAgICogU2VuZCB0aGUgXCJhZGRFdmVudFwiIHNpZ25hbC5cbiAgICogQHBhcmFtIHtzdGlybmd9IHJlZmVyZW5jZSBpZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgdHlwZVxuICAgKiBAcmV0dXJuIHt1bmRlZmluZWQgfCBudW1iZXJ9IHRoZSBzaWduYWwgc2VudCBieSBuYXRpdmVcbiAgICovXG4gIGFkZEV2ZW50IChyZWYsIHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbignYWRkRXZlbnQnLCBbcmVmLCB0eXBlXSkpXG4gIH1cblxuICAvKipcbiAgICogU2VuZCB0aGUgXCJyZW1vdmVFdmVudFwiIHNpZ25hbC5cbiAgICogQHBhcmFtIHtzdGlybmd9IHJlZmVyZW5jZSBpZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgdHlwZVxuICAgKiBAcmV0dXJuIHt1bmRlZmluZWQgfCBudW1iZXJ9IHRoZSBzaWduYWwgc2VudCBieSBuYXRpdmVcbiAgICovXG4gIHJlbW92ZUV2ZW50IChyZWYsIHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbigncmVtb3ZlRXZlbnQnLCBbcmVmLCB0eXBlXSkpXG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCBoYW5kbGVyLlxuICAgKiBAcGFyYW0ge29iamVjdCB8IGFycmF5fSBhY3Rpb25zXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAqIEByZXR1cm4ge30gYW55dGhpbmcgcmV0dXJuZWQgYnkgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICovXG4gIGhhbmRsZXIgKGFjdGlvbnMsIGNiKSB7XG4gICAgcmV0dXJuIGNiICYmIGNiKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYWN0aW9ucyBpbnRvIHVwZGF0ZXMuXG4gICAqIEBwYXJhbSB7b2JqZWN0IHwgYXJyYXl9IGFjdGlvbnNcbiAgICogQHJldHVybiB7dW5kZWZpbmVkIHwgbnVtYmVyfSB0aGUgc2lnbmFsIHNlbnQgYnkgbmF0aXZlXG4gICAqL1xuICBhZGRBY3Rpb25zIChhY3Rpb25zKSB7XG4gICAgY29uc3QgdXBkYXRlcyA9IHRoaXMudXBkYXRlc1xuICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXJcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShhY3Rpb25zKSkge1xuICAgICAgYWN0aW9ucyA9IFthY3Rpb25zXVxuICAgIH1cblxuICAgIGlmICh0aGlzLmJhdGNoZWQpIHtcbiAgICAgIHVwZGF0ZXMucHVzaC5hcHBseSh1cGRhdGVzLCBhY3Rpb25zKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBoYW5kbGVyKGFjdGlvbnMpXG4gICAgfVxuICB9XG59XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBUYXNrIGhhbmRsZXIgZm9yIGNvbW11bmljYXRpb24gYmV0d2VlbiBqYXZhc2NyaXB0IGFuZCBuYXRpdmUuXG4gKi9cblxuY29uc3QgaGFuZGxlck1hcCA9IHtcbiAgY3JlYXRlQm9keTogJ2NhbGxDcmVhdGVCb2R5JyxcbiAgYWRkRWxlbWVudDogJ2NhbGxBZGRFbGVtZW50JyxcbiAgcmVtb3ZlRWxlbWVudDogJ2NhbGxSZW1vdmVFbGVtZW50JyxcbiAgbW92ZUVsZW1lbnQ6ICdjYWxsTW92ZUVsZW1lbnQnLFxuICB1cGRhdGVBdHRyczogJ2NhbGxVcGRhdGVBdHRycycsXG4gIHVwZGF0ZVN0eWxlOiAnY2FsbFVwZGF0ZVN0eWxlJyxcbiAgYWRkRXZlbnQ6ICdjYWxsQWRkRXZlbnQnLFxuICByZW1vdmVFdmVudDogJ2NhbGxSZW1vdmVFdmVudCdcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSB0YXNrIGhhbmRsZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXJcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufSB0YXNrSGFuZGxlclxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGFuZGxlciAoaWQsIGhhbmRsZXIpIHtcbiAgY29uc3QgZGVmYXVsdEhhbmRsZXIgPSBoYW5kbGVyIHx8IGdsb2JhbC5jYWxsTmF0aXZlXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh0eXBlb2YgZGVmYXVsdEhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbSlMgUnVudGltZV0gbm8gZGVmYXVsdCBoYW5kbGVyJylcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiB0YXNrSGFuZGxlciAodGFza3MpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGFza3MpKSB7XG4gICAgICB0YXNrcyA9IFt0YXNrc11cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSBkaXNwYXRjaFRhc2soaWQsIHRhc2tzW2ldLCBkZWZhdWx0SGFuZGxlcilcbiAgICAgIGlmIChyZXR1cm5WYWx1ZSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlcmUgaXMgYSBjb3JyZXNwb25kaW5nIGF2YWlsYWJsZSBoYW5kbGVyIGluIHRoZSBlbnZpcm9ubWVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2RcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGhhc0F2YWlsYWJsZUhhbmRsZXIgKG1vZHVsZSwgbWV0aG9kKSB7XG4gIHJldHVybiBtb2R1bGUgPT09ICdkb20nXG4gICAgJiYgaGFuZGxlck1hcFttZXRob2RdXG4gICAgJiYgdHlwZW9mIGdsb2JhbFtoYW5kbGVyTWFwW21ldGhvZF1dID09PSAnZnVuY3Rpb24nXG59XG5cbi8qKlxuICogRGlzcGF0Y2ggdGhlIHRhc2sgdG8gdGhlIHNwZWNpZmllZCBoYW5kbGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKiBAcGFyYW0ge29iamVjdH0gdGFza1xuICogQHBhcmFtIHtmdW5jdGlvbn0gZGVmYXVsdEhhbmRsZXJcbiAqIEByZXR1cm4ge251bWJlcn0gc2lnbmFsIHJldHVybmVkIGZyb20gbmF0aXZlXG4gKi9cbmZ1bmN0aW9uIGRpc3BhdGNoVGFzayAoaWQsIHRhc2ssIGRlZmF1bHRIYW5kbGVyKSB7XG4gIGNvbnN0IHsgbW9kdWxlLCBtZXRob2QsIGFyZ3MgfSA9IHRhc2tcblxuICBpZiAoaGFzQXZhaWxhYmxlSGFuZGxlcihtb2R1bGUsIG1ldGhvZCkpIHtcbiAgICByZXR1cm4gZ2xvYmFsW2hhbmRsZXJNYXBbbWV0aG9kXV0oaWQsIC4uLmFyZ3MsICctMScpXG4gIH1cblxuICByZXR1cm4gZGVmYXVsdEhhbmRsZXIoaWQsIFt0YXNrXSwgJy0xJylcbn1cbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgQ29tbWVudCBmcm9tICcuL0NvbW1lbnQnXG5pbXBvcnQgRWxlbWVudCBmcm9tICcuL0VsZW1lbnQnXG5pbXBvcnQgTGlzdGVuZXIgZnJvbSAnLi4vYnJpZGdlL0xpc3RlbmVyJ1xuaW1wb3J0IHsgVGFza0NlbnRlciB9IGZyb20gJy4uL2JyaWRnZS9UYXNrQ2VudGVyJ1xuaW1wb3J0IHsgY3JlYXRlSGFuZGxlciB9IGZyb20gJy4uL2JyaWRnZS9IYW5kbGVyJ1xuaW1wb3J0IHsgYWRkRG9jLCByZW1vdmVEb2MsIGFwcGVuZEJvZHksIHNldEJvZHkgfSBmcm9tICcuL29wZXJhdGlvbidcblxuLyoqXG4gKiBVcGRhdGUgYWxsIGNoYW5nZXMgZm9yIGFuIGVsZW1lbnQuXG4gKiBAcGFyYW0ge29iamVjdH0gZWxlbWVudFxuICogQHBhcmFtIHtvYmplY3R9IGNoYW5nZXNcbiAqL1xuZnVuY3Rpb24gdXBkYXRlRWxlbWVudCAoZWwsIGNoYW5nZXMpIHtcbiAgY29uc3QgYXR0cnMgPSBjaGFuZ2VzLmF0dHJzIHx8IHt9XG4gIGZvciAoY29uc3QgbmFtZSBpbiBhdHRycykge1xuICAgIGVsLnNldEF0dHIobmFtZSwgYXR0cnNbbmFtZV0sIHRydWUpXG4gIH1cbiAgY29uc3Qgc3R5bGUgPSBjaGFuZ2VzLnN0eWxlIHx8IHt9XG4gIGZvciAoY29uc3QgbmFtZSBpbiBzdHlsZSkge1xuICAgIGVsLnNldFN0eWxlKG5hbWUsIHN0eWxlW25hbWVdLCB0cnVlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50IHtcbiAgY29uc3RydWN0b3IgKGlkLCB1cmwsIGhhbmRsZXIpIHtcbiAgICBpZCA9IGlkID8gaWQudG9TdHJpbmcoKSA6ICcnXG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5VUkwgPSB1cmxcblxuICAgIGFkZERvYyhpZCwgdGhpcylcbiAgICB0aGlzLm5vZGVNYXAgPSB7fVxuICAgIGNvbnN0IEwgPSBEb2N1bWVudC5MaXN0ZW5lciB8fCBMaXN0ZW5lclxuICAgIHRoaXMubGlzdGVuZXIgPSBuZXcgTChpZCwgaGFuZGxlciB8fCBjcmVhdGVIYW5kbGVyKGlkLCBEb2N1bWVudC5oYW5kbGVyKSkgLy8gZGVwcmVjYXRlZFxuICAgIHRoaXMudGFza0NlbnRlciA9IG5ldyBUYXNrQ2VudGVyKGlkLCBoYW5kbGVyID8gKGlkLCAuLi5hcmdzKSA9PiBoYW5kbGVyKC4uLmFyZ3MpIDogRG9jdW1lbnQuaGFuZGxlcilcbiAgICB0aGlzLmNyZWF0ZURvY3VtZW50RWxlbWVudCgpXG4gIH1cblxuICAvKipcbiAgKiBHZXQgdGhlIG5vZGUgZnJvbSBub2RlTWFwLlxuICAqIEBwYXJhbSB7c3RyaW5nfSByZWZlcmVuY2UgaWRcbiAgKiBAcmV0dXJuIHtvYmplY3R9IG5vZGVcbiAgKi9cbiAgZ2V0UmVmIChyZWYpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlTWFwW3JlZl1cbiAgfVxuXG4gIC8qKlxuICAqIFR1cm4gb24gYmF0Y2hlZCB1cGRhdGVzLlxuICAqL1xuICBvcGVuICgpIHtcbiAgICB0aGlzLmxpc3RlbmVyLmJhdGNoZWQgPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICogVHVybiBvZmYgYmF0Y2hlZCB1cGRhdGVzLlxuICAqL1xuICBjbG9zZSAoKSB7XG4gICAgdGhpcy5saXN0ZW5lci5iYXRjaGVkID0gdHJ1ZVxuICB9XG5cbiAgLyoqXG4gICogQ3JlYXRlIHRoZSBkb2N1bWVudCBlbGVtZW50LlxuICAqIEByZXR1cm4ge29iamVjdH0gZG9jdW1lbnRFbGVtZW50XG4gICovXG4gIGNyZWF0ZURvY3VtZW50RWxlbWVudCAoKSB7XG4gICAgaWYgKCF0aGlzLmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgY29uc3QgZWwgPSBuZXcgRWxlbWVudCgnZG9jdW1lbnQnKVxuICAgICAgZWwuZG9jSWQgPSB0aGlzLmlkXG4gICAgICBlbC5vd25lckRvY3VtZW50ID0gdGhpc1xuICAgICAgZWwucm9sZSA9ICdkb2N1bWVudEVsZW1lbnQnXG4gICAgICBlbC5kZXB0aCA9IDBcbiAgICAgIGVsLnJlZiA9ICdfZG9jdW1lbnRFbGVtZW50J1xuICAgICAgdGhpcy5ub2RlTWFwLl9kb2N1bWVudEVsZW1lbnQgPSBlbFxuICAgICAgdGhpcy5kb2N1bWVudEVsZW1lbnQgPSBlbFxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWwsICdhcHBlbmRDaGlsZCcsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IChub2RlKSA9PiB7XG4gICAgICAgICAgYXBwZW5kQm9keSh0aGlzLCBub2RlKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWwsICdpbnNlcnRCZWZvcmUnLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiAobm9kZSwgYmVmb3JlKSA9PiB7XG4gICAgICAgICAgYXBwZW5kQm9keSh0aGlzLCBub2RlLCBiZWZvcmUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZG9jdW1lbnRFbGVtZW50XG4gIH1cblxuICAvKipcbiAgKiBDcmVhdGUgdGhlIGJvZHkgZWxlbWVudC5cbiAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAqIEBwYXJhbSB7b2JqY3R9IHByb3BzXG4gICogQHJldHVybiB7b2JqZWN0fSBib2R5IGVsZW1lbnRcbiAgKi9cbiAgY3JlYXRlQm9keSAodHlwZSwgcHJvcHMpIHtcbiAgICBpZiAoIXRoaXMuYm9keSkge1xuICAgICAgY29uc3QgZWwgPSBuZXcgRWxlbWVudCh0eXBlLCBwcm9wcylcbiAgICAgIHNldEJvZHkodGhpcywgZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYm9keVxuICB9XG5cbiAgLyoqXG4gICogQ3JlYXRlIGFuIGVsZW1lbnQuXG4gICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWVcbiAgKiBAcGFyYW0ge29iamN0fSBwcm9wc1xuICAqIEByZXR1cm4ge29iamVjdH0gZWxlbWVudFxuICAqL1xuICBjcmVhdGVFbGVtZW50ICh0YWdOYW1lLCBwcm9wcykge1xuICAgIHJldHVybiBuZXcgRWxlbWVudCh0YWdOYW1lLCBwcm9wcylcbiAgfVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhbiBjb21tZW50LlxuICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gICogQHJldHVybiB7b2JqZWN0fSBjb21tZW50XG4gICovXG4gIGNyZWF0ZUNvbW1lbnQgKHRleHQpIHtcbiAgICByZXR1cm4gbmV3IENvbW1lbnQodGV4dClcbiAgfVxuXG4gIC8qKlxuICAqIEZpcmUgYW4gZXZlbnQgb24gc3BlY2lmaWVkIGVsZW1lbnQgbWFudWFsbHkuXG4gICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnRcbiAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgdHlwZVxuICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBvYmplY3RcbiAgKiBAcGFyYW0ge29iamVjdH0gZG9tIGNoYW5nZXNcbiAgKiBAcmV0dXJuIHt9IGFueXRoaW5nIHJldHVybmVkIGJ5IGhhbmRsZXIgZnVuY3Rpb25cbiAgKi9cbiAgZmlyZUV2ZW50IChlbCwgdHlwZSwgZSwgZG9tQ2hhbmdlcykge1xuICAgIGlmICghZWwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBlID0gZSB8fCB7fVxuICAgIGUudHlwZSA9IHR5cGVcbiAgICBlLnRhcmdldCA9IGVsXG4gICAgZS5jdXJyZW50VGFyZ2V0ID0gZWxcbiAgICBlLnRpbWVzdGFtcCA9IERhdGUubm93KClcbiAgICBpZiAoZG9tQ2hhbmdlcykge1xuICAgICAgdXBkYXRlRWxlbWVudChlbCwgZG9tQ2hhbmdlcylcbiAgICB9XG4gICAgY29uc3QgaXNCdWJibGUgPSB0aGlzLmdldFJlZignX3Jvb3QnKS5hdHRyWydidWJibGUnXSA9PT0gJ3RydWUnXG4gICAgcmV0dXJuIGVsLmZpcmVFdmVudCh0eXBlLCBlLCBpc0J1YmJsZSlcbiAgfVxuXG4gIC8qKlxuICAqIERlc3Ryb3kgY3VycmVudCBkb2N1bWVudCwgYW5kIHJlbW92ZSBpdHNlbGYgZm9ybSBkb2NNYXAuXG4gICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMudGFza0NlbnRlci5kZXN0cm95Q2FsbGJhY2soKVxuICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVyXG4gICAgZGVsZXRlIHRoaXMubm9kZU1hcFxuICAgIGRlbGV0ZSB0aGlzLnRhc2tDZW50ZXJcbiAgICByZW1vdmVEb2ModGhpcy5pZClcbiAgfVxufVxuXG4vLyBkZWZhdWx0IHRhc2sgaGFuZGxlclxuRG9jdW1lbnQuaGFuZGxlciA9IG51bGxcbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnXG5pbXBvcnQgRWxlbWVudCBmcm9tICcuL0VsZW1lbnQnXG5pbXBvcnQgQ29tbWVudCBmcm9tICcuL0NvbW1lbnQnXG5pbXBvcnQgRG9jdW1lbnQgZnJvbSAnLi9Eb2N1bWVudCdcblxuZXhwb3J0IHtcbiAgcmVnaXN0ZXJFbGVtZW50LFxuICB1bnJlZ2lzdGVyRWxlbWVudCxcbiAgaXNXZWV4RWxlbWVudCxcbiAgY2xlYXJXZWV4RWxlbWVudHNcbn0gZnJvbSAnLi9XZWV4RWxlbWVudCdcblxuZXhwb3J0IHtcbiAgRG9jdW1lbnQsXG4gIE5vZGUsXG4gIEVsZW1lbnQsXG4gIENvbW1lbnRcbn1cbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBEb2N1bWVudCwgRWxlbWVudCwgQ29tbWVudCB9IGZyb20gJy4uL3Zkb20nXG5pbXBvcnQgTGlzdGVuZXIgZnJvbSAnLi4vYnJpZGdlL0xpc3RlbmVyJ1xuaW1wb3J0IHsgVGFza0NlbnRlciB9IGZyb20gJy4uL2JyaWRnZS9UYXNrQ2VudGVyJ1xuXG5jb25zdCBjb25maWcgPSB7XG4gIERvY3VtZW50LCBFbGVtZW50LCBDb21tZW50LCBMaXN0ZW5lcixcbiAgVGFza0NlbnRlcixcbiAgc2VuZFRhc2tzICguLi5hcmdzKSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsTmF0aXZlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY2FsbE5hdGl2ZSguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gKGdsb2JhbC5jYWxsTmF0aXZlIHx8ICgoKSA9PiB7fSkpKC4uLmFyZ3MpXG4gIH1cbn1cblxuRG9jdW1lbnQuaGFuZGxlciA9IGNvbmZpZy5zZW5kVGFza3NcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnXG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBSZWdpc3RlciBmcmFtZXdvcmsocykgaW4gSlMgcnVudGltZS4gV2VleCBzdXBwbHkgdHdvIGxheWVycyBmb3IgM3JkLXBhcnR5XG4gKiBmcmFtZXdvcmsocyk6IG9uZSBpcyB0aGUgaW5zdGFuY2UgbWFuYWdlbWVudCBsYXllciwgYW5vdGhlciBpcyB0aGVcbiAqIHZpcnR1YWwtRE9NIGxheWVyLlxuICovXG5cbmltcG9ydCAqIGFzIHNoYXJlZCBmcm9tICcuLi9zaGFyZWQnXG5cbmltcG9ydCBpbml0IGZyb20gJy4vYXBpL2luaXQnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vYXBpL2NvbmZpZydcbmltcG9ydCB7IHJlZ2lzdGVyU2VydmljZSwgdW5yZWdpc3RlclNlcnZpY2UsIGhhc1NlcnZpY2UgfSBmcm9tICcuL2FwaS9zZXJ2aWNlJ1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gZnJlZXplUHJvdG90eXBlICgpIHtcbiAgc2hhcmVkLmZyZWV6ZVByb3RvdHlwZSgpXG5cbiAgT2JqZWN0LmZyZWV6ZShjb25maWcuRWxlbWVudClcbiAgT2JqZWN0LmZyZWV6ZShjb25maWcuQ29tbWVudClcbiAgT2JqZWN0LmZyZWV6ZShjb25maWcuTGlzdGVuZXIpXG4gIE9iamVjdC5mcmVlemUoY29uZmlnLkRvY3VtZW50LnByb3RvdHlwZSlcbiAgT2JqZWN0LmZyZWV6ZShjb25maWcuRWxlbWVudC5wcm90b3R5cGUpXG4gIE9iamVjdC5mcmVlemUoY29uZmlnLkNvbW1lbnQucHJvdG90eXBlKVxuICBPYmplY3QuZnJlZXplKGNvbmZpZy5MaXN0ZW5lci5wcm90b3R5cGUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0TmF0aXZlQ29uc29sZTogc2hhcmVkLnNldE5hdGl2ZUNvbnNvbGUsXG4gIHJlc2V0TmF0aXZlQ29uc29sZTogc2hhcmVkLnJlc2V0TmF0aXZlQ29uc29sZSxcbiAgc2V0TmF0aXZlVGltZXI6IHNoYXJlZC5zZXROYXRpdmVUaW1lcixcbiAgcmVzZXROYXRpdmVUaW1lcjogc2hhcmVkLnJlc2V0TmF0aXZlVGltZXIsXG4gIHNlcnZpY2U6IHsgcmVnaXN0ZXJTZXJ2aWNlLCB1bnJlZ2lzdGVyU2VydmljZSwgaGFzU2VydmljZSB9LFxuICBmcmVlemVQcm90b3R5cGUsXG4gIGluaXQsXG4gIGNvbmZpZ1xufVxuIl0sIm5hbWVzIjpbInJlcXVpcmUkJDAiLCJpc09iamVjdCIsInJlcXVpcmUkJDEiLCJkb2N1bWVudCIsInJlcXVpcmUkJDIiLCJyZXF1aXJlJCQzIiwiZFAiLCJyZXF1aXJlJCQ0IiwiZ2xvYmFsIiwiJGV4cG9ydCIsInRvU3RyaW5nIiwiSU9iamVjdCIsInRvSW50ZWdlciIsIm1pbiIsInRvSU9iamVjdCIsImRlZmluZWQiLCJyZXF1aXJlJCQ1IiwiYXJndW1lbnRzIiwiY29mIiwiYW5PYmplY3QiLCJnZXRLZXlzIiwiZW51bUJ1Z0tleXMiLCJJRV9QUk9UTyIsIlBST1RPVFlQRSIsImhhcyIsIlRBRyIsImNyZWF0ZSIsInNldFRvU3RyaW5nVGFnIiwidG9PYmplY3QiLCJyZXF1aXJlJCQ5IiwicmVxdWlyZSQkOCIsInJlZGVmaW5lIiwicmVxdWlyZSQkNyIsImhpZGUiLCJyZXF1aXJlJCQ2IiwiSXRlcmF0b3JzIiwiSVRFUkFUT1IiLCJBcnJheVByb3RvIiwiY2xhc3NvZiIsImFGdW5jdGlvbiIsImN0eCIsInByb2Nlc3MiLCJQcm9taXNlIiwiaXNOb2RlIiwibmV3UHJvbWlzZUNhcGFiaWxpdHkiLCJTUEVDSUVTIiwiTElCUkFSWSIsInJlcXVpcmUkJDIwIiwicmVxdWlyZSQkMTkiLCJyZXF1aXJlJCQxOCIsInJlcXVpcmUkJDE3IiwicmVxdWlyZSQkMTYiLCJyZXF1aXJlJCQxNSIsInJlcXVpcmUkJDE0IiwicmVxdWlyZSQkMTMiLCJyZXF1aXJlJCQxMiIsInJlcXVpcmUkJDExIiwicmVxdWlyZSQkMTAiLCJUeXBlRXJyb3IiLCJjb25zdCIsImxldCIsImZyZWV6ZVByb3RvdHlwZSIsIkVsZW1lbnQiLCJzdXBlciIsInRhc2tDZW50ZXIiLCJwdXJlQmVmb3JlIiwiaW5kZXgiLCJ0aGlzIiwiaW5pdCIsImluaXRUYXNrSGFuZGxlciIsIm5hbWUiLCJzaGFyZWQuZnJlZXplUHJvdG90eXBlIiwic2hhcmVkLnNldE5hdGl2ZUNvbnNvbGUiLCJzaGFyZWQucmVzZXROYXRpdmVDb25zb2xlIiwic2hhcmVkLnNldE5hdGl2ZVRpbWVyIiwic2hhcmVkLnJlc2V0TmF0aXZlVGltZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO0VBQ2YsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLFdBQVc7SUFDdkIsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDdEMsSUFBSSxVQUFVLEdBQUcsU0FBUyxFQUFFLEVBQUU7TUFDNUIsT0FBTyxPQUFPLEVBQUUsS0FBSyxVQUFVLElBQUksS0FBSyxDQUFDLElBQUks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Q3pDLElBQUksRUFBRSxHQUFHLElBQUksS0FBSyxTQUFTLENBQUM7RUFDNUIsUUFBUSxJQUFJLENBQUMsTUFBTTtJQUNqQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUU7d0JBQ0osRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNYLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwQixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM3QixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdELEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElB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
