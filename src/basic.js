'use strict';

const _ = require('lodash');

const { BASIC } = require('./constant');

module.exports = (obj = {}) => {
  if (_.isEmpty(obj)) return '';
  return compiledBasic(obj);
};

function compiledBasic(basic) {
  return _.template(BASIC)(basic);
}
