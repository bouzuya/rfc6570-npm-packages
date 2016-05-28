const assert = require('power-assert');
const { test } = require('eater/runner');
const { init: init1 } = require('../src/1'); // urijs
const { init: init2 } = require('../src/2'); // url-template
const { init: init3 } = require('../src/3'); // uri-templates
const { init: init4 } = require('../src/4'); // uritemplate
const { init: init5 } = require('../src/5'); // uri-template
const { init: init6 } = require('../src/6'); // uri-template-lite
const { init: init7 } = require('../src/7'); // rfc6570
const { init: init8 } = require('../src/8'); // temple
const { init: init9 } = require('../src/9'); // uri-template.js

const inits = [
  init1,
  init2,
  init3,
  init4,
  init5,
  init6,
  init7,
  init8,
  init9
];

inits.forEach((init, index) => {
  test(`${(index + 1)} expand`, resolve => {
    const template = '/search/{term:1}/{term}/{?q*,limit}';
    const params = {
      term: 'john',
      q: ['a', 'b'],
      limit: 10,
    };
    const uri = '/search/j/john/?q=a&q=b&limit=10';

    const { expand } = init(template);
    assert(expand(params) === uri);
    resolve();
  });
});
