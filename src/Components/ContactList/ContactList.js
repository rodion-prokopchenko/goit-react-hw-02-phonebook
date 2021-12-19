import react, { Component } from "react";
import propTypes from "prop-types";
import shortid from "shortid";

export default class ContactList extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.contacts.map((contacts) => (
            <li
              key={shortid.generate()}
              id={contacts.id}
              onClick={(e) => {
                if (e.target.nodeName !== "BUTTON") {
                  return;
                }
                this.props.deleteContact(e.currentTarget.id);
                console.log(e.currentTarget.id);
              }}
            >
              {contacts.name}: {contacts.number}
              <button type="button">Delete</button>
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
