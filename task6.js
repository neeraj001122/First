var li = document.querySelector("li:nth-Child(2)");
li.style.backgroundColor = 'green'
var li2 = document.querySelector("li:nth-Child(3)");
li2.style.visibility ='hidden'
var list = document.querySelectorAll('li');
list.style.color = 'green'
var list1 = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<list1.length;i++)
{
    list1[i].style.backgroundColor = 'green'
}
