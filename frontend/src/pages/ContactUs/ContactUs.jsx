import { Helmet } from "react-helmet-async";
import PageCover from "../../components/PageCover/PageCover";
import contactImg from "../../assets/contact/banner.jpg";

import Location from "./Location/Location";
import ContactFrom from "./ContactForm/ContactFrom";

const ContactUs = () => {
  return (
    <section>
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

      <Location></Location>
      <ContactFrom></ContactFrom>
    </section>
  );
};

export default ContactUs;
