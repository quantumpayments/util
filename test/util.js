

var util = require("../lib/util");

/* test/my_test.js */
var expect = require('chai').expect;

describe('Util Functions', function () {

  describe('hashToAddr', function() {
    
    it('hashToAddr is a function', function () {
      expect( (util.hashToAddr)).to.be.a('function');
    });

    it('hashToAddr hashes uncompressed correctly', function () {
      expect(util.hashToAddr('test', true).toString()).to.equal('1HKqKTMpBTZZ8H5zcqYEWYBaaWELrDEXeE');
    });

    it('hashToAddr hashes compressed correctly', function () {
      expect(util.hashToAddr('test').toString()).to.equal('19eA3hUfKRt7aZymavdQFXg5EZ6KCVKxr8');
    });

  });

});
