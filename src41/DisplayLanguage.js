import React, { createContext, Component } from "react";

const LanguageContext = createContext();

class DisplayLanguage extends Component {
  state = {
    language: "English",
  };
  handleLanguageChange = (event) => {
    this.setState({ language: event.target.value });
  };

  render() {
    return (
      <LanguageContext.Provider value={this.state.language}>
        <div>
          <h1>{this.state.language} is selected.</h1>
          <select
            value={this.state.language}
            onChange={this.handleLanguageChange}
          >
            <option value='English'>English</option>
            <option value='Spanish'>Spanish</option>
            <option value='French'>French</option>
          </select>
        </div>
      </LanguageContext.Provider>
    );
  }
}

export default DisplayLanguage;
