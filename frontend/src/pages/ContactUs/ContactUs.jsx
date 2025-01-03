import { Helmet } from "react-helmet-async";
import PageCover from "../../components/PageCover/PageCover";
import contactImg from "../../assets/contact/banner.jpg";

const ContactUs = () => {
  return (
    <div>
      {/* dynamic title */}
      <Helmet>
        <title>Bistro Boss | Contact</title>
      </Helmet>
      {/* cover */}
      <PageCover
        img={contactImg}
        heading="contact us"
        subHeading="would you like to try a dish?"
      ></PageCover>
    </div>
  );
};

export default ContactUs;
