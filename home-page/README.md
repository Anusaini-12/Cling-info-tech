# Cling Infotech — Homepage Redesign

A redesign of the Cling Infotech company homepage, rebuilt as a React + Tailwind CSS component set. This project keeps the brand's real content, services, clients, team and contact details, and focuses on improving visual hierarchy, layout structure and page length.

## Why this redesign

The original homepage repeats the same pink/white section backgrounds throughout, uses a blue "Our Mission" card that clashes with the red brand color, and stretches the page with a long client logo grid, a dense "Our Story" paragraph and a text-only journey timeline. The goal of this redesign was to keep the same brand and the same facts, but present them with clearer structure and less scrolling.

## What changed

- **Color system** — Replaced repeated pink section backgrounds with white and neutral gray, reserving red for accents, buttons and highlights. Removed the blue mission card in favor of a consistent charcoal/red palette.
- **Hero section** — Added an overlapping stats card, a tagged badge ("Global Enterprise Solutions"), and a hero photo blended into the dark background with a gradient mask instead of a hard image edge.
- **Global presence** — Condensed the flag grid into a compact card layout with region labels.
- **Client logos** — Replaced the static logo grid with a continuous scrolling marquee, so all clients are visible without taking up vertical space.
- **About Us** — Turned the "Our Story / Vision / Mission / Journey" content into a four-step tabbed overview instead of four stacked sections.
- **Services** — Rebuilt as three cards with real service icons, numbered badges, in a staggered layout (2nd card offset on large screens, all three in one row below that).
- **Current Tech Focus** — Rebuilt using the same staggered card layout, with working inline video playback instead of static thumbnails.
- **Leadership & testimonials** — Kept the same three leadership members and three testimonials, restyled as consistent card components with real headshots.
- **Contact form** — Simplified to a clean two-column form with clear labels and placeholder examples.

## What stayed the same

- Company name, tagline and description
- All stats (lines of code, clients, projects, coffees)
- All services (App Development, Web Design, ERPs, digital marketing, etc.)
- The full client list and logos
- Leadership team names and titles
- All three testimonials, verbatim
- Office addresses and contact details

## Tech stack

- React (functional components, hooks)
- Tailwind CSS (utility classes, no custom design system)
- [lucide-react](https://lucide.dev/) for icons

## Project structure

```
src/
├── assets/
│   ├── clients/        # client logos
│   ├── testimonials/   # leadership & testimonial headshots
│   └── services/       # app.png, web.png, ERP.png
├── components/
│   ├── HeroWithStats.jsx
│   ├── Services.jsx
│   ├── CurrentTechFocus.jsx
│   ├── OurDiverseClientele.jsx
│   ├── TestimonialsVerticalCardsCarousel.jsx
│   └── ...
```

## Notes for reviewers

This was built as a design/frontend assignment. Some media (service videos, a few client logos) use placeholder assets and can be swapped for final files without changing any component logic.

Content (services, clients, team, testimonials, countries) is currently hardcoded in each component rather than pulled from a shared data file or CMS. This keeps the components simple for now; moving the arrays into a data/ folder or fetching them from an API is a straightforward next step.