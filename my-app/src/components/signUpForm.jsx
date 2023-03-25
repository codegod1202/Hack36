import React from "react";
import ReactDOM from "react";
// export function signUpForm() {
//   return (
//     <div>
//       <div className="search-input">
//         <input type="text" placeholder="Search" />
//       </div>
//       <h1 className="h1">Search Result</h1>
//       <div className="books">
//         <table>
//           <thead>
//             <tr>
//               <th className="title-col">Title</th>
//               <th className="author-col">Author</th>
//               <th className="year-col">Publication Year</th>
//             </tr>
//           </thead>
//           <tbody></tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NameForm />);
