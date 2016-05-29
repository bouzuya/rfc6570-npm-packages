const { test } = require('eater/runner');
const { assertExpand, inits, testCases } = require('./');

const tests = testCases('spec-examples-by-section');

inits.forEach((init, index) => {
  tests.forEach(testCases => {
    const { section, template, uris, variables } = testCases;
    test(`${index + 1} ${section} ${template}`, resolve => {
      assertExpand(init, template, variables, uris);
      resolve();
    });
  });
});
