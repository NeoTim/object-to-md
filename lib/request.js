'use strict';

var _ = require('lodash');
var schemeToObject = require('schema-to-object');
var json = require('comment-json');
var clear = require('./clear-json-quotes');

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
    requestObj[item] = schemeToObject(toJS(request[item]));
  });

  var requestContent = clear(json.stringify(requestObj, null, 2));

  var compiledRequest = _.template(REQUEST);
  return compiledRequest({ request: requestContent });
}