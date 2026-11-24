(function () {
  "use strict";

  var timeline = document.getElementById("timeline");
  var stepper = document.getElementById("stepper");
  var chips = document.getElementById("chips");
  var searchInput = document.getElementById("search");
  var clearBtn = document.getElementById("clearSearch");
  var resultEl = document.getElementById("result");
  var emptyEl = document.getElementById("empty");
  var progressBar = document.getElementById("progressBar");
  var toTop = document.getElementById("toTop");

  var state = { q: "", phase: "all" };
  var cards = [];       // { stage, el, texts: [{el, raw}] }
  var pills = {};       // id -> button

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function escRe(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function highlight(text) {
    var safe = esc(text);
    var q = esc(state.q.trim());
    if (!q) return safe;
    try {
      return safe.replace(new RegExp("(" + escRe(q) + ")", "gi"), "<mark>$1</mark>");
    } catch (e) {
      return safe;
    }
  }
  function refsFor(stage, i) {
    return (STAGE_CITES[stage.id] || {})[i] || [];
  }
  function knownRefs(refs) {
    return refs.filter(function (id) { return !!CITE_INDEX[id]; });
  }

  function matches(stage) {
    if (state.phase !== "all" && stage.phase !== state.phase) return false;
    var q = state.q.trim().toLowerCase();
    if (!q) return true;
    var hay = [stage.title, stage.short, stage.kicker]
      .concat(stage.notes.map(function (n) { return n.text; }))
      .concat(stage.points)
      .join(" ")
      .toLowerCase();
    return hay.indexOf(q) !== -1;
  }

  /* ---------- render ---------- */
  /* Зөвхөн CITE_INDEX-д байгаа, эх сурвалжаар баталгаажсан ишлэлийг харуулна. */
  function citeHtml(id) {
    var c = CITE_INDEX[id];
    if (!c) return "";
    var title = c.heading + ". " + c.quote;
    return (
      '<a class="cite" href="' + esc(LAW.source) + '" target="_blank" rel="noopener"' +
        ' title="' + esc(title) + '"' +
        ' aria-label="' + esc(id + " — " + c.heading) + '">' +
        esc(id) +
      "</a>"
    );
  }

  /* Зөвхөн тухайн үе шатад media байвал нэг том зураг (давхардуулахгүй). */
  function mediaHtml(m) {
    if (!m || !m.src) return "";
    return (
      '<figure class="stage-media stage-media--wide">' +
        '<button class="stage-media-btn" type="button" aria-label="Зургийг томруулж харах">' +
          '<img src="' + esc(m.src) + '" alt="' + esc(m.alt || "") + '"' +
            ' loading="lazy" decoding="async">' +
        "</button>" +
        (m.caption ? '<figcaption class="stage-media-caption">' + esc(m.caption) + "</figcaption>" : "") +
      "</figure>"
    );
  }

  function cardHtml(stage, index) {
    var prev = STAGES[index - 1];
    var next = STAGES[index + 1];

    var media = mediaHtml(stage.media);

    var notes = stage.notes.map(function (n) {
      return (
        '<div class="note note-' + n.kind + '">' +
          '<p class="note-label">' + esc(n.label) + ':</p>' +
          '<p class="note-text" data-raw="' + esc(n.text) + '">' + highlight(n.text) + "</p>" +
        "</div>"
      );
    }).join("");

    var points = stage.points.map(function (p, i) {
      var chips = knownRefs(refsFor(stage, i)).map(citeHtml).join("");
      return (
        '<li class="point">' +
          '<span class="point-text" data-raw="' + esc(p) + '">' + highlight(p) + "</span>" +
          (chips ? '<span class="cites">' + chips + "</span>" : "") +
        "</li>"
      );
    }).join("");

    var nav = '<div class="card-nav">';
    if (prev) {
      nav += '<a class="nav-link" href="#' + prev.id + '"><span>Өмнөх</span>' + esc(prev.num + " · " + prev.short) + "</a>";
    } else {
      nav += "<span></span>";
    }
    if (next) {
      nav += '<a class="nav-link next" href="#' + next.id + '"><span>Дараах</span>' + esc(next.num + " · " + next.short) + "</a>";
    }
    nav += "</div>";

    return (
      '<article class="stage" id="' + stage.id + '" data-phase="' + stage.phase + '" aria-labelledby="' + stage.id + '-title">' +
        '<div class="stage-rail" aria-hidden="true"><span class="node">' + esc(stage.num) + "</span></div>" +
        '<div class="card">' +
          '<div class="stage-banner">' + ILLU[stage.id] + "</div>" +
          '<div class="card-body">' +
          '<div class="card-head">' +
            '<p class="stage-kicker">' + esc(stage.num) + " · " + esc(stage.kicker) + "</p>" +
            '<h2 class="stage-title" id="' + stage.id + '-title" data-raw="' + esc(stage.title) + '">' + highlight(stage.title) + "</h2>" +
          "</div>" +
          notes +
          media +
          '<div class="rights">' +
            '<h3 class="rights-title">Өмгөөлөгчийн эрх, хүсэлт, гомдол, оролцооны ажиллагаа</h3>' +
            '<ul class="points">' + points + "</ul>" +
          "</div>" +
          "</div>" +
          nav +
        "</div>" +
      "</article>"
    );
  }

  function render() {
    timeline.innerHTML = STAGES.map(cardHtml).join("");

    cards = STAGES.map(function (stage) {
      var el = document.getElementById(stage.id);
      var texts = Array.prototype.slice
        .call(el.querySelectorAll("[data-raw]"))
        .map(function (node) { return { el: node, raw: node.getAttribute("data-raw") }; });
      return { stage: stage, el: el, texts: texts };
    });
  }

  function renderStepper() {
    stepper.innerHTML = STAGES.map(function (s) {
      return (
        '<button class="step" type="button" data-target="' + s.id + '">' +
          "<b>" + esc(s.num) + "</b><i>" + esc(s.short) + "</i>" +
        "</button>"
      );
    }).join("");

    pills = {};
    Array.prototype.forEach.call(stepper.querySelectorAll(".step"), function (btn) {
      pills[btn.getAttribute("data-target")] = btn;
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-target");
        var entry = cards.filter(function (c) { return c.stage.id === id; })[0];
        if (entry && entry.el.hidden) {
          state.q = "";
          state.phase = "all";
          searchInput.value = "";
          setChips();
          apply();
          window.requestAnimationFrame(function () { scrollToStage(id); });
        } else {
          scrollToStage(id);
        }
      });
    });
  }

  function scrollToStage(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var offset = document.querySelector(".toolbar").offsetHeight + 12;
    var y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  /* ---------- filtering ---------- */
  function apply() {
    var shown = 0;
    cards.forEach(function (entry) {
      var ok = matches(entry.stage);
      entry.el.hidden = !ok;
      if (ok) shown++;
      entry.texts.forEach(function (t) {
        t.el.innerHTML = ok ? highlight(t.raw) : esc(t.raw);
      });
      if (ok) entry.el.classList.add("is-in");
      var pill = pills[entry.stage.id];
      if (pill) {
        pill.classList.toggle("is-dim", !ok);
      }
    });

    emptyEl.hidden = shown !== 0;
    clearBtn.hidden = !state.q;

    if (!state.q && state.phase === "all") {
      resultEl.textContent = "Нийт " + STAGES.length + " үе шат";
    } else {
      resultEl.textContent = shown + " үе шат олдлоо";
    }
  }

  function setChips() {
    Array.prototype.forEach.call(chips.querySelectorAll(".chip"), function (c) {
      var on = c.getAttribute("data-phase") === state.phase;
      c.classList.toggle("is-active", on);
      c.setAttribute("aria-selected", String(on));
    });
  }

  /* ---------- events ---------- */
  var searchTimer;
  searchInput.addEventListener("input", function () {
    window.clearTimeout(searchTimer);
    var value = searchInput.value;
    searchTimer = window.setTimeout(function () {
      state.q = value;
      apply();
    }, 110);
  });

  clearBtn.addEventListener("click", function () {
    state.q = "";
    searchInput.value = "";
    searchInput.focus();
    apply();
  });

  chips.addEventListener("click", function (e) {
    var btn = e.target.closest(".chip");
    if (!btn) return;
    state.phase = btn.getAttribute("data-phase");
    setChips();
    apply();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
    if (e.key === "Escape" && document.activeElement === searchInput) {
      state.q = "";
      searchInput.value = "";
      apply();
      searchInput.blur();
    }
  });

  /* ---------- scroll progress + spy ---------- */
  function onScroll() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var p = h > 0 ? (window.pageYOffset / h) * 100 : 0;
    progressBar.style.width = Math.min(100, Math.max(0, p)) + "%";
    toTop.classList.toggle("is-visible", window.pageYOffset > 700);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      Object.keys(pills).forEach(function (id) {
        pills[id].classList.toggle("is-active", id === entry.target.id);
        if (id === entry.target.id) {
          pills[id].setAttribute("aria-current", "true");
        } else {
          pills[id].removeAttribute("aria-current");
        }
      });
      var active = pills[entry.target.id];
      if (active && stepper.scrollWidth > stepper.clientWidth) {
        var target = active.offsetLeft - stepper.clientWidth / 2 + active.offsetWidth / 2;
        stepper.scrollTo({ left: target, behavior: "smooth" });
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

  /* ---------- card entrance motion ---------- */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveal = null;
  if (!reduceMotion) {
    document.documentElement.classList.add("motion-ok");
    reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        reveal.unobserve(entry.target);
      });
    }, { threshold: 0.06, rootMargin: "0px 0px -6% 0px" });
  }

  /* ---------- lightbox ---------- */
  var lb = document.createElement("div");
  lb.className = "lightbox";
  lb.id = "lightbox";
  lb.hidden = true;
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.setAttribute("aria-label", "Зургийг томруулж харах");
  lb.innerHTML =
    '<button class="lightbox-close" type="button" aria-label="Хаах">×</button>' +
    '<img class="lightbox-img" alt="">' +
    '<p class="lightbox-caption"></p>';
  document.body.appendChild(lb);

  var lbImg = lb.querySelector(".lightbox-img");
  var lbCap = lb.querySelector(".lightbox-caption");
  var lbClose = lb.querySelector(".lightbox-close");
  var lbReturnFocus = null;

  function openLightbox(btn) {
    var img = btn.querySelector("img");
    if (!img) return;
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt;
    lbCap.textContent = img.alt;
    lbReturnFocus = btn;
    lb.hidden = false;
    document.body.classList.add("lightbox-open");
    lbClose.focus();
  }

  function closeLightbox() {
    if (lb.hidden) return;
    lb.hidden = true;
    lbImg.removeAttribute("src");
    lbCap.textContent = "";
    document.body.classList.remove("lightbox-open");
    if (lbReturnFocus) lbReturnFocus.focus();
  }

  timeline.addEventListener("click", function (e) {
    var btn = e.target.closest(".stage-media-btn");
    if (btn) openLightbox(btn);
  });
  lbClose.addEventListener("click", closeLightbox);
  lb.addEventListener("click", function (e) {
    if (e.target === lb) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lb.hidden) closeLightbox();
  });

  /* ---------- boot ---------- */
  render();
  renderStepper();
  cards.forEach(function (entry) {
    spy.observe(entry.el);
    if (reveal) reveal.observe(entry.el);
  });
  setChips();
  apply();
  onScroll();

  var countEl = document.querySelector(".hero-meta .pill b");
  if (countEl) {
    var total = STAGES.reduce(function (sum, s) { return sum + s.points.length; }, 0);
    countEl.textContent = total;
  }
})();
