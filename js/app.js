// ============================================================
// BALI 2026 — tiny hash-router SPA, no dependencies.
// Routes: #/home  #/day/N  #/packing  #/info  #/bookings
// Language persisted in localStorage ("bali_lang").
// ============================================================

(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const app = $("#app");
  const LANGS = ["it", "en", "zh"];

  let lang = localStorage.getItem("bali_lang") || "it";
  if (!LANGS.includes(lang)) lang = "it";

  const t = () => UI[lang];

  // ---------- helpers ----------
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function coverStyle(d) {
    // If a personal photo exists at img/dayN.jpg the CSS background shows it;
    // the gradient is always painted underneath as a graceful fallback.
    return `background-image:url('img/day${d.num}.jpg'),linear-gradient(120deg,${d.grad[0]},${d.grad[1]})`;
  }

  function setActiveNav(route) {
    document.querySelectorAll(".bottomnav a").forEach((a) => {
      a.classList.toggle("on", a.dataset.route === route);
    });
  }

  function langSwitcherHTML() {
    return LANGS.map(
      (l) => `<button data-lang="${l}" class="${l === lang ? "on" : ""}">${l === "it" ? "IT" : l === "en" ? "EN" : "中文"}</button>`
    ).join("");
  }

  function chrome() {
    $("#brandTitle").textContent = t().appTitle;
    $("#langs").innerHTML = langSwitcherHTML();
    $("#nav-days .lbl").textContent = t().days;
    $("#nav-packing .lbl").textContent = t().packing;
    $("#nav-bookings .lbl").textContent = t().bookings;
    $("#nav-info .lbl").textContent = t().info;
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : lang;
  }

  // ---------- pages ----------
  function homePage() {
    const ch = CHAPTERS[lang];
    const fl = FLIGHTS[lang];
    return `
    <div class="wrap">
      <div class="hero">
        <h1>Bali <span class="accent">2026</span></h1>
        <p>${esc(t().tagline)}</p>
        <div class="meta">
          <span class="chip">20 → 29 · 07 · 2026</span>
          <span class="chip">10 ${esc(t().days).toLowerCase()}</span>
          <span class="chip">🌏 IT · EN · 中文</span>
        </div>
      </div>

      <div class="section">
        <h2>${esc(t().chapters)}</h2>
        <div class="card chapters">
          ${ch.map((c) => `
            <div class="chapter">
              <div class="n">${c.n}</div>
              <div>
                <div class="t">${esc(c.where)} <span class="nights">· ${esc(c.nights)}</span></div>
                <div class="s">${esc(c.vibe)}</div>
              </div>
            </div>`).join("")}
        </div>
      </div>

      <div class="section">
        <h2>${esc(t().days)}</h2>
        <div class="daylist">
          ${DAYS.map((d) => `
            <a class="daycard" href="#/day/${d.num}">
              <div class="cover" style="${coverStyle(d)}">
                <span class="dn">${lang === "zh" ? "第" + d.num + "天" : t().day + " " + d.num}</span>
                <span class="de">${d.emoji}</span>
              </div>
              <div class="body">
                <div class="t">${esc(d.title[lang])}</div>
                <div class="s">${esc(d.area[lang])}${d.hotel !== "—" ? " · " + esc(d.hotel) : ""}</div>
                <div class="d">${esc(d.date[lang])}</div>
              </div>
            </a>`).join("")}
        </div>
      </div>

      <div class="section">
        <h2>${esc(t().flights)}</h2>
        <div class="card">
          ${fl.map((f) => `<div class="flightrow"><span class="fr">${esc(f[0])}</span><span class="fd">${esc(f[1])}</span></div>`).join("")}
        </div>
      </div>

      <div class="section">
        <h2>${esc(t().flex)}</h2>
        <div class="card">
          ${FLEX[lang].map((r) => `
            <div class="flexrow">
              <div class="fw">${esc(r[0])} <span class="fg">${esc(r[1])}</span></div>
              <div class="fr2">${esc(t().recovery)}: ${esc(r[2])}</div>
            </div>`).join("")}
          <div class="smallnote">${esc(t().flexNote)}</div>
        </div>
      </div>

      <div class="section" style="text-align:center">
        <a class="btn" href="files/Itinerario_Bali_DETTAGLIATO.md" download>⬇️ ${esc(t().download)}</a>
        <div class="smallnote">${esc(t().offline)}</div>
      </div>

      <footer>🌴 · ${esc(t().photoHint)}</footer>
    </div>`;
  }

  function dayPage(n) {
    const d = DAYS.find((x) => x.num === n);
    if (!d) return homePage();
    const prev = DAYS.find((x) => x.num === n - 1);
    const next = DAYS.find((x) => x.num === n + 1);

    return `
    <div class="wrap">
      <div class="dayhero" style="${coverStyle(d)}">
        <div class="inner">
          <div class="kicker">${esc(d.date[lang])} · ${esc(d.area[lang])}</div>
          <h1>${d.emoji} ${lang === "zh" ? "第" + d.num + "天" : t().day + " " + d.num} — ${esc(d.title[lang])}</h1>
          ${d.hotel !== "—" ? `<a class="stay" href="${d.hotelMap}" target="_blank" rel="noopener">🛏️ ${esc(t().stay)}: ${esc(d.hotel)}</a>` : ""}
        </div>
      </div>

      <p class="intro">${esc(d.intro[lang])}</p>

      <div class="section">
        <h2>${esc(t().timeline)}</h2>
        <div class="timeline">
          ${d.timeline.map((s) => `
            <div class="tstop">
              <div class="time">${esc(s.t)}</div>
              <div class="knot"></div>
              <div class="tt"><span class="ic">${s.icon}</span> ${esc(s.title[lang])}</div>
              ${s.desc[lang] ? `<div class="td">${esc(s.desc[lang])}</div>` : ""}
              ${s.map ? `<a class="maplink" href="${s.map}" target="_blank" rel="noopener">📍 ${esc(t().openMap)}</a>` : ""}
            </div>`).join("")}
        </div>
      </div>

      ${d.planB ? `
      <div class="callout planb">
        <h3>🔁 ${esc(t().planB)}</h3>
        <div>${esc(d.planB[lang])}</div>
      </div>` : ""}

      ${d.notes && d.notes[lang].length ? `
      <div class="callout notes">
        <h3>📌 ${esc(t().notes)}</h3>
        <ul>${d.notes[lang].map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      </div>` : ""}

      <div class="callout transport">
        <h3>🚗 ${esc(t().transport)}</h3>
        <div>${esc(d.transport[lang])}</div>
      </div>

      <div class="pager">
        <a href="${prev ? "#/day/" + prev.num : "#"}" class="${prev ? "" : "disabled"}">← ${esc(t().prevDay)}</a>
        <a href="#/home">${esc(t().backHome)}</a>
        <a href="${next ? "#/day/" + next.num : "#"}" class="${next ? "" : "disabled"}">${esc(t().nextDay)} →</a>
      </div>
    </div>`;
  }

  function packingPage() {
    const groups = PACKING[lang];
    return `
    <div class="wrap">
      <div class="hero"><h1>🎒 <span class="accent">${esc(t().packingTitle)}</span></h1></div>
      ${groups.map((g, gi) => `
        <div class="packgroup">
          <h3>${esc(g.h)}</h3>
          <div class="checklist">
            ${g.items.map((it, ii) => {
              const key = `pk_${gi}_${ii}`;
              const done = localStorage.getItem(key) === "1";
              return `<label class="${done ? "done" : ""}">
                <input type="checkbox" data-key="${key}" ${done ? "checked" : ""}>
                <span>${esc(it)}</span>
              </label>`;
            }).join("")}
          </div>
        </div>`).join("")}
      <footer>✔︎ = ${lang === "it" ? "spuntato e salvato sul telefono" : lang === "en" ? "ticked and saved on this phone" : "已勾选并保存在本机"}</footer>
    </div>`;
  }

  function bookingsPage() {
    return `
    <div class="wrap">
      <div class="hero"><h1>📋 <span class="accent">${esc(t().bookings)}</span></h1></div>
      <div class="daylist">
        ${BOOKINGS[lang].map((b) => `
          <div class="card bookcard">
            <div class="bw"><span>${b.s}</span> <span>${esc(b.what)}</span></div>
            <div class="lbl">${esc(t().bookWhen)}</div><div class="bv">${esc(b.when)}</div>
            <div class="lbl">${esc(t().bookHow)}</div><div class="bv">${esc(b.how)}</div>
          </div>`).join("")}
      </div>
    </div>`;
  }

  function infoPage() {
    const inf = INFO[lang];
    const block = (title, icon, arr) => `
      <div class="infogroup">
        <h3>${icon} ${esc(title)}</h3>
        <ul class="plainlist">${arr.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      </div>`;
    return `
    <div class="wrap">
      <div class="hero"><h1>ℹ️ <span class="accent">${esc(t().info)}</span></h1></div>
      ${block(t().bureaucracy, "🛂", inf.bureaucracy)}
      ${block(t().health, "🏥", inf.health)}
      ${block(t().driverGuide, "🚗", inf.driver)}
      ${block(t().practical, "📌", inf.practical)}
      <div class="section" style="text-align:center;margin-top:26px">
        <a class="btn ghost" href="files/Itinerario_Bali_DETTAGLIATO.md" download>⬇️ ${esc(t().download)}</a>
      </div>
    </div>`;
  }

  // ---------- router ----------
  function render() {
    const hash = location.hash || "#/home";
    const parts = hash.replace(/^#\//, "").split("/");
    let route = parts[0] || "home";

    chrome();

    if (route === "day") {
      const n = parseInt(parts[1], 10);
      app.innerHTML = dayPage(isNaN(n) ? 1 : n);
      setActiveNav("days");
    } else if (route === "packing") {
      app.innerHTML = packingPage();
      setActiveNav("packing");
    } else if (route === "bookings") {
      app.innerHTML = bookingsPage();
      setActiveNav("bookings");
    } else if (route === "info") {
      app.innerHTML = infoPage();
      setActiveNav("info");
    } else {
      app.innerHTML = homePage();
      setActiveNav("days");
    }
    window.scrollTo(0, 0);
  }

  // ---------- events ----------
  document.addEventListener("click", (e) => {
    const lb = e.target.closest("[data-lang]");
    if (lb) {
      lang = lb.dataset.lang;
      localStorage.setItem("bali_lang", lang);
      render();
    }
  });

  document.addEventListener("change", (e) => {
    const cb = e.target.closest("input[data-key]");
    if (cb) {
      localStorage.setItem(cb.dataset.key, cb.checked ? "1" : "0");
      cb.closest("label").classList.toggle("done", cb.checked);
    }
  });

  window.addEventListener("hashchange", render);

  // service worker for offline use (works on GitHub Pages / HTTPS)
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }

  render();
})();
