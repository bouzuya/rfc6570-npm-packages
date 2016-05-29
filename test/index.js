const assert = require('power-assert');
const { test } = require('eater/runner');
const module1 = require('../src/1'); // urijs
const module2 = require('../src/2'); // url-template
const module3 = require('../src/3'); // uri-templates
const module4 = require('../src/4'); // uritemplate
const module5 = require('../src/5'); // uri-template
const module6 = require('../src/6'); // uri-template-lite
const module7 = require('../src/7'); // rfc6570
const module8 = require('../src/8'); // temple
const module9 = require('../src/9'); // uri-template.js

const modules = [
  module1,
  module2,
  module3,
  module4,
  module5,
  module6,
  module7,
  module8,
  module9
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

module.exports = { assertExpand, modules, testCases };
