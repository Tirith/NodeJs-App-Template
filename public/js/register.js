const emailInput = $('#email');
const nameInput = $('#fname');
const lastnameInput = $('#lname');
const passInput = $('#pass');
const submitBtn = $('#submit-btn');
const errorLabel = $('.errors');

const validEmailIcon = $('#validEmailIcon');
const validNameIcon = $('#validNameIcon');
const validLastNameIcon = $('#validLastNameIcon');
const validPasswordIcon = $('#validPasswordIcon');



validEmailIcon.css('display', 'none');
validNameIcon.css('display', 'none');
validLastNameIcon.css('display', 'none');
validPasswordIcon.css('display', 'none');

const checkEmail = () => {
    if (!validator.isEmail(emailInput.val())) {
        emailInput.removeClass('input-success')
        emailInput.addClass('input-error')
        validEmailIcon.css('display', 'none');

        return false
    } else {
        emailInput.removeClass('input-error')
        emailInput.addClass('input-success')
        validEmailIcon.css('display', '');

        return true
    }

}

const checkName = () => {
    if (!validator.isLength(nameInput.val(), { min: 2 })) {
        nameInput.removeClass('input-success')
        nameInput.addClass('input-error')
        validNameIcon.css('display', 'none');
        return false
    } else {
        nameInput.addClass('input-success')
        validNameIcon.css('display', '');
        return true
    }
}

const checkLastName = () => {
    if (!validator.isLength(lastnameInput.val(), { min: 2 })) {
        lastnameInput.removeClass('input-success');
        lastnameInput.addClass('input-error');
        validLastNameIcon.css('display', 'none');
        return false
    } else {
        lastnameInput.addClass('input-success');
        validLastNameIcon.css('display', '');
        return true
    }

}

const checkPassword = () => {

    if (!validator.isLength(passInput.val(), { min: 5 })) {
        passInput.removeClass('input-success');
        passInput.addClass('input-error');
        validPasswordIcon.css('display', 'none');

        return false
    } else {
        passInput.addClass('input-success');
        validPasswordIcon.css('display', '');
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