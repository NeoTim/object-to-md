'use strict';

const acorn = require('acorn');
const estraverse = require('estraverse');

module.exports = clear;

function clear(source) {
  const nodes = [];
  const ast = acorn.parse(`(${source})`, {
    ranges: true,
    locations: true,
  });

  estraverse.traverse(ast, {
    enter(node) {
      if (node.type === 'Property') {
        nodes.push(node);
      }
    },
  });

  nodes.reverse().forEach(node => {
    const { start, end } = node.key;
    const { value } = node.key;
    source = source.slice(0, start - 1) + value + source.slice(end - 1);
  });

  return source;
}
