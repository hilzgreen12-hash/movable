<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Movable — App Flow Sketch</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink: #1a1a2e;
    --paper: #f5f0e8;
    --sage: #7a9e7e;
    --terracotta: #c97d4e;
    --sky: #6b9cb8;
    --cream: #ede8dc;
    --muted: #8a8580;
    --premium: #c9a84c;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--ink);
    color: var(--paper);
    min-height: 100vh;
    overflow-x: hidden;
  }

  .site-header {
    padding: 2rem 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(245,240,232,0.1);
  }
  .logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    letter-spacing: 0.05em;
    color: var(--paper);
  }
  .logo span { color: var(--terracotta); }
  .tagline {
    font-size: 0.78rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .intro {
    padding: 3rem 3rem 2rem;
    max-width: 760px;
  }
  .intro h1 {
    font-family: 'Playfair Display', serif;
    font-size: 2.2rem;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }
  .intro p {
    color: rgba(245,240,232,0.65);
    font-size: 0.95rem;
    line-height: 1.7;
  }

  .user-nav {
    display: flex;
    gap: 0.5rem;
    padding: 0 3rem 2.5rem;
    flex-wrap: wrap;
  }
  .user-btn {
    padding: 0.45rem 1rem;
    border-radius: 2rem;
    border: 1px solid rgba(245,240,232,0.2);
    background: transparent;
    color: var(--paper);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.82rem;
    cursor: pointer;
    transition: all 0.2s ease;
    letter-spacing: 0.02em;
  }
  .user-btn:hover, .user-btn.active {
    background: var(--terracotta);
    border-color: var(--terracotta);
    color: #fff;
  }

  .flow-canvas {
    padding: 0 3rem 4rem;
  }

  .flow-section {
    display: none;
    animation: fadeIn 0.35s ease;
  }
  .flow-section.active { display: block; }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .flow-label {
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--terracotta);
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  .flow-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(245,240,232,0.1);
  }

  .screens-row {
    display: flex;
    gap: 1.25rem;
    overflow-x: auto;
    padding-bottom: 1rem;
    scrollbar-width: thin;
    scrollbar-color: var(--terracotta) transparent;
  }
  .screens-row::-webkit-scrollbar { height: 3px; }
  .screens-row::-webkit-scrollbar-thumb { background: var(--terracotta); border-radius: 2px; }

  .phone {
    flex: 0 0 200px;
    background: var(--cream);
    border-radius: 24px;
    overflow: hidden;
    position: relative;
    border: 2px solid rgba(245,240,232,0.12);
    transition: transform 0.2s ease, border-color 0.2s ease;
    cursor: default;
  }
  .phone:hover {
    transform: translateY(-4px);
    border-color: var(--terracotta);
  }

  .phone-notch {
    width: 60px;
    height: 6px;
    background: rgba(26,26,46,0.2);
    border-radius: 3px;
    margin: 10px auto 0;
  }

  .phone-screen {
    padding: 0.75rem;
    min-height: 360px;
    color: var(--ink);
  }

  .screen-label {
    font-size: 0.6rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  .screen-title {
    font-family: 'Playfair Display', serif;
    font-size: 0.95rem;
    line-height: 1.3;
    color: var(--ink);
    margin-bottom: 0.6rem;
  }

  .screen-body {
    font-size: 0.68rem;
    line-height: 1.55;
    color: #555;
  }

  .mock-bar {
    height: 6px;
    border-radius: 3px;
    background: #ddd;
    margin: 0.4rem 0;
  }
  .mock-bar.filled { background: var(--sage); }
  .mock-bar.w60 { width: 60%; }
  .mock-bar.w80 { width: 80%; }
  .mock-bar.w40 { width: 40%; }
  .mock-bar.w90 { width: 90%; }

  .mock-card {
    background: #fff;
    border-radius: 8px;
    padding: 0.5rem;
    margin: 0.4rem 0;
    font-size: 0.65rem;
    color: #444;
    border: 1px solid #e8e4dc;
  }
  .mock-card .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.3rem;
  }
  .mock-card .card-name {
    font-weight: 500;
    font-size: 0.7rem;
    color: var(--ink);
  }
  .mock-badge {
    font-size: 0.55rem;
    padding: 0.15rem 0.4rem;
    border-radius: 10px;
    background: var(--sage);
    color: #fff;
    font-weight: 500;
  }
  .mock-badge.premium { background: var(--premium); }
  .mock-badge.urgent { background: var(--terracotta); }
  .mock-badge.sky { background: var(--sky); }

  .mock-input {
    background: #f0ece4;
    border-radius: 6px;
    padding: 0.4rem 0.6rem;
    font-size: 0.65rem;
    color: #888;
    margin: 0.4rem 0;
    border: 1px solid #ddd;
  }

  .mock-btn {
    display: block;
    width: 100%;
    padding: 0.45rem;
    border-radius: 8px;
    text-align: center;
    font-size: 0.65rem;
    font-weight: 500;
    margin: 0.4rem 0;
  }
  .mock-btn.primary { background: var(--terracotta); color: #fff; }
  .mock-btn.secondary { background: #f0ece4; color: var(--ink); border: 1px solid #ddd; }
  .mock-btn.sage { background: var(--sage); color: #fff; }

  .mock-tabs {
    display: flex;
    gap: 0.3rem;
    margin: 0.4rem 0;
  }
  .mock-tab {
    flex: 1;
    text-align: center;
    font-size: 0.6rem;
    padding: 0.3rem;
    border-radius: 6px;
    background: #f0ece4;
    color: #888;
  }
  .mock-tab.active { background: var(--ink); color: #fff; }

  .mock-map {
    height: 70px;
    border-radius: 8px;
    background: linear-gradient(135deg, #c8d8c0 0%, #a8c4b0 40%, #8aafb8 100%);
    margin: 0.4rem 0;
    position: relative;
    overflow: hidden;
  }
  .mock-map::after {
    content: '📍';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    font-size: 1rem;
  }

  .mock-stat-row {
    display: flex;
    gap: 0.3rem;
    margin: 0.4rem 0;
  }
  .mock-stat {
    flex: 1;
    background: #f0ece4;
    border-radius: 6px;
    padding: 0.4rem 0.3rem;
    text-align: center;
    font-size: 0.58rem;
    color: #555;
  }
  .mock-stat .stat-num {
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--ink);
    display: block;
  }

  .mock-check-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.3rem 0;
    font-size: 0.65rem;
    color: #444;
    border-bottom: 1px solid #eee;
  }
  .mock-check { width: 12px; height: 12px; border-radius: 3px; border: 1.5px solid #ccc; flex-shrink: 0; }
  .mock-check.done { background: var(--sage); border-color: var(--sage); }

  .mock-avatar-row {
    display: flex;
    gap: 0.25rem;
    margin: 0.4rem 0;
    align-items: center;
  }
  .mock-avatar {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--sky);
    font-size: 0.55rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 600;
    border: 1.5px solid #fff;
  }
  .mock-avatar:nth-child(2) { background: var(--terracotta); margin-left: -6px; }
  .mock-avatar:nth-child(3) { background: var(--sage); margin-left: -6px; }
  .mock-avatar:nth-child(4) { background: var(--premium); margin-left: -6px; }

  .mock-score-bar { margin: 0.3rem 0; }
  .mock-score-label {
    display: flex;
    justify-content: space-between;
    font-size: 0.58rem;
    color: #777;
    margin-bottom: 0.15rem;
  }
  .mock-score-track {
    height: 4px;
    background: #ddd;
    border-radius: 2px;
  }
  .mock-score-fill {
    height: 100%;
    border-radius: 2px;
    background: var(--sage);
  }

  .flow-arrow {
    flex: 0 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(245,240,232,0.25);
    font-size: 1.2rem;
    align-self: center;
  }

  .notes-panel {
    margin-top: 1.75rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
  }
  .note-card {
    background: rgba(245,240,232,0.04);
    border: 1px solid rgba(245,240,232,0.1);
    border-radius: 12px;
    padding: 1.1rem 1.25rem;
  }
  .note-card h4 {
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--terracotta);
    margin-bottom: 0.5rem;
  }
  .note-card ul { list-style: none; padding: 0; }
  .note-card li {
    font-size: 0.82rem;
    color: rgba(245,240,232,0.7);
    padding: 0.25rem 0;
    border-bottom: 1px solid rgba(245,240,232,0.06);
    line-height: 1.4;
  }
  .note-card li:last-child { border-bottom: none; }
  .note-card li::before { content: '→ '; color: var(--terracotta); }

  .freemium-key {
    display: flex;
    gap: 1.5rem;
    padding: 1rem 3rem;
    border-top: 1px solid rgba(245,240,232,0.08);
    border-bottom: 1px solid rgba(245,240,232,0.08);
    margin-bottom: 2.5rem;
    flex-wrap: wrap;
  }
  .key-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.78rem;
    color: rgba(245,240,232,0.6);
  }
  .key-dot { width: 10px; height: 10px; border-radius: 50%; }
  .key-dot.free { background: var(--sage); }
  .key-dot.premium { background: var(--premium); }
  .key-dot.urgent { background: var(--terracotta); }

  .city-match-teaser {
    margin: 0 3rem 4rem;
    background: linear-gradient(135deg, rgba(201,125,78,0.15) 0%, rgba(107,156,184,0.15) 100%);
    border: 1px solid rgba(201,125,78,0.3);
    border-radius: 16px;
    padding: 2rem 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .city-match-teaser h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
  }
  .city-match-teaser p {
    font-size: 0.85rem;
    color: rgba(245,240,232,0.65);
    max-width: 420px;
    line-height: 1.6;
  }
  .city-match-tag {
    background: var(--terracotta);
    color: #fff;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.3rem 0.8rem;
    border-radius: 2rem;
    display: inline-block;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 640px) {
    .site-header { padding: 1.5rem; }
    .intro, .user-nav, .flow-canvas { padding-left: 1.5rem; padding-right: 1.5rem; }
    .freemium-key { padding: 1rem 1.5rem; }
    .city-match-teaser { margin: 0 1.5rem 3rem; }
  }
</style>
</head>
<body>

<header class="site-header">
  <div class="logo">Mov<span>able</span></div>
  <div class="tagline">App Flow — Working Sketch</div>
</header>

<div class="intro">
  <h1>Screen-by-Screen<br><em>User Flow</em></h1>
  <p>Six user types, each with a tailored journey. Tap a type to explore their flow. Screens scroll horizontally. Notes below each flow capture key design decisions and API triggers.</p>
</div>

<div class="freemium-key">
  <div class="key-item"><div class="key-dot free"></div> Free feature</div>
  <div class="key-item"><div class="key-dot premium"></div> Premium gate</div>
  <div class="key-item"><div class="key-dot urgent"></div> Critical moment / hook</div>
</div>

<div class="user-nav">
  <button class="user-btn active" onclick="show('premover')">✈️ Pre-Mover</button>
  <button class="user-btn" onclick="show('arriving')">🛬 Arriving Expat</button>
  <button class="user-btn" onclick="show('settled')">🏡 Settled Expat</button>
  <button class="user-btn" onclick="show('serial')">🔄 Serial Mover</button>
  <button class="user-btn" onclick="show('returning')">🔁 Returning Local</button>
  <button class="user-btn" onclick="show('family')">👨‍👩‍👧 Family Unit</button>
  <button class="user-btn" onclick="show('citymatch')" style="border-color:var(--terracotta); color:var(--terracotta);">✨ City Match</button>
</div>

<div class="flow-canvas">

  <!-- PRE-MOVER -->
  <div class="flow-section active" id="premover">
    <div class="flow-label">Pre-Mover — 2 to 6 months before moving</div>
    <div class="screens-row">

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 1</div>
          <div class="screen-title">Welcome to Movable</div>
          <div class="screen-body">No login wall. First question only.</div>
          <div class="mock-input">Where are you moving from? 🌍</div>
          <div class="mock-input">Where are you moving to? 📍</div>
          <div class="mock-input">Roughly when? ▾</div>
          <div class="mock-btn primary">Show my city →</div>
          <div class="screen-body" style="margin-top:0.5rem; color:#aaa;">Or explore any city first</div>
        </div>
      </div>

      <div class="flow-arrow">›</div>

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 2</div>
          <div class="screen-title">Your City: Amsterdam</div>
          <div class="mock-map"></div>
          <div class="mock-stat-row">
            <div class="mock-stat"><span class="stat-num">8.4</span>Liveability</div>
            <div class="mock-stat"><span class="stat-num">€€€</span>Cost</div>
            <div class="mock-stat"><span class="stat-num">94</span>Transit</div>
          </div>
          <div class="mock-btn primary">Find my neighbourhood →</div>
          <div class="mock-btn secondary">Explore the city</div>
        </div>
      </div>

      <div class="flow-arrow">›</div>

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 3</div>
          <div class="screen-title">Neighbourhood Match</div>
          <div class="screen-body">3-question quiz. Instant results.</div>
          <div class="mock-card">
            <div style="font-size:0.65rem; color:#888; margin-bottom:0.3rem;">What matters most?</div>
            <div class="mock-tab active" style="flex:none; display:inline-block; margin:0.15rem;">Walkability</div>
            <div class="mock-tab" style="flex:none; display:inline-block; margin:0.15rem;">Green space</div>
            <div class="mock-tab" style="flex:none; display:inline-block; margin:0.15rem;">Nightlife</div>
            <div class="mock-tab" style="flex:none; display:inline-block; margin:0.15rem;">Quiet streets</div>
          </div>
          <div class="mock-card">
            <div style="font-size:0.65rem; color:#888; margin-bottom:0.3rem;">Monthly rent budget</div>
            <div class="mock-bar filled w80"></div>
            <div style="font-size:0.6rem; color:#888;">€1,800 — €2,500</div>
          </div>
          <div class="mock-btn primary">See my matches →</div>
        </div>
      </div>

      <div class="flow-arrow">›</div>

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 4</div>
          <div class="screen-title">Your Matches</div>
          <div class="mock-card">
            <div class="card-top"><span class="card-name">Jordaan</span><span class="mock-badge">98% match</span></div>
            <div class="mock-score-bar">
              <div class="mock-score-label"><span>Walkability</span><span>9.2</span></div>
              <div class="mock-score-track"><div class="mock-score-fill" style="width:92%"></div></div>
            </div>
            <div class="mock-bar w60" style="background:#eee; height:4px;"></div>
          </div>
          <div class="mock-card">
            <div class="card-top"><span class="card-name">De Pijp</span><span class="mock-badge">91% match</span></div>
            <div class="mock-score-bar">
              <div class="mock-score-label"><span>Walkability</span><span>8.8</span></div>
              <div class="mock-score-track"><div class="mock-score-fill" style="width:88%"></div></div>
            </div>
          </div>
          <div class="mock-btn primary" style="background:var(--premium); margin-top:0.3rem;">🔒 See full profiles</div>
        </div>
      </div>

      <div class="flow-arrow">›</div>

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 5 — Premium</div>
          <div class="screen-title">Jordaan Deep Dive</div>
          <div class="mock-badge premium" style="margin-bottom:0.4rem;">PREMIUM</div>
          <div class="mock-score-bar">
            <div class="mock-score-label"><span>Safety</span><span>9.1</span></div>
            <div class="mock-score-track"><div class="mock-score-fill" style="width:91%; background:var(--sky)"></div></div>
          </div>
          <div class="mock-score-bar">
            <div class="mock-score-label"><span>Family-friendly</span><span>7.8</span></div>
            <div class="mock-score-track"><div class="mock-score-fill" style="width:78%; background:var(--terracotta)"></div></div>
          </div>
          <div class="mock-score-bar">
            <div class="mock-score-label"><span>Expat density</span><span>8.5</span></div>
            <div class="mock-score-track"><div class="mock-score-fill" style="width:85%"></div></div>
          </div>
          <div class="mock-card" style="font-size:0.62rem;">💬 "We moved here 2 years ago — the market on Saturdays is unmissable." — Sarah, UK</div>
          <div class="mock-btn secondary">View housing listings →</div>
        </div>
      </div>

      <div class="flow-arrow">›</div>

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 6</div>
          <div class="screen-title">Your Moving Timeline</div>
          <div class="screen-body" style="margin-bottom:0.5rem;">Personalised to your move date</div>
          <div class="mock-check-item"><div class="mock-check done"></div>Research neighbourhoods</div>
          <div class="mock-check-item"><div class="mock-check done"></div>Compare cost of living</div>
          <div class="mock-check-item"><div class="mock-check"></div>Shortlist schools</div>
          <div class="mock-check-item"><div class="mock-check"></div>Start visa application</div>
          <div class="mock-check-item"><div class="mock-check"></div>Open overseas bank account</div>
          <div class="mock-check-item" style="opacity:0.4"><div class="mock-check"></div>🔒 Book removals (8 weeks out)</div>
          <div class="mock-btn primary" style="margin-top:0.5rem;">Save progress</div>
        </div>
      </div>

    </div>
    <div class="notes-panel">
      <div class="note-card">
        <h4>Key Design Decisions</h4>
        <ul>
          <li>No login wall — city pair is the first input, value is immediate</li>
          <li>Neighbourhood quiz is the core free hook — results tease premium</li>
          <li>Timeline unlocks tasks progressively based on months-to-move</li>
          <li>Premium gate sits after results are seen, not before</li>
        </ul>
      </div>
      <div class="note-card">
        <h4>APIs Firing Here</h4>
        <ul>
          <li>Teleport API → city liveability scores</li>
          <li>Numbeo → cost of living, rent ranges</li>
          <li>WalkScore → neighbourhood walkability</li>
          <li>Foursquare → neighbourhood character data</li>
          <li>Zoopla / Idealista → housing listings</li>
          <li>Visaguide → visa requirements by nationality</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- ARRIVING EXPAT -->
  <div class="flow-section" id="arriving">
    <div class="flow-label">Arriving Expat — First 90 days in a new city</div>
    <div class="screens-row">

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 1</div>
          <div class="screen-title">I've just landed 🛬</div>
          <div class="screen-body">Mode switcher on home screen</div>
          <div class="mock-tabs">
            <div class="mock-tab">Researching</div>
            <div class="mock-tab active">Just arrived</div>
            <div class="mock-tab">Settled</div>
          </div>
          <div class="mock-card">
            <div class="card-top"><span class="card-name">First 30 Days</span><span class="mock-badge urgent">START HERE</span></div>
            <div class="screen-body">Your setup hub. Everything you need, in order.</div>
          </div>
          <div class="mock-btn primary">Open my setup hub →</div>
          <div style="font-size:0.6rem; color:#aaa; text-align:center; margin-top:0.3rem;">Works offline</div>
        </div>
      </div>

      <div class="flow-arrow">›</div>

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 2</div>
          <div class="screen-title">First 30 Days Hub</div>
          <div class="mock-tabs">
            <div class="mock-tab active">Admin</div>
            <div class="mock-tab">Home</div>
            <div class="mock-tab">Health</div>
            <div class="mock-tab">Social</div>
          </div>
          <div class="mock-check-item"><div class="mock-check done"></div>Get a local SIM card</div>
          <div class="mock-check-item"><div class="mock-check done"></div>Register your address</div>
          <div class="mock-check-item"><div class="mock-check"></div>Open a bank account</div>
          <div class="mock-check-item"><div class="mock-check"></div>Get a BSN / tax number</div>
          <div class="mock-check-item"><div class="mock-check"></div>Register with a GP</div>
          <div class="mock-btn primary" style="margin-top:0.5rem; background:var(--sky)">Open: Bank account →</div>
        </div>
      </div>

      <div class="flow-arrow">›</div>

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 3</div>
          <div class="screen-title">Open a Bank Account</div>
          <div class="screen-body" style="margin-bottom:0.5rem;">Step-by-step guide, localised to your city</div>
          <div class="mock-card">
            <div class="card-top"><span class="card-name">Wise (recommended)</span><span class="mock-badge sky">EXPAT PICK</span></div>
            <div style="font-size:0.62rem; color:#666;">Multi-currency, instant setup, no branch visit</div>
          </div>
          <div class="mock-card">
            <div class="card-top"><span class="card-name">ING Bank</span><span class="mock-badge">LOCAL</span></div>
            <div style="font-size:0.62rem; color:#666;">Requires BSN. Takes 5–7 days.</div>
          </div>
          <div class="mock-btn primary">Mark as done ✓</div>
          <div class="mock-btn secondary">Ask AI assistant →</div>
        </div>
      </div>

    </div>
    <div class="notes-panel">
      <div class="note-card">
        <h4>Key Design Decisions</h4>
        <ul>
          <li>Offline-first — entire checklist cached locally on first load</li>
          <li>Mode switcher on home screen avoids separate onboarding flows</li>
          <li>Tasks ordered by urgency, not alphabetically</li>
          <li>AI assistant is a premium upsell within practical moments</li>
        </ul>
      </div>
      <div class="note-card">
        <h4>APIs Firing Here</h4>
        <ul>
          <li>Wise affiliate — bank account recommendations</li>
          <li>Visaguide — registration requirements by nationality</li>
          <li>Claude Haiku — AI assistant for practical Q&A</li>
          <li>Google Places — nearest relevant services</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- SETTLED EXPAT (stub) -->
  <div class="flow-section" id="settled">
    <div class="flow-label">Settled Expat — 6 months+ in city</div>
    <div class="notes-panel">
      <div class="note-card"><h4>Coming Next</h4><ul><li>Discovery feed — events, new venues, local tips</li><li>Community tab unlock (Phase 2)</li><li>Weekend escape guides (premium)</li></ul></div>
    </div>
  </div>

  <!-- SERIAL MOVER -->
  <div class="flow-section" id="serial">
    <div class="flow-label">Serial Mover — Moves every 2–3 years, often corporate</div>
    <div class="screens-row">

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 1</div>
          <div class="screen-title">Your City Vault</div>
          <div class="screen-body" style="margin-bottom:0.5rem;">Every city you've lived in, saved</div>
          <div class="mock-card">
            <div class="card-top"><span class="card-name">🇸🇬 Singapore</span><span class="mock-badge">2019–2021</span></div>
            <div style="font-size:0.62rem; color:#666;">48 saves · 12 recommendations · 3 contacts</div>
          </div>
          <div class="mock-card">
            <div class="card-top"><span class="card-name">🇩🇪 Berlin</span><span class="mock-badge sky">2021–2024</span></div>
            <div style="font-size:0.62rem; color:#666;">61 saves · 8 recommendations · 7 contacts</div>
          </div>
          <div class="mock-card">
            <div class="card-top"><span class="card-name">🇳🇱 Amsterdam</span><span class="mock-badge urgent">Now</span></div>
            <div style="font-size:0.62rem; color:#666;">Setting up · Week 3</div>
          </div>
          <div class="mock-btn secondary" style="margin-top:0.4rem;">+ Add past city</div>
        </div>
      </div>

      <div class="flow-arrow">›</div>

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 2</div>
          <div class="screen-title">Quick-Start Profile</div>
          <div class="screen-body" style="margin-bottom:0.5rem;">Your preferences carry across every move</div>
          <div class="mock-card">
            <div class="card-name" style="margin-bottom:0.3rem;">My preferences</div>
            <div style="font-size:0.62rem; color:#666;">Budget: €2,000–3,000/mo · Walkable · No car needed · Quiet streets · Central European</div>
          </div>
          <div class="mock-card">
            <div class="card-name" style="margin-bottom:0.3rem;">Family</div>
            <div style="font-size:0.62rem; color:#666;">2 adults · 1 child (age 7) · International school preferred</div>
          </div>
          <div class="mock-btn primary">Apply to Amsterdam →</div>
          <div class="mock-btn secondary">Edit preferences</div>
        </div>
      </div>

      <div class="flow-arrow">›</div>

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 3</div>
          <div class="screen-title">Cross-City Compare</div>
          <div class="mock-tabs">
            <div class="mock-tab active">Singapore</div>
            <div class="mock-tab">Berlin</div>
            <div class="mock-tab">Amsterdam</div>
          </div>
          <div class="mock-score-bar">
            <div class="mock-score-label"><span>Cost of living</span><span>7.1</span></div>
            <div class="mock-score-track"><div class="mock-score-fill" style="width:71%; background:var(--terracotta)"></div></div>
          </div>
          <div class="mock-score-bar">
            <div class="mock-score-label"><span>Expat community</span><span>9.4</span></div>
            <div class="mock-score-track"><div class="mock-score-fill" style="width:94%"></div></div>
          </div>
          <div class="mock-score-bar">
            <div class="mock-score-label"><span>International schools</span><span>8.8</span></div>
            <div class="mock-score-track"><div class="mock-score-fill" style="width:88%; background:var(--sky)"></div></div>
          </div>
          <div class="mock-badge premium" style="margin-top:0.5rem; display:block; text-align:center; padding:0.3rem;">Full comparison report — Premium</div>
        </div>
      </div>

      <div class="flow-arrow">›</div>

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 4</div>
          <div class="screen-title">New Move: Spin Up</div>
          <div class="screen-body" style="margin-bottom:0.4rem;">One tap to start a new city research board</div>
          <div class="mock-input">Next city: Dubai 🇦🇪</div>
          <div class="mock-input">Moving: March 2026</div>
          <div class="mock-card">
            <div style="font-size:0.62rem; color:#888;">Applying your saved preferences...</div>
            <div class="mock-bar filled w90" style="margin-top:0.4rem;"></div>
          </div>
          <div class="mock-btn primary">Open Dubai board →</div>
        </div>
      </div>

    </div>
    <div class="notes-panel">
      <div class="note-card">
        <h4>Key Design Decisions</h4>
        <ul>
          <li>City Vault is the core premium retention hook for this user type</li>
          <li>Preferences persist — they never start from scratch</li>
          <li>Cross-city comparison is a powerful decision-making tool for corporate assignments</li>
          <li>B2B play: HR teams and relocation companies could white-label this flow</li>
        </ul>
      </div>
      <div class="note-card">
        <h4>APIs Firing Here</h4>
        <ul>
          <li>Teleport API → city quality scores across all dimensions</li>
          <li>Numbeo → cross-city cost of living comparison</li>
          <li>ISC Research → international school data per city</li>
          <li>Open Exchange Rates → currency context per city</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- RETURNING LOCAL -->
  <div class="flow-section" id="returning">
    <div class="flow-label">Returning Local — Moving back home after years abroad</div>
    <div class="screens-row">

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 1</div>
          <div class="screen-title">Moving back home? 🏠</div>
          <div class="screen-body" style="margin-bottom:0.5rem;">A surprisingly different journey</div>
          <div class="mock-card">
            <div class="card-name" style="margin-bottom:0.2rem;">Returning to London</div>
            <div style="font-size:0.62rem; color:#888;">You've been away since: 2019</div>
          </div>
          <div class="mock-btn primary">Show me what's changed →</div>
          <div class="mock-btn secondary">Re-entry checklist</div>
        </div>
      </div>

      <div class="flow-arrow">›</div>

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 2</div>
          <div class="screen-title">London: What's Changed</div>
          <div class="screen-body" style="margin-bottom:0.4rem;">Since 2019 in your city</div>
          <div class="mock-card">
            <div class="card-top"><span class="card-name">🏘️ Neighbourhoods</span></div>
            <div style="font-size:0.62rem; color:#666;">Peckham and Bermondsey have transformed significantly. New food scenes, higher rents.</div>
          </div>
          <div class="mock-card">
            <div class="card-top"><span class="card-name">🚇 Transport</span></div>
            <div style="font-size:0.62rem; color:#666;">Elizabeth Line opened 2022. Contactless everywhere. Oyster still works.</div>
          </div>
          <div class="mock-card" style="opacity:0.6">
            <div class="card-top"><span class="card-name">Full city change digest</span><span class="mock-badge premium">PREMIUM</span></div>
          </div>
        </div>
      </div>

      <div class="flow-arrow">›</div>

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 3</div>
          <div class="screen-title">Re-Entry Checklist</div>
          <div class="screen-body" style="margin-bottom:0.4rem;">Admin you forget when you've been away</div>
          <div class="mock-check-item"><div class="mock-check"></div>Re-register with NHS GP</div>
          <div class="mock-check-item"><div class="mock-check"></div>Update UK address with HMRC</div>
          <div class="mock-check-item"><div class="mock-check"></div>Renew UK driving licence</div>
          <div class="mock-check-item"><div class="mock-check"></div>Update National Insurance records</div>
          <div class="mock-check-item" style="opacity:0.5"><div class="mock-check"></div>🔒 Pension and financial re-entry guide</div>
          <div class="mock-btn primary" style="margin-top:0.5rem;">Mark as done</div>
        </div>
      </div>

      <div class="flow-arrow">›</div>

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 4</div>
          <div class="screen-title">Rediscover Your City</div>
          <div class="mock-card">
            <div class="card-top"><span class="card-name">New since you left</span><span class="mock-badge">2019→now</span></div>
            <div style="font-size:0.62rem; color:#666;">Restaurants, bars, parks, cultural spots that opened while you were away.</div>
          </div>
          <div class="mock-card">
            <div class="card-top"><span class="card-name">Still here</span><span class="mock-badge sky">Classics</span></div>
            <div style="font-size:0.62rem; color:#666;">The places you loved that are still going strong.</div>
          </div>
          <div class="mock-btn primary">Start exploring →</div>
        </div>
      </div>

    </div>
    <div class="notes-panel">
      <div class="note-card">
        <h4>Key Design Decisions</h4>
        <ul>
          <li>This is an underserved, highly emotional journey — tone should be warm, not transactional</li>
          <li>"What's changed" digest is highly shareable and unique to Movable</li>
          <li>Re-entry admin is genuinely forgotten — this creates real utility</li>
          <li>Excellent PR story: "the app that helps you come home"</li>
        </ul>
      </div>
      <div class="note-card">
        <h4>APIs Firing Here</h4>
        <ul>
          <li>Foursquare → venue open/closed status with date opened</li>
          <li>Google Places → establishment dates where available</li>
          <li>Yelp Fusion → new venue discovery by neighbourhood</li>
          <li>Internal CMS → city change digests, curated editorially</li>
          <li>Anthropic API → AI-generated personalised city digest</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- FAMILY UNIT -->
  <div class="flow-section" id="family">
    <div class="flow-label">Family Unit — Moving with children</div>
    <div class="screens-row">

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 1</div>
          <div class="screen-title">Moving with a family</div>
          <div class="screen-body" style="margin-bottom:0.4rem;">Family lens activated across the whole app</div>
          <div class="mock-card">
            <div class="card-name" style="margin-bottom:0.3rem;">Your family</div>
            <div style="font-size:0.62rem; color:#666;">2 adults · Child age 7 · Child age 4</div>
          </div>
          <div class="mock-tabs" style="margin-top:0.5rem;">
            <div class="mock-tab active">Schools</div>
            <div class="mock-tab">Neighbourhoods</div>
            <div class="mock-tab">Health</div>
            <div class="mock-tab">Activities</div>
          </div>
          <div class="mock-btn primary" style="margin-top:0.4rem;">Find schools in Amsterdam →</div>
        </div>
      </div>

      <div class="flow-arrow">›</div>

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 2</div>
          <div class="screen-title">Schools in Amsterdam</div>
          <div class="mock-tabs">
            <div class="mock-tab active">International</div>
            <div class="mock-tab">State (Dutch)</div>
            <div class="mock-tab">British</div>
          </div>
          <div class="mock-card">
            <div class="card-top"><span class="card-name">Amsterdam International</span><span class="mock-badge">IB</span></div>
            <div style="font-size:0.62rem; color:#666;">Ages 4–18 · English medium · Zuidas area</div>
          </div>
          <div class="mock-card">
            <div class="card-top"><span class="card-name">British School of Amsterdam</span><span class="mock-badge sky">OFSTED</span></div>
            <div style="font-size:0.62rem; color:#666;">Ages 3–18 · English National Curriculum · Amstelveen</div>
          </div>
          <div class="mock-badge premium" style="display:block; text-align:center; margin-top:0.4rem; padding:0.3rem;">Full school reports · Fees · Catchment maps → Premium</div>
        </div>
      </div>

      <div class="flow-arrow">›</div>

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 3</div>
          <div class="screen-title">Family Neighbourhoods</div>
          <div class="screen-body" style="margin-bottom:0.4rem;">Filtered by: family-friendly, near school</div>
          <div class="mock-card">
            <div class="card-top"><span class="card-name">Amstelveen</span><span class="mock-badge">Top family pick</span></div>
            <div class="mock-score-bar" style="margin-top:0.3rem;">
              <div class="mock-score-label"><span>Family score</span><span>9.4</span></div>
              <div class="mock-score-track"><div class="mock-score-fill" style="width:94%"></div></div>
            </div>
            <div style="font-size:0.62rem; color:#666;">Near BSA · Parks · Safe streets</div>
          </div>
          <div class="mock-card">
            <div class="card-top"><span class="card-name">Oud-Zuid</span><span class="mock-badge sky">Central</span></div>
            <div style="font-size:0.62rem; color:#666;">Vondelpark on doorstep. Higher rent.</div>
          </div>
          <div class="mock-btn secondary">Show on map →</div>
        </div>
      </div>

      <div class="flow-arrow">›</div>

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 4</div>
          <div class="screen-title">Family Activities</div>
          <div class="mock-card">
            <div class="card-top"><span class="card-name">NEMO Science Museum</span><span class="mock-badge">Kids 5+</span></div>
            <div style="font-size:0.62rem; color:#666;">Hands-on exhibits. Great for rainy days.</div>
          </div>
          <div class="mock-card">
            <div class="card-top"><span class="card-name">Artis Zoo</span><span class="mock-badge sky">All ages</span></div>
            <div style="font-size:0.62rem; color:#666;">One of Europe's oldest. Planetarium included.</div>
          </div>
          <div class="mock-card">
            <div class="card-top"><span class="card-name">Family expat meetups</span><span class="mock-badge premium">PREMIUM</span></div>
            <div style="font-size:0.62rem; color:#666;">Connect with families at same stage as you</div>
          </div>
        </div>
      </div>

    </div>
    <div class="notes-panel">
      <div class="note-card">
        <h4>Key Design Decisions</h4>
        <ul>
          <li>Family lens is a profile toggle — not a separate app section</li>
          <li>Schools are the #1 anxiety for moving families — lead with it</li>
          <li>Neighbourhood scores are reweighted when family lens is on</li>
          <li>Paediatric health and activities are premium content bundles</li>
        </ul>
      </div>
      <div class="note-card">
        <h4>APIs Firing Here</h4>
        <ul>
          <li>ISC Research → international school directory and data</li>
          <li>GreatSchools API → ratings for state schools (US cities)</li>
          <li>Ofsted API → UK school inspection reports</li>
          <li>Google Places → parks, playgrounds, family venues</li>
          <li>Meetup API → family and parent expat groups</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- CITY MATCH -->
  <div class="flow-section" id="citymatch">
    <div class="flow-label">City Match — viral acquisition quiz, no login required</div>
    <div class="screens-row">

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 1 — Entry</div>
          <div class="screen-title">Find your city</div>
          <div class="screen-body" style="margin-bottom:0.6rem;">5 questions. No login. Shareable results.</div>
          <div class="mock-card" style="text-align:center; padding:0.75rem;">
            <div style="font-size:1.4rem; margin-bottom:0.3rem;">🌍</div>
            <div style="font-size:0.7rem; color:#555; line-height:1.5;">Where in the world should you actually live? Answer 5 questions and find out.</div>
          </div>
          <div class="mock-btn primary">Start the quiz →</div>
          <div style="font-size:0.58rem; color:#aaa; text-align:center; margin-top:0.3rem;">No account needed · Takes 2 minutes</div>
        </div>
      </div>

      <div class="flow-arrow">›</div>

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 2 — Q1 of 5</div>
          <div class="screen-title">What's your climate?</div>
          <div class="mock-card">
            <div class="mock-tab active" style="flex:none; display:block; margin:0.2rem 0; text-align:left; padding:0.4rem 0.6rem; background:var(--terracotta); color:#fff;">☀️ Warm and sunny year-round</div>
            <div class="mock-tab" style="flex:none; display:block; margin:0.2rem 0; text-align:left; padding:0.4rem 0.6rem;">🌤 Mediterranean — hot summers, mild winters</div>
            <div class="mock-tab" style="flex:none; display:block; margin:0.2rem 0; text-align:left; padding:0.4rem 0.6rem;">🍂 Four seasons — I like variety</div>
            <div class="mock-tab" style="flex:none; display:block; margin:0.2rem 0; text-align:left; padding:0.4rem 0.6rem;">❄️ Cool and crisp — I run hot</div>
          </div>
          <div style="font-size:0.58rem; color:#aaa; text-align:center; margin-top:0.4rem;">1 of 5</div>
          <div class="mock-bar filled w20" style="margin-top:0.3rem; background:var(--terracotta);"></div>
        </div>
      </div>

      <div class="flow-arrow">›</div>

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 3 — Q2 of 5</div>
          <div class="screen-title">How do you want to live?</div>
          <div class="mock-card">
            <div class="mock-tab" style="flex:none; display:block; margin:0.2rem 0; text-align:left; padding:0.4rem 0.6rem;">🏙 Big city energy — culture, buzz, opportunity</div>
            <div class="mock-tab active" style="flex:none; display:block; margin:0.2rem 0; text-align:left; padding:0.4rem 0.6rem; background:var(--terracotta); color:#fff;">🌊 Coastal — beach access is non-negotiable</div>
            <div class="mock-tab" style="flex:none; display:block; margin:0.2rem 0; text-align:left; padding:0.4rem 0.6rem;">🏘 Mid-size and manageable — less chaos</div>
            <div class="mock-tab" style="flex:none; display:block; margin:0.2rem 0; text-align:left; padding:0.4rem 0.6rem;">🌲 Near nature — mountains, trails, space</div>
          </div>
          <div style="font-size:0.58rem; color:#aaa; text-align:center; margin-top:0.4rem;">2 of 5</div>
          <div class="mock-bar filled w40" style="margin-top:0.3rem; background:var(--terracotta);"></div>
        </div>
      </div>

      <div class="flow-arrow">›</div>

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 4 — Q3 of 5</div>
          <div class="screen-title">What's your budget?</div>
          <div class="screen-body" style="margin-bottom:0.4rem;">Monthly cost of living (rent + life)</div>
          <div class="mock-card">
            <div class="mock-tab" style="flex:none; display:block; margin:0.2rem 0; text-align:left; padding:0.4rem 0.6rem;">💸 Under €2,000 — affordable is the priority</div>
            <div class="mock-tab" style="flex:none; display:block; margin:0.2rem 0; text-align:left; padding:0.4rem 0.6rem;">💳 €2,000 – €3,500 — comfortable mid-range</div>
            <div class="mock-tab active" style="flex:none; display:block; margin:0.2rem 0; text-align:left; padding:0.4rem 0.6rem; background:var(--terracotta); color:#fff;">💰 €3,500 – €6,000 — quality over cost</div>
            <div class="mock-tab" style="flex:none; display:block; margin:0.2rem 0; text-align:left; padding:0.4rem 0.6rem;">🏦 €6,000+ — budget is not the constraint</div>
          </div>
          <div style="font-size:0.58rem; color:#aaa; text-align:center; margin-top:0.4rem;">3 of 5</div>
          <div class="mock-bar filled w60" style="margin-top:0.3rem; background:var(--terracotta);"></div>
        </div>
      </div>

      <div class="flow-arrow">›</div>

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 5 — Q4 of 5</div>
          <div class="screen-title">Language comfort?</div>
          <div class="mock-card">
            <div class="mock-tab" style="flex:none; display:block; margin:0.2rem 0; text-align:left; padding:0.4rem 0.6rem;">🇬🇧 English-speaking cities only</div>
            <div class="mock-tab active" style="flex:none; display:block; margin:0.2rem 0; text-align:left; padding:0.4rem 0.6rem; background:var(--terracotta); color:#fff;">🌐 High English proficiency is enough</div>
            <div class="mock-tab" style="flex:none; display:block; margin:0.2rem 0; text-align:left; padding:0.4rem 0.6rem;">📚 I'm willing to learn a new language</div>
            <div class="mock-tab" style="flex:none; display:block; margin:0.2rem 0; text-align:left; padding:0.4rem 0.6rem;">🗣 I already speak another language</div>
          </div>
          <div style="font-size:0.58rem; color:#aaa; text-align:center; margin-top:0.4rem;">4 of 5</div>
          <div class="mock-bar filled w80" style="margin-top:0.3rem; background:var(--terracotta);"></div>
        </div>
      </div>

      <div class="flow-arrow">›</div>

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 6 — Q5 of 5</div>
          <div class="screen-title">What matters most?</div>
          <div class="mock-card">
            <div class="mock-tab" style="flex:none; display:block; margin:0.2rem 0; text-align:left; padding:0.4rem 0.6rem;">💼 Career and opportunity</div>
            <div class="mock-tab" style="flex:none; display:block; margin:0.2rem 0; text-align:left; padding:0.4rem 0.6rem;">🎭 Culture, food, and lifestyle</div>
            <div class="mock-tab active" style="flex:none; display:block; margin:0.2rem 0; text-align:left; padding:0.4rem 0.6rem; background:var(--terracotta); color:#fff;">🏔 Outdoors and quality of life</div>
            <div class="mock-tab" style="flex:none; display:block; margin:0.2rem 0; text-align:left; padding:0.4rem 0.6rem;">👨‍👩‍👧 Family, schools, and safety</div>
          </div>
          <div style="font-size:0.58rem; color:#aaa; text-align:center; margin-top:0.4rem;">5 of 5</div>
          <div class="mock-bar filled w90" style="margin-top:0.3rem; background:var(--terracotta);"></div>
          <div class="mock-btn primary" style="margin-top:0.5rem;">See my cities →</div>
        </div>
      </div>

      <div class="flow-arrow">›</div>

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 7 — Results</div>
          <div class="screen-title">Your top cities</div>
          <div class="mock-card">
            <div class="card-top"><span class="card-name">🥇 Lisbon</span><span class="mock-badge urgent">96% match</span></div>
            <div style="font-size:0.6rem; color:#666;">Warm, coastal, mid-range cost, high English</div>
          </div>
          <div class="mock-card">
            <div class="card-top"><span class="card-name">🥈 Valencia</span><span class="mock-badge">91% match</span></div>
            <div style="font-size:0.6rem; color:#666;">Mediterranean coast, affordable, laid-back</div>
          </div>
          <div class="mock-card">
            <div class="card-top"><span class="card-name">🥉 Auckland</span><span class="mock-badge">87% match</span></div>
            <div style="font-size:0.6rem; color:#666;">Coastal, outdoors, English-speaking</div>
          </div>
          <div style="font-size:0.6rem; color:#aaa; text-align:center; margin:0.3rem 0;">+ 2 more cities</div>
          <div class="mock-btn primary">Share my results 🔗</div>
          <div class="mock-btn secondary">Explore Lisbon →</div>
        </div>
      </div>

      <div class="flow-arrow">›</div>

      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="screen-label">Screen 8 — Share Card</div>
          <div class="screen-title">Share your matches</div>
          <div class="mock-card" style="background: linear-gradient(135deg, #1a1a2e 0%, #2a2a4e 100%); color:#f5f0e8; border:none;">
            <div style="font-family:'DM Sans',sans-serif; font-size:0.6rem; letter-spacing:0.1em; text-transform:uppercase; color:var(--terracotta); margin-bottom:0.3rem;">Movable · City Match</div>
            <div style="font-size:0.8rem; font-weight:600; margin-bottom:0.4rem; color:#f5f0e8;">My top cities to live in</div>
            <div style="font-size:0.68rem; color:rgba(245,240,232,0.85); line-height:1.7;">🥇 Lisbon &nbsp; 96%<br>🥈 Valencia &nbsp; 91%<br>🥉 Auckland &nbsp; 87%</div>
            <div style="font-size:0.55rem; color:rgba(245,240,232,0.4); margin-top:0.4rem;">movable.app/citymatch</div>
          </div>
          <div class="mock-btn primary">Copy link</div>
          <div class="mock-btn secondary">Save image</div>
          <div style="font-size:0.58rem; color:#aaa; text-align:center; margin-top:0.3rem;">Recipients land on City Match — not a download page</div>
        </div>
      </div>

    </div>
    <div class="notes-panel">
      <div class="note-card">
        <h4>Key Design Decisions</h4>
        <ul>
          <li>No login at any point — results are immediate and shareable</li>
          <li>Share link opens City Match for the recipient, not the App Store</li>
          <li>Results card uses Movable branding — every share is an impression</li>
          <li>Results must feel surprising and specific — generic = no share</li>
          <li>"Explore [city]" CTA is the conversion moment into the full app</li>
          <li>Quiz lives at movable.app/citymatch — works as web before app download</li>
        </ul>
      </div>
      <div class="note-card">
        <h4>APIs Firing Here</h4>
        <ul>
          <li>Teleport API → city liveability + climate scores for matching</li>
          <li>Numbeo → cost of living filtering</li>
          <li>No Claude API needed — rule-based matching is fast and free</li>
          <li>Native share sheet (iOS/Android) → share card image or URL</li>
        </ul>
      </div>
      <div class="note-card">
        <h4>Viral Mechanics</h4>
        <ul>
          <li>Share card is branded — passive acquisition on every share</li>
          <li>Results feel personal and specific — not "London" for a Londoner</li>
          <li>Link recipients start the quiz, not a download page</li>
          <li>No friction between quiz completion and sharing</li>
        </ul>
      </div>
    </div>
  </div>

</div>

<!-- CITY MATCH TEASER -->
<div class="city-match-teaser">
  <div>
    <div class="city-match-tag">Viral Feature</div>
    <h3>The City Match Tool</h3>
    <p>No login required. Answer 5 questions about your lifestyle, values, and budget. Get your top 5 matched global cities ranked and explained. Designed to be shared. The relocation world's personality quiz — and your top-of-funnel growth engine.</p>
  </div>
  <div style="display:flex; flex-direction:column; gap:0.5rem; min-width:180px;">
    <div class="mock-btn primary" style="display:block; text-align:center; padding:0.7rem; border-radius:10px; font-size:0.85rem; font-weight:500; background:var(--terracotta); color:#fff;">Find my city →</div>
    <div style="font-size:0.72rem; color:rgba(245,240,232,0.4); text-align:center;">No account needed · 2 min · Shareable results</div>
  </div>
</div>

<script>
  function show(id) {
    document.querySelectorAll('.flow-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.user-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    event.target.classList.add('active');
  }
</script>

</body>
</html>
