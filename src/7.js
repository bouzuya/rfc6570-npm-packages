// rfc6570
// https://github.com/LuvDaSun/rfc6570/
// NOTE:
//   Array parse
const UriTemplate = require('rfc6570/src/UriTemplate');

const init = (template) => {
  const t = new UriTemplate(template);
  const expand = params => t.stringify(params);
  const extract = uri => t.parse(uri);
  return { expand, extract };
};

module.exports = { init };
