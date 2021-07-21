function validation(){
    var name=document.getElementById('name').value;
    
    var number=document.getElementById('number').value;

    var usercheck=/^[A-Za-z]{3,30}$/;
    
    var numbercheck=/^[6789][0-9]{9}$/;

    if(usercheck.test(name))
    {
        document.getElementById('nameerror').innerHTML=" ";
    }
    else
    {
        document.getElementById('nameerror').innerHTML="pls enter the valid name,size(3-30)!!!";
        
        validation();
    }
  
    if(numbercheck.test(number))
    {
        document.getElementById('numbererror').innerHTML=" ";
    }
    else
    {
        document.getElementById('numbererror').innerHTML="pls enter the valid phone number!!!";
        validation();
    }

    

 
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyzCZ5Ba9crXtDNVQX8ZZCpTn6S58uO3jnDkv01MRYuEvGXuCJ-QueRxOb41F8I_Vk0kQ/exec'
const form = document.forms['ecommerce']



form.addEventListener('submit', 


 e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)},validation()) 
  
  .then(response => alert("THanks FoR RegIsterIng!!!"))
    .catch(error => console.error('Error!', error.message))
 
    
    
   

   
})





