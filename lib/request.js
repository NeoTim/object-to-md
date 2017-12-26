'use strict';

var _ = require('lodash');
var schemeToJSON = require('schema-to-json');
var JSON5 = require('json5');

var _require = require('./constant'),
    REQUEST = _require.REQUEST,
    toJS = _require.toJS;

module.exports = function () {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (_.isEmpty(obj)) return '';
  return compileRequest(obj);
};

function compileRequest(request) {
  var requestObj = {};
  Object.keys(request).forEach(function (item) {
    if (_.isEmpty(request[item])) return;
    requestObj[item] = schemeToJSON(toJS(request[item]));
  });

  var requestContent = JSON5.stringify(requestObj, null, 2);
  var compiledRequest = _.template(REQUEST);
  return compiledRequest({ request: requestContent });
}