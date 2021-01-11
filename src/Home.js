import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__image">
          
         
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
           
          />
        
         
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer For Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/81LBhCVGIPL._AC_UL320_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="LucidSound LS41 Wireless Surround Sound Gaming Headset for PS4, Xbox One, PC, Nintendo Switch, Mac"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61pB+4NQ4mL._AC_UY218_.jpg"
          />
          <Product
            id="23445930"
            title="Certified Refurbished Echo (3rd Gen)- Smart speaker with Alexa- Charcoal"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61Gob-M3snL._AC_UY218_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 512GB) - Space Gray (4th Generation)"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id= "123456789"
            title="Samsung 49-Inch CRG9 Curved Gaming Monitor (LC49RG90SSNXZA) – 120Hz Refresh, Ultrawide Screen QLED Computer Monitor, 5120 x 1440p Resolution, 4ms Response, FreeSync 2 with HDR, HDMI"
            price={1199.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71tZW1aa%2BPL._AC_SX450_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
