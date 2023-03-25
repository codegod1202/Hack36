import React from "react";
import ReactDOM from "react";

export default function MyForm() {
    function handleSubmit(e) {
         e.preventDefault();
          const form = e.target;
          const formData = new FormData(form);

          const formJson = Object.fromEntries(formData.entries());
          console.log(formJson);
    }
  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Username : <br></br>
        <input name="username" />
      </label>
      <hr />
      <label>
        Email: <br></br>
        <input name="email" />
      </label>
      <hr />
      <label>
        password: <br></br>
        <input name="email" />
      </label>
      <button type="submit">Submit form</button>
    </form>
  );
}
