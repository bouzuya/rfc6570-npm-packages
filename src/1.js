// https://github.com/medialize/URI.js
// NOTE:
//   no extract
const no = 1;
const name = 'urijs';
const Uri = require(name);
const UriTemplate = require('urijs/src/URITemplate');

const init = (template) => {
  const expand = params => Uri.expand(template, params).toString();
  const extract = uri => { throw new Error('not support'); };
  return { expand, extract };
};

module.exports = { init, name, no };
