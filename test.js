"use strict";
function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++)
            a[t] = e[t];
        return a
    }
    return Array.from(e)
}
function listen(e) {
    e.addEventListener("click", function() {
        alert.style.display = "none",
        localStorage.setItem("GPACalculatorAlertStatus--GPALaunch", "hide")
    })
}
var menu = {
    menuIsOpen: !1,
    toggleMenu: function() {
        var e = document.body;
        menu.menuIsOpen ? e.classList.remove("menu-is-open") : e.classList.add("menu-is-open"),
        menu.menuIsOpen = !menu.menuIsOpen
    },
    init: function() {
        document.addEventListener("click", function(e) {
            e.target && e.target.classList.contains("js-menu-button") && menu.toggleMenu(e)
        }),
        document.addEventListener("touchmove", function(e) {
            menu.menuIsOpen && e.preventDefault()
        })
    }
};
menu.init();
var converter = {
    convert: function(e) {
        var t = !(arguments.length <= 1 || arguments[1] === undefined) && arguments[1]
          , a = parseFloat(e.value)
          , l = document.getElementsByClassName("js-converter-gradeScale")[0]
          , r = document.getElementsByClassName("js-converter-gradeLetter")[0]
          , s = document.getElementsByClassName("js-converter-gradePercent")[0];
        if (e.classList.contains("js-converter-gradeScale")) {
            var n = [0, 1, 1.3, 1.7, 2, 2.3, 2.7, 3, 3.3, 3.7, 4]
              , c = !0
              , o = !1
              , i = undefined;
            try {
                for (var u, d = function() {
                    var e = u.value;
                    if (e > a) {
                        n.indexOf(e);
                        n = n.filter(function(t) {
                            return t != e
                        })
                    }
                }, g = n[Symbol.iterator](); !(c = (u = g.next()).done); c = !0)
                    d()
            } catch (e) {
                o = !0,
                i = e
            } finally {
                try {
                    !c && g["return"] && g["return"]()
                } finally {
                    if (o)
                        throw i
                }
            }
            var m = Math.max.apply(Math, _toConsumableArray(n)).toFixed(1);
            t ? (console.log("HI"),
            r.selectedIndex = s.selectedIndex = parseFloat(t)) : r.value = s.value = m
        } else
            r.selectedIndex = s.selectedIndex = e.selectedIndex,
            l.value = a.toFixed(1);
        r.classList.add("is-selected"),
        s.classList.add("is-selected")
    },
    toggleTable: function() {
        document.getElementsByClassName("js-gpa-converter")[0].classList.toggle("is-collapsed")
    },
    init: function() {
        if (document.body.dataset.converter) {
            var e = document.getElementsByClassName("js-converter-gradeScale")[0];
            e.value = document.body.dataset.converter,
            converter.convert(e, document.body.dataset.converterIndex)
        }
        document.addEventListener("input", function(e) {
            e.target && e.target.classList.contains("js-convert") && converter.convert(e.target)
        }),
        document.addEventListener("click", function(e) {
            e.target && e.target.classList.contains("js-toggle-gpa-scale") && converter.toggleTable(e)
        })
    }
};
converter.init();
var calculator = {
    type: document.body.dataset.calculator,
    weightIsOff: !0,
    courseTemplate: {
        name: null,
        grade: null,
        credits: null,
        weight: null
    },
    semesterTemplate: [{
        name: null,
        grade: null,
        credits: null,
        weight: null
    }, {
        name: null,
        grade: null,
        credits: null,
        weight: null
    }, {
        name: null,
        grade: null,
        credits: null,
        weight: null
    }, {
        name: null,
        grade: null,
        credits: null,
        weight: null
    }],
    assessmentTemplate: {
        name: null,
        gradeLetter: null,
        gradePercent: null,
        weight: null
    },
    klassTemplate: [{
        name: null,
        gradeLetter: null,
        gradePercent: null,
        weight: null
    }, {
        name: null,
        gradeLetter: null,
        gradePercent: null,
        weight: null
    }, {
        name: null,
        gradeLetter: null,
        gradePercent: null,
        weight: null
    }, {
        name: null,
        gradeLetter: null,
        gradePercent: null,
        weight: null
    }],
    createItem: function(e) {
        var t = e.target.dataset.type
          , a = e.target.parentNode.getElementsByTagName("ul")[0]
          , l = document.getElementById("js-" + t + "-template")
          , r = l.getElementsByTagName("li")[0].cloneNode(!0);
        a.appendChild(r),
        calculator.updateLocalStorage(e.target, "create")
    },
    removeItem: function(e) {
        var t = e.target.parentNode
          , a = e.target.parentNode.parentNode;
        calculator.updateLocalStorage(e.target, "remove"),
        a.removeChild(t),
        calculator.calculate()
    },
    updateItem: function(e) {
        if (e && e.target.classList.contains("js-select-gradeLetter")) {
            var t = e.target.parentNode
              , a = t.getElementsByClassName("js-select-gradePercent")[0];
            e.target.classList.add("is-selected"),
            a.classList.add("is-selected"),
            a.value = e.target.value
        } else if (e && e.target.classList.contains("js-select-gradePercent")) {
            var t = e.target.parentNode
              , l = t.getElementsByClassName("js-select-gradeLetter")[0];
            e.target.classList.add("is-selected"),
            l.classList.add("is-selected"),
            l.value = e.target.selectedOptions[0].dataset.letterValue
        }
    },
    toggleWeight: function(e) {
        var t = document.getElementsByClassName("js-course-weight")
          , a = !0
          , l = !1
          , r = undefined;
        try {
            for (var s, n = t[Symbol.iterator](); !(a = (s = n.next()).done); a = !0) {
                s.value.disabled = !calculator.weightIsOff
            }
        } catch (e) {
            l = !0,
            r = e
        } finally {
            try {
                !a && n["return"] && n["return"]()
            } finally {
                if (l)
                    throw r
            }
        }
        calculator.weightIsOff = !calculator.weightIsOff,
        calculator.calculate(),
        calculator.updateLocalStorage(e, "update")
    },
    calculate: function(e) {
        "gpa" == calculator.type ? calculator.calculateGPA(e) : "grade" == calculator.type && calculator.calculateGrade(e)
    },
    calculateGPA: function() {
        var e = document.getElementById("js-semesters")
          , t = e.getElementsByClassName("js-semester")
          , a = 0
          , l = 0
          , r = 0
          , s = !0
          , n = !1
          , c = undefined;
        try {
            for (var o, i = function() {
                var e = o.value
                  , t = e.getElementsByClassName("js-course")
                  , a = 0
                  , s = 0
                  , n = 0;
                d = !0,
                g = !1,
                m = undefined;
                try {
                    for (f = t[Symbol.iterator](); !(d = (y = f.next()).done); d = !0) {
                        var c = y.value
                          , i = parseFloat(c.getElementsByClassName("js-course-grade")[0].value)
                          , u = parseFloat(c.getElementsByClassName("js-course-weight")[0].value)
                          , v = parseFloat(c.getElementsByClassName("js-course-credits")[0].value);
                        if (i >= 0 && c.getElementsByClassName("js-course-grade")[0].classList.add("is-selected"),
                        u >= 0 && c.getElementsByClassName("js-course-weight")[0].classList.add("is-selected"),
                        i >= 0 && v > 0) {
                            var p = 0;
                            p = !calculator.weightIsOff && u > 0 ? (i + u) * v : i * v,
                            s += p,
                            n += v
                        }
                    }
                } catch (e) {
                    g = !0,
                    m = e
                } finally {
                    try {
                        !d && f["return"] && f["return"]()
                    } finally {
                        if (g)
                            throw m
                    }
                }
                a = s / n,
                a = isNaN(a) ? 0 : Math.round(100 * a) / 100;
                var h = e.getElementsByClassName("js-semester-gpa")[0]
                  , L = h.innerHTML;
                h.innerHTML = a.toFixed(2),
                h.classList.remove("is-below"),
                h.classList.remove("is-above"),
                L && a < L ? (h.classList.add("is-below"),
                setTimeout(function() {
                    h.classList.remove("is-below")
                }, 1500)) : L && a > L && (h.classList.add("is-above"),
                setTimeout(function() {
                    h.classList.remove("is-above")
                }, 1500)),
                l += s,
                r += n
            }, u = t[Symbol.iterator](); !(s = (o = u.next()).done); s = !0) {
                var d, g, m, f, y;
                i()
            }
        } catch (e) {
            n = !0,
            c = e
        } finally {
            try {
                !s && u["return"] && u["return"]()
            } finally {
                if (n)
                    throw c
            }
        }
        if (document.getElementsByClassName("js-current-grade")[0]) {
            var v = parseFloat(document.getElementsByClassName("js-current-grade")[0].value)
              , p = parseFloat(document.getElementsByClassName("js-current-credits")[0].value);
            if (v > 0 && p > 0) {
                a = (l + v * p) / (r + p)
            } else
                a = l / r
        } else
            a = l / r;
        a = isNaN(a) ? 0 : Math.round(100 * a) / 100;
        var h = document.getElementById("js-cumulative-gpa")
          , L = h.innerHTML;
        h.innerHTML = a.toFixed(2),
        h.classList.remove("is-below"),
        h.classList.remove("is-above"),
        L && a < L ? (h.classList.add("is-below"),
        setTimeout(function() {
            h.classList.remove("is-below")
        }, 1500)) : L && a > L && (h.classList.add("is-above"),
        setTimeout(function() {
            h.classList.remove("is-above")
        }, 1500));
        var N = document.getElementById("js-calculator-graph")
          , j = Math.round(67.5 * a) + 45;
        N.setAttribute("data-value", j)
    },
    calculateGrade: function(e) {
        var t = document.getElementById("js-classes")
          , a = t.getElementsByClassName("js-class");
        if (e && e.target.classList.contains("js-assessment-gradeLetter")) {
            var l = e.target.parentNode
              , r = l.getElementsByClassName("js-assessment-gradePercent")[0];
            e.target.classList.add("is-selected"),
            r.classList.add("is-selected"),
            r.value = e.target.value,
            calculator.updateLocalStorage(r, "update")
        } else if (e && e.target.classList.contains("js-assessment-gradePercent")) {
            var l = e.target.parentNode
              , s = l.getElementsByClassName("js-assessment-gradeLetter")[0];
            e.target.classList.add("is-selected"),
            s.classList.add("is-selected"),
            s.value = e.target.selectedOptions[0].dataset.letterValue,
            calculator.updateLocalStorage(s, "update")
        }
        var n = !0
          , c = !1
          , o = undefined;
        try {
            for (var i, u = a[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                var d = i.value
                  , g = 0
                  , m = 0
                  , f = 0
                  , y = d.getElementsByClassName("js-assessment")
                  , v = !0
                  , p = !1
                  , h = undefined;
                try {
                    for (var L, N = y[Symbol.iterator](); !(v = (L = N.next()).done); v = !0) {
                        var j = L.value
                          , E = parseFloat(j.getElementsByClassName("js-assessment-weight")[0].value)
                          , r = parseFloat(j.getElementsByClassName("js-assessment-gradePercent")[0].value);
                        if (E > 0 && r > 0) {
                            m += r * (E / 100),
                            f += E
                        }
                    }
                } catch (e) {
                    p = !0,
                    h = e
                } finally {
                    try {
                        !v && N["return"] && N["return"]()
                    } finally {
                        if (p)
                            throw h
                    }
                }
                f > 100 ? alert("Total weight (percentages) cannot exceed 100.") : (g = m / f,
                isNaN(g) || (g = Math.round(100 * g),
                d.getElementsByClassName("js-class-grade")[0].innerHTML = g))
            }
        } catch (e) {
            c = !0,
            o = e
        } finally {
            try {
                !n && u["return"] && u["return"]()
            } finally {
                if (c)
                    throw o
            }
        }
    },
    calculateFinalGrade: function(e) {
        var t = document.getElementById("js-calculator-gradeCurrent")
          , a = document.getElementById("js-calculator-gradeDesired")
          , l = document.getElementById("js-calculator-gradeOutput")
          , r = document.getElementById("js-calculator-finalWeight")
          , s = undefined;
        "calculate" == e.target.dataset.action ? (s = (a.value - t.value * (1 - r.value / 100)) / (r.value / 100),
        l.innerHTML = Math.ceil(s)) : "reset" == e.target.dataset.action && (t.value = a.value = r.value = l.innerHTML = "")
    },
    render: function(e) {
        var t = undefined
          , a = undefined
          , l = undefined;
        "gpa" == calculator.type ? (t = document.getElementById("js-semesters"),
        a = "semester",
        l = "course") : "grade" == calculator.type && (t = document.getElementById("js-classes"),
        a = "class",
        l = "assessment");
        var r = !0
          , s = !1
          , n = undefined;
        try {
            for (var c, o = e[Symbol.iterator](); !(r = (c = o.next()).done); r = !0) {
                var i = c.value
                  , u = document.getElementById("js-" + a + "-template--empty")
                  , d = u.getElementsByTagName("li")[0].cloneNode(!0)
                  , g = d.getElementsByTagName("ul")[0]
                  , m = !0
                  , f = !1
                  , y = undefined;
                try {
                    for (var v, p = i[Symbol.iterator](); !(m = (v = p.next()).done); m = !0) {
                        var h = v.value
                          , L = document.getElementById("js-" + l + "-template")
                          , N = L.getElementsByTagName("li")[0].cloneNode(!0)
                          , j = !0
                          , E = !1
                          , I = undefined;
                        try {
                            for (var S, w = Object.keys(h)[Symbol.iterator](); !(j = (S = w.next()).done); j = !0) {
                                var B = S.value;
                                if (h[B]) {
                                    N.getElementsByClassName("js-" + l + "-" + B)[0].value = h[B]
                                }
                            }
                        } catch (e) {
                            E = !0,
                            I = e
                        } finally {
                            try {
                                !j && w["return"] && w["return"]()
                            } finally {
                                if (E)
                                    throw I
                            }
                        }
                        g.appendChild(N)
                    }
                } catch (e) {
                    f = !0,
                    y = e
                } finally {
                    try {
                        !m && p["return"] && p["return"]()
                    } finally {
                        if (f)
                            throw y
                    }
                }
                t.appendChild(d)
            }
        } catch (e) {
            s = !0,
            n = e
        } finally {
            try {
                !r && o["return"] && o["return"]()
            } finally {
                if (s)
                    throw n
            }
        }
        if (document.getElementsByClassName("js-weight-toggle")) {
            var b = document.getElementsByClassName("js-calculator")[0]
              , C = document.getElementsByClassName("js-course-weight")
              , O = b.getElementsByClassName("js-weight-toggle");
            localStorage.getItem("gpa-data") && "weightIsOff"in JSON.parse(localStorage.getItem("gpa-data")) && (calculator.weightIsOff = JSON.parse(localStorage.getItem("gpa-data")).weightIsOff),
            document.body.classList.contains("college-gpa-calculator") ? calculator.weightIsOff || calculator.toggleWeight(O[0], "update") : document.body.classList.contains("high-school-gpa-calculator") && calculator.weightIsOff && calculator.toggleWeight(O[0], "update");
            var T = !0
              , x = !1
              , A = undefined;
            try {
                for (var M, P = O[Symbol.iterator](); !(T = (M = P.next()).done); T = !0) {
                    var F = M.value
                      , J = "toggle-" + Math.round(1e4 * Math.random());
                    F.checked = !calculator.weightIsOff,
                    F.id = J,
                    F.parentNode.getElementsByTagName("label")[0].setAttribute("for", J)
                }
            } catch (e) {
                x = !0,
                A = e
            } finally {
                try {
                    !T && P["return"] && P["return"]()
                } finally {
                    if (x)
                        throw A
                }
            }
            var G = !0
              , k = !1
              , H = undefined;
            try {
                for (var W, D = C[Symbol.iterator](); !(G = (W = D.next()).done); G = !0) {
                    W.value.disabled = calculator.weightIsOff
                }
            } catch (e) {
                k = !0,
                H = e
            } finally {
                try {
                    !G && D["return"] && D["return"]()
                } finally {
                    if (k)
                        throw H
                }
            }
        }
        calculator.calculate()
    },
    getLocalStorage: function() {
        var e = calculator.type + "-calculator"
          , t = localStorage.getItem(e);
        t || (t = calculator.setLocalStorage(calculator.type, e)),
        calculator.render(JSON.parse(t))
    },
    setLocalStorage: function() {
        var e = calculator.type + "-calculator"
          , t = [];
        return "gpa" == calculator.type ? t = [calculator.semesterTemplate] : "grade" == calculator.type && (t = [calculator.klassTemplate]),
        localStorage.setItem(e, JSON.stringify(t)),
        localStorage.getItem(e)
    },
    updateLocalStorage: function(e, t) {
        var a = calculator.type + "-calculator"
          , l = JSON.parse(localStorage.getItem(a))
          , r = e.parentNode
          , s = r.parentNode
          , n = Array.from(s.children).indexOf(r)
          , c = s.parentNode
          , o = c.parentNode
          , i = Array.from(o.children).indexOf(c);
        if ("create" == t)
            "course" == e.dataset.type ? l[n].push(calculator.courseTemplate) : "semester" == e.dataset.type ? l.push(calculator.semesterTemplate) : "assessment" == e.dataset.type ? l[n].push(calculator.assessmentTemplate) : "class" == e.dataset.type && l.push(calculator.klassTemplate),
            localStorage.setItem(a, JSON.stringify(l));
        else if ("remove" == t)
            "LI" == c.tagName ? l[i].splice([n], 1) : l.splice([n], 1),
            localStorage.setItem(a, JSON.stringify(l));
        else if ("update" == t) {
            var u = e.dataset.type
              , d = e.value;
            if ("weightToggle" == u)
                l = JSON.parse(localStorage.getItem("gpa-data")) || {},
                l.weightIsOff = calculator.weightIsOff,
                localStorage.setItem("gpa-data", JSON.stringify(l));
            else if ("currentGrade" == u || "currentCredits" == u)
                l = JSON.parse(localStorage.getItem("gpa-data")) || {},
                l[u] = parseFloat(d),
                localStorage.setItem("gpa-data", JSON.stringify(l));
            else {
                var g = l[i][n]
                  , m = !0
                  , f = !1
                  , y = undefined;
                try {
                    for (var v, p = Object.keys(g)[Symbol.iterator](); !(m = (v = p.next()).done); m = !0) {
                        var h = v.value;
                        h == u && (l[i][n][h] = d)
                    }
                } catch (e) {
                    f = !0,
                    y = e
                } finally {
                    try {
                        !m && p["return"] && p["return"]()
                    } finally {
                        if (f)
                            throw y
                    }
                }
                localStorage.setItem(a, JSON.stringify(l))
            }
        }
    },
    init: function() {
        "gpa" != calculator.type && "grade" != calculator.type || calculator.getLocalStorage(),
        document.addEventListener("input", function(e) {
            e.target && e.target.classList.contains("js-calculate") ? calculator.calculate(e) : e.target && e.target.classList.contains("js-item-update") && calculator.updateItem(e),
            e.target && e.target.classList.contains("js-store") && calculator.updateLocalStorage(e.target, "update")
        }),
        document.addEventListener("click", function(e) {
            e.target && e.target.classList.contains("js-item-action") ? "create" == e.target.dataset.action ? calculator.createItem(e) : "remove" == e.target.dataset.action && calculator.removeItem(e) : e.target && e.target.classList.contains("js-weight-toggle") ? calculator.toggleWeight(e.target) : e.target && e.target.classList.contains("js-calculator-action") && calculator.calculateFinalGrade(e)
        }),
        document.addEventListener("mouseover", function(e) {
            if (e.target && e.target.classList.contains("js-item-action") && ("semester" == e.target.dataset.type || "class" == e.target.dataset.type) && "remove" == e.target.dataset.action) {
                var t = e.target.parentNode.getElementsByClassName("js-item-action-remove")
                  , a = !0
                  , l = !1
                  , r = undefined;
                try {
                    for (var s, n = t[Symbol.iterator](); !(a = (s = n.next()).done); a = !0) {
                        s.value.classList.add("is-removable")
                    }
                } catch (e) {
                    l = !0,
                    r = e
                } finally {
                    try {
                        !a && n["return"] && n["return"]()
                    } finally {
                        if (l)
                            throw r
                    }
                }
            }
        }),
        document.addEventListener("mouseout", function(e) {
            if (e.target && e.target.classList.contains("js-item-action") && ("semester" == e.target.dataset.type || "class" == e.target.dataset.type) && "remove" == e.target.dataset.action) {
                var t = e.target.parentNode.getElementsByClassName("js-item-action-remove")
                  , a = !0
                  , l = !1
                  , r = undefined;
                try {
                    for (var s, n = t[Symbol.iterator](); !(a = (s = n.next()).done); a = !0) {
                        s.value.classList.remove("is-removable")
                    }
                } catch (e) {
                    l = !0,
                    r = e
                } finally {
                    try {
                        !a && n["return"] && n["return"]()
                    } finally {
                        if (l)
                            throw r
                    }
                }
            }
        })
    }
};
calculator.init();
var alert = document.getElementById("js-alert")
  , alertActions = Array.from(document.getElementsByClassName("js-alert-action"))
  , alertStatus = localStorage.getItem("GPACalculatorAlertStatus--GPALaunch");
alert && "hide" == alertStatus && (alert.style.display = "none"),
alertActions.forEach(listen);
