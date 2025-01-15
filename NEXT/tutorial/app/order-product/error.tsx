"use client";
//to handle error and retry
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
  //rerenders componnet
}) {
  return (
    <>
      <div>{error.message}</div>
      <button onClick={reset}>Retry</button>
    
    </>
  );
}
