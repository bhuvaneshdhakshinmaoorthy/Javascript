function validName()
{
    var name = document.getElementById("name").value;
    var checkname = /^[a-zA-Z]{3,30}$/;
    if (checkname.test(name))
    {
        document.getElementById("lname").innerHTML = "Valid";
        document.getElementById("lname").style.visibility = "visible";
        document.getElementById("lname").style.color = "green";
        localStorage.setItem("NAME",name);
    }
    else {
        document.getElementById("lname").innerHTML = "Invalid";
        document.getElementById("lname").style.visibility = "visible";
        document.getElementById("lname").style.color = "red";
    }   
}
    
function validLastName()
{
        var lastname = document.getElementById("lastname").value;
        var checklastname = /^[a-zA-Z ]{2,30}$/;
        if (checklastname.test(lastname)) {
            document.getElementById("llastname").innerHTML = "Valid";
            document.getElementById("llastname").style.visibility = "visible";
            document.getElementById("llastname").style.color = "green";
            localStorage.setItem("LASTNAME",lastname);
        }
        else {
            document.getElementById("llastname").innerHTML = "Invalid";
            document.getElementById("llastname").style.visibility = "visible";
            document.getElementById("llastname").style.color = "red";
        }
}

function validEmail()
{

    var email = document.getElementById("email").value;
    var checkemail = /^([a-z 0-9 \.]+)@([a-z 0-9]+).([a-z]{2,8}).([a-z]{2,8})?$/;
    if (checkemail.test(email)) {
        document.getElementById("lemail").innerHTML = "Valid";
        document.getElementById("lemail").style.visibility = "visible";
        document.getElementById("lemail").style.color = "green";
        localStorage.setItem("EMAIL",email);
    }
    else {
        document.getElementById("lemail").innerHTML = "Invalid";
        document.getElementById("lemail").style.visibility = "visible";
        document.getElementById("lemail").style.color = "red";
    }

}
function validMobile()
{
       var mobile = document.getElementById("mobile").value;
       var checkmobile = /^[7-9]\d{8}$/;
       if (checkmobile.test(mobile)) {
           document.getElementById("lmobile").innerHTML = "Valid";
           document.getElementById("lmobile").style.visibility = "visible";
           document.getElementById("lmobile").style.color = "green";
           localStorage.setItem("MOBILE",mobile);
       }
       else {
           document.getElementById("lmobile").innerHTML = "Invalid";
           document.getElementById("lmobile").style.visibility = "visible";
           document.getElementById("lmobile").style.color = "red";
       }
}

function validPassword()
{
      var password = document.getElementById("password").value;
      var checkpassword = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (checkpassword.test(password)) {
          document.getElementById("lpassword").innerHTML = "Valid";
          document.getElementById("lpassword").style.visibility = "visible";
          document.getElementById("lpassword").style.color = "green";
          localStorage.setItem("PASSWORD",password);
      }
      else {
          document.getElementById("lpassword").innerHTML = "Invalid";
          document.getElementById("lpassword").style.visibility = "visible";
          document.getElementById("lpassword").style.color = "red";
      }
   
}

// function validgender()
// {
//       // Radio button check
//       var radios = document.getElementsByName("gender");
//       var formValid = false;

//       var i = 0;
//       while (!formValid && i < radios.length) {
//           if (radios[i].checked) formValid = true;
//           i++;
//       }

//       if (formValid) {
//           document.getElementById("radioblur").innerHTML = "valid";
//           document.getElementById("radioblur").style.visibility = "visible";
//           document.getElementById("radioblur").style.color = "green";
//       }
//       else {
//           document.getElementById("radioblur").innerHTML = "Invalid";
//           document.getElementById("radioblur").style.visibility = "visible";
//           document.getElementById("radioblur").style.color = "red";
//       }
// }

function validAddress()
{

            //Address validation
            var address1 = document.getElementById("address1").value;
            var checkaddress1 = /^[a-zA-Z0-9 ]{10,30}$/;
            if (checkaddress1.test(address1)) {
                // alert("valid");
                document.getElementById("laddress1").innerHTML = "Valid";
                document.getElementById("laddress1").style.visibility = "visible";
                document.getElementById("laddress1").style.color = "green";
                localStorage.setItem("PRESENTADDRESS",address1);
            }
            else {
                document.getElementById("laddress1").innerHTML = "Invalid";
                document.getElementById("laddress1").style.visibility = "visible";
                document.getElementById("laddress1").style.color = "red";
            }

}

function validPIN1()
{

    var pin1 = document.getElementById("pin1").value;
    var checkpin1 = /^(\d{6})$/;
    if (checkpin1.test(pin1)) {
        document.getElementById("lpin1").innerHTML = "Valid";
        document.getElementById("lpin1").style.visibility = "visible";
        document.getElementById("lpin1").style.color = "green";
        localStorage.setItem("PIN1",pin1);
    }
    else {
        document.getElementById("lpin1").innerHTML = "Invalid";
        document.getElementById("lpin1").style.visibility = "visible";
        document.getElementById("lpin1").style.color = "red";
    }

}

function validpan()
{

     
    var pan_number = document.getElementById("pan").value;
    var regxpan = /^[0-9A-Z]{10}$/;
    if (regxpan.test(pan_number)) {
        // alert("valid");
        document.getElementById("panblur").innerHTML = "valid";
        document.getElementById("panblur").style.visibility = "visible";
        document.getElementById("panblur").style.color = "green";
        localStorage.setItem("pan",pan_number);
    }
    else {
        document.getElementById("panblur").innerHTML = "Invalid";
        document.getElementById("panblur").style.visibility = "visible";
        document.getElementById("panblur").style.color = "red";
    }

}

function validAmount()
{

    var Money = document.getElementById("amount").value;
    var regxamount = /^\d+(\.\d{1,2})?$/;
    if (regxamount.test(Money)) {
        // alert("valid");
        document.getElementById("balanceblur").innerHTML = "valid";
        document.getElementById("balanceblur").style.visibility = "visible";
        document.getElementById("balanceblur").style.color = "green";
        localStorage.setItem("amount",Money);
    }
    else {
        document.getElementById("balanceblur").innerHTML = "Invalid";
        document.getElementById("balanceblur").style.visibility = "visible";
        document.getElementById("balanceblur").style.color = "red";
    }

}