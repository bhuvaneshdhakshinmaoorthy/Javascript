// Book name
function validbookname() {
    var bookname = document.getElementById("bookname").value;
    var checkbookname = /^[A-Za-z][A-Z a-z 0-9_]{1,29}$/;
    if (bookname !== "") {
        if (checkbookname.test(bookname)) {
            document.getElementById("lbookname").innerHTML = "Valid";
            document.getElementById("lbookname").style.visibility = "visible";
            document.getElementById("lbookname").style.color = "green";
        }
        else {
            document.getElementById("lbookname").innerHTML = "Invalid";
            document.getElementById("lbookname").style.visibility = "visible";
            document.getElementById("lbookname").style.color = "red";
            validbooknameflag = false;
        }
    }
}

// for rack number
// function validracknumber()
// {
//     var racknumber = document.getElementById("racknumber").value;
//     var checkracknumber = /^([a-z A-Z 0-9 & _])$/;
//     if(checkracknumber.test(racknumber))
//     {
//         document.getElementById("lracknumber").innerHTML = "Valid";
//         document.getElementById("lracknumber").style.visibility = "visible";
//         document.getElementById("lracknumber").style.color = "green";

//     }
//     else
//     {
//         document.getElementById("lracknumber").innerHTML = "Invalid";
//         document.getElementById("lracknumber").style.visibility = "visible";
//         document.getElementById("lracknumber").style.color = "red";
//     }
// }

// authour name
function validauthorname() {
    var authorname = document.getElementById("authorname").value;
    var checkauthorname = /^[A-Za-z][A-Z a-z 0-9_]{1,29}$/;
    if (authorname !== "") {
        if (checkauthorname.test(authorname)) {
            document.getElementById("lauthorname").innerHTML = "Valid";
            document.getElementById("lauthorname").style.visibility = "visible";
            document.getElementById("lauthorname").style.color = "green";

        }
        else {
            document.getElementById("lauthorname").innerHTML = "Invalid";
            document.getElementById("lauthorname").style.visibility = "visible";
            document.getElementById("lauthorname").style.color = "red";

        }
    }
}

// Published Year
function validpublishedyear() {
    var publishedyear = document.getElementById("publishedyear").value;
    var checkpublishedyear = /^[1-9]\d{2}$/;
    if (checkpublishedyear.test(publishedyear)) {
        document.getElementById("lpublishedyear").innerHTML = "Valid";
        document.getElementById("lpublishedyear").style.visibility = "visible";
        document.getElementById("lpublishedyear").style.color = "green";

    }
    else {
        document.getElementById("lpublishedyear").innerHTML = "Invalid";
        document.getElementById("lpublishedyear").style.visibility = "visible";
        document.getElementById("lpublishedyear").style.color = "red";

    }
}

// publisher name
function validpublishername() {
    var publishername = document.getElementById("publishername").value;
    var checkpublishername = /^[A-Za-z][A-Z a-z 0-9_]{1,29}$/;
    if (publishername !== "") {
        if (checkpublishername.test(publishername)) {
            document.getElementById("lpublishername").innerHTML = "Valid";
            document.getElementById("lpublishername").style.visibility = "visible";
            document.getElementById("lpublishername").style.color = "green";
        }
        else {
            document.getElementById("lpublishername").innerHTML = "Invalid";
            document.getElementById("lpublishername").style.visibility = "visible";
            document.getElementById("lpublishername").style.color = "red";
        }
    }
}

// authour email
function validauthouremail() {
    var authourmail = document.getElementById("authourmail").value;
    var checkauthourmail = /^([a-z 0-9 \.]+)@([a-z 0-9]+).([a-z]{2,8}).([a-z]{2,8})?$/;
    if (authourmail !== "") {
        if (checkauthourmail.test(authourmail)) {
            document.getElementById("lauthourmail").innerHTML = "Valid";
            document.getElementById("lauthourmail").style.visibility = "visible";
            document.getElementById("lauthourmail").style.color = "green";
            document.getElementById("rauthourmail").innerHTML = authourmail;
            validauthouremailflag = true;
        }
        else {
            document.getElementById("lauthourmail").innerHTML = "Invalid";
            document.getElementById("lauthourmail").style.visibility = "visible";
            document.getElementById("lauthourmail").style.color = "red";
            validauthouremailflag = false;
        }
    }
}

// phone number
function validauthourphone() {
    var authourphone = document.getElementById("authourphone").value;
    var checkauthourphone = /^[7-9]\d{8}$/;
    if (authourphone !== "") {
        if (checkauthourphone.test(authourphone)) {
            document.getElementById("lauthourphone").innerHTML = "Valid";
            document.getElementById("lauthourphone").style.visibility = "visible";
            document.getElementById("lauthourphone").style.color = "green";

        }
        else {
            document.getElementById("lauthourphone").innerHTML = "Invalid";
            document.getElementById("lauthourphone").style.visibility = "visible";
            document.getElementById("lauthourphone").style.color = "red";
        }
    }
}

// for adderess
function validauthouraddress() {
    var authoraddress = document.getElementById("authoraddress").value;
    var checkauthoraddress = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    if (authoraddress !== "") {
        if (checkauthoraddress.test(authoraddress)) {
            document.getElementById("lauthoraddress").innerHTML = "Valid";
            document.getElementById("lauthoraddress").style.visibility = "visible";
            document.getElementById("lauthoraddress").style.color = "green";
        }
        else {
            document.getElementById("lauthoraddress").innerHTML = "Invalid";
            document.getElementById("lauthoraddress").style.visibility = "visible";
            document.getElementById("lauthoraddress").style.color = "red";
        }
    }
}

// for PIN
function validauthourpin() {
    var authourpin = document.getElementById("authourpin").value;
    var checkauthourpin = /^([^0])\d{4}$/;
    if (authourpin !== "") {
        if (checkauthourpin.test(authourpin)) {
            document.getElementById("lauthourpin").innerHTML = "Valid";
            document.getElementById("lauthourpin").style.visibility = "visible";
            document.getElementById("lauthourpin").style.color = "green";
        }
        else {
            document.getElementById("lauthourpin").innerHTML = "Invalid";
            document.getElementById("lauthourpin").style.visibility = "visible";
            document.getElementById("lauthourpin").style.color = "red";
        }
    }
}

// For ISPN
function validisbn() {
    var isbn = document.getElementById("isbn").value;
    var checkisbn = /^(97(8|9))?\d{9}(\d|X)$/i;
    if (isbn !== "") {
        if (checkisbn.test(isbn)) {
            document.getElementById("lisbn").innerHTML = "Valid";
            document.getElementById("lisbn").style.visibility = "visible";
            document.getElementById("lisbn").style.color = "green";
        }
        else {
            document.getElementById("lisbn").innerHTML = "Invalid";
            document.getElementById("lisbn").style.visibility = "visible";
            document.getElementById("lisbn").style.color = "red";
        }
    }
}
const set = document.getElementById("settingdata");
const display = document.getElementById("displayeduser");

document.getElementById("settingdata").addEventListener("submit",function(event) 
{
    event.preventDefault();
    const bookname = document.getElementById("bookname").value;
    const dropdowngender = document.getElementById("bookdepartment");
    const department = dropdowngender.value;
    const racknumber = document.getElementById("racknumber").value;
    const authorname = document.getElementById("authorname").value;
    const publishedyear = document.getElementById("publishedyear").value;
    const publishername = document.getElementById("publishername").value;
    const authourmail =  document.getElementById("authourmail").value;
    const authourphone = document.getElementById("authourphone").value;
    const authoraddress = document.getElementById("authoraddress").value;
    const authourpin = document.getElementById("authourpin").value;
    const isbn = document.getElementById("isbn").value;
    const photo = document.getElementById("photo").files[0];
    
    set.style.display = "none";
    display.style.display = "block";

    document.getElementById("rbookname").textContent = bookname;
    document.getElementById("rbookdepartment").textContent = department;
    document.getElementById("rracknumber").textContent = racknumber;
    document.getElementById("rauthourname").textContent = authorname;
    document.getElementById("rpublishedyear").textContent = publishedyear;
    document.getElementById("rpublishername").textContent = publishername;
    document.getElementById("rauthouremail").textContent = authourmail;
    document.getElementById("rauthourphone").textContent = authourphone;
    document.getElementById("rauthouraddress").textContent = authoraddress;
    document.getElementById("rauthourpin").textContent = authourpin;
    document.getElementById("risbn").textContent = isbn;
    const photoUrl = URL.createObjectURL(photo);
    const img = document.createElement("img");
    img.src = photoUrl;
    document.getElementById("rphoto").innerHTML = "";
    document.getElementById("rphoto").appendChild(img);
});
