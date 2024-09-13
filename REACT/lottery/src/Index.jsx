import Generate from "./Generate";
export default function Index() {
  function winConditon(number) {
    return number%10===3;
  }
  return (
    <div className="container" style={{ margin: "auto" }}>
      <h2>Welcome to the lottery game</h2>
      <h3>
        <i>Generate a 5 digit number</i>
      </h3>
      <Generate n={5} winCondition={winConditon} />
    </div>
  );
}
