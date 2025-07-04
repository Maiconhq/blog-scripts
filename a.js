function getAttr(t, e, a) {
  var s = t.split("$"),
  o = /([^{\}]+(?=}))/g;
  for (let t = 0; t < s.length; t++) {
    var r = s[t].split("=");
    if (r[0].trim() == e) return null != (a = r[1]).match(o) && String(a.match(o)).trim()
  }
  return ! 1
}
function darkModeLogo(t) {
  $("[data-dark-src]").each(function() {
    var e = $(this),
    a = e.data("dark-src"),
    s = e.data("src");
    "true" == t ? e.attr("src", a) : e.attr("src", s)
  })
}
function caEmpty() {
  var t = $("#custom-ads"); ! t.find(".widget").length && t.remove()
}
function msgError() {
  return '<span class="error-msg"><b>Error:</b>&nbsp;' + pbt.noResults + "</span>"
}
function beforeLoader() {
  return '<div class="loader"></div>'
}
function getFeedUrl(t, e, a, s) {
  switch (a) {
  case "recent":
    s = "/feeds/posts/default?alt=json&max-results=" + e;
    break;
  default:
    s = "comments" != t ? "/feeds/posts/default/-/" + a + "?alt=json&max-results=" + e: "/feeds/comments/default?alt=json&max-results=" + e
  }
  return s
}
function getPostID(t, e, a) {
  return a = (a = t[e].id.$t) ? a.split("-").pop() : ""
}
function getPostLink(t, e) {
  for (var a = 0; a < t[e].link.length; a++) if ("alternate" == t[e].link[a].rel) {
    var s = t[e].link[a].href;
    break
  }
  return s
}
function getPostTitle(t, e, a) {
  return t[e].title.$t ? t[e].title.$t: pbt.noTitle
}
function getPostAuthor(t, e, a, s) {
  return s = "" != pbt.postAuthorLabel ? '<span class="sp">' + pbt.postAuthorLabel + "</span>": "",
  pbt.postAuthor ? '<span class="entry-author mi">' + s + '<span class="author-name">' + t[e].author[0].name.$t + "</span></span>": ""
}
function getPostDate(t, e, a, s, o, r) {
  monthNames = "undefined" != typeof monthNames ? monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  dateFormat = "undefined" != typeof dateFormat ? dateFormat: "{m} {d}, {y}";
  var n = t[e].published.$t,
  i = n.substring(0, 4),
  c = n.substring(5, 7),
  l = n.substring(8, 10),
  d = dateFormat.replace("{m}", monthNames[parseInt(c, 10) - 1]).replace("{d}", l).replace("{y}", i);
  return r = pbt.postAuthor && "" != pbt.postDateLabel ? '<span class="sp">' + pbt.postDateLabel + "</span>": "",
  [1 == pbt.postDate ? '<span class="entry-time mi">' + r + '<time class="published" datetime="' + n + '">' + d + "</time></span>": "", 1 == pbt.postDate ? '<span class="entry-time"><time class="published" datetime="' + n + '">' + d + "</time></span>": ""]
}
function getPostMeta(t, e, a, s, o) {
  return [1 == pbt.postAuthor || 1 == pbt.postDate ? '<div class="entry-meta">' + t + e[0] + "</div>": "", 1 == pbt.postDate ? '<div class="entry-meta">' + e[1] + "</div>": ""]
}
function getFirstImage(t) {
  var e = (t = $("<div>").html(t)).find("img").first().attr("src"),
  a = e.split("/"),
  s = "/" + a.slice( - 2)[0];
  return 9 == a.length && (s.match(/\/s[0-9]+/g) || s.match(/\/w[0-9]+/g) || "/d" == s) && (e = e.replace(s, "/w72-h72-p-k-no-nu")),
  e
}
function getPostImage(t, e, a, s) {
  var o = t[e].content ? t[e].content.$t: "";
  return a = t[e].media$thumbnail ? t[e].media$thumbnail.url: "https://resources.blogblog.com/img/blank.gif",
  o.indexOf(o.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) > -1 ? o.indexOf("<img") > -1 ? o.indexOf(o.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) < o.indexOf("<img") ? a.replace("img.youtube.com", "i.ytimg.com").replace("/default.", "/maxresdefault.") : getFirstImage(o) : a.replace("img.youtube.com", "i.ytimg.com").replace("/default.", "/maxresdefault.") : o.indexOf("<img") > -1 ? getFirstImage(o) : "https://resources.blogblog.com/img/blank.gif"
}
function getPostImageType(t, e) {
  return t.match("i.ytimg.com") ? " is-ytimg": ""
}
function getPostTag(t, e, a, s, o, r) {
  return a = t[e].category ? '<span class="entry-category">' + t[e].category[0].term + "</span>": "",
  [1 == pbt.entryTag ? a: "", 1 == pbt.thumbTag ? a: ""]
}
function getPostSummary(t, e, a, s, o, r) {
  return t[e].content ? ((r = $(t[e].content.$t)).find("td.tr-caption").text(""), o = "" != (s = r.text().trim()) ? '<span class="entry-excerpt excerpt">' + s.substr(0, a) + "…</span>": "") : o = "",
  o
}
function getPostComments(t, e, a, s, o) {
  var r = t[e].author[0].name.$t,
  n = t[e].author[0].gd$image.src.replace("/s113", "/s72-c").replace("/s220", "/s72-c");
  return (n.match("//img1.blogblog.com/img/blank.gif") || n.match("//img1.blogblog.com/img/b16-rounded.gif")) && (n = "//1.bp.blogspot.com/-QN2lgvtYZco/YN3mUSryAVI/AAAAAAAAADs/KrR-etCcvUMcPl06jopTs9pzq59IAXhMQCLcBGAsYHQ/w72-h72-p-k-no-nu/avatar.jpg"),
  '<div class="cmm1-item item-' + e + '"><a class="entry-inner" href="' + a + '" title="' + r + '"><span class="entry-thumbnail cmm-avatar"><span class="thumbnail" data-src="' + n + '"></span></span><div class="entry-header"><h2 class="entry-title cmm-title">' + r + '</h2><p class="cmm-snippet excerpt">' + s + "</p></div></a></div>"
}
function getPostContent(t, e, a, s) {
  var o = "",
  r = (e.length, getPostLink(e, a)),
  n = getPostTitle(e, a),
  i = getPostAuthor(e, a),
  c = getPostDate(e, a),
  l = getPostImage(e, a),
  d = getPostImageType(l, a),
  p = getPostMeta(i, c),
  m = getPostTag(e, a);
  switch (t) {
  case "mega":
    o += '<div class="post item-' + a + '"><a title="' + n + '" class="entry-thumbnail sz-3' + d + '" href="' + r + '"><span class="thumbnail" data-src="' + l + '"></span></a><div class="entry-header"><h2 class="entry-title"><a href="' + r + '" title="' + n + '">' + n + "</a></h2>" + p[1] + "</div></div>";
    break;
  case "ticker":
    o += '<div class="post item-' + a + (0 == a ? " active": "") + '"><h2 class="entry-title"><a href="' + r + '" title="' + n + '">' + n + "</a></h2></div>";
    break;
  case "trending":
    o += '<div class="post item-' + a + '"><a title="' + n + '" class="entry-thumbnail sz-2' + d + '" href="' + r + '"><span class="thumbnail" data-src="' + l + '"></span>' + m[1] + '</a><div class="entry-header"><h2 class="entry-title"><a href="' + r + '" title="' + n + '">' + n + "</a></h2>" + p[0] + "</div></div>";
    break;
  case "side":
    o += '<div class="post item-' + a + '"><a title="' + n + '" class="entry-thumbnail sz-4' + d + '" href="' + r + '"><span class="thumbnail" data-src="' + l + '"></span></a><div class="entry-header"><h2 class="entry-title"><a href="' + r + '" title="' + n + '">' + n + "</a></h2>" + p[1] + "</div></div>";
    break;
  case "related":
    a != s - 1 && (o += '<div class="post item-' + a + '"><a title="' + n + '" class="entry-thumbnail sz-3' + d + '" href="' + r + '"><span class="thumbnail" data-src="' + l + '"></span>' + m[1] + '</a><div class="entry-header"><h2 class="entry-title"><a href="' + r + '" title="' + n + '">' + n + "</a></h2>" + p[1] + "</div></div>");
    break;
  case "comments":
    o += getPostComments(e, a, r, n)
  }
  return o
}
function getRecentPostsData(t, e, a) {
  return $.ajax({
    url: getFeedUrl(t, e, "recent"),
    type: "GET",
    async: !1,
    dataType: "json",
    cache: !0,
    success: function(t) {
      return t
    }
  }).responseJSON
}
function getPosts(t, e, a, s, o) {
  s = 0 != s ? s: "unlabeled",
  $.ajax({
    url: getFeedUrl(e, a, s),
    type: "GET",
    dataType: "json",
    cache: !0,
    beforeSend: function(a) {
      switch (e) {
      case "mega":
        t.append('<div class="ul mega-items on-load">' + beforeLoader() + "</div>").addClass("loaded");
        break;
      case "ticker":
      case "trending":
      case "side":
      case "comments":
      case "related":
        t.html(beforeLoader()).parent().addClass("type-" + e)
      }
    },
    success: function(r) {
      var n = "";
      switch (e) {
      case "mega":
        n = '<div class="ul mega-items">';
        break;
      case "ticker":
        n = '<div class="pbt-ticker ticker-items">';
        break;
      case "trending":
        n = '<div class="trending-items">';
        break;
      case "side":
        n = '<div class="side-items">';
        break;
      case "comments":
        n = '<div class="cmm1-items">';
        break;
      case "related":
        n = '<div class="related-items">'
      }
      var i = r.feed.entry;
      if (i) {
        if ("related" == e) {
          1 == i.length && "recent" != s && (i = (r = getRecentPostsData(e, a)).feed.entry);
          for (let t = 0; t < i.length; t++) if (1 != i.length && getPostID(i, t) == o) {
            i.splice(t, 1);
            break
          }
        }
        for (let t = 0, s = i; t < s.length; t++) n += getPostContent(e, s, t, a)
      } else switch (e) {
      case "mega":
        n = '<div class="' + ("mega" == e ? "ul ": "") + 'mega-items no-items">' + msgError() + "</div>";
        break;
      default:
        n = msgError()
      }
      switch (e) {
      case "mega":
        n += "</div>",
        t.addClass(e).find(".mega-items").replaceWith(n);
        break;
      case "ticker":
        n += "</div>",
        t.html(n).pbtTicker();
        break;
      default:
        n += "</div>",
        t.html(n)
      }
      switch (e) {
      case "mega":
        t.find("span.thumbnail").pbtLazy({
          onScroll:
          !1
        });
        break;
      default:
        t.find("span.thumbnail").pbtLazy()
      }
    },
    error: function() {
      switch (e) {
      case "mega":
        t.find(".mega-items").replaceWith('<div class="ul mega-items no-items">' + msgError() + "</div>");
        break;
      default:
        t.html(msgError())
      }
    }
  })
}
function getMega(t, e, a, s) {
  "mega" == e ? getPosts(t, e, a, s) : t.append('<div class="ul mega-items no-items">' + msgError() + "</div>").addClass("loaded")
}
function getTicker(t, e, a, s) {
  if ("ticker" == e) return getPosts(t, e, a, s);
  t.html(msgError())
}
function getTrending(t, e, a, s) {
  if ("trending" == e) return getPosts(t, e, a, s);
  t.html(msgError())
}
function getWidget(t, e, a, s, o) {
  o.match("getposts") && ("side" == e || "comments" == e ? getPosts(t, e, a, s) : t.html(msgError()))
}
function getRelated(t, e, a, s, o) {
  "related" == e ? getPosts(t, e, a, s, o) : t.html(msgError())
}
function disqusComments(t) {
  var e = document.createElement("script");
  e.type = "text/javascript",
  e.async = !0,
  e.src = "//" + t + ".disqus.com/blogger_item.js",
  document.getElementsByTagName("head")[0].appendChild(e)
}
function beautiAvatar(t) {
  $(t).attr("src",
  function(t, e, a) {
    return a = "//1.bp.blogspot.com/-QN2lgvtYZco/YN3mUSryAVI/AAAAAAAAADs/KrR-etCcvUMcPl06jopTs9pzq59IAXhMQCLcBGAsYHQ/s35/avatar.jpg",
    e = (e = (e = e.replace("//resources.blogblog.com/img/blank.gif", a)).replace("//lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s35", a)).replace("/s35", "/s39")
  })
}
function pbtFixedSidebar(t) {
  $(t).each(function(t, e) {
    1 == pbt.fixedSidebar && (25, e = 1 == pbt.fixedMenu ? $(".header-inner").height() + 25 : 25, $(this).theiaStickySidebar({
      containerSelector: "#content-wrapper > .container",
      additionalMarginTop: e,
      additionalMarginBottom: 25
    }))
  })
}
viewAllText = "undefined" != typeof viewAllText ? viewAllText: pbt.viewAll,
$("#niadzgn-pro-main-menu").pbtMenu().find(".widget").addClass("show-menu"),
$("#main-search-wrap").each(function() {
  var t = $(this),
  e = $(window),
  a = $(".header-items");
  $(".show-search").click(function() {
    $("body").addClass("search-active"),
    t.fadeIn(170).find("input").focus()
  }),
  $(".search-close").click(function() {
    $("body").removeClass("search-active"),
    t.fadeOut(170).find("input").blur().val("")
  }),
  e.on("load resize",
  function(t, s) {
    e.width() > 980 ? (t = a.outerWidth(), s = $("#main-logo").outerWidth(), a.attr("style", "--search-width:" + (t - (s + 28)) + "px")) : a.attr("style", "--search-width:100%")
  })
}),
$("html").each(function() {
  var t = $(this),
  e = localStorage.darkMode;
  1 != pbt.darkMode && 0 != pbt.userDarkMode && ("true" == e && (t.addClass("is-dark"), darkModeLogo(e)), $(".darkmode-toggle").click(function() {
    $btn = $(this),
    $btn.hasClass("dark-on") ? $btn.removeClass("dark-on").addClass("dark-off") : $btn.removeClass("dark-off").addClass("dark-on"),
    t.toggleClass("is-dark"),
    e = "true" != e ? "true": "false",
    localStorage.darkMode = e,
    darkModeLogo(e)
  }))
}),
$(".dark-logo").each(function() {
  1 == pbt.darkMode && darkModeLogo("true")
}),
$("#ticker .PopularPosts .widget-content").pbtTicker(),
$(".blog1-title a.title-link, .related-title a.title-link").each(function() {
  "" != viewAllText.trim() && $(this).html(viewAllText)
}),
$(".pbt-section .social-icons a").each(function(t) {
  var e = $(this),
  a = e.attr("href").split("#"),
  s = e.data("side");
  a[1] && 1 == s && "" != (t = a[1].trim()) && e.append('<span class="text">' + t + "</span>"),
  e.attr("href", a[0].trim())
}),
$(".MailChimp .widget-content").each(function(t, e) {
  var a = $(this),
  s = a.data("shortcode");
  s && (t = getAttr(s, "title"), e = getAttr(s, "text"), 0 != t && a.find(".mailchimp-title").text(t), 0 != e && a.find(".mailchimp-text").text(e))
}),
$(".post-body a").each(function() {
  var t = $(this),
  e = t.text(),
  a = e.toLowerCase(),
  s = getAttr(e, "text");
  a.match("getbutton") && 0 != s && (t.replaceText(/([^{\}]+(?=}))/g, "<em>$1</em>"), t.find("em").replaceText("$", "%s"), t.each(function() {
    var t = $(this),
    e = t.text(),
    a = getAttr(e, "text"),
    s = getAttr(e, "icon"),
    o = getAttr(e, "color"),
    r = getAttr(e, "size"),
    n = getAttr(e, "info"),
    i = t.parent().attr("style");
    t.addClass(0 != r ? "button btn x2": "button btn").text(a.replace("%s", "$")),
    i && i.match("center") && t.addClass("is-c"),
    0 != n ? (t.addClass(0 != s ? "x2 " + s: "x2"), t.append('<span class="btn-info">' + n.replace("%s", "$") + "</span>")) : 0 != s && t.addClass(s),
    0 != o && t.addClass("color").attr("style", "background:" + o + ";")
  }))
}),
$(".post-body b").each(function() {
  var t = $(this),
  e = t.text(),
  a = e.toLowerCase().trim();
  a.match(/(?:\$ads\=\{1\})/g) && t.replaceWith('<div id="niadzgn-pro-new-before-ad"/>'),
  a.match(/(?:\$ads\=\{2\})/g) && t.replaceWith('<div id="niadzgn-pro-new-after-ad"/>'),
  a.match("{gettoc}") && (e = 0 != (e = getAttr(e, "title")) ? e: "Table of Contents", t.replaceWith('<div class="pbt-toc-wrap"><div class="pbt-toc-inner"><button class="pbt-toc-title" aria-label="' + e + '"><span class="pbt-toc-title-text">' + e + '</span></button><ol id="pbt-toc"></ol></div></div>'), $(".pbt-toc-title").click(function() {
    $(this).toggleClass("is-expanded"),
    $("#pbt-toc").slideToggle(170)
  }), $("#pbt-toc").toc({
    content: "#post-body",
    headings: "h2,h3,h4"
  }), $("#pbt-toc li a").each(function() {
    var t = $(this);
    t.click(function(e) {
      return e.preventDefault(),
      $("html,body").animate({
        scrollTop: $(t.attr("href")).offset().top - 20
      },
      500),
      !1
    })
  })),
  a.match("{contactform}") && (t.replaceWith('<div class="contact-form-widget"/>'), $("#post-body .contact-form-widget").append($("#ContactForm1 .contact-form-form"))),
  a.match("{leftsidebar}") && ($("body").addClass("is-left"), t.remove()),
  a.match("{rightsidebar}") && ($("body").addClass("is-right").removeClass("is-left"), t.remove()),
  a.match("{fullwidth}") && ($("body").addClass("no-sidebar"), t.remove())
}),
$("#niadzgn-pro-new-before-ad").each(function() {
  var t = $(this);
  t.length && $("#before-ad").appendTo(t)
}),
$("#niadzgn-pro-new-after-ad").each(function() {
  var t = $(this);
  t.length && $("#after-ad").appendTo(t)
}),
$("#niadzgn-pro-main-before-ad .widget").each(function() {
  var t = $(this),
  e = t.parent();
  t.length && t.appendTo($("#before-ad")),
  e.remove(),
  caEmpty()
}),
$("#niadzgn-pro-main-after-ad .widget").each(function() {
  var t = $(this),
  e = t.parent();
  t.length && t.appendTo($("#after-ad")),
  e.remove(),
  caEmpty()
}),
$("#niadzgn-pro-post-footer-ads .widget").each(function() {
  var t = $(this),
  e = t.parent();
  t.length && t.appendTo($("#post-footer-ads")),
  e.remove()
}),
$(".post-body blockquote").each(function() {
  var t = $(this),
  e = t.text().toLowerCase().trim(),
  a = t.html();
  if (e.match("{alertsuccess}")) {
    var s = a.replace("{alertSuccess}", "");
    t.replaceWith('<div class="alert-message alert-success">' + s + "</div>")
  }
  if (e.match("{alertinfo}")) {
    s = a.replace("{alertInfo}", "");
    t.replaceWith('<div class="alert-message alert-info">' + s + "</div>")
  }
  if (e.match("{alertwarning}")) {
    s = a.replace("{alertWarning}", "");
    t.replaceWith('<div class="alert-message alert-warning">' + s + "</div>")
  }
  if (e.match("{alerterror}")) {
    s = a.replace("{alertError}", "");
    t.replaceWith('<div class="alert-message alert-error">' + s + "</div>")
  }
  if (e.match("{codebox}")) {
    s = a.replace("{codeBox}", "");
    t.replaceWith('<pre class="code-box">' + s + "</pre>")
  }
}),
$(".post-share .pbt-window").click(function(t) {
  t.preventDefault();
  var e = $(this),
  a = e.data("url"),
  s = e.data("width"),
  o = e.data("height");
  window.open(a, "_blank", "scrollbars=yes,resizable=yes,toolbar=0,width=" + s + ",height=" + o + ",top=50,left=50").focus()
}),
$(".post-share .show-more .btn, .share-toggle, .hide-modal, #share-overlay").click(function(t) {
  t.preventDefault(),
  $("body").toggleClass("share-active")
}),
$(".about-author .author-text").each(function() {
  var t = $(this),
  e = t.find("a");
  e.length && (e.each(function() {
    var t = $(this),
    e = t.text().trim(),
    a = t.attr("href");
    t.replaceWith('<li class="' + e + '"><a class="fa-' + e + '" href="' + a + '" title="' + e + '" rel="noopener noreferrer" target="_blank"/></li>')
  }), t.parent().append('<ul class="author-links social sc-a"></ul>'), t.find("li").appendTo(t.parent().find(".author-links")))
}),
$(".main-nav li.mega-menu").each(function(t, e) {
  var a = $(this),
  s = a.find("a").data("shortcode");
  s && (0 != (t = getAttr(s, "label")) && (e = "recent" == t ? "/search": "/search/label/" + t, a.children("a").attr("href", e)), a.mouseenter(function() {
    a.hasClass("loaded") || getMega(a, "mega", 5, t)
  }))
}),
$("#ticker .HTML .widget-content").each(function(t, e) {
  var a = $(this),
  s = $(window),
  o = a.data("shortcode");
  o && (t = getAttr(o, "results"), e = getAttr(o, "label"), s.on("load resize scroll",
  function o() {
    s.scrollTop() + s.height() >= a.offset().top && (s.off("load resize scroll", o), getTicker(a, "ticker", t, e))
  }).trigger("scroll"))
}),
$("#trending .HTML .widget-content").each(function(t) {
  var e = $(this),
  a = $(window),
  s = e.data("shortcode");
  s && (t = getAttr(s, "label"), a.on("load resize scroll",
  function s() {
    a.scrollTop() + a.height() >= e.offset().top && (a.off("load resize scroll", s), getTrending(e, "trending", 4, t))
  }).trigger("scroll"))
}),
$(".pbt-section .HTML .widget-content").each(function(t, e, a, s) {
  var o = $(this),
  r = $(window),
  n = o.data("shortcode");
  n && (t = n.toLowerCase(), e = getAttr(n, "results"), a = getAttr(n, "label"), s = "posts" != (s = 0 != (s = getAttr(n, "type")) ? s: "side") ? s: "side", r.on("load resize scroll",
  function n() {
    r.scrollTop() + r.height() >= o.offset().top && (r.off("load resize scroll", n), getWidget(o, s, e, a, t))
  }).trigger("scroll"))
}),
$("#niadzgn-pro-related-posts .HTML").each(function(t, e) {
  var a = $(this).data("shortcode");
  if (a) {
    function s() {
      return t = getAttr(a, "results"),
      e = getAttr(a, "label"),
      [t, e]
    }
    $("#related-wrap").each(function(t, e, a, o) {
      var r = $(this),
      n = r.find(".related-tag"),
      i = $(window),
      c = r.find(".related-content"),
      l = s();
      t = 0 != l[0] ? Number(l[0]) + 1 : 4,
      e = 0 != l[1] ? l[1] : n.data("label"),
      a = n.data("id"),
      0 != l[1] && (o = "recent" == e ? "/search": "/search/label/" + e, r.find(".related-title .title-link").attr("href", o)),
      i.on("load resize scroll",
      function s() {
        i.scrollTop() + i.height() >= c.offset().top && (i.off("load resize scroll", s), getRelated(c, "related", t, e, a), $("#niadzgn-pro-related-posts").remove())
      }).trigger("scroll")
    })
  }
}),
$(".niadzgn-pro-blog-post-comments").each(function() {
  var t = $(this),
  e = t.data("shortcode"),
  a = getAttr(e, "type"),
  s = "comments-system-" + a,
  o = t.find("#top-continue .comment-reply");
  switch (a) {
  case "disqus":
    var r = getAttr(e, "shortname");
    0 != r && (disqus_shortname = r),
    disqusComments(disqus_shortname),
    t.addClass(s + " is-visible");
    break;
  case "facebook":
    var n = getAttr(e, "lang"),
    i = 0 != n ? "https://connect.facebook.net/" + n + "/all.js#xfbml=1&version=v11.0": "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0";
    $("head").append('<script async="async" defer="defer" crossorigin="anonymous" src="' + i + '"/>'),
    t.addClass(s).find("#comments").html('<div class="fb-comments" data-width="100%" data-href="' + disqus_blogger_current_url + '" order_by="time" data-numposts="5" data-lazy="true"></div>'),
    t.addClass("is-visible");
    break;
  case "hide":
    t.addClass("is-hidden");
    break;
  default:
    t.addClass("comments-system-blogger is-visible"),
    o.addClass("btn"),
    beautiAvatar(".avatar-image-container img")
  }
  var c = t.find(".comments .comment-reply"),
  l = t.find(".comments #top-continue"),
  d = t.find("#top-ce.comment-replybox-thread");
  c.click(function(t) {
    t.preventDefault(),
    l.show(),
    d.hide()
  }),
  l.click(function(t) {
    t.preventDefault(),
    l.hide(),
    d.show()
  })
}),
$(function() {
  $(".entry-thumbnail .thumbnail,.entry-avatar .avatar").not(".pbt-lazy").pbtLazy(),
  $(".mobile-logo").each(function() {
    var t = $(this),
    e = $(".main-logo a").clone();
    e.find("h1").remove(),
    e.appendTo(t)
  }),
  $("#mobile-menu").each(function() {
    var t = $(this),
    e = $(".main-nav").clone();
    e.attr("class", "mobile-nav").attr("id", "mobile-nav"),
    e.find(".mega-menu > .ul").remove(),
    e.find(".has-sub > a").after('<button class="submenu-toggle btn" aria-label="expand"/>'),
    e.find(".mega-menu").removeAttr("class").children(".submenu-toggle").remove(),
    e.find(".mega-menu > a").each(function(t, e) {
      var a = $(this),
      s = a.data("shortcode");
      s && 0 != (t = getAttr(s, "label")) && (e = "recent" == t ? "/search": "/search/label/" + t, a.attr("href", e))
    }),
    e.appendTo(t),
    $(".mobile-menu-toggle, .hide-mobile-menu, #overlay").click(function() {
      $("body").toggleClass("nav-active")
    }),
    $(".mobile-menu .submenu-toggle").click(function() {
      var t = $(this);
      t.parent().hasClass("expanded") ? t.parent().removeClass("expanded").children(".sub-menu").slideToggle(170) : t.parent().addClass("expanded").children(".sub-menu").slideToggle(170)
    })
  }),
  $(".mm-footer").each(function() {
    var t = $(this),
    e = $("#niadzgn-pro-about-section ul.social-icons"),
    a = $("#footer-menu ul.link-list"),
    s = !!e.length && e.clone();
    0 != s && (s.removeClass("sb-h").addClass("sc-a"), t.append(s)),
    $m = !!a.length && a.clone(),
    0 != $m && t.append($m)
  }),
  $(".header-inner").each(function() {
    var t = $(this);
    if (1 == pbt.fixedMenu && t.length > 0) {
      var e = $(document).scrollTop(),
      a = t.offset().top,
      s = t.height(),
      o = a + s + s;
      $(window).scroll(function(s, r) {
        s = $(document).scrollTop(),
        a = t.offset().top,
        r = $(".main-header").offset().top + 1,
        s > o ? t.addClass("is-fixed") : a <= r && t.removeClass("is-fixed").removeClass("show"),
        s < e ? setTimeout(function() {
          a >= r && t.addClass("show")
        },
        170) : t.removeClass("show"),
        e = s
      })
    }
  }),
  pbtFixedSidebar("#main-wrapper, #sidebar-wrapper"),
  $("#post-body iframe").each(function() {
    var t = $(this);
    t.attr("src").match("www.youtube.com") && t.wrap('<div class="youtube-video"/>')
  }),
  $("p.comment-content").each(function() {
    var t = $(this);
    t.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, '<img src="$1"/>'),
    t.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, '<div class="youtube-video"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')
  }),
  $("#niadzgn-pro-load-more-link").each(function() {
    var t = $(this),
    e = t.data("load");
    e && t.show(),
    t.click(function(a) {
      a.preventDefault(),
      t.hide(),
      $.ajax({
        url: e,
        success: function(a) {
          var s = $(a).find(".blog-posts");
          s.find(".post").addClass("fadeInUp"),
          $(".blog-posts").append(s.html()),
          (e = $(a).find("#niadzgn-pro-load-more-link").data("load")) ? t.show() : (t.hide(), $("#blog-pager .no-more").addClass("show"))
        },
        beforeSend: function() {
          $("#blog-pager .loading").show()
        },
        complete: function() {
          $("#blog-pager .loading").hide(),
          $(".blog-posts .post .thumbnail").not(".pbt-lazy").pbtLazy(),
          pbtFixedSidebar("#main-wrapper, #sidebar-wrapper")
        }
      })
    })
  }),
  $("#niadzgn-pro-cookie-consent").each(function() {
    var t = $(this),
    e = t.find(".widget.Text").data("shortcode"),
    a = t.find(".consent-button");
    t.length > 0 && (e && (ok = getAttr(e, "ok"), days = getAttr(e, "days"), 0 != ok && a.text(ok), days = 0 != days ? Number(days) : 7), "1" !== $.cookie("niadzgn_pro_cookie_consent") && (t.css("display", "block"), $(window).on("load",
    function() {
      t.addClass("is-visible")
    })), a.off("click").click(function(e) {
      e.preventDefault(),
      e.stopPropagation(),
      $.cookie("niadzgn_pro_cookie_consent", "1", {
        expires: days,
        path: "/"
      }),
      t.removeClass("is-visible"),
      setTimeout(function() {
        t.css("display", "none")
      },
      500)
    }), cookieChoices = {})
  }),
  $("#back-top").each(function() {
    var t = $(this);
    $(window).on("scroll",
    function() {
      $(this).scrollTop() >= 100 ? t.addClass("show") : t.removeClass("show"),
      t.offset().top >= $("#footer-wrapper").offset().top - 34 ? t.addClass("on-footer") : t.removeClass("on-footer")
    }),
    t.click(function(t) {
      t.preventDefault(),
      $("html, body").animate({
        scrollTop: 0
      },
      500)
    })
  })
});
