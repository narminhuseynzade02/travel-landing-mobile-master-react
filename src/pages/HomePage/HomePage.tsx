import "./HomePage.scss";
import { CardSection } from "./components/CardSection/CardSection";
import shape from "./Oval.svg";
import { TopPlaces } from "./components/TopPlaces/TopPlaces";
import { GetInspired } from "./components/GetInspired/GetInspired";
import { Footer } from "../../Footer";
import video from "./Video.png";
export const HomePage = () => {
  return (
    <>
      <div className="big-box">
        <div className="hero-section">
          <div className="discover-box">
            <div className="first-text">Discover Amazing places in Japan</div>
            <div className="more-info">
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over. Being gorgeous with belly side up i could
              pee on this if i had the energy but under the bed, for attack the
              child, open the door.
            </div>
            <div>
              <img src={shape} alt="" /> What would you like to do?
            </div>
            <div>
              <img src={shape} alt="" /> Where would you like to go?
            </div>
            <button>SEARCH</button>
          </div>
        </div>
      </div>
      <div className="second-part">
        <CardSection />
        <GetInspired />
        <TopPlaces />
      </div>
      <section className="video-section">
        <img src={video} alt="" />
      </section>
    </>
  );
};
