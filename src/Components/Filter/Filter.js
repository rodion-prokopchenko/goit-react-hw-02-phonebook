import react, { Component } from "react";
import propTypes from "prop-types";
import shortid from "shortid";

export default class Filter extends Component {
  onFilterWordsChange = (e) => {
    this.props.onChange(e);
  };

  render() {
    return (
      <form>
        <label key={shortid.generate()}>
          Find contacts by name
          <input
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            // value={this.props.value}
            onInput={this.onFilterWordsChange}
            key={shortid.generate()}
          ></input>
        </label>
      </form>
    );
  }
}

// Filter.propTypes = {};

// const Filter = ({ value, onChange }) => (
//   <form>
//     <label key={shortid.generate()}>
//       Find contacts by name
//       <input
//         type="text"
//         value={value}
//         onInput={onChange}
//         // onInput={onFind}
//         // key={shortid.generate()}
//       ></input>
//     </label>
//   </form>
// );

// export default Filter;
