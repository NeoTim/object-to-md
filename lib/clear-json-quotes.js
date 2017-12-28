'use strict';

var acorn = require('acorn');
var estraverse = require('estraverse');

module.exports = clear;

function clear(source) {
  var nodes = [];
  var ast = acorn.parse('(' + source + ')', {
    ranges: true,
    locations: true
  });

  estraverse.traverse(ast, {
    enter: function enter(node) {
      if (node.type === 'Property') {
        nodes.push(node);
      }
    }
  });

  nodes.reverse().forEach(function (node) {
    var _node$key = node.key,
        start = _node$key.start,
        end = _node$key.end;
    var value = node.key.value;

    source = source.slice(0, start - 1) + value + source.slice(end - 1);
  });

  return source;
}