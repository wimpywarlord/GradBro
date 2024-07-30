import { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

interface UniSelectFormProgressbarProps {
  highestDegreeAchieved: string;
  highestDegreeAchievedSpecialisation: string;
  highestDegreeAchievedGraduationYear: string;
  heightDegreeAchievedInstitution: string;
  highestDegreeAchievedCollegeTier: string;
  cgpaScore: string;
  cgpaScale: string;
  greQuantScore: string;
  greVerbalScore: string;
  gmatScore: string;
  gmatExamEdition: string;
  toeflScore: string;
  ieltsScore: string;
  destinationCountry: string;
  degreeOfInterest: string;
  degreeOfInterestSpecialisation: string;
  educationBudget: string;
  yearsOfWorkEx: string;
  typeOfWorkEx: string;
  typeOfCompany: string;
  nameOfTheCompany: string;
  jobTitle: string;
  numberOfResearchArticles: string;
  qualityOfResearch: string;
  numberOfLetterOfRecommendation: string;
  qualityOfLetterOfRecommendation: string;
  linkedInUrl: string;
  portfolioUrl: string;
  researchArticleUrl: string;
  githubUrl: string;
}

const UniSelectFormProgressbar: React.FC<UniSelectFormProgressbarProps> = ({
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
  githubUrl,
}) => {
  const [progressBarVariant, setProgressBarVariant] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const totalFields = 30;
    let filledFields = 0;
    if (highestDegreeAchieved) filledFields++;
    if (highestDegreeAchievedSpecialisation) filledFields++;
    if (highestDegreeAchievedGraduationYear) filledFields++;
    if (heightDegreeAchievedInstitution) filledFields++;
    if (highestDegreeAchievedCollegeTier) filledFields++;
    if (cgpaScore) filledFields++;
    if (cgpaScale) filledFields++;
    if (greQuantScore) filledFields++;
    if (greVerbalScore) filledFields++;
    if (gmatScore) filledFields++;
    if (gmatExamEdition) filledFields++;
    if (toeflScore) filledFields++;
    if (ieltsScore) filledFields++;
    if (destinationCountry) filledFields++;
    if (degreeOfInterest) filledFields++;
    if (degreeOfInterestSpecialisation) filledFields++;
    if (educationBudget) filledFields++;
    if (yearsOfWorkEx) filledFields++;
    if (typeOfWorkEx) filledFields++;
    if (typeOfCompany) filledFields++;
    if (nameOfTheCompany) filledFields++;
    if (jobTitle) filledFields++;
    if (numberOfResearchArticles) filledFields++;
    if (qualityOfResearch) filledFields++;
    if (numberOfLetterOfRecommendation) filledFields++;
    if (qualityOfLetterOfRecommendation) filledFields++;
    if (linkedInUrl) filledFields++;
    if (portfolioUrl) filledFields++;
    if (researchArticleUrl) filledFields++;
    if (githubUrl) filledFields++;

    const ai_strength_score = (filledFields / totalFields) * 100;

    if (ai_strength_score < 20) {
      setProgressBarVariant("danger");
    } else if (ai_strength_score < 40) {
      setProgressBarVariant("warning");
    } else if (ai_strength_score < 60) {
      setProgressBarVariant("info");
    } else {
      setProgressBarVariant("success");
    }

    setProgress(ai_strength_score);
  }, [
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
    githubUrl,
  ]);

  return (
    <ProgressBar
      animated
      variant={progressBarVariant}
      now={progress}
      label={`${progress}%`}
      visuallyHidden
    />
  );
};

export default UniSelectFormProgressbar;
