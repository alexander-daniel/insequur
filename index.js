const ALPHA = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-+=/ ';
const mod = (n, m) => (n % m + m) % m;

class Cipher {

  constructor (key) {
    this.key = key || this.generateKey();
  }

  generateKey() {
    return Array(...Array(100))
    .map(() => ALPHA[Math.floor(Math.random() * ALPHA.length)])
    .join('');
  }

  encode(plainText) {
    return this.xCode(plainText, 1);
  }

  decode(encodedText) {
    return this.xCode(encodedText, -1);
  }

  xCode(inText, sign) {
    const { key } = this;

    // Break up the text into an array of single characters.
    const chars = [ ...inText ];

    // Iterate over and create a new string, replacing each character
    return chars.reduce((processedText, currentCharacter, ii) => {
      const offset = sign * ALPHA.indexOf(key[mod(ii, key.length)]);
      processedText += ALPHA[mod(ALPHA.indexOf(currentCharacter) + offset, ALPHA.length)];
      return processedText;
    }, '');
  }
}

module.exports = Cipher;
