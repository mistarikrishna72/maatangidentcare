document.addEventListener('DOMContentLoaded', () => {

    /* ===============================
       1. Mobile Menu Toggle
    =============================== */
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');

            const spans = mobileMenuBtn.querySelectorAll('span');
            mobileMenuBtn.classList.toggle('open');

            if (mobileMenuBtn.classList.contains('open')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans.forEach(span => span.style.transform = 'none');
                spans[1].style.opacity = '1';
            }
        });
    }

    // Close mobile menu on link click
    if (mobileNav) {
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                mobileMenuBtn.classList.remove('open');

                const spans = mobileMenuBtn.querySelectorAll('span');
                spans.forEach(span => span.style.transform = 'none');
                spans[1].style.opacity = '1';
            });
        });
    }

    /* ===============================
       2. Scroll Reveal Animation
    =============================== */
    const scrollElements = document.querySelectorAll('.scroll-reveal');

    const elementInView = (el, offset = 1.25) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / offset;
    };

    const revealOnScroll = () => {
        scrollElements.forEach(el => {
            if (elementInView(el)) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    /* ===============================
       3. Appointment Form → WhatsApp
    =============================== */
    const appointmentForm = document.getElementById('appointmentForm');

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validation
            if (name.length < 2) {
                alert('Please enter a valid name.');
                return;
            }

            if (!/^\d{10}$/.test(phone.replace(/\D/g, ""))) {
                alert('Please enter a valid 10-digit phone number.');
                return;
            }

            const submitBtn = appointmentForm.querySelector('button');
            submitBtn.textContent = 'Redirecting to WhatsApp...';
            submitBtn.disabled = true;

            setTimeout(() => {
                const whatsappNumber = "919428412414";

                const whatsappMessage =
`Hello Maatangi Dent Care
New Appointment Request

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Message: ${message || "No message"}

Please confirm my appointment.`;

                const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

                window.open(whatsappURL, "_blank");

                appointmentForm.reset();
                submitBtn.textContent = 'Request Appointment';
                submitBtn.disabled = false;

            }, 800);
        });
    }

    /* ===============================
       4. Navbar Scroll Effect
    =============================== */
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

});


