//  @ts-ignore
import validator from 'validator';

const regexForAlphanumericWithSpaces = /^[a-z0-9\s]+$/i

export const logInFormValidation = (
  logInFormEmail: string,
  setLogInFormEmailError: Function,
  logInFormPassword: string,
  setLogInFormPasswordError: Function
) => {
  let isLoginFormValid = true;

  // FORM VALIDATION FOR LOGIN EMAIL
  let isErrorOccuredForLoginEmail = false;
  if (validator.isEmpty(logInFormEmail)) {
    setLogInFormEmailError('Email is required');
    isLoginFormValid = false;
    isErrorOccuredForLoginEmail = true;
  } else if (!validator.isEmail(logInFormEmail)) {
    setLogInFormEmailError('Invalid email format');
    isLoginFormValid = false;
    isErrorOccuredForLoginEmail = true;
  }
  if (!isErrorOccuredForLoginEmail) {
    setLogInFormEmailError('');
  }

  // FORM VALIDATION FOR LOGIN PASSWORD
  let isErrorOccuredForLoginPassword = false;
  if (validator.isEmpty(logInFormPassword)) {
    setLogInFormPasswordError('Password is required');
    isLoginFormValid = false;
    isErrorOccuredForLoginPassword = true;
  } else if (!validator.isLength(logInFormPassword, { min: 8, max: 30 })) {
    setLogInFormPasswordError('Password must be atleast 8 or at most 30 characters');
    isLoginFormValid = false;
    isErrorOccuredForLoginPassword = true;
  }
  if (!isErrorOccuredForLoginPassword) {
    setLogInFormPasswordError('');
  }

  return isLoginFormValid;
}

export const signUpFormValidation = (
  signUpFormFirstName : string,
  setSignUpFormFirstNameError: Function,
  signUpFormLastName: string,
  setSignUpFormLastNameError: Function,
  signUpFormEmail: string,
  setSignUpFormEmailError: Function,
  signUpFormPassword: string,
  setSignUpFormPasswordError: Function
) => {
  let isSignUpFormValid = true;

  // FORM VALIDATION FOR SIGNUP FIRST NAME
  let isErrorOccuredForSignUpFirstName = false;
  if (validator.isEmpty(signUpFormFirstName)) {
    setSignUpFormFirstNameError('First name is required');
    isSignUpFormValid = false;
    isErrorOccuredForSignUpFirstName = true;
  } else if (!regexForAlphanumericWithSpaces.test(signUpFormFirstName)) {
    setSignUpFormFirstNameError('Special characters are not allowed');
    isSignUpFormValid = false;
    isErrorOccuredForSignUpFirstName = true;
  }
  if (!isErrorOccuredForSignUpFirstName) {
    setSignUpFormFirstNameError('');
  }

  // FORM VALIDATION FOR SIGNUP LAST NAME
  let isErrorOccuredForSignUpLastName = false;
  if (validator.isEmpty(signUpFormLastName)) {
  } else if (!regexForAlphanumericWithSpaces.test(signUpFormLastName)) {
    setSignUpFormLastNameError('Special characters are not allowed');
    isSignUpFormValid = false;
    isErrorOccuredForSignUpLastName = true;
  }
  if (!isErrorOccuredForSignUpLastName) {
    setSignUpFormLastNameError('');
  }

  // FORM VALIDATION FOR SIGNUP EMAIL
  let isErrorOccuredForSignUpEmail = false;
  if (validator.isEmpty(signUpFormEmail)) {
    setSignUpFormEmailError('Email is required');
    isSignUpFormValid = false;
    isErrorOccuredForSignUpEmail = true;
  } else if (!validator.isEmail(signUpFormEmail)) {
    setSignUpFormEmailError('Invalid email format');
    isSignUpFormValid = false;
    isErrorOccuredForSignUpEmail = true;
  }
  if (!isErrorOccuredForSignUpEmail) {
    setSignUpFormEmailError('');
  }

  // FORM VALIDATION FOR SIGNUP PASSWORD
  let isErrorOccuredForSignUpPassword = false;
  if (validator.isEmpty(signUpFormPassword)) {
    setSignUpFormPasswordError('Password is required');
    isSignUpFormValid = false;
    isErrorOccuredForSignUpPassword = true;
  } else if (!validator.isLength(signUpFormPassword, { min: 8, max: 30 })) {
    setSignUpFormPasswordError('Password must be atleast 8 or at most 30 characters');
    isSignUpFormValid = false;
    isErrorOccuredForSignUpPassword = true;
  } 
  if (!isErrorOccuredForSignUpPassword) {
    setSignUpFormPasswordError('');
  }

  return isSignUpFormValid;
}