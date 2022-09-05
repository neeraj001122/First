var main = document.querySelector('#Add-items')
main.parentNode.style.backgroundColor = 'blue';

var main2 = document.querySelector('#main')
main2.parentElement.style.backgroundColor = 'green'

var items = document.querySelector('#items')
//last lastchild is giving value but not changing
//console.log(items.lastChild)
items.lastElementChild.textContent = 'kuch bhi'
//same as last child
//console.log(items.firstChild)
items.firstElementChild.textContent = 'kuch bhi'
// giving text node
//  console.log(main.previousSibling)
// main.previousElementSibling.previousElementSibling.textContent = 'yo'

let cc = document.querySelector('header .container');
let cc1 = document.querySelector('header h1');
let element = document.createElement('h3');

element.innerHTML = 'HEllo';

cc.insertBefore(element,cc1);

let ul = document.getElementById('items');



let ele = document.createElement('h3');
ele.innerHTML = 'HEllo';
ul.insertBefore(ele,ul.children[0]);


