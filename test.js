const test = require('tape');
const Cipher = require('./index');

test('encoding and decoding work', (t) => {
  const c = new Cipher();
  const orig = 'aSecretMessage';
  const enc = c.encode(orig);
  const dec = c.decode(enc);

  t.equal(dec, orig);
  t.end();
});


test('reusing key and encoding and decoding work', (t) => {
  const c = new Cipher('foo');
  const orig = 'aSecretMessage';
  const enc = c.encode(orig);
  const dec = c.decode(enc);

  const c2 = new Cipher();
  const decWithWrongKey = c2.decode(enc);

  t.equal(dec, orig);
  t.notEqual(decWithWrongKey, orig);
  t.end();
});


