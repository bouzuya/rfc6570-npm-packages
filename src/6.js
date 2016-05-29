// https://github.com/litejs/uri-template-lite
// NOTE:
//   Array parse
const no = 6;
const name = 'uri-template-lite';
const { URI } = require(name);

const init = (template) => {
  const t = new URI.Template(template);
  const expand = params => t.expand(params);
  const extract = uri => t.match(uri);
  return { expand, extract };
};

module.exports = { init, name, no };
