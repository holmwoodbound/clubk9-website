# Club K9 — website

A fun-but-professional one-page website for **Club K9 Dog Day Care**, in a light-brown / khaki / beige colour scheme, with interactive animations.

📍 **Location:** `~/Sites/clubk9-website` (moved here out of Documents so the local preview server works smoothly).

## 📂 What's in here

| File | What it is |
|------|------------|
| `index.html` | The page content — text, sections, contact details |
| `styles.css` | All the colours, fonts and layout |
| `script.js` | The interactive bits — menu, gallery, animations |
| `images/` | Your photos — `hero.jpg`, `mascot.png`, `badge.png`, `jo.jpg`, `dog-01.jpg` … `dog-25.jpg` |

> You never need to touch the code — just **ask me to change something** and I'll do it.

## 👀 How to preview it (with photos!)

The site needs to be **served by a little local web server** so the browser can load the images and styles. Two easy ways:

**Option A — ask me.** Say *"start the preview server"* and I'll run it. Then open **http://localhost:8000** in your browser. Refresh after I make a change.

**Option B — do it yourself.** Open **Terminal** and run:
```
cd ~/Sites/clubk9-website
python3 -m http.server 8000
```
Then open **http://localhost:8000**. Press `Ctrl + C` in Terminal to stop it.

> 💡 Opening `index.html` by double-click also works, but the local server is the most reliable way to see everything exactly as it'll look live.

## ✏️ How to edit it — just ask me

You don't need to touch any code. Tell me things like:

- *"Change the phone number to …"*
- *"Put in our real prices: day care £X, boarding £Y …"*
- *"Swap the sample reviews for these real ones …"*
- *"Make the buttons a bit darker brown"*
- *"Add three more dogs to the gallery"* (pop the new photos in `images/`, or send them to me)

## 🎨 The colour scheme

All colours live at the top of `styles.css` under `:root`. Change one value and it updates across the whole site — or just ask me.

## 🐾 Things to send me when you're ready

A few spots use friendly placeholders, clearly labelled, that you'll want to make real:

- **Pricing** — the £ figures are *examples*. Send me your real rates.
- **TikTok link** — points to `tiktok.com/@clubk9rusper` (a guess). Send me your real one.
- **Facebook & Instagram** — wired to your existing `holmwoodbound` handles. Tell me if you've moved to a Club K9 handle.
- **Reviews** — currently sample quotes. Send me your real ones.
- **Stats numbers** — "10+ years", "250+ happy hounds" etc. — tell me the real figures.

## 🚀 Publishing it (going live)

When you're happy, I can help you put it online. Easiest options:

1. **Netlify Drop** — drag this whole folder onto [app.netlify.com/drop](https://app.netlify.com/drop) → live in seconds (free).
2. **Point your existing web address** (the one currently on Wix) at the new site.
3. **GitHub Pages** — free hosting if you'd like version history.

Just say *"help me publish it"* and I'll walk you through it.
