var forms = document.querySelector('form');
forms.addEventListener('submit', additem);

function additem(e)
{
    e.preventDefault();
     var name = e.target.username.value;
     var Email = e.target.emailid.value;
     var phone = e.target.phone.value;
     localStorage.setItem('name', name)
     localStorage.setItem('email', Email)
     localStorage.setItem('phone', phone)
}