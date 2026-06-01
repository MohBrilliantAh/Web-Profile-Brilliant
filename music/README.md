# 🎵 Background Music

## Cara Pakai

1. **Taruh file musik di folder ini**
   - Nama file: `background.mp3` (atau sesuaikan di `index.html`)
   - Format: MP3, OGG, atau WAV
   - Rekomendasi: Instrumental, Lo-fi, Ambient

2. **Rekomendasi Musik**
   - Durasi: 2-5 menit (akan loop otomatis)
   - Size: < 5MB (agar loading cepat)
   - Volume: Jangan terlalu keras (background music)
   - Genre: Chill, Relaxing, Upbeat (sesuai selera)

3. **Sumber Musik Gratis (Royalty-Free)**
   - [YouTube Audio Library](https://www.youtube.com/audiolibrary)
   - [Pixabay Music](https://pixabay.com/music/)
   - [Free Music Archive](https://freemusicarchive.org/)
   - [Incompetech](https://incompetech.com/music/royalty-free/)
   - [Bensound](https://www.bensound.com/)

4. **Cara Ganti Musik**
   - Hapus file lama
   - Taruh file baru dengan nama `background.mp3`
   - Atau edit `index.html` line ~440:
     ```html
     <source src="music/nama-file-baru.mp3" type="audio/mpeg">
     ```

---

## 🎛️ Kontrol Musik

- **Play/Pause**: Klik tombol musik di kiri bawah
- **Volume**: User bisa adjust di browser (klik kanan audio player)
- **Loop**: Otomatis repeat

---

## ⚠️ Catatan

- Musik tidak akan autoplay (browser policy)
- User harus klik tombol musik untuk mulai
- Pastikan file tidak terlalu besar (< 5MB)
- Test di berbagai browser (Chrome, Firefox, Safari)

---

**File musik belum ada?** Tombol musik tetap muncul, tapi tidak akan play sampai file ditambahkan.
