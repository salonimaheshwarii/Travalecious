import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Findus from "./findus/Findus";
import "./LocationBased.css";
import FoodItems from "../Pages/Menu/FoodItems/FoodItems"
import { useContext, useEffect } from "react";
import { RouteContext } from "../routeFolder/RouteContext";
import SelectLocationSlider from "../selectLocationSlider/SelectLocationSlider";
import Navbar from "../Navbar/Navbar";

export const LocationBased = () => {

  const {cityName, addCityName } = useContext(RouteContext);

  const { city } = useParams();
  const currentCity = city.split("=")

  useEffect(()=>{
    addCityName(currentCity[1])
  },[])



  return (
    <div>
    <Navbar />
    <div className="locationBasedMainDiv">
      <div className="locationBasedMainDiv1">
        <div className="locationBasedMainDiv11">
          <h1 style={{marginTop:"5vw"}}>Enter your location</h1>
          <div className="locationBasedMainDiv111">
            Set exact location to find the right hotels and stays near you.
          </div>
          <div className="locationBasedMainSearchDiv">
            Enter street name, area etc...
            <div className="locationBasedMainSearchDiv2">Find hotels</div>
          </div>
        </div>
      </div>
      {/* <SelectLocationSlider /> */}
      {/* <div style={{ backgroundColor: "#f7f7f7" }}>
        <div className="locationBasedMainDiv2">
          <span>
            Home / <span>{cityName}</span>
          </span>
        </div>
      </div> */}

      <div className="locationBasedMainAbout">
        <div className="locationBasedMainAboutHeading">Welcome!</div>
        <div className="locationBasedMainAboutDesc">
        to the vibrant world of travel culture! Our website is your gateway to exploring the diverse tapestry of experiences, traditions, and adventures that define travel culture.
        </div>
      </div>

      <div className="locationBasedMainPicks" style={{marginTop:"47px"}}>
        <div className="locationBasedMainPicksHeading">Our Features</div>
        <div className="locationBasedMainPicksCards">
          <div className="locationBasedMainPicksCardRow">
            <Link to="/menu" className="PicksCard">
              <img
                className="PicksCardImg"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Offers_yqoiuk"
                alt="Offers near you"
              />
              <div className="PicksCardHeading">Hotels and Restaurants for you</div>
            </Link>
            <Link to="/" className="PicksCard">
              <img
                className="PicksCardImg"
                src="https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="top rated"
              />
              <div className="PicksCardHeading">Customize your Itinerary</div>
            </Link>
            <Link to="/menu" className="PicksCard">
              <img
                className="PicksCardImg"
                src="https://images.pexels.com/photos/1280560/pexels-photo-1280560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="super fast delivery"
              />
              <div className="PicksCardHeading">Rentals</div>
            </Link>
          </div>
        </div>

        <div className="locationBasedMainLocation">
          <Findus />
        </div>
        <div className="locationBasedMainRestaurants">
          {/* <div className="locationBasedMainRestaurantsHeading">
            Popular restaurants in and around {cityName}
          </div> */}
{/* fooditems imported */}
         <div>
         <FoodItems />
         </div>
          {/* <div className="restaurantsCards">
            <div className="restaurantsCard">
              <Link to="/" className="restaurantsCardLink">
                <div className="restaurantsCardLinkDiv">
                  <div className="restaurantsCardLinkDivImg">
                    <img
                      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/gbbky4jdkrshfpvghbwu"
                      alt="img"
                    />
                  </div>
                  <div style={{ marginTop: "14px" }}>
                    <div style={{ fontSize: "170%", fontWeight: "500", wordBreak: "break-word" }}>
                      Subway
                    </div>
                    <div style={{ color: "#686b78", fontSize: "130%", marginTop: "4px" }}>
                      Salads, Snacks, Desserts, Beverages
                    </div>
                  </div>
                  <div className="cardDetailsDiv"></div>
                </div>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    </div>
  );
};
