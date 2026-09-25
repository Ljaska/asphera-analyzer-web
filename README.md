# Asphera Analyzer — website

This folder contains a static, English-language product site. It uses the original transparent and square Asphera logos copied from `asphera-analyzer/assets`, plus the application icon. The DTM Studio header logo loads from its supplied public URL and links to the DTM Studio homepage. The page does not load external libraries, fonts, analytics, or stock imagery.

## Preview

Run `node server.js` and open `http://127.0.0.1:4173/`, or open `index.html` directly. The page adapts to narrow screens and includes a mobile navigation menu.

The `screen/` directory contains the three full, unmodified screenshots supplied by the user from the running Asphera application: a surface profile with Form Error and Best Fit Radius, diffraction zones, and excluded areas with Error Compensation. The images are embedded as supplied; no product screenshots were generated or altered.

## Files

- `index.html` — page content and metadata
- `styles.css` — visual design, motion, and responsive layouts
- `site.js` — accessible mobile navigation
- `server.js` — optional dependency-free local preview server
- `assets/` — original Asphera logos and application icon
- `screen/` — full, unmodified product screenshots used in the page
- `qa/` — full-page desktop and mobile browser captures for visual review

The site describes features found in the Asphera Analyzer source. The supplied image set has three distinct captures; a fourth distinct analysis-state capture can be added if the original four-screen requirement still applies. This site has not been published.
