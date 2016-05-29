// https://github.com/fxa/uritemplate-js/
// NOTE:
//   no extract
const no = 4;
const name = 'uritemplate';
const UriTemplate = require(name);

const init = (template) => {
  const t = UriTemplate.parse(template);
  const expand = params => t.expand(params);
  const extract = uri => { throw new Error('not support') };
  return { expand, extract };
};

module.exports = { init, name, no };
