import React from "react";
import { LanguageContext } from "./LanguageContext";
import DisplayLanguage from "./DisplayLanguage";

export default class SelectLanguage extends React.Component {
  state = {
    language: "EN",
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <>
        <div>
          <label htmlFor='language-select'>Select Language:</label>
          <select
            id='language-select'
            value={this.state.language}
            onChange={this.handleLanguageChange}
          >
            <option value='EN'>English</option>
            <option value='IT'>Italiano</option>
            <option value='ES'>Espanol</option>
          </select>
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </>
    );
  }
}
