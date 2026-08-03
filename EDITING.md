# Editing the site yourself 🐾

Two different jobs, two different levels of difficulty.

---

## 📸 Photos — genuinely easy, no code at all

**The trick: give your new photo the same filename as the old one.**

Every photo lives in the `images` folder. The page doesn't care what the picture *is* — it just asks for a file by name. So if you save a new photo over `dog-02.jpg`, the new one appears in its place. Nothing else to change.

### How to do it

1. Open **Finder** → go to `Sites` → `clubk9-website` → `images`
2. Find the photo you want to replace (see the list below)
3. Rename your new photo to **exactly** the same name, including the `.jpg`
4. Drag it in and choose **Replace**
5. Refresh the site

> ⚠️ Keep the extension the same. A `.jpg` must be replaced by a `.jpg`. If yours is a `.png` or `.HEIC`, open it in **Preview** → **File** → **Export** → choose JPEG.

> 💡 Resize big photos first. Phone photos are often 4000px wide, which makes the site slow. In **Preview**: **Tools** → **Adjust Size** → set the width to about **1200** pixels.

### Where each photo appears

**The top of the page**
| File | Where |
|---|---|
| `drone.mp4` | The video playing behind the headline |
| `drone-poster.jpg` | The still shown while the video loads |
| `badge.png` | Your logo — header, hero and footer |

**About Club K9 — the four cards**
| File | Card |
|---|---|
| `hero.jpg` | Acres to explore |
| `dog-01.jpg` | A small, happy pack |
| `dog-12.jpg` | Rain or shine |
| `dog-20.jpg` | Home from home |
| `mascot.png` | Bear, beside the tick list |

**Seven ways we spoil them**
| File | Card |
|---|---|
| `dog-02.jpg` | Doggy Day Care |
| `dog-21.jpg` | Luxury Boarding |
| `dog-06.jpg` | Dog Walking |
| `dog-17.jpg` | Puppy Training |
| `dog-09.jpg` | Dog Photography |
| `dog-14.jpg` | K9-iQ Enrichment |
| — | Cat Feeding has no photo yet |

**How it works**
| File | Step |
|---|---|
| `jo.jpg` | Come for a meet & greet |
| `dog-23.jpg` | Book a free trial session |
| `dog-19.jpg` | Join the club |

**Customer reviews — the round faces**
`dog-04.jpg` Icon · `dog-08.jpg` Uli · `dog-13.jpg` Amy-Jo · `dog-16.jpg` Suzanne · `dog-11.jpg` Caroline · `dog-25.jpg` Clare

**The big photo bands**
| File | Where |
|---|---|
| `hero.jpg` | "Acres to call their own" |
| `jo.jpg` | "Hi, I'm Jo" |
| `woof-bus-rear.jpg` | The Woof Bus strip, and the top of the Woof Bus page |
| `woof-bus-interior.jpg` | "Let's look inside" |
| `woof-bus-plate.jpg` | "Pick-up & drop-off" |

**The Crew gallery** shows all 25 `dog-01.jpg` … `dog-25.jpg`. Replacing any of those changes both the gallery and wherever else that photo is used above.

---

## ✏️ Wording — doable, but take a little care

All the words live in **`index.html`** (the main page) and **`woof-bus.html`**.

### How to do it

1. Right-click `index.html` in Finder → **Open With** → **TextEdit**
2. Use **Edit → Find** to search for the words you want to change
3. Change only the words **between** the angle brackets
4. **Save**, then refresh the site

### What's safe and what isn't

✅ **Safe** — the ordinary words:

```
<h3>Doggy Day Care</h3>
      ↑ change this bit only
```

❌ **Leave alone** — anything inside `< >`:

```
<h3>  </h3>  <p>  </p>  <li>  </li>  class="..."  src="..."
```

If you delete one of those by accident the layout can break. The fix is easy — tell me and I'll put it right, since every version is saved.

### Look for the notes I've left you

I've put reminders in the file at the spots you're most likely to want to change:

```
<!-- EDIT: send me a cat photo and I'll drop it in here -->
```

Anything starting `<!--` is a note to you and never shows on the website.

---

## 🤔 Which should you actually do?

| Job | Best approach |
|---|---|
| Swapping a photo | **Do it yourself** — genuinely easy |
| Fixing a typo, changing a price | **Do it yourself**, or ask me |
| New section, new page, layout changes | **Ask me** |
| Anything you're unsure about | **Ask me** — no risk of breaking it |

---

## 🚦 One important thing about publishing

Editing files on your Mac changes what **you** see. It does **not** change the live website.

To publish, the changes have to be sent to GitHub, which triggers Netlify to rebuild. **Each rebuild costs 15 of your 300 monthly Netlify credits — about 20 publishes a month.**

So: make several changes, then ask me to publish them all in one go. One publish costs the same whether it contains one change or fifty.

Just say **"publish my changes"** when you're ready.
