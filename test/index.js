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

const assertExpand = (init, template, variables, uris) => {
  const { expand } = init(template);
  const uri = expand(variables);
  assert(uris.some(u => u === uri), `${uri} / ${uris}`);
};

const loadExamples = (key) => {
  return require(`../uritemplate-test/${key}.json`);
};

const parseExamples = (examples) => {
  return Object.keys(examples).reduce((allTestCases, section) => {
    const { variables, testcases } = examples[section];
    const newTestCases = testcases.map(([template, uriOrUris]) => {
      const uris = typeof uriOrUris === 'string' ? [uriOrUris] : uriOrUris;
      return { section, template, uris, variables };
    });
    return allTestCases.concat(newTestCases);
  }, []);
};

const testCases = (key) => {
  const examples = loadExamples(key);
  return parseExamples(examples);
};

module.exports = { assertExpand, inits, testCases };
