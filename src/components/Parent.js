import { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function Parent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  console.log(firstName);
  console.log(lastName);
  return (
    <div>
      <Form
        firstName={firstName}
        lastName={lastName}
        handleLastName={handleLastNameChange}
        handleFirstName={handleFirstNameChange}
      />
      <DisplayData firstName={firstName} lastName={lastName} />
    </div>
  );
}

export default Parent;
