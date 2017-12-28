'use strict';

const _ = require('lodash');
const schemeToObject = require('schema-to-object');
const json = require('comment-json');

const { REQUEST, toJS } = require('./constant');

module.exports = (obj = {}) => {
  if (_.isEmpty(obj)) return '';
  return compileRequest(obj);
};

function compileRequest(request) {
  const requestObj = {};
  Object.keys(request).forEach(item => {
    if (_.isEmpty(request[item])) return;
    requestObj[item] = schemeToObject(toJS(request[item]));
  });

  const requestContent = json.stringify(requestObj, null, 2);

  const compiledRequest = _.template(REQUEST);
  return compiledRequest({ request: requestContent });
}
