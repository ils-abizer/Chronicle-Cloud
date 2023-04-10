// const phoneInputField = document.querySelector("#phone");
// const phoneInput = window.intlTelInput(phoneInputField, {
//   utilsScript:
//     "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
// });


function check_step01_form(e) {
    e.preventDefault();
    let is_ok = validate_form(e);
    if (is_ok) window.location.href = "register2.html";
    return is_ok;
}

function check_step02_form(e) {
    e.preventDefault();
    let is_ok = validate_form(e);
    if (is_ok) window.location.href = "index.html";
    return is_ok;
}

