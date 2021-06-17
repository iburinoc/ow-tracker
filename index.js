/* eslint-disable no-unused-vars */
const nconf = require('nconf');

nconf.argv().env({
  separator: '__',
  lowerCase: true,
  parseValues: true,
});
