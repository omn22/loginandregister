
//////////valid email/////////
var mail = document.getElementById("form2")
var RGXofmile = /^[a-zA-z]{3,7}[0-9]{0,4}@gmail\.com$/
mail.addEventListener('keyup', function () {
    var val = mail.value;
    if (!RGXofmile.test(val)) {
        mail.style.border = "2px solid #FF2929"
    }
    else {
        mail.style.border = "2px solid green"
    }
});
mail.addEventListener('blur', function () {
    if (mail.value === "") {
        mail.style.border = "2px solid rgb(252, 250, 250)";
    }
});
////////////vaild password/////////
var password = document.getElementById("form3")
var RGXpass = /^(?=.*[A-Z][0-9]{4,8}).+$/;

password.addEventListener('keyup', function () {
    var val = password.value;
    if (!RGXpass.test(val)) {
        password.style.border = "2px solid #FF2929"
    }
    else {
        password.style.border = "2px solid green"
    }
});
password.addEventListener('blur', function () {
    if (password.value === "") {
        password.style.border = "2px solid rgb(252, 250, 250)";
    }
});
//////////////match pass///////////
var repass = document.getElementById("form4")

repass.addEventListener('keyup',function(){
    var repass2=repass.value
    var val = password.value;
    if (val!=repass2) {
        repass.style.border = "2px solid #FF2929"
    }
    else {
        repass.style.border = "2px solid green"
    }
})
repass.addEventListener('blur', function () {
    if (repass.value === "") {
        repass.style.border = "2px solid rgb(252, 250, 250)";
    }
});
