# 🌟 Brilliant Adrian - Portfolio Website

Portfolio pribadi **Moch Brilliant Adrian Humur** — Web Developer, Freelancer, dan Professional Driver dari Sidoarjo.

![Version](https://img.shields.io/badge/version-1.0.0-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Security](https://img.shields.io/badge/security-hardened-brightgreen)

---

## ✨ Fitur Utama

- 🌌 **Galaxy Theme** — Background nebula/planet dengan particle constellation interaktif
- 🎨 **RGB Animated Borders** — Border conic-gradient yang berputar (seperti Steam UI)
- 🌐 **Bilingual** — Switcher Bahasa Indonesia / English
- ⚡ **Typing Effect** — Hero section dengan efek ketikan dinamis
- 🛸 **UFO Spotlight** — Transisi section heading dengan efek spotlight UFO
- 📱 **Fully Responsive** — Mobile-first design
- 🔒 **Security Hardened** — CSP, security headers, external link protection
- 🎯 **Smooth Animations** — Reveal on scroll, hover effects, counter animations
- 🎨 **Portfolio Filter** — Filter project by category (Web/App/Design)
- 📧 **Contact Form** — Form kontak dengan validasi

---

## 🚀 Quick Start

### 1. Clone / Download
```bash
git clone https://github.com/MohBrilliantAhs/web_profile.git
cd web_profile
```

### 2. Ganti Foto
Taruh foto kamu di folder `images/`:
- `images/hero.jpg` — Foto hero (paling atas)
- `images/about.jpg` — Foto about section

Lalu update `src` di `index.html`:
```html
<!-- Hero -->
<img src="images/hero.jpg" alt="...">

<!-- About -->
<img src="images/about.jpg" alt="...">
```

### 3. Jalankan
Buka `index.html` di browser. Atau gunakan live server:
```bash
# Jika pakai VS Code
# Install extension: Live Server
# Klik kanan index.html → Open with Live Server
```

---

## 📁 Struktur File

```
web_profile/
├── index.html          # Halaman utama
├── css/
│   └── style.css       # Semua styling
├── js/
│   └── script.js       # Interaksi & animasi
├── images/             # Folder untuk foto (buat sendiri)
│   ├── hero.jpg
│   ├── about.jpg
│   └── portfolio/      # Screenshot project
├── .htaccess           # Security config (Apache)
├── SECURITY.md         # Dokumentasi keamanan
└── README.md           # File ini
```

---

## 🎨 Kustomisasi

### Warna Tema
Edit di `css/style.css`:
```css
:root {
    --green: #2ecc71;           /* Warna aksen utama */
    --green-dark: #27ae60;      /* Hover state */
    --bg-dark: #080b12;         /* Background panel */
    --text: #ffffff;            /* Teks utama */
    --text-muted: #8a95b0;      /* Teks sekunder */
}
```

### Typing Words
Edit di `js/script.js`:
```javascript
const words = ['Web Developer', 'Freelancer', 'Product Advisor', 'Professional Driver'];
```

### Stats Counter
Edit angka di `index.html`:
```html
<h3 class="counter" data-target="5">0</h3>  <!-- Ubah angka 5 -->
```

---

## 🔒 Keamanan

Website ini dilengkapi proteksi:
- ✅ Content Security Policy (CSP)
- ✅ XSS Protection
- ✅ Clickjacking Protection
- ✅ MIME Sniffing Protection
- ✅ External Link Safety (`rel="noopener"`)
- ✅ Form Action Restriction

Lihat detail di [SECURITY.md](SECURITY.md)

---

## 🌐 Deploy

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
Drag & drop folder `web_profile` ke [Netlify Drop](https://app.netlify.com/drop)

### GitHub Pages
1. Push ke GitHub repo
2. Settings → Pages → Source: `main` branch
3. Akses di `https://username.github.io/repo-name`

### Hosting Tradisional (cPanel/FTP)
1. Upload semua file via FTP
2. Pastikan `.htaccess` aktif (Apache)
3. Install SSL certificate (Let's Encrypt gratis)

---

## 📝 Checklist Sebelum Deploy

- [ ] Ganti semua foto placeholder dengan foto asli
- [ ] Update data pribadi (nama, kontak, email)
- [ ] Isi portfolio dengan project nyata
- [ ] Test di berbagai browser (Chrome, Firefox, Safari, Edge)
- [ ] Test responsive di mobile
- [ ] Aktifkan HTTPS/SSL
- [ ] Test security headers di [securityheaders.com](https://securityheaders.com)
- [ ] Uncomment HSTS di `.htaccess` setelah SSL aktif

---

## 🛠️ Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, animations, grid, flexbox
- **Vanilla JavaScript** — No framework, pure JS
- **Font Awesome 6** — Icons
- **Google Fonts** — Poppins font family

---

## 📧 Kontak

**Moch Brilliant Adrian H**
- 📱 WhatsApp: [082142095898](https://wa.me/6282142095898)
- 📧 Email: brilliantmoch@gmail.com
- 💼 LinkedIn: [mochbrilliantah](https://www.linkedin.com/in/mochbrilliantah/)
- 🐙 GitHub: [MohBrilliantAhs](https://github.com/MohBrilliantAhs)
- 📸 Instagram: [jaychanadrian](https://www.instagram.com/jaychanadrian/)

---

## 📄 License

MIT License - bebas digunakan untuk personal maupun komersial (izin dulu lebih baik).

---

**Made with 💚 by Brilliant Adrian**
