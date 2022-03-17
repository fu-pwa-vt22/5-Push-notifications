const web = require('web-push');

// let keys = web.generateVAPIDKeys();
// console.log(keys);

const KEYS = ''; // INSERT PUBLIC & PRIVATE KEYS from VAPIS keys generator;
const yourEmail = '';

  web.setVapidDetails(
    `mailto:${yourEmail}`,
    KEYS.publicKey,
    KEYS.privateKey
  );

  const sub = // INSERT SUBSCRIBE OBJECT

  web.sendNotification(sub, 'Hello from push service!')