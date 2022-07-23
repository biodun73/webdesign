function validate() {
        let name = document.forms["contact-form"]["fullname"];
        let phone = document.forms["contact-form"]["phone"];
        let email = document.forms["contact-form"]["email"];
        let comment = document.forms["contact-form"]["comment"];
        if(name.value==""){
                document.getElementById("result").innerHTML = "Please enter your full name";
                name.focus();
                return false;
        }
        if (phone.value == "") {
                document.getElementById("result").innerHTML = "Please enter your phone number";
                phone.focus();
                return false;
        }
        if (email.value == "") {
                document.getElementById("result").innerHTML = "Please enter your email address";
                email.focus();
                return false;
        }
        if (comment.value == "") {
                document.getElementById("result").innerHTML = "Please enter your comment";
                comment.focus();
                return false;
        }
        if(!(name.value && phone.value&& email.value&&comment.value) == ""){
                document.getElementById("result").innerHTML = "Thank you for submitting your request";
                return false;
        }
    return true;    
}
validate()