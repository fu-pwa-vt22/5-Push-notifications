# Pushnotiser
**I denna modul utreder vi vad Pushnotiser är och vad som krävs för att få sådana på plats i din PWA.**

## 5.1 Film: Push notifications - Vad är det?
[Länk till intro om Push notifications](https://vimeo.com/654949483/9ad9aa76cf)

## 5.2 Film: Notification API:et
[Länk till film om lokala notiser med Notifications API:et](https://vimeo.com/654949526/562b804fb9)

I filmen nämner jag att Notification-objektet har många *egenskaper*. Här är några av de vanligaste:

```js 
{
    title : "Hello world",
    icon : "icons/icon.png",
    body : "This is the msg text",
    timestamp : Date.now(),
    vibrate: [100,0,100,0], // pattern Vibration API
    silent: false // no sound or vibration 
}
```

## 5.3 Film: PushEvent
[Länk till film om hur du fångar upp ett pushEvent i service workern](https://vimeo.com/654949584/85b1697124)

## 5.4 Push service & subscribe 
[Länk till film om Push API i en push service, samt hur du registrerar en subscription](https://vimeo.com/654949632/3b07fb6b5c)

## 5.5 Övning: Infoga notiser i Aha!
I denna övning ska du möjliggöra att appen *Aha!* kan visa notiser. Lokala duger, men för extra spänning. Testa skapa och implementera en *push service*