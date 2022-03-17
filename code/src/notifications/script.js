// 1. check permission
async function checkPermission(){
    if(Notification.permission === 'granted'){
        // Honk and drive
        return true;
    } else {
        // Fråga om lov
        return false;
    };
};

// 2. request permission
async function requestPermission(){
    let resp = await Notification.requestPermission();
    console.log(resp);
}

document.querySelector('button')
.addEventListener('click', async () => {

    if(await checkPermission()){
        // Send notification
        showNotification('Hejsan hoppsan!');
        
    } else {
        await requestPermission();
    }
})

// 3. show notifications
function showNotification(msg){
    new Notification('ZoCom PWA says', {
        icon: 'icons/icon-96.png',
        body: msg
    })
}