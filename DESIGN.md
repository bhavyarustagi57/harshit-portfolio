---
name: Harshit Bhojwani Portfolio
description: A compact technical portfolio dossier with restrained violet signals.
colors:
  background: "#080a0f"
  surface: "#0d1016"
  surface-raised: "#11141c"
  surface-soft: "#141720"
  text: "#f4f5f7"
  muted: "#9a9ca6"
  faint: "#9295a0"
  line: "rgba(255, 255, 255, 0.09)"
  line-strong: "rgba(255, 255, 255, 0.14)"
  accent: "#8b7cf6"
  accent-soft: "rgba(139, 124, 246, 0.14)"
  success: "#47c982"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.25rem)"
    fontWeight: 680
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "23px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "21px"
    fontWeight: 700
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "10px"
    fontWeight: 400
    letterSpacing: "0.12em"
rounded:
  control: "9px"
  panel: "14px"
  identity: "18px"
  shell: "22px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "48px"
components:
  button-primary:
    backgroundColor: "{colors.text}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "0 15px"
    height: "42px"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    height: "42px"
    width: "42px"
  identity-card:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.identity}"
    padding: "24px"
  content-panel:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.panel}"
    padding: "24px"
  skill-chip:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.muted}"
    rounded: "8px"
    padding: "7px 10px"
  experience-entry:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    padding: "22px 4px"
  education-entry:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    padding: "20px 4px"
  credential-row:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    padding: "16px 4px"
  language-chip:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.muted}"
    rounded: "8px"
    padding: "8px 11px"
---

# Design System: Harshit Bhojwani Portfolio

## Overview

**Creative North Star: "The Technical Dossier"**

The portfolio presents Harshit as a careful early-career developer through a compact, evidence-led dossier rather than a marketing-heavy landing page. A narrow bordered shell sits over a near-black technical grid; inset panels, fine rules, and small labels create the feeling of a precise working document.

The interface is restrained and quiet. Inter carries nearly all text, violet appears only as a navigational or structural signal, and motion combines one soft hero arrival with three subtle, content-aware section reveals plus short interaction transitions. The content and contact paths remain the focus.

**Key Characteristics:**
- Narrow centered shell over a near-black grid.
- Inset identity and content panels separated by fine, low-contrast rules.
- Compact type hierarchy with precise monospace section markers.
- Restrained violet signals and a single green availability indicator.
- Floating desktop navigation that becomes a bottom mobile dock.

## Colors

The palette is predominantly neutral and low-luminance, with violet used sparingly to guide attention and green reserved for availability.

### Primary
- **Signal Violet:** Use the accent token for section icons, timeline markers, interactive emphasis, focus outlines, and selected text.

### Tertiary
- **Availability Green:** Use the success token only for the live availability indicator.

### Neutral
- **Grid Black:** The background token is the page canvas beneath the grid.
- **Dossier Surfaces:** The surface, surface-raised, and surface-soft tokens create quiet nested layers.
- **Primary Ink:** The text token carries headings and high-emphasis content.
- **Secondary Ink:** The muted and faint tokens carry summaries, metadata, labels, and markers.
- **Hairline Rules:** The line and line-strong tokens define shells, panels, dividers, and control outlines.

### Named Rules

**The Quiet Signal Rule.** Violet is reserved for focus, wayfinding, and small structural emphasis; it never becomes a large decorative field.

## Typography

**Display Font:** Inter (with ui-sans-serif and system-ui fallbacks)  
**Body Font:** Inter (with ui-sans-serif and system-ui fallbacks)  
**Label/Mono Font:** UI monospace (with SFMono-Regular and Menlo fallbacks)

**Character:** The typography is compact, technical, and highly legible. Tight heading tracking supplies confidence while small markers provide dossier-like precision.

### Hierarchy
- **Display:** The display token is reserved for the name in the identity card.
- **Headline:** The headline token labels primary content sections.
- **Title:** The title token is used for the contact invitation and comparable panel headings.
- **Body:** The body token supports the core narrative; summaries stay within roughly 64–68 characters.
- **Label:** The label token marks compact uppercase section metadata such as PROFILE and TOOLKIT.

### Named Rules

**The Compact Dossier Rule.** Keep the hierarchy tight and readable; do not introduce oversized display typography or decorative font pairings.

## Layout

The main shell is centered at a maximum width of 666px, with 32px internal padding and 62px vertical margin on desktop. Content sections use a 48px rhythm, a 42px top inset, and a hairline divider. The identity panel uses a three-column grid for avatar, identity, and actions.

At 900px and below, the fixed right-side navigation is replaced by a bottom dock and expandable menu. At 640px and below, the shell moves to a 10px page inset, internal padding tightens, the identity card collapses to two columns, actions span the card, and contact rows reflow for small screens. The resulting system supports the target 390, 768, 1024, and 1440px viewports without changing information order.

## Elevation & Depth

Depth comes primarily from nested neutral surfaces, borders, and the grid backdrop. Broad low-opacity shadows lift the main shell, avatar, and floating navigation without introducing glossy cards or heavy skeuomorphism.

### Shadow Vocabulary
- **Shell Lift:** A broad, soft shadow separates the dossier from the grid.
- **Floating Navigation:** A tighter shadow and backdrop blur keep the desktop rail and mobile dock legible above content.
- **Avatar Inset:** A compact shadow gives the monogram a subtle physical anchor.

### Named Rules

**The Layered, Not Glossy Rule.** Use tonal surfaces, hairline borders, and diffuse shadows for depth; avoid bright glows, glass-heavy panels, or stacked card shadows.

## Shapes

The form language combines a gently rounded outer shell with nested panels and tighter controls. Identity surfaces use the identity radius, standard content panels use the panel radius, and controls use the compact control radius. Circular geometry is limited to the avatar, status dot, and timeline markers.

## Components

### Buttons
- **Shape:** Compact rectangular controls use the control radius and a 42px height.
- **Primary:** The main contact action inverts the neutral palette using the text token as its fill.
- **Hover / Focus:** Hover lifts controls by 2px; keyboard focus uses a clear violet outline with offset.
- **Icon:** Icon-only actions use a square 42px footprint and a hairline border.

### Chips
- **Style:** Skill chips use the soft surface, a fine border, compact padding, and secondary text.
- **State:** Hover shifts the border toward translucent violet and raises text contrast.

### Cards / Containers
- **Corner Style:** Identity and content panels use separate but related radii.
- **Background:** Raised surfaces sit inside the darker shell.
- **Shadow Strategy:** Panels remain flat; the shell and floating elements own elevation.
- **Border:** A single low-contrast hairline defines every container.
- **Internal Padding:** Identity and skills panels use the large spacing token; the contact panel is slightly roomier.

### Resume Timelines

Experience and education use related ruled timelines rather than standalone cards. Experience entries connect violet-ring markers with a vertical hairline, pair organization and role with a compact period pill, and present evidence as small violet-bulleted details. Education entries use the same marker language in a simpler divided list, with institution, qualification, period, and result kept in a dense factual hierarchy. On compact screens, each entry heading stacks its period beneath the title block.

### Credentials and Achievements

Certification rows are compact, border-divided records with title and issuer; linkable credentials may shift inward and violet on hover. Achievements use a matching ruled list with a small solid violet bullet, preserving the dossier rhythm without introducing card chrome.

### Language Chips

Languages use the same soft-surface, hairline-border vocabulary as skills, with slightly roomier horizontal padding. They wrap naturally and do not imply an interactive state.

### Navigation

Desktop navigation is a fixed vertical rail centered along the right edge, with icon buttons and hover-revealed labels. Below 900px it becomes a fixed bottom dock with three direct destinations plus a menu for the complete section list. Both variants use translucent dark surfaces, hairline borders, blur, and short state transitions.

### Identity Panel

The signature identity panel combines the monogram avatar, availability, name, role, location, and three contact actions in one inset block. On small screens the actions form a full-width row beneath the identity.

### Motion

The hero enters on load using a 650ms fade, short upward translation, and blur reduction. As visitors scroll, narrative sections (`About` and `Contact`) rise gently; timeline sections (`Experience` and `Education`) unfold with a shallow clip; detail-heavy sections (`Skills`, `Certifications`, `Achievements`, and `Languages`) resolve from a restrained blur and horizontal offset. These families use view timelines only when reduced motion is not requested. Reduced-motion preferences remove all entrance effects and the primary control, navigation, skill, and footer transitions while preserving the complete layout.

## Do's and Don'ts

### Do:
- **Do** keep the content shell narrow, centered, and visibly bounded.
- **Do** use fine rules and tonal layers to organize information before adding decoration.
- **Do** preserve the desktop rail to mobile dock navigation transformation.
- **Do** keep motion quiet, functional, and compatible with reduced-motion preferences.

### Don't:
- **Don't** repeat one identical section reveal, add parallax, or introduce continuous ambient animation.
- **Don't** turn violet into a dominant background or gradient wash.
- **Don't** add unverified portfolio claims, projects, credentials, or personal details.
- **Don't** replace the compact dossier hierarchy with a wide marketing-page composition.
