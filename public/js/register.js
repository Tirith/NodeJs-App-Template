const emailInput = $('#email');
const nameInput = $('#fname');
const lastnameInput = $('#lname');
const passInput = $('#pass');
const submitBtn = $('#submit-btn');
const errorLabel = $('.errors')




const checkEmail = () => {
    if (!validator.isEmail(emailInput.val())) {
        emailInput.removeClass('input-success')
        emailInput.addClass('input-error')
        console.log(validator.isEmail(emailInput.val()))
        return false
    } else {
        emailInput.removeClass('input-error')
        emailInput.addClass('input-success')
        console.log(validator.isEmail(emailInput.val()))
        return true
    }

}

const checkName = () => {
    if (!validator.isLength(nameInput.val(), { min: 2 })) {
        nameInput.removeClass('input-success')
        nameInput.addClass('input-error')
        return false
    } else {
        nameInput.addClass('input-success')
        return true
    }
}

const checkLastName = () => {
    if (!validator.isLength(lastnameInput.val(), { min: 2 })) {
        lastnameInput.removeClass('input-success')
        lastnameInput.addClass('input-error')
        return false
    } else {
        lastnameInput.addClass('input-success')
        return true
    }

}

const checkPassword = () => {

    if (!validator.isLength(passInput.val(), { min: 5 })) {
        passInput.removeClass('input-success')
        passInput.addClass('input-error')

        return false
    } else {
        passInput.addClass('input-success')
        return true
    }

}

emailInput.on('input', checkEmail);
nameInput.on('input', checkName);
lastnameInput.on('input', checkLastName);
passInput.on('input', checkPassword);

submitBtn.click(function(event) {

    if (checkEmail() && checkName() && checkLastName() && checkPassword()) {

    } else {
        event.preventDefault();
    }
});