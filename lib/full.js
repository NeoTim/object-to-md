'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _ = require('lodash');
var toBasic = require('./basic');
var toRequest = require('./request');
var toResponses = require('./responses');

module.exports = function () {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (_.isEmpty(obj)) return '';
  var basic = obj.basic,
      request = obj.request,
      responses = obj.responses;

  return [toBasic(basic), toRequest(request)].concat(_toConsumableArray(toResponses(responses))).join('');
};