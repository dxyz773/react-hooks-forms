import { useState } from "react";
import Form from "./Form";

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
    <Form
      firstName={firstName}
      lastName={lastName}
      handleLastName={handleLastNameChange}
      handleFirstName={handleFirstNameChange}
    />
  );
}

export default Parent;
