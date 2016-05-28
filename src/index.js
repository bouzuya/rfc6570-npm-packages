// const { init } = require('./1'); // urijs
// const { init } = require('./2'); // url-template
// const { init } = require('./3'); // uri-templates
// const { init } = require('./4'); // uritemplate
// const { init } = require('./5'); // uri-template
// const { init } = require('./6'); // uri-template-lite
// const { init } = require('./7'); // rfc6570
// const { init } = require('./8'); // temple
// const { init } = require('./9'); // uri-template.js

const template = '/search/{term:1}/{term}/{?q*,limit}';
const params = {
  term: 'john',
  q: ['a', 'b'],
  limit: 10,
};
const uri = '/search/j/john/?q=a,b&limit=10';

const { expand, extract } = init(template);

console.log(expand(params));
console.log(extract(uri));
// expand(params) === uri;
// extract(uri) === params;
