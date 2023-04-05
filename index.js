function seterror(id,error){
    element=document.getElementById(id);
    element.getElementsByClassName('errormsg')[0].innerHTML=error;


}

function remove_error(id,error) {
    element=document.getElementById(id)
    element.getElementsByClassName

}
function validate(){
    console.log("validating")
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var flag=true;
    var name=document.forms['myform']["email_Id"].value;
    if(! name.match(validRegex)){
        seterror("input_ID","*Please enter valid email address");
            flag=false;
    }
    return flag;

}