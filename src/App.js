import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";
import react, { Component } from "react";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    names: "",
    number: "2",
  };

  render() {
    const { contacts, names, number } = this.state;
    return (
      <div className="App">
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
