import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React from "react";
import { PDFDocument, rgb } from "pdf-lib";
import { saveAs } from "file-saver";

import "../assets/css/UniSuggestion.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// Define the props type
type UniSuggestionProps = {
  markDownContent: string;
  setUniRecommendationMarkdown: (value: string) => void;
};

const UniSuggestion: React.FC<UniSuggestionProps> = ({
  markDownContent,
  setUniRecommendationMarkdown,
}) => {
  // Define the function to handle the back button click
  const handleOnClickBackButton = () => {
    // Redirect to the previous page
    setUniRecommendationMarkdown("");
  };

  // Generate the PDF of Uni Recommendations
  const generatePdf = async () => {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);

    // Set font size and color
    const { height } = page.getSize();
    const fontSize = 12;
    const textColor = rgb(0, 0, 0);

    // Draw text
    page.drawText(markDownContent, {
      x: 50,
      y: height - 50,
      size: fontSize,
      color: textColor,
    });

    // Serialize the PDFDocument to bytes
    const pdfBytes = await pdfDoc.save();

    // Create a Blob from the PDF bytes
    const blob = new Blob([pdfBytes], { type: "application/pdf" });

    // Save the PDF
    saveAs(blob, "gradBro.pdf");
  };

  return (
    <div className="markdown-content px-5">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markDownContent}
      </ReactMarkdown>
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
            className="mx-3"
            onClick={handleOnClickBackButton}
            size="lg"
            variant="warning"
          >
            Back
          </Button>
          <Button onClick={generatePdf}>
            <svg
              style={{ marginRight: "10px" }}
              width="22px"
              height="22px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Download
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default UniSuggestion;
