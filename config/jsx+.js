// Babel plugins for JSX+
module.exports = [
  require('babel-plugin-transform-jsx-list'),
  require('babel-plugin-transform-jsx-condition'),
  require('babel-plugin-transform-jsx-memo'),
  require('babel-plugin-transform-jsx-slot'),
  [require('babel-plugin-transform-jsx-fragment'), { moduleName: 'react' }],
  require('babel-plugin-transform-jsx-class'),
];
