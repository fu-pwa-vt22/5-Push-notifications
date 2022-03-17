window.addEventListener('load', async () => {
    if('serviceWorker' in navigator){
        try {
            await navigator.serviceWorker.register('serviceworker.js');
        } catch(err) {
            console.error('Whooopsie!', err)
        }
    }
});

// Check permission
async function checkPermission(){
    if(Notification.permission === 'granted'){
        return true;
    } else {
        return false;
    };
};

// Request permissions
async function requestPermission(){
    await Notification.requestPermission();
};

document.querySelector('button')
.addEventListener('click', async () => {
    if(await checkPermission()){
        await subscribe();
    } else {
        await requestPermission();
    }
});

async function subscribe(){
     let sw = await navigator.serviceWorker.ready;
    let sub = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: ''// INSERT PUBLIC KEY FROM PUSH-SERVICE
    });
    console.log(JSON.stringify(sub));
};