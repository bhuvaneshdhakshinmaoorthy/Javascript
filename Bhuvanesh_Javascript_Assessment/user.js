function validfirstname() {
    var check = document.getElementById("firstname").value;
    var regex = /^[A-Za-z][A-Za-z0-9_]{1,29}$/;
    if (check !== "") {
        if (regex.test(check)) {
            document.getElementById("lfirstname").textContent = "Valid";
            document.getElementById("lfirstname").style.color = "green";
            document.getElementById("lfirstname").style.visibility = "visible";
        }
        else {
            document.getElementById("lfirstname").textContent = "Invalid";
            document.getElementById("lfirstname").style.color = "red";
            document.getElementById("lfirstname").style.visibility = "visible";
        }
    }
}
function validlastname() {
    var check = document.getElementById("lastname").value;
    var regex = /^[A-Za-z][A-Za-z0-9_]{1,29}$/;
    if (check !== "") {
        if (regex.test(check)) {
            document.getElementById("llastname").textContent = "Valid";
            document.getElementById("llastname").style.color = "green";
            document.getElementById("llastname").style.visibility = "visible";
        }
        else {
            document.getElementById("llastname").textContent = "Invalid";
            document.getElementById("llastname").style.color = "red";
            document.getElementById("llastname").style.visibility = "visible";
        }
    }
}
function validemail() {
    var check = document.getElementById("email").value;
    var regex = /^([a-z 0-9 \.]+)@([a-z 0-9]+).([a-z]{2,8}).([a-z]{2,8})?$/;
    if (check !== "") {
        if (regex.test(check)) {
            document.getElementById("lemail").textContent = "Valid";
            document.getElementById("lemail").style.color = "green";
            document.getElementById("lemail").style.visibility = "visible";
        }
        else {
            document.getElementById("lemail").textContent = "Invalid";
            document.getElementById("lemail").style.color = "red";
            document.getElementById("lemail").style.visibility = "visible";
        }
    }
}
function validphone() {
    var check = document.getElementById("phone").value;
    var regex = /^[7-9]\d{8}$/;
    if (check !== "") {
        if (regex.test(check)) {
            document.getElementById("lphone").textContent = "Valid";
            document.getElementById("lphone").style.color = "green";
            document.getElementById("lphone").style.visibility = "visible";
        }
        else {
            document.getElementById("lphone").textContent = "Invalid";
            document.getElementById("lphone").style.color = "red";
            document.getElementById("lphone").style.visibility = "visible";
        }
    }
}
function validpresentaddress() {
    var check = document.getElementById("address1").value;
    var regex = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    {
        if (regex.test(check)) {
            document.getElementById("lpresentaddress").textContent = "Valid";
            document.getElementById("lpresentaddress").style.color = "green";
            document.getElementById("lpresentaddress").style.visibility = "visible";
        }
        else {
            document.getElementById("lpresentaddress").textContent = "Invalid";
            document.getElementById("lpresentaddress").style.color = "red";
            document.getElementById("lpresentaddress").style.visibility = "visible";
        }
    }
}
function validpin1() {
    var check = document.getElementById("pin1").value;
    var regex = /^([^0])\d{4}$/;
    if (check !== "") {
        if (regex.test(check)) {
            document.getElementById("lpin1").textContent = "Valid";
            document.getElementById("lpin1").style.color = "green";
            document.getElementById("lpin1").style.visibility = "visible";
        }
        else {
            document.getElementById("lpin1").textContent = "Invalid";
            document.getElementById("lpin1").style.color = "red";
            document.getElementById("lpin1").style.visibility = "visible";
        }
    }
}
function validpermanentaddress() {
    var check = document.getElementById("permanentaddress").value;
    var regex = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    if (check !== "") {
        if (regex.test(check)) {
            document.getElementById("lpermanentaddress").textContent = "Valid";
            document.getElementById("lpermanentaddress").style.color = "green";
            document.getElementById("lpermanentaddress").style.visibility = "visible";
        }
        else {
            document.getElementById("lpermanentaddress").textContent = "Invalid";
            document.getElementById("lpermanentaddress").style.color = "red";
            document.getElementById("lpermanentaddress").style.visibility = "visible";
        }
    }
}
function validpin2() {
    var check = document.getElementById("pin2").value;
    var regex = /^([^0])\d{4}$/;
    if (check !== "") {
        if (regex.test(check)) {
            document.getElementById("lpin2").textContent = "Valid";
            document.getElementById("lpin2").style.color = "green";
            document.getElementById("lpin2").style.visibility = "visible";
        }
        else {
            document.getElementById("lpin2").textContent = "Invalid";
            document.getElementById("lpin2").style.color = "red";
            document.getElementById("lpin2").style.visibility = "visible";
        }
    }
}
var login = document.getElementById("setdata");
var checkboxaddress = document.getElementById("sameaddress");
var display = document.getElementById("displayuser");

document.getElementById("setdata").addEventListener("submit", function (event) {
    event.preventDefault();

    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const presentaddress = document.getElementById("address1").value;
    const presentpin = document.getElementById("pin1").value;
    const permanentaddress = document.getElementById("permanentaddress").value;
    const permanentpin = document.getElementById("pin2").value;
    const dropdowngender = document.getElementById("gender");
    const gender = dropdowngender.value;
    const dropdowndepartment = document.getElementById("department");
    const department = dropdowndepartment.value;
    const photo = document.getElementById("photo").files[0];

    // var regexfirstname = /^[A-Za-z][A-Za-z0-9_]{1,29}$/;
    // var regexlastname = /^[A-Za-z][A-Za-z0-9_]{1,29}$/;
    // var regexemail = /^([a-z 0-9 \.]+)@([a-z 0-9]+).([a-z]{2,8}).([a-z]{2,8})?$/;
    // var regexphone = /^[7-9]\d{8}$/;
    // var regexpresent = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    // var regexpresentpin = /^([^0])\d{4}$/;
    // var regexpermanent = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    // var regexpermanentpin = /^([^0])\d{4}$/;

    // if (!regexfirstname.test(firstname) || !regexlastname.test(lastname) || !regexemail.test(email) || !regexphone.test(phone) || !regexpresent.test(presentaddress) || !regexpresentpin.test(presentpin)) {
    //     alert("Please enter valid details.");
    //     return;
    // }

    // if (!checkboxaddress.checked) {
    //     if (!regexpermanent.test(permanentaddress) || !regexpermanentpin.test(permanentpin)) {
    //         alert("Please enter valid permanent address and pin.");
    //         return;
    //     }
    // }

    login.style.display = "none";
    display.style.display = "block";

    document.getElementById("rfirstname").textContent = firstname;
    document.getElementById("rlastname").textContent = lastname;
    document.getElementById("remail").textContent = email;
    document.getElementById("rphone").textContent = phone;
    document.getElementById("rpresentAddress").textContent = presentaddress;
    document.getElementById("rpin1").textContent = presentpin;
    if (checkboxaddress.checked) {
        document.getElementById("rpermanentaddress").textContent = presentaddress;
        document.getElementById("rpin2").textContent = presentpin;
    }
    else {
        document.getElementById("rpermanentaddress").textContent = permanentaddress;
        document.getElementById("rpin2").textContent = permanentpin;
    }
    document.getElementById("rgender").textContent = gender;
    document.getElementById("rdepartment").textContent = department;
    const photoUrl = URL.createObjectURL(photo);
    const img = document.createElement("img");
    img.src = photoUrl;
    document.getElementById("rphoto").innerHTML = "";
    document.getElementById("rphoto").appendChild(img);
});