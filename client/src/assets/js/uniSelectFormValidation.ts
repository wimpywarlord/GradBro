//  @ts-ignore
import validator from 'validator';

const regexForIntegerNumericWithPositiveNegativeNumbers = /^[+-]?\d+$/;
const regexForFloatNumericWithPositiveNegativeNumbers = /^[+-]?\d+(\.\d+)?$/;
const regexForAlphanumericWithSpaces = /^[a-zA-Z0-9\s\-\(\),'.!?;:&"]+$/

export const uniSelectFormValidation = (
  highestDegreeAchieved: string,
  setHighestDegreeAchievedError: Function, // USE STATE FUNCTION
  highestDegreeAchievedSpecialisation: string,
  setHighestDegreeAchievedSpecialisationError: Function, // USE STATE FUNCTION
  highestDegreeAchievedGraduationYear: string,
  setHighestDegreeAchievedGraduationYearError: Function, // USE STATE FUNCTION
  heightDegreeAchievedInstitution: string,
  setHeightDegreeAchievedInstitutionError: Function, // USE STATE FUNCTION
  // highestDegreeAchievedCollegeTier: string,
  // setHighestDegreeAchievedCollegeTierError: Function, // USE STATE FUNCTION
  cgpaScore: string,
  cgpaScale: string,
  setCombinedCGPAError: Function, // USE STATE FUNCTION
  greQuantScore: string,
  greVerbalScore: string,
  setGreScoreCombinedError: Function, // USE STATE FUNCTION
  gmatScore: string,
  gmatExamEdition: string,
  setGmatScoreAndEditionErrorCombined: Function, // USE STATE FUNCTION
  toeflScore: string,
  setToeflScoreError: Function, // USE STATE FUNCTION
  ieltsScore: string,
  setIeltsScoreError: Function, // USE STATE FUNCTION
  destinationCountry: string,
  setDestinationCountryError: Function, // USE STATE FUNCTION
  degreeOfInterest: string,
  setDegreeOfInterestError: Function, // USE STATE FUNCTION
  degreeOfInterestSpecialisation: string,
  setDegreeOfInterestSpecialisationError: Function, // USE STATE FUNCTION
  // educationBudget: string,
  // setEducationBudgetError: Function, // USE STATE FUNCTION
  yearsOfWorkEx: string,
  setYearsOfWorkExError: Function, // USE STATE FUNCTION
  // typeOfWorkEx: string,
  // setTypeOfWorkExError: Function, // USE STATE FUNCTION
  // typeOfCompany: string,
  // setTypeOfCompanyError: Function, // USE STATE FUNCTION
  nameOfTheCompany: string,
  setNameOfTheCompanyError: Function, // USE STATE FUNCTION
  jobTitle: string,
  setJobTitleError: Function, // USE STATE FUNCTION
  numberOfResearchArticles: string,
  setNumberOfResearchArticlesError: Function, // USE STATE FUNCTION
  // qualityOfResearch: string,
  // setQualityOfResearchError: Function, // USE STATE FUNCTION
  numberOfLetterOfRecommendation: string,
  setNumberOfLetterOfRecommendationError: Function, // USE STATE FUNCTION
  // qualityOfLetterOfRecommendation: string,
  // setQualityOfLetterOfRecommendationError: Function, // USE STATE FUNCTION
  linkedInUrl: string,
  setLinkedInUrlError: Function, // USE STATE FUNCTION
  portfolioUrl: string,
  setPortfolioUrlError: Function, // USE STATE FUNCTION
  researchArticleUrl: string,
  setResearchArticleUrlError: Function, // USE STATE FUNCTION
  githubUrl: string,
  setGithubUrlError: Function, // USE STATE FUNCTION
) => {
  // console.log("highestDegreeAchieved", highestDegreeAchieved)
  // console.log("highestDegreeAchievedSpecialisation", highestDegreeAchievedSpecialisation)
  // console.log("highestDegreeAchievedGraduationYear", highestDegreeAchievedGraduationYear)
  // console.log("heightDegreeAchievedInstitution", heightDegreeAchievedInstitution)
  // console.log("highestDegreeAchievedCollegeTier", highestDegreeAchievedCollegeTier)
  // console.log("cgpaScore", cgpaScore)
  // console.log("cgpaScale", cgpaScale)
  // console.log("greQuantScore", greQuantScore)
  // console.log("greVerbalScore", greVerbalScore)
  // console.log("gmatScore", gmatScore)
  // console.log("gmatExamEdition", gmatExamEdition)
  // console.log("toeflScore", toeflScore)
  // console.log("ieltsScore", ieltsScore)
  // console.log("destinationCountry", destinationCountry)
  // console.log("degreeOfInterest", degreeOfInterest)
  // console.log("degreeOfInterestSpecialisation", degreeOfInterestSpecialisation)
  // console.log("educationBudget", educationBudget)
  // console.log("yearsOfWorkEx", yearsOfWorkEx)
  // console.log("typeOfWorkEx", typeOfWorkEx)
  // console.log("typeOfCompany", typeOfCompany)
  // console.log("nameOfTheCompany", nameOfTheCompany)
  // console.log("jobTitle", jobTitle)
  // console.log("numberOfResearchArticles", numberOfResearchArticles)
  // console.log("qualityOfResearch", qualityOfResearch)
  // console.log("numberOfLetterOfRecommendation", numberOfLetterOfRecommendation)
  // console.log("qualityOfLetterOfRecommendation", qualityOfLetterOfRecommendation)
  // console.log("linkedInUrl", linkedInUrl)
  // console.log("portfolioUrl", portfolioUrl)
  // console.log("researchArticleUrl", researchArticleUrl)
  // console.log("githubUrl", githubUrl)

  // FLAG VARIABLE
  let isFormGoodToSubmit : boolean= true;

  // ! FORM VALIDATION TESTS FOR - HIGHEST DEGREE ACHIEVED
  let isErrorOccuredForHighestDegreeAchieved = false;
  if (validator.isEmpty(highestDegreeAchieved)) { // IS EMPTY
    // console.log("1-highestDegreeAchieved")
    setHighestDegreeAchievedError("This field is required");
    isFormGoodToSubmit = false;
    isErrorOccuredForHighestDegreeAchieved = true;
  } else{
    if(!regexForAlphanumericWithSpaces.test(highestDegreeAchieved)){ // IS NOT ALPHANUMERIC
      // console.log("2-highestDegreeAchieved")
      setHighestDegreeAchievedError("Special characters are not allowed");
      isFormGoodToSubmit = false;
      isErrorOccuredForHighestDegreeAchieved = true;
    }
  }
  // RESET ERROR IF NO ERROR OCCURED
  if(!isErrorOccuredForHighestDegreeAchieved){
    setHighestDegreeAchievedError("");
  }

  // ! FORM VALIDATION TESTS FOR - HIGHEST DEGREE ACHIEVED SPECIALISATION
  let isErrorOccuredForHighestDegreeAchievedSpecialisation = false;
  if(!regexForAlphanumericWithSpaces.test(highestDegreeAchievedSpecialisation) && !(highestDegreeAchievedSpecialisation == "")){ // IS NOT ALPHANUMERIC AND IS NOT EMPTY
    // console.log("2-highestDegreeAchievedSpecialisation")
    setHighestDegreeAchievedSpecialisationError("Special characters are not allowed");
    isFormGoodToSubmit = false;
    isErrorOccuredForHighestDegreeAchievedSpecialisation = true;
  }
  // RESET ERROR IF NO ERROR OCCURED
  if(!isErrorOccuredForHighestDegreeAchievedSpecialisation){
    setHighestDegreeAchievedSpecialisationError("");
  }

  // ! FORM VALIDATION TESTS FOR - HIGHEST DEGREE ACHIEVED GRADUATION YEAR
  let isErrorOccuredForHighestDegreeAchievedGraduationYear = false;
  if (validator.isEmpty(highestDegreeAchievedGraduationYear)) { // IS EMPTY
    // console.log("1-highestDegreeAchievedGraduationYear")
    setHighestDegreeAchievedGraduationYearError("This field is required");
    isFormGoodToSubmit = false;
    isErrorOccuredForHighestDegreeAchievedGraduationYear = true;
  } else{
    const regexForNumeric = /^\d+$/;
    if(!regexForNumeric.test(highestDegreeAchievedGraduationYear)){ // IS NOT NUMERIC
      // console.log("2-highestDegreeAchievedGraduationYear")
      setHighestDegreeAchievedGraduationYearError("Only numeric values are allowed");
      isFormGoodToSubmit = false;
      isErrorOccuredForHighestDegreeAchievedGraduationYear = true;
    }
  }
  // RESET ERROR IF NO ERROR OCCURED
  if(!isErrorOccuredForHighestDegreeAchievedGraduationYear){
    setHighestDegreeAchievedGraduationYearError("");
  }

   // ! FORM VALIDATION TESTS FOR - INSTITUTION OF HIGHEST DEGREE ACHIEVED
  let isErrorOccuredForHeightDegreeAchievedInstitution = false;
  if(validator.isEmpty(heightDegreeAchievedInstitution)){
    // console.log("1-setHeightDegreeAchievedInstitutionError")
    setHeightDegreeAchievedInstitutionError("This field is required");
    isFormGoodToSubmit = false;
    isErrorOccuredForHeightDegreeAchievedInstitution = true;
  } else {
    if(!regexForAlphanumericWithSpaces.test(heightDegreeAchievedInstitution)){ // IS NOT ALPHANUMERIC
      // console.log("2-setHeightDegreeAchievedInstitutionError")
      setHeightDegreeAchievedInstitutionError("Special characters are not allowed");
      isFormGoodToSubmit = false;
      isErrorOccuredForHeightDegreeAchievedInstitution = true;
    }
  }
  // RESET ERROR IF NO ERROR OCCURED
  if(!isErrorOccuredForHeightDegreeAchievedInstitution){
    setHeightDegreeAchievedInstitutionError("");
  }

  // ! FORM VALIDATION TESTS FOR CGPA SCORE
  let isErrorOccuredForCgpaScoreAndCgpaScale = false;
  if(validator.isEmpty(cgpaScore) || validator.isEmpty(cgpaScale)) { // IS EMPTY
    // console.log("1-cgpaScore and cgpaScale")
    setCombinedCGPAError("This field is required");
    isFormGoodToSubmit = false;
    isErrorOccuredForCgpaScoreAndCgpaScale = true;
  } else {
    if(!(regexForFloatNumericWithPositiveNegativeNumbers.test(cgpaScore)) || !(regexForFloatNumericWithPositiveNegativeNumbers.test(cgpaScale))){ // IS NOT NUMERIC
      // console.log("2-cgpaScore and cgpaScale")
      setCombinedCGPAError("Only numeric values are allowed");
      isFormGoodToSubmit = false;
      isErrorOccuredForCgpaScoreAndCgpaScale = true;
    } else {
      if(parseFloat(cgpaScore) < 0 || parseFloat(cgpaScale) < 0){ // IS NEGATIVE
        // console.log("3-cgpaScore and cgpaScale")
        setCombinedCGPAError("Values cannot be negative");
        isFormGoodToSubmit = false;
        isErrorOccuredForCgpaScoreAndCgpaScale = true;
      } else {
        if(parseFloat(cgpaScore) > parseFloat(cgpaScale)){ // CGPA SCORE IS GREATER THAN CGPA SCALE
          // console.log("4-cgpaScore and cgpaScale")
          setCombinedCGPAError("CGPA Score cannot be greater than CGPA Scale");
          isFormGoodToSubmit = false;
          isErrorOccuredForCgpaScoreAndCgpaScale = true;
        }
      }      
    }
  }
  // RESET ERROR IF NO ERROR OCCURED
  if(!isErrorOccuredForCgpaScoreAndCgpaScale){
    setCombinedCGPAError("");
  }

  // ! FORM VALIDATION TESTS FOR GRE SCORE
  let isErrorOccuredForGreScoreCombined = false;
  if(validator.isEmpty(greQuantScore) && validator.isEmpty(greVerbalScore)) { // BOTH ARE EMPTY
  } else {
    if(!validator.isEmpty(greQuantScore) && validator.isEmpty(greVerbalScore)){ // GRE VERBAL SCORE IS EMPTY
      // console.log("1-greQuantScore and greVerbalScore")
      setGreScoreCombinedError("GRE Verbal Score is missing");
      isFormGoodToSubmit = false;
      isErrorOccuredForGreScoreCombined = true;
    } else if(validator.isEmpty(greQuantScore) && !validator.isEmpty(greVerbalScore)){ // GRE QUANT SCORE IS EMPTY
      // console.log("1-greQuantScore and greVerbalScore")
      setGreScoreCombinedError("GRE Quant Score is missing");
      isFormGoodToSubmit = false;
      isErrorOccuredForGreScoreCombined = true;
    } else {
      if(!(regexForIntegerNumericWithPositiveNegativeNumbers.test(greQuantScore)) || !(regexForIntegerNumericWithPositiveNegativeNumbers.test(greVerbalScore))){ // IS NOT NUMERIC
        // console.log("1-greQuantScore and greVerbalScore")
        setGreScoreCombinedError("Only integer numeric values are allowed");
        isFormGoodToSubmit = false;
        isErrorOccuredForGreScoreCombined = true;
      } else {
        // BOTH SCORES SHOULD IN RANGE 120-170
        if((parseInt(greQuantScore) < 120 || parseInt(greQuantScore) > 170) || (parseInt(greVerbalScore) < 120 || parseInt(greVerbalScore) > 170)){
          // console.log("2-greQuantScore and greVerbalScore")
          setGreScoreCombinedError("Values should be in range 120-170");
          isFormGoodToSubmit = false;
          isErrorOccuredForGreScoreCombined = true;
        }
      }
    }
  }
  // RESET ERROR IF NO ERROR OCCURED
  if(!isErrorOccuredForGreScoreCombined){
    setGreScoreCombinedError("");
  }

  // ! FORM VALIDATION FOR GMAT SCORE
  let isErrorOccuredForGmatScoreAndEditionErrorCombined = false;
  if(validator.isEmpty(gmatScore) && validator.isEmpty(gmatExamEdition)) { // BOTH ARE EMPTY
  } else {
    if(!validator.isEmpty(gmatExamEdition) && validator.isEmpty(gmatScore)){ // GMAT SCORE IS EMPTY
      // console.log("1-gmatExamEdition")
      setGmatScoreAndEditionErrorCombined("GMAT Score is missing");
      isFormGoodToSubmit = false;
      isErrorOccuredForGmatScoreAndEditionErrorCombined = true;
    } else if(validator.isEmpty(gmatExamEdition) && !validator.isEmpty(gmatScore)){ // GMAT EDITION IS EMPTY
      // console.log("1-gmatExamEdition")
      setGmatScoreAndEditionErrorCombined("GMAT Edition is missing");
      isFormGoodToSubmit = false;
      isErrorOccuredForGmatScoreAndEditionErrorCombined = true;
    } else { // BOTH ARE FILLED
      if(!(regexForIntegerNumericWithPositiveNegativeNumbers.test(gmatScore))){ // IS NOT NUMERIC
        // console.log("1-gmatScore")
        setGmatScoreAndEditionErrorCombined("Only integer numeric values are allowed for GMAT Score");
        isFormGoodToSubmit = false;
        isErrorOccuredForGmatScoreAndEditionErrorCombined = true;
      } else {
        // GMAT SCORE SHOULD BE IN RANGE 200-805
        if(parseInt(gmatScore) < 200 || parseInt(gmatScore) > 805){
          // console.log("2-gmatScore")
          setGmatScoreAndEditionErrorCombined("Value should be in range 200-805");
          isFormGoodToSubmit = false;
          isErrorOccuredForGmatScoreAndEditionErrorCombined = true;
        }
      }
    }
  }
  // RESET ERROR IF NO ERROR OCCURED
  if(!isErrorOccuredForGmatScoreAndEditionErrorCombined){
    setGmatScoreAndEditionErrorCombined("");
  }

  // ! FORM VALIDATION FOR TOEFL SCORE
  let isErrorOccuredForToeflScore = false;
  if(validator.isEmpty(toeflScore)) { // IS EMPTY
  } else {
    if(!(regexForIntegerNumericWithPositiveNegativeNumbers.test(toeflScore))){ // IS NOT NUMERIC
      // console.log("1-toeflScore")
      setToeflScoreError("Only integer numeric values are allowed");
      isFormGoodToSubmit = false;
      isErrorOccuredForToeflScore = true;
    } else {
      // TOEFL SCORE SHOULD BE IN RANGE 0-120
      if(parseInt(toeflScore) < 0 || parseInt(toeflScore) > 120){
        // console.log("2-toeflScore")
        setToeflScoreError("Value should be in range 0-120");
        isFormGoodToSubmit = false;
        isErrorOccuredForToeflScore = true;
      }
    }
  }
  // RESET ERROR IF NO ERROR OCCURED
  if(!isErrorOccuredForToeflScore){
    setToeflScoreError("");
  }

  // ! FORM VALIDATION FOR IELTS SCORE
  let isErrorOccuredForIeltsScore = false;
  if(validator.isEmpty(ieltsScore)) { // IS EMPTY
  } else {
    if(!(regexForIntegerNumericWithPositiveNegativeNumbers.test(ieltsScore))){ // IS NOT NUMERIC
      // console.log("1-ieltsScore")
      setIeltsScoreError("Only numeric values are allowed");
      isFormGoodToSubmit = false;
      isErrorOccuredForIeltsScore = true;
    } else {
      // IELTS SCORE SHOULD BE IN RANGE 0-9
      if(parseFloat(ieltsScore) < 0 || parseFloat(ieltsScore) > 9){
        // console.log("2-ieltsScore")
        setIeltsScoreError("Value should be in range 0-9");
        isFormGoodToSubmit = false;
        isErrorOccuredForIeltsScore = true;
      }
    }
  }
  // RESET ERROR IF NO ERROR OCCURED
  if(!isErrorOccuredForIeltsScore){
    setIeltsScoreError("");
  }

  // ! FORM VALIDATION FOR DESTINATION COUNTRY
  let isErrorOccuredForDestinationCountry = false;
  if(validator.isEmpty(destinationCountry)) { // IS EMPTY
    // console.log("1-destinationCountry")
    setDestinationCountryError("This field is required");
    isFormGoodToSubmit = false;
    isErrorOccuredForDestinationCountry = true;
  }
  // RESET ERROR IF NO ERROR OCCURED
  if(!isErrorOccuredForDestinationCountry){
    setDestinationCountryError("");
  }

  // ! FORM VALIDATION FOR DEGREE OF INTEREST
  let isErrorOccuredForDegreeOfInterest = false;
  if(validator.isEmpty(degreeOfInterest)) { // IS EMPTY
    // console.log("1-degreeOfInterest")
    setDegreeOfInterestError("This field is required");
    isFormGoodToSubmit = false;
    isErrorOccuredForDegreeOfInterest = true;
  } else {
    if(!regexForAlphanumericWithSpaces.test(degreeOfInterest)){ // IS NOT ALPHANUMERIC
      // console.log("2-degreeOfInterest")
      setDegreeOfInterestError("Special characters are not allowed");
      isFormGoodToSubmit = false;
      isErrorOccuredForDegreeOfInterest = true;
    }
  }
  // RESET ERROR IF NO ERROR OCCURED
  if(!isErrorOccuredForDegreeOfInterest){
    setDegreeOfInterestError("");
  }

  // ! FORM VALIDATION FOR DEGREE OF INTEREST SPECIALISATION
  let isErrorOccuredForDegreeOfInterestSpecialisation = false;
  if(validator.isEmpty(degreeOfInterestSpecialisation)) { // IS EMPTY
  } else {
    if(!regexForAlphanumericWithSpaces.test(degreeOfInterestSpecialisation)){ // IS NOT ALPHANUMERIC AND IS NOT EMPTY
      // console.log("2-degreeOfInterestSpecialisation")
      setDegreeOfInterestSpecialisationError("Special characters are not allowed");
      isFormGoodToSubmit = false;
      isErrorOccuredForDegreeOfInterestSpecialisation = true;
    }
  }
  // RESET ERROR IF NO ERROR OCCURED
  if(!isErrorOccuredForDegreeOfInterestSpecialisation){
    setDegreeOfInterestSpecialisationError("");
  }

  // ! FORM VALIDATION FOR YEARS OF WORK EXPERIENCE
  let isErrorOccuredForYearsOfWorkEx = false;
  if(validator.isEmpty(yearsOfWorkEx)) { // IS EMPTY
    // console.log("1-yearsOfWorkEx")
    setYearsOfWorkExError("This field is required");
    isFormGoodToSubmit = false;
    isErrorOccuredForYearsOfWorkEx = true;
  }
  // RESET ERROR IF NO ERROR OCCURED
  if(!isErrorOccuredForYearsOfWorkEx){
    setYearsOfWorkExError("");
  }

  // ! FORM VALIDATION FOR NAME OF THE COMPANY
  let isErrorOccuredForNameOfTheCompany = false;
  if(validator.isEmpty(nameOfTheCompany)) { // IS EMPTY 
  } else {
    if(!regexForAlphanumericWithSpaces.test(nameOfTheCompany)){ // IS NOT ALPHANUMERIC
      // console.log("1-nameOfTheCompany")
      setNameOfTheCompanyError("Special characters are not allowed");
      isFormGoodToSubmit = false;
      isErrorOccuredForNameOfTheCompany = true;
    }
  }
  // RESET ERROR IF NO ERROR OCCURED
  if(!isErrorOccuredForNameOfTheCompany){
    setNameOfTheCompanyError("");
  }

  // ! FORM VALIDATION FOR JOB TITLE
  let isErrorOccuredForJobTitle = false;
  if(validator.isEmpty(jobTitle)) { // IS EMPTY
  } else {
    if(!regexForAlphanumericWithSpaces.test(jobTitle)){ // IS NOT ALPHANUMERIC
      // console.log("1-jobTitle")
      setJobTitleError("Special characters are not allowed");
      isFormGoodToSubmit = false;
      isErrorOccuredForJobTitle = true;
    }
  }
  // RESET ERROR IF NO ERROR OCCURED
  if(!isErrorOccuredForJobTitle){
    setJobTitleError("");
  }
  
  // ! FORM VALIDATION FOR NUMBER OF RESEARCH ARTICLES
  let isErrorOccuredForNumberOfResearchArticles = false;
  if(validator.isEmpty(numberOfResearchArticles)) { // IS EMPTY
  } else {
    if(!regexForIntegerNumericWithPositiveNegativeNumbers.test(numberOfResearchArticles)){ // IS NOT INTEGER
      // console.log("1-numberOfResearchArticles")
      setNumberOfResearchArticlesError("Only integer numeric values are allowed");
      isFormGoodToSubmit = false;
      isErrorOccuredForNumberOfResearchArticles = true;
    } else {
      if((parseInt(numberOfResearchArticles) < 0 || parseInt(numberOfResearchArticles) > 20)){ // IS NOT IN RANGE 0-20
        // console.log("2-numberOfResearchArticles")
        setNumberOfResearchArticlesError("Value should be in range 0-20");
        isFormGoodToSubmit = false;
        isErrorOccuredForNumberOfResearchArticles = true;
      }
    }
  }
  // RESET ERROR IF NO ERROR OCCURED
  if(!isErrorOccuredForNumberOfResearchArticles){
    setNumberOfResearchArticlesError("");
  }

  // ! FORM VALIDATION FOR NUMBER OF LETTER OF RECOMMENDATION
  let isErrorOccuredForNumberOfLetterOfRecommendation = false;
  if(validator.isEmpty(numberOfLetterOfRecommendation)) { // IS EMPTY
  } else {
    if(!regexForIntegerNumericWithPositiveNegativeNumbers.test(numberOfLetterOfRecommendation)){ // IS NOT INTEGER
      // console.log("1-numberOfLetterOfRecommendation")
      setNumberOfLetterOfRecommendationError("Only integer numeric values are allowed");
      isFormGoodToSubmit = false;
      isErrorOccuredForNumberOfLetterOfRecommendation = true;
    } else {
      if((parseInt(numberOfLetterOfRecommendation) < 0 || parseInt(numberOfLetterOfRecommendation) > 7)){ // IS NOT IN RANGE 0-7
        // console.log("2-numberOfLetterOfRecommendation")
        setNumberOfLetterOfRecommendationError("Value should be in range 0-7");
        isFormGoodToSubmit = false;
        isErrorOccuredForNumberOfLetterOfRecommendation = true;
      }
    }
  }
  // RESET ERROR IF NO ERROR OCCURED
  if(!isErrorOccuredForNumberOfLetterOfRecommendation){
    setNumberOfLetterOfRecommendationError("");
  }

  // ! FORM VALIDATION FOR LINKEDIN URL
  let isErrorOccuredForLinkedInUrl = false;
  if(validator.isEmpty(linkedInUrl)) { // IS EMPTY
    // console.log("1-linkedInUrl")
    setLinkedInUrlError("This field is required");
    isFormGoodToSubmit = false;
    isErrorOccuredForLinkedInUrl = true;
  } else {
    if(!validator.isURL(linkedInUrl)){ // IS NOT URL
      // console.log("1-linkedInUrl")
      setLinkedInUrlError("Invalid URL");
      isFormGoodToSubmit = false;
      isErrorOccuredForLinkedInUrl = true;
    }
  }
  // RESET ERROR IF NO ERROR OCCURED
  if(!isErrorOccuredForLinkedInUrl){
    setLinkedInUrlError("");
  }

  // ! FORM VALIDATION FOR PORTFOLIO URL
  let isErrorOccuredForPortfolioUrl = false;
  if(validator.isEmpty(portfolioUrl)) { // IS EMPTY
  } else {
    if(!validator.isURL(portfolioUrl)){ // IS NOT URL
      // console.log("1-portfolioUrl")
      setPortfolioUrlError("Invalid URL");
      isFormGoodToSubmit = false;
      isErrorOccuredForPortfolioUrl = true;
    }
  }
  // RESET ERROR IF NO ERROR OCCURED
  if(!isErrorOccuredForPortfolioUrl){
    setPortfolioUrlError("");
  }

  // ! FORM VALIDATION FOR RESEARCH ARTICLE URL
  let isErrorOccuredForResearchArticleUrl = false;
  if(validator.isEmpty(researchArticleUrl)) { // IS EMPTY
  } else {
    if(!validator.isURL(researchArticleUrl)){ // IS NOT URL
      // console.log("1-researchArticleUrl")
      setResearchArticleUrlError("Invalid URL");
      isFormGoodToSubmit = false;
      isErrorOccuredForResearchArticleUrl = true;
    }
  }
  // RESET ERROR IF NO ERROR OCCURED
  if(!isErrorOccuredForResearchArticleUrl){
    setResearchArticleUrlError("");
  }

  // ! FORM VALIDATION FOR GITHUB URL
  let isErrorOccuredForGithubUrl = false;
  if(validator.isEmpty(githubUrl)) { // IS EMPTY
  } else {
    if(!validator.isURL(githubUrl)){ // IS NOT URL
      // console.log("1-githubUrl")
      setGithubUrlError("Invalid URL");
      isFormGoodToSubmit = false;
      isErrorOccuredForGithubUrl = true;
    }
  }
  // RESET ERROR IF NO ERROR OCCURED
  if(!isErrorOccuredForGithubUrl){
    setGithubUrlError("");
  }

  return isFormGoodToSubmit;
};