// Set this to the address of your landing page (the page your Pinterest pins link to).
// While it still says YOUR-LANDING-PAGE-LINK, the in-app banner stays hidden.
export const LANDING_URL = 'https://mukuhi7.gumroad.com/l/unyrgh';   // your Premium edition page on Gumroad

// Promotion for your paid editions. Leave a field empty ('') to hide that part.
export const PROMO = {
  // Banner shown in the app, under the controls (needs LANDING_URL above to be set).
  appBannerText: 'Want puzzles from any verse in the Bible? The Premium edition has the whole Bible, all 66 books.',
  appBannerButton: 'Get Premium',
  headerButton: 'Get Premium',      // small button in the top bar. Leave '' to hide it
  // Line printed at the bottom of every worksheet. It only prints when printUrlText is filled in.
  printText: 'Want puzzles from any verse in the Bible? Get the Premium edition:',
  printUrlText: 'mukuhi7.gumroad.com/l/unyrgh',   // the address people can type. Leave '' to print no promo line at all
  qrImage: 'qr.png',         // QR code for the same link (public/qr.png). Leave '' for no QR code
  showOnAnswerKey: true      // false = only print it on the puzzle page, not the answer key
};
