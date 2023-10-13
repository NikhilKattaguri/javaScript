// Regular Expressions - Pattern Verification

let validate_firstName = () => {
    let first_name = document.getElementById('f_name');
    let f_name_value = first_name.value;
    let name_pattern = /^[A-Za-z]+$/;
    if(f_name_value.match(name_pattern)){
        first_name.style.border = '3px solid green';
    } else {
        first_name.style.border = '3px solid red';
        first_name.focus();
    }
}

function validate_lastName(){
    let last_name = document.getElementById('l_name');
    let l_name_value = last_name.value;
    let name_pattern = /^[A-Za-z]+$/;
    if(l_name_value.match(name_pattern)){
        last_name.style.border = '3px solid green';
    } else {
        last_name.style.border = '3px solid red';
        last_name.focus();
    }
}
function validate_email(){
    let email = document.getElementById('email');
    let email_id = email.value;
    let email_pattern = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(email_id.match(email_pattern)){
        email.style.border = '3px solid green';
    } else {
        email.style.border = '3px solid red';
        email.focus();
    }
}

function validate_coun(){
    let coun = document.getElementById('coun');
    let coun_name = coun.change;
    if(coun_name.change()){
        coun.style.border = '3px solid green';
    } else {
        coun.style.border = '3px solid red';
        coun.focus();
    }
}

function validate_phnnum(){
    let phnnum = document.getElementById('phn');
    let phn_value = phnnum.value;
    let phn_pattern = /^[0-9]{10}$/;
    if(phn_value.match(phn_pattern)){
        phnnum.style.border = '3px solid green';
    } else {
        phnnum.style.border = '3px solid red';
        phnnum.focus();
    }
}