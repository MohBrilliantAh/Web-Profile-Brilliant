# 🧪 Testing Checklist

Buka `index.html` di browser dan cek:

## ✅ Visual & Layout
- [ ] Website muncul dengan background galaxy (gradasi ungu/biru/hijau)
- [ ] Navbar ada di atas dengan logo "BRILLIANT" dan menu
- [ ] Tombol bendera 🇮🇩 ada di navbar kanan
- [ ] Hero section: foto dengan border RGB berputar
- [ ] Teks "HAI SEMUA, I Am Web Developer" muncul

## ✅ Rotating Text (About Section)
- [ ] Scroll ke About section
- [ ] Lihat heading "Halo, Saya Web Developer"
- [ ] Tunggu 3 detik → teks berubah jadi "Halo, Saya Professional Driver"
- [ ] Efek spotlight UFO muncul saat ganti teks
- [ ] Loop terus setiap 3 detik

## ✅ Data Pribadi
- [ ] About section: Nama, Umur, Domisili, Email, Status
- [ ] **TIDAK ADA** baris "No. HP"
- [ ] Badge "Available to Work" inline (tidak turun ke bawah)
- [ ] Button "Hubungi Saya" (bukan "Download CV")

## ✅ Services
- [ ] 7 service cards muncul
- [ ] Card terakhir: "Driver Pribadi" dengan icon mobil

## ✅ Contact Section
- [ ] **TIDAK ADA** baris "No. HP / WA"
- [ ] Hanya ada: Domisili dan Email
- [ ] Social links: GitHub, LinkedIn, Instagram, WhatsApp, Email
- [ ] Form contact ada

## ✅ Music Player
- [ ] Tombol musik 🎵 di kiri bawah (floating)
- [ ] Hover → tooltip "Play Music"
- [ ] Klik → icon berubah jadi pause
- [ ] Klik lagi → pause (jika musik sudah ditambahkan)

## ✅ Language Switcher
- [ ] Klik bendera 🇮🇩 → berubah jadi 🇬🇧
- [ ] Semua teks berubah ke English
- [ ] Klik lagi → kembali ke Indonesia

## ✅ Interaksi
- [ ] Klik "Hubungi Saya" → scroll smooth ke Contact
- [ ] Hover service card → animasi naik
- [ ] Scroll → elemen muncul dengan animasi
- [ ] Portfolio filter berfungsi (All/Web/App/Design)

---

## 🐛 Jika Ada Masalah

**Website tidak muncul / blank:**
1. Buka Console (F12)
2. Lihat tab "Console" untuk error
3. Screenshot error dan kirim ke saya

**Rotating text tidak jalan:**
1. Refresh browser (Ctrl+F5)
2. Cek Console untuk error JavaScript
3. Pastikan file `js/script.js` ter-load

**Musik tidak ada:**
- Normal! Musik belum ditambahkan
- Tombol tetap muncul, tapi tidak akan play
- Tambahkan file `music/background.mp3` untuk aktifkan

**Form tidak kirim:**
- `mailto:` akan buka email client (Outlook/Gmail)
- Ini behavior normal
- User harus klik Send di email client

---

## 📸 Screenshot Test

Ambil screenshot:
1. Hero section (foto + border RGB)
2. About section (rotating text)
3. Contact section (tanpa No. HP)
4. Music player button (kiri bawah)

Kirim ke saya jika ada yang tidak sesuai!
