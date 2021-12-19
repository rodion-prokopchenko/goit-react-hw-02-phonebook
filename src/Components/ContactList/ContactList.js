import react, { Component } from "react";
import propTypes from "prop-types";
import shortid from "shortid";

export default class ContactList extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.contacts.map((contacts) => (
            <li key={shortid.generate()}>
              {contacts.name}: {contacts.number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

ContactList.propTypes = {
  contacts: propTypes.array.isRequired,
};
