import { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";
import Form2 from "./Form2";

function Parent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <div>
      <Form
        firstName={firstName}
        lastName={lastName}
        handleLastName={handleLastNameChange}
        handleFirstName={handleFirstNameChange}
      />
      <DisplayData firstName={firstName} lastName={lastName} />
      <Form2 />
    </div>
  );
}

export default Parent;
