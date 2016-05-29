const { test } = require('eater/runner');
const { modules, assertExpand } = require('./');

modules.forEach(({ init, name, no }) => {
  test(`${no} ${name} expand`, resolve => {
    const template = '/search/{term:1}/{term}/{?q*,limit}';
    const variables = {
      term: 'john',
      q: ['a', 'b'],
      limit: 10,
    };
    const uri = '/search/j/john/?q=a&q=b&limit=10';

    assertExpand(init, template, variables, [uri]);
    resolve();
  });
});
