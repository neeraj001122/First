var forms = document.querySelector('form')

forms.addEventListener('submit', addobj);

function addobj(e)
{
    e.preventDefault();
        var Name = e.target.username.value;
        var Email = e.target.emailid.value;
        var Phone = e.target.phone.value;
    var userdetails = {
        name1 : Name,
        email1 : Email,
        phone1 : Phone
    }
    var details_string = JSON.stringify(userdetails)
    localStorage.setItem('userdetails', details_string)
}