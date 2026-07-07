# 🌴 Bali 2026 — Sito itinerario (20–29 luglio)

Sito statico trilingue (IT / EN / 中文), mobile-first, senza backend: pensato per GitHub Pages.

## Come pubblicarlo su GitHub Pages (2 minuti)

1. Creare un repository su GitHub (es. `bali-2026`), pubblico o privato con Pages abilitato.
2. Caricare **tutto il contenuto di questa cartella** nella root del repo (index.html deve stare nella root).
3. Su GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / root → Save**.
4. Dopo ~1 minuto il sito è online su `https://<utente>.github.io/bali-2026/`.
5. Condividere il link. 🎉

## Per chi sviluppa

Modifiche al sito (testi, giorni, lingue, stile): leggere prima **AGENTS.md** — contiene modello dati, ricette per le modifiche comuni, design system e test.

## Struttura

```
index.html          → shell dell'app
css/style.css       → stile (design "mattina nelle risaie")
js/data.js          → TUTTI i contenuti, nelle 3 lingue (modificare qui i testi)
js/app.js           → router + rendering
sw.js               → cache offline (il sito funziona anche senza rete dopo la 1ª visita)
files/…​.md          → itinerario completo scaricabile (backup)
tools/smoke.js      → test di rendering (node tools/smoke.js)
AGENTS.md           → guida allo sviluppo (per umani e agenti AI)
img/                → foto personali (opzionali)
```

## Foto personali (opzionale)

Mettere in `img/` file chiamati `day1.jpg`, `day2.jpg`, … `day10.jpg`:
le copertine dei giorni useranno automaticamente le foto; senza foto restano i gradienti grafici.
Consiglio: foto orizzontali, ~1200 px di larghezza, pesate (<300 KB) per la velocità.

## Modificare i contenuti

Tutto il testo vive in `js/data.js`, ordinato per giorno e per lingua (`it` / `en` / `zh`).
Ogni tappa ha: orario `t`, icona, titolo, descrizione e link Maps opzionale.

## Note

- La lingua scelta e le spunte della lista valigia sono salvate nel telefono (localStorage).
- I link 📍 aprono Google Maps sul posto giusto (comodi con Grab e navigatore).
- Il download in home scarica l'itinerario completo in Markdown (copia di backup).
