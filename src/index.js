require('./style.css')

const _ = require('lodash');

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!!']
  element.innerHTML = _.join(array, ' ')
  return element;
}

document.body.appendChild(component());
document.body.classList.add('haikei');
