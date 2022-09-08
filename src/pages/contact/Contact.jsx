import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed alias ullam
        non harum inventore fugiat sequi quae sint provident. Hic ducimus enim
        officiis quos minima laudantium doloremque magnam voluptatum quod!
      </Header>
      <section className="contact">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a
              href="mailto:support@egattor.com"
              target="_blank"
              rel="norrferrer nooper"
            >
              <MdEmail />
            </a>
            <a
              href="https://m.me/ernest_achiever"
              target="_blank"
              rel="norrferrer nooper"
            >
              <BsMessenger />
            </a>{" "}
            <a
              href="https://wa.me/+8237948"
              target="_blank"
              rel="norrferrer nooper"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
