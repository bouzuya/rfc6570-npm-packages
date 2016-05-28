// temple
// https://github.com/brettstimmerman/temple
// NOTE:
//   no extract
const UriTemplate = require('temple');

const init = (template) => {
  const t = UriTemplate.compile(template);
  const expand = params => t(params);
  const extract = uri => { throw new Error('not support'); };
  return { expand, extract };
};

module.exports = { init };
