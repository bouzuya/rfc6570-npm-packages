// https://github.com/bouzuya/rfc6570-expand
// NOTE:
const no = 10;
const name = 'rfc6570-expand';
const { init: initOriginal } = require(name);

const init = (template) => {
  const { expand } = initOriginal(template);
  const extract = uri => { throw new Error('not support'); };
  return { expand, extract };
};

module.exports = { init, name, no };
