import Image from "../images/values.jpg";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../UI/Card";

const Values = () => {
  return (
    <section className="container values_container">
      <div className="values_left">
        <div className="values_image">
          <img src={Image} alt="Values Image" />
        </div>
      </div>
      <div className="values_right">
        <SectionHead icon={<GiCutDiamond />} title="Values"></SectionHead>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          dolore beatae id fugiat commodi, facilis quos, blanditiis cumque
          deleniti autem, quo perferendis fugit animi porro distinctio suscipit.
          Iure, autem repudiandae?
        </p>
        <div className="values_wrapper">
          {values.map(({ id, icon, title, desc }) => {
            return (
              <Card key={id} className="values_value">
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{desc}</small>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
