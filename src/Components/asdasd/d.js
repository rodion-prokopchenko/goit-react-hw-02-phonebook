import react from "react";
import propTypes from "prop-types";

export default function Divs({ smd }) {
  return (
    <>
      <div>{smd}</div>
    </>
  );
}
Divs.propTypes = {
  smd: propTypes.array.isRequired,
};
