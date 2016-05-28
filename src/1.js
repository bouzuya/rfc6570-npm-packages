// urijs
// https://github.com/medialize/URI.js
// NOTE:
//   no extract
const Uri = require('urijs');
const UriTemplate = require('urijs/src/URITemplate');

const init = (template) => {
  const expand = params => Uri.expand(template, params).toString();
  const extract = uri => { throw new Error('not support'); };
  return { expand, extract };
};

module.exports = { init };
