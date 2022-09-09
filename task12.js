var forms = document.querySelector("form");

var items = document.querySelector("#items");

forms.addEventListener("submit", addobj);

function addobj(e) {
  e.preventDefault();
  var Name = e.target.username.value;
  var Email = e.target.emailid.value;
  var Phone = e.target.phone.value;
  var userdetails = {
    name1: Name,
    email1: Email,
    phone1: Phone,
  };
  var details_string = JSON.stringify(userdetails);
  localStorage.setItem("Name", details_string);
  getlocal();
}

function getlocal(){
      var details = JSON.parse(localStorage.getItem("Name"));
      let result='';
      result += `<div>
      <span>${details.name1}</span>
            <span>${details.email1}</span>
            <span>${details.phone1}</span>
      </div>
      `;
items.innerHTML=result;     
}
getlocal();