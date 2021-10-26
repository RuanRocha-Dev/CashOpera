const accountSid = "AC5f85a98c65f802fd895fad41dfd8d125";
const authToken = "0289d9f90b78517a3c49eae1d9894d1d";
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+18126083636',
     to: '+5548991896913'
   })
  .then(message => console.log(message.sid));