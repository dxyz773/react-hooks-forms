import React from "react";

function Form({ firstName, lastName, handleFirstName, handleLastName }) {
  return (
    <form>
      <input type="text" value={firstName} onChange={handleFirstName} />
      <input type="text" value={lastName} onChange={handleLastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
