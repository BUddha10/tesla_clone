import React from "react";
import "./App.css";
import Header from "./Header";
import Item from "./Item";

import Acessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="item_container">
        <Item
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
          first
        />

        <Item
          title="Model s"
          desc="Starting at $69,420"
          descLink=""
          backgroundImg={ModelS}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons="true"
        />

        <Item
          title="Model 3"
          desc="Order Online for Touchless Deliver"
          descLink=""
          backgroundImg={Model3}
          leftBtnTxt="CUSTOME ORDER"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons="true"
        />

        <Item
          title="Model X"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImg={ModelX}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons="true"
        />

        <Item
          title="Model Y"
          desc="Order Online for Touchless Deliver"
          descLink=""
          backgroundImg={ModelY}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons="true"
        />

        <Item
          title="Solar for New Roofs"
          desc="Solar Roof Costs less Than a New Roof Plus Solar Panels"
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />

        <Item
          title="Acessories"
          desc=""
          descLink=""
          backgroundImg={Acessories}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink=""
        />
      </div>
    </div>
  );
}

export default App;
