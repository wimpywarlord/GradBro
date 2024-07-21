import axios from 'axios';

// ! SIGN UP API CALL
export const postRequestSignUp = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
) => {
  try {
    const signUpResponse = await axios.post('http://localhost:3000/api/auth/signup', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    console.log("API -> signUP Response",signUpResponse.data.message)

    // CALL SUCCESSFUL
    return {
      message: signUpResponse.data.message,
      status: true,
    }
  } catch (error: any) {
    // Handle error
    console.error('API -> Error during SignUp:', error);
    console.log(error);

    // CALL FAILED
    return {
      message: error.response.data.message,
      status: false,
    }
  }
}


// ! LOGIN API CALL
export const postRequestLogin = async (
  email: string,
  password: string,
) => {
  try {
    const loginResponse = await axios.post('http://localhost:3000/api/auth/login', {
      email: email,
      password: password,
    });

    console.log("API -> login Response",loginResponse.data.message)

    // CALL SUCCESSFUL
    return {
      message: loginResponse.data.message,
      status: true,
    }
  } catch (error: any) {
    // Handle error
    console.error('API -> Error during Login:', error);
    console.log(error);

    // CALL FAILED
    return {
      message: error.response.data.message,
      status: false,
    }
  }
}