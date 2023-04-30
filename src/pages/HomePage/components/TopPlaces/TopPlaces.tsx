import "./TopPlaces.scss";
import nagoya from "./NAGOYA.png";
import niigata from "./NIIGATA.png";
import osaka from "./OSAKA.png";
import saitama from "./SAITAMA.svg";
import ueno from "./UENO.svg";
import shibuya from "./SHIBUYA.svg";
import heart from "./heart.svg";
import comment from "./comment.svg";

export const TopPlaces = () =>{

return(
    <>
    <div className="header">Today top places to visit</div>
        <div className="cities-japan">
          <div className="main-cities">
            <div className="nagoya">
              <div className="image-wrapper">
                <img src={nagoya} alt="" />
                <div className="image-info">
                  <div className="nagoya-text">
                    <p>NAGOYA</p>
                  </div>
                  <div className="nagoya-text-signs">
                    <p>
                      221 <img src={heart} alt="" />
                    </p>
                    <p>
                      50 <img src={comment} alt="" />
                    </p>
                  </div>
                </div>
              </div>
              <text>
                Nagoya is a city in Japan, located on the Pacific coast of the
                island of Honshu. It's known for its castle, automotive
                industry, unique local cuisine.
              </text>
              <div>
                <button>
                  SEE MORE
                </button>
              </div>
            </div>
            <div className="niigata">
              <div className="image-wrapper-niigata">
                <img src={niigata}alt="" />
                <div className="image-info-niigata">
                  <div className="niigata-text">
                    <p>NIIGATA</p>
                  </div>
                  <div className="niigata-text-signs">
                    <p>
                      221 <img src={heart} alt="" />
                    </p>
                    <p>
                      50 <img src={comment} alt="" />
                    </p>
                  </div>
                </div>
              </div>
              <text>
                Niigata is a prefecture located on the northwest coast of Honshu
                island in Japan. It's known for its high-quality rice, sake,
                seafood, and ski resorts.
              </text>
              <div>
                <button>SEE MORE</button>
              </div>
            </div>
            <div className="osaka">
              <div className="image-wrapper-osaka">
                <img src={osaka} alt="" />
                <div className="image-info-osaka">
                  <div className="osaka-text">
                    <p>OSAKA</p>
                  </div>
                  <div className="osaka-text-signs">
                    <p>
                      221 <img src={heart} alt="" />
                    </p>
                    <p>
                      50 <img src={comment} alt="" />
                    </p>
                  </div>
                </div>
              </div>
              <text>
                Osaka is a prefecture in western Japan, known for its food
                culture, nightlife, and historical landmarks such as Osaka
                Castle and the Shitennoji Temple.
              </text>
              <div>
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
          <div className="other-cities">
            <div className="saitama">
              <div className="image-wrapper-saitama">
                <img src={saitama} alt="" />
                <div className="image-info-saitama">
                  <div className="saitama-text">
                    <p>SAITAMA</p>
                  </div>
                  <div className="saitama-text-signs">
                    <p>
                      221 <img src={heart} alt="" />
                    </p>
                    <p>
                      50 <img src={comment} alt="" />
                    </p>
                  </div>
                </div>
              </div>
              <text>
                Saitama is a prefecture located in the Kanto region of Japan,
                known for its scenic parks, historical landmarks, and sports
                teams like the Urawa Red Diamonds.
              </text>
              <div>
                <button>SEE MORE</button>
              </div>
            </div>
            <div className="ueno">
              <div className="image-wrapper-ueno">
                <img src={ueno} alt="" />
                <div className="image-info-ueno">
                  <div className="ueno-text">
                    <p>UEONO</p>
                  </div>
                  <div className="ueno-text-signs">
                    <p>
                      221 <img src={heart} alt="" />
                    </p>
                    <p>
                      50 <img src={comment} alt="" />
                    </p>
                  </div>
                </div>
              </div>
              <text>
                Ueno is a district in Tokyo, Japan, known for its large park
                with museums and a zoo, temples and shrines, and the bustling
                Ameyoko shopping street.
              </text>
              <div>
                <button>SEE MORE</button>
              </div>
            </div>
            <div className="shibuya">
              <div className="image-wrapper-shibuya">
                <img src={shibuya} alt="" />
                <div className="image-info-shibuya">
                  <div className="shibuya-text">
                    <p>SHIBUYA</p>
                  </div>
                  <div className="shibuya-text-signs">
                    <p>
                      221 <img src={heart} alt="" />
                    </p>
                    <p>
                    50 <img src={comment} alt="" />
                    </p>
                  </div>
                </div>
              </div>
              <text>
                Shibuya is a bustling commercial and entertainment district in
                Tokyo, Japan, known for its iconic pedestrian crossing, shopping
                centers, nightlife, youth culture.
              </text>
              <div>
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
        </div>
        </>
)
}