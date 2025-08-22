// /cyklus-vydavkov/sw.js
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  clients.claim();
});
// Nechávame sieť bez cache logiky; iOS len potrebuje, aby SW existoval.
