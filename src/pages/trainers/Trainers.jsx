import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_5.jpg";
import { trainers } from "../../data";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import Trainer from "../../components/Trainer";
import "./trainers.css";

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers " image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        delectus sunt aperiam natus, enim a quos tempore sequi quis, quas
        dolores possimus eos dolorem unde aspernatur alias ab quidem accusamus.
      </Header>
      <section className="trainers ">
        <div className="container trainers_container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <FaLinkedin />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] },
                  { icon: <AiOutlineTwitter />, link: socials[3] },
                ]}
              ></Trainer>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Trainers;
