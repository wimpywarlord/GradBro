// @ts-ignore
import COUNTRIES_FOR_EDUCATION from "../assets/js/countryList.js";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import "../assets/css/UniSelectForm.css";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import GradBroAlert from "../components/GradBroAlert.tsx";
import UniSuggestion from "../components/UniSuggestion.tsx";
import UniSelectFormProgressbar from "../components/UniSelectProgressBar.tsx";

// @ts-ignore
import { uniSelectFormValidation } from "../assets/js/uniSelectFormValidation.ts";
import { postRequestUniSelectForm } from "../assets/js/networkCalls.ts";

import _ from "lodash";

// Define the type for a single country object
interface Country {
  name: string;
  code: string;
  timezone: string;
  utc: string;
  mobileCode: string;
}

// Define the props type
type UniSelectFormProps = {
  handleShowLogInSignUpModal: () => void;
  setIsUserSubmitUniSelectForm: (value: boolean) => void;
  isUserSubmitUniSelectForm: boolean;
};

const UniSelectForm: React.FC<UniSelectFormProps> = ({
  handleShowLogInSignUpModal,
  setIsUserSubmitUniSelectForm,
  isUserSubmitUniSelectForm,
}) => {
  // ! LOADING
  const [isLoading, setIsLoading] = useState(false);

  // ! EDUCATION
  // Highest Degree Achieved Variable
  const [highestDegreeAchieved, setHighestDegreeAchieved] = useState("");
  const [highestDegreeAchievedError, setHighestDegreeAchievedError] =
    useState("");
  const handleHighestDegreeAchievedOnChanged = (event: any) => {
    console.log("EVENT -> highestDegreeAchieved :", event.target.value);
    setHighestDegreeAchieved(event.target.value);
  };

  // Highest Degree Achieved Specilisation Variable
  const [
    highestDegreeAchievedSpecialisation,
    setHighestDegreeAchievedSpecialisation,
  ] = useState("");
  const [
    highestDegreeAchievedSpecialisationError,
    setHighestDegreeAchievedSpecialisationError,
  ] = useState("");
  const handleHighestDegreeAchievedSpecialisationOnChanged = (event: any) => {
    // console.log(
    //   "EVENT -> highestDegreeAchievedSpecialisation :",
    //   event.target.value
    // );
    setHighestDegreeAchievedSpecialisation(event.target.value);
  };

  // Highest Degree Achieved Graduation Year Variable
  const [
    highestDegreeAchievedGraduationYear,
    setHighestDegreeAchievedGraduationYear,
  ] = useState("");
  const [
    highestDegreeAchievedGraduationYearError,
    setHighestDegreeAchievedGraduationYearError,
  ] = useState("");
  const handleHighestDegreeAchievedGraduationYearOnChanged = (event: any) => {
    // console.log(
    //   "EVENT -> highestDegreeAchievedGraduationYear :",
    //   event.target.value
    // );
    setHighestDegreeAchievedGraduationYear(event.target.value);
  };
  // Graduation Year Select Helper Variables
  const startYearForGraduationYear = 2006;
  const endYearForGraduationYear = 2028;
  const yearsForGraduationYearList = [];

  for (
    let year = startYearForGraduationYear;
    year <= endYearForGraduationYear;
    year++
  ) {
    yearsForGraduationYearList.push(year);
  }

  // Highest Degree Achieved Institution Variable
  const [heightDegreeAchievedInstitution, setHeightDegreeAchievedInstitution] =
    useState("");
  const [
    heightDegreeAchievedInstitutionError,
    setHeightDegreeAchievedInstitutionError,
  ] = useState("");
  const handleHeightDegreeAchievedInstitutionOnChanged = (event: any) => {
    // console.log(
    //   "EVENT -> heightDegreeAchievedInstitution :",
    //   event.target.value
    // );
    setHeightDegreeAchievedInstitution(event.target.value);
  };

  // Highest Degree Achieved College Tier Variable
  const [
    highestDegreeAchievedCollegeTier,
    setHighestDegreeAchievedCollegeTier,
  ] = useState("");
  const [
    highestDegreeAchievedCollegeTierError,
    setHighestDegreeAchievedCollegeTierError,
  ] = useState("");
  const handleHighestDegreeAchievedCollegeTierOnChanged = (event: any) => {
    // console.log(
    //   "EVENT -> highestDegreeAchievedCollegeTier :",
    //   event.target.value
    // );
    setHighestDegreeAchievedCollegeTier(event.target.value);
  };

  // ! SCORES
  // CGPA Variable
  const [cgpaScore, setCgpaScore] = useState("");
  const handleCgpaScoreOnChanged = (event: any) => {
    // console.log("EVENT -> cgpaScore :", event.target.value);
    setCgpaScore(event.target.value);
  };

  // CGPA Scale Variable
  const [cgpaScale, setCgpaScale] = useState("");
  const [combinedCGPAError, setCombinedCGPAError] = useState("");
  const handleCgpaScaleOnChanged = (event: any) => {
    // console.log("EVENT -> cgpaScale :", event.target.value);
    setCgpaScale(event.target.value);
  };

  // GRE Quant Score Variable
  const [greQuantScore, setGreQuantScore] = useState("");
  const handleGreQuantScoreOnChanged = (event: any) => {
    // console.log("EVENT -> greQuantScore :", event.target.value);
    setGreQuantScore(event.target.value);
  };

  // GRE Verbal Score Variable
  const [greVerbalScore, setGreVerbalScore] = useState("");
  const [greScoreCombinedError, setGreScoreCombinedError] = useState("");
  const handleGreVerbalScoreOnChanged = (event: any) => {
    // console.log("EVENT -> greVerbalScore :", event.target.value);
    setGreVerbalScore(event.target.value);
  };

  // GMAT Score Variable
  const [gmatScore, setGmatScore] = useState("");
  const handleGmatScoreOnChanged = (event: any) => {
    // console.log("EVENT -> gmatScore :", event.target.value);
    setGmatScore(event.target.value);
  };

  // GMAT Exam Edition Variable
  const [gmatExamEdition, setGmatExamEdition] = useState("");
  const [
    gmatScoreAndEditionErrorCombined,
    setGmatScoreAndEditionErrorCombined,
  ] = useState("");
  const handleGmatExamEditionOnChanged = (event: any) => {
    // console.log("EVENT -> gmatExamEdition :", event.target.value);
    setGmatExamEdition(event.target.value);
  };

  // TOEFL Score Variable
  const [toeflScore, setToeflScore] = useState("");
  const [toeflScoreError, setToeflScoreError] = useState("");
  const handleToeflScoreOnChanged = (event: any) => {
    // console.log("EVENT -> toeflScore :", event.target.value);
    setToeflScore(event.target.value);
  };

  // IELTS Score Variable
  const [ieltsScore, setIeltsScore] = useState("");
  const [ieltsScoreError, setIeltsScoreError] = useState("");
  const handleIeltsScoreOnChanged = (event: any) => {
    // console.log("EVENT -> ieltsScore :", event.target.value);
    setIeltsScore(event.target.value);
  };

  // ! DESTINATION
  // Destination Country for Education Variable
  const [destinationCountry, setDestinationCountry] = useState("");
  const [destinationCountryError, setDestinationCountryError] = useState("");
  const handleDestinationCountryOnChanged = (event: any) => {
    // console.log("EVENT -> destinationCountry :", event.target.value);
    setDestinationCountry(event.target.value);
  };

  // Degree of Interest you want to Pursue Variable
  const [degreeOfInterest, setDegreeOfInterest] = useState("");
  const [degreeOfInterestError, setDegreeOfInterestError] = useState("");
  const handleDegreeOfInterestOnChanged = (event: any) => {
    // console.log("EVENT -> degreeOfInterest :", event.target.value);
    setDegreeOfInterest(event.target.value);
  };

  // Degree of Interest Specialisation Variable
  const [degreeOfInterestSpecialisation, setDegreeOfInterestSpecialisation] =
    useState("");
  const [
    degreeOfInterestSpecialisationError,
    setDegreeOfInterestSpecialisationError,
  ] = useState("");
  const handleDegreeOfInterestSpecialisationOnChanged = (event: any) => {
    // console.log(
    //   "EVENT -> degreeOfInterestSpecialisation :",
    //   event.target.value
    // );
    setDegreeOfInterestSpecialisation(event.target.value);
  };

  // EDUCATION BUDGET
  const [educationBudget, setEducationBudget] = useState("100000 USD");
  const [educationBudgetError, setEducationBudgetError] = useState("");
  const handleEducationBudgetChange = (event: any) => {
    // console.log(event.target.value);
    setEducationBudget((event.target.value * 2000).toString() + " USD");
  };

  // ! WORK EXPERIENCE
  // Years of Work Experience Variable
  const [yearsOfWorkEx, setYearsOfWorkEx] = useState("");
  const [yearsOfWorkExError, setYearsOfWorkExError] = useState("");
  const handleYearsOfWorkExOnChanged = (event: any) => {
    // console.log("EVENT -> yearsOfWorkEx :", event.target.value);
    setYearsOfWorkEx(event.target.value);
  };
  // Years of Work Experience Helper Variables
  const startYearForYearsOfWorkEx = 0;
  const endYearForYearsOfWorkEx = 15;
  const yearsForYearsOfWorkExList = [];

  for (
    let year = startYearForYearsOfWorkEx;
    year <= endYearForYearsOfWorkEx;
    year = year + 0.5
  ) {
    yearsForYearsOfWorkExList.push(year);
  }

  // Type of Work Experience Variable
  const [typeOfWorkEx, setTypeOfWorkEx] = useState("");
  const [typeOfWorkExError, setTypeOfWorkExError] = useState("");
  const handleTypeOfWorkExOnChanged = (event: any) => {
    // console.log("EVENT -> typeOfWorkEx :", event.target.value);
    setTypeOfWorkEx(event.target.value);
  };

  // Type of Company Variable
  const [typeOfCompany, setTypeOfCompany] = useState("");
  const [typeOfCompanyError, setTypeOfCompanyError] = useState("");
  const handleTypeOfCompanyOnChanged = (event: any) => {
    // console.log("EVENT -> typeOfCompany :", event.target.value);
    setTypeOfCompany(event.target.value);
  };

  // Name of the Company Variable
  const [nameOfTheCompany, setNameOfTheCompany] = useState("");
  const [nameOfTheCompanyError, setNameOfTheCompanyError] = useState("");
  const handleNameOfTheCompanyOnChanged = (event: any) => {
    // console.log("EVENT -> nameOfTheCompany :", event.target.value);
    setNameOfTheCompany(event.target.value);
  };

  // Job Title Variable
  const [jobTitle, setJobTitle] = useState("");
  const [jobTitleError, setJobTitleError] = useState("");
  const handleJobTitleOnChanged = (event: any) => {
    // console.log("EVENT -> jobTitle :", event.target.value);
    setJobTitle(event.target.value);
  };

  // ! RESEARCH AND RECOMMENDATIONS
  // Number of Research Articles Published Variable
  const [numberOfResearchArticles, setNumberOfResearchArticles] = useState("");
  const [numberOfResearchArticlesError, setNumberOfResearchArticlesError] =
    useState("");
  const handleNumberOfResearchArticlesOnChanged = (event: any) => {
    // console.log("EVENT -> numberOfResearchArticles :", event.target.value);
    setNumberOfResearchArticles(event.target.value);
  };

  // Quality of Research Variable
  const [qualityOfResearch, setQualityOfResearch] = useState("");
  const [qualityOfResearchError, setQualityOfResearchError] = useState("");
  const handleQualityOfResearchOnChanged = (event: any) => {
    // console.log("EVENT -> qualityOfResearch :", event.target.value);
    setQualityOfResearch(event.target.value);
  };

  // Number of Letter of Recommendation Variable
  const [numberOfLetterOfRecommendation, setNumberOfLetterOfRecommendation] =
    useState("");
  const [
    numberOfLetterOfRecommendationError,
    setNumberOfLetterOfRecommendationError,
  ] = useState("");
  const handleNumberOfLetterOfRecommendationOnChanged = (event: any) => {
    // console.log(
    //   "EVENT -> numberOfLetterOfRecommendation :",
    //   event.target.value
    // );
    setNumberOfLetterOfRecommendation(event.target.value);
  };

  // Quality of Letter of Recommendation Variable
  const [qualityOfLetterOfRecommendation, setQualityOfLetterOfRecommendation] =
    useState("");
  const [
    qualityOfLetterOfRecommendationError,
    setQualityOfLetterOfRecommendationError,
  ] = useState("");
  const handleQualityOfLetterOfRecommendationOnChanged = (event: any) => {
    // console.log(
    //   "EVENT -> qualityOfLetterOfRecommendation :",
    //   event.target.value
    // );
    setQualityOfLetterOfRecommendation(event.target.value);
  };

  // ! URL LINKS
  // LinkedIn URL Variable
  const [linkedInUrl, setLinkedInUrl] = useState("");
  const [linkedInUrlError, setLinkedInUrlError] = useState("");
  const handleLinkedInUrlOnChanged = (event: any) => {
    // console.log("EVENT -> linkedInUrl :", event.target.value);
    setLinkedInUrl(event.target.value);
  };

  // Portfolio URL Variable
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [portfolioUrlError, setPortfolioUrlError] = useState("");
  const handlePortfolioUrlOnChanged = (event: any) => {
    // console.log("EVENT -> portfolioUrl :", event.target.value);
    setPortfolioUrl(event.target.value);
  };

  // Research Article URL Variable
  const [researchArticleUrl, setResearchArticleUrl] = useState("");
  const [researchArticleUrlError, setResearchArticleUrlError] = useState("");
  const handleResearchArticleUrlOnChanged = (event: any) => {
    // console.log("EVENT -> researchArticleUrl :", event.target.value);
    setResearchArticleUrl(event.target.value);
  };

  // Github URL Variable
  const [githubUrl, setGithubUrl] = useState("");
  const [githubUrlError, setGithubUrlError] = useState("");
  const handleGithubUrlOnChanged = (event: any) => {
    // console.log("EVENT -> githubUrl :", event.target.value);
    setGithubUrl(event.target.value);
  };

  // ! TOOL TIP
  const renderTooltip = (toolTipText: any) => (
    <Tooltip id="button-tooltip">{toolTipText}</Tooltip>
  );

  // ! ALERT BOX
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  // Use effect to hide alert after 5 seconds
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
        setAlertMessage("");
        setAlertType("");
      }, 5000); // 5 seconds

      return () => clearTimeout(timer); // Cleanup the timer on component unmount or when showAlert changes
    }
  }, [showAlert]);

  // ! UNI RECOMMENDATION MARKDOWN RESPONSE
  const [uniRecommendationMarkdown, setUniRecommendationMarkdown] =
    useState("");

  // ! UNI SELECT SUBMIT BUTTON
  const handleOnSubmitUniSelectForm = async (event: any) => {
    event.preventDefault();

    // SET LOADING TO TRUE
    setIsLoading(true);

    // console.log("EVENT -> Uni Select Form Submitted");
    const jwtToken = localStorage.getItem("jwtToken");
    const userEmail = localStorage.getItem("userEmail");

    // ! SHOW FINAL CONFIRMATION - ASK USER IF HE WANTS TO USE HIS CREDITS

    // ! CHECK IF USER IS LOGGED IN
    if (jwtToken && userEmail) {
      const isFormGoodToSubmit = uniSelectFormValidation(
        highestDegreeAchieved,
        setHighestDegreeAchievedError,
        highestDegreeAchievedSpecialisation,
        setHighestDegreeAchievedSpecialisationError,
        highestDegreeAchievedGraduationYear,
        setHighestDegreeAchievedGraduationYearError,
        heightDegreeAchievedInstitution,
        setHeightDegreeAchievedInstitutionError,
        // highestDegreeAchievedCollegeTier,
        // setHighestDegreeAchievedCollegeTierError,
        cgpaScore,
        cgpaScale,
        setCombinedCGPAError,
        greQuantScore,
        greVerbalScore,
        setGreScoreCombinedError,
        gmatScore,
        gmatExamEdition,
        setGmatScoreAndEditionErrorCombined,
        toeflScore,
        setToeflScoreError,
        ieltsScore,
        setIeltsScoreError,
        destinationCountry,
        setDestinationCountryError,
        degreeOfInterest,
        setDegreeOfInterestError,
        degreeOfInterestSpecialisation,
        setDegreeOfInterestSpecialisationError,
        // educationBudget,
        // setEducationBudgetError,
        yearsOfWorkEx,
        setYearsOfWorkExError,
        // typeOfWorkEx,
        // setTypeOfWorkExError,
        // typeOfCompany,
        // setTypeOfCompanyError,
        // nameOfTheCompany,
        setNameOfTheCompanyError,
        jobTitle,
        setJobTitleError,
        numberOfResearchArticles,
        setNumberOfResearchArticlesError,
        // qualityOfResearch,
        // setQualityOfResearchError,
        numberOfLetterOfRecommendation,
        setNumberOfLetterOfRecommendationError,
        // qualityOfLetterOfRecommendation,
        // setQualityOfLetterOfRecommendationError,
        linkedInUrl,
        setLinkedInUrlError,
        portfolioUrl,
        setPortfolioUrlError,
        researchArticleUrl,
        setResearchArticleUrlError,
        githubUrl,
        setGithubUrlError
      );

      if (isFormGoodToSubmit) {
        // ! FRONT END FORM VALIDATION PASSED
        // console.log("Uni Select Form is Good to Submit");

        // ! BACKEND API CALL TO SUBMIT FORM
        const responseUniSelectForm = await postRequestUniSelectForm(
          highestDegreeAchieved,
          highestDegreeAchievedSpecialisation,
          highestDegreeAchievedGraduationYear,
          heightDegreeAchievedInstitution,
          highestDegreeAchievedCollegeTier,
          cgpaScore,
          cgpaScale,
          greQuantScore,
          greVerbalScore,
          gmatScore,
          gmatExamEdition,
          toeflScore,
          ieltsScore,
          destinationCountry,
          degreeOfInterest,
          degreeOfInterestSpecialisation,
          educationBudget,
          yearsOfWorkEx,
          typeOfWorkEx,
          typeOfCompany,
          nameOfTheCompany,
          jobTitle,
          numberOfResearchArticles,
          qualityOfResearch,
          numberOfLetterOfRecommendation,
          qualityOfLetterOfRecommendation,
          linkedInUrl,
          portfolioUrl,
          researchArticleUrl,
          githubUrl
        );

        setIsUserSubmitUniSelectForm(!isUserSubmitUniSelectForm);

        if (responseUniSelectForm.status) {
          // console.log("Uni Select Form Submitted Successfully");
          // console.log(responseUniSelectForm);
          setUniRecommendationMarkdown(
            responseUniSelectForm.uni_recommendations
          );
          setIsLoading(false);
          setShowAlert(true);
          setAlertMessage(responseUniSelectForm.message);
          setAlertType("success");
        } else {
          // console.log("Uni Select Form Submission Failed");
          setIsLoading(false);
          setShowAlert(true);
          setAlertMessage(responseUniSelectForm.message);
          setAlertType("danger");
        }
      } else {
        // console.log("Uni Select Form is NOT Good to Submit");
        setIsLoading(false);
        setShowAlert(true);
        setAlertMessage("Please correct all errors in the form");
        setAlertType("danger");
      }
    } else {
      // console.log("&&&&&&&&&&&&&&&&&&&");
      handleShowLogInSignUpModal();
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* ALERT */}
      {showAlert && (
        <GradBroAlert
          topPosition="92.5%"
          rightPosition="2%"
          inPlaceOrAbsolute="fixed"
          variant={alertType}
          message={alertMessage}
        ></GradBroAlert>
      )}
      <Container className="uni-select-form-main-box py-5 px-5">
        <Row className="pb-4">
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "1em",
              fontWeight: "500",
            }}
          >
            <span className="mx-1">Made with 💛 by</span>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/kshitijdhyani/"
            >
              Kshitij Dhyani
            </a>
          </Col>
        </Row>
        {!uniRecommendationMarkdown && (
          <Row className="pb-4">
            <Col xs={12} sm={12} md={4}></Col>
            <Col xs={12} sm={12} md={4}></Col>
            <Col xs={12} sm={12} md={4}>
              <span>
                <p>
                  <span
                    style={{
                      color: "#154360",
                      fontWeight: "600",
                    }}
                  >
                    AI
                  </span>{" "}
                  Strength Indicator{" "}
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip(
                      "The strength of your application. Try to fill all the fields to get the best results"
                    )}
                  >
                    <svg
                      style={{ marginLeft: "4px", marginBottom: "4px" }}
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
                        fill="#1C274C"
                      />
                    </svg>
                  </OverlayTrigger>
                </p>
              </span>
              <UniSelectFormProgressbar
                highestDegreeAchieved={highestDegreeAchieved}
                highestDegreeAchievedSpecialisation={
                  highestDegreeAchievedSpecialisation
                }
                highestDegreeAchievedGraduationYear={
                  highestDegreeAchievedGraduationYear
                }
                heightDegreeAchievedInstitution={
                  heightDegreeAchievedInstitution
                }
                highestDegreeAchievedCollegeTier={
                  highestDegreeAchievedCollegeTier
                }
                cgpaScore={cgpaScore}
                cgpaScale={cgpaScale}
                greQuantScore={greQuantScore}
                greVerbalScore={greVerbalScore}
                gmatScore={gmatScore}
                gmatExamEdition={gmatExamEdition}
                toeflScore={toeflScore}
                ieltsScore={ieltsScore}
                destinationCountry={destinationCountry}
                degreeOfInterest={degreeOfInterest}
                degreeOfInterestSpecialisation={degreeOfInterestSpecialisation}
                educationBudget={educationBudget}
                yearsOfWorkEx={yearsOfWorkEx}
                typeOfWorkEx={typeOfWorkEx}
                typeOfCompany={typeOfCompany}
                nameOfTheCompany={nameOfTheCompany}
                jobTitle={jobTitle}
                numberOfResearchArticles={numberOfResearchArticles}
                qualityOfResearch={qualityOfResearch}
                numberOfLetterOfRecommendation={numberOfLetterOfRecommendation}
                qualityOfLetterOfRecommendation={
                  qualityOfLetterOfRecommendation
                }
                linkedInUrl={linkedInUrl}
                portfolioUrl={portfolioUrl}
                researchArticleUrl={researchArticleUrl}
                githubUrl={githubUrl}
              ></UniSelectFormProgressbar>
            </Col>
          </Row>
        )}
        {uniRecommendationMarkdown ? (
          <Row className="pt-3">
            <UniSuggestion
              setUniRecommendationMarkdown={setUniRecommendationMarkdown}
              markDownContent={uniRecommendationMarkdown}
            ></UniSuggestion>
          </Row>
        ) : (
          <>
            <Row>
              <Col>
                <h2>Education</h2>
              </Col>
            </Row>
            <Row className="pt-3">
              {/* DEGREE ACHIEVED*/}
              <Col
                xs={12}
                sm={12}
                md={5}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label>
                  Highest Degree Achieved{" "}
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Text className="pb-2 text-danger">
                  {highestDegreeAchievedError}
                </Form.Text>
                <Form.Control
                  onChange={handleHighestDegreeAchievedOnChanged}
                  value={highestDegreeAchieved}
                  size="lg"
                  type="text"
                  placeholder="e.g. Bachelor of Technology"
                  id="highestDegreeAchievedInputTextBox"
                  aria-describedby="highestDegreeAchievedHelpBlock"
                />
              </Col>

              {/* Highest Education Specialisation */}
              <Col
                xs={12}
                sm={12}
                md={5}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label htmlFor="highestEducationSpecialisations">
                  Specialisation / Concentration
                </Form.Label>
                <Form.Text
                  className="pb-2 text-danger"
                  id="highestEducationSpecialisationsErrorBox"
                >
                  {highestDegreeAchievedSpecialisationError}
                </Form.Text>
                <Form.Control
                  value={highestDegreeAchievedSpecialisation}
                  onChange={handleHighestDegreeAchievedSpecialisationOnChanged}
                  size="lg"
                  type="text"
                  placeholder="e.g. Computer Science"
                  id="highestEducationSpecialisationsInputTextBox"
                  aria-describedby="highestEducationSpecialisationsHelpBlock"
                />
              </Col>

              {/* GRADUATION YEAR */}
              <Col
                xs={12}
                sm={12}
                md={2}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label>
                  Graduation Year <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Text
                  className="pb-2 text-danger"
                  id="graduationYearErrorBox"
                >
                  {highestDegreeAchievedGraduationYearError}
                </Form.Text>
                <Form.Select
                  value={highestDegreeAchievedGraduationYear}
                  onChange={handleHighestDegreeAchievedGraduationYearOnChanged}
                  size="lg"
                  aria-label="Select Graduation Year"
                >
                  <option key="emptyYearOfGraduation" value=""></option>
                  {yearsForGraduationYearList.map(
                    (yearOfGraduation: number) => (
                      <option
                        key={yearOfGraduation + "yearOfGraduation"}
                        value={yearOfGraduation}
                      >
                        {yearOfGraduation}
                      </option>
                    )
                  )}
                </Form.Select>
              </Col>
            </Row>

            <Row className="pt-3 pb-2">
              {/* INSTITUTION */}
              <Col
                xs={12}
                sm={12}
                md={10}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label>
                  Institution of Highest Degree Achieved{" "}
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Text
                  className="pb-2 text-danger"
                  id="institutionOfHighestDegreeErrorBox"
                >
                  {heightDegreeAchievedInstitutionError}
                </Form.Text>
                <Form.Control
                  value={heightDegreeAchievedInstitution}
                  onChange={handleHeightDegreeAchievedInstitutionOnChanged}
                  size="lg"
                  type="text"
                  placeholder="e.g. Vellore Institute of Technology, Vellore"
                  id="institutionOfHighestDegreeInputTextBox"
                  aria-describedby="institutionOfHighestDegreeHelpBlock"
                />
              </Col>

              {/* COLLEGE TIER */}
              <Col
                xs={12}
                sm={12}
                md={2}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label>
                  Tier of Institution
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("This field is self-assessed")}
                  >
                    <svg
                      style={{ marginLeft: "4px", marginBottom: "4px" }}
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
                        fill="#1C274C"
                      />
                    </svg>
                  </OverlayTrigger>
                </Form.Label>
                <Form.Text
                  className="pb-2 text-danger"
                  id="tierOfInstitutionErrorBox"
                >
                  {highestDegreeAchievedCollegeTierError}
                </Form.Text>
                <Form.Select
                  value={highestDegreeAchievedCollegeTier}
                  onChange={handleHighestDegreeAchievedCollegeTierOnChanged}
                  size="lg"
                  aria-label="Select College Tier"
                >
                  <option
                    key="emptyHighestEducationCollegeTier"
                    value=""
                  ></option>
                  <option key="Tier-1" value="Tier-1">
                    Tier-1
                  </option>
                  <option key="Tier-2" value="Tier-2">
                    Tier-2
                  </option>
                  <option key="Tier-3" value="Tier-3">
                    Tier-3
                  </option>
                </Form.Select>
              </Col>
            </Row>

            <hr></hr>

            <Row className="pt-3">
              <Col>
                <h2>Scores</h2>
              </Col>
            </Row>

            <Row className="pt-3">
              {/* CGPA */}
              <Col
                xs={12}
                sm={12}
                md={4}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label>
                  CGPA - Score / Scale <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Text className="pb-2 text-danger" id="cgpaErorrBox">
                  {combinedCGPAError}
                </Form.Text>
                <InputGroup>
                  <InputGroup.Text>CGPA</InputGroup.Text>
                  <Form.Control
                    value={cgpaScore}
                    onChange={handleCgpaScoreOnChanged}
                    size="lg"
                    placeholder="Score"
                    type="number"
                    aria-label="CGPA Score"
                    min={0}
                  />
                  <Form.Control
                    value={cgpaScale}
                    onChange={handleCgpaScaleOnChanged}
                    placeholder="Scale"
                    type="number"
                    size="lg"
                    aria-label="CGPA Scale"
                    min={0}
                  />
                </InputGroup>
              </Col>

              {/* GRE SCORE */}
              <Col
                xs={12}
                sm={12}
                md={8}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label>GRE Score Quant | Verbal</Form.Label>
                <Form.Text className="pb-2 text-danger" id="greScoreErrorBox">
                  {greScoreCombinedError}
                </Form.Text>
                <InputGroup>
                  <Form.Control
                    value={greQuantScore}
                    onChange={handleGreQuantScoreOnChanged}
                    size="lg"
                    placeholder="Quant"
                    type="number"
                    aria-label="GRE Score Quant"
                    max={170}
                    min={130}
                  />
                  <InputGroup.Text>/</InputGroup.Text>
                  <InputGroup.Text>170</InputGroup.Text>
                  <Form.Control
                    value={greVerbalScore}
                    onChange={handleGreVerbalScoreOnChanged}
                    size="lg"
                    placeholder="Verbal"
                    type="number"
                    aria-label="GRE Score Verbal"
                    max={170}
                    min={130}
                  />
                  <InputGroup.Text>/</InputGroup.Text>
                  <InputGroup.Text>170</InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>

            <Row className="pb-2 pt-3">
              {/* GMAT SCORE */}
              <Col
                xs={12}
                sm={12}
                md={4}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label>
                  GMAT Score
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("Ensure correct GMAT Exam Edition")}
                  >
                    <svg
                      style={{ marginLeft: "4px", marginBottom: "4px" }}
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
                        fill="#1C274C"
                      />
                    </svg>
                  </OverlayTrigger>
                </Form.Label>
                <Form.Text className="pb-2 text-danger" id="gmatScoreErrorBox">
                  {gmatScoreAndEditionErrorCombined}
                </Form.Text>
                <InputGroup>
                  <Form.Control
                    value={gmatScore}
                    onChange={handleGmatScoreOnChanged}
                    size="lg"
                    placeholder="Score"
                    type="number"
                    aria-label="GRE Score Quant"
                    max={805}
                    min={200}
                  />
                  <InputGroup.Text>/</InputGroup.Text>
                  {/* ? Change Out of Score based on Exam Edition */}
                  <InputGroup.Text>
                    {gmatExamEdition === "10th-Edition" ? 800 : 805}
                  </InputGroup.Text>
                  <Form.Select
                    value={gmatExamEdition}
                    onChange={handleGmatExamEditionOnChanged}
                    size="lg"
                    aria-label="Select GMAT Exam Edition"
                  >
                    <option key="emptyGMATEdition" value=""></option>
                    <option key="Focus" value="Focus">
                      Focus
                    </option>
                    <option key="10th-Edition" value="10th-Edition">
                      10th-Edition
                    </option>
                  </Form.Select>
                </InputGroup>
              </Col>

              {/* TOEFL SCORE */}
              <Col
                xs={12}
                sm={12}
                md={4}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label>TOEFL Score</Form.Label>
                <Form.Text className="pb-2 text-danger" id="toeflScoreErrorBox">
                  {toeflScoreError}
                </Form.Text>
                <InputGroup>
                  <Form.Control
                    value={toeflScore}
                    onChange={handleToeflScoreOnChanged}
                    size="lg"
                    placeholder="Score"
                    type="number"
                    aria-label="TOEFL Score"
                    max={120}
                    min={0}
                  />
                  <InputGroup.Text>/</InputGroup.Text>
                  <InputGroup.Text>120</InputGroup.Text>
                </InputGroup>
              </Col>

              {/* IELTS SCORE */}
              <Col
                xs={12}
                sm={12}
                md={4}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label>IELTS Score</Form.Label>
                <Form.Text className="pb-2 text-danger" id="ieltsScoreErrorBox">
                  {ieltsScoreError}
                </Form.Text>
                <InputGroup>
                  <Form.Control
                    value={ieltsScore}
                    onChange={handleIeltsScoreOnChanged}
                    size="lg"
                    placeholder="Score"
                    type="number"
                    aria-label="IELTS Score"
                    max={9}
                    min={0}
                  />
                  <InputGroup.Text>/</InputGroup.Text>
                  <InputGroup.Text>9</InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>

            <hr></hr>

            <Row className="pt-3">
              <Col>
                <h2>Criteria</h2>
              </Col>
            </Row>

            <Row className="pt-3 pb-2">
              {/* COUNTRY OF INTEREST */}
              <Col
                xs={12}
                sm={12}
                md={3}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label>
                  Destination Country for Education{" "}
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Text
                  className="pb-2 text-danger"
                  id="destinationCountryErorrBox"
                >
                  {destinationCountryError}
                </Form.Text>
                <Form.Select
                  value={destinationCountry}
                  onChange={handleDestinationCountryOnChanged}
                  size="lg"
                  aria-label="Select Country of Education"
                >
                  <option key="emptyCountryOfInterest" value=""></option>
                  {COUNTRIES_FOR_EDUCATION.map((country: Country) => (
                    <option
                      value={country.name}
                      key={country.code + country.name + country.mobileCode}
                    >
                      {country.name}
                    </option>
                  ))}
                </Form.Select>
              </Col>

              {/* DEGREE OF INTEREST */}
              <Col
                xs={12}
                sm={12}
                md={3}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label>
                  Degree you want to Pursue{" "}
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Text
                  className="pb-2 text-danger"
                  id="destinationDegreeErrorBox"
                >
                  {degreeOfInterestError}
                </Form.Text>
                <Form.Control
                  value={degreeOfInterest}
                  onChange={handleDegreeOfInterestOnChanged}
                  size="lg"
                  type="text"
                  placeholder="e.g. Master of Science"
                  id="degreeOfInterestInputTextBox"
                  aria-describedby="degreeOfInterestHelpBlock"
                />
              </Col>

              {/* Specialisation */}
              <Col
                xs={12}
                sm={12}
                md={3}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label htmlFor="specialisationsOfInterest">
                  Specialisation / Concentration
                </Form.Label>
                <Form.Text
                  className="pb-2 text-danger"
                  id="destinationSpecilisationErrorBox"
                >
                  {degreeOfInterestSpecialisationError}
                </Form.Text>
                <Form.Control
                  value={degreeOfInterestSpecialisation}
                  onChange={handleDegreeOfInterestSpecialisationOnChanged}
                  size="lg"
                  type="text"
                  placeholder="e.g. Data Analytics"
                  id="specialisationsOfInterestInputTextBox"
                  aria-describedby="specialisationsOfInterestHelpBlock"
                />
              </Col>

              {/* TUITION FEE BUDGET */}
              <Col
                xs={12}
                sm={12}
                md={3}
                className="pb-3"
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Form.Label>
                  Budget for Education <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Text
                  className="pb-2 text-danger"
                  id="educationBudgetError"
                >
                  {educationBudgetError}
                </Form.Text>
                <Row>
                  <Col
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Form.Label>{educationBudget}</Form.Label>
                  </Col>
                </Row>
                <Form.Range
                  onChange={() => {
                    handleEducationBudgetChange(event);
                  }}
                />
              </Col>
            </Row>

            <hr></hr>

            <Row className="pt-3">
              <Col>
                <h2>Work Ex</h2>
              </Col>
            </Row>

            <Row className="pt-3 pb-2">
              {/* YEARS OF WORK EXPERIENCE */}
              <Col
                xs={12}
                sm={12}
                md={2}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label>
                  YoE <span style={{ color: "red" }}>*</span>{" "}
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("Years of Experience")}
                  >
                    <svg
                      style={{ marginLeft: "4px", marginBottom: "4px" }}
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
                        fill="#1C274C"
                      />
                    </svg>
                  </OverlayTrigger>
                </Form.Label>
                <Form.Text
                  className="pb-2 text-danger"
                  id="yearsOfWorkExErrorBox"
                >
                  {yearsOfWorkExError}
                </Form.Text>
                <Form.Select
                  value={yearsOfWorkEx}
                  onChange={handleYearsOfWorkExOnChanged}
                  size="lg"
                  aria-label="Select Year of Work Exp"
                >
                  <option key="emptyYearsOfExperience" value=""></option>
                  {yearsForYearsOfWorkExList.map((yearOfWorkEx: number) => (
                    <option
                      key={yearOfWorkEx + "yearsOfWorkEx"}
                      value={yearOfWorkEx}
                    >
                      {yearOfWorkEx}
                    </option>
                  ))}
                </Form.Select>
              </Col>

              {/* WORK TYPE */}
              <Col
                xs={12}
                sm={12}
                md={2}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label>Work Type</Form.Label>
                <Form.Text className="pb-2 text-danger" id="workTypeErrorBox">
                  {typeOfWorkExError}
                </Form.Text>
                <Form.Select
                  value={typeOfWorkEx}
                  onChange={handleTypeOfWorkExOnChanged}
                  size="lg"
                  aria-label="Select Type of Work Experience"
                >
                  <option key="emptyWorkType" value=""></option>
                  <option key="Internship" value="Internship">
                    Internship
                  </option>
                  <option key="Full-Time" value="Full-Time">
                    Full-Time
                  </option>
                  <option key="Contract" value="Contract">
                    Contract
                  </option>
                </Form.Select>
              </Col>

              {/* COMPANY TYPE (TIER) */}
              <Col
                xs={12}
                sm={12}
                md={2}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label>Company Type</Form.Label>
                <Form.Text
                  className="pb-2 text-danger"
                  id="companyTypeErrorBox"
                >
                  {typeOfCompanyError}
                </Form.Text>
                <Form.Select
                  value={typeOfCompany}
                  onChange={handleTypeOfCompanyOnChanged}
                  size="lg"
                  aria-label="Select Tier of Work Exp"
                >
                  <option key="emptyCompanyType" value=""></option>
                  <option key="MNC" value="MNC">
                    MNC
                  </option>
                  <option key="Mid-Size" value="Mid-Size">
                    Mid-Size
                  </option>
                  <option key="Start-Up" value="Start-Up">
                    Start-Up
                  </option>
                </Form.Select>
              </Col>

              {/* NAME OF THE COMPANY */}
              <Col
                xs={12}
                sm={12}
                md={3}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label htmlFor="nameOfTheCompany">
                  Name of the Company
                </Form.Label>
                <Form.Text
                  className="pb-2 text-danger"
                  id="nameOfCompanyErrorBox"
                >
                  {nameOfTheCompanyError}
                </Form.Text>
                <Form.Control
                  value={nameOfTheCompany}
                  onChange={handleNameOfTheCompanyOnChanged}
                  size="lg"
                  type="text"
                  placeholder="e.g. Airbnb"
                  id="nameOfTheCompanyFormControl"
                  aria-describedby="nameOfTheCompanyHelpBlock"
                />
              </Col>

              {/* JOB TITLE */}
              <Col
                xs={12}
                sm={12}
                md={3}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label htmlFor="jobTitle">Job Title</Form.Label>
                <Form.Text className="pb-2 text-danger" id="jobTitleErrorBox">
                  {jobTitleError}
                </Form.Text>
                <Form.Control
                  value={jobTitle}
                  onChange={handleJobTitleOnChanged}
                  size="lg"
                  type="text"
                  placeholder="e.g. Sr. Software Developer"
                  id="jobTitleFormControl"
                  aria-describedby="jobTitleHelpBlock"
                />
              </Col>
            </Row>

            <hr></hr>

            <Row className="pt-3">
              <Col>
                <h2>Miscellaneous</h2>
              </Col>
            </Row>

            <Row className="pt-3 pb-2">
              {/* NUMBER OF RESEARCH ARTICLES */}
              <Col
                xs={12}
                sm={12}
                md={3}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label htmlFor="numberOfResearchArticles">
                  Number of Research Articles Published
                </Form.Label>
                <Form.Text
                  className="pb-2 text-danger"
                  id="numberOfResearchArticlesErrorBox"
                >
                  {numberOfResearchArticlesError}
                </Form.Text>
                <Form.Control
                  value={numberOfResearchArticles}
                  onChange={handleNumberOfResearchArticlesOnChanged}
                  size="lg"
                  type="number"
                  min={0}
                  placeholder=""
                  id="numberOfResearchArticlesFormControl"
                  aria-describedby="numberOfResearchArticlesHelpBlock"
                />
              </Col>

              {/* QUALITY OF RESEARCH */}
              <Col
                xs={12}
                sm={12}
                md={3}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label>
                  Quality of Research
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("Field is self-assessed")}
                  >
                    <svg
                      style={{ marginLeft: "4px", marginBottom: "4px" }}
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
                        fill="#1C274C"
                      />
                    </svg>
                  </OverlayTrigger>
                </Form.Label>
                <Form.Text
                  className="pb-2 text-danger"
                  id="qualityOfResearchErrorBox"
                >
                  {qualityOfResearchError}
                </Form.Text>
                <Form.Select
                  value={qualityOfResearch}
                  onChange={handleQualityOfResearchOnChanged}
                  size="lg"
                  aria-label="Select Quality of Research Work"
                >
                  <option key="emptyQualityOfResearch" value=""></option>
                  <option key="Top-Tier" value="Top-Tier">
                    Top-Tier
                  </option>
                  <option key="Mid-Tier" value="Mid-Tier">
                    Mid-Tier
                  </option>
                  <option key="Low-Tier" value="Low-Tier">
                    Low-Tier
                  </option>
                </Form.Select>
              </Col>

              {/* NUMBER OF LETTER OF RECOMMENDATIONS (LoRs) */}
              <Col
                xs={12}
                sm={12}
                md={3}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label htmlFor="numberOfLetterOfRecommendation">
                  Number of Letter of Recommendation
                </Form.Label>
                <Form.Text
                  className="pb-2 text-danger"
                  id="numberOfLORErrorBox"
                >
                  {numberOfLetterOfRecommendationError}
                </Form.Text>
                <Form.Control
                  value={numberOfLetterOfRecommendation}
                  onChange={handleNumberOfLetterOfRecommendationOnChanged}
                  size="lg"
                  type="number"
                  min={0}
                  placeholder=""
                  id="numberOfLetterOfRecommendationFormControl"
                  aria-describedby="numberOfLetterOfRecommendationHelpBlock"
                />
              </Col>

              {/* QUALITY OF LETTER OF RECOMMENDATIONS */}
              <Col
                xs={12}
                sm={12}
                md={3}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label>
                  Quality of LoR
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("Field is self-assessed")}
                  >
                    <svg
                      style={{ marginLeft: "4px", marginBottom: "4px" }}
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
                        fill="#1C274C"
                      />
                    </svg>
                  </OverlayTrigger>
                </Form.Label>
                <Form.Text
                  className="pb-2 text-danger"
                  id="qualityOfLORErrorBox"
                >
                  {qualityOfLetterOfRecommendationError}
                </Form.Text>
                <Form.Select
                  value={qualityOfLetterOfRecommendation}
                  onChange={handleQualityOfLetterOfRecommendationOnChanged}
                  size="lg"
                  aria-label="Select Quality of Letter of Recommendation"
                >
                  <option key="emptyQualityOfLOR" value=""></option>
                  <option key="Top-Quality" value="Top-Quality">
                    Top-Quality
                  </option>
                  <option key="Mid-Quality" value="Mid-Quality">
                    Mid-Quality
                  </option>
                  <option key="Low-Quality" value="Low-Quality">
                    Low-Quality
                  </option>
                </Form.Select>
              </Col>
            </Row>

            <hr></hr>

            <Row className="pt-3">
              <Col>
                <h2>Supporting Links</h2>
              </Col>
            </Row>

            <Row className="pt-2 pb-2">
              {/* Linkedin */}
              <Col
                xs={12}
                sm={12}
                md={6}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label htmlFor="linkedinProfileLink">
                  Linkedin Profile <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Text
                  className="pb-2 text-danger"
                  id="linkedinProfileLinkErrorBox"
                >
                  {linkedInUrlError}
                </Form.Text>
                <Form.Control
                  value={linkedInUrl}
                  onChange={handleLinkedInUrlOnChanged}
                  size="lg"
                  type="text"
                  placeholder="e.g. https://www.linkedin.com/in/xyz/"
                  id="linkedinProfileLinkFormControl"
                  aria-describedby="linkedinProfileLinkHelpBlock"
                />
              </Col>

              {/* Portfolio Website */}
              <Col
                xs={12}
                sm={12}
                md={6}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label htmlFor="portfolioLink">
                  Portfolio Website
                </Form.Label>
                <Form.Text
                  className="pb-2 text-danger"
                  id="portfolioWebsiteLinkErrorBox"
                >
                  {portfolioUrlError}
                </Form.Text>
                <Form.Control
                  value={portfolioUrl}
                  onChange={handlePortfolioUrlOnChanged}
                  size="lg"
                  type="text"
                  placeholder="e.g. https://xyz.codes/"
                  id="portfolioLinkFormControl"
                  aria-describedby="portfolioLinkHelpBlock"
                />
              </Col>
            </Row>

            <Row className="pt-3 pb-2">
              {/* Research Article Link */}
              <Col
                xs={11}
                sm={11}
                md={6}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label htmlFor="researchArticleLink">
                  Published Research Article Link
                </Form.Label>
                <Form.Text
                  className="pb-2 text-danger"
                  id="publishedResearchErrorBox"
                >
                  {researchArticleUrlError}
                </Form.Text>
                <Form.Control
                  value={researchArticleUrl}
                  onChange={handleResearchArticleUrlOnChanged}
                  size="lg"
                  type="text"
                  placeholder="e.g. https://journals.sagepub.com/"
                  id="researchArticleLinkFormControl"
                  aria-describedby="researchArticleLinkHelpBlock"
                />
              </Col>

              {/* Github Website */}
              <Col
                xs={12}
                sm={12}
                md={6}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label htmlFor="skillShowCase">
                  Github / Dribble / Kaggle Profile{" "}
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("Showcase your skills and projects")}
                  >
                    <svg
                      style={{ marginLeft: "4px", marginBottom: "4px" }}
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
                        fill="#1C274C"
                      />
                    </svg>
                  </OverlayTrigger>
                </Form.Label>
                <Form.Text className="pb-2 text-danger" id="githubLinkErroBox">
                  {githubUrlError}
                </Form.Text>
                <Form.Control
                  value={githubUrl}
                  onChange={handleGithubUrlOnChanged}
                  size="lg"
                  type="text"
                  placeholder="e.g. https://github.com/xyz"
                  id="githubLinkFormControl"
                  aria-describedby="githubLinkHelpBlock"
                />
              </Col>
            </Row>

            <hr></hr>

            <Row className="pt-3">
              <Col>
                <h2>Supporting Files</h2>
              </Col>
            </Row>

            {/* FILE UPLOADS */}
            <Row className="pt-2 pb-2">
              {/* RESUME / CV */}
              <Col
                xs={12}
                sm={12}
                md={4}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "end",
                }}
                className="pb-3"
              >
                <Form.Label>
                  Resume / CV{" "}
                  <span style={{ color: "#186A3B", fontSize: "bold" }}>
                    (Coming Soon)
                  </span>
                </Form.Label>
                <Form.Text
                  className="pb-2 text-danger"
                  id="resumeErrorBox"
                ></Form.Text>
                <Form.Group controlId="formFileLg" className="mb-3">
                  <Form.Control disabled type="file" size="lg" />
                </Form.Group>
              </Col>
            </Row>

            <Row className="pt-4 pb-2">
              <Col
                xs={12}
                sm={12}
                md={12}
                style={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button
                  onClick={handleOnSubmitUniSelectForm}
                  size="lg"
                  variant="warning"
                >
                  {isLoading && (
                    <Spinner
                      style={{ marginRight: "7px" }}
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  )}
                  Submit
                </Button>{" "}
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default UniSelectForm;
