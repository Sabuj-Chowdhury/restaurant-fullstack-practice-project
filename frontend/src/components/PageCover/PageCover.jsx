const PageCover = ({ img, heading, subHeading }) => {
  return (
    <div
      className=" md:min-h-[600px] min-h-96 bg-fixed  flex items-center justify-center bg-cover bg-center mb-10"
      style={{ backgroundImage: `url("${img}")` }}
    >
      <div className="px-5 lg:py-20">
        {/* Content */}
        <div className="text-center text-white bg-black    bg-opacity-50 p-14 lg:px-64 lg:py-40">
          <h2 className="text-4xl md:text-5xl font-bold uppercase">
            {heading}
          </h2>
          <p className="text-lg mt-2 uppercase">{subHeading}</p>
        </div>
      </div>
    </div>
  );
};

export default PageCover;
