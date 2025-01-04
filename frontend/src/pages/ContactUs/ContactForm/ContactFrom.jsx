import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";

const ContactFrom = () => {
  return (
    <div className="mb-20">
      <SectionTitle
        heading="Contact Form"
        subHeading="Send us a Message"
      ></SectionTitle>

      <div className="flex justify-center items-center mt-8 bg-gray-100">
        <form className="w-full max-w-2xl p-8 ">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700"
              >
                Name*
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:border-yellow-500 focus:ring-yellow-500 text-sm"
              />
            </div>
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:border-yellow-500 focus:ring-yellow-500 text-sm"
              />
            </div>
          </div>
          {/* Phone Field */}
          <div className="mt-6">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700"
            >
              Phone*
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Enter your phone number"
              className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:border-yellow-500 focus:ring-yellow-500 text-sm"
            />
          </div>
          {/* Message Field */}
          <div className="mt-6">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700"
            >
              Message*
            </label>
            <textarea
              id="message"
              placeholder="Write your message here"
              rows={4}
              className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:border-yellow-500 focus:ring-yellow-500 text-sm"
            ></textarea>
          </div>
          {/* reCAPTCHA */}
          <div className="mt-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="recaptcha"
                className="h-5 w-5 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
              />
              <label htmlFor="recaptcha" className="ml-3 text-sm text-gray-700">
                I’m not a robot
              </label>
            </div>
          </div>
          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-3 px-6 rounded-lg text-sm font-semibold shadow hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            >
              Send Message ✈️
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFrom;
