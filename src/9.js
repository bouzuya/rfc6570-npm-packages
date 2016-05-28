// uri-template.js
// https://github.com/rezigned/uri-template.js
// NOTE:
const UriTemplate = require('uri-template.js');

const init = (template) => {
  const expand = params => UriTemplate.expand(template, params);
  const extract = uri => UriTemplate.extract(template, uri);
  return { expand, extract };
};

module.exports = { init };
