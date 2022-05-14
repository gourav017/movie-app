document.querySelector("form").addEventListener("submit",mysignupform)

let singup_arr=JSON.parse(localStorage.getItem("signupdata"))||[]

function mysignupform(){
    event.preventDefault()
    let obj= {
        name: document.querySelector("#name").value,
        number: document.querySelector("#number").value,
        email:  document.querySelector("#email").value,
        password:  document.querySelector("#password").value
   }
     var count=0;
     for (var key in obj)
     {
         if(obj[key]==="")
         {
             count++;
         }
    }
    console.log(count);
    if(count>0)
    {
        alert(" please enter all enteries")
        
    }
    else{
          singup_arr.push(obj);
        
            localStorage.setItem("signupdata",JSON.stringify(singup_arr));
            alert("signup sucessfull")
            window.location.reload();
        }
        console.log(singup_arr)
        
       
}

   

   

   

   

   
  
    

    
    
