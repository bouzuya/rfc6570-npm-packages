const { test } = require('eater/runner');
const { assertExpand, modules, testCases } = require('./');

const tests = testCases('spec-examples-by-section');

modules.forEach(({ init, name, no }) => {
  tests.forEach(testCases => {
    const { section, template, uris, variables } = testCases;
    test(`${no} ${name} ${section} ${template}`, resolve => {
      assertExpand(init, template, variables, uris);
      resolve();
    });
  });
});
