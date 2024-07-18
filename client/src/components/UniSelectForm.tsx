// @ts-ignore
import COUNTRIES_FOR_EDUCATION from "../assets/js/countryList.js";
// @ts-ignore
import DEGREES from "../assets/js/degreeList.js";
// @ts-ignore
import COLLEGES from "../assets/js/collegeList.js";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import InputGroup from "react-bootstrap/InputGroup";

import "../assets/css/UniSelectForm.css";
import { useState } from "react";
import { Container } from "react-bootstrap";

// Define the type for a single country object
interface Country {
  name: string;
  code: string;
  timezone: string;
  utc: string;
  mobileCode: string;
}

interface Degree {
  degree_title: string;
  degree_reference: string;
  degree_level: string;
}

interface College {
  key: string;
  name: string;
}

function UniSelectForm() {
  const [destinationCountry, setDestinationCountry] = useState<string>("");
  const [degree, setDegree] = useState<string>("");
  const [institution, setInstitution] = useState<string>("");

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

  const renderTooltip = (toolTipText: any) => (
    <Tooltip id="button-tooltip">{toolTipText}</Tooltip>
  );

  return (
    <>
      <Container className="uni-select-form-main-box py-5 px-5">
        <Row>
          {/* COUNTRY OF INTEREST */}
          <Col
            style={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "end",
            }}
            xs={12}
            sm={12}
            md={3}
          >
            <Form.Label>
              Select Destination Country for Education{" "}
              <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Select size="lg" aria-label="Default select example">
              {COUNTRIES_FOR_EDUCATION.map((country: Country) => (
                <option
                  value="country.name"
                  key={country.code + country.name + country.mobileCode}
                >
                  {country.name}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col
            style={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "end",
            }}
            xs={12}
            sm={12}
            md={3}
          >
            <Form.Label>
              Select Degree you want to Pursue{" "}
              <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Select size="lg" aria-label="Default select example">
              {DEGREES.map((degree: Degree) => (
                <option
                  key={
                    degree.degree_title +
                    degree.degree_reference +
                    degree.degree_level +
                    "destination"
                  }
                  value={degree.degree_title}
                >
                  {degree.degree_title}
                </option>
              ))}
            </Form.Select>
          </Col>
          {/* DEGREE ACHIEVED*/}
          <Col
            style={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "end",
            }}
            xs={12}
            sm={12}
            md={4}
          >
            <Form.Label>
              Select Highest Degree Achieved{" "}
              <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Select size="lg" aria-label="Default select example">
              {DEGREES.map((degree: Degree) => (
                <option
                  key={
                    degree.degree_title +
                    degree.degree_reference +
                    degree.degree_level +
                    "achieved"
                  }
                  value={degree.degree_title}
                >
                  {degree.degree_title}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={2}
            style={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Form.Label>
              Select Graduation Year <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Select size="lg" aria-label="Select Graduation Year">
              {yearsForGraduationYearList.map((year: number) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        <Row className="pt-3 pb-2">
          {/* INSTITUTION */}
          <Col
            xs={12}
            sm={12}
            md={3}
            style={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Form.Label>
              Select Institution of Highest Degree Achieved{" "}
              <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Select
              size="lg"
              aria-label="Select Highest Education Institution"
            >
              <option key="other" value="other">
                Other
              </option>
              {COLLEGES.map((college: College) => (
                <option key={college.key} value="college.name">
                  {college.name}
                </option>
              ))}
            </Form.Select>
          </Col>

          {/* Other Institution */}
          <Col
            xs={12}
            sm={12}
            md={3}
            style={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Form.Label htmlFor="nameOfTheInstitution">
              If `Other` Institution, then specify
            </Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="e.g. XYZ University"
              id="nameOfInstitutionFormControl"
              aria-describedby="nameOfInstitutionHelpBlock"
            />
          </Col>

          {/* COLLEGE TIER */}
          <Col
            xs={12}
            sm={12}
            md={3}
            style={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Form.Label>
              Select Tier of Institution <span style={{ color: "red" }}>*</span>
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
            <Form.Select size="lg" aria-label="Default select example">
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
          >
            <Form.Label htmlFor="specialisations">
              Enter your Specialisation <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="e.g. Computer Science"
              id="specialisationsInputTextBox"
              aria-describedby="specialisationsHelpBlock"
            />
          </Col>
        </Row>

        <hr></hr>

        <Row className="pt-2">
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
          >
            <Form.Label>
              Select CGPA - Score / Scale{" "}
              <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <InputGroup>
              <InputGroup.Text>CGPA</InputGroup.Text>
              <Form.Control
                size="lg"
                placeholder=""
                type="number"
                aria-label="CGPA Score"
              />
              <Form.Control
                placeholder=""
                type="number"
                size="lg"
                aria-label="CGPA Scale"
              />
            </InputGroup>
          </Col>

          {/* GRE SCORE */}
          <Col
            xs={12}
            sm={12}
            md={4}
            style={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Form.Label>Enter GRE Score Quant | Verbal</Form.Label>
            <InputGroup>
              <InputGroup.Text>GRE</InputGroup.Text>
              <Form.Control
                size="lg"
                placeholder="Quant"
                type="number"
                aria-label="GRE Score Quant"
                max={170}
                min={130}
              />
              <Form.Control
                size="lg"
                placeholder="Verbal"
                type="number"
                aria-label="GRE Score Verbal"
                max={170}
                min={130}
              />
            </InputGroup>
          </Col>

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
          >
            <Form.Label>
              Enter GMAT Score
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
            <InputGroup>
              <InputGroup.Text>GMAT</InputGroup.Text>
              <Form.Control
                size="lg"
                placeholder="Score"
                type="number"
                aria-label="GRE Score Quant"
                max={805}
                min={200}
              />
              <Form.Select size="lg" aria-label="Select GMAT Exam Edition">
                <option key="Focus" value="Focus">
                  Focus
                </option>
                <option key="10th-Edition" value="10th-Edition">
                  10th Edition
                </option>
              </Form.Select>
            </InputGroup>
          </Col>
        </Row>

        {/* GRADUTAION YEAR */}
        <Row className="pb-2 pt-3">
          <Col
            xs={12}
            sm={12}
            md={4}
            style={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Form.Label>Enter TOEFL Score</Form.Label>
            <InputGroup>
              <InputGroup.Text>TOEFL</InputGroup.Text>
              <Form.Control
                size="lg"
                placeholder="Score"
                type="number"
                aria-label="TOEFL Score"
                max={120}
                min={0}
              />
            </InputGroup>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={4}
            style={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Form.Label>Enter IELTS Score</Form.Label>
            <InputGroup>
              <InputGroup.Text>IELTS</InputGroup.Text>
              <Form.Control
                size="lg"
                placeholder="Score"
                type="number"
                aria-label="IELTS Score"
                max={9}
                min={0}
              />
            </InputGroup>
          </Col>
        </Row>

        <hr></hr>

        <Row className="pt-2">
            
        </Row>
      </Container>
    </>
  );
}

export default UniSelectForm;
