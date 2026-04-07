# 🔗 Link Shortener

A clean and minimal URL shortener web app built with vanilla HTML, CSS, and JavaScript. Paste any long URL and instantly get a shortened version.

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Page structure |
| **CSS3** | Styling, gradient background, responsive layout |
| **JavaScript** | URL shortening logic, DOM manipulation |

---

## 📁 Project Structure

```
link-shortener/
├── index.html    # Main HTML file
├── style.css     # Stylesheet with responsive design
└── script.js     # Shortening logic
```

---

## ✨ Features

- Paste any long URL and generate a short code instantly
- Clickable shortened link that opens the original URL in a new tab
- Input validation — alerts user if the field is empty
- Smooth hover transitions on button and input focus
- Fully responsive card layout

---

## ⚙️ How It Works

1. User enters a long URL in the input field
2. On clicking **Shorten URL**, a random 5-character code is generated using `Math.random()`
3. The shortened URL is displayed as a clickable link in the result box
4. Clicking the link opens the original URL in a new tab

---

## 🚀 Getting Started

No dependencies or build tools required — just open in a browser.

```bash
git clone https://github.com/your-username/link-shortener.git
cd link-shortener
open index.html
```

---

## 🔮 Future Improvements

- [ ] **Backend integration** — Store and resolve short URLs using Node.js + a database (e.g. MongoDB)
- [ ] **Copy to clipboard button** — One-click copy of the shortened link
- [ ] **Custom aliases** — Let users define their own short code (e.g. `/my-link`)
- [ ] **Link history** — Show previously shortened URLs in the session
- [ ] **QR code generation** — Auto-generate a QR code for each shortened link
- [ ] **Link expiry** — Set an expiration date for shortened URLs
- [ ] **Analytics** — Track click counts for each shortened link
- [ ] **Deploy on Vercel/Netlify** — Make the app publicly accessible

---

## 📄 License

This project is open source and free to use for learning and personal projects.
