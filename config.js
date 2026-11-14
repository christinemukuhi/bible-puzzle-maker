// Set this to the address of your landing page (the page your Pinterest pins link to).
// While it still says YOUR-LANDING-PAGE-LINK, the in-app banner stays hidden.
export const LANDING_URL = 'https://YOUR-LANDING-PAGE-LINK';

// Promotion for your paid editions. Leave a field empty ('') to hide that part.
export const PROMO = {
  // Banner shown in the app, under the controls (needs LANDING_URL above to be set).
  appBannerText: 'Want puzzles from any Bible passage? The Whole Bible edition is coming.',
  appBannerButton: 'Join the list',
  // Line printed at the bottom of every worksheet. It only prints when printUrlText is filled in.
  printText: 'Want more Bible puzzles?',
  printUrlText: '',          // the address people should type, for example 'yoursite.com/puzzles'
  qrImage: '',               // optional: 'qr.png' once you add a QR code image to the public folder
  showOnAnswerKey: true      // false = only print it on the puzzle page, not the answer key
};
