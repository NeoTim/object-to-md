'use strict';

const _ = require('lodash');
const schemeToJSON = require('schema-to-json');
const JSON5 = require('json5');

const { REQUEST, toJS } = require('./constant');

module.exports = (obj = {}) => {
  if (_.isEmpty(obj)) return '';
  return compileRequest(obj);
};

function compileRequest(request) {
  const requestObj = {};
  Object.keys(request).forEach(item => {
    if (_.isEmpty(request[item])) return;
    requestObj[item] = schemeToJSON(toJS(request[item]));
  });

  const requestContent = JSON5.stringify(requestObj, null, 2);
  const compiledRequest = _.template(REQUEST);
  return compiledRequest({ request: requestContent });
}
