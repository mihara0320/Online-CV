(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OPTIONS = exports.Container = undefined;

var _Elements = require("./Elements");

var OPTIONS = {
    GENERAL: "general",
    EXPERIENCE: "experience"
};

var Container = function Container() {
    var el = document.createElement('div');
    el.id = "container";
    el.className = "row";

    Object.assign(el, {
        currentPage: null,
        general: null,
        experience: null,
        init: function init(container) {
            container.append(el);
        },
        showGeneral: function showGeneral() {
            console.log('%c Show General ', 'background: #777; color: #bada55');
            el.currentPage = OPTIONS.GENERAL;
            el.general = (0, _Elements.General)();
            el.general.init($("#container"));
        },
        showExperience: function showExperience() {
            console.log('%c Show Experience ', 'background: #777; color: #bada55');
            el.currentPage = OPTIONS.EXPERIENCE;
            el.experience = (0, _Elements.Experience)();
            el.experience.init($("#container"));
        },
        clean: function clean() {
            switch (el.currentPage) {
                case OPTIONS.GENERAL:
                    el.general.cleanPage();
                    break;
                case OPTIONS.EXPERIENCE:
                    el.experience.cleanPage();
                    break;
                default:
            }
        }
    });

    return el;
};

exports.Container = Container;
exports.OPTIONS = OPTIONS;

},{"./Elements":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Experience = undefined;

var _Controller = require("../../Controller");

var TEMPLATE = function TEMPLATE() {
    var el = {
        period: document.createElement("div"),
        pos: document.createElement("div"),
        cmp: document.createElement("div")
    };
    return el;
};

var Experience = function Experience() {
    var el = document.createElement('div');
    el.id = "experience";
    el.className = "col";

    Object.assign(el, {
        content_0: [],
        content_1: [],
        init: function init(container) {
            container.append(el);
            var self = $("#" + el.id);
            self.css("width", "100%");
            self.css("height", "100%");

            el.initInfo();
            el.showPage();
        },
        initInfo: function initInfo() {
            console.log("init ex");
            var self = $("#" + el.id);
            var data_0 = document.createElement("div");
            data_0.id = "experience_data_0";
            data_0.className = "colChild";
            self.append(data_0);

            var data_1 = document.createElement("div");
            data_1.id = "experience_data_1";
            data_1.className = "colChild";
            self.append(data_1);

            for (var i = 0; i < 2; i++) {
                var temp = TEMPLATE();
                for (var key in temp) {
                    var info = temp[key];
                    info.id = "data_" + i + "_" + key;
                    $("#experience_data_" + i).append(info);
                    $("#experience_data_" + i).css("height", "30%").css("width", "80%").css("font-size", "2em").css("font-weight", "bold");
                    var obj = $("#" + info.id);
                    obj.css("width", "100%");
                    var h3 = document.createElement("H3");
                    var text = null;
                    if (i === 0) {
                        switch (key) {
                            case "period":
                                text = document.createTextNode("April 2013 - August 2015");break;
                            case "pos":
                                text = document.createTextNode("Vedeo Transmission Administrator");break;
                            case "cmp":
                                text = document.createTextNode("Worked at SoftBank Telecom");break;
                        }
                        el.content_0.push(obj);
                    } else if (i === 1) {
                        switch (key) {
                            case "period":
                                text = document.createTextNode("November 2016 - Present");break;
                            case "pos":
                                text = document.createTextNode("Junior Front-end Developer");break;
                            case "cmp":
                                text = document.createTextNode("Working at Ganalogics");break;
                        }
                        el.content_1.push(obj);
                    }
                    text.id = "text_" + key + "_" + i;
                    h3.appendChild(text);
                    obj.append(h3);
                    $("H3").css("font-size", "1em").css("font-weight", "bold").css("text-align", "center");
                }
            }
        },
        showPage: function showPage() {
            _Controller.eventEmitter.emit("Tween Started");
            var tween = new TimelineMax({ onComplete: function onComplete() {
                    _Controller.eventEmitter.emit("Tween Completed");
                } });
            for (var i = 0; i < el.content_0.length; i++) {
                var text = el.content_0[i];
                tween.fromTo(text, 0.1, { opacity: 0, x: +100 }, { opacity: 1, x: 0 });
            }
            for (var i = 0; i < el.content_1.length; i++) {
                var _text = el.content_1[i];
                tween.fromTo(_text, 0.1, { opacity: 0, x: -100 }, { opacity: 1, x: 0 });
            }
            tween.play();
        },
        cleanPage: function cleanPage() {
            _Controller.eventEmitter.emit("Tween Started");
            var tween = new TimelineMax({ onComplete: function onComplete() {
                    $("#container").html("");
                    _Controller.eventEmitter.emit("Tween Completed");
                } });
            for (var i = 0; i < el.content_0.length; i++) {
                var text = el.content_0[i];
                tween.to(text, 0.05, { opacity: 0, x: +100 });
            }
            for (var i = 0; i < el.content_1.length; i++) {
                var _text2 = el.content_1[i];
                tween.to(_text2, 0.05, { opacity: 0, x: -100 });
            }
            tween.play();
        }
    });

    return el;
};

exports.Experience = Experience;

},{"../../Controller":6}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.General = undefined;

var _Controller = require('../../Controller');

var General = function General() {
    var el = document.createElement('div');
    el.id = "general";
    el.className = "col";

    Object.assign(el, {
        firstTime: true,
        up: null,
        down: null,
        myPhoto: null,
        infoContents: [],
        init: function init(container) {
            container.append(el);

            var self = $("#" + el.id);
            self.css("width", "100%");
            self.css("height", "100%");

            var photo = document.createElement('div');
            photo.id = "photo";
            photo.className = "row";
            self.append(photo);

            var info = document.createElement('div');
            info.id = "generalInfo";
            info.className = "row";
            self.append(info);

            if (el.firstTime) {
                el.up = $("#" + photo.id);
                el.up.css("width", "100%");
                el.up.css("height", "30%");

                el.down = $("#" + info.id);
                el.down.css("width", "100%");
                el.down.css("height", "70%");

                el.initMyPhoto();
                el.initInfo();
                el.firstTime = false;
            }

            el.showPage();
        },
        initMyPhoto: function initMyPhoto() {
            var pictrue = document.createElement("img");
            pictrue.className = "picture";
            pictrue.src = "../../assets/me.jpg";
            el.up.append(pictrue);
            el.myPhoto = $(".picture");
            el.myPhoto.css("opacity", "0");
        },
        initInfo: function initInfo() {
            el.down.css("width", "80%");
            el.down.css("height", "60%");
            // el.down.css("background", "rgba(200, 200, 200, 0.7)")
            var contents = {
                name: document.createElement("div"),
                address: document.createElement("div"),
                tel: document.createElement("div"),
                email: document.createElement("div"),
                nationality: document.createElement("div"),
                birthday: document.createElement("div"),
                gender: document.createElement("div"),
                personality: document.createElement("div")
            };

            for (var key in contents) {
                var object = contents[key];
                object.id = key + "_id";
                el.down.append(object);
                var div = $("#" + object.id);
                div.css("font-size", "2em");
                div.css("position", "absolute");
                div.css("font-weight", "bold");
                div.css("opacity", "0");
                switch (key) {
                    case "name":
                        div.css("top", "44%");
                        div.html("Masaki Ihara");break;
                    case "address":
                        div.css("top", "49%");
                        div.html("Tulika 4a, Tallinn");break;
                    case "tel":
                        div.css("top", "54%");
                        div.html("+372 5698 2522");break;
                    case "email":
                        div.css("top", "59%");
                        div.html("masaki0320@me.com");break;
                    case "nationality":
                        div.css("top", "68%");
                        div.html("Japanese");break;
                    case "birthday":
                        div.css("top", "73%");
                        div.html("20.03.1994");break;
                    case "gender":
                        div.css("top", "78%");
                        div.html("Male");break;
                    case "personality":
                        div.css("top", "88%");
                        div.html("PERSONALITY: Punctual, Ambitious, Flexible, Honest, and Responsible.");break;
                }
                el.infoContents.push(div);
            }
        },
        showPage: function showPage() {
            _Controller.eventEmitter.emit("Tween Started");
            var showTween = new TimelineMax({ onComplete: function onComplete() {
                    _Controller.eventEmitter.emit("Tween Completed");
                } });
            var counter = 0;
            showTween.to(el.myPhoto, 0.3, { opacity: 1 });
            for (var i = 0; i < el.infoContents.length; i++) {
                el.infoContents[i].css("opacity", "1");
                if (counter % 2 == 0) {
                    showTween.fromTo(el.infoContents[i], 0.08, { opacity: 0, x: +100 }, { opacity: 1, x: 0 });
                } else {
                    showTween.fromTo(el.infoContents[i], 0.08, { opacity: 0, x: -100 }, { opacity: 1, x: 0 });
                }
                counter++;
            }
            showTween.play();
        },
        cleanPage: function cleanPage() {
            _Controller.eventEmitter.emit("Tween Started");
            var cleanTween = new TimelineMax({ onComplete: function onComplete() {
                    $("#container").html("");
                    _Controller.eventEmitter.emit("Tween Completed");
                } });
            var counter = 0;
            cleanTween.to(el.myPhoto, 0.2, { opacity: 0 });
            for (var i = 0; i < el.infoContents.length; i++) {
                if (counter % 2 == 0) {
                    cleanTween.to(el.infoContents[i], 0.05, { opacity: 0, x: -100 });
                } else {
                    cleanTween.to(el.infoContents[i], 0.05, { opacity: 0, x: +100 });
                }
                counter++;
            }

            cleanTween.play();
        }
    });

    return el;
};

exports.General = General;

},{"../../Controller":6}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _General = require('./General');

Object.keys(_General).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _General[key];
    }
  });
});

var _Experience = require('./Experience');

Object.keys(_Experience).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Experience[key];
    }
  });
});

},{"./Experience":2,"./General":3}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Container = require('./Container');

Object.keys(_Container).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Container[key];
    }
  });
});

},{"./Container":1}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.eventEmitter = exports.Controller = undefined;

var _NavBar = require('./NavBar');

var _Container = require('./Container');

var EventEmitter = require('eventemitter3');
var eventEmitter = new EventEmitter();

var Controller = function Controller() {
    var el = EventEmitter;

    Object.assign(el, {
        main: null,
        navBar: null,
        container: null,
        tweenPlaying: false,

        init: function init() {
            el.main = $("#main");
            el.main.addClass("col");
            el.main.css("background", "rgba(200, 200, 200, 0.6)");

            el.navBar = (0, _NavBar.NavBar)();
            el.navBar.init(el.main);

            el.container = (0, _Container.Container)();
            el.container.init(el.main);

            el.initBtn();

            eventEmitter.on("Tween Started", function () {
                el.tweenPlaying = true;
            });
            eventEmitter.on("Tween Completed", function () {
                el.tweenPlaying = false;
            });
        },
        initBtn: function initBtn() {
            $("#category_General_button").click(function () {
                if (el.container.currentPage === null) {
                    el.container.showGeneral();
                } else if (el.container.currentPage === _Container.OPTIONS.GENERAL || el.tweenPlaying) {
                    return;
                } else {
                    el.container.clean();
                    eventEmitter.once("Tween Completed", function () {
                        el.container.showGeneral();
                    });
                }
            });
            $("#category_Experience_button").click(function () {
                if (el.container.currentPage === null) {
                    el.container.showExperience();
                } else if (el.container.currentPage === _Container.OPTIONS.EXPERIENCE || el.tweenPlaying) {
                    return;
                } else {
                    el.container.clean();
                    eventEmitter.once("Tween Completed", function () {
                        el.container.showExperience();
                    });
                }
            });
        },
        clean: function clean(div) {
            div.html('');
        }
    });
    return el;
};

exports.Controller = Controller;
exports.eventEmitter = eventEmitter;

},{"./Container":5,"./NavBar":8,"eventemitter3":10}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var NavBar = function NavBar() {

    var el = document.createElement('div');
    el.id = "navBar";
    el.className = "row";

    var categories = ["General", "Experience", "Education", "Skills"];

    Object.assign(el, {
        options: [null, null, null, null],
        init: function init(container) {
            container.append(el);
            var self = $("#" + el.id);

            for (var i = 0; i < categories.length; i++) {
                var category = document.createElement('div');
                category.id = "category_" + categories[i];
                category.className = "col";
                self.append(category);

                var buffer = $("#" + category.id);
                buffer.css("width", "20vw");
                buffer.css("height", "10vh");

                var button = document.createElement('button');
                button.id = category.id + "_button";
                button.className = "button";
                buffer.append(button);

                var btn = $("#" + button.id);
                btn.html(categories[i]);
                btn.css("opacity", "0");
                el.options[i] = btn;
            }
            el.showOptions();
        },
        showOptions: function showOptions() {
            for (var i = 0; i < el.options.length; i++) {
                TweenMax.to(el.options[i], 3, { opacity: 1 });
            }
        }
    });

    return el;
};

exports.NavBar = NavBar;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NavBar = require('./NavBar');

Object.keys(_NavBar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _NavBar[key];
    }
  });
});

},{"./NavBar":7}],9:[function(require,module,exports){
'use strict';

var _Controller = require('./Controller');

$(window).on('load', function () {
    console.log('%c Page loaded! ', 'background: #222; color: #bada55');
    var controller = (0, _Controller.Controller)();
    controller.init();
});

},{"./Controller":6}],10:[function(require,module,exports){
'use strict';

var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
         listeners.fn === fn
      && (!once || listeners.once)
      && (!context || listeners.context === context)
    ) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
           listeners[i].fn !== fn
        || (once && !listeners[i].once)
        || (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = EventEmitter;
}

},{}]},{},[9])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvQ29udGFpbmVyL0NvbnRhaW5lci5qcyIsImFwcC9qcy9Db250YWluZXIvRWxlbWVudHMvRXhwZXJpZW5jZS5qcyIsImFwcC9qcy9Db250YWluZXIvRWxlbWVudHMvR2VuZXJhbC5qcyIsImFwcC9qcy9Db250YWluZXIvRWxlbWVudHMvaW5kZXguanMiLCJhcHAvanMvQ29udGFpbmVyL2luZGV4LmpzIiwiYXBwL2pzL0NvbnRyb2xsZXIuanMiLCJhcHAvanMvTmF2QmFyL05hdkJhci5qcyIsImFwcC9qcy9OYXZCYXIvaW5kZXguanMiLCJhcHAvanMvbWFpbi5qcyIsIm5vZGVfbW9kdWxlcy9ldmVudGVtaXR0ZXIzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBOztBQUVBLElBQU0sVUFBVTtBQUNaLGFBQVMsU0FERztBQUVaLGdCQUFZO0FBRkEsQ0FBaEI7O0FBS0EsSUFBTSxZQUFZLFNBQVosU0FBWSxHQUFNO0FBQ3BCLFFBQUksS0FBSyxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVDtBQUNBLE9BQUcsRUFBSCxHQUFRLFdBQVI7QUFDQSxPQUFHLFNBQUgsR0FBZSxLQUFmOztBQUVBLFdBQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0I7QUFDZCxxQkFBYSxJQURDO0FBRWQsaUJBQVMsSUFGSztBQUdkLG9CQUFZLElBSEU7QUFJZCxjQUFNLGNBQUMsU0FBRCxFQUFlO0FBQ2pCLHNCQUFVLE1BQVYsQ0FBaUIsRUFBakI7QUFDSCxTQU5hO0FBT2QscUJBQWEsdUJBQUs7QUFDZCxvQkFBUSxHQUFSLENBQVksa0JBQVosRUFBZ0Msa0NBQWhDO0FBQ0EsZUFBRyxXQUFILEdBQWlCLFFBQVEsT0FBekI7QUFDQSxlQUFHLE9BQUgsR0FBYSx3QkFBYjtBQUNBLGVBQUcsT0FBSCxDQUFXLElBQVgsQ0FBZ0IsRUFBRSxZQUFGLENBQWhCO0FBQ0gs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHtHZW5lcmFsLCBFeHBlcmllbmNlfSBmcm9tICcuL0VsZW1lbnRzJ1xuXG5jb25zdCBPUFRJT05TID0ge1xuICAgIEdFTkVSQUw6IFwiZ2VuZXJhbFwiLFxuICAgIEVYUEVSSUVOQ0U6IFwiZXhwZXJpZW5jZVwiXG59XG5cbmNvbnN0IENvbnRhaW5lciA9ICgpID0+IHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbC5pZCA9IFwiY29udGFpbmVyXCJcbiAgICBlbC5jbGFzc05hbWUgPSBcInJvd1wiXG5cbiAgICBPYmplY3QuYXNzaWduKGVsLCB7XG4gICAgICAgIGN1cnJlbnRQYWdlOiBudWxsLFxuICAgICAgICBnZW5lcmFsOiBudWxsLFxuICAgICAgICBleHBlcmllbmNlOiBudWxsLFxuICAgICAgICBpbml0OiAoY29udGFpbmVyKSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKGVsKVxuICAgICAgICB9LFxuICAgICAgICBzaG93R2VuZXJhbDogKCkgPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgU2hvdyBHZW5lcmFsICcsICdiYWNrZ3JvdW5kOiAjNzc3OyBjb2xvcjogI2JhZGE1NScpO1xuICAgICAgICAgICAgZWwuY3VycmVudFBhZ2UgPSBPUFRJT05TLkdFTkVSQUxcbiAgICAgICAgICAgIGVsLmdlbmVyYWwgPSBHZW5lcmFsKClcbiAgICAgICAgICAgIGVsLmdlbmVyYWwuaW5pdCgkKFwiI2NvbnRhaW5lclwiKSlcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0V4cGVyaWVuY2U6ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyBTaG93IEV4cGVyaWVuY2UgJywgJ2JhY2tncm91bmQ6ICM3Nzc7IGNvbG9yOiAjYmFkYTU1Jyk7XG4gICAgICAgICAgICBlbC5jdXJyZW50UGFnZSA9IE9QVElPTlMuRVhQRVJJRU5DRVxuICAgICAgICAgICAgZWwuZXhwZXJpZW5jZSA9IEV4cGVyaWVuY2UoKVxuICAgICAgICAgICAgZWwuZXhwZXJpZW5jZS5pbml0KCQoXCIjY29udGFpbmVyXCIpKVxuICAgICAgICB9LFxuICAgICAgICBjbGVhbjogKCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChlbC5jdXJyZW50UGFnZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgT1BUSU9OUy5HRU5FUkFMOlxuICAgICAgICAgICAgICAgICAgICBlbC5nZW5lcmFsLmNsZWFuUGFnZSgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgT1BUSU9OUy5FWFBFUklFTkNFOlxuICAgICAgICAgICAgICAgICAgICBlbC5leHBlcmllbmNlLmNsZWFuUGFnZSgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGVsXG59XG5cbmV4cG9ydCB7Q29udGFpbmVyLCBPUFRJT05TfVxuIiwiaW1wb3J0IHtldmVudEVtaXR0ZXJ9IGZyb20gJy4uLy4uL0NvbnRyb2xsZXInXG5cbmNvbnN0IFRFTVBMQVRFID0gKCkgPT4ge1xuICAgIGxldCBlbCA9IHtcbiAgICAgICAgcGVyaW9kOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgICAgICBwb3M6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICAgIGNtcDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICB9XG4gICAgcmV0dXJuIGVsXG59XG5cbmNvbnN0IEV4cGVyaWVuY2UgPSAoKSA9PiB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWwuaWQgPSBcImV4cGVyaWVuY2VcIlxuICAgIGVsLmNsYXNzTmFtZSA9IFwiY29sXCJcblxuICAgIE9iamVjdC5hc3NpZ24oZWwsIHtcbiAgICAgICAgY29udGVudF8wIDogW10sXG4gICAgICAgIGNvbnRlbnRfMSA6IFtdLFxuICAgICAgICBpbml0OiAoY29udGFpbmVyKSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKGVsKVxuICAgICAgICAgICAgbGV0IHNlbGYgPSAkKFwiI1wiK2VsLmlkKVxuICAgICAgICAgICAgc2VsZi5jc3MoXCJ3aWR0aFwiLCBcIjEwMCVcIilcbiAgICAgICAgICAgIHNlbGYuY3NzKFwiaGVpZ2h0XCIsIFwiMTAwJVwiKVxuXG4gICAgICAgICAgICBlbC5pbml0SW5mbygpXG4gICAgICAgICAgICBlbC5zaG93UGFnZSgpO1xuICAgICAgICB9LFxuICAgICAgICBpbml0SW5mbzogKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbml0IGV4XCIpO1xuICAgICAgICAgICAgbGV0IHNlbGYgPSAkKFwiI1wiK2VsLmlkKVxuICAgICAgICAgICAgbGV0IGRhdGFfMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIGRhdGFfMC5pZCA9IFwiZXhwZXJpZW5jZV9kYXRhXzBcIlxuICAgICAgICAgICAgZGF0YV8wLmNsYXNzTmFtZSA9IFwiY29sQ2hpbGRcIlxuICAgICAgICAgICAgc2VsZi5hcHBlbmQoZGF0YV8wKVxuXG4gICAgICAgICAgICBsZXQgZGF0YV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgZGF0YV8xLmlkID0gXCJleHBlcmllbmNlX2RhdGFfMVwiXG4gICAgICAgICAgICBkYXRhXzEuY2xhc3NOYW1lID0gXCJjb2xDaGlsZFwiXG4gICAgICAgICAgICBzZWxmLmFwcGVuZChkYXRhXzEpXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXAgPSBURU1QTEFURSgpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRlbXApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZm8gPSB0ZW1wW2tleV1cbiAgICAgICAgICAgICAgICAgICAgaW5mby5pZCA9IFwiZGF0YV9cIisgaSArXCJfXCIrIGtleVxuICAgICAgICAgICAgICAgICAgICAkKFwiI2V4cGVyaWVuY2VfZGF0YV9cIiArIGkpLmFwcGVuZChpbmZvKVxuICAgICAgICAgICAgICAgICAgICAkKFwiI2V4cGVyaWVuY2VfZGF0YV9cIiArIGkpLmNzcyhcImhlaWdodFwiLCBcIjMwJVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyhcIndpZHRoXCIsIFwiODAlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY3NzKFwiZm9udC1zaXplXCIsIFwiMmVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY3NzKFwiZm9udC13ZWlnaHRcIiwgXCJib2xkXCIpXG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSAkKFwiI1wiK2luZm8uaWQpXG4gICAgICAgICAgICAgICAgICAgIG9iai5jc3MoXCJ3aWR0aFwiLCBcIjEwMCVcIilcbiAgICAgICAgICAgICAgICAgICAgdmFyIGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkgzXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJwZXJpb2RcIjogdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQXByaWwgMjAxMyAtIEF1Z3VzdCAyMDE1XCIpOyBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicG9zXCI6IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlZlZGVvIFRyYW5zbWlzc2lvbiBBZG1pbmlzdHJhdG9yXCIpOyBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY21wXCI6IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIldvcmtlZCBhdCBTb2Z0QmFuayBUZWxlY29tXCIpOyBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNvbnRlbnRfMC5wdXNoKG9iailcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJwZXJpb2RcIjogdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTm92ZW1iZXIgMjAxNiAtIFByZXNlbnRcIik7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJwb3NcIjogdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSnVuaW9yIEZyb250LWVuZCBEZXZlbG9wZXJcIik7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjbXBcIjogdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiV29ya2luZyBhdCBHYW5hbG9naWNzXCIpOyBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNvbnRlbnRfMS5wdXNoKG9iailcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0ZXh0LmlkID0gXCJ0ZXh0X1wiK2tleStcIl9cIitpXG4gICAgICAgICAgICAgICAgICAgIGgzLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICAgICAgICAgICAgICBvYmouYXBwZW5kKGgzKTtcbiAgICAgICAgICAgICAgICAgICAgJChcIkgzXCIpLmNzcyhcImZvbnQtc2l6ZVwiLCBcIjFlbVwiKS5jc3MoXCJmb250LXdlaWdodFwiLCBcImJvbGRcIikuY3NzKFwidGV4dC1hbGlnblwiLCBcImNlbnRlclwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2hvd1BhZ2U6ICgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50RW1pdHRlci5lbWl0KFwiVHdlZW4gU3RhcnRlZFwiKVxuICAgICAgICAgICAgbGV0IHR3ZWVuID0gbmV3IFRpbWVsaW5lTWF4KHtvbkNvbXBsZXRlOiAoKT0+eyBldmVudEVtaXR0ZXIuZW1pdChcIlR3ZWVuIENvbXBsZXRlZFwiKSB9fSlcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWwuY29udGVudF8wLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBlbC5jb250ZW50XzBbaV1cbiAgICAgICAgICAgICAgICB0d2Vlbi5mcm9tVG8odGV4dCwgMC4xLCB7b3BhY2l0eSA6IDAsIHg6ICsgMTAwfSwge29wYWNpdHkgOiAxLCB4OiAwfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWwuY29udGVudF8xLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBlbC5jb250ZW50XzFbaV1cbiAgICAgICAgICAgICAgICB0d2Vlbi5mcm9tVG8odGV4dCwgMC4xLCB7b3BhY2l0eSA6IDAsIHg6IC0xMDB9LCB7b3BhY2l0eSA6IDEsIHg6IDB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHdlZW4ucGxheSgpO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhblBhZ2U6KCkgPT4ge1xuICAgICAgICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoXCJUd2VlbiBTdGFydGVkXCIpXG4gICAgICAgICAgICBsZXQgdHdlZW4gPSBuZXcgVGltZWxpbmVNYXgoe29uQ29tcGxldGU6ICgpPT57XG4gICAgICAgICAgICAgICAgJChcIiNjb250YWluZXJcIikuaHRtbChcIlwiKVxuICAgICAgICAgICAgICAgIGV2ZW50RW1pdHRlci5lbWl0KFwiVHdlZW4gQ29tcGxldGVkXCIpXG4gICAgICAgICAgICB9fSlcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWwuY29udGVudF8wLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBlbC5jb250ZW50XzBbaV1cbiAgICAgICAgICAgICAgICB0d2Vlbi50byh0ZXh0LCAwLjA1LCB7b3BhY2l0eSA6IDAsIHg6ICsgMTAwfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWwuY29udGVudF8xLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBlbC5jb250ZW50XzFbaV1cbiAgICAgICAgICAgICAgICB0d2Vlbi50byh0ZXh0LCAwLjA1LCB7b3BhY2l0eSA6IDAsIHg6IC0xMDB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHdlZW4ucGxheSgpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBlbFxufVxuXG5leHBvcnQge0V4cGVyaWVuY2V9XG4iLCJpbXBvcnQge2V2ZW50RW1pdHRlcn0gZnJvbSAnLi4vLi4vQ29udHJvbGxlcidcblxuY29uc3QgR2VuZXJhbCA9ICgpID0+IHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbC5pZCA9IFwiZ2VuZXJhbFwiXG4gICAgZWwuY2xhc3NOYW1lID0gXCJjb2xcIlxuXG4gICAgT2JqZWN0LmFzc2lnbihlbCwge1xuICAgICAgICBmaXJzdFRpbWU6IHRydWUsXG4gICAgICAgIHVwOiBudWxsLFxuICAgICAgICBkb3duOiBudWxsLFxuICAgICAgICBteVBob3RvOiBudWxsLFxuICAgICAgICBpbmZvQ29udGVudHM6IFtdLFxuICAgICAgICBpbml0OiAoY29udGFpbmVyKSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKGVsKVxuXG4gICAgICAgICAgICBsZXQgc2VsZiA9ICQoXCIjXCIrZWwuaWQpXG4gICAgICAgICAgICBzZWxmLmNzcyhcIndpZHRoXCIsIFwiMTAwJVwiKVxuICAgICAgICAgICAgc2VsZi5jc3MoXCJoZWlnaHRcIiwgXCIxMDAlXCIpXG5cbiAgICAgICAgICAgIGxldCBwaG90byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcGhvdG8uaWQgPSBcInBob3RvXCJcbiAgICAgICAgICAgIHBob3RvLmNsYXNzTmFtZSA9IFwicm93XCJcbiAgICAgICAgICAgIHNlbGYuYXBwZW5kKHBob3RvKVxuXG4gICAgICAgICAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaW5mby5pZCA9IFwiZ2VuZXJhbEluZm9cIlxuICAgICAgICAgICAgaW5mby5jbGFzc05hbWUgPSBcInJvd1wiXG4gICAgICAgICAgICBzZWxmLmFwcGVuZChpbmZvKVxuXG4gICAgICAgICAgICBpZihlbC5maXJzdFRpbWUpe1xuICAgICAgICAgICAgICAgIGVsLnVwID0gJChcIiNcIitwaG90by5pZClcbiAgICAgICAgICAgICAgICBlbC51cC5jc3MoXCJ3aWR0aFwiLCBcIjEwMCVcIilcbiAgICAgICAgICAgICAgICBlbC51cC5jc3MoXCJoZWlnaHRcIiwgXCIzMCVcIilcblxuICAgICAgICAgICAgICAgIGVsLmRvd24gPSAkKFwiI1wiK2luZm8uaWQpXG4gICAgICAgICAgICAgICAgZWwuZG93bi5jc3MoXCJ3aWR0aFwiLCBcIjEwMCVcIilcbiAgICAgICAgICAgICAgICBlbC5kb3duLmNzcyhcImhlaWdodFwiLCBcIjcwJVwiKVxuXG4gICAgICAgICAgICAgICAgZWwuaW5pdE15UGhvdG8oKVxuICAgICAgICAgICAgICAgIGVsLmluaXRJbmZvKClcbiAgICAgICAgICAgICAgICBlbC5maXJzdFRpbWUgPSBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbC5zaG93UGFnZSgpXG4gICAgICAgIH0sXG4gICAgICAgIGluaXRNeVBob3RvOiAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcGljdHJ1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgICAgICAgIHBpY3RydWUuY2xhc3NOYW1lID0gXCJwaWN0dXJlXCJcbiAgICAgICAgICAgIHBpY3RydWUuc3JjID0gXCIuLi8uLi9hc3NldHMvbWUuanBnXCJcbiAgICAgICAgICAgIGVsLnVwLmFwcGVuZChwaWN0cnVlKVxuICAgICAgICAgICAgZWwubXlQaG90byA9ICQoXCIucGljdHVyZVwiKVxuICAgICAgICAgICAgZWwubXlQaG90by5jc3MoXCJvcGFjaXR5XCIsIFwiMFwiKVxuICAgICAgICB9LFxuICAgICAgICBpbml0SW5mbzogKCkgPT4ge1xuICAgICAgICAgICAgZWwuZG93bi5jc3MoXCJ3aWR0aFwiLCBcIjgwJVwiKVxuICAgICAgICAgICAgZWwuZG93bi5jc3MoXCJoZWlnaHRcIiwgXCI2MCVcIilcbiAgICAgICAgICAgIC8vIGVsLmRvd24uY3NzKFwiYmFja2dyb3VuZFwiLCBcInJnYmEoMjAwLCAyMDAsIDIwMCwgMC43KVwiKVxuICAgICAgICAgICAgbGV0IGNvbnRlbnRzID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICAgICAgICAgICAgYWRkcmVzczogZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICAgICAgICAgICAgICB0ZWw6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICAgICAgICAgICAgZW1haWw6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICAgICAgICAgICAgbmF0aW9uYWxpdHk6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICAgICAgICAgICAgYmlydGhkYXk6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICAgICAgICAgICAgZ2VuZGVyOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgICAgICAgICAgICAgIHBlcnNvbmFsaXR5OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gY29udGVudHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgb2JqZWN0ID0gY29udGVudHNba2V5XVxuICAgICAgICAgICAgICAgIG9iamVjdC5pZCA9IGtleSArIFwiX2lkXCJcbiAgICAgICAgICAgICAgICBlbC5kb3duLmFwcGVuZChvYmplY3QpXG4gICAgICAgICAgICAgICAgbGV0IGRpdiA9ICQoXCIjXCIgKyBvYmplY3QuaWQpXG4gICAgICAgICAgICAgICAgZGl2LmNzcyhcImZvbnQtc2l6ZVwiLCBcIjJlbVwiKVxuICAgICAgICAgICAgICAgIGRpdi5jc3MoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpXG4gICAgICAgICAgICAgICAgZGl2LmNzcyhcImZvbnQtd2VpZ2h0XCIsIFwiYm9sZFwiKVxuICAgICAgICAgICAgICAgIGRpdi5jc3MoXCJvcGFjaXR5XCIsIFwiMFwiKVxuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJuYW1lXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuY3NzKFwidG9wXCIsIFwiNDQlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuaHRtbChcIk1hc2FraSBJaGFyYVwiKTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhZGRyZXNzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuY3NzKFwidG9wXCIsIFwiNDklXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuaHRtbChcIlR1bGlrYSA0YSwgVGFsbGlublwiKTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0ZWxcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jc3MoXCJ0b3BcIiwgXCI1NCVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5odG1sKFwiKzM3MiA1Njk4IDI1MjJcIik7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW1haWxcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jc3MoXCJ0b3BcIiwgXCI1OSVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5odG1sKFwibWFzYWtpMDMyMEBtZS5jb21cIik7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibmF0aW9uYWxpdHlcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jc3MoXCJ0b3BcIiwgXCI2OCVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5odG1sKFwiSmFwYW5lc2VcIik7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYmlydGhkYXlcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jc3MoXCJ0b3BcIiwgXCI3MyVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5odG1sKFwiMjAuMDMuMTk5NFwiKTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJnZW5kZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jc3MoXCJ0b3BcIiwgXCI3OCVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5odG1sKFwiTWFsZVwiKTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJwZXJzb25hbGl0eVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmNzcyhcInRvcFwiLCBcIjg4JVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2Lmh0bWwoXCJQRVJTT05BTElUWTogUHVuY3R1YWwsIEFtYml0aW91cywgRmxleGlibGUsIEhvbmVzdCwgYW5kIFJlc3BvbnNpYmxlLlwiKTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsLmluZm9Db250ZW50cy5wdXNoKGRpdilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2hvd1BhZ2U6ICgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50RW1pdHRlci5lbWl0KFwiVHdlZW4gU3RhcnRlZFwiKVxuICAgICAgICAgICAgbGV0IHNob3dUd2VlbiA9IG5ldyBUaW1lbGluZU1heCh7b25Db21wbGV0ZTogKCk9PnsgZXZlbnRFbWl0dGVyLmVtaXQoXCJUd2VlbiBDb21wbGV0ZWRcIikgfX0pXG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDBcbiAgICAgICAgICAgIHNob3dUd2Vlbi50byhlbC5teVBob3RvLCAwLjMsIHtvcGFjaXR5OiAxfSlcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWwuaW5mb0NvbnRlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZWwuaW5mb0NvbnRlbnRzW2ldLmNzcyhcIm9wYWNpdHlcIiwgXCIxXCIpXG4gICAgICAgICAgICAgICAgaWYoY291bnRlciUyPT0wKXtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1R3ZWVuLmZyb21UbyhlbC5pbmZvQ29udGVudHNbaV0sIDAuMDgsIHtvcGFjaXR5IDogMCwgeDogKyAxMDB9LCB7b3BhY2l0eSA6IDEsIHg6IDB9KVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBzaG93VHdlZW4uZnJvbVRvKGVsLmluZm9Db250ZW50c1tpXSwgMC4wOCwge29wYWNpdHkgOiAwLCB4OiAtIDEwMH0sIHtvcGFjaXR5IDogMSwgeDogMH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50ZXIrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hvd1R3ZWVuLnBsYXkoKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYW5QYWdlOigpID0+IHtcbiAgICAgICAgICAgIGV2ZW50RW1pdHRlci5lbWl0KFwiVHdlZW4gU3RhcnRlZFwiKVxuICAgICAgICAgICAgbGV0IGNsZWFuVHdlZW4gPSBuZXcgVGltZWxpbmVNYXgoe29uQ29tcGxldGU6ICgpPT57XG4gICAgICAgICAgICAgICAgJChcIiNjb250YWluZXJcIikuaHRtbChcIlwiKVxuICAgICAgICAgICAgICAgIGV2ZW50RW1pdHRlci5lbWl0KFwiVHdlZW4gQ29tcGxldGVkXCIpXG4gICAgICAgICAgICAgfX0pXG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDBcbiAgICAgICAgICAgIGNsZWFuVHdlZW4udG8oZWwubXlQaG90bywgMC4yLCB7b3BhY2l0eTogMH0pXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsLmluZm9Db250ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKGNvdW50ZXIlMj09MCApe1xuICAgICAgICAgICAgICAgICAgICBjbGVhblR3ZWVuLnRvKGVsLmluZm9Db250ZW50c1tpXSwgMC4wNSwge29wYWNpdHkgOiAwLCB4OiAtIDEwMH0pXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFuVHdlZW4udG8oZWwuaW5mb0NvbnRlbnRzW2ldLCAwLjA1LCB7b3BhY2l0eSA6IDAsIHg6ICsgMTAwfSwpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50ZXIrK1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbGVhblR3ZWVuLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gZWxcbn1cblxuZXhwb3J0IHtHZW5lcmFsfVxuIiwiZXhwb3J0ICogZnJvbSAnLi9HZW5lcmFsJ1xuZXhwb3J0ICogZnJvbSAnLi9FeHBlcmllbmNlJ1xuIiwiZXhwb3J0ICogZnJvbSAnLi9Db250YWluZXInXG4iLCJpbXBvcnQge05hdkJhcn0gZnJvbSAnLi9OYXZCYXInXG5pbXBvcnQge0NvbnRhaW5lciwgT1BUSU9OU30gZnJvbSAnLi9Db250YWluZXInXG5cbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudGVtaXR0ZXIzJyk7XG5jb25zdCBldmVudEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuY29uc3QgQ29udHJvbGxlciA9ICgpID0+IHtcbiAgICBsZXQgZWwgPSBFdmVudEVtaXR0ZXI7XG5cbiAgICBPYmplY3QuYXNzaWduKGVsLCB7XG4gICAgICAgIG1haW46IG51bGwsXG4gICAgICAgIG5hdkJhcjogbnVsbCxcbiAgICAgICAgY29udGFpbmVyOiBudWxsLFxuICAgICAgICB0d2VlblBsYXlpbmc6IGZhbHNlLFxuXG4gICAgICAgIGluaXQ6ICgpID0+IHtcbiAgICAgICAgICAgIGVsLm1haW4gPSAkKFwiI21haW5cIilcbiAgICAgICAgICAgIGVsLm1haW4uYWRkQ2xhc3MoXCJjb2xcIilcbiAgICAgICAgICAgIGVsLm1haW4uY3NzKFwiYmFja2dyb3VuZFwiLCBcInJnYmEoMjAwLCAyMDAsIDIwMCwgMC42KVwiKVxuXG4gICAgICAgICAgICBlbC5uYXZCYXIgPSBOYXZCYXIoKTtcbiAgICAgICAgICAgIGVsLm5hdkJhci5pbml0KGVsLm1haW4pXG5cbiAgICAgICAgICAgIGVsLmNvbnRhaW5lciA9IENvbnRhaW5lcigpO1xuICAgICAgICAgICAgZWwuY29udGFpbmVyLmluaXQoZWwubWFpbilcblxuICAgICAgICAgICAgZWwuaW5pdEJ0bigpO1xuXG4gICAgICAgICAgICBldmVudEVtaXR0ZXIub24oXCJUd2VlbiBTdGFydGVkXCIsICgpPT57IGVsLnR3ZWVuUGxheWluZyA9IHRydWV9KVxuICAgICAgICAgICAgZXZlbnRFbWl0dGVyLm9uKFwiVHdlZW4gQ29tcGxldGVkXCIsICgpPT57IGVsLnR3ZWVuUGxheWluZyA9IGZhbHNlfSlcbiAgICAgICAgfSxcbiAgICAgICAgaW5pdEJ0bjogKCkgPT4ge1xuICAgICAgICAgICAgJChcIiNjYXRlZ29yeV9HZW5lcmFsX2J1dHRvblwiKS5jbGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZWwuY29udGFpbmVyLmN1cnJlbnRQYWdlID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgZWwuY29udGFpbmVyLnNob3dHZW5lcmFsKClcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVsLmNvbnRhaW5lci5jdXJyZW50UGFnZSA9PT0gT1BUSU9OUy5HRU5FUkFMIHx8IGVsLnR3ZWVuUGxheWluZyl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgZWwuY29udGFpbmVyLmNsZWFuKClcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRFbWl0dGVyLm9uY2UoXCJUd2VlbiBDb21wbGV0ZWRcIiwgKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNvbnRhaW5lci5zaG93R2VuZXJhbCgpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICQoXCIjY2F0ZWdvcnlfRXhwZXJpZW5jZV9idXR0b25cIikuY2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGVsLmNvbnRhaW5lci5jdXJyZW50UGFnZSA9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIGVsLmNvbnRhaW5lci5zaG93RXhwZXJpZW5jZSgpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbC5jb250YWluZXIuY3VycmVudFBhZ2UgPT09IE9QVElPTlMuRVhQRVJJRU5DRSB8fCBlbC50d2VlblBsYXlpbmcpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGVsLmNvbnRhaW5lci5jbGVhbigpXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50RW1pdHRlci5vbmNlKFwiVHdlZW4gQ29tcGxldGVkXCIsICgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jb250YWluZXIuc2hvd0V4cGVyaWVuY2UoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFuOiAoZGl2KSA9PiB7XG4gICAgICAgICAgICBkaXYuaHRtbCgnJylcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGVsXG59XG5cbmV4cG9ydCB7Q29udHJvbGxlciwgZXZlbnRFbWl0dGVyfVxuIiwiY29uc3QgTmF2QmFyID0gKCkgPT4ge1xuXG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWwuaWQgPSBcIm5hdkJhclwiXG4gICAgZWwuY2xhc3NOYW1lID0gXCJyb3dcIlxuXG4gICAgbGV0IGNhdGVnb3JpZXMgPSBbXCJHZW5lcmFsXCIsIFwiRXhwZXJpZW5jZVwiLCBcIkVkdWNhdGlvblwiLCBcIlNraWxsc1wiXVxuXG4gICAgT2JqZWN0LmFzc2lnbihlbCwge1xuICAgICAgICBvcHRpb25zOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXG4gICAgICAgIGluaXQ6IChjb250YWluZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQoZWwpXG4gICAgICAgICAgICBsZXQgc2VsZiA9ICQoXCIjXCIrZWwuaWQpXG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yeSA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeS5pZCA9IFwiY2F0ZWdvcnlfXCIgKyBjYXRlZ29yaWVzW2ldXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkuY2xhc3NOYW1lID0gXCJjb2xcIlxuICAgICAgICAgICAgICAgIHNlbGYuYXBwZW5kKGNhdGVnb3J5KVxuXG4gICAgICAgICAgICAgICAgbGV0IGJ1ZmZlciA9ICQoXCIjXCIgKyBjYXRlZ29yeS5pZClcbiAgICAgICAgICAgICAgICBidWZmZXIuY3NzKFwid2lkdGhcIiwgXCIyMHZ3XCIpXG4gICAgICAgICAgICAgICAgYnVmZmVyLmNzcyhcImhlaWdodFwiLCBcIjEwdmhcIilcblxuICAgICAgICAgICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBidXR0b24uaWQgPSBjYXRlZ29yeS5pZCArIFwiX2J1dHRvblwiXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBidWZmZXIuYXBwZW5kKGJ1dHRvbilcblxuICAgICAgICAgICAgICAgIGxldCBidG4gPSAkKFwiI1wiK2J1dHRvbi5pZClcbiAgICAgICAgICAgICAgICBidG4uaHRtbChjYXRlZ29yaWVzW2ldKVxuICAgICAgICAgICAgICAgIGJ0bi5jc3MoXCJvcGFjaXR5XCIsIFwiMFwiKVxuICAgICAgICAgICAgICAgIGVsLm9wdGlvbnNbaV0gPSBidG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsLnNob3dPcHRpb25zKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNob3dPcHRpb25zOiAoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsLm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBUd2Vlbk1heC50byhlbC5vcHRpb25zW2ldLCAzLCB7b3BhY2l0eTogMX0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSlcblxuICAgIHJldHVybiBlbFxufVxuXG5leHBvcnQge05hdkJhcn1cbiIsImV4cG9ydCAqIGZyb20gJy4vTmF2QmFyJ1xuIiwiXG5pbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJy4vQ29udHJvbGxlcidcblxuJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCclYyBQYWdlIGxvYWRlZCEgJywgJ2JhY2tncm91bmQ6ICMyMjI7IGNvbG9yOiAjYmFkYTU1Jyk7XG4gICAgbGV0IGNvbnRyb2xsZXIgPSBDb250cm9sbGVyKCk7XG4gICAgY29udHJvbGxlci5pbml0KCk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgLCBwcmVmaXggPSAnfic7XG5cbi8qKlxuICogQ29uc3RydWN0b3IgdG8gY3JlYXRlIGEgc3RvcmFnZSBmb3Igb3VyIGBFRWAgb2JqZWN0cy5cbiAqIEFuIGBFdmVudHNgIGluc3RhbmNlIGlzIGEgcGxhaW4gb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgYXJlIGV2ZW50IG5hbWVzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEV2ZW50cygpIHt9XG5cbi8vXG4vLyBXZSB0cnkgdG8gbm90IGluaGVyaXQgZnJvbSBgT2JqZWN0LnByb3RvdHlwZWAuIEluIHNvbWUgZW5naW5lcyBjcmVhdGluZyBhblxuLy8gaW5zdGFuY2UgaW4gdGhpcyB3YXkgaXMgZmFzdGVyIHRoYW4gY2FsbGluZyBgT2JqZWN0LmNyZWF0ZShudWxsKWAgZGlyZWN0bHkuXG4vLyBJZiBgT2JqZWN0LmNyZWF0ZShudWxsKWAgaXMgbm90IHN1cHBvcnRlZCB3ZSBwcmVmaXggdGhlIGV2ZW50IG5hbWVzIHdpdGggYVxuLy8gY2hhcmFjdGVyIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBidWlsdC1pbiBvYmplY3QgcHJvcGVydGllcyBhcmUgbm90XG4vLyBvdmVycmlkZGVuIG9yIHVzZWQgYXMgYW4gYXR0YWNrIHZlY3Rvci5cbi8vXG5pZiAoT2JqZWN0LmNyZWF0ZSkge1xuICBFdmVudHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAvL1xuICAvLyBUaGlzIGhhY2sgaXMgbmVlZGVkIGJlY2F1c2UgdGhlIGBfX3Byb3RvX19gIHByb3BlcnR5IGlzIHN0aWxsIGluaGVyaXRlZCBpblxuICAvLyBzb21lIG9sZCBicm93c2VycyBsaWtlIEFuZHJvaWQgNCwgaVBob25lIDUuMSwgT3BlcmEgMTEgYW5kIFNhZmFyaSA1LlxuICAvL1xuICBpZiAoIW5ldyBFdmVudHMoKS5fX3Byb3RvX18pIHByZWZpeCA9IGZhbHNlO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgc2luZ2xlIGV2ZW50IGxpc3RlbmVyLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7TWl4ZWR9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHBhcmFtIHtCb29sZWFufSBbb25jZT1mYWxzZV0gU3BlY2lmeSBpZiB0aGUgbGlzdGVuZXIgaXMgYSBvbmUtdGltZSBsaXN0ZW5lci5cbiAqIEBjb25zdHJ1Y3RvclxuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEVFKGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHRoaXMuZm4gPSBmbjtcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5vbmNlID0gb25jZSB8fCBmYWxzZTtcbn1cblxuLyoqXG4gKiBNaW5pbWFsIGBFdmVudEVtaXR0ZXJgIGludGVyZmFjZSB0aGF0IGlzIG1vbGRlZCBhZ2FpbnN0IHRoZSBOb2RlLmpzXG4gKiBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xufVxuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBsaXN0aW5nIHRoZSBldmVudHMgZm9yIHdoaWNoIHRoZSBlbWl0dGVyIGhhcyByZWdpc3RlcmVkXG4gKiBsaXN0ZW5lcnMuXG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgdmFyIG5hbWVzID0gW11cbiAgICAsIGV2ZW50c1xuICAgICwgbmFtZTtcblxuICBpZiAodGhpcy5fZXZlbnRzQ291bnQgPT09IDApIHJldHVybiBuYW1lcztcblxuICBmb3IgKG5hbWUgaW4gKGV2ZW50cyA9IHRoaXMuX2V2ZW50cykpIHtcbiAgICBpZiAoaGFzLmNhbGwoZXZlbnRzLCBuYW1lKSkgbmFtZXMucHVzaChwcmVmaXggPyBuYW1lLnNsaWNlKDEpIDogbmFtZSk7XG4gIH1cblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHJldHVybiBuYW1lcy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhldmVudHMpKTtcbiAgfVxuXG4gIHJldHVybiBuYW1lcztcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBsaXN0ZW5lcnMgcmVnaXN0ZXJlZCBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xTeW1ib2x9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtCb29sZWFufSBleGlzdHMgT25seSBjaGVjayBpZiB0aGVyZSBhcmUgbGlzdGVuZXJzLlxuICogQHJldHVybnMge0FycmF5fEJvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudCwgZXhpc3RzKSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBhdmFpbGFibGUgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoZXhpc3RzKSByZXR1cm4gISFhdmFpbGFibGU7XG4gIGlmICghYXZhaWxhYmxlKSByZXR1cm4gW107XG4gIGlmIChhdmFpbGFibGUuZm4pIHJldHVybiBbYXZhaWxhYmxlLmZuXTtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGF2YWlsYWJsZS5sZW5ndGgsIGVlID0gbmV3IEFycmF5KGwpOyBpIDwgbDsgaSsrKSB7XG4gICAgZWVbaV0gPSBhdmFpbGFibGVbaV0uZm47XG4gIH1cblxuICByZXR1cm4gZWU7XG59O1xuXG4vKipcbiAqIENhbGxzIGVhY2ggb2YgdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfFN5bWJvbH0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBldmVudCBoYWQgbGlzdGVuZXJzLCBlbHNlIGBmYWxzZWAuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50LCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XVxuICAgICwgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgYXJnc1xuICAgICwgaTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKGxpc3RlbmVycy5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnMuZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgY2FzZSAxOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQpLCB0cnVlO1xuICAgICAgY2FzZSAyOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExKSwgdHJ1ZTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIpLCB0cnVlO1xuICAgICAgY2FzZSA0OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMpLCB0cnVlO1xuICAgICAgY2FzZSA1OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgNjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCwgYTUpLCB0cnVlO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm4uYXBwbHkobGlzdGVuZXJzLmNvbnRleHQsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoXG4gICAgICAsIGo7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChsaXN0ZW5lcnNbaV0ub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzW2ldLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgICBjYXNlIDE6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0KTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMik7IGJyZWFrO1xuICAgICAgICBjYXNlIDQ6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIsIGEzKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFhcmdzKSBmb3IgKGogPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgYXJnc1tqIC0gMV0gPSBhcmd1bWVudHNbal07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGlzdGVuZXJzW2ldLmZuLmFwcGx5KGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQWRkIGEgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8U3ltYm9sfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7TWl4ZWR9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbihldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgdmFyIGxpc3RlbmVyID0gbmV3IEVFKGZuLCBjb250ZXh0IHx8IHRoaXMpXG4gICAgLCBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHRoaXMuX2V2ZW50c1tldnRdID0gbGlzdGVuZXIsIHRoaXMuX2V2ZW50c0NvdW50Kys7XG4gIGVsc2UgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XS5mbikgdGhpcy5fZXZlbnRzW2V2dF0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2UgdGhpcy5fZXZlbnRzW2V2dF0gPSBbdGhpcy5fZXZlbnRzW2V2dF0sIGxpc3RlbmVyXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkIGEgb25lLXRpbWUgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8U3ltYm9sfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7TWl4ZWR9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHZhciBsaXN0ZW5lciA9IG5ldyBFRShmbiwgY29udGV4dCB8fCB0aGlzLCB0cnVlKVxuICAgICwgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSB0aGlzLl9ldmVudHNbZXZ0XSA9IGxpc3RlbmVyLCB0aGlzLl9ldmVudHNDb3VudCsrO1xuICBlbHNlIGlmICghdGhpcy5fZXZlbnRzW2V2dF0uZm4pIHRoaXMuX2V2ZW50c1tldnRdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlIHRoaXMuX2V2ZW50c1tldnRdID0gW3RoaXMuX2V2ZW50c1tldnRdLCBsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgbGlzdGVuZXJzIG9mIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8U3ltYm9sfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIE9ubHkgcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgdGhhdCBtYXRjaCB0aGlzIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtNaXhlZH0gY29udGV4dCBPbmx5IHJlbW92ZSB0aGUgbGlzdGVuZXJzIHRoYXQgaGF2ZSB0aGlzIGNvbnRleHQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9uY2UgT25seSByZW1vdmUgb25lLXRpbWUgbGlzdGVuZXJzLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gdGhpcztcbiAgaWYgKCFmbikge1xuICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKSB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gICAgZWxzZSBkZWxldGUgdGhpcy5fZXZlbnRzW2V2dF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKGxpc3RlbmVycy5mbikge1xuICAgIGlmIChcbiAgICAgICAgIGxpc3RlbmVycy5mbiA9PT0gZm5cbiAgICAgICYmICghb25jZSB8fCBsaXN0ZW5lcnMub25jZSlcbiAgICAgICYmICghY29udGV4dCB8fCBsaXN0ZW5lcnMuY29udGV4dCA9PT0gY29udGV4dClcbiAgICApIHtcbiAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKSB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gICAgICBlbHNlIGRlbGV0ZSB0aGlzLl9ldmVudHNbZXZ0XTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGV2ZW50cyA9IFtdLCBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgICAgbGlzdGVuZXJzW2ldLmZuICE9PSBmblxuICAgICAgICB8fCAob25jZSAmJiAhbGlzdGVuZXJzW2ldLm9uY2UpXG4gICAgICAgIHx8IChjb250ZXh0ICYmIGxpc3RlbmVyc1tpXS5jb250ZXh0ICE9PSBjb250ZXh0KVxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50cy5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBSZXNldCB0aGUgYXJyYXksIG9yIHJlbW92ZSBpdCBjb21wbGV0ZWx5IGlmIHdlIGhhdmUgbm8gbW9yZSBsaXN0ZW5lcnMuXG4gICAgLy9cbiAgICBpZiAoZXZlbnRzLmxlbmd0aCkgdGhpcy5fZXZlbnRzW2V2dF0gPSBldmVudHMubGVuZ3RoID09PSAxID8gZXZlbnRzWzBdIDogZXZlbnRzO1xuICAgIGVsc2UgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgICBlbHNlIGRlbGV0ZSB0aGlzLl9ldmVudHNbZXZ0XTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIGxpc3RlbmVycywgb3IgdGhvc2Ugb2YgdGhlIHNwZWNpZmllZCBldmVudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xTeW1ib2x9IFtldmVudF0gVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyhldmVudCkge1xuICB2YXIgZXZ0O1xuXG4gIGlmIChldmVudCkge1xuICAgIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG4gICAgaWYgKHRoaXMuX2V2ZW50c1tldnRdKSB7XG4gICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMCkgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICAgICAgZWxzZSBkZWxldGUgdGhpcy5fZXZlbnRzW2V2dF07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vXG4vLyBBbGlhcyBtZXRob2RzIG5hbWVzIGJlY2F1c2UgcGVvcGxlIHJvbGwgbGlrZSB0aGF0LlxuLy9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uO1xuXG4vL1xuLy8gVGhpcyBmdW5jdGlvbiBkb2Vzbid0IGFwcGx5IGFueW1vcmUuXG4vL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLy9cbi8vIEV4cG9zZSB0aGUgcHJlZml4LlxuLy9cbkV2ZW50RW1pdHRlci5wcmVmaXhlZCA9IHByZWZpeDtcblxuLy9cbi8vIEFsbG93IGBFdmVudEVtaXR0ZXJgIHRvIGJlIGltcG9ydGVkIGFzIG1vZHVsZSBuYW1lc3BhY2UuXG4vL1xuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgbW9kdWxlLlxuLy9cbmlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG1vZHVsZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbn1cbiJdfQ==
