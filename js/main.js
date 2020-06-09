// !function(n){"use strict";n(window).on("load",function(){n("#loader").fadeOut("slow",function(){n("#preloader").delay(300).fadeOut("slow")}),n("html").hasClass("no-cssanimations")||setTimeout(function(){n("body .animate-intro").each(function(a){var i=n(this),e=i.data("animate");(null===e||void 0===e||""===e.trim())&&(e="fadeInUp"),setTimeout(function(){i.addClass(e+" animated")},100*a)})},1e3)}),n(window).on("scroll",function(){var a=n(window).scrollTop(),i=n("header"),e=i.find(".logo"),t=i.innerHeight();a>t?e.fadeOut():e.fadeIn()}),n(".fluid-video-wrapper").fitVids(),n(window).on("load",function(){n("#testimonial-slider").flexslider({namespace:"flex-",controlsContainer:".flexslider-controls",animation:"fade",manualControls:".flex-control-nav li",controlNav:!0,directionNav:!1,smoothHeight:!0,slideshowSpeed:7e3,animationSpeed:600,randomize:!1,touch:!0,useCSS:!1,start:function(a){n(a).trigger("resize")}})});var a=n(".menu-toggle"),i=(n("#menu-nav-wrap"),n("body")),e=n("#main-content-wrap, header");a.on("click",function(e){e.preventDefault(),a.toggleClass("is-clicked"),i.toggleClass("menu-is-open").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){i.toggleClass("overflow-hidden")}),n("html").hasClass("no-csstransitions")&&i.toggleClass("overflow-hidden")}),e.on("click",function(e){n(e.target).is(".menu-toggle, .menu-toggle span")||(a.removeClass("is-clicked"),i.removeClass("menu-is-open").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){i.removeClass("overflow-hidden")}),n("html").hasClass("no-csstransitions")&&i.removeClass("overflow-hidden"))});var t=n("#stats"),o=n(".stat-count");t.waypoint({handler:function(a){"down"===a&&o.each(function(){var a=n(this);n({Counter:0}).animate({Counter:a.text()},{duration:4e3,easing:"swing",step:function(n){a.text(Math.ceil(n))}})}),this.destroy()},offset:"90%"});var s=n("section"),l=n("#menu-nav-wrap .nav-list a");s.waypoint({handler:function(a){var i;i=n("section#"+n(this.element).attr("id")),"up"===a&&(i=i.prev());var e=n('#menu-nav-wrap .nav-list a[href="#'+i.attr("id")+'"]');l.parent().removeClass("current"),e.parent().addClass("current")},offset:"25%"}),n(".smoothscroll").on("click",function(a){a.preventDefault();var i=this.hash,e=n(i);n("html, body").stop().animate({scrollTop:e.offset().top},800,"swing").promise().done(function(){n("body").hasClass("menu-is-open")&&n(".menu-toggle").trigger("click"),window.location.hash=i})}),n("input, textarea, select").placeholder();var r="http://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e65110b38d";n("#mc-form").ajaxChimp({language:"es",url:r}),n.ajaxChimp.translations.es={submit:"Submitting...",0:'<i class="fa fa-check"></i> We have sent you a confirmation email',1:'<i class="fa fa-warning"></i> You must enter a valid e-mail address.',2:'<i class="fa fa-warning"></i> E-mail address is not valid.',3:'<i class="fa fa-warning"></i> E-mail address is not valid.',4:'<i class="fa fa-warning"></i> E-mail address is not valid.',5:'<i class="fa fa-warning"></i> E-mail address is not valid.'},n("html").hasClass("no-cssanimations")||n(".animate-this").waypoint({handler:function(a){var i="fadeInUp";"down"!==a||n(this.element).hasClass("animated")||(n(this.element).addClass("item-animate"),setTimeout(function(){n("body .animate-this.item-animate").each(function(a){var e=n(this),t=e.data("animate");(null===t||void 0===t||""===t.trim())&&(t=i),setTimeout(function(){e.addClass(t+" animated"),e.removeClass("item-animate")},50*a)})},500)),this.destroy()},offset:"95%"});var d=300,c=400,m=400,f=n("#go-top");n(window).on("scroll",function(){n(window).scrollTop()>=d?f.fadeIn(c):f.fadeOut(m)})}(jQuery);


!(function (n) {
    "use strict";
    n(window).on("load", function () {
        n("#loader").fadeOut("slow", function () {
            n("#preloader").delay(300).fadeOut("slow");
        }),
            n("html").hasClass("no-cssanimations") ||
                setTimeout(function () {
                    n("body .animate-intro").each(function (a) {
                        var i = n(this),
                            e = i.data("animate");
                        (null === e || void 0 === e || "" === e.trim()) && (e = "fadeInUp"),
                            setTimeout(function () {
                                i.addClass(e + " animated");
                            }, 100 * a);
                    });
                }, 1e3);
    }),
        n(window).on("scroll", function () {
            var a = n(window).scrollTop(),
                i = n("header"),
                e = i.find(".logo"),
                t = i.innerHeight();
            a > t ? e.fadeOut() : e.fadeIn();
        }),
        n(".fluid-video-wrapper").fitVids(),
        n(window).on("load", function () {
            n("#testimonial-slider").flexslider({
                namespace: "flex-",
                controlsContainer: ".flexslider-controls",
                animation: "fade",
                manualControls: ".flex-control-nav li",
                controlNav: !0,
                directionNav: !1,
                smoothHeight: !0,
                slideshowSpeed: 7e3,
                animationSpeed: 600,
                randomize: !1,
                touch: !0,
                useCSS: !1,
                start: function (a) {
                    n(a).trigger("resize");
                },
            });
        });
    var a = n(".menu-toggle"),
        i = (n("#menu-nav-wrap"), n("body")),
        e = n("#main-content-wrap, header");
    a.on("click", function (e) {
        e.preventDefault(),
            a.toggleClass("is-clicked"),
            i.toggleClass("menu-is-open").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
                i.toggleClass("overflow-hidden");
            }),
            n("html").hasClass("no-csstransitions") && i.toggleClass("overflow-hidden");
    }),
        e.on("click", function (e) {
            n(e.target).is(".menu-toggle, .menu-toggle span") ||
                (a.removeClass("is-clicked"),
                i.removeClass("menu-is-open").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
                    i.removeClass("overflow-hidden");
                }),
                n("html").hasClass("no-csstransitions") && i.removeClass("overflow-hidden"));
        });
    var t = n("#stats"),
        o = n(".stat-count");
    t.waypoint({
        handler: function (a) {
            "down" === a &&
                o.each(function () {
                    var a = n(this);
                    n({ Counter: 0 }).animate(
                        { Counter: a.text() },
                        {
                            duration: 4e3,
                            easing: "swing",
                            step: function (n) {
                                a.text(Math.ceil(n));
                            },
                        }
                    );
                }),
                this.destroy();
        },
        offset: "90%",
    });
    var s = n("section"),
        l = n("#menu-nav-wrap .nav-list a");
    s.waypoint({
        handler: function (a) {
            var i;
            (i = n("section#" + n(this.element).attr("id"))), "up" === a && (i = i.prev());
            var e = n('#menu-nav-wrap .nav-list a[href="#' + i.attr("id") + '"]');
            l.parent().removeClass("current"), e.parent().addClass("current");
        },
        offset: "25%",
    }),
        n(".smoothscroll").on("click", function (a) {
            a.preventDefault();
            var i = this.hash,
                e = n(i);
            n("html, body")
                .stop()
                .animate({ scrollTop: e.offset().top }, 800, "swing")
                .promise()
                .done(function () {
                    n("body").hasClass("menu-is-open") && n(".menu-toggle").trigger("click"), (window.location.hash = i);
                });
        }),
        n("input, textarea, select").placeholder();
    var r = "http://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e65110b38d";
    n("#mc-form").ajaxChimp({ language: "es", url: r }),
        (n.ajaxChimp.translations.es = {
            submit: "Submitting...",
            0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
            1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
            2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
            3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
            4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
            5: '<i class="fa fa-warning"></i> E-mail address is not valid.',
        }),
        n("html").hasClass("no-cssanimations") ||
            n(".animate-this").waypoint({
                handler: function (a) {
                    var i = "fadeInUp";
                    "down" !== a ||
                        n(this.element).hasClass("animated") ||
                        (n(this.element).addClass("item-animate"),
                        setTimeout(function () {
                            n("body .animate-this.item-animate").each(function (a) {
                                var e = n(this),
                                    t = e.data("animate");
                                (null === t || void 0 === t || "" === t.trim()) && (t = i),
                                    setTimeout(function () {
                                        e.addClass(t + " animated"), e.removeClass("item-animate");
                                    }, 50 * a);
                            });
                        }, 500)),
                        this.destroy();
                },
                offset: "95%",
            });
    var d = 300,
        c = 400,
        m = 400,
        f = n("#go-top");
    n(window).on("scroll", function () {
        n(window).scrollTop() >= d ? f.fadeIn(c) : f.fadeOut(m);
    });
})(jQuery);
