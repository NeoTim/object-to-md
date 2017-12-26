'use strict';

const objectToMd = require('../lib');
// const basic = require('./basic.json');
// const request = require('./request.json');
// const responses = require('./responses.json');
const full = require('./full.json');

const f = data => JSON.stringify(data, null, 2);

// const r = f(objectToMd.request(request));
// const r = f(objectToMd.basic(basic));
const r = f(objectToMd.full(full));
console.log(r);
