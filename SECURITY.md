# Security Features - Brilliant Adrian Portfolio

## Proteksi Keamanan yang Diterapkan

### 1. **Content Security Policy (CSP)**
Mencegah XSS (Cross-Site Scripting) attacks dengan membatasi sumber konten yang diizinkan:
- Script hanya dari domain sendiri dan CDN terpercaya
- Style hanya dari domain sendiri dan Google Fonts
- Image dari domain sendiri dan HTTPS
- Frame hanya dari domain sendiri (mencegah clickjacking)

### 2. **HTTP Security Headers**
- `X-Content-Type-Options: nosniff` - Mencegah MIME type sniffing
- `X-Frame-Options: SAMEORIGIN` - Mencegah clickjacking attacks
- `X-XSS-Protection: 1; mode=block` - Browser XSS filter aktif
- `Referrer-Policy: strict-origin-when-cross-origin` - Kontrol informasi referrer
- `Permissions-Policy` - Menonaktifkan akses geolocation, microphone, camera

### 3. **External Link Protection**
Semua link eksternal menggunakan:
- `target="_blank"` - Buka di tab baru
- `rel="noopener"` - Mencegah window.opener exploitation
- `rel="noreferrer"` (optional) - Tidak mengirim referrer ke situs eksternal

### 4. **Form Security**
- `form-action 'self'` - Form hanya bisa submit ke domain sendiri
- Input validation di client-side
- Placeholder untuk integrasi backend validation

### 5. **No Inline Event Handlers**
Tidak ada `onclick`, `onerror`, dll di HTML - semua event handler via JavaScript terpisah.

### 6. **HTTPS Only**
- Semua external resources (fonts, icons) dari HTTPS
- Image placeholder dari HTTPS (Unsplash)

---

## Rekomendasi Tambahan (Server-Side)

Jika deploy ke hosting/server, tambahkan di `.htaccess` (Apache) atau `nginx.conf`:

### Apache (.htaccess)
```apache
# Security Headers
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
    Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"
    Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self';"
</IfModule>

# Force HTTPS
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

# Disable directory listing
Options -Indexes

# Protect sensitive files
<FilesMatch "^\.">
    Order allow,deny
    Deny from all
</FilesMatch>
```

### Nginx (nginx.conf)
```nginx
# Security Headers
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self';" always;

# Force HTTPS
if ($scheme != "https") {
    return 301 https://$host$request_uri;
}

# Disable directory listing
autoindex off;
```

---

## Checklist Keamanan

- ✅ CSP aktif
- ✅ Security headers lengkap
- ✅ External links aman (noopener)
- ✅ No inline event handlers
- ✅ HTTPS untuk semua resources
- ✅ Form action terbatas
- ⚠️ **Backend validation** (jika ada form submit ke server)
- ⚠️ **Rate limiting** (jika ada API/backend)
- ⚠️ **SSL Certificate** (saat deploy production)

---

## Testing Security

Gunakan tools berikut untuk test keamanan website:
1. **Mozilla Observatory** - https://observatory.mozilla.org/
2. **Security Headers** - https://securityheaders.com/
3. **SSL Labs** - https://www.ssllabs.com/ssltest/

---

**Catatan:** Keamanan adalah proses berkelanjutan. Selalu update dependencies dan monitor security advisories.
