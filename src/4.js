// uritemplate
// https://github.com/fxa/uritemplate-js/
// NOTE:
//   no extract
const UriTemplate = require('uritemplate');

const init = (template) => {
  const t = UriTemplate.parse(template);
  const expand = params => t.expand(params);
  const extract = uri => { throw new Error('not support') };
  return { expand, extract };
};

module.exports = { init };
