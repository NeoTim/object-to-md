'use strict';

const _ = require('lodash');
const schemeToJSON = require('schema-to-json');
const JSON5 = require('json5');
const { RESPONSE, toJS } = require('./constant');

module.exports = (responses = []) => {
  if (_.isEmpty(responses)) return '';
  return [ '\n# Responses', ...compileResponses(responses) ].join('');
};

function compileResponses(responses) {
  return _.map(responses, (item, key) => {
    const responseObj = schemeToJSON(toJS(item.body));
    const responseContent = JSON5.stringify(responseObj, null, 2);
    const compiledResponse = _.template(RESPONSE);
    return compiledResponse({
      scene: key + 1,
      desc: item.description,
      delay: item.mock.delay,
      enableMock: item.mock.enable,
      body: responseContent,
    });
  });
}
