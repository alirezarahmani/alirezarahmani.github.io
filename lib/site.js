/* ============================================================
   alireza.engineer — interaction + motion engine (vanilla)
   ============================================================ */
(function () {
  "use strict";

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const motion = () => {
    const v = getComputedStyle(document.documentElement).getPropertyValue("--motion").trim();
    const n = parseFloat(v);
    return isNaN(n) ? 0.5 : n;
  };

  /* ---------------------------------------------------------
     1. AI-network particle field
     --------------------------------------------------------- */
  const canvas = document.getElementById("particles");
  if (canvas && !reduced) {
    const ctx = canvas.getContext("2d");
    let w, h, dpr, nodes = [], raf, mouse = { x: -9999, y: -9999 };

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      build();
    }
    function build() {
      const density = 0.00009 * (0.55 + motion());
      const count = Math.min(120, Math.max(28, Math.floor((w * h) / dpr / dpr * density)));
      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.18 * dpr * (0.5 + motion()),
          vy: (Math.random() - 0.5) * 0.18 * dpr * (0.5 + motion()),
          r: (Math.random() * 1.4 + 0.6) * dpr,
          h: Math.random() < 0.18
        });
      }
    }
    const accent = () => getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#2563EB";
    function hexToRgb(hex) {
      const m = hex.replace("#", "");
      const b = m.length === 3 ? m.split("").map(c => c + c).join("") : m;
      return [parseInt(b.slice(0, 2), 16), parseInt(b.slice(2, 4), 16), parseInt(b.slice(4, 6), 16)];
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      const [ar, ag, ab] = hexToRgb(accent());
      const linkDist = 150 * dpr;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;

        // mouse repulse
        const mdx = a.x - mouse.x, mdy = a.y - mouse.y;
        const md = Math.hypot(mdx, mdy);
        if (md < 120 * dpr && md > 0.1) {
          const f = (120 * dpr - md) / (120 * dpr) * 0.6;
          a.x += (mdx / md) * f; a.y += (mdy / md) * f;
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < linkDist) {
            const o = (1 - d / linkDist) * 0.28;
            ctx.strokeStyle = `rgba(${ar},${ag},${ab},${o})`;
            ctx.lineWidth = 1 * dpr;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        if (a.h) {
          ctx.fillStyle = `rgba(${ar},${ag},${ab},0.9)`;
          ctx.shadowColor = `rgba(${ar},${ag},${ab},0.9)`;
          ctx.shadowBlur = 8 * dpr;
        } else {
          ctx.fillStyle = `rgba(167,182,204,0.5)`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      raf = requestAnimationFrame(draw);
    }
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", e => { mouse.x = e.clientX * dpr; mouse.y = e.clientY * dpr; }, { passive: true });
    window.addEventListener("mouseout", () => { mouse.x = mouse.y = -9999; });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(draw);
    });
    resize();
    draw();
  }

  /* ---------------------------------------------------------
     2. Rotating subtitle
     --------------------------------------------------------- */
  const track = document.querySelector(".rotator-track");
  if (track) {
    const items = JSON.parse(track.dataset.items || "[]");
    let i = 0;
    const span = document.createElement("span");
    span.textContent = items[0];
    span.classList.add("in");
    track.appendChild(span);

    function measureTrack() {
      let maxw = 0;
      items.forEach(t => {
        const probe = document.createElement("span");
        probe.style.cssText = "position:absolute;visibility:hidden;white-space:nowrap;";
        probe.textContent = t;
        track.appendChild(probe);
        maxw = Math.max(maxw, probe.offsetWidth);
        track.removeChild(probe);
      });
      track.style.minWidth = (maxw + 4) + "px";
    }

    measureTrack();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measureTrack);
    }

    setInterval(() => {
      if (document.hidden) return;
      const cur = track.querySelector("span:last-child");
      cur.classList.remove("in"); cur.classList.add("out");
      setTimeout(() => cur.remove(), 650);
      i = (i + 1) % items.length;
      const next = document.createElement("span");
      next.textContent = items[i];
      next.classList.add("in");
      track.appendChild(next);
    }, 2600);
  }

  /* ---------------------------------------------------------
     3 + 4. Unified scroll engine — reveal, count-up, nav state,
     active section. Geometry-based (getBoundingClientRect).
     --------------------------------------------------------- */
  const reveals = [...document.querySelectorAll(".reveal")];
  const counters = [...document.querySelectorAll("[data-count]")];
  const nav = document.querySelector(".nav");
  const sections = [...document.querySelectorAll("section[id]")];
  const navLinks = [...document.querySelectorAll(".nav-links a")];
  let lastY = window.scrollY;

  function startCount(el) {
    if (el.__counting) return;
    el.__counting = true;
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const dur = 1300, t0 = performance.now();
    (function tick(t) {
      const p = Math.min(1, (t - t0) / dur);
      const ease = 1 - Math.pow(1 - p, 3);
      const val = target % 1 === 0 ? Math.floor(target * ease) : (target * ease).toFixed(1);
      el.innerHTML = `${val}<b>${suffix}</b>`;
      if (p < 1) requestAnimationFrame(tick);
    })(performance.now());
  }

  function update() {
    const vh = window.innerHeight;
    const y = window.scrollY;

    for (let i = reveals.length - 1; i >= 0; i--) {
      const el = reveals[i];
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) {
        el.classList.add("in");
        reveals.splice(i, 1);
      }
    }
    for (let i = counters.length - 1; i >= 0; i--) {
      const el = counters[i];
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.85 && r.bottom > 0) {
        startCount(el);
        counters.splice(i, 1);
      }
    }
    if (nav) {
      nav.classList.toggle("scrolled", y > 24);
      if (y > lastY && y > 460) nav.classList.add("hidden");
      else nav.classList.remove("hidden");
    }
    let active = sections[0];
    const probe = y + vh * 0.32;
    for (const s of sections) {
      if (s.offsetTop <= probe) active = s;
    }
    if (active) {
      navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + active.id));
    }
    lastY = y;
  }

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { update(); ticking = false; });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  update();
  requestAnimationFrame(update);
  setTimeout(update, 300);
  window.addEventListener("load", update);

  /* ---------------------------------------------------------
     5. Node spotlight (pointer-follow glow)
     --------------------------------------------------------- */
  document.querySelectorAll(".node").forEach(node => {
    node.addEventListener("pointermove", e => {
      const r = node.getBoundingClientRect();
      node.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
      node.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100) + "%");
    });
  });

  /* ---------------------------------------------------------
     6. Hero parallax (pointer tilt on portrait + floats)
     --------------------------------------------------------- */
  const pwrap = document.querySelector(".portrait-wrap");
  if (pwrap && !reduced) {
    const hero = document.querySelector(".hero");
    hero.addEventListener("pointermove", e => {
      const m = motion();
      const cx = (e.clientX / window.innerWidth - 0.5);
      const cy = (e.clientY / window.innerHeight - 0.5);
      pwrap.style.transform = `translate(${cx * 16 * m}px, ${cy * 16 * m}px)`;
      document.querySelectorAll(".portrait-float").forEach((f, k) => {
        const d = (k + 1) * 10 * m;
        f.style.marginLeft = `${cx * d}px`;
        f.style.marginTop = `${cy * d}px`;
      });
    });
  }

  /* ---------------------------------------------------------
     7. Case study modals
     --------------------------------------------------------- */
  const back = document.getElementById("caseModal");
  const modalContent = document.getElementById("caseModalContent");
  let CASES = {};
  const dataEl = document.getElementById("case-data");
  if (dataEl) { try { CASES = JSON.parse(dataEl.textContent); } catch (e) {} }

  function openCase(id) {
    const c = CASES[id];
    if (!c || !back) return;
    const metrics = (c.metrics || []).map(m => `<div class="m"><div class="n">${m.n}</div><div class="l">${m.l}</div></div>`).join("");
    const sections = (c.sections || []).map(s => {
      const body = Array.isArray(s.body)
        ? `<ul>${s.body.map(li => `<li>${li}</li>`).join("")}</ul>`
        : `<p>${s.body}</p>`;
      return `<h4>${s.h}</h4>${body}`;
    }).join("");
    modalContent.innerHTML = `
      <div class="modal-hero">
        <button class="modal-close" aria-label="Close">&times;</button>
        <div class="mono">${c.kicker}</div>
        <h2>${c.title}</h2>
        <p>${c.lead}</p>
      </div>
      <div class="modal-body">
        ${metrics ? `<div class="modal-metrics">${metrics}</div>` : ""}
        ${sections}
      </div>`;
    back.classList.add("open");
    document.body.style.overflow = "hidden";
    modalContent.querySelector(".modal-close").addEventListener("click", closeCase);
  }
  function closeCase() {
    if (!back) return;
    back.classList.remove("open");
    document.body.style.overflow = "";
  }
  document.querySelectorAll(".case").forEach(el => {
    el.addEventListener("click", () => openCase(el.dataset.case));
  });
  if (back) {
    back.addEventListener("click", e => { if (e.target === back) closeCase(); });
    window.addEventListener("keydown", e => { if (e.key === "Escape") closeCase(); });
  }

  /* ---------------------------------------------------------
     8. Mobile nav toggle
     --------------------------------------------------------- */
  const burger = document.querySelector(".nav-burger");
  const links = document.querySelector(".nav-links");
  if (burger && links) {
    burger.addEventListener("click", () => {
      const open = links.style.display === "flex";
      links.style.display = open ? "" : "flex";
      links.style.position = "absolute";
      links.style.flexDirection = "column";
      links.style.top = "120%"; links.style.right = "10px";
      links.style.background = "rgba(8,18,32,0.96)";
      links.style.padding = "10px"; links.style.borderRadius = "18px";
      links.style.border = "1px solid var(--line-strong)";
    });
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      if (window.innerWidth <= 760) links.style.display = "";
    }));
  }

})();
