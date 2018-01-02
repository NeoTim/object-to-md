'use strict';

var _ = require('lodash');
var schemeToObject = require('schema-to-object');

var _require = require('json-comment-parser'),
    stringify = _require.stringify;

var _require2 = require('./constant'),
    REQUEST = _require2.REQUEST,
    toJS = _require2.toJS;

module.exports = function () {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (_.isEmpty(obj)) return '';
  return compileRequest(obj);
};

function compileRequest(request) {
  var requestObj = {};
  Object.keys(request).forEach(function (item) {
    if (_.isEmpty(request[item])) return;
    requestObj[item] = schemeToObject(toJS(request[item]), { comment: true });
  });

  var requestContent = stringify(requestObj, null, 2);

  var compiledRequest = _.template(REQUEST);
  return compiledRequest({ request: requestContent });
}