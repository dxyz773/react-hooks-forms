import { useState } from "react";

function Form2() {
  const [number, setNumber] = useState(0);
  const [isInvalidNumber, setIsInvalidNumber] = useState(null);

  function handleNumberChange(event) {
    const newNumber = parseInt(event.target.value);
    if (newNumber >= 0 && newNumber <= 5) {
      setNumber(newNumber);
      setIsInvalidNumber(null);
    } else {
      setIsInvalidNumber(`${newNumber} is not a valid number!`);
    }
  }

  return (
    <form>
      <input type="number" value={number} onChange={handleNumberChange}></input>
      {isInvalidNumber ? (
        <span style={{ color: "red" }}>{isInvalidNumber}</span>
      ) : null}
    </form>
  );
}

export default Form2;
