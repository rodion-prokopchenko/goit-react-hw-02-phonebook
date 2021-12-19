import "./App.css";
import Name from "./Components/Name/Name";
import Number from "./Components/Number/Nubmer";
import Contacts from "./Components/Contacts/ContactList";
import react, { Component } from "react";

class App extends Component {
  state = {
    contacts: [{ name: "w" }, { name: "s" }, { name: "q" }],
    names: "",
    number: "2",
  };

  render() {
    const { contacts, names, number } = this.state;
    return (
      <div className="App">
        <Name />
        <Number />
        <Contacts contacts={contacts} />
      </div>
    );
  }
}

export default App;
