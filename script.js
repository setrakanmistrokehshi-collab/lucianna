/* =========================
   Mobile Menu
========================= */
const hamburger = document.querySelector(".hamburger");
const nav = document.getElementById("nav");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburger.textContent = nav.classList.contains("active") ? "✕" : "☰";
  });

  // Close menu when clicking a link
  document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      hamburger.textContent = "☰";
    });
  });
}

/* =========================
   Header scroll effect
========================= */
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 50);
  }
});

/* =========================
   Scroll reveal animation
========================= */
const reveals = document.querySelectorAll(".reveal");

if (reveals.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.2 });

  reveals.forEach(el => observer.observe(el));
}

/* =========================
   Testimonial slider
========================= */
let slideIndex = 0;
const slider = document.getElementById("testimonialSlider");

if (slider && slider.children.length > 0) {
  const testimonials = slider.children;

  function slide() {
    slideIndex = (slideIndex + 1) % testimonials.length;
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  setInterval(slide, 5000);
}

/* =========================
   Gallery images
========================= */
const galleryImages = [
  {
    src: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
    alt: "Assorted colorful cupcakes in Nigerian bakery showcase"
  },
  {
    src: "https://images.pexels.com/photos/15307374/pexels-photo-15307374.jpeg",
    alt: "Rich chocolate layered cake with fresh mint"
  },
  {
    src: "https://images.pexels.com/photos/6990073/pexels-photo-6990073.jpeg",
    alt: "Elegant strawberry shortcake with glossy finish"
  },
  {
    src: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
    alt: "Assorted premium cupcakes in bakery display"
  },
  {
    src: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&auto=format&fit=crop",
    alt: "Premium cupcakes close-up"
  },
  {
    src: "https://images.unsplash.com/photo-1706463996554-6c6318946b3f?w=800&auto=format&fit=crop",
    alt: "Luxury cake presentation"
  },
  {
    src: "https://images.unsplash.com/photo-1668574380060-2c16ebe758e2?w=800&auto=format&fit=crop",
    alt: "Decorated celebration cake"
  }
];

const grid = document.getElementById("galleryGrid");

if (grid) {
  galleryImages.forEach(item => {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.loading = "lazy";
    grid.appendChild(img);
  });
}

/* =========================
   Contact form (WhatsApp)
========================= */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById("submitBtn");
    const originalText = submitBtn.innerHTML;

    // Loading state
    submitBtn.innerHTML = "Opening WhatsApp...";
    submitBtn.disabled = true;

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !message) {
      alert("Please fill all fields");
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      return;
    }

    const text = encodeURIComponent(
      `Hello Luciana Home of Cakes!\n\n` +
      `Name: ${name}\n` +
      `WhatsApp: ${phone}\n\n` +
      `Message:\n${message}`
    );

    window.open(
      `https://wa.me/2347065346336?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );

    // Reset button
    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      alert("✅ Message sent! WhatsApp should open now.");
    }, 2000);
  });
}