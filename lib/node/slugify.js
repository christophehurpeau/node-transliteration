'use strict';

exports.__esModule = true;

var _transliterate = require('./transliterate');

var _transliterate2 = _interopRequireDefault(_transliterate);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Slugify
var defaultOptions = {
  lowercase: true,
  separator: '-',
  replace: [],
  replaceAfter: [],
  ignore: []
};
var configOptions = {};

var slugify = function slugify(str, options) {
  options = options ? (0, _utils.mergeOptions)(defaultOptions, options) : (0, _utils.mergeOptions)(defaultOptions, configOptions);
  // remove leading and trailing separators
  var sep = (0, _utils.escapeRegExp)(options.separator);
  options.replaceAfter.push([/[^a-zA-Z0-9]+/g, options.separator], [new RegExp('^(' + sep + ')+|(' + sep + ')+$', 'g'), '']);
  var transliterateOptions = { replaceAfter: options.replaceAfter, replace: options.replace, ignore: options.ignore };
  var slug = (0, _transliterate2.default)(str, transliterateOptions);
  if (options.lowercase) {
    slug = slug.toLowerCase();
  }
  return slug;
};

slugify.config = function (options) {
  if (options === undefined) {
    return configOptions;
  }
  configOptions = (0, _utils.mergeOptions)(defaultOptions, options);
  return configOptions;
};

exports.default = slugify;
module.exports = exports['default'];