import react, { Component } from "react";
import propTypes from "prop-types";
import shortid from "shortid";

export default class ContactList extends Component {
  render() {
    return (
      <>
        <h2>Contacts</h2>
        <ul>
          {this.props.contacts.map((contacts) => (
            <li key={shortid.generate()}>{contacts.name}</li>
          ))}
        </ul>
      </>
    );
  }
}
