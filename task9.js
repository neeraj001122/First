var form = document.querySelector('#addForm')
var itemlist = document.querySelector('#items')
var filter = document.querySelector('#filter')
var form = document.querySelector('#addForm')


form.addEventListener('submit', additem);

itemlist.addEventListener('click', removeitem)

filter.addEventListener('keyup', filterItems)

function additem(e)
{
    e.preventDefault();
    var newitem = document.querySelector('#item').value;
   var description = document.querySelector('#description').value

    var li = document.createElement('li');
     li.className = 'list-group-item';
      li.appendChild(document.createTextNode(newitem))
      li.appendChild(document.createTextNode(description))

     var delet = document.createElement('button')
     delet.className = "btn btn-danger btn-sm float-right delete"
     delet.appendChild(document.createTextNode('x'));
     li.appendChild(delet)
     var edit = document.createElement('button');
     edit.className = "btn  btn-sm float-right delete"
     edit.appendChild(document.createTextNode('Edit'))
     li.appendChild(edit)

      
     itemlist.appendChild(li)
} 

function removeitem(e)
{
   if(e.target.classList.contains('delete'))
   {
    var li = e.target.parentElement;
    itemlist.removeChild(li);
   }
}

function filterItems(e)
{
   var text = e.target.value.toLowerCase();
    var items = document.getElementsByTagName('li');
    Array.from(items).forEach(function(item)
    {
      var itemName = item.firstChild.textContent;
      var description = item.childNodes[1].textContent;
      if(itemName.toLowerCase().indexOf(text) != -1  || description.toLowerCase().indexOf(text) != -1)
      {
        item.style.display = 'block';
      } else 
      {
        item.style.display = 'none';
      }
    });
  }