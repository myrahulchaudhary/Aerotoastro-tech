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

// AddThis social sharing buttons
document.addEventListener('DOMContentLoaded', () => {
  const shareContainer = document.createElement('div');
  shareContainer.className = 'addthis_inline_share_toolbox mt-4';
  const footer = document.querySelector('footer');
  if (footer) {
    footer.appendChild(shareContainer);
  } else {
    document.body.appendChild(shareContainer);
  }

  const addthisScript = document.createElement('script');
  addthisScript.src = 'https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-1234567890';
  addthisScript.async = true;
  document.body.appendChild(addthisScript);
});
