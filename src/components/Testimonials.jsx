import SectionHead from "./SectionHead";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../UI/Card";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "../data";
import { useState } from "react";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];
  const prevTestimonialHandle = () => {
    setIndex((prev) => prev - 1);
    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };
  const nextTestimonialHandle = () => {
    setIndex((prev) => prev + 1);

    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };
  return (
    <section className=" ">
      <div className="container  testimonials_container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title=" Testimonials"
          className="testimonials_head"
        />
        <Card className=" testimonials">
          <div className=" testimonials_avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonials_quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonials_title">{job}</small>
        </Card>
        <div className="testimonials_btn-container">
          <button className="testimonials_btn" onClick={prevTestimonialHandle}>
            <IoIosArrowDropleftCircle />
          </button>
          <button className="testimonials_btn" onClick={nextTestimonialHandle}>
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
