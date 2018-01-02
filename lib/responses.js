'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _ = require('lodash');
var schemeToObject = require('schema-to-object');

var _require = require('json-comment-parser'),
    stringify = _require.stringify;

var _require2 = require('./constant'),
    RESPONSE = _require2.RESPONSE,
    toJS = _require2.toJS;

module.exports = function () {
  var responses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (_.isEmpty(responses)) return '';
  return ['\n# Responses'].concat(_toConsumableArray(compileResponses(responses))).join('');
};

function compileResponses(responses) {
  return _.map(responses, function (item, key) {
    var responseObj = schemeToObject(toJS(item.body), { comment: true });
    var responseContent = stringify(responseObj, null, 2);
    var compiledResponse = _.template(RESPONSE);
    return compiledResponse({
      scene: key + 1,
      desc: item.description,
      delay: item.mock.delay,
      enableMock: item.mock.enable,
      body: responseContent
    });
  });
}