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
export const getRequestUserProfile = async () => {
  try {
    const jwtToken = localStorage.getItem("jwtToken");
    const userEmail = localStorage.getItem("userEmail");
    const userProfileResponse = await axios.get(baseURL + `/user/profile?email=${userEmail}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
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

// ! UNI SELECT API CALL
// Define the type of payload
interface Payload {
  [key: string]: string | File | null;
}

export const postRequestUniSelectForm = async (
  highestDegreeAchieved : string,
  highestDegreeAchievedSpecialisation: string,
  highestDegreeAchievedGraduationYear: string,
  heightDegreeAchievedInstitution: string,
  highestDegreeAchievedCollegeTier: string,
  cgpaScore: string,
  cgpaScale: string,
  greQuantScore: string,
  greVerbalScore: string,
  gmatScore: string,
  gmatExamEdition: string,
  toeflScore: string,
  ieltsScore: string,
  destinationCountry: string,
  degreeOfInterest: string,
  degreeOfInterestSpecialisation: string,
  educationBudget: string,
  yearsOfWorkEx: string,
  typeOfWorkEx: string,
  typeOfCompany: string,
  nameOfTheCompany: string,
  jobTitle: string,
  numberOfResearchArticles: string,
  qualityOfResearch: string,
  numberOfLetterOfRecommendation: string,
  qualityOfLetterOfRecommendation: string,
  linkedInUrl: string,
  portfolioUrl: string,
  researchArticleUrl: string,
  githubUrl: string,
) => {
  try{

    // Get the JWT token and user email from the local storage
    const jwtToken = localStorage.getItem("jwtToken");
    const userEmail = localStorage.getItem("userEmail");

    // Create an object with all the data
    const payload : Payload = {
      "email": userEmail,
      "highest_degree_achieved": highestDegreeAchieved,
      "highest_degree_achieved_specialisation": highestDegreeAchievedSpecialisation,
      "highest_degree_achieved_graduation_year": highestDegreeAchievedGraduationYear,
      "height_degree_achieved_institution": heightDegreeAchievedInstitution,
      "highest_degree_achieved_college_tier": highestDegreeAchievedCollegeTier,
      "cgpa_score": cgpaScore,
      "cgpa_scale": cgpaScale,
      "gre_quant_score": greQuantScore,
      "gre_verbal_score": greVerbalScore,
      "gmat_score": gmatScore,
      "gmat_exam_edition": gmatExamEdition,
      "toefl_score": toeflScore,
      "ielts_score": ieltsScore,
      "destination_country": destinationCountry,
      "degree_of_interest": degreeOfInterest,
      "degree_of_interest_specialisation": degreeOfInterestSpecialisation,
      "education_budget": educationBudget,
      "years_of_work_ex": yearsOfWorkEx,
      "type_of_work_ex": typeOfWorkEx,
      "type_of_company": typeOfCompany,
      "name_of_the_company": nameOfTheCompany,
      "job_title": jobTitle,
      "number_of_research_articles": numberOfResearchArticles,
      "quality_of_research": qualityOfResearch,
      "number_of_letter_of_recommendation": numberOfLetterOfRecommendation,
      "quality_of_letter_of_recommendation": qualityOfLetterOfRecommendation,
      "linked_in_url": linkedInUrl,
      "portfolio_url": portfolioUrl,
      "research_article_url": researchArticleUrl,
      "github_url": githubUrl,
    }


    // Make the POST request
    const uniFormSubmitResponse = await axios.post(baseURL + '/data/uni-select' , payload, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
      },
    });

    console.log("API -> POST Uni Select Form Response",uniFormSubmitResponse)
    console.log("API -> POST Uni Select Form Response Data",uniFormSubmitResponse.data)

    return {
      status: true,
      message: uniFormSubmitResponse.data.message,
      uni_recommendations: uniFormSubmitResponse.data.uni_recommendations,
    }

  } catch (error: any) {
    // Handle error
    console.error('API -> Error during POST Uni Select', error);
    console.log(error);

    return {
      status: false,
      message: error.response.data.message,
    }
  }
}