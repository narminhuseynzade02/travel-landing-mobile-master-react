import "./CardSection.scss";
import iconFirst from "./Icon (3).svg";
import iconSecond from "./Icon (4).svg";
import iconThird from "./Icon (5).svg";
import shape from "./Shape.svg";

export const CardSection = () => {
  return (
    <div className="card-section">
      <div className="container">
        <div className="card-header">Benefits of Odigo</div>
        <div className="card-boxes">
          <div className="card-one">
            <img src={iconFirst} alt="" />
            <div>Welcome to Odigo!</div>
            <text>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over.
            </text>
            <p>
              LEARN MORE <img src={shape} alt="" />
            </p>
          </div>
          <div className="card-two">
            <img src={iconSecond} alt="" />
            <div>Your Personal Japan Guide</div>
            <text>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over.
            </text>
            <p>
              LEARN MORE <img src={shape} alt="" />
            </p>
          </div>
          <div className="card-three">
            <img src={iconThird} alt="" />
            <div>Promoting Local Businesses</div>
            <text>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over.
            </text>
            <p>
              LEARN MORE <img src={shape} alt="" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
