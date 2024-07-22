import axios from 'axios';

const baseURL = 'http://localhost:3000/api';

// ! SIGN UP API CALL
export const postRequestSignUp = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
) => {
  try {
    const signUpResponse = await axios.post(baseURL + '/auth/signup', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    console.log("API -> POST signUP Response",signUpResponse.data.message)

    // CALL SUCCESSFUL
    return {
      message: signUpResponse.data.message,
      status: true,
    }
  } catch (error: any) {
    // Handle error
    console.error('API -> POST Error during SignUp:', error);
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
    const loginResponse = await axios.post(baseURL + '/auth/login', {
      email: email,
      password: password,
    });

    console.log("API -> POST login Response",loginResponse)
    console.log("API -> POST login Response",loginResponse.data.message)

    // CALL SUCCESSFUL
    return {
      message: loginResponse.data.message,
      status: true,
      token: loginResponse.data.token, // This is the JWT token
    }
  } catch (error: any) {
    // Handle error
    console.error('API -> POST Error during Login:', error);
    console.log(error);

    // CALL FAILED
    return {
      message: error.response.data.message,
      status: false,
    }
  }
}

// ! USER PROFILE DATA API CALL
export const getRequestUserProfile = async (
) => {
  try {
    const jwtToken = localStorage.getItem("jwtToken");
    const userEmail = localStorage.getItem("userEmail");
    const userProfileResponse = await axios.get(baseURL + `/user/profile?email=${userEmail}`, {
      headers: {
        Authorization: jwtToken,
        'Content-Type': 'application/json',
      }
    });

    console.log("API -> GET User Profile Data Response",userProfileResponse)
    console.log("API -> GET User Profile Data Response",userProfileResponse.data)

    return {
      status: true,
      data: userProfileResponse.data,
    }

  } catch (error: any) {
    // Handle error
    console.error('API -> Error during GET User Profile Data', error);
    console.log(error);

    // CALL FAILED
    return {
      message: error.response.data.message,
      status: false,
    }
  }
}