import PropTypes from "prop-types";

const MenuCover = ({ img, heading, paragraph }) => {
  return (
    <div
      style={{ backgroundImage: `url("${img}")` }}
      className="bg-cover bg-center min-h-96 lg:min-h-[500px] flex items-center justify-center p-10 mb-10"
    >
      <div className="bg-black bg-opacity-60 text-center text-white py-10 px-5 lg:px-44 lg:py-20">
        <h2 className="text-4xl  font-bold uppercase">{heading}</h2>
        <p className="text-sm mt-2 ">{paragraph}</p>
      </div>
    </div>
  );
};

export default MenuCover;
MenuCover.propTypes = {
  img: PropTypes.string,
  heading: PropTypes.string,
  paragraph: PropTypes.string,
};
