// https://github.com/geraintluff/uri-templates
// NOTE:
const no = 3;
const name = 'uri-templates';
const UriTemplate = require(name);

const init = (template) => {
  const t = new UriTemplate(template);
  const expand = params => t.fill(params);
  const extract = uri => t.fromUri(uri);
  return { expand, extract };
};

module.exports = { init, name, no };
