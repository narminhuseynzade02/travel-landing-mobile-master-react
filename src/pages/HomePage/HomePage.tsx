import './HomePage.scss';

export const HomePage = ()  => {
    return (
        <>
          <div className="hero-section">
        <div className="discover-box">
          <div className="first-text">Discover Amazing places in Japan</div>
          <div className="more-info">
            Jump off balcony, onto stranger's head. Chase ball of string hide
            when guests come over. Being gorgeous with belly side up i could pee
            on this if i had the energy but under the bed, for attack the child,
            open the door.
          </div>
          <div className="input-button">
            <div>
              <img src="./assets/Oval.svg" alt="" /> What would you like to do?
            </div>
            <div>
              <img src="./assets/Oval.svg" alt="" /> Where would you like to go?
            </div>
            <button>SEARCH</button>
          </div>
        </div>
      </div>
     <div className="second-part">
            <div className="card-section">
                <div className="container">
                    <div className="card-header">Benefits of Odigo</div>
                    <div className="card-boxes">
                        <div className="card-one">
                            <img src="./assets/Icon (3).svg" alt="" />
                            <div>Welcome to Odigo!</div>
                            <text>
                                Jump off balcony, onto stranger's head. Chase ball of string
                                hide when guests come over.
                            </text>
                            <p>LEARN MORE <img src="./assets/Shape.svg" alt="" /></p>
                        </div>
                        <div className="card-two">
                            <img src="./assets/Icon (4).svg" alt="" />
                            <div>Your Personal Japan Guide</div>
                            <text>
                                Jump off balcony, onto stranger's head. Chase ball of string
                                hide when guests come over.
                            </text>
                            <p>LEARN MORE <img src="./assets/Shape.svg" alt="" /></p>
                        </div>
                        <div className="card-three">
                            <img src="./assets/Icon (5).svg" alt="" />
                            <div>Promoting Local Businesses</div>
                            <text>
                                Jump off balcony, onto stranger's head. Chase ball of string
                                hide when guests come over.
                            </text>
                            <p>LEARN MORE <img src="./assets/Shape.svg" alt="" /></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="get-inspired-section">
                <div>
                    <div className="get-inspired-header">Get inspired for your next trip</div>
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
                        <h3>VIEW PREFECTURE <img src="./assets/Shape.svg" alt="" /></h3>
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
                        <h6>VIEW NEIGHBORHOOD <img src="./assets/Shape.svg" alt="" /></h6>
                    </div>
                </div>
            </div>
            <div className="header">Today top places to visit</div>
            <div className="cities-japan">
                <div className="main-cities">
                    <div className="nagoya">
                        <div className="image-wrapper">
                            <img src="./assets/NAGOYA.png" alt="" />
                            <div className="image-info">
                                <div className="nagoya-text">
                                    <p>NAGOYA</p>
                                </div>
                                <div className="nagoya-text-signs">
                                    <p>221 <img src="./assets/heart.svg" alt="" /></p>
                                    <p>50 <img src="./assets/comment.svg" alt="" /></p>
                                </div>
                            </div>
                        </div>
                        <text
                        >Nagoya is a city in Japan, located on the Pacific coast of the
                            island of Honshu. It's known for its castle, automotive industry,
                            unique local cuisine.
                        </text>
                        <div>
                            <button>
                                <link
                                    rel="stylesheet"
                                    href="https://www.nagoyajo.city.nagoya.jp/en/information/" />
                                SEE MORE
                            </button>
                        </div>
                    </div>
                    <div className="niigata">
                        <div className="image-wrapper-niigata">
                            <img src="./assets/NIIGATA.png" alt="" />
                            <div className="image-info-niigata">
                                <div className="niigata-text">
                                    <p>NIIGATA</p>
                                </div>
                                <div className="niigata-text-signs">
                                    <p>221 <img src="./assets/heart.svg" alt="" /></p>
                                    <p>50 <img src="./assets/comment.svg" alt="" /></p>
                                </div>
                            </div>
                        </div>
                        <text
                        >Niigata is a prefecture located on the northwest coast of Honshu
                            island in Japan. It's known for its high-quality rice, sake,
                            seafood, and ski resorts.
                        </text>
                        <div>
                            <button>SEE MORE</button>
                        </div>
                    </div>
                    <div className="osaka">
                        <div className="image-wrapper-osaka">
                            <img src="./assets/OSAKA.png" alt="" />
                            <div className="image-info-osaka">
                                <div className="osaka-text">
                                    <p>OSAKA</p>
                                </div>
                                <div className="osaka-text-signs">
                                    <p>221 <img src="./assets/heart.svg" alt="" /></p>
                                    <p>50 <img src="./assets/comment.svg" alt="" /></p>
                                </div>
                            </div>
                        </div>
                        <text
                        >Osaka is a prefecture in western Japan, known for its food
                            culture, nightlife, and historical landmarks such as Osaka Castle
                            and the Shitennoji Temple.
                        </text>
                        <div>
                            <button>SEE MORE</button>
                        </div>
                    </div>
                </div>
                <div className="other-cities">
                    <div className="saitama">
                        <div className="image-wrapper-saitama">
                            <img src="./assets/SAITAMA.svg" alt="" />
                            <div className="image-info-saitama">
                                <div className="saitama-text">
                                    <p>SAITAMA</p>
                                </div>
                                <div className="saitama-text-signs">
                                    <p>221 <img src="./assets/heart.svg" alt="" /></p>
                                    <p>50 <img src="./assets/comment.svg" alt="" /></p>
                                </div>
                            </div>
                        </div>
                        <text
                        >Saitama is a prefecture located in the Kanto region of Japan,
                            known for its scenic parks, historical landmarks, and sports teams
                            like the Urawa Red Diamonds.
                        </text>
                        <div>
                            <button>SEE MORE</button>
                        </div>
                    </div>
                    <div className="ueno">
                        <div className="image-wrapper-ueno">
                            <img src="./assets/UENO.svg" alt="" />
                            <div className="image-info-ueno">
                                <div className="ueno-text">
                                    <p>UEONO</p>
                                </div>
                                <div className="ueno-text-signs">
                                    <p>221 <img src="./assets/heart.svg" alt="" /></p>
                                    <p>50 <img src="./assets/comment.svg" alt="" /></p>
                                </div>
                            </div>
                        </div>
                        <text
                        >Ueno is a district in Tokyo, Japan, known for its large park with
                            museums and a zoo, temples and shrines, and the bustling Ameyoko
                            shopping street.
                        </text>
                        <div>
                            <button>SEE MORE</button>
                        </div>
                    </div>
                    <div className="shibuya">
                        <div className="image-wrapper-shibuya">
                            <img src="./assets/SHIBUYA.svg" alt="" />
                            <div className="image-info-shibuya">
                                <div className="shibuya-text">
                                    <p>SHIBUYA</p>
                                </div>
                                <div className="shibuya-text-signs">
                                    <p>221 <img src="./assets/heart.svg" alt="" /></p>
                                    <p>50 <img src="./assets/comment.svg" alt="" /></p>
                                </div>
                            </div>
                        </div>
                        <text
                        >Shibuya is a bustling commercial and entertainment district in
                            Tokyo, Japan, known for its iconic pedestrian crossing, shopping
                            centers, nightlife, youth culture.
                        </text>
                        <div>
                            <button>SEE MORE</button>
                        </div>
                    </div>
                </div>
            </div>
         </div><section className="video-section">
                <img src="./assets/Video.png" alt="" />
            </section>
            </>
    )
};