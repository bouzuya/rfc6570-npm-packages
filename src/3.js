// uri-templates
// https://github.com/geraintluff/uri-templates
// NOTE:
const UriTemplate = require('uri-templates');

const init = (template) => {
  const t = new UriTemplate(template);
  const expand = params => t.fill(params);
  const extract = uri => t.fromUri(uri);
  return { expand, extract };
};

module.exports = { init };
