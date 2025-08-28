// Placeholder header script to prevent missing file errors
// This script can be extended with actual header functionality as needed.
console.log('header.js loaded');

// Preconnect to external domains to speed up resource fetching
(function () {
  const origins = [
    'https://ik.imagekit.io',
    'https://res.cloudinary.com',
    'https://cdn.tailwindcss.com',
    'https://cdnjs.cloudflare.com'
  ];

  origins.forEach(origin => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = origin;
    document.head.appendChild(link);
  });
})();

// Lazy-load images to reduce initial page weight
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });
});

// Google Analytics tracking
(function () {
  var GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your Google Analytics ID
  var gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
})();
