var form = document.querySelector('#addForm')
var itemlist = document.querySelector('#items')

form.addEventListener('submit', additem);

itemlist.addEventListener('click', removeitem)

function additem(e)
{
    e.preventDefault();
    var newitem = document.querySelector('#item').value;
   

    var li = document.createElement('li');
    
     li.className = 'list-group-item';

      li.appendChild(document.createTextNode(newitem))
    
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