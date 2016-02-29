

var util = require("../lib/util");

/* test/my_test.js */
var expect = require('chai').expect;

describe('Util Functions', function () {

  describe('hashToAddr', function() {
    it('hashToAddr is a function', function () {
      expect( (util.hashToAddr)).to.be.a('function');
    });
  });

});
