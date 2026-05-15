---
name: Automotive Precision
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001a41'
  on-tertiary-container: '#4081ed'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a41'
  on-tertiary-fixed-variant: '#004493'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-xl:
    fontFamily: hankenGrotesk
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: hankenGrotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: hankenGrotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  headline-md:
    fontFamily: hankenGrotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.03em
  body-lg:
    fontFamily: inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-sm:
    fontFamily: inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

This design system embodies the essence of "The Ultimate Driving Machine." It is rooted in engineering excellence, precision, and high-performance luxury. The aesthetic is a sophisticated blend of **Modern Minimalism** and **High-Contrast Boldness**, designed to evoke a sense of speed, technological superiority, and exclusivity.

The user experience should feel effortless and direct. Every pixel serves a purpose, mirroring the intentionality of automotive design. We prioritize high-contrast cinematic visuals where the product is the hero, framed by generous negative space that allows the content to breathe and commands authority.

## Colors

The palette is strictly curated to maintain a premium, monochromatic foundation. 

- **Primary Black (#000000):** Used for typography, primary UI elements, and deep "Midnight" sections to create a high-fashion, cinematic feel.
- **Secondary White (#FFFFFF):** The canvas. Used to provide maximum clarity and negative space.
- **Tertiary Blue (#1C69D3):** Used with extreme restraint. This is the "Electric" accent for specific interactive cues, focus states, or subtle brand signatures.
- **Neutral Grey (#E6E6E6 / #666666):** Used for structural elements like thin dividers, disabled states, and secondary metadata to ensure hierarchy without clutter.

## Typography

The typography strategy leverages two distinct sans-serifs to balance impact with utility. **Hanken Grotesk** is the voice of the brand, used for large-scale headlines with intentional letter-spacing to mirror the luxury automotive sector's editorial style. **Inter** provides the functional backbone, offering exceptional legibility for technical specifications and UI controls.

Large headlines should frequently use uppercase or generous tracking to create a sense of scale and prestige. Headlines on mobile must scale aggressively to ensure the "full-bleed" visual impact isn't lost on smaller viewports.

## Layout & Spacing

This design system utilizes a **Fixed Grid** model for content containers to maintain a structured, architectural feel. 

- **Grid:** A 12-column grid is used for desktop, 8-column for tablet, and 4-column for mobile.
- **Margins:** Large outer margins (64px+) are critical to the "Luxury" feel, ensuring content never feels cramped against the screen edge.
- **Rhythm:** We use a strict 8px base unit. Section gaps are intentionally large (120px+) to facilitate a "gallery" browsing experience. 
- **Full-Bleed:** Visual assets (imagery/video) should ignore grid constraints to fill the horizontal viewport, while text and UI components remain pinned to the internal grid.

## Elevation & Depth

To maintain the minimalist, high-end aesthetic, this design system rejects traditional drop shadows. Depth is achieved through:

- **Tonal Layering:** Using high-contrast blocks (Pure Black vs. Pure White) to define hierarchy.
- **Thin Dividers:** 1px borders in `#E6E6E6` or `#000000` (depending on background) are used to separate logical sections.
- **Cinematic Overlays:** Text is often placed directly over high-contrast imagery using subtle gradient scrims (bottom-to-top) to ensure legibility without appearing "heavy."
- **Ghost Surfaces:** Elements like navigation bars use a background blur (Backdrop Filter) with 95% opacity to feel like high-tech glass.

## Shapes

The shape language is defined by **Precision**. 

We utilize a sharp (0px) radius for all primary UI components, including buttons, inputs, and card containers. This mimics the sharp cut lines of premium automotive sheet metal and conveys a technical, "engineered" look. Rounded shapes are strictly prohibited except for the BMW logo itself and standardized social media icons.

## Components

### Buttons
- **Primary:** Solid Black (#000000) with White text. Sharp corners. No shadow.
- **Secondary (Ghost):** 1px Black or White border (based on background). Text matches border color. 
- **Hover States:** Invert colors (e.g., Primary Black becomes Primary Blue or White) with a 200ms transition.

### Navigation
- A minimalist, top-aligned bar. Text-based links in `label-sm` style.
- The logo is centered or left-aligned with significant padding.
- Use a "Mega-Menu" approach for vehicle lineups, utilizing large images of car silhouettes.

### Inputs & Fields
- Bottom-border only or 1px ghost boxes.
- Floating labels using `label-sm`.
- Focus state signaled by a shift to the Tertiary Blue (#1C69D3) for the bottom border.

### Cards
- Borderless with full-bleed imagery.
- Text content is placed below the image or as an overlay.
- Aspect ratios should be cinematic (16:9 or 21:9) to emphasize the width and stance of the vehicles.

### Thin Dividers
- Use sparingly to separate content groups. 
- Always 1px height, extending to the full width of the grid container.