const _ = require('lodash');
const utilities = require('./utilities');

console.log(utilities.NAME);

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!!']
  element.innerHTML = _.join(array, ' ')
  return element;
}

document.body.appendChild(component());
