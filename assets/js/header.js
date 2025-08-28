// Placeholder header script to prevent missing file errors
// This script can be extended with actual header functionality as needed.
console.log('header.js loaded');

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
