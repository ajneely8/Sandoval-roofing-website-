/* Sandoval Roofing Services Inc. — site interactions */
(function(){
  "use strict";

  /* ---------------------------------------------------------------
     FORM DELIVERY — set this once to start receiving submissions.
     1. Create a free form at https://formspree.io (use your real
        business email as the destination).
     2. Copy the form's endpoint (looks like https://formspree.io/f/abcdwxyz)
        and paste it below, replacing YOUR_FORM_ID.
     Until you do, the form gracefully falls back to opening the
     visitor's email app (mailto) so it still works today.
  --------------------------------------------------------------- */
  var FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
  var CONTACT_EMAIL = "sandovalroofs@gmail.com"; // estimate form -> Estimator
  var CONTACT_PHONE = "210-623-1101";

  document.addEventListener("DOMContentLoaded", function(){
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---- sticky nav solidify + back-to-top ---- */
    var nav = document.getElementById("nav");
    var toTop = document.getElementById("toTop");
    // interior pages opt into an always-solid nav via .nav--fixedsolid
    var alwaysSolid = nav && nav.classList.contains("nav--fixedsolid");
    function onScroll(){
      var y = window.pageYOffset || document.documentElement.scrollTop;
      if(nav && !alwaysSolid) nav.classList.toggle("nav--solid", y > 60);
      if(toTop) toTop.classList.toggle("show", y > 700);
    }
    window.addEventListener("scroll", onScroll, {passive:true});
    onScroll();
    if(toTop){
      toTop.addEventListener("click", function(){
        window.scrollTo({top:0, behavior: reduce ? "auto" : "smooth"});
      });
    }

    /* ---- hero parallax (bg lags behind; headline drifts up + fades) ---- */
    var heroBg = document.querySelector(".hero .hero__bg");
    var heroInner = document.querySelector(".hero .hero__inner");
    var heroScroll = document.querySelector(".hero__scroll");
    if(heroBg && !reduce){
      heroBg.style.willChange = "transform";
      if(heroInner) heroInner.style.willChange = "transform, opacity";
      var vh = window.innerHeight, ptick = false;
      window.addEventListener("resize", function(){ vh = window.innerHeight; }, {passive:true});
      function parallax(){
        ptick = false;
        var y = window.pageYOffset || document.documentElement.scrollTop;
        if(y > vh + 40) return; // only while the hero is on screen
        var p = y / vh; // 0 -> 1 across the first screen
        // hero video is pinned via CSS (position:fixed); only the copy drifts + fades
        if(heroInner){
          heroInner.style.transform = "translate3d(0," + (y * -0.3) + "px,0)";
          heroInner.style.opacity = Math.max(0, 1 - p * 1.25);
        }
        if(heroScroll) heroScroll.style.opacity = Math.max(0, 1 - p * 5);
      }
      window.addEventListener("scroll", function(){
        if(!ptick){ requestAnimationFrame(parallax); ptick = true; }
      }, {passive:true});
      parallax();
    }

    /* ---- mobile drawer ---- */
    var toggle = document.getElementById("navToggle");
    var drawer = document.getElementById("drawer");
    var scrim = document.getElementById("scrim");
    var closeBtn = document.getElementById("navClose");
    function openDrawer(){
      if(!drawer) return;
      drawer.classList.add("open"); if(scrim) scrim.classList.add("open");
      if(toggle) toggle.setAttribute("aria-expanded","true");
      drawer.setAttribute("aria-hidden","false");
    }
    function closeDrawer(){
      if(!drawer) return;
      drawer.classList.remove("open"); if(scrim) scrim.classList.remove("open");
      if(toggle) toggle.setAttribute("aria-expanded","false");
      drawer.setAttribute("aria-hidden","true");
    }
    if(toggle) toggle.addEventListener("click", openDrawer);
    if(closeBtn) closeBtn.addEventListener("click", closeDrawer);
    if(scrim) scrim.addEventListener("click", closeDrawer);
    if(drawer) drawer.querySelectorAll("a").forEach(function(a){ a.addEventListener("click", closeDrawer); });
    document.addEventListener("keydown", function(e){ if(e.key === "Escape") closeDrawer(); });

    /* ---- drawer accordions (Our Work, Systems — tap to reveal sub-options) ---- */
    var accs = drawer ? drawer.querySelectorAll(".drawer__acc") : [];
    accs.forEach(function(acc){
      var accPanel = document.getElementById(acc.getAttribute("aria-controls"));
      acc.addEventListener("click", function(){
        var expanded = acc.getAttribute("aria-expanded") === "true";
        acc.setAttribute("aria-expanded", expanded ? "false" : "true");
        if(accPanel) accPanel.classList.toggle("open", !expanded);
      });
    });

    /* ---- reveal on scroll ---- */
    var els = document.querySelectorAll(".reveal");
    if(reduce || !("IntersectionObserver" in window)){
      els.forEach(function(el){ el.classList.add("in"); });
    } else {
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(en){
          if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }
        });
      }, {threshold:0.12, rootMargin:"0px 0px -8% 0px"});
      els.forEach(function(el){ io.observe(el); });
    }

    /* ---- current year ---- */
    var yr = document.getElementById("yr");
    if(yr) yr.textContent = new Date().getFullYear();

    /* ---- slow the hero background video ---- */
    var heroVid = document.querySelector(".hero__video");
    if(heroVid){
      var HERO_RATE = 1; // slow-motion is baked into the file (smooth 60fps); play at normal speed
      var setRate = function(){ try { heroVid.playbackRate = HERO_RATE; } catch(e){} };
      setRate();
      heroVid.addEventListener("loadedmetadata", setRate);
      heroVid.addEventListener("loadeddata", setRate);
      heroVid.addEventListener("play", setRate);
    }

    /* ---- count-up stats ---- */
    var counters = document.querySelectorAll("[data-count]");
    if(counters.length){
      var runCount = function(el){
        var target = parseFloat(el.getAttribute("data-count")) || 0;
        var suffix = el.getAttribute("data-suffix") || "";
        if(reduce){ el.textContent = target + suffix; return; }
        var dur = 1700, startT = null;
        function tick(ts){
          if(startT === null) startT = ts;
          var p = Math.min((ts - startT) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
          el.textContent = Math.round(eased * target) + suffix;
          if(p < 1){ requestAnimationFrame(tick); }
          else { el.textContent = target + suffix; }
        }
        requestAnimationFrame(tick);
      };
      if(!("IntersectionObserver" in window)){
        counters.forEach(function(el){ el.textContent = (el.getAttribute("data-count") || "") + (el.getAttribute("data-suffix") || ""); });
      } else {
        var countObs = new IntersectionObserver(function(entries){
          entries.forEach(function(en){
            if(en.isIntersecting){ runCount(en.target); countObs.unobserve(en.target); }
          });
        }, {threshold:0.6});
        counters.forEach(function(el){ countObs.observe(el); });
      }
    }

    /* (Removed decorative interactions: card tilt, magnetic buttons, hero parallax.
       Cards use a simple, calm CSS hover lift instead.) */

    /* ---- project lightbox (click a project to view more photos) ---- */
    (function initLightbox(){
      var items = document.querySelectorAll(".projects .gallery__item");
      if(!items.length) return;

      var lb = document.createElement("div");
      lb.className = "lb"; lb.setAttribute("aria-hidden","true");
      lb.innerHTML =
        '<span class="lb__count"></span>' +
        '<button class="lb__close" aria-label="Close">×</button>' +
        '<button class="lb__prev" aria-label="Previous photo">‹</button>' +
        '<button class="lb__next" aria-label="Next photo">›</button>' +
        '<div class="lb__stage"><img alt=""><div class="lb__cap"></div></div>';
      document.body.appendChild(lb);
      var lbImg = lb.querySelector("img"), lbCap = lb.querySelector(".lb__cap"), lbCount = lb.querySelector(".lb__count");
      var photos = [], idx = 0, caption = "", session = 0;

      function render(){
        lbImg.style.visibility = "hidden";
        lbImg.onload = function(){
          // cap display at ~1.9x native so low-res originals stay sharp instead of upscaling to a blur
          var cap = 1.9;
          lbImg.style.setProperty("--lb-mw", Math.round(lbImg.naturalWidth * cap) + "px");
          lbImg.style.setProperty("--lb-mh", Math.round(lbImg.naturalHeight * cap) + "px");
          lbImg.style.visibility = "visible";
        };
        lbImg.src = photos[idx];
        lbCount.textContent = (idx+1) + " / " + photos.length;
        lbCap.textContent = caption;
        lb.classList.toggle("lb--single", photos.length < 2);
      }
      function openLb(list, cap){
        photos = list.slice(); idx = 0; caption = cap;
        render(); lb.classList.add("open"); lb.setAttribute("aria-hidden","false");
        document.body.style.overflow = "hidden";
      }
      function closeLb(){ lb.classList.remove("open"); lb.setAttribute("aria-hidden","true"); document.body.style.overflow = ""; lbImg.src = ""; }
      function next(){ if(photos.length<2)return; idx=(idx+1)%photos.length; render(); }
      function prev(){ if(photos.length<2)return; idx=(idx-1+photos.length)%photos.length; render(); }

      items.forEach(function(it){
        var single = it.hasAttribute("data-single");
        if(!single){
          var cue = document.createElement("span"); cue.className = "project-cue"; cue.textContent = "View More";
          it.appendChild(cue);
        }
        it.addEventListener("click", function(){
          var img = it.querySelector("img"); if(!img) return;
          var main = img.getAttribute("src");
          var b = it.querySelector(".gallery__cap b"); var cap = b ? b.textContent : "";
          var list = [main];
          openLb(list, cap);
          var mySession = ++session;
          if(single) return;

          // Explicit extra photos via data-more="path1,path2"
          var more = it.getAttribute("data-more");
          if(more){
            more.split(",").forEach(function(p){ p = p.trim(); if(p) photos.push(p); });
            render(); return;
          }
          // Otherwise auto-discover NAME-2.jpg ... NAME-16.jpg in the same folder
          var m = main.match(/^(.*)\.(jpg|jpeg|png|webp)$/i);
          if(!m) return;
          var pending = 0, extras = {};
          for(var i = 2; i <= 16; i++){
            (function(n){
              pending++;
              var url = m[1] + "-" + n + "." + m[2];
              var probe = new Image();
              probe.onload = function(){ extras[n] = url; done(); };
              probe.onerror = function(){ done(); };
              probe.src = url;
            })(i);
          }
          function done(){
            pending--;
            if(pending !== 0 || mySession !== session) return;
            for(var n = 2; n <= 16; n++){ if(extras[n]) photos.push(extras[n]); }
            render();
          }
        });
      });

      lb.querySelector(".lb__close").addEventListener("click", closeLb);
      lb.querySelector(".lb__next").addEventListener("click", next);
      lb.querySelector(".lb__prev").addEventListener("click", prev);
      lb.addEventListener("click", function(e){ if(e.target === lb) closeLb(); });
      document.addEventListener("keydown", function(e){
        if(!lb.classList.contains("open")) return;
        if(e.key === "Escape") closeLb();
        else if(e.key === "ArrowRight") next();
        else if(e.key === "ArrowLeft") prev();
      });
      // swipe navigation (touch devices)
      var tx = 0, ty = 0;
      lb.addEventListener("touchstart", function(e){ tx = e.changedTouches[0].clientX; ty = e.changedTouches[0].clientY; }, {passive:true});
      lb.addEventListener("touchend", function(e){
        var dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
        if(Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)){ if(dx < 0) next(); else prev(); }
      }, {passive:true});
    })();

    /* ---- quote form ---- */
    var form = document.getElementById("quoteForm");
    if(!form) return;
    var msg = document.getElementById("formMsg");
    var submitBtn = form.querySelector('button[type="submit"]');
    var btnLabel = submitBtn ? submitBtn.innerHTML : "";

    function showMsg(kind, text){
      if(!msg) return;
      msg.className = "form__msg show " + kind;
      msg.textContent = text;
    }
    function val(id){ var el = document.getElementById(id); return el ? el.value.trim() : ""; }

    form.addEventListener("submit", function(e){
      e.preventDefault();
      if(!form.checkValidity()){
        var bad = form.querySelector(":invalid");
        if(bad) bad.focus();
        if(form.reportValidity) form.reportValidity();
        return;
      }

      var usingFormspree = FORMSPREE_ENDPOINT.indexOf("YOUR_FORM_ID") === -1;

      /* Fallback: no backend configured yet -> open email app */
      if(!usingFormspree){
        var subject = "Roofing Estimate Request — " + (val("name") || "New Lead");
        var body =
          "Name: " + val("name") + "\n" +
          "Phone: " + val("phone") + "\n" +
          "Email: " + val("email") + "\n" +
          "Service Needed: " + val("service") + "\n\n" +
          "Project Details:\n" + val("message") + "\n";
        showMsg("ok", "Opening your email app with your request ready to send. If it doesn't open, call us at " + CONTACT_PHONE + ".");
        window.location.href = "mailto:" + CONTACT_EMAIL +
          "?subject=" + encodeURIComponent(subject) +
          "&body=" + encodeURIComponent(body);
        return;
      }

      /* Formspree submission */
      if(submitBtn){ submitBtn.disabled = true; submitBtn.innerHTML = "Sending…"; }
      fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: {"Accept": "application/json"}
      }).then(function(res){
        if(res.ok){
          form.reset();
          showMsg("ok", "Thank you! Your request has been sent. We'll be in touch shortly — or call us anytime at " + CONTACT_PHONE + ".");
        } else {
          return res.json().then(function(d){
            throw new Error(d && d.errors ? d.errors.map(function(x){return x.message;}).join(", ") : "Submission failed");
          });
        }
      }).catch(function(){
        showMsg("err", "Sorry — something went wrong sending your request. Please call us at " + CONTACT_PHONE + " or email " + CONTACT_EMAIL + ".");
      }).then(function(){
        if(submitBtn){ submitBtn.disabled = false; submitBtn.innerHTML = btnLabel; }
      });
    });
  });
})();
