// url-template
// https://github.com/bramstein/url-template
// NOTE:
//   no extract
const UriTemplate = require('url-template');

const init = (template) => {
  const t = UriTemplate.parse(template);
  const expand = params => t.expand(params);
  const extract = uri => { throw new Error('not support'); };
  return { expand, extract };
};

module.exports = { init };
