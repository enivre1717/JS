function loginUser(){
    //Get value from the element with id username
    var username = document.getElementById('username').value;

    //Get value from the element with id password
    var password = document.getElementById('password').value;

    var errorMsg = "";
    var strSep = "";

    if(username == ""){
        errorMsg+=strSep+"Username cannot be empty";
        strSep = "<br>";
    }

    if(password == ""){
        errorMsg+=strSep+"Password cannot be empty";
        strSep = "<br>";
    }

    //if got error
    if(errorMsg != ""){
        //set the error message into the element of id errorMessages
        document.getElementById('errorMessages').innerHTML = errorMsg;

        //add class errorMsg to the element of id errorMessages
        document.getElementById('errorMessages').className = "error";
    }else{
        //no error, store username into cookies
        document.cookie ="username="+username;

        //redirect to welcome page
        window.location.href = "/JS/welcome.html";
    }

    return false;
}

