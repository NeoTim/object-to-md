'use strict';

const objectToMd = require('../lib');
// const basic = require('./basic.json');
const request = require('./request.json');
// const responses = require('./responses.json');
// const full = require('./full.json');

const r = objectToMd.request(request);
// const r = objectToMd.basic(basic);
// const r = objectToMd.responses(responses);
// const r = objectToMd.full(full);
console.log(r);
