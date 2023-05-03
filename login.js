
function validate_login_form(e) {
    e.preventDefault();
    let is_ok = validate_form(e);
    console.log(is_ok)
    {
        alert("Login Successful");
        if (is_ok) window.location.href = "dashboard.html";
    }
}