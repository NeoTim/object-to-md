'use strict';

const BASIC = `
# Basic

\`\`\`yaml
title: <%= title %>
description: <%= description %>
path: <%= path %>
method: <%= method %>
\`\`\`
`;

const REQUEST = `
# Request

\`\`\`js
<%= request %>
\`\`\`
`;

const RESPONSE = `

## Scene <%= scene %>

\`\`\`yaml
desc: <%= desc %>
mock: <%= enableMock %>
delay: <%= delay %>
\`\`\`

\`\`\`js
<%= body %>
\`\`\`
`;

// 需优化
function toJS(mobxObj) {
  return JSON.parse(JSON.stringify(mobxObj));
}

module.exports = {
  BASIC,
  REQUEST,
  RESPONSE,
  toJS,
};
