const { test } = require('eater/runner');
const { modules, assertExpand } = require('./');

modules.forEach(({ init, name, no }) => {
  test(`symbols - {foo} - ${no} ${name}`, resolve => {
    const ascii = '' +
      ' !"#$%&\'()*+,-./' +
      '0123456789:;<=>?' +
      '@ABCDEFGHIJKLMNO' +
      'PQRSTUVWXYZ[\\]^_' +
      '`abcdefghijklmno' +
      'pqrstuvwxyz{|}~';
    const template = '{foo}';
    const variables = {
      'foo': ascii
    };
    const uri = '' +
      '%20%21%22%23%24%25%26%27%28%29%2A%2B%2C-.%2F' +
      '0123456789%3A%3B%3C%3D%3E%3F' +
      '%40ABCDEFGHIJKLMNO' +
      'PQRSTUVWXYZ%5B%5C%5D%5E_' +
      '%60abcdefghijklmno' +
      'pqrstuvwxyz%7B%7C%7D~';

    assertExpand(init, template, variables, [uri]);
    resolve();
  });

  test(`symbols - {+foo} - ${no} ${name}`, resolve => {
    const ascii = '' +
      ' !"#$%&\'()*+,-./' +
      '0123456789:;<=>?' +
      '@ABCDEFGHIJKLMNO' +
      'PQRSTUVWXYZ[\\]^_' +
      '`abcdefghijklmno' +
      'pqrstuvwxyz{|}~';
    const template = '{+foo}';
    const variables = {
      'foo': ascii
    };
    const uri = '' +
      '%20!%22#$%25&\'()*+,-./' +
      '0123456789:;%3C=%3E?' +
      '@ABCDEFGHIJKLMNO' +
      'PQRSTUVWXYZ[%5C]%5E_' +
      '%60abcdefghijklmno' +
      'pqrstuvwxyz%7B%7C%7D~';

    assertExpand(init, template, variables, [uri]);
    resolve();
  });

  test(`symbols - {#foo} - ${no} ${name}`, resolve => {
    const ascii = '' +
      ' !"#$%&\'()*+,-./' +
      '0123456789:;<=>?' +
      '@ABCDEFGHIJKLMNO' +
      'PQRSTUVWXYZ[\\]^_' +
      '`abcdefghijklmno' +
      'pqrstuvwxyz{|}~';
    const template = '{#foo}';
    const variables = {
      'foo': ascii
    };
    const uri = '' +
      '#%20!%22#$%25&\'()*+,-./' +
      '0123456789:;%3C=%3E?' +
      '@ABCDEFGHIJKLMNO' +
      'PQRSTUVWXYZ[%5C]%5E_' +
      '%60abcdefghijklmno' +
      'pqrstuvwxyz%7B%7C%7D~';

    assertExpand(init, template, variables, [uri]);
    resolve();
  });
});
