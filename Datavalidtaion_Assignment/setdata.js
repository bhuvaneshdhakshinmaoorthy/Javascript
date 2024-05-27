const form = document.getElementById("main_form");
const nameInput = document.getElementById("name");
const mailInput = document.getElementById("email");
const mobileInput = document.getElementById("mobile");
const passwordInput = document.getElementById("password");
// Gender
const maleInput = document.getElementById("male");
const femaleInput = document.getElementById("female");
const discloseInput = document.getElementById("disclose");
const dateInput = document.getElementById("dob");
const tinmeInput = document.getElementById("time");
// Languages
const tamilInput = document.querySelector("input[name='languages[]'][value='tamil']");
const englishInput = document.querySelector("input[name='languages[]'][value='english']");
const frenchInput = document.querySelector("input[name='languages[]'][value='french']");

const address1Input = document.getElementById("address1");
const pin1Input = document.getElementById("pin1");
const checkbox = document.getElementById("sameAddress");
const permanent_addressInput = document.getElementById("permanent_address");
const permanent_pinInput = document.getElementById("permanent_pin");
const panInput = document.getElementById("pan");
const dobInput = document.getElementById("dob");
// for field of interst
const fieldOfInterestInput = document.getElementById("fieldofinterest");
const timeInput = document.getElementById("time");
const balanceInput = document.getElementById("balance");
const result = document.getElementById("displaydata");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const mail = mailInput.value;
    const mobile = mobileInput.value;
    const password = passwordInput.value;
    // Gender
    let gender;
    if (maleInput.checked) {
        gender = "Male";
    }
    else if (femaleInput.checked) {
        gender = "female";
    }
    else if (discloseInput.checked) {
        gender = "Not wish to disclose";
    }
    const presentaddress = address1Input.value;
    const presentpin = pin1Input.value;
    const permanent_address = permanent_addressInput.value;
    const permanent_pin = permanent_pinInput.value;
    const pan = panInput.value;
    const dob = dobInput.value;
    const time = timeInput.value;
    // Languages
    let languages = [];
    if (tamilInput.checked) {
        languages.push("Tamil");
    }
    if (englishInput.checked) {
        languages.push("English");
    }
    if (frenchInput.checked) {
        languages.push("French");
    }
    // Field of Interset
    let fieldOfInterest = [];
    for (let i = 0; i < fieldOfInterestInput.options.length; i++) {
        if (fieldOfInterestInput.options[i].selected) {
            fieldOfInterest.push(fieldOfInterestInput.options[i].value);
        }
    }
    const balance = balanceInput.value;

    form.style.display = "none";
    result.style.display = "block";

    document.getElementById("r_name").textContent = name;
    document.getElementById("r_email").textContent = mail;
    document.getElementById("r_mobile").textContent = mobile;
    document.getElementById("r_password").textContent = password;
    // Gender
    document.getElementById("r_gender").textContent = gender;
    document.getElementById("r_presentaddress").textContent = presentaddress;
    document.getElementById("r_presentpin").textContent = presentpin;
    // If both address are same 
    if (checkbox.che) {
        document.getElementById("r_permanent").textContent = presentaddress;
        document.getElementById("r_permanentpin").textContent = presentpin;
    }
    else {
        document.getElementById("r_permanent").textContent = permanent_address;
        document.getElementById("r_permanentpin").textContent = permanent_pin;
    }
    document.getElementById("r_pan").textContent = pan;
    document.getElementById("r_dob").textContent = dob.toLocaleDateString();
    document.getElementById("r_time").textContent = time;
    // For language
    document.getElementById("r_languages").textContent = languages.join(", ");
    // For field of interset
    document.getElementById("r_fieldofinterest").textContent = fieldOfInterest.join(", ");
    document.getElementById("r_balance").textContent = balance;

    
});