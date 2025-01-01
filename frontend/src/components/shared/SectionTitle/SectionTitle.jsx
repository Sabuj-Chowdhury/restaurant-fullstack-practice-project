import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="lg:w-3/12 w-1/2 mx-auto text-center mb-5">
      <p className="text-yellow-600 italic py-2">---{subHeading}---</p>
      <h2 className="uppercase text-3xl border-y-2 py-4">{heading}</h2>
    </div>
  );
};

export default SectionTitle;

SectionTitle.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};
