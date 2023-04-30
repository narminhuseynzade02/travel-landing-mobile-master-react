import "./GetInspired.scss";
import shape from "../../components/CardSection/Shape.svg";

export const GetInspired = () => {
  return (
    <>
      <div className="get-inspired-section">
        <div>
          <div className="get-inspired-header">
            Get inspired for your next trip
          </div>
        </div>
        <div>
          <div className="get-inspired-view">
            VIEW ALL <img src={shape} alt="" />
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
              Arashiyama in Kyoto is a beautiful district famous for its autumn
              foliage and attractions such as the bamboo forest, Tenryu-ji
              Temple, Monkey Park, and charming streets with shops, cafes, and
              restaurants, making it a must-visit destination for those
              exploring Kyoto.
            </h5>
            <h6>
              VIEW NEIGHBORHOOD <img src="./assets/Shape.svg" alt="" />
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};
