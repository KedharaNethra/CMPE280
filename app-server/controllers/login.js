exports.postlogin = function postlogin(request,result){
    var username= request.body.username;
    var password= request.body.password;
  
    if(username === "u" && password === "p"){
        console.log("Succesful Login");
        request.session.user = username;
        console.log(request.session.user);
        result.status(200).send({"message":"Success"});
  
    }else{
        console.log("Failed Login")
        result.status(400).send({"message":"Invalid Credentials"});
    }
  
  }