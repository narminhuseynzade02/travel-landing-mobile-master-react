import "./HomePage.scss";
import { CardSection } from "./components/CardSection/CardSection";
import shape from "./Oval.svg";
import { TopPlaces } from "./components/TopPlaces/TopPlaces";
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
        <div className="get-inspired-section">
          <div>
            <div className="get-inspired-header">
              Get inspired for your next trip
            </div>
          </div>
          <div>
            <div className="get-inspired-view">
              VIEW ALL <img src="./assets/Shape.svg" alt="" />
            </div>
          </div>
          <div className="get-inspired-pic">
            <img src="./assets/1.png" alt="" />
            <img src="./assets/2.png" alt="" />
          </div>
          <div className="get-inspired-pics">
            <img src="./assets/33.png" alt="" />
            <img src="./assets/4.png" alt="" />
            <img src="./assets/55.png" alt="" />
          </div>
        </div>
        <div className="prefecture-neighborhood-section">
          <div className="prefecture-text-img">
            <img src="./assets/Image (6).png" alt="" />
            <div className="text">
              <h1>Prefecture in Focus: Tottori</h1>
              <h2>
                Tottori, a prefecture on Honshu Island's Sea of Japan coast,
                offers stunning sand dunes, scenic mountains, hot springs,
                temples, fresh seafood, Wagyu beef, and local specialties like
                Tottori dango. Visitors can enjoy outdoor activities such as
                hiking, skiing, and sandboarding.
              </h2>
              <h3>
                VIEW PREFECTURE <img src="./assets/Shape.svg" alt="" />
              </h3>
            </div>
          </div>
          <div className="neighborhood-text-img">
            <img src="./assets/Image (7).png" alt="" />
            <div className="text-neighborhood">
              <h4>Featured Neighborhood: Kyoto’s Arashiyama</h4>
              <h5>
                Arashiyama in Kyoto is a beautiful district famous for its
                autumn foliage and attractions such as the bamboo forest,
                Tenryu-ji Temple, Monkey Park, and charming streets with shops,
                cafes, and restaurants, making it a must-visit destination for
                those exploring Kyoto.
              </h5>
              <h6>
                VIEW NEIGHBORHOOD <img src="./assets/Shape.svg" alt="" />
              </h6>
            </div>
          </div>
        </div>
      </div>
      <TopPlaces />
      <section className="video-section">
        <img src="./assets/Video.png" alt="" />
      </section>
    </>
  );
};
