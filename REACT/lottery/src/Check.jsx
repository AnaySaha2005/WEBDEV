let winsum = 15;
export default function Check({ value, isWinning }) {
  return (
    <>
      <h2 style={{ display: isWinning ? "block" : "none" }}>You have Won!!!</h2>
      <h2 style={{ display: !isWinning && value != 0 ? "block" : "none" }}>
        Try again....
      </h2>
    </>
  );
}
