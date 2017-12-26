'use strict';

const _ = require('lodash');
const toBasic = require('./basic');
const toRequest = require('./request');
const toResponses = require('./responses');

module.exports = (obj = {}) => {
  if (_.isEmpty(obj)) return '';
  const { basic, request, responses } = obj;
  return [ toBasic(basic), toRequest(request), ...toResponses(responses) ].join(
    ''
  );
};
