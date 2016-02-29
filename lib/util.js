module.exports = {
  hashToAddr : hashToAddr
};

var bitcore = require('bitcore-lib');

/**
 * Converts string to hash and to an address
 * @param  {String}  hash         The string to be hashed
 * @param  {boolean} uncompressed Uncompressed or not
 * @return {Object}               Public Key Address
 */
function hashToAddr(hash, uncompressed) {

  var value = new Buffer(hash);
  var h = bitcore.crypto.Hash.sha256(value);
  var bn = bitcore.crypto.BN.fromBuffer(h);
  var privateKey = new bitcore.PrivateKey(bn);


  var wif = bitcore.PrivateKey(bn).toWIF();

  var publicKey1 = new bitcore.PublicKey(privateKey);

  var pointx = publicKey1.point.x.toString('hex');
  var pointy = publicKey1.point.y.toString('hex');

  //padding left
  pointx = String("00000000" + pointx).slice(-64);
  pointy = String("00000000" + pointy).slice(-64);

  var publicKey2 = new bitcore.PublicKey('04' + pointx + pointy);

  var addr1 = publicKey1.toAddress();
  var addr2 = publicKey2.toAddress();

  if (uncompressed) {
    return addr2;
  } else {
    return addr1;
  }

}
