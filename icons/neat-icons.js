/* ─── Keep It Neat — shared chrome icons ───────────────────────────
 * Canonical source of truth for the UI "furniture" every NEAT app
 * needs regardless of domain: theme toggle, nav, links, etc.
 *
 * Convention (matches weather/icons.js exactly — keep them in sync):
 *   monochrome line icons, 24×24, inherit color via `currentColor`.
 *
 * No build step across the series, so "shared" means: copy this file
 * (or the keys you need) into the consuming app. Domain icons —
 * weather conditions, alert severities, recipe steps — do NOT belong
 * here; they live with their app. This set is brand chrome only.
 * ──────────────────────────────────────────────────────────────── */

const ICON_ATTRS = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon" aria-hidden="true"';

export const NEAT_ICONS = {
  // ── Theme toggle (three states: system / light / dark) ──────────
  // `sun` and `moon` are byte-identical to weather/icons.js so the
  // toggle looks the same everywhere it appears.
  'theme-system': `<svg ${ICON_ATTRS}>
    <rect x="3" y="4" width="18" height="13" rx="1.5"/>
    <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>`,
  'theme-light': `<svg ${ICON_ATTRS}>
    <circle cx="12" cy="12" r="4"/>
    <line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/>
    <line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/>
    <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/>
    <line x1="4.93" y1="19.07" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.07" y2="4.93"/>
  </svg>`,
  'theme-dark': `<svg ${ICON_ATTRS}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>`,

  // ── Navigation ──────────────────────────────────────────────────
  home: `<svg ${ICON_ATTRS}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>`,
  back: `<svg ${ICON_ATTRS}>
    <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
  </svg>`,
  menu: `<svg ${ICON_ATTRS}>
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>`,
  close: `<svg ${ICON_ATTRS}>
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>`,
  // Rotate 180° in CSS for the expanded/up state.
  chevron: `<svg ${ICON_ATTRS}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>`,

  // ── Actions / inputs ────────────────────────────────────────────
  search: `<svg ${ICON_ATTRS}>
    <circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>`,
  location: `<svg ${ICON_ATTRS}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>`,
  info: `<svg ${ICON_ATTRS}>
    <circle cx="12" cy="12" r="9"/>
    <line x1="12" y1="11" x2="12" y2="16"/><line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>`,
  check: `<svg ${ICON_ATTRS}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>`,

  // ── Outbound / brand links ──────────────────────────────────────
  'external-link': `<svg ${ICON_ATTRS}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>`,
  github: `<svg ${ICON_ATTRS}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>`,
  // Ko-fi: a coffee cup. The brand links to ko-fi.com/keepitneat.
  coffee: `<svg ${ICON_ATTRS}>
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/>
    <line x1="14" y1="1" x2="14" y2="4"/>
  </svg>`,
};

// Return the raw SVG string for a key, or '' if unknown (never throws —
// a missing icon should degrade to nothing, not break the page).
export function icon(name) {
  return NEAT_ICONS[name] || '';
}
