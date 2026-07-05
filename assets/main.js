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

    /* ---- 3D / FX layer ---- */
    (function initFX(){
      var hero = document.querySelector(".hero");

      // Interactive 3D effects — pointer devices only, and never under reduced motion
      if(reduce || !window.matchMedia("(pointer:fine)").matches) return;

      // Card tilt + cursor glow
      var tiltEls = document.querySelectorAll(".card, .gallery__item, .quote, .step, .feat");
      tiltEls.forEach(function(el){
        var raf = null, rect = null, MAX = 9;
        function move(e){
          rect = rect || el.getBoundingClientRect();
          var px = (e.clientX - rect.left) / rect.width;
          var py = (e.clientY - rect.top) / rect.height;
          el.style.setProperty("--mx", (px*100).toFixed(1) + "%");
          el.style.setProperty("--my", (py*100).toFixed(1) + "%");
          if(raf) return;
          raf = requestAnimationFrame(function(){
            var rx = (0.5 - py) * MAX, ry = (px - 0.5) * MAX;
            el.style.transform = "perspective(900px) rotateX(" + rx.toFixed(2) + "deg) rotateY(" + ry.toFixed(2) + "deg) translateZ(8px)";
            raf = null;
          });
        }
        el.addEventListener("mouseenter", function(){ rect = el.getBoundingClientRect(); el.style.transition = "transform .1s ease-out"; });
        el.addEventListener("mousemove", move);
        el.addEventListener("mouseleave", function(){ el.style.transition = "transform .55s var(--ease)"; el.style.transform = ""; rect = null; });
      });

      // Magnetic buttons
      document.querySelectorAll(".btn").forEach(function(btn){
        var raf = null;
        btn.addEventListener("mousemove", function(e){
          var r = btn.getBoundingClientRect();
          var mx = e.clientX - r.left - r.width/2;
          var my = e.clientY - r.top - r.height/2;
          if(raf) return;
          raf = requestAnimationFrame(function(){
            btn.style.transform = "translate(" + (mx*0.22).toFixed(1) + "px," + (my*0.32 - 2).toFixed(1) + "px)";
            raf = null;
          });
        });
        btn.addEventListener("mouseleave", function(){ btn.style.transform = ""; });
      });

      // Hero parallax (background + content move at different depths)
      if(hero){
        var hbg = hero.querySelector(".hero__bg");
        var hin = hero.querySelector(".hero__inner");
        var orbLayer = hero.querySelector(".fx-orbs");
        var raf3 = null, mx = 0, my = 0;
        hero.addEventListener("mousemove", function(e){
          var r = hero.getBoundingClientRect();
          mx = (e.clientX - r.left) / r.width - 0.5;
          my = (e.clientY - r.top) / r.height - 0.5;
          if(raf3) return;
          raf3 = requestAnimationFrame(function(){
            if(hbg) hbg.style.transform = "scale(1.06) translate(" + (mx*-20).toFixed(1) + "px," + (my*-14).toFixed(1) + "px)";
            if(hin) hin.style.transform = "translate(" + (mx*18).toFixed(1) + "px," + (my*12).toFixed(1) + "px)";
            if(orbLayer) orbLayer.style.transform = "translate(" + (mx*36).toFixed(1) + "px," + (my*28).toFixed(1) + "px)";
            raf3 = null;
          });
        });
        hero.addEventListener("mouseleave", function(){
          if(hbg) hbg.style.transform = "scale(1.06)";
          if(hin) hin.style.transform = "";
          if(orbLayer) orbLayer.style.transform = "";
        });
      }
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
