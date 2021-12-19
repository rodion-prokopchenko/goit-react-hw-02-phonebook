import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";
import react, { Component } from "react";
import shortid from "shortid";

class App extends Component {
  state = {
    // filter: "r",
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  };

  findByName = () => {
    let contacts = this.state.contacts;

    contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  changeFilter = (ee) => {
    this.setState({ filter: ee.currentTarget.value });
    console.log(this.state.filter);
    this.findByName();
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contacts) => contacts.id !== contactId
      ),
    }));
  };

  addContact = (name, number) => {
    const newContact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className="App">
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter
        // value={filter}
        // onChange={this.changeFilter}
        // onFind={this.findByName}
        />
        <ContactList contacts={contacts} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
