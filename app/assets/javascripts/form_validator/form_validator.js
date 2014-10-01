ReddyReader.FormValidator = function(formSelector, validations) {
  $(formSelector).bootstrapValidator(validations);
}

ReddyReader.LoginFormValidator = function(loginFormSelector) {
  var validations = {
    message: 'This value is not valid',
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      username: {
        message: 'The username is not valid',
        validators: {
          notEmpty: {
            message: 'The username is required and cannot be empty'
          },
          stringLength: {
            min: 6,
            max: 30,
            message: 'The username must be more than 6 and less than 30 characters long'
          },
          regexp: {
            regexp: /^[a-zA-Z0-9_]+$/,
            message: 'The username can only consist of alphabetical, number and underscore'
          }
        }
      },
      password: {
        message: 'The password is not valid',
        validators: {
          notEmpty: {
            message: 'The password is required and cannot be empty'
          },
          stringLength: {
            min: 8,
            message: 'The password must be more than 8 30 characters long'
          }
        }
      }
    }
  };
  ReddyReader.FormValidator(loginFormSelector, validations);
}

ReddyReader.RegisterFormValidator = function(registerFormSelector) {
  var validations = {
    message: 'This value is not valid',
    fields: {
      username: {
        message: 'The username is not valid',
        validators: {
          notEmpty: {
            message: 'The username is required and cannot be empty'
          },
          stringLength: {
            min: 6,
            max: 30,
            message: 'The username must be more than 6 and less than 30 characters long'
          },
          regexp: {
            regexp: /^[a-zA-Z0-9_]+$/,
            message: 'The username can only consist of alphabetical, number and underscore'
          }
        }
      },
      password: {
        message: 'The password is not valid',
        validators: {
          notEmpty: {
            message: 'The password is required and cannot be empty'
          },
          stringLength: {
            min: 8,
            message: 'The password must be more than 8 characters long'
          },
          identical: {
            field: 'confirm_password',
            message: 'The password and its confirm are not the same'
          }
        }
      },
      confirm_password: {
        message: 'The password is not valid',
        validators: {
          notEmpty: {
            message: 'The password is required and cannot be empty'
          },
          stringLength: {
            min: 8,
            message: 'The password must be more than 8 characters long'
          },
          identical: {
            field: 'password',
            message: 'The password and its confirm are not the same'
          }
        }
      }
    }
  };
  ReddyReader.FormValidator(registerFormSelector, validations);
}
