// https://github.com/rezigned/uri-template.js
// NOTE:
const no = 9;
const name = 'uri-template.js';
const UriTemplate = require(name);

const init = (template) => {
  const expand = params => UriTemplate.expand(template, params);
  const extract = uri => UriTemplate.extract(template, uri);
  return { expand, extract };
};

module.exports = { init, name, no };
