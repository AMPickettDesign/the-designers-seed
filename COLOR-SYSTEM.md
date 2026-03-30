# I. AM. DESIGN. — Color & Type System

## Brand Palette

### Purples (warm, identity)
| Swatch | Hex | Token | Used For |
|--------|-----|-------|----------|
| ■ | `#3E2259` | `--purple-darkest` | Dark card backgrounds, deep shadows |
| ■ | `#4C3073` | `--purple-deep` | Primary accent (dark contexts), hover states |
| ■ | `#5D2C73` | `--purple-mid` | Primary accent (light contexts), buttons, CTA |
| ■ | `#9163BF` | `--purple-soft` | Interactive highlights, accents (dark theme) |
| ■ | `#A175BF` | `--purple-light` | Tags, soft accents, helper text (dark theme) |

### Teals & Cyans (cool, functional)
| Swatch | Hex | Token | Used For |
|--------|-----|-------|----------|
| ■ | `#024959` | `--teal-dark` | Secondary text (light theme) |
| ■ | `#026873` | `--teal-deep` | Borders, subtle accents |
| ■ | `#03738C` | `--teal` | Links (light theme), Version C accent |
| ■ | `#0378A6` | `--teal-mid` | Version B accent, secondary buttons |
| ■ | `#038C7F` | `--teal-bright` | Success tones, accent (dark theme) |
| ■ | `#048ABF` | `--teal-light` | Hover accents, Version C dark |
| ■ | `#049DBF` | `--cyan` | Secondary highlights |
| ■ | `#04C4D9` | `--cyan-light` | Accent text (dark theme), active chips, links (dark) |
| ■ | `#04D9C4` | `--cyan-bright` | Mint accent |
| ■ | `#05F2DB` | `--mint` | Success (dark theme), bright CTA |

### Neutrals
| Swatch | Hex | Token | Used For |
|--------|-----|-------|----------|
| ■ | `#00010D` | `--navy` | Dark theme background (near-black) |
| ■ | `#0A0814` | `--navy-card` | Dark theme card/elevated surfaces |
| ■ | `#012840` | `--navy-dark` | Dark theme elevated surfaces |
| ■ | `#27594B` | `--green-dark` | Success state (light theme) |
| ■ | `#A6A6A6` | `--gray` | Helper/secondary text (dark theme) |
| □ | `#F8F7FA` | `--bg` (light) | Page background (light theme) |
| □ | `#FFFFFF` | `--card` (light) | Card backgrounds (light theme) |
| □ | `#F0EEF4` | — | Primary text (dark theme) |

### System Colors (native/platform feel)
| Swatch | Hex | Token | Used For |
|--------|-----|-------|----------|
| ■ | `#C0392B` | `--error` (light) | Destructive actions, error states |
| ■ | `#E74C3C` | `--error` (dark) | Destructive actions, "Internal Only" label |
| ■ | `#27594B` | `--success` (light) | Confirmations, success states |
| ■ | `#05F2DB` | `--success` (dark) | Confirmations, success states |
| ■ | `#03738C` | `--link` (light) | Standard links |
| ■ | `#04C4D9` | `--link` (dark) | Standard links |
| □ | `#FFFFFF` | `--text-on-accent` | White text on colored buttons |

---

## Themes

### Light Theme (Client-Facing — Default)
| Token | Value | Purpose |
|-------|-------|---------|
| `--bg` | `#F8F7FA` | Page background |
| `--bg-elevated` | `#FFFFFF` | Elevated surface |
| `--card` | `#FFFFFF` | Card backgrounds |
| `--text` | `#00010D` | Primary text (20.8:1 AAA) |
| `--text-secondary` | `#3E2259` | Secondary text (13.3:1 AAA) |
| `--text-tertiary` | `#024959` | Tertiary text (10.0:1 AAA) |
| `--text-helper` | `#4C3073` | Helper/caption text (10.6:1 AAA) |
| `--accent` | `#5D2C73` | Primary accent / buttons |
| `--accent-hover` | `#4C3073` | Hover state |
| `--accent-secondary` | `#0378A6` | Secondary accent (Version B) |

### Dark Theme (Designer / User Preference)
| Token | Value | Purpose |
|-------|-------|---------|
| `--bg` | `#00010D` | Page background |
| `--bg-elevated` | `#0A0814` | Elevated surface |
| `--card` | `#0A0814` | Card backgrounds |
| `--text` | `#F0EEF4` | Primary text (18.1:1 AAA) |
| `--text-secondary` | `#A6A6A6` | Secondary text (8.5:1 AAA) |
| `--text-tertiary` | `#04C4D9` | Tertiary/accent text (9.8:1 AAA) |
| `--text-helper` | `#A6A6A6` | Helper text (8.5:1 AAA) |
| `--accent` | `#9163BF` | Primary accent (4.7:1 AA) |
| `--accent-hover` | `#A175BF` | Hover state |
| `--accent-secondary` | `#04C4D9` | Secondary accent |

### Glass UI Tokens
| Token | Light | Dark |
|-------|-------|------|
| `--glass-bg` | `rgba(255,255,255,0.65)` | `rgba(10,8,20,0.65)` |
| `--glass-border` | `rgba(255,255,255,0.35)` | `rgba(255,255,255,0.06)` |
| CSS class | `.glass` applies backdrop-blur(16px) + border + shadow |

---

## Typography

### Font Stack
| Role | Font | Weights | Sizes |
|------|------|---------|-------|
| Headlines | Playfair Display | 600, 700 | 32–56px |
| Section titles | Nunito Sans | 700 | 20–24px |
| Body / descriptions | Nunito Sans | 400, 500 | 15–17px |
| Buttons / labels / nav | Sarabun | 600, 700 | 13–16px |
| Helper / captions | Sarabun | 400 | 12–13px |

### Version Accents
| Version | Light | Dark | Usage |
|---------|-------|------|-------|
| A — "I Have a Vision" | `#5D2C73` | `#9163BF` | Headers, progress, dots |
| B — "Let's Figure It Out" | `#0378A6` | `#04C4D9` | Headers, progress, dots |
| C — Deep Dive Guide | `#03738C` | `#048ABF` | Headers, progress, dots |
| Private — Designer | `#9163BF` | `#9163BF` | Headers, progress, dots |

---

## AAA Contrast Verification

All text/background combinations meet WCAG AAA (7:1) or AA (4.5:1 for large text/UI):

| Combination | Ratio | Level |
|------------|-------|-------|
| `#00010D` on `#FFFFFF` | 20.8:1 | AAA |
| `#3E2259` on `#FFFFFF` | 13.3:1 | AAA |
| `#4C3073` on `#FFFFFF` | 10.6:1 | AAA |
| `#5D2C73` on `#FFFFFF` | 10.1:1 | AAA |
| `#024959` on `#FFFFFF` | 10.0:1 | AAA |
| `#FFFFFF` on `#5D2C73` | 10.1:1 | AAA (buttons) |
| `#FFFFFF` on `#4C3073` | 10.6:1 | AAA (buttons) |
| `#F0EEF4` on `#00010D` | 18.1:1 | AAA |
| `#A6A6A6` on `#00010D` | 8.5:1 | AAA |
| `#04C4D9` on `#00010D` | 9.8:1 | AAA |
| `#05F2DB` on `#00010D` | 14.6:1 | AAA |
| `#9163BF` on `#00010D` | 4.7:1 | AA |
