(function () {
	'use strict';

	var n,
	    u,
	    i,
	    t,
	    o,
	    f = {},
	    e = [],
	    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

	function s(n, l) {
	  for (var u in l) n[u] = l[u];

	  return n;
	}

	function a(n) {
	  var l = n.parentNode;
	  l && l.removeChild(n);
	}

	function v(n, l, u) {
	  var i,
	      t,
	      o,
	      r = arguments,
	      f = {};

	  for (o in l) "key" == o ? i = l[o] : "ref" == o ? t = l[o] : f[o] = l[o];

	  if (arguments.length > 3) for (u = [u], o = 3; o < arguments.length; o++) u.push(r[o]);
	  if (null != u && (f.children = u), "function" == typeof n && null != n.defaultProps) for (o in n.defaultProps) void 0 === f[o] && (f[o] = n.defaultProps[o]);
	  return h(n, f, i, t, null);
	}

	function h(l, u, i, t, o) {
	  var r = {
	    type: l,
	    props: u,
	    key: i,
	    ref: t,
	    __k: null,
	    __: null,
	    __b: 0,
	    __e: null,
	    __d: void 0,
	    __c: null,
	    __h: null,
	    constructor: void 0,
	    __v: null == o ? ++n.__v : o
	  };
	  return null != n.vnode && n.vnode(r), r;
	}

	function p(n) {
	  return n.children;
	}

	function d(n, l) {
	  this.props = n, this.context = l;
	}

	function _(n, l) {
	  if (null == l) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;

	  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

	  return "function" == typeof n.type ? _(n) : null;
	}

	function w(n) {
	  var l, u;

	  if (null != (n = n.__) && null != n.__c) {
	    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
	      n.__e = n.__c.base = u.__e;
	      break;
	    }

	    return w(n);
	  }
	}

	function k(l) {
	  (!l.__d && (l.__d = !0) && u.push(l) && !g.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(g);
	}

	function g() {
	  for (var n; g.__r = u.length;) n = u.sort(function (n, l) {
	    return n.__v.__b - l.__v.__b;
	  }), u = [], n.some(function (n) {
	    var l, u, i, t, o, r;
	    n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = s({}, t)).__v = t.__v + 1, $(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [o] : null, u, null == o ? _(t) : o, t.__h), j(u, t), t.__e != o && w(t)));
	  });
	}

	function m(n, l, u, i, t, o, r, c, s, v) {
	  var y,
	      d,
	      w,
	      k,
	      g,
	      m,
	      x,
	      P = i && i.__k || e,
	      C = P.length;

	  for (s == f && (s = null != r ? r[0] : C ? _(i, 0) : null), u.__k = [], y = 0; y < l.length; y++) if (null != (k = u.__k[y] = null == (k = l[y]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k ? h(null, k, null, null, k) : Array.isArray(k) ? h(p, {
	    children: k
	  }, null, null, null) : k.__b > 0 ? h(k.type, k.props, k.key, null, k.__v) : k)) {
	    if (k.__ = u, k.__b = u.__b + 1, null === (w = P[y]) || w && k.key == w.key && k.type === w.type) P[y] = void 0;else for (d = 0; d < C; d++) {
	      if ((w = P[d]) && k.key == w.key && k.type === w.type) {
	        P[d] = void 0;
	        break;
	      }

	      w = null;
	    }
	    $(n, k, w = w || f, t, o, r, c, s, v), g = k.__e, (d = k.ref) && w.ref != d && (x || (x = []), w.ref && x.push(w.ref, null, k), x.push(d, k.__c || g, k)), null != g ? (null == m && (m = g), "function" == typeof k.type && null != k.__k && k.__k === w.__k ? k.__d = s = b(k, s, n) : s = A(n, k, w, P, r, g, s), v || "option" !== u.type ? "function" == typeof u.type && (u.__d = s) : n.value = "") : s && w.__e == s && s.parentNode != n && (s = _(w));
	  }

	  if (u.__e = m, null != r && "function" != typeof u.type) for (y = r.length; y--;) null != r[y] && a(r[y]);

	  for (y = C; y--;) null != P[y] && ("function" == typeof u.type && null != P[y].__e && P[y].__e == u.__d && (u.__d = _(i, y + 1)), I(P[y], P[y]));

	  if (x) for (y = 0; y < x.length; y++) H(x[y], x[++y], x[++y]);
	}

	function b(n, l, u) {
	  var i, t;

	  for (i = 0; i < n.__k.length; i++) (t = n.__k[i]) && (t.__ = n, l = "function" == typeof t.type ? b(t, l, u) : A(u, t, t, n.__k, null, t.__e, l));

	  return l;
	}

	function x(n, l) {
	  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
	    x(n, l);
	  }) : l.push(n)), l;
	}

	function A(n, l, u, i, t, o, r) {
	  var f, e, c;
	  if (void 0 !== l.__d) f = l.__d, l.__d = void 0;else if (t == u || o != r || null == o.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(o), f = null;else {
	    for (e = r, c = 0; (e = e.nextSibling) && c < i.length; c += 2) if (e == o) break n;

	    n.insertBefore(o, r), f = r;
	  }
	  return void 0 !== f ? f : o.nextSibling;
	}

	function P(n, l, u, i, t) {
	  var o;

	  for (o in u) "children" === o || "key" === o || o in l || z(n, o, null, u[o], i);

	  for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || z(n, o, l[o], u[o], i);
	}

	function C(n, l, u) {
	  "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || c.test(l) ? u : u + "px";
	}

	function z(n, l, u, i, t) {
	  var o, r, f;
	  if (t && "className" == l && (l = "class"), "style" === l) {
	    if ("string" == typeof u) n.style.cssText = u;else {
	      if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || C(n.style, l, "");
	      if (u) for (l in u) i && u[l] === i[l] || C(n.style, l, u[l]);
	    }
	  } else "o" === l[0] && "n" === l[1] ? (o = l !== (l = l.replace(/Capture$/, "")), (r = l.toLowerCase()) in n && (l = r), l = l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, f = o ? T : N, u ? i || n.addEventListener(l, f, o) : n.removeEventListener(l, f, o)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && "size" !== l && "download" !== l && "href" !== l && "contentEditable" !== l && !t && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u && !/^ar/.test(l) ? n.removeAttribute(l) : n.setAttribute(l, u));
	}

	function N(l) {
	  this.l[l.type + !1](n.event ? n.event(l) : l);
	}

	function T(l) {
	  this.l[l.type + !0](n.event ? n.event(l) : l);
	}

	function $(l, u, i, t, o, r, f, e, c) {
	  var a,
	      v,
	      h,
	      y,
	      _,
	      w,
	      k,
	      g,
	      b,
	      x,
	      A,
	      P = u.type;

	  if (void 0 !== u.constructor) return null;
	  null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (a = n.__b) && a(u);

	  try {
	    n: if ("function" == typeof P) {
	      if (g = u.props, b = (a = P.contextType) && t[a.__c], x = a ? b ? b.props.value : a.__ : t, i.__c ? k = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(g, x) : (u.__c = v = new d(g, x), v.constructor = P, v.render = L), b && b.sub(v), v.props = g, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = s({}, v.__s)), s(v.__s, P.getDerivedStateFromProps(g, v.__s))), y = v.props, _ = v.state, h) null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);else {
	        if (null == P.getDerivedStateFromProps && g !== y && null != v.componentWillReceiveProps && v.componentWillReceiveProps(g, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(g, v.__s, x) || u.__v === i.__v) {
	          v.props = g, v.state = v.__s, u.__v !== i.__v && (v.__d = !1), v.__v = u, u.__e = i.__e, u.__k = i.__k, v.__h.length && f.push(v);
	          break n;
	        }

	        null != v.componentWillUpdate && v.componentWillUpdate(g, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () {
	          v.componentDidUpdate(y, _, w);
	        });
	      }
	      v.context = x, v.props = g, v.state = v.__s, (a = n.__r) && a(u), v.__d = !1, v.__v = u, v.__P = l, a = v.render(v.props, v.state, v.context), v.state = v.__s, null != v.getChildContext && (t = s(s({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (w = v.getSnapshotBeforeUpdate(y, _)), A = null != a && a.type === p && null == a.key ? a.props.children : a, m(l, Array.isArray(A) ? A : [A], u, i, t, o, r, f, e, c), v.base = u.__e, u.__h = null, v.__h.length && f.push(v), k && (v.__E = v.__ = null), v.__e = !1;
	    } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = E(i.__e, u, i, t, o, r, f, c);

	    (a = n.diffed) && a(u);
	  } catch (l) {
	    u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), n.__e(l, u, i);
	  }
	}

	function j(l, u) {
	  n.__c && n.__c(u, l), l.some(function (u) {
	    try {
	      l = u.__h, u.__h = [], l.some(function (n) {
	        n.call(u);
	      });
	    } catch (l) {
	      n.__e(l, u.__v);
	    }
	  });
	}

	function E(n, l, u, i, t, o, r, c) {
	  var s,
	      a,
	      v,
	      h,
	      y,
	      p = u.props,
	      d = l.props;
	  if (t = "svg" === l.type || t, null != o) for (s = 0; s < o.length; s++) if (null != (a = o[s]) && ((null === l.type ? 3 === a.nodeType : a.localName === l.type) || n == a)) {
	    n = a, o[s] = null;
	    break;
	  }

	  if (null == n) {
	    if (null === l.type) return document.createTextNode(d);
	    n = t ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type, d.is && {
	      is: d.is
	    }), o = null, c = !1;
	  }

	  if (null === l.type) p === d || c && n.data === d || (n.data = d);else {
	    if (null != o && (o = e.slice.call(n.childNodes)), v = (p = u.props || f).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !c) {
	      if (null != o) for (p = {}, y = 0; y < n.attributes.length; y++) p[n.attributes[y].name] = n.attributes[y].value;
	      (h || v) && (h && (v && h.__html == v.__html || h.__html === n.innerHTML) || (n.innerHTML = h && h.__html || ""));
	    }

	    P(n, d, p, t, c), h ? l.__k = [] : (s = l.props.children, m(n, Array.isArray(s) ? s : [s], l, u, i, "foreignObject" !== l.type && t, o, r, f, c)), c || ("value" in d && void 0 !== (s = d.value) && (s !== n.value || "progress" === l.type && !s) && z(n, "value", s, p.value, !1), "checked" in d && void 0 !== (s = d.checked) && s !== n.checked && z(n, "checked", s, p.checked, !1));
	  }
	  return n;
	}

	function H(l, u, i) {
	  try {
	    "function" == typeof l ? l(u) : l.current = u;
	  } catch (l) {
	    n.__e(l, i);
	  }
	}

	function I(l, u, i) {
	  var t, o, r;

	  if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || H(t, null, u)), i || "function" == typeof l.type || (i = null != (o = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
	    if (t.componentWillUnmount) try {
	      t.componentWillUnmount();
	    } catch (l) {
	      n.__e(l, u);
	    }
	    t.base = t.__P = null;
	  }

	  if (t = l.__k) for (r = 0; r < t.length; r++) t[r] && I(t[r], u, i);
	  null != o && a(o);
	}

	function L(n, l, u) {
	  return this.constructor(n, u);
	}

	function M(l, u, i) {
	  var t, r, c;
	  n.__ && n.__(l, u), r = (t = i === o) ? null : i && i.__k || u.__k, l = v(p, null, [l]), c = [], $(u, (t ? u : i || u).__k = l, r || f, f, void 0 !== u.ownerSVGElement, i && !t ? [i] : r ? null : u.childNodes.length ? e.slice.call(u.childNodes) : null, c, i || f, t), j(c, l);
	}

	function S(n, l, u) {
	  var i,
	      t,
	      o,
	      r = arguments,
	      f = s({}, n.props);

	  for (o in l) "key" == o ? i = l[o] : "ref" == o ? t = l[o] : f[o] = l[o];

	  if (arguments.length > 3) for (u = [u], o = 3; o < arguments.length; o++) u.push(r[o]);
	  return null != u && (f.children = u), h(n.type, f, i || n.key, t || n.ref, null);
	}

	n = {
	  __e: function (n, l) {
	    for (var u, i, t, o = l.__h; l = l.__;) if ((u = l.__c) && !u.__) try {
	      if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return l.__h = o, u.__E = u;
	    } catch (l) {
	      n = l;
	    }

	    throw n;
	  },
	  __v: 0
	}, d.prototype.setState = function (n, l) {
	  var u;
	  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(s({}, u), this.props)), n && s(u, n), null != n && this.__v && (l && this.__h.push(l), k(this));
	}, d.prototype.forceUpdate = function (n) {
	  this.__v && (this.__e = !0, n && this.__h.push(n), k(this));
	}, d.prototype.render = p, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, o = f, 0;

	var EMPTY$1 = {};

	function assign(obj, props) {
	  // eslint-disable-next-line guard-for-in
	  for (var i in props) {
	    obj[i] = props[i];
	  }

	  return obj;
	}

	function exec(url, route, opts) {
	  var reg = /(?:\?([^#]*))?(#.*)?$/,
	      c = url.match(reg),
	      matches = {},
	      ret;

	  if (c && c[1]) {
	    var p = c[1].split('&');

	    for (var i = 0; i < p.length; i++) {
	      var r = p[i].split('=');
	      matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
	    }
	  }

	  url = segmentize(url.replace(reg, ''));
	  route = segmentize(route || '');
	  var max = Math.max(url.length, route.length);

	  for (var i$1 = 0; i$1 < max; i$1++) {
	    if (route[i$1] && route[i$1].charAt(0) === ':') {
	      var param = route[i$1].replace(/(^:|[+*?]+$)/g, ''),
	          flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
	          plus = ~flags.indexOf('+'),
	          star = ~flags.indexOf('*'),
	          val = url[i$1] || '';

	      if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
	        ret = false;
	        break;
	      }

	      matches[param] = decodeURIComponent(val);

	      if (plus || star) {
	        matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
	        break;
	      }
	    } else if (route[i$1] !== url[i$1]) {
	      ret = false;
	      break;
	    }
	  }

	  if (opts.default !== true && ret === false) {
	    return false;
	  }

	  return matches;
	}

	function pathRankSort(a, b) {
	  return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
	} // filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.


	function prepareVNodeForRanking(vnode, index) {
	  vnode.index = index;
	  vnode.rank = rankChild(vnode);
	  return vnode.props;
	}

	function segmentize(url) {
	  return url.replace(/(^\/+|\/+$)/g, '').split('/');
	}

	function rankSegment(segment) {
	  return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
	}

	function rank(path) {
	  return segmentize(path).map(rankSegment).join('');
	}

	function rankChild(vnode) {
	  return vnode.props.default ? 0 : rank(vnode.props.path);
	}

	var customHistory = null;
	var ROUTERS = [];
	var subscribers = [];
	var EMPTY = {};

	function setUrl(url, type) {
	  if (type === void 0) type = 'push';

	  if (customHistory && customHistory[type]) {
	    customHistory[type](url);
	  } else if (typeof history !== 'undefined' && history[type + 'State']) {
	    history[type + 'State'](null, null, url);
	  }
	}

	function getCurrentUrl() {
	  var url;

	  if (customHistory && customHistory.location) {
	    url = customHistory.location;
	  } else if (customHistory && customHistory.getCurrentLocation) {
	    url = customHistory.getCurrentLocation();
	  } else {
	    url = typeof location !== 'undefined' ? location : EMPTY;
	  }

	  return "" + (url.pathname || '') + (url.search || '');
	}

	function route(url, replace) {
	  if (replace === void 0) replace = false;

	  if (typeof url !== 'string' && url.url) {
	    replace = url.replace;
	    url = url.url;
	  } // only push URL into history if we can handle it


	  if (canRoute(url)) {
	    setUrl(url, replace ? 'replace' : 'push');
	  }

	  return routeTo(url);
	}
	/** Check if the given URL can be handled by any router instances. */


	function canRoute(url) {
	  for (var i = ROUTERS.length; i--;) {
	    if (ROUTERS[i].canRoute(url)) {
	      return true;
	    }
	  }

	  return false;
	}
	/** Tell all router instances to handle the given URL.  */


	function routeTo(url) {
	  var didRoute = false;

	  for (var i = 0; i < ROUTERS.length; i++) {
	    if (ROUTERS[i].routeTo(url) === true) {
	      didRoute = true;
	    }
	  }

	  for (var i$1 = subscribers.length; i$1--;) {
	    subscribers[i$1](url);
	  }

	  return didRoute;
	}

	function routeFromLink(node) {
	  // only valid elements
	  if (!node || !node.getAttribute) {
	    return;
	  }

	  var href = node.getAttribute('href'),
	      target = node.getAttribute('target'); // ignore links with targets and non-path URLs

	  if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
	    return;
	  } // attempt to route, if no match simply cede control to browser


	  return route(href);
	}

	function handleLinkClick(e) {
	  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
	    return;
	  }

	  routeFromLink(e.currentTarget || e.target || this);
	  return prevent(e);
	}

	function prevent(e) {
	  if (e) {
	    if (e.stopImmediatePropagation) {
	      e.stopImmediatePropagation();
	    }

	    if (e.stopPropagation) {
	      e.stopPropagation();
	    }

	    e.preventDefault();
	  }

	  return false;
	}

	function delegateLinkHandler(e) {
	  // ignore events the browser takes care of already:
	  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
	    return;
	  }

	  var t = e.target;

	  do {
	    if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
	      if (t.hasAttribute('native')) {
	        return;
	      } // if link is handled by the router, prevent browser defaults


	      if (routeFromLink(t)) {
	        return prevent(e);
	      }
	    }
	  } while (t = t.parentNode);
	}

	var eventListenersInitialized = false;

	function initEventListeners() {
	  if (eventListenersInitialized) {
	    return;
	  }

	  if (typeof addEventListener === 'function') {
	    if (!customHistory) {
	      addEventListener('popstate', function () {
	        routeTo(getCurrentUrl());
	      });
	    }

	    addEventListener('click', delegateLinkHandler);
	  }

	  eventListenersInitialized = true;
	}

	var Router = function (Component$$1) {
	  function Router(props) {
	    Component$$1.call(this, props);

	    if (props.history) {
	      customHistory = props.history;
	    }

	    this.state = {
	      url: props.url || getCurrentUrl()
	    };
	    initEventListeners();
	  }

	  if (Component$$1) Router.__proto__ = Component$$1;
	  Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
	  Router.prototype.constructor = Router;

	  Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
	    if (props.static !== true) {
	      return true;
	    }

	    return props.url !== this.props.url || props.onChange !== this.props.onChange;
	  };
	  /** Check if the given URL can be matched against any children */


	  Router.prototype.canRoute = function canRoute(url) {
	    var children = x(this.props.children);
	    return this.getMatchingChildren(children, url, false).length > 0;
	  };
	  /** Re-render children with a new URL to match against. */


	  Router.prototype.routeTo = function routeTo(url) {
	    this.setState({
	      url: url
	    });
	    var didRoute = this.canRoute(url); // trigger a manual re-route if we're not in the middle of an update:

	    if (!this.updating) {
	      this.forceUpdate();
	    }

	    return didRoute;
	  };

	  Router.prototype.componentWillMount = function componentWillMount() {
	    ROUTERS.push(this);
	    this.updating = true;
	  };

	  Router.prototype.componentDidMount = function componentDidMount() {
	    var this$1 = this;

	    if (customHistory) {
	      this.unlisten = customHistory.listen(function (location) {
	        this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
	      });
	    }

	    this.updating = false;
	  };

	  Router.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (typeof this.unlisten === 'function') {
	      this.unlisten();
	    }

	    ROUTERS.splice(ROUTERS.indexOf(this), 1);
	  };

	  Router.prototype.componentWillUpdate = function componentWillUpdate() {
	    this.updating = true;
	  };

	  Router.prototype.componentDidUpdate = function componentDidUpdate() {
	    this.updating = false;
	  };

	  Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
	    return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
	      var matches = exec(url, vnode.props.path, vnode.props);

	      if (matches) {
	        if (invoke !== false) {
	          var newProps = {
	            url: url,
	            matches: matches
	          };
	          assign(newProps, matches);
	          delete newProps.ref;
	          delete newProps.key;
	          return S(vnode, newProps);
	        }

	        return vnode;
	      }
	    }).filter(Boolean);
	  };

	  Router.prototype.render = function render(ref, ref$1) {
	    var children = ref.children;
	    var onChange = ref.onChange;
	    var url = ref$1.url;
	    var active = this.getMatchingChildren(x(children), url, true);
	    var current = active[0] || null;
	    var previous = this.previousUrl;

	    if (url !== previous) {
	      this.previousUrl = url;

	      if (typeof onChange === 'function') {
	        onChange({
	          router: this,
	          url: url,
	          previous: previous,
	          active: active,
	          current: current
	        });
	      }
	    }

	    return current;
	  };

	  return Router;
	}(d);

	var Link = function (props) {
	  return v('a', assign({
	    onClick: handleLinkClick
	  }, props));
	};

	var Route = function (props) {
	  return v(props.component, props);
	};

	Router.subscribers = subscribers;
	Router.getCurrentUrl = getCurrentUrl;
	Router.route = route;
	Router.Router = Router;
	Router.Route = Route;
	Router.Link = Link;
	Router.exec = exec;

	/** @jsx h */

	class Todo extends d {
	  addTodo() {
	    const {
	      todos = []
	    } = this.state;
	    this.setState({
	      todos: todos.concat(`Item ${todos.length}`)
	    });
	  }

	  render({
	    page
	  }, {
	    todos = []
	  }) {
	    return v("div", {
	      class: "app"
	    }, v(Header, {
	      name: `TODO ${page}`
	    }), v("ul", null, todos.map(todo => v("li", {
	      key: todo
	    }, todo))), v("button", {
	      onClick: () => this.addTodo()
	    }, "Add Todo"));
	  }

	}

	const Header = ({
	  name
	}) => v("h1", null, name, " List");

	/** @jsx h */
	class home extends d {
	  render() {
	    return v("div", null, "Hello There");
	  }

	}

	/** @jsx h */

	class App extends d {
	  render() {
	    return v("div", {
	      class: "app"
	    }, v(Router, null, v(home, {
	      path: "/"
	    }), v(Todo, {
	      path: "/profile/",
	      page: "All"
	    })));
	  }

	}

	M(v(App, null), document.getElementById('root'));

}());
//# sourceMappingURL=index.js.map
