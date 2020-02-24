require('./style.css')
require('./style.scss')

const _ = require('lodash');
const logo = require('./logo.png')

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!!']
  element.innerHTML = _.join(array, ' ')
  return element;
}

document.body.appendChild(component());
document.body.classList.add('haikei');

const image = new Image();
image.src = logo
document.body.appendChild(image);
