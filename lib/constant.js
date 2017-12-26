'use strict';

var BASIC = '\n# Basic\n\n```yaml\ntitle: <%= title %>\ndescription: <%= description %>\npath: <%= path %>\nmethod: <%= method %>\n```\n';

var REQUEST = '\n# Request\n\n```js\n<%= request %>\n```\n';

var RESPONSE = '\n\n## Scene <%= scene %>\n\n```yaml\ndesc: <%= desc %>\nmock: <%= enableMock %>\ndelay: <%= delay %>\n```\n\n```js\n<%= body %>\n```\n';

// 需优化
function toJS(mobxObj) {
  return JSON.parse(JSON.stringify(mobxObj));
}

module.exports = {
  BASIC: BASIC,
  REQUEST: REQUEST,
  RESPONSE: RESPONSE,
  toJS: toJS
};