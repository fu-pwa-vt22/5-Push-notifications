self.addEventListener('install', (e) => {
    console.log('Service workers is installing...');
})

self.addEventListener('activate', () => {
    console.log('Service worker is now activated.')
})

self.addEventListener('push', (pushEvent) => {
    self.registration.showNotification('ZoCom PWA says', {
        icon: 'icons/icon-96.png',
        body: pushEvent.data.text()
    });
});