const login=()=>{
    if(usernameInput.value=="" ||  userPassword.value=="")
    {
        alert("Please fill the form")
    }
    else{
        user=usernameInput.value
        localStorage.setItem("username",user)

      
        window.location="index.html"
        alert("Login successfully")
        
    }
}