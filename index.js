const validation = 
{
    "email" : (email) =>
    {
        let validreg= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
            return {
                is_valid: (email.length>0) && validreg.test(email),
                msg: "*Please enter valid email address"
        } ;
    },
    "password": (password) => {
        let validatorReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]{6,}$/g;
        return {
            "is_valid": password.length && (validatorReg.test(password)),
            "msg": "*Please enter valid password"
        }
    },

    "number": (value) => {
        var contact_number_value = value;
        var regMobile = /^\d{10}$/;
        let is_valid = true;
        // if (contact_number_value.length == 0) {
        //     contact_number_error.style.visibility = "visible";
        //     is_valid = false;
        // }
        if (!contact_number_value.match(regMobile)) {
            // contact_number_error.style.visibility = "visible";
            is_valid = false;
        }
        // else {
        //     contact_number_error.style.visibility = "hidden";
        // }
        return {
            is_valid: is_valid,
            msg: "*Please Enter Valid Phone Number"
        };
    },
    "confirm-password": (confirm_password) => {
        return {
            is_valid: (confirm_password == password_ele.value),
            msg: "*Password Dose not Match",
        }
    },
    "*": (value) => ({
        is_valid: value.length > 0,
        msg: "*Required",
    }),



    "*": (value) => 
    ({
        is_valid: value.length > 0,
        msg: "*Required",
    }),

};


const check =(key,value) =>
{
    let valid;
    if (validation[key]) {
        valid=validation[key](value);
    }
    else {
        valid=validation["*"](value);

    }
    return valid;

}


const show_error =(form,key,valid,msg) =>
{
    let error_element=document.getElementById(`error-${key}`);
    ele=form.querySelector(`input[name=${key}]`);
    if (valid) {
        ele.style.borderBottom = "";
        error_ele.innerHTML = ""
    } else {
        ele.style.borderBottom = "2px solid #FF0000";
        error_element.innerHTML = msg;
    }

}


const showErrorInField = (ele, valid, msg, key) => {
    let error_element = document.getElementById(`error-${key}`);
    let div_element=document.getElementById(`${key}box_id`);
    if (valid) {
        ele.style.borderBottom = "";
        error_element.innerHTML = "";
    } else {
        ele.style.borderBottom = "2px solid #FF0000";
        error_element.style.marginBottom="9px";
        div_element.style.marginBottom="4px";
        error_element.innerHTML = msg;
    }
}


function validate_field(e, form) {
    if (e.key === "Tab") return;
    let ele = e.target;
    let key = ele.name;
    let value = ele.value;
    let { is_valid, msg } = check(key, value);
    showErrorInField(ele, is_valid, msg, key);
    // toggleButton(form);
    console.log()
}