import * as React from "react";

const Alert: React.FC<{ message: string }> = ({ message }) => {
  return <div style={{ backgroundColor: "Green" }}>{message}</div>;
};

export default Alert;
