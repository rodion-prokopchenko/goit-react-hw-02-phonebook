import react, { Component } from "react";
import propTypes from "prop-types";
import shortid from "shortid";

export default class ContactForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.nameInput = react.createRef();
  // }
  state = {
    id: shortid.generate(),
    name: "",
    number: "",
  };

  onNameChange = (e) => {
    this.setState({ name: e.currentTarget.value });
  };
  onNumberChange = (e) => {
    this.setState({ number: e.currentTarget.value });
  };

  reset = () => {
    this.nameInput.current.reset();
  };
  onSumbitButton = (e) => {
    e.preventDefault();
    // console.log("нажал");
    // console.log(this.state.name);
    // console.log(this.state.number);
    this.props.addContact(this.state.name, this.state.number);
    // this.ref.nameInput.value = "";
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor={shortid.generate()}>
            Name
            <input
              id="nameInput"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              // ref={this.nameInput}
              onInput={this.onNameChange}
            />
          </label>

          <label htmlFor={shortid.generate()}>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onInput={this.onNumberChange}
            />
          </label>
          <button type="button" onClick={this.onSumbitButton}>
            Добавить
          </button>
        </form>
      </>
    );
  }
}
// Divs.propTypes = {
//   : propTypes.string.isRequired,
// };
