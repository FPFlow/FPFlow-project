/* 2021-01-07 15:00:44 wl.js @issue to lijiwen@jd.com Thanks */
try {
    window.fingerprint = {},
        function loadFingerprint() {
            fingerprint.config = {
                fpb_send_data: 'body={"appname": "jdwebm_hf","jdkey": "","whwswswws": "","businness": "","body": {}}',
                api: {
                    canvas_spendtime: 0
                }
            }, fingerprint.broswer = {
                getNavigatorPlatform: function() {
                    return navigator.platform ? navigator.platform : "unknown"
                },
                getDeviceMemory: function() {
                    return navigator.deviceMemory ? navigator.deviceMemory : 0
                },
                rB: function() {
                    var e = [],
                        t = ["__webdriver_evaluate", "__selenium_evaluate", "__webdriver_script_function", "__webdriver_script_func", "__webdriver_script_fn", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__driver_evaluate", "__selenium_unwrapped", "__fxdriver_unwrapped"],
                        r = ["_phantom", "__nightmare", "_selenium", "callPhantom", "callSelenium", "_Selenium_IDE_Recorder"];
                    for (var n in r) {
                        var i = r[n];
                        window[i] && e.push({
                            key: "window",
                            value: i
                        })
                    }
                    for (var o in t) {
                        r = t[o];
                        window.document[r] && e.push({
                            key: "window_document",
                            value: r
                        })
                    }
                    for (var a in window.document) a.match(/\$[a-z]dc_/) && window.document[a].cache_ && e.push({
                        key: "document",
                        value: a
                    });
                    return window.external && JSON.stringify(window.external) && -1 != JSON.stringify(window.external).indexOf("Sequentum") && e.push({
                        key: "window_external",
                        value: 1
                    }), window.document.documentElement.getAttribute("selenium") && e.push({
                        key: "document_selenium",
                        value: 1
                    }), window.document.documentElement.getAttribute("webdriver") && e.push({
                        key: "document_webdriver",
                        value: 1
                    }), window.document.documentElement.getAttribute("driver") && e.push({
                        key: "document_driver",
                        value: 1
                    }), e
                },
                getHeadless: function() {
                    return 0 < this.rB().length ? 1 : -1 < navigator.userAgent.toLocaleLowerCase().indexOf("headless") ? 1 : 0
                },
                getLocation: function() {
                    return fingerprint.util.MD5.hex_md5(location.href.split("?")[0])
                },
                getUserAgent: function() {
                    return fingerprint.util.MD5.hex_md5(navigator.userAgent)
                },
                getCanvas: function() {
                    try {
                        var e = new Date,
                            t = [],
                            r = document.createElement("canvas");
                        r.width = 2e3, r.height = 200, r.style.display = "inline";
                        var n = r.getContext("2d");
                        return n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), t.push("canvas winding:" + (!1 === n.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", n.font = "11pt no-real-font-123", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.2)", n.font = "18pt Arial", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), n.globalCompositeOperation = "multiply", n.fillStyle = "rgb(255,0,255)", n.beginPath(), n.arc(50, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(0,255,255)", n.beginPath(), n.arc(100, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,255,0)", n.beginPath(), n.arc(75, 100, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,0,255)", n.arc(75, 75, 75, 0, 2 * Math.PI, !0), n.arc(75, 75, 25, 0, 2 * Math.PI, !0), n.fill("evenodd"), t.push("canvas fp:" + fingerprint.util.MD5.hex_md5(r.toDataURL())), fingerprint.config.api.canvas_spendtime = (new Date).getTime() - e.getTime(), t.join("~")
                    } catch (i) {
                        return console.log(i), ""
                    }
                },
                getPluginName: function() {
                    var e = "";
                    if (0 < navigator.plugins.length)
                        for (i = 0; i < navigator.plugins.length; i++) e += navigator.plugins[i].name + ";";
                    return e
                },
                getPluginNum: function() {
                    return navigator.plugins.length
                },
                getScreenResolution: function() {
                    return window.screen.width + "*" + window.screen.height
                }
            }, fingerprint.util = {
                G: "",
                getCookie: function(e) {
                    var t, r = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
                    return (t = document.cookie.match(r)) ? unescape(t[2]) : ""
                },
                getStorage: function(e) {
                    if (window.Storage && window.localStorage && window.localStorage instanceof Storage) return JSON.parse(localStorage.getItem(e))
                },
                setStorage: function(e, t) {
                    window.Storage && window.localStorage && window.localStorage instanceof Storage && localStorage.setItem(e, JSON.stringify(t))
                },
                _str_find: function(e, t) {
                    if ("string" == typeof e) {
                        var r = t + "=",
                            n = e.indexOf(r);
                        if (-1 !== n) {
                            var i = e.indexOf("&", n);
                            return -1 !== i ? e.substring(n + r.length, i) : e.substring(n + r.length)
                        }
                    }
                },
                getFpb: function(e) {
                    var t, r = "";
                    if (window.navigator.cookieEnabled) {
                        var n = window.document.cookie.indexOf(e + "=");
                        if (-1 != n) {
                            n += e.length + 1;
                            var i = window.document.cookie.indexOf(";", n); - 1 == i && (i = window.document.cookie.length);
                            try {
                                t = decodeURIComponent(window.document.cookie.substring(n, i)) || ""
                            } catch (o) {
                                t = window.document.cookie.substring(n, i) || ""
                            }
                            r = r || t
                        }
                    }
                    try {
                        window.localStorage && (t = window.localStorage.getItem(e) || "", r = r || t)
                    } catch (o) {}
                    try {
                        window.sessionStorage && (t = window.sessionStorage.getItem(e) || "", r = r || t)
                    } catch (a) {}
                    try {
                        t = this._str_find(window.name, e), r = r || t
                    } catch (d) {
                        console.log(d)
                    }
                    return (r = r || t) || ""
                },
                getDateFormat: function(e, t) {
                    var r = {
                        "M+": e.getMonth() + 1,
                        "d+": e.getDate(),
                        "h+": e.getHours(),
                        "m+": e.getMinutes(),
                        "s+": e.getSeconds(),
                        "q+": Math.floor((e.getMonth() + 3) / 3),
                        S: e.getMilliseconds()
                    };
                    for (var n in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), r) new RegExp("(" + n + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[n] : ("00" + r[n]).substr(("" + r[n]).length)));
                    return t
                },
                MD5: {
                    chrsz: 8,
                    G: "",
                    hex_md5: function(e) {
                        return this.binl2hex(this.core_md5(this.str2binl(e), e.length * this.chrsz))
                    },
                    core_md5: function(e, t) {
                        e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                        for (var r = 1732584193, n = -271733879, i = -1732584194, o = 271733878, a = 0; a < e.length; a += 16) {
                            var d = r,
                                s = n,
                                c = i,
                                u = o;
                            r = this.md5_ff(r, n, i, o, e[a + 0], 7, -680876936), o = this.md5_ff(o, r, n, i, e[a + 1], 12, -389564586), i = this.md5_ff(i, o, r, n, e[a + 2], 17, 606105819), n = this.md5_ff(n, i, o, r, e[a + 3], 22, -1044525330), r = this.md5_ff(r, n, i, o, e[a + 4], 7, -176418897), o = this.md5_ff(o, r, n, i, e[a + 5], 12, 1200080426), i = this.md5_ff(i, o, r, n, e[a + 6], 17, -1473231341), n = this.md5_ff(n, i, o, r, e[a + 7], 22, -45705983), r = this.md5_ff(r, n, i, o, e[a + 8], 7, 1770035416), o = this.md5_ff(o, r, n, i, e[a + 9], 12, -1958414417), i = this.md5_ff(i, o, r, n, e[a + 10], 17, -42063), n = this.md5_ff(n, i, o, r, e[a + 11], 22, -1990404162), r = this.md5_ff(r, n, i, o, e[a + 12], 7, 1804603682), o = this.md5_ff(o, r, n, i, e[a + 13], 12, -40341101), i = this.md5_ff(i, o, r, n, e[a + 14], 17, -1502002290), n = this.md5_ff(n, i, o, r, e[a + 15], 22, 1236535329), r = this.md5_gg(r, n, i, o, e[a + 1], 5, -165796510), o = this.md5_gg(o, r, n, i, e[a + 6], 9, -1069501632), i = this.md5_gg(i, o, r, n, e[a + 11], 14, 643717713), n = this.md5_gg(n, i, o, r, e[a + 0], 20, -373897302), r = this.md5_gg(r, n, i, o, e[a + 5], 5, -701558691), o = this.md5_gg(o, r, n, i, e[a + 10], 9, 38016083), i = this.md5_gg(i, o, r, n, e[a + 15], 14, -660478335), n = this.md5_gg(n, i, o, r, e[a + 4], 20, -405537848), r = this.md5_gg(r, n, i, o, e[a + 9], 5, 568446438), o = this.md5_gg(o, r, n, i, e[a + 14], 9, -1019803690), i = this.md5_gg(i, o, r, n, e[a + 3], 14, -187363961), n = this.md5_gg(n, i, o, r, e[a + 8], 20, 1163531501), r = this.md5_gg(r, n, i, o, e[a + 13], 5, -1444681467), o = this.md5_gg(o, r, n, i, e[a + 2], 9, -51403784), i = this.md5_gg(i, o, r, n, e[a + 7], 14, 1735328473), n = this.md5_gg(n, i, o, r, e[a + 12], 20, -1926607734), r = this.md5_hh(r, n, i, o, e[a + 5], 4, -378558), o = this.md5_hh(o, r, n, i, e[a + 8], 11, -2022574463), i = this.md5_hh(i, o, r, n, e[a + 11], 16, 1839030562), n = this.md5_hh(n, i, o, r, e[a + 14], 23, -35309556), r = this.md5_hh(r, n, i, o, e[a + 1], 4, -1530992060), o = this.md5_hh(o, r, n, i, e[a + 4], 11, 1272893353), i = this.md5_hh(i, o, r, n, e[a + 7], 16, -155497632), n = this.md5_hh(n, i, o, r, e[a + 10], 23, -1094730640), r = this.md5_hh(r, n, i, o, e[a + 13], 4, 681279174), o = this.md5_hh(o, r, n, i, e[a + 0], 11, -358537222), i = this.md5_hh(i, o, r, n, e[a + 3], 16, -722521979), n = this.md5_hh(n, i, o, r, e[a + 6], 23, 76029189), r = this.md5_hh(r, n, i, o, e[a + 9], 4, -640364487), o = this.md5_hh(o, r, n, i, e[a + 12], 11, -421815835), i = this.md5_hh(i, o, r, n, e[a + 15], 16, 530742520), n = this.md5_hh(n, i, o, r, e[a + 2], 23, -995338651), r = this.md5_ii(r, n, i, o, e[a + 0], 6, -198630844), o = this.md5_ii(o, r, n, i, e[a + 7], 10, 1126891415), i = this.md5_ii(i, o, r, n, e[a + 14], 15, -1416354905), n = this.md5_ii(n, i, o, r, e[a + 5], 21, -57434055), r = this.md5_ii(r, n, i, o, e[a + 12], 6, 1700485571), o = this.md5_ii(o, r, n, i, e[a + 3], 10, -1894986606), i = this.md5_ii(i, o, r, n, e[a + 10], 15, -1051523), n = this.md5_ii(n, i, o, r, e[a + 1], 21, -2054922799), r = this.md5_ii(r, n, i, o, e[a + 8], 6, 1873313359), o = this.md5_ii(o, r, n, i, e[a + 15], 10, -30611744), i = this.md5_ii(i, o, r, n, e[a + 6], 15, -1560198380), n = this.md5_ii(n, i, o, r, e[a + 13], 21, 1309151649), r = this.md5_ii(r, n, i, o, e[a + 4], 6, -145523070), o = this.md5_ii(o, r, n, i, e[a + 11], 10, -1120210379), i = this.md5_ii(i, o, r, n, e[a + 2], 15, 718787259), n = this.md5_ii(n, i, o, r, e[a + 9], 21, -343485551), r = this.safe_add(r, d), n = this.safe_add(n, s), i = this.safe_add(i, c), o = this.safe_add(o, u)
                        }
                        return Array(r, n, i, o)
                    },
                    md5_cmn: function(e, t, r, n, i, o) {
                        return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(t, e), this.safe_add(n, o)), i), r)
                    },
                    md5_ff: function(e, t, r, n, i, o, a) {
                        return this.md5_cmn(t & r | ~t & n, e, t, i, o, a)
                    },
                    md5_gg: function(e, t, r, n, i, o, a) {
                        return this.md5_cmn(t & n | r & ~n, e, t, i, o, a)
                    },
                    md5_hh: function(e, t, r, n, i, o, a) {
                        return this.md5_cmn(t ^ r ^ n, e, t, i, o, a)
                    },
                    md5_ii: function(e, t, r, n, i, o, a) {
                        return this.md5_cmn(r ^ (t | ~n), e, t, i, o, a)
                    },
                    safe_add: function(e, t) {
                        var r = (65535 & e) + (65535 & t);
                        return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
                    },
                    bit_rol: function(e, t) {
                        return e << t | e >>> 32 - t
                    },
                    str2binl: function(e) {
                        for (var t = Array(), r = (1 << this.chrsz) - 1, n = 0; n < e.length * this.chrsz; n += this.chrsz) t[n >> 5] |= (e.charCodeAt(n / this.chrsz) & r) << n % 32;
                        return t
                    },
                    binl2hex: function(e) {
                        for (var t = "0123456789abcdef", r = "", n = 0; n < 4 * e.length; n++) r += t.charAt(e[n >> 2] >> n % 4 * 8 + 4 & 15) + t.charAt(e[n >> 2] >> n % 4 * 8 & 15);
                        return r
                    }
                },
                Base64: {
                    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    encode: function(e) {
                        var t, r, n, i, o, a, d, s = "",
                            c = 0;
                        for (e = this._utf8_encode(e); c < e.length;) i = (t = e.charCodeAt(c++)) >> 2, o = (3 & t) << 4 | (r = e.charCodeAt(c++)) >> 4, a = (15 & r) << 2 | (n = e.charCodeAt(c++)) >> 6, d = 63 & n, isNaN(r) ? a = d = 64 : isNaN(n) && (d = 64), s = s + this._keyStr.charAt(i) + this._keyStr.charAt(o) + this._keyStr.charAt(a) + this._keyStr.charAt(d);
                        return s
                    },
                    _utf8_encode: function(e) {
                        e = e.replace(/\r\n/g, "\n");
                        for (var t = "", r = 0; r < e.length; r++) {
                            var n = e.charCodeAt(r);
                            n < 128 ? t += String.fromCharCode(n) : (127 < n && n < 2048 ? t += String.fromCharCode(n >> 6 | 192) : (t += String.fromCharCode(n >> 12 | 224), t += String.fromCharCode(n >> 6 & 63 | 128)), t += String.fromCharCode(63 & n | 128))
                        }
                        return t
                    }
                }
            }, getFingerprint = function() {
                var t = {};
                ! function() {
                    try {
                        t.b = fingerprint.util.getCookie("shshshfpa"), t.c = fingerprint.util.getFpb("shshshfpb"), t.d = fingerprint.broswer.getNavigatorPlatform(), t.f = fingerprint.broswer.getDeviceMemory(), t.g = fingerprint.broswer.getHeadless(), t.h = "", t.i = fingerprint.config.api.canvas_spendtime, t.j = fingerprint.util.getDateFormat(new Date, "yyyy-MM-dd hh:mm:ss"), t.k = fingerprint.broswer.getLocation(), t.l = fingerprint.broswer.getUserAgent(), t.m = fingerprint.util.getCookie("pin") || fingerprint.util.getCookie("pt_pin"), t.n = fingerprint.broswer.getPluginName(), t.o = fingerprint.broswer.getPluginNum(), t.p = fingerprint.broswer.getScreenResolution()
                    } catch (e) {
                        return
                    }
                }();
                try {
                    return "v001" + fingerprint.util.Base64.encode(JSON.stringify(t))
                } catch (e) {
                    return console.log(e), "error encodeData:" + e
                }
            }
        }()
} catch (e) {
    getFingerprint = function() {
        return console.log(e), "error :" + e
    }
}

function setCookieMills(e, t, r) {
    var n = new Date;
    n.setTime(n.getTime() + r);
    var i = 0 <= window.document.domain.indexOf("360buy") ? ".360buy.com" : ".jd.com";
    document.cookie = e + "=" + escape(t) + ";expires=" + n.toGMTString() + ";path=/;domain=" + i
}

function getCookie(e) {
    var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
    return null != t ? unescape(t[2]) : null
}

function deleteCookie(e) {
    null != getCookie(e) && setCookieMills(e, "", -1)
}

function seClick(e, t, r) {
    var n = "seWids" + e,
        i = getCookie(n);
    null != i ? i.toString().indexOf(r) < 0 && (i = i + "," + r) : i = r;
    setCookieMills(n, i, 864e5), privateLogWLJS(2, 2, t, r)
}

function appendJSONCookie(cookieName, key, wid, Mills) {
    var ns = eval("(" + getCookie(cookieName) + ")");
    null != ns && "" != ns || (ns = new Object), null == ns[key] && (ns[key] = "");
    var pos = ns[key].indexOf(wid);
    pos < 0 && (ns[key] = ns[key] + "," + wid), setCookieMills(cookieName, $.toJSON(ns), Mills)
}

function reBook(e, t, r) {
    var n = t.toString().split("#")[0];
    appendJSONCookie("_rtbook", e, n, 864e5), privateLogWLJS(3, e, n, r)
}

function fe(e, t, r) {
    privateLogWLJS("f", e, t, r)
}

function reClick2012(e, t, r) {
    var n = t.toString().split("#")[0];
    appendJSONCookie("reHome2012", e, n, 864e5), privateLogWLJS(3, e, n, r)
}

function reClickCube(e, t) {
    appendJSONCookie("_rdCube", "p" + e, t, 864e5)
}

function mark(e, t) {
    privateLogWLJS(1, t, e)
}

function isMeta(e) {
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return !0;
    var t = e.which,
        r = e.button;
    return t || r === undefined ? 2 === t || 2 === r : 1 & !r && 2 & !r && 4 & r
}

function HashMap() {
    this.values = new Object
}! function($) {
    var escapeable = /["\\\x00-\x1f\x7f-\x9f]/g,
        meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
    $.toJSON = "object" == typeof JSON && JSON.stringify ? JSON.stringify : function(e) {
        if (null === e) return "null";
        var t = typeof e;
        if ("undefined" === t) return undefined;
        if ("number" === t || "boolean" === t) return "" + e;
        if ("string" === t) return $.quoteString(e);
        if ("object" === t) {
            if ("function" == typeof e.toJSON) return $.toJSON(e.toJSON());
            if (e.constructor === Date) {
                var r = e.getUTCMonth() + 1,
                    n = e.getUTCDate(),
                    i = e.getUTCFullYear(),
                    o = e.getUTCHours(),
                    a = e.getUTCMinutes(),
                    d = e.getUTCSeconds(),
                    s = e.getUTCMilliseconds();
                return r < 10 && (r = "0" + r), n < 10 && (n = "0" + n), o < 10 && (o = "0" + o), a < 10 && (a = "0" + a), d < 10 && (d = "0" + d), s < 100 && (s = "0" + s), s < 10 && (s = "0" + s), '"' + i + "-" + r + "-" + n + "T" + o + ":" + a + ":" + d + "." + s + 'Z"'
            }
            if (e.constructor === Array) {
                for (var c = [], u = 0; u < e.length; u++) c.push($.toJSON(e[u]) || "null");
                return "[" + c.join(",") + "]"
            }
            var l, g, h = [];
            for (var f in e) {
                if ("number" === (t = typeof f)) l = '"' + f + '"';
                else {
                    if ("string" !== t) continue;
                    l = $.quoteString(f)
                }
                "function" !== (t = typeof e[f]) && "undefined" !== t && (g = $.toJSON(e[f]), h.push(l + ":" + g))
            }
            return "{" + h.join(",") + "}"
        }
    }, $.evalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function(src) {
        return eval("(" + src + ")")
    }, $.secureEvalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function(src) {
        var filtered = src.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "");
        if (/^[\],:{}\s]*$/.test(filtered)) return eval("(" + src + ")");
        throw new SyntaxError("Error parsing JSON, source is not valid.")
    }, $.quoteString = function(e) {
        return e.match(escapeable) ? '"' + e.replace(escapeable, function(e) {
            var t = meta[e];
            return "string" == typeof t ? t : (t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16))
        }) + '"' : '"' + e + '"'
    }
}(jQuery || $),
function() {
    var o, p = function(e) {
            for (var t = "", r = ""; e && 1 == e.nodeType; e = e.parentNode) {
                if (r = "", e.parentNode)
                    for (var n = e.parentNode.childNodes, i = 0, o = 0, a = n.length; i < a; i++) {
                        var d = n[i];
                        e.tagName === d.tagName && o++, e == d && (r = 1 < o ? "[" + o + "]" : "")
                    }
                t = "/" + e.tagName.toLowerCase() + r + t
            }
            return t
        },
        m = function(e) {
            for (var t = "", r = ""; e && 1 == e.nodeType; e = e.parentNode) {
                if ("" !== e.id) {
                    t = '//*[@id="' + e.id + '"]' + t;
                    break
                }
                if (r = "", e.parentNode)
                    for (var n = e.parentNode.childNodes, i = 0, o = 0, a = n.length; i < a; i++) {
                        var d = n[i];
                        e.tagName === d.tagName && o++, e == d && (r = 1 < o ? "[" + o + "]" : "")
                    }
                t = "/" + e.tagName.toLowerCase() + r + t
            }
            return t
        },
        v = function(e) {
            var t = !0;
            return 0 < e.children.length && (t = !1), t
        },
        w = function(e) {
            var t = !1;
            if (e && e.tagName) {
                var r = e.tagName.toLowerCase();
                t = !("html" === r || "body" === r || e.id && "tol_selected_xelemts_area" === e.id || e.parentElement && e.parentElement.id && "tol_selected_xelemts_area" === e.parentElement.id) && (!! function n(e) {
                    _ = $(e).attr("clstag");
                    for (; !_ && (e = e.parentNode) && "BODY" != e.nodeName;) _ = $(e).attr("clstag");
                    return !!_
                }(e) || ("a" === r || v(e)))
            }
            return t
        },
        _ = "";

    function b(e) {
        var t = 0;
        return e && 500 < e.length && (t = e.indexOf("?")) && (e = e.substring(0, t)), e
    }
    document.getElementsByClassName || (document.getElementsByClassName = function(e) {
        for (var t = document.getElementsByTagName("*"), r = [], n = 0; n < t.length; n++)
            for (var i = t[n], o = i.className.split(" "), a = 0; a < o.length; a++)
                if (o[a] == e) {
                    r.push(i);
                    break
                } return r
    });
    var y = function(e) {
            var t = {};
            return t.scrollWidth = document.body.scrollWidth, t.scrollHeight = document.body.scrollHeight, t.offsetLeft = function r() {
                if (!o) {
                    var e = 0 <= document.domain.indexOf("jd.com") ? document.getElementsByClassName("w") : "";
                    o = e && 0 < e.length ? e[e.length - 1].offsetWidth : 1210 <= window.screen.width ? 1210 : 990
                }
                return document.body.clientWidth > o ? Math.round((document.body.clientWidth - o) / 2) : 0
            }(), t.x = parseInt(function n(e) {
                return e.pageX ? e.pageX : e.clientX ? e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) : -1
            }(e)), t.y = parseInt(function i(e) {
                return e.pageY ? e.pageY : e.clientY ? e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) : -1
            }(e)), 0 < t.offsetLeft && (t.x = parseInt(t.x - t.offsetLeft)), t
        },
        j = function(e) {
            try {
                var t = e.target || e.srcElement;
                if (w(t)) {
                    for (var r = y(e), n = t, i = t.tagName.toLowerCase(), o = m(t) || "-", a = t.parentNode ? m(t.parentNode) : "-", d = t.parentNode ? p(t.parentNode) + "/" : "-", s = p(t) || "-", c = (s && s.split("/").length, n.tagName.toLowerCase());
                        "a" != c && (n = n.parentNode) && "BODY" != n.nodeName;) c = n.tagName.toLowerCase();
                    if (_) {
                        var u = _.split("|");
                        u[2], u[3]
                    }
                    var l = n && n.href ? b(n.href) : "-",
                        g = t.innerText.substring(.2) || "-",
                        h = t.src ? b(t.src) : "-";
                    "a" !== i || v(t) || (g = "-"), encodeURIComponent(o), encodeURIComponent(a), encodeURIComponent(d), r.x, r.y, r.scrollWidth, r.scrollHeight, r.offsetLeft, encodeURIComponent(l), encodeURIComponent(g), encodeURIComponent(h)
                }
            } catch (f) {
                privateLogWLJS("ERROR", "AT_xpathReport", encodeURIComponent(f))
            }
        },
        t = function(e) {
            var t = document.createElement("script");
            t.type = "application/javascript", t.src = e, t.charset = "UTF-8", document.getElementsByTagName("head")[0].appendChild(t)
        },
        r = function(e) {
            var t = document.createElement("link");
            t.type = "text/css", t.rel = "stylesheet", t.href = e, document.getElementsByTagName("head")[0].appendChild(t)
        };
    var n, i, a, d, s = (n = "typepar", a = i || document.location.href, (d = new RegExp("(?:^|&|[?]|[/])" + n + "=([^&]*)").exec(a)) ? decodeURIComponent(d[1]) : null);
    if (!s || "query" !== s && "apply" !== s) document.onclick = function(e) {
        if (((e = e || event).clientX || e.clientY || e.pageX || e.pageY) && (e.offsetX || e.offsetY)) {
            try {
                j(e)
            } catch (e) {
                privateLogWLJS("ERROR", "AT_Document_Onclick")
            }
            for (var t = document, r = window, n = tag = e.srcElement || e.target, i = $(tag).attr("clstag"), o = $(tag).attr("href"), a = ""; !i && (tag = tag.parentNode, tag && "BODY" != tag.nodeName);) i = $(tag).attr("clstag"), o || (o = $(tag).attr("href"), n = tag);
            if (i) {
                var d = i.split("|"),
                    s = d[1],
                    c = d[2],
                    u = d[3];
                if ("keycount" === s && JA) {
                    var l = JA.util.Nt();
                    o ? JA.tracker.ngloader("other.000000", {
                        t1: c,
                        t2: u,
                        p0: JA.util.join(["Q", o]),
                        cb: l.jdcb
                    }) : JA.tracker.ngloader("other.000000", {
                        t1: c,
                        t2: u,
                        p0: JA.util.join(["Q"]),
                        cb: l.jdcb
                    }), a = c + "|" + u, o && /^(http:\/\/|https:\/\/|\/\/).*/.test(o) && "_blank" !== $(n).attr("target") && !isMeta(e) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, setTimeout(function() {
                        var e = t.createElement("a");
                        e.href = o, e.target = "_self", t.body.appendChild(e), "undefined" != typeof e.click ? e.click() : r.location.href = o, t.body.removeChild(e)
                    }, 200))
                }
            }
            var g = this.location.hostname.toLowerCase();
            if (/(sale|mall|jmall|pop).(jd|360buy).(com|hk)/.test(g) || r.ja_heat_map) {
                var h = 0,
                    f = 0,
                    p = 1210 <= r.screen.width && "item.jd.com" == g ? 1210 : 990,
                    m = t.body.clientWidth > p ? Math.round((t.body.clientWidth - p) / 2) : 0;
                f = e.pageX || e.pageY ? (h = e.pageX, e.pageY) : (h = e.clientX + t.body.scrollLeft - t.body.clientLeft, e.clientY + t.body.scrollTop - t.body.clientTop), privateLogWLJS("d", "c", a || "-", h + "x" + f, t.body.scrollWidth + "x" + t.body.scrollHeight, m)
            }
        }
    };
    else try {
        r("//magicforest.jd.com/x.css"), t("//magicforest.jd.com/tol.min.js")
    } catch (e) {
        privateLogWLJS("ERROR", "AT_loadCSS_OR_loadJS")
    } - 1 < document.location.href.indexOf("__clsData=") && (r("//magicforest.jd.com/cls.css"), t("//magicforest.jd.com/cls.js"))
}(), HashMap.prototype.Set = function(e, t) {
    this.values[e] = t
}, HashMap.prototype.Get = function(e) {
    return this.values[e]
}, HashMap.prototype.Contains = function(e) {
    return this.values.hasOwnProperty(e)
}, HashMap.prototype.Remove = function(e) {
    delete this.values[e]
};
var SucInfoMethod = {
    Init: function() {
        this.orderDetailMap = new HashMap, this.rSM = new HashMap;
        for (var e = SucInfo_OrderDetail.toString().split(","), t = 0; t < e.length; t++) {
            var r = e[t].split(":");
            this.orderDetailMap.Set(r[0], r[1]), this.sku = r[0]
        }
    },
    GetSkuNum: function(e) {
        return this.orderDetailMap.Get(e)
    },
    Contains: function(e) {
        return this.orderDetailMap.Contains(e)
    },
    GetDefaultSku: function() {
        return this.sku
    },
    ARS: function(e) {
        this.rSM.Set(e, 0)
    },
    RSContains: function(e) {
        return this.rSM.Contains(e) ? 1 : 0
    }
};

function RecommendTrans(recName, tag, logtype) {
    for (var cookieNames = recName.split(","), i = 0; i < cookieNames.length; i++) {
        var recCookies = eval("(" + getCookie(cookieNames[i]) + ")");
        for (var k in recCookies) "" != recCookies[k] && loginfo(recCookies[k], k.toString(), "cai2012" == k ? "R" : tag, logtype)
    }
}

function simpleMold(e, t, r, n, i) {
    for (var o = 0; o < e.length; o++) {
        var a = getCookie(r + e[o]);
        null != a && "" != a && loginfo(a, e[o], t, n, i)
    }
}

function complexMold(cookieArrary, tag, prefix, logtype, flag) {
    for (var i = 0; i < cookieArrary.length; i++) {
        var items = eval("(" + getCookie(prefix + cookieArrary[i]) + ")");
        if (null != items)
            for (var k in items) "" != items[k] && loginfo(items[k], k.toString(), tag, logtype, flag)
    }
}

function loginfo(e, t, r, n, i) {
    for (var o = e.split(","), a = SucInfo_OrderId, d = SucInfo_OrderType, s = SucInfo_OrderDetail, c = 0; c < o.length; c++)
        if (0 < o[c].length) {
            var u = o[c].toString().split("#")[0];
            SucInfoMethod.Contains(u) && (i ? (privateLogWLJS(n, r, t.concat(".o"), a, d, s, u + ":" + SucInfoMethod.GetSkuNum(u)), privateLogWLJS("4", "R" + t.concat(".o"), a, d, s, u, SucInfoMethod.GetSkuNum(u))) : privateLogWLJS(n, r + t, a, d, s, u, SucInfoMethod.GetSkuNum(u)))
        }
}

function isChecked() {
    return SucInfo_OrderId = window.SucInfo_OrderId || JA.util.getParameter(document.location.href, "suc_orderid") || undefined, SucInfo_OrderType = window.SucInfo_OrderType || JA.util.getParameter(document.location.href, "suc_ordertype") || undefined, SucInfo_OrderDetail = window.SucInfo_OrderDetail || decodeURIComponent(JA.util.getParameter(document.location.href, "suc_sku")) || undefined, SucInfo_OrderId && SucInfo_OrderDetail
}

function funLoad() {
    var e = getCookie("pin");
    null != e && 0 < e.length && setCookieMills("rpin", e, 2592e5)
}

function Clublog() {
    var e = this.location.pathname.toLowerCase(),
        t = this.location.hostname.toLowerCase();
    0 <= e.indexOf("/cart.html", 0) || 0 <= e.indexOf("shoppingcart", 0) ? privateLogWLJS("R2&Page", "Show") : 0 <= e.indexOf("user_home", 0) ? privateLogWLJS("R3&Page", "Show") : 0 <= e.indexOf("initcart.html", 0) || 0 <= e.indexOf("addtocart.html", 0) || 0 <= e.indexOf("initcart.aspx", 0) ? privateLogWLJS("R4R5&Page", "Show") : 0 <= e.indexOf("normal/list.action", 0) || 0 <= e.indexOf("orderlist.aspx", 0) ? privateLogWLJS("DDR&Page", "Show") : "home.360buy.com" == t && "/" == e && privateLogWLJS("R3&Page", "Show")
}

function getHistory() {
    var e = decodeURIComponent(escape(getCookie("pin"))),
        t = getCookie("_ghis"),
        r = 0 <= window.document.location.host.toLowerCase().indexOf("360buy.com") ? "360buy" : "jd";
    if (null == t && null != e) {
        var n = "//gh." + r + ".com/BuyHistory.aspx?mid=" + encodeURIComponent(e);
        $.ajax({
            url: n,
            type: "GET",
            dataType: "jsonp",
            success: function(e) {
                var t = e.SSkus,
                    r = e.UserInsterest;
                0 < t.toString().length && setCookieMills("_ghis", t.toString().substring(0, 51)), 0 < r.toString().length && setCookieMills("_ghit", r)
            }
        })
    }
}

function privateLogWLJS(e, t) {
    var r = Array.prototype.slice.call(arguments);
    r = r && r.slice(2), JA && JA.tracker.ngloader("other.000000", {
        t1: e,
        t2: t,
        p0: encodeURIComponent(JA.util.join(r))
    })
}

function log(e, t) {
    var r = Array.prototype.slice.call(arguments),
        n = r;
    r = r && r.slice(2), JA && JA.tracker.ngloader("other.000000", {
        t1: e,
        t2: t,
        p0: encodeURIComponent(JA.util.join(r))
    }), JA && JA.tracker.isCanPrey() && JA && JA.tracker.ngloader("other.000000", {
        t1: "logservice_check",
        t2: "wl",
        p0: encodeURIComponent(JA.util.join(n))
    })
}

function logJSON(e, t, r) {
    if (!JA) return !1;
    JA.tracker.ngloaderJSON("other.000000", {
        t1: e,
        t2: t,
        p0: r
    }, "toWarriors")
}

function expLogJSON(e, t, r) {
    if (!JA) return !1;
    JA.tracker.ngloaderJSON("exp_log.100000", {
        t1: e,
        t2: t,
        p0: r
    }, "toWarriors")
}! function() {
    function HashMap() {
        this.values = new Object
    }

    function SortedHashMap(e, t) {
        this.IComparer = e, this.IGetKey = t, this.a = new Array, this.h = new HashMap
    }

    function ThirdType(e, t, r) {
        this.t = e, this.v = 5, this.s = 0, 1 < arguments.length && (this.s = t), 2 < arguments.length && (this.v = r)
    }
    HashMap.prototype.Set = function(e, t) {
        this.values[e] = t
    }, HashMap.prototype.Get = function(e) {
        return this.values[e]
    }, HashMap.prototype.Contains = function(e) {
        return this.values.hasOwnProperty(e)
    }, HashMap.prototype.Remove = function(e) {
        delete this.values[e]
    }, SortedHashMap.prototype.Add = function(e, t) {
        this.ContainsKey(e) && this.Remove(e), this.a.push(t), this.a.sort(this.IComparer);
        for (var r = 0; r < this.a.length; r++) {
            e = this.IGetKey(this.a[r]);
            this.h.Set(e, r)
        }
    }, SortedHashMap.prototype.Insert = function(e, t) {
        for (var r = 0, n = this.a.length; r < n; r++)
            if (this.a[r].s === e.s) {
                this.a.splice(r, 1);
                break
            } this.a.length >= t && this.a.splice(t - 1, 1), this.a.unshift(e)
    }, SortedHashMap.prototype.Get = function(e) {
        return this.a[this.h.Get(e)]
    }, SortedHashMap.prototype.Count = function() {
        return this.a.length
    }, SortedHashMap.prototype.Remove = function(e) {
        if (this.h.Contains(e)) {
            var t = this.h.Get(e);
            this.a.splice(t, 1), this.h.Remove(e)
        }
    }, SortedHashMap.prototype.ContainsKey = function(e) {
        return this.h.Contains(e)
    }, SortedHashMap.prototype.Clear = function() {
        this.a = new Array, this.h = new HashMap
    }, SortedHashMap.prototype.GetJson = function() {
        return $.toJSON(this.a)
    }, ThirdType.prototype.Increase = function() {
        this.v = this.v + 2
    }, ThirdType.prototype.Decrease = function() {
        this.v = this.v - 1
    }, ThirdType.prototype.SetSku = function(e) {
        this.s = e
    }, Ttracker = {
        IComparer: function(e, t) {
            return t.v - e.v
        },
        IGetKey: function(e) {
            return e.t
        },
        isbook: function(e) {
            return 1e7 < e && e < 2e7
        },
        trace: function() {
            if ("object" == typeof pageConfig && "object" == typeof pageConfig.product) {
                var e = pageConfig.product.cat instanceof Array && pageConfig.product.cat[2];
                if (e) {
                    var t = $("#name").attr("PshowSkuid") || pageConfig.product.skuid;
                    this.view(e, t), this.viewtypewid()
                }
            }
        },
        viewtypewid: function() {
            Ttracker.util.Vv("typewid") && Ttracker.util.Wv("typewid", "", -63072e6)
        },
        viewhisotry: function(t, s, cname) {
            var nview = {
                    t: t,
                    s: s
                },
                bookmap = new SortedHashMap(this.IComparer, this.IGetKey),
                bview = Ttracker.util.Vv(cname);
            if (bview) try {
                if (0 < bview.indexOf("."))
                    for (var viewarray = bview.split("|"), j = viewarray.length - 1; 0 <= j; j--) {
                        var book = viewarray[j].split(".");
                        bookmap.Insert({
                            t: Number(book[0]),
                            s: Number(book[1])
                        }, 8)
                    } else {
                        var bviews = eval("(" + bview + ")");
                        if (0 < bviews.length && bviews[0].d != undefined) Ttracker.util.Wv(cname, "", -63072e6);
                        else
                            for (var i = bviews.length - 1; 0 <= i; i--) bookmap.Insert(bviews[i], 8)
                    }
            } catch (e) {
                Ttracker.util.Wv(cname, "", -63072e6)
            }
            bookmap.Insert(nview, 8);
            for (var cvalue = "", k = 0, klen = bookmap.a.length; k < klen; k++) cvalue += bookmap.a[k].t + "." + bookmap.a[k].s + (k == klen - 1 ? "" : "|");
            cvalue && Ttracker.util.Wv(cname, cvalue, 63072e6)
        },
        viewrate: function(t, s, cname) {
            var ntw = {
                    t: t,
                    s: s,
                    v: 5
                },
                sitesortmap = new SortedHashMap(this.IComparer, this.IGetKey),
                vrate = Ttracker.util.Vv(cname);
            if (vrate) try {
                if (0 < vrate.indexOf("."))
                    for (var ratearray = vrate.split("|"), j = ratearray.length - 1; 0 <= j; j--) {
                        var tw = ratearray[j].split("."),
                            tv = Number(tw[2] || 0),
                            tid = Number(tw[0]);
                        tv = t === tid ? tv : tv - 1, sitesortmap.Add(Number(tw[0]), {
                            t: Number(tw[0]),
                            s: Number(tw[1]),
                            v: tv
                        }, 8)
                    } else {
                        var vrates = eval("(" + vrate + ")");
                        if (0 < vrates.length && vrates[0].d != undefined) Ttracker.util.Wv(cname, "", -63072e6);
                        else
                            for (var i = 0; i < vrates.length; i++) {
                                var rate = vrates[i];
                                rate.t != t && (rate.v -= 1), sitesortmap.Add(rate.t, rate)
                            }
                    }
            } catch (e) {
                Ttracker.util.Wv(cname, "", -63072e6)
            }
            if (sitesortmap.ContainsKey(t)) {
                var curtt = sitesortmap.Get(t);
                curtt.s = s || curtt.s, curtt.v += 2
            } else sitesortmap.Add(t, ntw);
            if (8 < sitesortmap.Count()) {
                var del = sitesortmap.a[sitesortmap.Count() - 1];
                sitesortmap.Remove(del.t)
            }
            for (var cvalue = "", k = 0, klen = sitesortmap.a.length; k < klen; k++) cvalue += sitesortmap.a[k].t + "." + sitesortmap.a[k].s + "." + sitesortmap.a[k].v + (k == klen - 1 ? "" : "|");
            cvalue && Ttracker.util.Wv(cname, cvalue, 63072e6)
        },
        view: function(e, t) {
            var r = Number(e),
                n = Number(t),
                i = this;
            $.ajax({
                url: "//x.jd.com/aview?ck=" + r + "." + n,
                dataType: "jsonp",
                success: function(e) {
                    "object" == typeof e && 0 == e.errCode && i.util.Wv("aview", "", -63072e6)
                }
            })
        }
    }, Ttracker.util = {
        Wv: function(e, t, r) {
            var n = 0 <= window.document.domain.indexOf("360buy") ? ".360buy.com" : ".jd.com";
            e = e + "=" + t + "; path=/; ", r && (e += "expires=" + new Date((new Date).getTime() + r).toGMTString() + "; "), e += "domain=" + n + ";", document.cookie = e
        },
        Vv: function(e) {
            for (var t = [], r = document.cookie.split(";"), n = (e = RegExp("^\\s*" + e + "=\\s*(.*?)\\s*$"), 0); n < r.length; n++) {
                var i = r[n].match(e);
                i && t.push(i[1])
            }
            return t[0]
        }
    }, Ttracker.trace()
}(),
function() {
    var n = window,
        y = document,
        o = encodeURIComponent,
        u = decodeURIComponent,
        c = void 0,
        j = "push",
        l = "join",
        k = "split",
        S = "length",
        C = "indexOf",
        x = "toLowerCase",
        N = {};
    N.util = {
        join: function(e) {
            if (e instanceof Array) {
                for (var t = "", r = 0, n = e.length; r < n; r++) t += e[r] + (r == n - 1 ? "" : "|||");
                return t
            }
            return e
        },
        getParameter: function(e, t) {
            var r = new RegExp("(?:^|&|[?]|[/])" + t + "=([^&]*)").exec(e);
            return r ? o(r[1]) : ""
        },
        Wv: function(e, t, r, n) {
            e = e + "=" + t + "; path=/; ", n && (e += "expires=" + new Date((new Date).getTime() + n).toGMTString() + "; "), r && (e += "domain=" + r + ";"), y.cookie = e
        },
        Vv: function(e) {
            for (var t = [], r = y.cookie[k](";"), n = RegExp("^\\s*" + e + "=\\s*(.*?)\\s*$"), i = 0; i < r[S]; i++) {
                var o = r[i].match(n);
                o && t[j](o[1])
            }
            return t
        }
    };
    var t = 0;

    function r(e) {
        return (e ? "_" : "") + t++
    }
    var d = r(),
        g = r(),
        s = r(),
        O = r(),
        h = r(),
        f = r(),
        p = r(),
        m = r(),
        v = r(),
        w = r(),
        _ = r(),
        b = r(),
        R = r(),
        M = r(),
        T = r(),
        I = r(),
        J = r(),
        A = r(),
        L = r(),
        D = r(),
        W = r(),
        E = r(),
        H = r(),
        P = r(),
        G = r(),
        U = r(),
        V = r(),
        B = r(),
        q = r(),
        z = r(),
        Y = r(),
        F = r(),
        X = r(),
        K = r(),
        Q = r(),
        Z = r(),
        ee = r(),
        te = ["i.easou.com:q", "m.baidu.com:word", "m.sm.cn:q", "m.so.com:q", "wap.sogou.com:keyword", "m.sogou.com:keyword", "wap.sogo.com:keyword", "m.sogo.com:keyword", "page.roboo.com:q", "ask.com:q", "baidu:word", "baidu:wd", "bing:q", "easou:q", "google:q", "roboo:word", "roboo:q", "sm.cn:q", "so.com:q", "sogou:keyword", "sogou:query", "sogo.com:keyword", "sogo.com:query", "yahoo:p", "yandex:text", "yicha:key"],
        re = function() {
            return (new Date).getTime() + "" + parseInt(2147483647 * Math.random())
        },
        ne = function() {
            return a(y.domain)
        },
        ie = function() {
            var e = {},
                t = n.navigator,
                r = n.screen;
            return e.D = r ? r.width + "x" + r.height : "-", e.C = r ? r.colorDepth + "-bit" : "-", e.language = (t && (t.language || t.browserLanguage) || "-")[x](), e.javaEnabled = t && t.javaEnabled() ? 1 : 0, e.characterSet = y.characterSet || y.charset || "-", e
        },
        oe = function() {
            var e, t, r, n;
            if (r = "ShockwaveFlash", (e = (e = window.navigator) ? e.plugins : c) && 0 < e[S])
                for (t = 0; t < e[S] && !n; t++) - 1 < (r = e[t]).name[C]("Shockwave Flash") && (n = r.description[k]("Shockwave Flash ")[1]);
            else {
                r = r + "." + r;
                try {
                    n = (t = new ActiveXObject(r + ".7")).GetVariable("$version")
                } catch (d) {}
                if (!n) try {
                    t = new ActiveXObject(r + ".6"), n = "WIN 6,0,21,0", t.AllowScriptAccess = "always", n = t.GetVariable("$version")
                } catch (i) {}
                if (!n) try {
                    n = (t = new ActiveXObject(r)).GetVariable("$version")
                } catch (s) {}
                n && (n = (n = n[k](" ")[1][k](","))[0] + "." + n[1] + " r" + n[2])
            }
            var o = N.util.Vv("_r2");
            e = n ? n + (0 < o[S] ? "_" + o[0] : "") : "-";
            var a = N.util.Vv("limgs");
            return e += 0 < a[S] ? "_" + a[0] : ""
        },
        ae = function(e) {
            return c == e || "-" == e || "" == e
        },
        a = function(e) {
            var t, r = 1,
                n = 0;
            if (!ae(e))
                for (r = 0, t = e[S] - 1; 0 <= t; t--) r = 0 != (n = 266338304 & (r = (r << 6 & 268435455) + (n = e.charCodeAt(t)) + (n << 14))) ? r ^ n >> 21 : r;
            return r
        },
        de = function() {
            var e = {
                    name: "other",
                    version: "0"
                },
                t = navigator.userAgent.toLowerCase();
            for (var r in browserRegExp = {
                    se360: /360se/,
                    se360_2x: /qihu/,
                    ie: /msie[ ]([\w.]+)/,
                    firefox: /firefox[|\/]([\w.]+)/,
                    chrome: /chrome[|\/]([\w.]+)/,
                    safari: /version[|\/]([\w.]+)(\s\w.+)?\s?safari/,
                    opera: /opera[|\/]([\w.]+)/
                }, browserRegExp) {
                var n = browserRegExp[r].exec(t);
                if (n) {
                    e.name = r, e.version = n[1] || "0";
                    break
                }
            }
            return e
        },
        se = function() {
            var e = /(win|android|linux|nokia|ipad|iphone|ipod|mac|sunos|solaris)/.exec(navigator.platform.toLowerCase());
            return null == e ? "other" : e[0]
        },
        ce = function(e) {
            e.set(v, y.location.hostname), e.set(w, y.title.replace(/\$/g, "")), e.set(_, y.location.pathname), e.set(b, y.referrer.replace(/\$/g, "")), e.set(R, y.location.href);
            var t = N.util.Vv("__jda"),
                r = 0 < t[S] ? t[0][k](".") : null;
            e.set(g, r && !ae(r[1]) ? r[1] : re()), e.set(H, r ? r[2] : e.get(h)), e.set(P, r ? r[3] : e.get(h)), e.set(G, r ? r[4] : e.get(h)), e.set(U, r ? r[5] : 1);
            var n = N.util.Vv("__jdv"),
                i = 0 < n[S] ? n[0][k]("|") : null;
            e.set(q, i ? i[1] : "direct"), e.set(z, i ? i[2] : "-"), e.set(Y, i ? i[3] : "none"), e.set(F, i ? i[4] : "-");
            var o = N.util.Vv("__jdb"),
                a = 0 < o[S] ? o[0][k](".") : null,
                d = a && 4 == a.length ? 1 : 0;
            e.set(V, a ? a[0 + d] : 0), e.set(K, function() {
                for (var e = "", t = ["jwotest_product", "jwotest_list", "jwotest_cart", "jwotest_orderinfo", "jwotest_homepage", "jwotest_other1", "jwotest_other2", "jwotest_other3"], r = 0, n = t.length; r < n; r++) {
                    var i = N.util.Vv(t[r]);
                    if (0 != i[S]) {
                        var o = u(i[0]).match(/=(.*?)&/gi),
                            a = [];
                        null != o && ($.each(o, function(e, t) {
                            a.push(0 == e ? "T" + t.substring(1, t.length - 1) : t.substring(1, t.length - 1))
                        }), e += a[l]("-") + ";")
                    }
                }
                return e
            }() || "-");
            var s = JA.util.Vv("clickid"),
                c = s[S] && s[0];
            return e.set(Q, c), !0
        },
        ue = function(e, t) {
            var r = t.split(".");
            e.set(H, r[2]), e.set(P, r[4]), e.set(G, Math.round((new Date).getTime() / 1e3)), e.m(U), e.set(V, 1)
        },
        le = function(e) {
            e.m(V)
        },
        ge = function(e) {
            var t = N.util.Vv("__jda");
            0 == t.length ? function(e) {
                var t = e.get(h);
                e.set(g, re()), e.set(H, t), e.set(P, t), e.set(G, t), e.set(U, 1), e.set(V, 1)
            }(e) : ue(e, t[0])
        },
        he = new function() {
            var n = {};
            this.set = function(e, t) {
                n[e] = t
            }, this.get = function(e) {
                return n[e] !== c ? n[e] : null
            }, this.m = function(e) {
                var t = this.get(e),
                    r = t == c || "" === t ? 0 : 1 * t;
                n[e] = 1 + r
            }, this.set(d, "UA-J2011-1");
            var e = 0 <= window.document.domain.indexOf("360buy") ? "360buy.com" : "jd.com";
            this.set(O, e), this.set(s, ne()), this.set(h, Math.round((new Date).getTime() / 1e3)), this.set(f, 15552e6), this.set(p, 1296e6), this.set(m, 18e5), this.set(M, oe());
            var t = de();
            this.set(T, t.name), this.set(I, t.version), this.set(J, se());
            var r = ie();
            this.set(A, r.D), this.set(L, r.C), this.set(D, r.language), this.set(W, r.javaEnabled), this.set(E, r.characterSet), this.set(B, te), this.set(X, (new Date).getTime());
            var i = N.util.Vv("pin");
            this.set(Z, i[S] ? i[0] : "-");
            var o, a = "";
            (o = N.util.Vv("pinId")) && o[S] && (a = o[0]), this.set(ee, a || "-")
        },
        fe = function() {
            this.a = {}, this.add = function(e, t) {
                this.a[e] = t
            }, this.get = function(e) {
                return this.a[e]
            }, this.toString = function() {
                return this.a[l]("&")
            }
        },
        pe = function(e, t) {
            t.add("jdac", e.get(d)), t.add("jduid", e.get(g)), t.add("jdsid", e.get(g) + "|" + e.get(U)), t.add("jdje", e.get(W)), t.add("jdsc", e.get(L)), t.add("jdsr", e.get(A)), t.add("jdul", e.get(D)), t.add("jdcs", e.get(E)), t.add("jddt", e.get(w) || "-"), t.add("jdmr", o(e.get(b))), t.add("jdhn", e.get(v) || "-"), t.add("jdfl", e.get(M)), t.add("jdos", e.get(J)), t.add("jdbr", e.get(T)), t.add("jdbv", e.get(I)), t.add("jdwb", e.get(H)), t.add("jdxb", e.get(P)), t.add("jdyb", e.get(G)), t.add("jdzb", e.get(U)), t.add("jdcb", e.get(V)), t.add("jdusc", e.get(q) || "direct"), t.add("jducp", e.get(z) || "-"), t.add("jdumd", e.get(Y) || "-"), t.add("jduct", e.get(F) || "-"), t.add("jdlt", "object" != typeof jdpts ? 0 : jdpts._st == undefined ? 0 : e.get(X) - jdpts._st), t.add("jdtad", e.get(K)), t.add("jdak", e.get(Q)), t.add("pinid", e.get(ee))
        },
        me = function(e, t, r, n) {
            t.add("jdac", e.get(d)), t.add("jduid", e.get(g)), t.add("jdsid", e.get(g) + "|" + e.get(U)), t.add("jdje", "-"), t.add("jdsc", "-"), t.add("jdsr", "-"), t.add("jdul", "-"), t.add("jdcs", "-"), t.add("jddt", "-"), t.add("jdmr", o(e.get(b))), t.add("jdhn", "-"), t.add("jdfl", "-"), t.add("jdos", "-"), t.add("jdbr", "-"), t.add("jdbv", "-"), t.add("jdwb", "-"), t.add("jdxb", "-"), t.add("jdyb", "-"), t.add("jdzb", e.get(U)), t.add("jdcb", n ? function() {
                var e = N.util.Vv("__jdb"),
                    t = 0 < e[S] ? e[0][k](".") : null;
                return t && 1 == t.length ? 1 * t[0] : t && 4 == t.length ? 1 * t[1] : 0
            }() + n : e.get(V)), t.add("jdusc", "-"), t.add("jducp", "-"), t.add("jdumd", "-"), t.add("jduct", "-"), t.add("jdlt", 0), t.add("jdtad", r), t.add("jdak", e.get(Q)), t.add("pinid", e.get(ee))
        },
        ve = function() {
            ce(he);
            var e = function(e) {
                    var t = y.location.search,
                        r = y.referrer,
                        n = e.get(O),
                        i = N.util.getParameter(t, "utm_source"),
                        o = [],
                        a = e.get(q),
                        d = e.get(z),
                        s = e.get(Y),
                        c = 0 == N.util.Vv("__jdb")[S],
                        u = !1;
                    if (i) {
                        var l = N.util.getParameter(t, "utm_campaign"),
                            g = N.util.getParameter(t, "utm_medium"),
                            h = N.util.getParameter(t, "utm_term");
                        o[j](i), o[j](l || "-"), o[j](g || "-"), o[j](h || "not set"), e.set(F, o[3]), u = !0
                    } else {
                        var f = r && r[k]("/")[2],
                            p = !1;
                        if (f && f[C](n) < 0) {
                            for (var m = e.get(B), v = 0; v < m.length; v++) {
                                var w = m[v][k](":");
                                if (-1 < f[C](w[0][x]()) && -1 < r[C]((w[1] + "=")[x]())) {
                                    var _ = N.util.getParameter(r, w[1]);
                                    o[j](w[0]), o[j]("-"), o[j]("organic"), o[j](_ || "not set"), e.set(F, o[3]), p = !0;
                                    break
                                }
                            }
                            p || (-1 < f[C]("zol.com.cn") ? (o[j]("zol.com.cn"), o[j]("-"), o[j]("cpc"), o[j]("not set")) : (o[j](f), o[j]("-"), o[j]("referral"), o[j]("-")))
                        }
                    }
                    var b = 0 < o[S] && (o[0] !== a || o[1] !== d || o[2] !== s) && "referral" !== o[2];
                    return c || !c && b ? (e.set(q, o[0] || e.get(q)), e.set(z, o[1] || e.get(z)), e.set(Y, o[2] || e.get(Y)), e.set(F, o[3] || e.get(F)), ge(e)) : le(e), b || u
                }(he),
                t = N.util.Vv("__jdv"),
                r = new fe,
                n = he.get(O);
            return pe(he, r), N.util.Wv("__jda", function(e) {
                return [e.get(s), e.get(g) || "-", e.get(H) || "-", e.get(P) || "-", e.get(G) || "-", e.get(U) || 1][l](".")
            }(he), n, he.get(f)), N.util.Wv("__jdb", function(e) {
                return [e.get(s), e.get(V) || 1, e.get(g) + "|" + e.get(U) || 1, e.get(G) || e.get(h)][l](".")
            }(he), n, he.get(m)), N.util.Wv("__jdc", he.get(s), n), !e && t.length || N.util.Wv("__jdv", function(e) {
                return [e.get(s), e.get(q) || y.domain, e.get(z) || "(direct)", e.get(Y) || "direct", e.get(F) || "-", (new Date).getTime()][l]("|")
            }(he), n, he.get(p)), N.util.Wv("clickid", "0", n, -846e5), r.a
        },
        we = function() {
            var e = new fe;
            return pe(he, e), e.a
        },
        _e = function(e, t) {
            var r = new fe;
            return me(he, r, e, t), r.a
        },
        be = function(t) {
            var r = function(t) {
                var r = document.createElement("img");
                r.width = 1, r.height = 1, r.src = t;
                try {
                    r.setAttribute("referrerpolicy", "no-referrer-when-downgrade")
                } catch (e) {}
                return r
            }(t);
            r.onload = r.onerror = function() {
                r.onload = null, r.onerror = null
            }
        };
    N.util.Nt = we, N.tracker = {
        sendOld: function(e, t, r, n) {},
        sendNew: function(e, t) {
            var r = we(),
                n = "https://mercury.jd.com/log.gif?t=" + e + "&m=" + he.get(d) + "&pin=" + o(he.get(Z)) + "&uid=" + r.jduid + "&sid=" + r.jdsid + (r.jdak ? "&cul=" + document.location.href + o("&clickid=" + r.jdak) : "") + "&v=" + o(t) + "&ref=" + o(y.referrer) + "&rm=" + (new Date).getTime();
            be(n)
        },
        sendToWarriors: function(e, t) {
            var r = we(),
                n = "https://mercury.jd.com/log.gif?t=" + e + "&m=" + he.get(d) + "&pin=" + o(he.get(Z)) + "&uid=" + r.jduid + "&sid=" + r.jdsid + (r.jdak ? "&cul=" + document.location.href + o("&clickid=" + r.jdak) : "") + "&v=" + o(t) + "&ref=" + o(y.referrer) + "&rm=" + (new Date).getTime();
            be(n)
        },
        ngloader: function(e, t) {
            var r = we(),
                n = {
                    je: r.jdje,
                    sc: r.jdsc,
                    sr: r.jdsr,
                    ul: r.jdul,
                    cs: r.jdcs,
                    dt: r.jddt,
                    hn: r.jdhn,
                    fl: r.jdfl,
                    os: r.jdos,
                    br: r.jdbr,
                    bv: r.jdbv,
                    wb: r.jdwb,
                    xb: r.jdxb,
                    yb: r.jdyb,
                    zb: r.jdzb,
                    cb: r.jdcb,
                    usc: r.jdusc,
                    ucp: r.jducp,
                    umd: r.jdumd,
                    uct: r.jduct,
                    ct: (new Date).getTime(),
                    lt: r.jdlt,
                    tad: r.jdtad
                };
            this.ngaloader(e, n, t)
        },
        ngaloader: function(e, t, r) {
            var n = "";
            for (var i in t) n += i + "=" + t[i] + "$";
            if (r)
                for (var i in r) n += i + "=" + r[i] + "$";
            n += "pinid=" + he.get(ee) + "$";
            try {
                n += "jdv=" + (N.util.Vv("__jdv")[0] || "") + "$"
            } catch (a) {}
            n += "dataver=0.1$";
            var o = N.util.Vv("unpl");
            0 < o.length && (n += "unpl=" + o[0] + "$"), n = n.substring(0, n.length - 1), this.sendNew(e, n)
        },
        ngloaderJSON: function(e, t, r) {
            var n = we();
            t.pinid = he.get(ee), t.je = n.jdje, t.sc = n.jdsc, t.sr = n.jdsr, t.ul = n.jdul, t.cs = n.jdcs, t.dt = n.jddt, t.hn = n.jdhn, t.fl = n.jdfl, t.os = n.jdos, t.br = n.jdbr, t.bv = n.jdbv, t.wb = n.jdwb, t.xb = n.jdxb, t.yb = n.jdyb, t.zb = n.jdzb, t.cb = n.jdcb, t.usc = n.jdusc, t.ucp = n.jducp, t.umd = n.jdumd, t.uct = n.jduct, t.ct = (new Date).getTime(), t.lt = n.jdlt, t.tad = n.jdtad;
            try {
                t.jdv = N.util.Vv("__jdv")[0] || ""
            } catch (i) {}
            t.dataver = "0.1", r && "toWarriors" == r ? this.sendToWarriors(e, $.toJSON(t)) : this.sendNew(e, $.toJSON(t))
        },
        bloading: function(t, r, n) {
            var i = ve(),
                o = 0,
                a = "";
            try {
                var d = (new Date).getTime();
                a = getFingerprint(), o = (new Date).getTime() - d
            } catch (e) {}
            var s = {
                je: i.jdje,
                sc: i.jdsc,
                sr: i.jdsr,
                ul: i.jdul,
                cs: i.jdcs,
                dt: i.jddt,
                hn: i.jdhn,
                fl: i.jdfl,
                os: i.jdos,
                br: i.jdbr,
                bv: i.jdbv,
                wb: i.jdwb,
                xb: i.jdxb,
                yb: i.jdyb,
                zb: i.jdzb,
                cb: i.jdcb,
                usc: i.jdusc,
                ucp: i.jducp,
                umd: i.jdumd,
                uct: i.jduct,
                lt: i.jdlt,
                ct: n,
                tad: i.jdtad,
                mba_finger: a,
                fpftime: o
            };
            this.ngaloader("www.100000", s), i.jduid % 1e3 == 1 && this.ngloader("jsver.000000", {
                jsfile: "wl",
                jsver: "20190102"
            })
        },
        loading: function(e, t, r, n) {},
        aloading: function(e, t, r) {
            var n = we();
            this.loading(e, t, n, r)
        },
        aloadingJSON: function(e, t, r) {},
        adshow: function(e) {
            var t = _e(e);
            this.loading("AD", "IM", t, "")
        },
        adclick: function(e) {
            var t = _e(e, 1);
            this.loading("AD", "CL", t, "")
        },
        isCanPrey: function() {
            var e = getCookie("__jda");
            if (e) {
                var t = e.split(".");
                if (1 < t.length) {
                    var r = t[1],
                        n = t[1].length;
                    return "2" == (r = r.substr(n - 1, n))
                }
            }
            return !1
        },
        isDegrade: function(t, r, n) {
            var i = {
                    "magic.000001": 20,
                    "other.000000-pv_stock": 20,
                    "other.000000-d-c": 0,
                    "other.000000": 0
                },
                o = new Date(2018, 5, 16).getTime(),
                a = new Date(2018, 5, 20).getTime(),
                d = (new Date).getTime();
            if (d < o || a < d) return !1;
            var s = i[t + "-" + r + "-" + n];
            return s === undefined && (s = i[t + "-" + r]), s === undefined && (s = i[t]),
                function c(t) {
                    try {
                        var r = he.get(g),
                            n = r.length;
                        return (r = parseInt(r.substr(n - 2, n))) < t
                    } catch (e) {}
                    return !1
                }(s = s || 0)
        }
    }, (window.JA = N).tracker.bloading("J", "A", (new Date).getTime());
    var ye = 5 === $(".w .crumb a").length && /e.jd.com\/products\/(\d*)-(\d*)-(\d*).html[\w\W]*?e.jd.com\/(\d*).html/.exec($(".w .crumb").html());
    (window.pageConfig && window.pageConfig.product && window.pageConfig.product.cat || ye) && (ye = ye || {}, N.tracker.ngloader("item.010001", {
        sku: ye[4] || window.pageConfig.product.skuid,
        cid1: ye[1] || window.pageConfig.product.cat[0],
        cid2: ye[2] || window.pageConfig.product.cat[1],
        cid3: ye[3] || window.pageConfig.product.cat[2],
        brand: ye ? "0" : window.pageConfig.product.brand
    })),
    function() {
        if (isChecked()) {
            SucInfoMethod.Init();
            var e = getCookie("_distM");
            if (e && e == SucInfo_OrderId) return;
            for (var t = ["p000", "p100", "np000", "np100"], r = 0; r < t.length; r++) {
                var n = getCookie(t[r]);
                null != n && "" != n && privateLogWLJS("HomePageOrder", t[r])
            }
            simpleMold("1:2:3:4:5:1a:1b:BR1:BR2:BR3:BR4:BR5:DDR:GR1:GR2:GR3:GR4:VR1:VR2:VR3:VR4:VR5:NR:CR1:CR2:CR3:SR1:SR2:SR3:SR4:Indiv&Simi:Indiv&OthC:Indiv&AllC:Zd".split(":"), "R", "reWids", "4");
            complexMold("Club,ThirdRec,AttRec,OCRec,SORec,EBRec,BookSpecial,BookTrack,BookHis,Coupon,GlobalTrack,GlobalHis,History,historyreco_s,historyreco_c".split(","), "R", "reWids", "4");
            complexMold(["v", "TrackRec", "TrackHis", "CouDan", "CarAcc", "Zd", "Tc", "g", "s", "Book", "BookSpecial", "BookTrack", "BookHis", "GlobalTrack", "GlobalHis", "History", "Hiss", "Hisc", "simi", "GThirdRec", "PtoAccy", "AtoAccy"], "o", "rod", "d", !0), RecommendTrans("reHome2012,_rtbook", "N", "4"), complexMold(["_rdCube"], "Cube", "", "4"), simpleMold(["SEO"], "S", "seWids", "4"), setCookieMills("_distM", SucInfo_OrderId, 864e5), setCookieMills("_ghis", "", -1), privateLogWLJS("7", "2", SucInfo_OrderId, SucInfo_OrderType, SucInfo_OrderDetail);
            var i = we();
            JA && JA.tracker.ngloader("order.100000", {
                orderid: SucInfo_OrderId,
                ordertype: SucInfo_OrderType,
                orderdetail: SucInfo_OrderDetail,
                cb: i.jdcb
            })
        }
    }()
}(), "object" == typeof jdpts && jdpts._cls && privateLogWLJS(jdpts._cls.split(".")[0], jdpts._cls.split(".")[1]), Clublog();