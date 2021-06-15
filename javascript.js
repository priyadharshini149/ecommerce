function validation(){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var number=document.getElementById('number').value;

    var usercheck=/^[A-Za-z]{3,30}$/;
    var emailcheck=/^[A-Za-z_.0-9]{3,}@kongu.edu$/;
    var numbercheck=/^[6789][0-9]{9}$/;

    if(usercheck.test(name))
    {
        document.getElementById('nameerror').innerHTML=" ";
    }
    else
    {
        document.getElementById('nameerror').innerHTML="pls enter the valid name,size(3-30)!!!";
        
        return false;
    }
    if(emailcheck.test(email))
    {
        document.getElementById('emailerror').innerHTML=" ";
    }
    else
    {
        document.getElementById('emailerror').innerHTML="pls use kongu mail id!!!";
        return false;
    }
    if(numbercheck.test(number))
    {
        document.getElementById('numbererror').innerHTML=" ";
    }
    else
    {
        document.getElementById('numbererror').innerHTML="pls enter the valid phone number!!!";
        return false;
    }



 
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwEMB__wJWHfrWSP2C_vjjzxFiJDBYAgVQp-zg-ivKyeI8zCo2qc49-BzDJIS204GPH/exec'
const form = document.forms['register form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for registering"))
    .catch(error => console.error('Error!', error.message))
})

