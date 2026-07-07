# AGENTS.md — Guida allo sviluppo (per umani e agenti AI)

> Documento operativo per chiunque debba modificare questo sito.
> Leggere QUESTO file prima di toccare il codice. Il README.md copre solo l'hosting.

---

## 1. Che cos'è questo progetto

Sito statico **senza backend e senza build step** per un itinerario di viaggio a Bali (20–29 luglio 2026), pensato per GitHub Pages. Single-page app in vanilla JS con routing via hash. Trilingue: **it / en / zh** (cinese semplificato).

**Vincoli non negoziabili** (decisioni prese col proprietario del progetto):
1. **Nessuna dipendenza, nessun bundler, nessun framework.** Solo file statici: aprire `index.html` deve bastare.
2. **Tono impersonale in TUTTE le lingue.** IT: infinito ("Andare a Ubud", "Prenotare in anticipo"), mai imperativo diretto ("Andate", "Prenota"). EN: frasi sostantivate ("Transfer to Ubud", "Breakfast at the villa"), evitare l'imperativo rivolto al lettore. ZH: forma standard impersonale (前往乌布).
3. **Ogni contenuto esiste nelle 3 lingue.** Non aggiungere mai testo in una lingua sola: la UI mostrerebbe `undefined`.
4. **Niente foto scaricate da internet** (copyright/link morti). Solo gradienti CSS + eventuali foto personali dell'utente in `img/`.
5. **Mobile-first**: il sito viene usato su telefono, in viaggio, spesso offline.

---

## 2. Mappa dei file

```
index.html          Shell statica: topbar, <main id="app">, bottom nav, font, include JS.
css/style.css       Tutto lo stile. Design system nei :root token (v. §5).
js/data.js          ★ TUTTI I CONTENUTI. 95% delle modifiche avviene qui.
js/app.js           Router + funzioni di rendering. Toccare solo per nuove feature/pagine.
sw.js               Service worker (cache offline). Bump di CACHE a ogni release (v. §7).
files/*.md          Itinerario completo scaricabile (backup). Sostituire se l'itinerario cambia.
img/                Foto personali opzionali: day1.jpg … day10.jpg (v. §6).
tools/smoke.js      Test: renderizza tutte le rotte × 3 lingue. Eseguire dopo OGNI modifica.
README.md           Istruzioni di hosting per l'utente finale.
AGENTS.md           Questo file.
```

---

## 3. Modello dati (`js/data.js`)

Tutte le strutture sono `const` globali caricate prima di `app.js`. Ogni stringa visibile è un oggetto `{ it, en, zh }` (eccetto i campi tecnici).

### 3.1 `UI` — etichette dell'interfaccia
`UI.it / UI.en / UI.zh`: chiavi identiche nelle tre lingue. Se se ne aggiunge una, aggiungerla in **tutte e tre**.

### 3.2 `DAYS` — il cuore del sito (array di 10 oggetti)
```js
{
  num: 4,                                   // intero, univoco, ordina le card
  date:  { it, en, zh },                    // "Giovedì 23 luglio"
  title: { it, en, zh },
  area:  { it, en, zh },                    // sottotitolo geografico
  hotel: "Nau Villa Ubud",                  // stringa unica (nome proprio) — "—" se nessuno (G10)
  hotelMap: gm("Nau Villa Ubud Tegallalang"),
  grad: ["#2A7F8E", "#65C3D0"],             // gradiente copertina [da, a]
  emoji: "🤿",
  intro: { it, en, zh },                    // 1-2 frasi sotto l'hero
  timeline: [                               // le tappe della giornata, in ordine
    { t: "12:00",                           // orario; "—" per i giorni liberi senza schedule
      icon: "🤿",
      title: { it, en, zh },
      desc:  { it, en, zh },                // può essere { it:"", en:"", zh:"" } → riga nascosta
      map: gm("Blue Lagoon Beach Padangbai") // OPZIONALE: bottone 📍
    },
  ],
  planB: { it, en, zh },                    // OPZIONALE: callout arancione
  notes: { it: [...], en: [...], zh: [...] },// array di stringhe; [] = callout nascosto
  transport: { it, en, zh },                // callout azzurro, sempre presente
}
```
`gm(query)` è l'helper in cima al file: costruisce un link Google Maps di ricerca.
Usare query **specifiche e stabili** ("Tis Cafe Tegallalang", non "Tis Cafe").

### 3.3 Altre strutture
- `PACKING[lang]` → `[{ h: "titolo gruppo", items: ["voce", …] }, …]`.
  ⚠️ Le spunte sono salvate in localStorage con chiave `pk_<gruppo>_<indice>`: **riordinare o inserire voci in mezzo** invalida le spunte già fatte dall'utente (accettabile, ma saperlo).
- `BOOKINGS[lang]` → `[{ s: "emoji", what, when, how }, …]`.
- `INFO[lang]` → `{ bureaucracy: [...], health: [...], practical: [...], driver: [...] }`.
- `FLEX[lang]` → `[["cosa", "giorno", "recupero"], …]`.
- `CHAPTERS[lang]`, `FLIGHTS[lang]`.

---

## 4. Ricette per le modifiche comuni

**Cambiare un orario/testo di una tappa** → solo `js/data.js`, nelle 3 lingue → `node tools/smoke.js`.

**Aggiungere una tappa a un giorno** → nuovo oggetto nell'array `timeline` del giorno, in posizione cronologica. Ricordare `map:` se ha senso un luogo.

**Aggiungere un giorno** → nuovo oggetto in `DAYS` con `num` progressivo. Home e frecce prev/next si aggiornano da sole.

**Aggiungere una voce alla valigia** → appenderla in coda al gruppo giusto in **tutte e 3** le versioni di `PACKING` (v. avvertenza localStorage sopra).

**Aggiungere una lingua** → (1) nuova chiave in `UI`, `DAYS[*].{date,title,area,intro,timeline[*].{title,desc},planB,notes,transport}`, `PACKING`, `INFO`, `BOOKINGS`, `FLEX`, `CHAPTERS`, `FLIGHTS`; (2) in `app.js` aggiungere il codice lingua a `LANGS` e l'etichetta del bottone in `langSwitcherHTML()`; (3) estendere `tools/smoke.js` (array `langs`).

**Aggiungere una pagina** → in `app.js`: nuova funzione `xxxPage()`, nuovo ramo nel `render()`, nuova voce nella bottom nav in `index.html` (con `data-route`) e relative etichette in `UI`.

**Sostituire l'itinerario scaricabile** → sovrascrivere il file in `files/` e, se cambia nome, aggiornare i DUE link in `app.js` (home + info), la lista `CORE` in `sw.js` e il README.

---

## 5. Design system (css/style.css)

Direzione: **"mattina nelle risaie"**. Token in `:root`:

| Token | Valore | Uso |
|---|---|---|
| `--bg` | `#F3F5EC` | sfondo verde-carta |
| `--ink` / `--ink-soft` | `#16261D` / `#4A5B50` | testo |
| `--jungle` | `#1F5137` | primario (bottoni, brand, knot timeline) |
| `--ocean` | `#2A7F8E` | accento freddo (link, label) |
| `--sunset` | `#FF7A48` | accento caldo — usare con parsimonia |
| `--frangipani` | `#F2B33D` | numerazione capitoli, gradiente timeline |
| `--sand` | `#E7E1CE` | chip |

Font (Google Fonts, caricati in `index.html`): **Bricolage Grotesque** = display/titoli · **Karla** = corpo · **IBM Plex Mono** = orari, chip, etichette tecniche. Non introdurre altri font.

**Elemento firma — NON rimuovere né banalizzare**: la spina della timeline (`.timeline::before`) è un gradiente verticale che racconta la giornata (alba verde → mezzogiorno oceano → tramonto corallo → notte). È l'identità del sito.

Copertine: gradiente `d.grad` sempre dipinto; se esiste `img/dayN.jpg` viene mostrata sopra (doppio `background-image`, la foto mancante fallisce in silenzio). Nuovi giorni: scegliere 2 colori dal design system coerenti col "mood" del giorno.

---

## 6. Foto personali

Convenzione: `img/day1.jpg … day10.jpg`, orizzontali, ~1200 px, < 300 KB. Nessuna configurazione: il CSS le usa se esistono. Non committare foto coperte da copyright altrui.

---

## 7. Service worker — il tranello classico

`sw.js` è cache-first. **Dopo ogni modifica pubblicata, incrementare la costante `CACHE`** (`bali2026-v1` → `-v2`, …): senza bump, i telefoni che hanno già visitato il sito continuano a vedere la versione vecchia. Se si aggiungono file "core" (es. nuova pagina dati), aggiungerli anche all'array `CORE`.

In locale il SW non si registra (solo HTTPS): è voluto, non è un bug.

---

## 8. Test e verifica

```bash
node --check js/app.js && node --check sw.js   # sintassi
node tools/smoke.js                             # rendering: 8 rotte × 3 lingue, deve dire ALL GREEN ✅
python3 -m http.server 8899                     # prova manuale su http://localhost:8899
```

Lo smoke test fallisce anche se nell'HTML compaiono `undefined` o `[object` — è il segnale tipico di una **traduzione mancante**. Il primo posto dove guardare è la chiave `{ it, en, zh }` appena toccata.

Checklist manuale minima dopo modifiche grosse: home nelle 3 lingue → una pagina giorno (bottone 📍 apre il posto giusto) → valigia (spunta persiste al reload) → download .md funziona.

---

## 9. Cose da NON fare

- Non aggiungere librerie/CDN JS. Niente build step.
- Non usare `innerHTML` con testo utente non passato da `esc()` (in `app.js`).
- Non rimuovere il fallback a gradiente delle copertine.
- Non cambiare i percorsi relativi in assoluti (`/css/...`): su GitHub Pages il sito vive in una sottocartella (`/nomerepo/`) e i path assoluti si rompono.
- Non usare localStorage/sessionStorage per nuove feature senza chiavi prefissate (`bali_` o `pk_`) per evitare collisioni.
- Non tradurre i nomi propri (ristoranti, spiagge, ville): restano in originale in tutte le lingue.
