// https://github.com/brettstimmerman/temple
// NOTE:
//   no extract
const no = 8;
const name = 'temple';
const UriTemplate = require(name);

const init = (template) => {
  const t = UriTemplate.compile(template);
  const expand = params => t(params);
  const extract = uri => { throw new Error('not support'); };
  return { expand, extract };
};

module.exports = { init, name, no };
