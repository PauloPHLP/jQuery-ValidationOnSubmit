$(() => {
    let form = $("#form");
    enableFastFeedback(form);

    $("#form").submit(function(event) {
        let name = $("#name").val();
        let password = $("#password").val();
        let message = $("#message").val();
        let checked = $("#checkbox").is(":checked");

        validateNameField(name, event);
        validatePasswordField(password, event);
        validateMessageField(message, event);
        validateCheckboxField(checked, event);
    });
});

function enableFastFeedback(formElement) {
    let name = formElement.find("#name");
    let password = formElement.find("#password");
    let message = formElement.find("#message");
    let checkbox = formElement.find("#checkbox");

    name.blur(function(event) {
        let name = $(this).val();

        validateNameField(name, event);

        if(!isValidName(name)) {
            $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"});
        } else {
            $(this).css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"});
        }
    })

    password.blur(function(event) {
        let password = $(this).val();

        validatePasswordField(password, event);

        if(!isValidPasswordField(password)) {
            $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"});
        } else {
            $(this).css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"});
        }
    })

    message.blur(function(event) {
        let message = $(this).val();

        validateMessageField(message, event);

        if(!isValidMessage(message)) {
            $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"});
        } else {
            $(this).css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"});
        }
    })

    checkbox.blur(function(event) {
        let isChecked = $(this).is(":checked");

        validateCheckboxField(isChecked, event);

        if(!isChecked) {
            $(this).add("label[for='cb']").css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"});
        } else {
            $(this).add("label[for='cb']").css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"});
        }
    })
}

function validateNameField(name, event) {
    if (!isValidName(name)) {
        $("#name-feedback").text("Please enter at least two characters");
        event.preventDefault();
    } else {
        $("#name-feedback").text("");
    }
}

function validatePasswordField(password, event) {
    if (!isValidPasswordField(password)) {
        $("#password-feedback").text("The password should have at least 6 characters");
        event.preventDefault();
    } else {
        $("#password-feedback").text("");
    }
}

function validateMessageField(message, event) {
    if (!isValidMessage(message)) {
        $("#message-feedback").text("Please enter a message");
        event.preventDefault();
    } else {
        $("#message-feedback").text("");
    }
}

function validateCheckboxField(isChecked, event) {
    if (!isChecked) {
        $("#checkbox-feedback").text("Please agree to this");
        event.preventDefault();
    } else {
        $("#checkbox-feedback").text("");
    }
}

function isValidName(name) {
    return name.length > 2;
}

function isValidPasswordField(password) {
    return password.length >= 6 && /.*[0-9].*/.test(password);
}

function isValidMessage(message) {
    return message.trim() != "";
}