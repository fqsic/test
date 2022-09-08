import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import "./about.css";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        voluptas ipsam expedita quos modi incidunt aut officia nulla, amet,
        ullam saepe tempore enim eaque recusandae commodi similique natus quod
        illum!
      </Header>
      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="Oour Story Image" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores voluptas possimus, aspernatur ullam minima cum
              praesentium? Doloribus, officia aperiam corporis, numquam
              accusamus perspiciatis amet neque, ex repellendus eligendi ducimus
              quae.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis deleniti non quibusdam voluptates ex quaerat quae dicta
              consectetur, excepturi tempore, provident architecto voluptatibus
              exercitationem atque a commodi praesentium, eius expedita!{" "}
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis deleniti non quibusdam voluptates ex quaerat quae dicta
              consectetur, excepturi tempore, provident architecto voluptatibus
              exercitationem atque a commodi praesentium, eius expedita!{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="about_Vision">
        <div className="container about_Vision-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores voluptas possimus, aspernatur ullam minima cum
              praesentium? Doloribus, officia aperiam corporis, numquam
              accusamus perspiciatis amet neque, ex repellendus eligendi ducimus
              quae.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis deleniti non quibusdam voluptates ex quaerat quae dicta
              consectetur, excepturi tempore, provident architecto voluptatibus
              exercitationem atque a commodi praesentium, eius expedita!{" "}
            </p>
          </div>
          <div className="about_section-image">
            <img src={VisionImage} alt="Oour Vision Image" />
          </div>
        </div>
      </section>
      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt="Oour Mission Image" />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores voluptas possimus, aspernatur ullam minima cum
              praesentium? Doloribus, officia aperiam corporis, numquam
              accusamus perspiciatis amet neque, ex repellendus eligendi ducimus
              quae.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis deleniti non quibusdam voluptates ex quaerat quae dicta
              consectetur, excepturi tempore, provident architecto voluptatibus
              exercitationem atque a commodi praesentium, eius expedita!{" "}
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis deleniti non quibusdam voluptates ex quaerat quae dicta
              consectetur, excepturi tempore, provident architecto voluptatibus
              exercitationem atque a commodi praesentium, eius expedita!{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
