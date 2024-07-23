const mongoose = require("mongoose");

const { Schema } = mongoose;

const uniSelectSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    max: 200,
  },
  application_id: {
    type: String,
    required: true,
    unique: true,
  },
  uni_recommendations: {
    type: String,
    required: true,
  },
  highest_degree_achieved: {
    type: String,
    required: true,
    max: 400,
  },
  highest_degree_achieved_specialisation: {
    type: String,
    max: 400,
  },
  highest_degree_achieved_graduation_year: {
    type: String,
    required: true,
  },
  height_degree_achieved_institution: {
    type: String,
    required: true,
    max: 400,
  },
  highest_degree_achieved_college_tier: {
    type: String,
  },
  cgpa_score: {
    type: String,
    required: true,
  },
  cgpa_scale: {
    type: String,
    required: true,
  },
  gre_quant_score: {
    type: String,
  },
  gre_verbal_score: {
    type: String,
  },
  gmat_score: {
    type: String,
  },
  gmat_exam_edition: {
    type: String,
  },
  toefl_score: {
    type: String,
  },
  ielts_score: {
    type: String,
  },
  destination_country: {
    type: String,
    required: true,
  },
  degree_of_interest: {
    type: String,
    required: true,
    max: 400,
  },
  degree_of_interest_specialisation: {
    type: String,
    max: 400,
  },
  education_budget: {
    type: String,
    required: true,
  },
  years_of_work_ex: {
    type: String,
    required: true,
  },
  type_of_work_ex: {
    type: String,
  },
  type_of_company: {
    type: String,
  },
  name_of_the_company: {
    type: String,
    max: 400,
  },
  job_title: {
    type: String,
    max: 400,
  },
  number_of_research_articles: {
    type: String,
  },
  quality_of_research: {
    type: String,
  },
  number_of_letter_of_recommendation: {
    type: String,
  },
  quality_of_letter_of_recommendation: {
    type: String,
  },
  linked_in_url: {
    type: String,
    required: true,
  },
  portfolio_url: {
    type: String,
  },
  research_article_url: {
    type: String,
  },
  github_url: {
    type: String,
  }
}, {
  timestamps: true,
});

const UniSelect = mongoose.model("UniSelect", uniSelectSchema);

module.exports = UniSelect;