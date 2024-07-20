import Alert from "react-bootstrap/Alert";
import React from "react";

// Define the props type
type GradBroAlertProps = {
  variant: string;
  message: string;
};

const GradBroAlert: React.FC<GradBroAlertProps> = ({ variant, message }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 1050,
      }}
    >
      <Alert key={variant} variant={variant}>
        {message}
      </Alert>
    </div>
  );
};

export default GradBroAlert;
