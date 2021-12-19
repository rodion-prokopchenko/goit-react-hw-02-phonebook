import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";
import react, { Component } from "react";
import shortid from "shortid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "r",
  };

  findByName = () => {
    let contacts = this.state.contacts;
    console.log(
      contacts.filter((contacts) =>
        contacts.name.toLowerCase().includes(this.state.filter.toLowerCase())
      )
    );
  };

  changeFilter = (e) => {
    e.preventDefault();
    this.setState({ filter: e.currentTarget.value });
    console.log(this.state.filter);
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
          value={filter}
          onChange={this.changeFilter}
          onFind={this.findByName}
        />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
