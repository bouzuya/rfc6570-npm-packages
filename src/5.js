// https://github.com/grncdr/uri-template
// NOTE:
//   no extract
const no = 5;
const name = 'uri-template';
const UriTemplate = require(name);

const init = (template) => {
  const t = UriTemplate.parse(template);
  const expand = params => t.expand(params);
  const extract = uri => { throw new Error('not support') };
  return { expand, extract };
};

module.exports = { init, name, no };
