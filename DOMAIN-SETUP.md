# Pointing clubk9.co.uk at Netlify 🌐

## Where things stand today

| | |
|---|---|
| **Registrar** (who you bought it from) | **Freeola** — registered 19 Aug 2023, expires 19 Aug 2027 |
| **DNS** (who answers questions about the domain) | **Wix** — `ns10.wixdns.net`, `ns11.wixdns.net` |
| **Website** | Points at Wix |
| **Email** | Handled by **Freeola** mail servers |

So the domain is *bought* from Freeola but *steered* by Wix. To move the website to
Netlify, you change the **nameservers at Freeola** — that's the one thing Freeola controls.

---

## ⚠️ Do these first, in this order

Moving the domain is the **last** step, not the first.

1. **Publish the site** — say *"publish my changes"*. Everything from August is still unpublished.
2. **Make the site public** — it's currently private, so visitors would be locked out.
3. **Check it over** at the netlify.app address.
4. **Only then** move the domain.

Do it the other way round and clubk9.co.uk points at a private, out-of-date site,
and whatever is on Wix today disappears.

---

## 🚨 The records that MUST be copied across — your email depends on them

Your DNS is moving from Wix to Netlify. Anything not recreated at Netlify **stops working**,
and that includes your email. These are the live values, captured 3 August 2026:

### MX records — where your email goes

| Type | Name | Priority | Value |
|------|------|----------|-------|
| MX | `clubk9.co.uk` | 10 | `mx2.freeola.com` |
| MX | `clubk9.co.uk` | 10 | `mx3.freeola.com` |
| MX | `clubk9.co.uk` | 10 | `mx4.freeola.com` |
| MX | `clubk9.co.uk` | 10 | `mx5.freeola.com` |

All four, all priority 10. Miss one and mail gets unreliable rather than obviously broken,
which is worse — it fails quietly.

### TXT record — stops your outgoing mail being treated as spam

| Type | Name | Value |
|------|------|-------|
| TXT | `clubk9.co.uk` | `v=spf1 include:spf.freeola.net ~all` |

**These go into Netlify BEFORE the nameservers change at Freeola.** Then there's no gap.

---

## What you change at Freeola

Only one thing: the **nameservers**.

1. Log in at **getdotted.com** (Freeola's domain side)
2. Find **clubk9.co.uk** → look for *Nameservers*, *DNS*, or *Domain Settings*
3. Replace the two Wix entries:
   ```
   ns10.wixdns.net
   ns11.wixdns.net
   ```
   with the four Netlify gives us (they look like `dns1.p01.nsone.net` … `dns4.p01.nsone.net`
   — I'll confirm the exact ones)
4. Save

Then it's a waiting game — usually an hour or two, occasionally up to 48.

---

## 📧 About info@clubk9.co.uk

Your email already lives at Freeola, so that's the natural place to set up
`info@clubk9.co.uk` as a forward to your Gmail. Look for *Email* or *Mailboxes*
in your Freeola account.

**One catch worth knowing:** forwarding only gets mail *in*. Reply, and it goes out
from your Gmail address — customers see the personal one. To reply *as*
`info@clubk9.co.uk` you need either Freeola's SMTP details added to Gmail's
"Send mail as", or a proper mailbox such as Google Workspace (~£6/month).

Once it's working, tell me and I'll swap it into the contact section and the form,
which currently use `clubk9rusper@gmail.com`.

---

## A safer alternative, if you'd rather not risk the email

Instead of moving DNS to Netlify, keep the nameservers at Wix and just change the
**A records** there to point at Netlify. Your MX records never get touched, so email
cannot break.

**Downside:** you stay dependent on Wix for DNS, so you can't cancel it entirely.

**My view:** moving to Netlify DNS is the better end state — one less service, one less
bill. Just do it deliberately, with the MX records in place first.
