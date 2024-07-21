import Alert from "react-bootstrap/Alert";
import React from "react";

// Define the props type
type GradBroAlertProps = {
  variant: string;
  message: string;
  inPlaceOrAbsolute: "static" | "absolute";
};

const GradBroAlert: React.FC<GradBroAlertProps> = ({
  variant,
  message,
  inPlaceOrAbsolute,
}) => {
  return (
    <div
      style={{
        position: inPlaceOrAbsolute,
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
