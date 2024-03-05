"use client";

const ErrorBoundary = ({ error }) => {
  return (
    <>
      <div>{error.text}</div>
    </>
  );
};

export default ErrorBoundary;
