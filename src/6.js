// uri-template-lite
// https://github.com/litejs/uri-template-lite
// NOTE:
//   Array parse
const { URI } = require('uri-template-lite');

const init = (template) => {
  const t = new URI.Template(template);
  const expand = params => t.expand(params);
  const extract = uri => t.match(uri);
  return { expand, extract };
};

module.exports = { init };
