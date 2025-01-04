self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");
  // Optionally, cache files here
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activating...");
});

self.addEventListener("fetch", (event) => {
  console.log("Intercepting fetch request for:", event.request.url);
  // Optionally, respond with cached resources
});
