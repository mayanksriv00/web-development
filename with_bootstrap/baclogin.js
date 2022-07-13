export class Credential{
  allLogin=[];
  Credential(){
    console.log("class Imported");
  }
addDetails(dataEmail,dataPass){
    const cred={
      email:dataEmail,
      pass:dataPass
    };
    allLogin.push(cred);
  }
getDetails(){
    return allLogin;
  }
test(){
  console.log("class object initiated");
}
}
//module.exports=Credential
