// Service Worker Registration Utility
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration.scope);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New service worker available
                console.log('New service worker available');
                // You can show a notification to the user here
              }
            });
          });
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    });
  }
};

// Install prompt for PWA
export const installPWA = () => {
  let deferredPrompt;
  
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    
    // Show install button or notification
    console.log('PWA install prompt available');
    
    // You can trigger this from a button click
    return deferredPrompt;
  });
  
  return deferredPrompt;
};

