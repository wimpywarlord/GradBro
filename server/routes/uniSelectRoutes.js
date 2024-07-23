const express = require('express');
const UniSelect = require("../models/uniSelectModel");
const User = require("../models/userModel");
const OpenAI = require('openai');
const { v4: uuidv4 } = require('uuid');

const router = express.Router()
const openai = new OpenAI();

require('dotenv').config();

const openAIClient = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // CHANGE BASED ON ENVIRONMENT
});

generateUniSelectPrompt = (requestBody) => {
  const {
    email, // required
    highest_degree_achieved, // required
    highest_degree_achieved_specialisation,
    highest_degree_achieved_graduation_year, // required
    height_degree_achieved_institution, // required
    highest_degree_achieved_college_tier,
    cgpa_score, // required
    cgpa_scale, // required
    gre_quant_score,
    gre_verbal_score,
    gmat_score,
    gmat_exam_edition,
    toefl_score,
    ielts_score,
    destination_country, // required
    degree_of_interest, // required
    degree_of_interest_specialisation,
    education_budget, // required
    years_of_work_ex, // required
    type_of_work_ex,
    type_of_company,
    name_of_the_company,
    job_title,
    number_of_research_articles,
    quality_of_research,
    number_of_letter_of_recommendation,
    quality_of_letter_of_recommendation,
    linked_in_url, // required // ! THIS IS NOT TO BE USED, OPEN AI CAN ACCESS LINKEDIN
    portfolio_url,
    research_article_url,
    github_url
  } = requestBody;

  promptMessages = [
    {
      role: "system",
      content: "You are an admissions counselor, you recommend universities and programs to students based on their profile and credentials.",
    },
    {
      role: "system",
      content: "Recommend 3 safe, 3 medium, and 3 ambitious universities based on student's profile, student's credentials, and student's chances of getting an admit. Highlight 1 pro and 1 con of the university you are recommending. Also provide URL for the university or program you are recommending.",
    },
    {
      role: "system",
      content: "Please recommend universities for the following student profile:",
    },
    {
      role: "user",
      content:
        `I hold a ${highest_degree_achieved}, and I graduated in ${highest_degree_achieved_graduation_year} from ${height_degree_achieved_institution} with a CGPA of ${cgpa_score} / ${cgpa_scale}. I want to pursue a ${degree_of_interest} in ${destination_country}. I have a budget of ${education_budget} for my studies. I have a total of ${years_of_work_ex} years of work experience.`,
    },
  ];
  if (
    highest_degree_achieved_specialisation ||
    highest_degree_achieved_college_tier ||
    gre_quant_score ||
    gre_verbal_score ||
    gmat_score ||
    gmat_exam_edition ||
    toefl_score ||
    ielts_score ||
    degree_of_interest_specialisation ||
    type_of_work_ex ||
    type_of_company ||
    name_of_the_company ||
    job_title ||
    number_of_research_articles ||
    quality_of_research ||
    number_of_letter_of_recommendation ||
    quality_of_letter_of_recommendation ||
    portfolio_url ||
    research_article_url ||
    github_url
  ) {
    promptMessages.push({
      role: "user",
      content: `Here are some additional details about me:`,
    });
    if (highest_degree_achieved_specialisation) {
      promptMessages.push({
        role: "user",
        content: `The ${highest_degree_achieved} I hold, has a concentration in ${highest_degree_achieved_specialisation}.`,
      });
    }
    if (highest_degree_achieved_college_tier) {
      promptMessages.push({
        role: "user",
        content: `The ${highest_degree_achieved} I hold from ${height_degree_achieved_institution} is considered a ${highest_degree_achieved_college_tier} institution.`,
      });
    }
    if (gre_quant_score && gre_verbal_score) {
      promptMessages.push({
        role: "user",
        content: `I scored ${gre_quant_score}/170 in the Quantitative section and ${gre_verbal_score}/170 in the Verbal section of the GRE.`,
      });
    }
    if (gmat_score && gmat_exam_edition) {
      promptMessages.push({
        role: "user",
        content: `I achieved a GMAT score of ${gmat_score} (Edition: ${gmat_exam_edition}).`,
      });
    }
    if (toefl_score) {
      promptMessages.push({
        role: "user",
        content: `My TOEFL score is ${toefl_score}/120.`,
      });
    }
    if (ielts_score) {
      promptMessages.push({
        role: "user",
        content: `My IELTS score is ${ielts_score}/9.`,
      });
    }
    if (degree_of_interest_specialisation) {
      promptMessages.push({
        role: "user",
        content: `I want to pursue a ${degree_of_interest} specifically in ${degree_of_interest_specialisation}.`,
      });
    }
    if (type_of_work_ex) {
      promptMessages.push({
        role: "user",
        content: `My ${years_of_work_ex} year of work experience is as a ${type_of_work_ex}.`,
      });
    }
    if (type_of_company) {
      promptMessages.push({
        role: "user",
        content: `My ${years_of_work_ex} year of work experience is in a ${type_of_company} company.`,
      });
    }
    if (name_of_the_company) {
      promptMessages.push({
        role: "user",
        content: `My ${years_of_work_ex} year of work experience is in ${name_of_the_company}.`,
      });
    }
    if (job_title) {
      promptMessages.push({
        role: "user",
        content: `My job title is ${job_title}.`,
      });
    }
    if (number_of_research_articles) {
      promptMessages.push({
        role: "user",
        content: `I have published ${number_of_research_articles} research articles.`,
      });
    }
    if (quality_of_research) {
      promptMessages.push({
        role: "user",
        content: `The quality of my research is considered ${quality_of_research}.`,
      });
    }
    if (number_of_letter_of_recommendation) {
      promptMessages.push({
        role: "user",
        content: `I have ${number_of_letter_of_recommendation} letters of recommendation.`,
      });
    }
    if (quality_of_letter_of_recommendation) {
      promptMessages.push({
        role: "user",
        content: `The quality of my letters of recommendation is considered ${quality_of_letter_of_recommendation}.`,
      });
    }
    if (portfolio_url) {
      promptMessages.push({
        role: "user",
        content: `Here is my portfolio: ${portfolio_url}, please feel free to take a look and extract any relevant information, that aids you in recommending colleges for my profile.`,
      });
    }
    if (research_article_url) {
      promptMessages.push({
        role: "user",
        content: `Here is the link to my research article: ${research_article_url}, please feel free to take a look and extract any relevant information, that aids you in recommending colleges for my profile.`,
      });
    }
    if (github_url) {
      promptMessages.push({
        role: "user",
        content: `Here is website that showcases my work: ${github_url}, please feel free to take a look and extract any relevant information, that aids you in recommending colleges for my profile.`,
      });
    }
  }

  console.log(promptMessages);

  return promptMessages;
}

const sendUniSelectRequestToOpenAI = async (requestBody) => {
  const uniSelectMessages = generateUniSelectPrompt(requestBody);

  try {
    const chatCompletionResponse = await openai.chat.completions.create({
      user: requestBody.email,
      temperature: 0.7,
      messages: uniSelectMessages,
      model: 'gpt-4o-mini',
    });

    console.log(chatCompletionResponse.choices[0]);

    return {
      status: true,
      data: chatCompletionResponse.choices[0],
      message: "Our AI model successfully generated a response",
    };
  } catch (error) {
    console.log(error)
    return {
      status: false,
      message: "Our AI model failed to a generate response",
    };
  }
}


router.post('/uni-select', async (req, res) => {
  const requestBody = req.body;

  console.log("Uni Select Route Triggered")
  console.log(
    requestBody.email, // required
    requestBody.highest_degree_achieved, // required
    requestBody.highest_degree_achieved_specialisation,
    requestBody.highest_degree_achieved_graduation_year, // required
    requestBody.height_degree_achieved_institution, // required
    requestBody.highest_degree_achieved_college_tier,
    requestBody.cgpa_score, // required
    requestBody.cgpa_scale, // required
    requestBody.gre_quant_score,
    requestBody.gre_verbal_score,
    requestBody.gmat_score,
    requestBody.gmat_exam_edition,
    requestBody.toefl_score,
    requestBody.ielts_score,
    requestBody.destination_country, // required
    requestBody.degree_of_interest, // required
    requestBody.degree_of_interest_specialisation,
    requestBody.education_budget, // required
    requestBody.years_of_work_ex, // required
    requestBody.type_of_work_ex,
    requestBody.type_of_company,
    requestBody.name_of_the_company,
    requestBody.job_title,
    requestBody.number_of_research_articles,
    requestBody.quality_of_research,
    requestBody.number_of_letter_of_recommendation,
    requestBody.quality_of_letter_of_recommendation,
    requestBody.linked_in_url, // required
    requestBody.portfolio_url,
    requestBody.research_article_url,
    requestBody.github_url
  )

  // ! IMPORTANT
  // TODO: SERVER SIDE FORM VALIDATION - could be done here

  // ! ENSURE USER HAS ENOUGH CREDITS TO MAKE REQUEST
  const currentUser = await User.findOne({ email: requestBody.email });

  if (currentUser) {
    if (currentUser.credits < 1) {
      // ! USER DOES NOT HAVE ENOUGH CREDITS
      return res.status(400).json({
        message: "Insufficient Gradbro Coins to make request",
      });
    } else {
      // ! USER HAS ENOUGH CREDITS
      try {
        if (
          requestBody.email &&
          requestBody.highest_degree_achieved &&
          requestBody.highest_degree_achieved_graduation_year &&
          requestBody.height_degree_achieved_institution &&
          requestBody.cgpa_score &&
          requestBody.cgpa_scale &&
          requestBody.destination_country &&
          requestBody.degree_of_interest &&
          requestBody.education_budget &&
          requestBody.years_of_work_ex &&
          requestBody.linked_in_url
        ) {


          // MAKE OPEN AI CALL
          const responseFromOpenAI = await sendUniSelectRequestToOpenAI(requestBody);

          console.log("********************************************************")
          console.log(responseFromOpenAI)

          if (responseFromOpenAI.status) {
            // SAVE RESPONSE TO DATABASE
            const newUniSelectApplication = new UniSelect({
              email: requestBody.email,
              application_id: uuidv4(),
              uni_recommendations: responseFromOpenAI.data.message.content,
              highest_degree_achieved: requestBody.highest_degree_achieved,
              highest_degree_achieved_specialisation: requestBody.highest_degree_achieved_specialisation,
              highest_degree_achieved_graduation_year: requestBody.highest_degree_achieved_graduation_year,
              height_degree_achieved_institution: requestBody.height_degree_achieved_institution,
              highest_degree_achieved_college_tier: requestBody.highest_degree_achieved_college_tier,
              cgpa_score: requestBody.cgpa_score,
              cgpa_scale: requestBody.cgpa_scale,
              gre_quant_score: requestBody.gre_quant_score,
              gre_verbal_score: requestBody.gre_verbal_score,
              gmat_score: requestBody.gmat_score,
              gmat_exam_edition: requestBody.gmat_exam_edition,
              toefl_score: requestBody.toefl_score,
              ielts_score: requestBody.ielts_score,
              destination_country: requestBody.destination_country,
              degree_of_interest: requestBody.degree_of_interest,
              degree_of_interest_specialisation: requestBody.degree_of_interest_specialisation,
              education_budget: requestBody.education_budget,
              years_of_work_ex: requestBody.years_of_work_ex,
              type_of_work_ex: requestBody.type_of_work_ex,
              type_of_company: requestBody.type_of_company,
              name_of_the_company: requestBody.name_of_the_company,
              job_title: requestBody.job_title,
              number_of_research_articles: requestBody.number_of_research_articles,
              quality_of_research: requestBody.quality_of_research,
              number_of_letter_of_recommendation: requestBody.number_of_letter_of_recommendation,
              quality_of_letter_of_recommendation: requestBody.quality_of_letter_of_recommendation,
              linked_in_url: requestBody.linked_in_url,
              portfolio_url: requestBody.portfolio_url,
              research_article_url: requestBody.research_article_url,
              github_url: requestBody.github_url
            });

            await newUniSelectApplication.save();

            await User.findOneAndUpdate({ email: requestBody.email }, { $inc: { credits: -1 } });

            res.status(201).json({
              message: "Application successfully submitted",
              uni_recommendations: responseFromOpenAI.data.message.content
            });

          } else {
            return res.status(500).json({
              message: responseFromOpenAI.message,
            });
          }
        } else {
          return res.status(400).json({
            message: "Please fill in all required fields",
          });
        }
      } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server error, please try again later", err });
      }
    }
  } else {
    // User does not exist in the database
    return res.status(400).json({
      message: "User not found",
    });
  }
});


module.exports = router;