# Movable — Project Brief

## What is Movable?
A freemium relocation app for people and families moving between global cities.
Combines rich city/neighbourhood content with an expat community.

## Six User Types
1. Pre-Mover (2–6 months before moving) — research, neighbourhood match, timeline
2. Arriving Expat (first 90 days) — practical setup hub, offline-first
3. Settled Expat (6 months+) — discovery, community, events
4. Serial Mover — city vault, persistent preferences, cross-city compare
5. Returning Local — "what's changed" digest, re-entry checklist
6. Family Unit — schools lens, family neighbourhood scores, activities

## Monetisation
Freemium. Free core features, premium gates on: full neighbourhood profiles,
school reports, city vault, weekend escape guides, AI assistant.

## Community
Phase 2. Content-first launch. Community features unlock once per-city user
density is sufficient.

## Viral Feature
"City Match" quiz — no login required, shareable, 5 questions, returns top 5
matched global cities. Primary top-of-funnel acquisition mechanic.

## Tech Stack (TBD — Claude Code to advise)
- Mobile-first (React Native or Expo)
- API-first backend
- Offline capability for Arriving Expat flow

## Key APIs
- Google Places / Maps — POIs, maps, geocoding
- Mapbox — styled neighbourhood maps
- WalkScore — walkability/transit scores
- Teleport.org — free city liveability scores (open API)
- Numbeo — cost of living data
- Open Exchange Rates — currency
- Ofsted (UK govt, free) — school inspection data
- GreatSchools — US school ratings
- ISC Research — international schools
- Zoopla / Idealista / Zillow — housing listings
- Meetup + Eventbrite — community events (both free tier)
- Wise — banking/money transfer recommendations
- Visaguide — visa requirements
- Anthropic Claude API (Haiku 4.5 for Q&A, Sonnet 4.6 for deep queries)
- Yelp Fusion + Foursquare — venue data

## Cost Targets
- Pre-launch: <$100/mo API costs
- Growth (5–50k users): $1,500–$4,000/mo
- Cache city-level data aggressively (refresh weekly, not per-request)

## Wireflow Reference
A full screen-by-screen wireflow exists at: movable-wireflow.html
(See project files for the interactive HTML sketch)

## Build Philosophy
- Lead with content value before community
- No login wall on City Match or first city view
- Premium gates appear after value is demonstrated, never before
- Offline-first for Arriving Expat flow
- Family lens is a profile toggle, not a separate section
