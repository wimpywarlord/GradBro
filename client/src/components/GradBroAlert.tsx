import Alert from "react-bootstrap/Alert";
import React from "react";

// Define the props type
type GradBroAlertProps = {
  variant: string;
  message: string;
  inPlaceOrAbsolute: "static" | "absolute" | "fixed";
  topPosition?: string;
  rightPosition?: string;
};

const GradBroAlert: React.FC<GradBroAlertProps> = ({
  variant,
  message,
  inPlaceOrAbsolute,
  topPosition,
  rightPosition,
}) => {
  return (
    <div
      style={{
        position: inPlaceOrAbsolute,
        top: topPosition ? topPosition : "20px",
        right: rightPosition ? rightPosition : "20px",
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
