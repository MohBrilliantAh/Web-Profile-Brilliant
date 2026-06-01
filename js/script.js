/* ===========================================================
   ROTON Portfolio - Interactive scripts
   =========================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ---------- 0. Language Switcher ---------- */
    const langToggle = document.getElementById('langToggle');
    const langIcon = document.getElementById('langIcon');
    let currentLang = 'id'; // default bahasa Indonesia

    const translations = {
        id: {
            navHome: 'HOME',
            navAbout: 'ABOUT',
            navServices: 'SERVICES',
            navPortfolio: 'PORTFOLIO',
            navProject: 'PROJECT',
            navContact: 'CONTACT',
            heroGreeting: 'HAI SEMUA,',
            heroText: 'Saya Brilliant Adrian, seorang Web Developer muda dari Sidoarjo yang passionate di bidang teknologi web, otomasi, dan digital product. Open to remote work & collaboration!',
            btnHire: 'Hubungi Saya',
            btnWork: 'Lihat Karya',
            aboutHeading: 'Halo, Saya <span>Web Developer</span>',
            aboutName: 'Nama',
            aboutAge: 'Umur',
            aboutAddress: 'Domisili',
            aboutEmail: 'Email',
            aboutStatus: 'Status',
            aboutAvailable: 'Available to Work',
            btnCV: 'Hubungi Saya',
            servicesTitle: 'LAYANAN <span>SAYA</span>',
            service1Title: 'Web Development',
            service1Desc: 'Membangun website profesional dari nol — landing page, company profile, hingga web app sesuai kebutuhan klien.',
            service2Title: 'Remote Work (WFH)',
            service2Desc: 'Siap menerima pekerjaan secara remote / work from home, fleksibel dan komunikatif.',
            service3Title: 'Advisor Product',
            service3Desc: 'Memberikan saran dan konsultasi pengembangan produk digital agar lebih efektif dan tepat sasaran.',
            service4Title: 'Admin Marketplace',
            service4Desc: 'Mengelola toko online di berbagai platform marketplace secara profesional dan terorganisir (WFH).',
            service5Title: 'AI Automation',
            service5Badge: 'Coming Soon',
            service5Desc: 'Otomasi proses bisnis menggunakan kecerdasan buatan untuk meningkatkan efisiensi kerja.',
            service6Title: 'Mini Project Web/App',
            service6Desc: 'Mengerjakan mini project web maupun aplikasi sesuai spesifikasi — cocok untuk tugas, startup, atau MVP.',
            service7Title: 'Driver Pribadi',
            service7Desc: 'Layanan driver pribadi weekend/hari libur. Pengalaman 5 tahun mengemudi manual & matic, 10.000+ KM Jawa-Bali. Berpengalaman membawa Innova Reborn manual segala medan.',
            portfolioTitle: 'PORTOFOLIO <span>SAYA</span>',
            filterAll: 'Semua',
            filterWeb: 'Web',
            filterApp: 'App',
            filterDesign: 'Design',
            projectExpTitle: 'PENGALAMAN <span>PROJECT</span>',
            statProjects: 'Live Projects',
            statClients: 'Happy Clients',
            statExperience: 'Tahun Pengalaman',
            statTech: 'Tech Stack',
            blogTitle: 'KARYA <span>SAYA</span>',
            contactTitle: 'HUBUNGI <span>SAYA</span>',
            contactAddress: 'Domisili',
            contactEmail: 'Email',
            formName: 'Nama Kamu',
            formEmail: 'Email Kamu',
            formSubject: 'Subjek',
            formMessage: 'Pesan Kamu',
            btnSend: 'Kirim Pesan',
            footerText: 'All rights reserved. Made with'
        },
        en: {
            navHome: 'HOME',
            navAbout: 'ABOUT',
            navServices: 'SERVICES',
            navPortfolio: 'PORTFOLIO',
            navProject: 'PROJECT',
            navContact: 'CONTACT',
            heroGreeting: 'HI THERE,',
            heroText: 'I\'m Brilliant Adrian, a young Web Developer from Sidoarjo passionate about web technology, automation, and digital products. Open to remote work & collaboration!',
            btnHire: 'Hire Me',
            btnWork: 'My Work',
            aboutHeading: 'Hello, I Am <span>Web Developer</span>',
            aboutName: 'Name',
            aboutAge: 'Age',
            aboutAddress: 'Address',
            aboutEmail: 'Email',
            aboutStatus: 'Status',
            aboutAvailable: 'Available to Work',
            btnCV: 'Contact Me',
            servicesTitle: 'MY <span>SERVICES</span>',
            service1Title: 'Web Development',
            service1Desc: 'Building professional websites from scratch — landing pages, company profiles, to web apps tailored to client needs.',
            service2Title: 'Remote Work (WFH)',
            service2Desc: 'Ready to accept remote / work from home jobs, flexible and communicative.',
            service3Title: 'Product Advisor',
            service3Desc: 'Providing advice and consultation on digital product development for more effective and targeted solutions.',
            service4Title: 'Marketplace Admin',
            service4Desc: 'Managing online stores on various marketplace platforms professionally and organized (WFH).',
            service5Title: 'AI Automation',
            service5Badge: 'Coming Soon',
            service5Desc: 'Automating business processes using artificial intelligence to improve work efficiency.',
            service6Title: 'Mini Project Web/App',
            service6Desc: 'Working on mini web or app projects according to specifications — suitable for assignments, startups, or MVPs.',
            service7Title: 'Private Driver',
            service7Desc: 'Private driver service for weekends/holidays. 5 years driving experience manual & automatic, 10,000+ KM Java-Bali. Experienced driving Innova Reborn manual all terrain.',
            portfolioTitle: 'MY <span>PORTFOLIO</span>',
            filterAll: 'All',
            filterWeb: 'Web',
            filterApp: 'App',
            filterDesign: 'Design',
            projectExpTitle: 'PROJECT <span>EXPERIENCE</span>',
            statProjects: 'Live Projects',
            statClients: 'Happy Clients',
            statExperience: 'Years Experience',
            statTech: 'Tech Stack',
            blogTitle: 'MY <span>WORKS</span>',
            contactTitle: 'GET IN <span>TOUCH</span>',
            contactAddress: 'Address',
            contactEmail: 'Email',
            formName: 'Your Name',
            formEmail: 'Your Email',
            formSubject: 'Subject',
            formMessage: 'Your Message',
            btnSend: 'Send Message',
            footerText: 'All rights reserved. Made with'
        }
    };

    function switchLanguage(lang) {
        currentLang = lang;
        const t = translations[lang];
        
        // Navbar
        document.querySelectorAll('.nav-links a').forEach((a, i) => {
            const keys = ['navHome', 'navAbout', 'navServices', 'navPortfolio', 'navProject', 'navContact'];
            if (keys[i]) a.textContent = t[keys[i]];
        });
        
        // Hero
        document.querySelector('.hero-greeting').textContent = t.heroGreeting;
        document.querySelector('.hero-text').textContent = t.heroText;
        document.querySelectorAll('.hero-btns .btn')[0].textContent = t.btnHire;
        document.querySelectorAll('.hero-btns .btn')[1].textContent = t.btnWork;
        
        // About - skip section-heading karena ada rotating text
        const aboutLabels = document.querySelectorAll('.about-list li span:first-child');
        aboutLabels[0].textContent = t.aboutName;
        aboutLabels[1].textContent = t.aboutAge;
        aboutLabels[2].textContent = t.aboutAddress;
        aboutLabels[3].textContent = t.aboutEmail;
        aboutLabels[4].textContent = t.aboutStatus;
        document.querySelector('.badge-available').textContent = t.aboutAvailable;
        document.querySelector('.about-info .btn').textContent = t.btnCV;
        
        // Services
        document.querySelector('.services .section-title').innerHTML = t.servicesTitle;
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards[0].querySelector('h3').textContent = t.service1Title;
        serviceCards[0].querySelector('p').textContent = t.service1Desc;
        serviceCards[1].querySelector('h3').textContent = t.service2Title;
        serviceCards[1].querySelector('p').textContent = t.service2Desc;
        serviceCards[2].querySelector('h3').textContent = t.service3Title;
        serviceCards[2].querySelector('p').textContent = t.service3Desc;
        serviceCards[3].querySelector('h3').textContent = t.service4Title;
        serviceCards[3].querySelector('p').textContent = t.service4Desc;
        serviceCards[4].querySelector('h3').innerHTML = t.service5Title + ' <span class="badge-soon">' + t.service5Badge + '</span>';
        serviceCards[4].querySelector('p').textContent = t.service5Desc;
        serviceCards[5].querySelector('h3').textContent = t.service6Title;
        serviceCards[5].querySelector('p').textContent = t.service6Desc;
        serviceCards[6].querySelector('h3').textContent = t.service7Title;
        serviceCards[6].querySelector('p').textContent = t.service7Desc;
        
        // Portfolio
        document.querySelector('.portfolio .section-title').innerHTML = t.portfolioTitle;
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns[0].textContent = t.filterAll;
        filterBtns[1].textContent = t.filterWeb;
        filterBtns[2].textContent = t.filterApp;
        filterBtns[3].textContent = t.filterDesign;
        
        // Project Experience
        document.querySelector('.project-exp-title').innerHTML = t.projectExpTitle;
        const statBoxes = document.querySelectorAll('.stat-box p');
        statBoxes[0].textContent = t.statProjects;
        statBoxes[1].textContent = t.statClients;
        statBoxes[2].textContent = t.statExperience;
        statBoxes[3].textContent = t.statTech;
        
        // Blog
        document.querySelector('.blog .section-title').innerHTML = t.blogTitle;
        
        // Contact
        document.querySelector('.contact .section-title').innerHTML = t.contactTitle;
        const contactItems = document.querySelectorAll('.contact-item h4');
        contactItems[0].textContent = t.contactAddress;
        contactItems[1].textContent = t.contactEmail;
        
        document.querySelector('input[name="name"]').placeholder = t.formName;
        document.querySelector('input[name="email"]').placeholder = t.formEmail;
        document.querySelector('input[name="subject"]').placeholder = t.formSubject;
        document.querySelector('textarea[name="message"]').placeholder = t.formMessage;
        document.querySelector('.contact-form .btn').textContent = t.btnSend;
        
        // Footer
        document.querySelector('.footer p').innerHTML = '&copy; 2026 Mohammad Brilliant <i class="fas fa-galaxy"></i>';
        
        // Update icon
        langIcon.textContent = lang === 'id' ? '🇮🇩' : '🇬🇧';
    }

    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'id' ? 'en' : 'id';
        switchLanguage(newLang);
    });

    // Initialize with Indonesian
    switchLanguage('id');


    /* ---------- 1. Typing effect in hero ---------- */
    const typedEl = document.getElementById('typed');
    const words = ['Web Developer', 'Freelancer', 'Product Advisor', 'Professional Driver'];
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeLoop() {
        const current = words[wordIndex];
        if (deleting) {
            charIndex--;
        } else {
            charIndex++;
        }
        typedEl.textContent = current.substring(0, charIndex);

        let delay = deleting ? 60 : 110;

        if (!deleting && charIndex === current.length) {
            delay = 1600;                 // pause at full word
            deleting = true;
        } else if (deleting && charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            delay = 400;
        }
        setTimeout(typeLoop, delay);
    }
    if (typedEl) typeLoop();


    /* ---------- 2. Mobile menu toggle ---------- */
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-xmark');
        });
    });


    /* ---------- 3. Navbar scroll state + scroll progress + back to top ---------- */
    const navbar = document.getElementById('navbar');
    const progress = document.getElementById('scrollProgress');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = (scrollTop / docHeight) * 100;

        progress.style.width = pct + '%';
        navbar.classList.toggle('scrolled', scrollTop > 40);
        backToTop.classList.toggle('show', scrollTop > 500);

        highlightActiveLink();
    });


    /* ---------- 4. Active nav link based on section in view ---------- */
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = navLinks.querySelectorAll('a');

    function highlightActiveLink() {
        let current = '';
        const offset = window.scrollY + 120;
        sections.forEach(sec => {
            if (offset >= sec.offsetTop) current = sec.id;
        });
        navAnchors.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + current);
        });
    }


    /* ---------- 5. Reveal on scroll (IntersectionObserver) ---------- */
    const revealEls = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealEls.forEach(el => observer.observe(el));


    /* ---------- 6. Portfolio filter ---------- */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            portfolioItems.forEach(item => {
                const match = filter === 'all' || item.dataset.category === filter;
                item.classList.toggle('hide', !match);
            });
        });
    });


    /* ---------- 7. Animated counters ---------- */
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = +el.dataset.target;
            let count = 0;
            const step = Math.max(1, Math.ceil(target / 90));

            const tick = () => {
                count += step;
                if (count >= target) {
                    el.textContent = target.toLocaleString();
                } else {
                    el.textContent = count.toLocaleString();
                    requestAnimationFrame(tick);
                }
            };
            tick();
            counterObserver.unobserve(el);
        });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));


    /* ---------- 8. Contact form (front-end demo) ---------- */
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        feedback.textContent = 'Sending...';
        feedback.style.color = '#9aa0a0';

        setTimeout(() => {
            feedback.textContent = '✓ Thanks! Your message has been sent.';
            feedback.style.color = '#2ecc71';
            form.reset();
        }, 1200);
    });


    /* ---------- 9. Constellation particle background ---------- */
    initConstellation();

    /* ---------- 10. UFO Spotlight effect on section headings ---------- */
    initUFOSpotlight();

    /* ---------- 11. Music Player ---------- */
    initMusicPlayer();
});


/* ===========================================================
   UFO Spotlight + Rotating Text
   =========================================================== */
function initUFOSpotlight() {
    const heading = document.querySelector('.section-heading');
    if (!heading) return;

    const textOptions = heading.querySelectorAll('.text-option');
    if (textOptions.length === 0) return;

    let currentIndex = 0;

    function rotateText() {
        // Remove active from current
        textOptions[currentIndex].classList.remove('active');
        
        // Trigger UFO scan
        heading.classList.add('ufo-scanning');
        
        setTimeout(() => {
            // Move to next
            currentIndex = (currentIndex + 1) % textOptions.length;
            textOptions[currentIndex].classList.add('active');
            
            // Remove UFO class after animation
            setTimeout(() => {
                heading.classList.remove('ufo-scanning');
            }, 1500);
        }, 600);
    }

    // Rotate every 3 seconds
    setInterval(rotateText, 3000);
}


/* ===========================================================
   Music Player
   =========================================================== */
function initMusicPlayer() {
    const musicPlayer = document.getElementById('musicPlayer');
    const bgMusic = document.getElementById('bgMusic');
    const icon = musicPlayer.querySelector('i');
    
    if (!musicPlayer || !bgMusic) return;

    let isPlaying = false;

    // Set volume
    bgMusic.volume = 0.3; // 30% volume (adjust as needed)

    // FORCE autoplay immediately
    setTimeout(() => {
        bgMusic.play()
            .then(() => {
                isPlaying = true;
                icon.classList.remove('fa-music');
                icon.classList.add('fa-pause');
                musicPlayer.classList.add('playing');
                console.log('Music autoplayed successfully');
            })
            .catch(err => {
                console.log('Autoplay blocked by browser, will retry on interaction');
                // Retry on ANY user interaction
                const playOnInteraction = () => {
                    bgMusic.play()
                        .then(() => {
                            isPlaying = true;
                            icon.classList.remove('fa-music');
                            icon.classList.add('fa-pause');
                            musicPlayer.classList.add('playing');
                        })
                        .catch(e => console.log('Play failed:', e));
                    document.removeEventListener('click', playOnInteraction);
                    document.removeEventListener('touchstart', playOnInteraction);
                    document.removeEventListener('keydown', playOnInteraction);
                };
                document.addEventListener('click', playOnInteraction, { once: true });
                document.addEventListener('touchstart', playOnInteraction, { once: true });
                document.addEventListener('keydown', playOnInteraction, { once: true });
            });
    }, 100);

    // Toggle play/pause on button click
    musicPlayer.addEventListener('click', (e) => {
        e.stopPropagation();
        
        if (isPlaying) {
            bgMusic.pause();
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-music');
            musicPlayer.classList.remove('playing');
            isPlaying = false;
        } else {
            bgMusic.play()
                .then(() => {
                    icon.classList.remove('fa-music');
                    icon.classList.add('fa-pause');
                    musicPlayer.classList.add('playing');
                    isPlaying = true;
                })
                .catch(err => console.log('Play failed:', err));
        }
    });
}


/* ===========================================================
   Constellation animated canvas
   =========================================================== */
function initConstellation() {
    const canvas = document.getElementById('constellation');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let particles = [];
    let w, h;

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', () => {
        resize();
        buildParticles();
    });

    function buildParticles() {
        const count = Math.min(110, Math.floor((w * h) / 14000));
        particles = [];
        // mix of white stars and green/blue tinted ones
        const colors = [
            'rgba(255,255,255,0.8)',
            'rgba(46,204,113,0.7)',
            'rgba(100,160,255,0.6)',
            'rgba(200,180,255,0.5)',
        ];
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                r: Math.random() * 1.6 + 0.4,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }
    }
    buildParticles();

    const mouse = { x: null, y: null };
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener('mouseout', () => { mouse.x = null; mouse.y = null; });

    function draw() {
        ctx.clearRect(0, 0, w, h);

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });

        // connect close particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const a = particles[i], b = particles[j];
                const dist = Math.hypot(a.x - b.x, a.y - b.y);
                if (dist < 110) {
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.strokeStyle = `rgba(46, 204, 113, ${0.15 * (1 - dist / 110)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
            // connect to mouse
            if (mouse.x !== null) {
                const a = particles[i];
                const dist = Math.hypot(a.x - mouse.x, a.y - mouse.y);
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(46, 204, 113, ${0.28 * (1 - dist / 150)})`;
                    ctx.lineWidth = 0.7;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(draw);
    }
    draw();
}
