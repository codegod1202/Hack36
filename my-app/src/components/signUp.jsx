import "./signUpPage.css";
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
    <form className="form" method="post" onSubmit={handleSubmit}>
    <h3>CREATE AN ACCOUNT</h3>
      <label className="form-label">
        Username : <br></br>
        <input name="username" />
      </label>
      <hr />
      <label className="form-label">
        Email: <br></br>
        <input name="email" />
      </label>
      <hr />
      <label className="form-label">
        password: <br></br>
        <input name="email" />
      </label>
      <br></br>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}
