import react from "react";
import propTypes from "prop-types";
import shortid from "shortid";

export default function Name({}) {
  return (
    <>
      <label htmlFor={shortid.generate()}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </>
  );
}
// Divs.propTypes = {
//   : propTypes.string.isRequired,
// };
