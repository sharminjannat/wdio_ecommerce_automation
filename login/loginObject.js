class loginObjects{
     get inputUserName(){
        return $('#user-name');
     }

     get inputPassword(){
        return $('#password');
     }

     get loginButton(){
        return $('#login-button');
     }
     

}


module.exports = new loginObjects();