import react, { Component } from "react";
import propTypes from "prop-types";
import shortid from "shortid";

class Filter extends Component {
  render() {
    return (
      <label key={shortid.generate()}>
        Find contacts by name
        <input type="text" key={shortid.generate()}></input>
      </label>
    );
  }
}
export default Filter;
