'use strict';

var _ = require('lodash');

var _require = require('./constant'),
    BASIC = _require.BASIC;

module.exports = function () {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (_.isEmpty(obj)) return '';
  return compiledBasic(obj);
};

function compiledBasic(basic) {
  return _.template(BASIC)(basic);
}