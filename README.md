# insequur
A very simple cipher module. I wanted to learn a bit about the Caesar cipher and basic substitution ciphers, and this is the result.

**Goes without saying, but this is not to be used for any serious security.**

Only supports the following characters:
```
abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-+=/
```

## install
```bash
npm i insequur
# or
yarn add insequur
```

## usage
```js
const Cipher = require('insequur');
const cipher = new Cipher('mySuperSecretKey');

// The message we wish to make secret
const message = 'Here be a message';

// Encode the string using our cipher
const encodedMessage = cipher.encode(message);

// We get back an encrypted string
console.log(encodedMessage) // => 'TC9yofvRebDiL2eEq'

// Decode that encrypted string with the correct cipher
const decodedMessage = cipher.decode(encodedMessage);

// The message is readable
console.log(decodedMessage) // => 'Here be a message';

// Now let's try to decode with the wrong cipher secret
const wrongCipher = new Cipher('theWrongKey');

// We don't get our original result back.
console.log(wrongCipher.decode(encodedMessage)); // => 'Av5S=7iLK=f5EYync'
```
