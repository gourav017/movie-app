

document.querySelector("form").addEventListener("submit",mylogin)

var regdata = JSON.parse(localStorage.getItem("signupdata"))

function mylogin(){
    event.preventDefault()
    var enter_mail= document.querySelector("#mail").value;
    var enter_password = document.querySelector("#password").value

    for(var i=0 ; i<regdata.length ; i++)
    {
        if(regdata[i].email===enter_mail && regdata[i].password===enter_password)
        {
            alert("login sucessful")
            window.location.href="index.html"
            break;
        }
        else{
            alert("invalid Credentials")
            window.location.reload();
            break;
            
         }
       
        
    }

    

    
   

}



