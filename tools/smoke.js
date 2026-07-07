// Smoke test: render all routes × all languages with a minimal DOM shim.
const fs = require("fs");
const path = require("path");

function makeEl(id) {
  return {
    id, innerHTML: "", textContent: "", lang: "",
    dataset: {}, classList: { toggle(){}, add(){}, remove(){} },
    addEventListener(){}, appendChild(){},
  };
}

const els = {};
["#app", "#brandTitle", "#langs", "#nav-days .lbl", "#nav-packing .lbl", "#nav-bookings .lbl", "#nav-info .lbl"]
  .forEach((s) => (els[s] = makeEl(s)));

const navAnchors = ["days", "packing", "bookings", "info"].map((r) => {
  const a = makeEl(r); a.dataset.route = r; return a;
});

global.document = {
  querySelector: (s) => els[s] || makeEl(s),
  querySelectorAll: (s) => (s === ".bottomnav a" ? navAnchors : []),
  addEventListener() {},
  documentElement: { lang: "" },
};
global.window = { addEventListener() {}, scrollTo() {} };
global.location = { hash: "#/home", protocol: "http:" };
global.navigator = {};
const store = {};
global.localStorage = {
  getItem: (k) => (k in store ? store[k] : null),
  setItem: (k, v) => (store[k] = String(v)),
};

// load data + app
eval(fs.readFileSync(path.join(__dirname, "../js/data.js"), "utf8") + "\n" +
     "global.__D = { UI, DAYS, PACKING, INFO, BOOKINGS, BOOKING_CATS, FLEX, CHAPTERS };");
const D = global.__D;
Object.assign(global, D); // expose to app.js

// Re-render helper: app.js renders on load; we re-trigger via hashchange-like calls.
// We call the IIFE fresh per (lang, route) by re-evaluating app.js with state set.
const appSrc = fs.readFileSync(path.join(__dirname, "../js/app.js"), "utf8");

const routes = ["#/home", "#/day/1", "#/day/4", "#/day/7", "#/day/10", "#/packing", "#/bookings", "#/info"];
const langs = ["it", "en", "zh"];
let fails = 0;

for (const lg of langs) {
  store["bali_lang"] = lg;
  for (const r of routes) {
    global.location.hash = r;
    els["#app"].innerHTML = "";
    try {
      eval(appSrc);
      const html = els["#app"].innerHTML;
      if (!html || html.length < 500) throw new Error("empty/short output (" + html.length + ")");
      // spot checks
      if (r === "#/home" && !html.includes("daycard")) throw new Error("home missing day cards");
      if (r.startsWith("#/day/") && !html.includes("timeline")) throw new Error("day missing timeline");
      if (r === "#/packing" && !html.includes("checklist")) throw new Error("packing missing checklist");
      if (r === "#/bookings" && !html.includes("bookcard")) throw new Error("bookings missing cards");
      if (html.includes("undefined")) throw new Error("literal 'undefined' in output");
      if (html.includes("[object")) throw new Error("object leak in output");
      console.log("PASS", lg, r, "(" + html.length + " chars)");
    } catch (e) {
      fails++;
      console.log("FAIL", lg, r, "→", e.message);
    }
  }
}
console.log(fails === 0 ? "\nALL GREEN ✅" : "\n" + fails + " FAILURES ❌");
process.exit(fails ? 1 : 0);
