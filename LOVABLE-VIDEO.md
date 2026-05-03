## Propria — Product Video on Marketing Homepage

### Context
A 60-second Hyperframes video composition exists at `/video/propria-intro/index.html`. It needs to be rendered to MP4 and embedded prominently on the marketing homepage. The video is the single most compelling sales asset — it shows the problem (spreadsheet hell), the solution (one-click reports), the dashboard, and the "21 hours recovered" moment.

The marketing site is at `/src/views/Marketing.tsx` with CSS at `/src/views/Marketing.css`. Read `/CLAUDE.md` for brand rules.

### Step 1: Render the Video

```bash
cd video/propria-intro
npm install
npx hyperframes render
```

This produces an MP4 in `video/propria-intro/renders/`. Copy it to `public/propria-intro.mp4`.

If Hyperframes rendering isn't available in the Lovable environment, use the composition HTML as a reference and create the video externally, then place the MP4 at `public/propria-intro.mp4`.

### Step 2: Add Video to the Hero Section

The current hero has a two-column grid: headline on the left, NRI Compass card on the right. Replace the NRI Compass card with the video.

**Current hero-inner layout:**
```
grid-template-columns: 1fr 420px
[Headline + CTA]  [NRI Compass Card]
```

**New hero-inner layout:**
```
grid-template-columns: 1fr 520px
[Headline + CTA]  [Video Player]
```

The video player should look like this:

```html
<div class="hero-video">
  <!-- Browser chrome frame (same pattern as the Praeco site preview) -->
  <div class="hero-video-chrome">
    <div class="hero-video-dots">
      <span></span><span></span><span></span>
    </div>
    <div class="hero-video-url">propria.app</div>
  </div>
  <!-- Video -->
  <video 
    src="/propria-intro.mp4" 
    autoplay 
    muted 
    loop 
    playsinline
    poster="/propria-poster.jpg"
  />
</div>
```

CSS for the video player:
```css
.hero-video {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  border: 1px solid rgba(245,240,232,0.12);
}
.hero-video-chrome {
  background: #2A2A2A;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.hero-video-dots {
  display: flex;
  gap: 5px;
}
.hero-video-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.hero-video-dots span:nth-child(1) { background: #FF5F57; }
.hero-video-dots span:nth-child(2) { background: #FEBC2E; }
.hero-video-dots span:nth-child(3) { background: #28C840; }
.hero-video-url {
  flex: 1;
  background: #1A1A1A;
  border-radius: 5px;
  padding: 4px 12px;
  font-family: var(--sans);
  font-size: 12px;
  color: #999;
}
.hero-video video {
  width: 100%;
  display: block;
}
```

The video autoplays muted and loops — standard for SaaS hero videos. The browser chrome frame matches the pattern already used in the Praeco site preview.

### Step 3: Move the NRI Compass Card

Don't delete the NRI Compass card — move it into the "NRI Intelligence" section further down the page. It becomes the right-column element of the NRI section (replacing or supplementing the existing NRI signals card there).

### Step 4: Add a "Watch the Demo" Link

Below the hero CTA buttons ("Request a demo" + "See the platform"), add a third option:

```html
<a class="btn-video" onclick="scrollTo('video-section')">
  <svg><!-- play icon --></svg>
  Watch the 60-second overview
</a>
```

Style: no background, terra-light text, play triangle icon, same font as btn-ghost. Sits below the two existing CTAs.

### Step 5: Add a Standalone Video Section

Add a new section between the "What Sets Propria Apart" feature grid and the product showcase slider. This is for users who scroll past the hero.

```
Section background: var(--parchment)
Eyebrow: SEE IT IN ACTION (terra)
Title: 60 seconds. Everything you need to know.

[Full-width video player — same browser chrome frame, 
 but larger. Max-width 900px, centered. Click to play 
 with sound, shows play button overlay on first load.]
```

This instance of the video should NOT autoplay — it shows a poster frame with a centered play button. On click, it plays with sound.

```css
.video-section-player {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 48px rgba(0,0,0,0.1);
  cursor: pointer;
}
.video-section-player .play-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(27,58,45,0.4);
  transition: opacity 0.3s;
}
.video-section-player .play-btn {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--terra);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(184,92,56,0.4);
}
.video-section-player .play-btn svg {
  width: 28px;
  height: 28px;
  fill: var(--parchment);
  margin-left: 4px; /* visual centering for play triangle */
}
```

### Step 6: Generate a Poster Frame

Capture a still frame from the video at the 28-second mark (the dashboard preview scene) and save it as `public/propria-poster.jpg`. This is the poster image shown before the video plays.

If Hyperframes snapshot is available:
```bash
cd video/propria-intro
npx hyperframes snapshot --time 28 --output ../public/propria-poster.jpg
```

Otherwise, render the video first and extract a frame with ffmpeg:
```bash
ffmpeg -i propria-intro.mp4 -ss 28 -frames:v 1 propria-poster.jpg
```

### Mobile Behavior

On mobile (< 768px):
- Hero: video goes full-width below the headline (stacks vertically, same as the current card)
- The video section player also goes full-width with reduced padding
- Autoplay + muted + loop still works on mobile (playsinline attribute handles iOS)
- The play overlay on the standalone section uses a smaller play button (60px)

### What NOT To Do
- Do NOT use a YouTube or Vimeo embed — host the MP4 directly
- Do NOT add custom video player controls — use the browser chrome frame as decoration, native controls on hover
- Do NOT change the hero headline or any other existing content
- Do NOT add the video to any other page besides the marketing site
- Do NOT lazy-load the hero video — it should load immediately (it's the first thing visitors see)
- Do NOT compress the video below 1080p — quality matters for a product demo
