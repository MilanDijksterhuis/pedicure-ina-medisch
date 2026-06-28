# Pedicure Ina Medisch — Website

Statische website voor Pedicure Ina Medisch, een medisch pedicurepraktijk in Veendam.

## Projectstructuur

```
/
├── index.html          # Volledige one-page site
├── css/
│   └── style.css       # Alle stijlen, gebouwd op CSS custom properties
├── js/
│   └── main.js         # Scroll-animaties en mobiele navigatie
├── assets/
│   └── images/         # Map voor afbeeldingen (nu nog leeg, zie hieronder)
└── .claude/
    └── launch.json     # Preview-configuratie
```

## Lokaal bekijken

Geen build-stap nodig. Open `index.html` direct in een browser, of draai een lokale server:

```bash
# Met Node.js / npx (geen installatie vereist):
npx serve .

# Of met Python (als dat geïnstalleerd is):
python -m http.server 8080
```

De site is daarna bereikbaar op `http://localhost:3000` (bij `serve`) of `http://localhost:8080` (bij Python).

## Deployen

### Netlify (aanbevolen)

1. Sleep de volledige projectmap naar [netlify.com/drop](https://netlify.com/drop).
2. De site staat live, inclusief een tijdelijk subdomein.
3. Koppel daarna `pedicureina.nl` via de Netlify DNS-instellingen.

### Vercel

```bash
npx vercel --prod
```

Volg de stappen in de terminal. Vercel detecteert automatisch dat het een statische site is.

### Via hosting-panel (cPanel / DirectAdmin)

Upload alle bestanden via FTP of de bestandsbeheerder naar de `public_html`-map op het hostingpakket. Zorg dat `index.html` in de root staat.

---

## Nog aan te leveren door Ina / het bureau

### Verplicht voor livegang

| # | Wat | Waar in de code | Opmerking |
|---|-----|-----------------|-----------|
| 1 | **Hero-foto** (praktijkruimte of behandelmoment) | `index.html`, hero-sectie, zie HTML-commentaar | Aanbevolen: WebP, minimaal 900×680 px, bestandsnaam `assets/images/hero-praktijk.webp` |
| 2 | **Portretfoto van Ina** | `index.html`, Over Ina-sectie, zie HTML-commentaar | Aanbevolen: WebP, staand formaat, bv. 600×800 px, bestandsnaam `assets/images/ina-portret.webp` |
| 3 | **Openingstijden** | `index.html`, contact-sectie, blok `.contact__hours` | Vervang de placeholder-tekst door een echte `<dl>` met dagen en tijden |
| 4 | **Behandelingenaanbod en tarieven** | `index.html`, behandelingen-sectie, zie HTML-commentaar | Controleer of de zes behandelkaarten kloppen met het aanbod; voeg tarieven toe als aparte kaart of tabel |
| 5 | **Persoonlijk verhaal van Ina** | `index.html`, Over Ina-sectie, zie HTML-commentaar | Opleiding, achtergrond, motivatie, eventuele specialisaties of bijscholingen |
| 6 | **Favicon** | `index.html`, `<head>`, zie commentaar | Maak een `.ico` of `.png` (32×32) en verwijder het commentaar rondom de `<link>`-tag |

### Optioneel maar aanbevolen

- **Extra reviews**: er zijn zeven Google-beoordelingen beschikbaar. Drie staan nu op de site. Als de andere vier met naam aangeleverd worden, kunnen ze als kaarten worden toegevoegd.
- **Aanvullende afbeeldingen**: sfeerfotos van de praktijk of behandelmomenten kunnen in latere secties worden verwerkt.
- **Google Maps embed-sleutel**: de kaart in de contactsectie werkt nu via een openbaar embed-formaat. Als het domein actief is en er een API-sleutel beschikbaar is, kan dit worden vervangen voor betere laadprestaties.

---

## Technische keuzes

- **Geen framework**: de site is volledig gebouwd met HTML, CSS en vanilla JavaScript. Geen React, Vue, Webpack of andere build-tools. Dit houdt de laadtijd laag en het onderhoud eenvoudig.
- **CSS custom properties**: alle kleuren en typografie zijn vastgelegd in `:root`-variabelen bovenin `style.css`. Een kleurwijziging is daarmee een aanpassing van één waarde.
- **Fonts via Google Fonts**: Playfair Display (koppen) en Nunito (lopende tekst). Beide laden via `<link>` in de `<head>` voor snelle eerste render.
- **IntersectionObserver**: de scroll-animaties in `js/main.js` gebruiken geen externe bibliotheek. Ze respecteren `prefers-reduced-motion`.
- **Google Maps embed**: de kaart laadt via een standaard `<iframe>`-embed met `loading="lazy"`.
- **Afbeeldingen**: placeholders staan nu op hun plek. Zodra de echte foto's er zijn: sla ze op als WebP, gebruik de aanbevolen bestandsnamen, verwijder het placeholder-blok uit de HTML en verwijder het commentaar rondom het `<img>`-element.
