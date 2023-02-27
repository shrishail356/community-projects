import { useState } from "react";
import styles from "./resources/css/Home.module.css";

import spottedPlanetTop from "./resources/images/spotted-planet-top.png";
import bluePlanet from "./resources/images/blue_planet.png";
import redPlanet from "./resources/images/red-planet.png";
import spottedPlanetBottom from "./resources/images/spotted-planet-bottom.png";

const Home = () => {
  const [wallet,setWallet] = useState('');
  const [network,setNetwork] = useState('mainnet-beta')  
  return (
    <div>
      <div className={styles.background}>
        <div className={styles.middle_layer}>
          <div className={styles.dotted_top}>
            <img src={spottedPlanetTop} alt="background planet" />
          </div>
          <div className={styles.blue_planet}>
            <img src={bluePlanet} alt="background planet blue" />
          </div>
          <div className={styles.red_planet}>
            <img src={redPlanet} alt="planetred" />
          </div>
          <div className={styles.dotted_bottom}>
            <img src={spottedPlanetBottom} alt="planet bottom" />
          </div>

          <div className={styles.top_layer}>
            <div className={styles.content_area}>
              <div className="container-xl">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className={styles.text_and_form}>
                      <h1 className={styles.main_heading}>
                        Explore Your Space In Shyft Metaverse
                      </h1>
                      <p className={styles.description_text}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi harum fugiat accusamus. Accusantium,
                        voluptatem eius esse doloremque incidunt itaque atque
                        rerum, ut at illo, nisi facilis dignissimos quas fuga
                        hic.
                      </p>
                      <div className={styles.form_container}>
                        <label>Enter Wallet Address</label>
                        <div className={styles.form_field_outer}>
                          <div className={styles.form_field_inner}>
                            <div className="d-flex justify-content-between">
                              <input type="text" placeholder="Eg. 72wfh121jnh2b12jeb1jhebk1y2ejkqhbwyeq" value={wallet} onChange={(e) => setWallet(e.target.value)}/>
                              <select value={network} onChange={(e) => setNetwork(e.target.value)}>
                                <option value="mainnet-beta">Mainnet</option>
                                <option value="devnet">Devnet</option>
                                <option value="testnet">Testnet</option>
                              </select>

                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-5 mt-1">
                        <a href={`/address/${wallet}?cluster=${network}`} className={styles.btn_solid_grad}>
                          Continue
                        </a>
                      </div>
                    </div>
                    <div className={styles.rocket_container}></div>
                  </div>
                  <div className="col-12 col-lg-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;