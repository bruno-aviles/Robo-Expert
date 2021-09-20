const contactButton = document.getElementById('submitButton');
const panels = document.querySelectorAll("div.panel");

let panelInfo = document.getElementById('panelInfo');
let companyNameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let serviceRequest = document.getElementById('service')

//----------------CONTACT FORM-----------------------------------


// CONTACT ME BUTTON FUNCTIONALITY
contactButton.addEventListener('click', e => {
    if (companyNameInput.value == '' && emailInput.value == '') {
        return alert("Please Fill Out Form");
        } else if (companyNameInput.value == '')  {
            return alert("What is your Company Name?");
        } else if (emailInput.value == '') {
            return alert("What is your email address?");
    }
    // EMAIL VERIFICATION
    function emailVerification(userInput) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (emailPattern.test(userInput.value) == false) {
            return alert("Invalid Email");
        }   else {
            return true
        }
    }

    //VALID
    if (companyNameInput.value != "" && emailInput != "" && emailVerification(emailInput) == true) {
        return alert("Your request for my " + serviceRequest.value + " service has been submitted!")
    }
    
});

//------------PANEL INFORMATION--------------------------------------------
for (let i=0; i < panels.length; ++i) {
    panels[i].addEventListener('click', e => {
        if (panels[i] == panels[0]) {
            return panelInfo.innerText = "this is the programming info!"
        } else if (panels[i] == panels[1]) {
            return panelInfo.innerText = "this is the training info!"
        } else if (panels[i] == panels[2]) {
            return panelInfo.innerText = "this is the contract service info"
        } else {
            return panelInfo.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias voluptatem voluptatibus amet. Suscipit officiis eligendi eius ex, magni atque quaerat illo minus dicta nesciunt dolor numquam molestias unde nihil."
        }
    } )
}