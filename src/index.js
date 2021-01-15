import React from "react";
import ReactDOM from "react-dom";

import Card from "./components/card.js";
import Collapse from "./components/collapse.js";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="card-group w-100">
          <div className="col">
            <Collapse href="collapseExample1">
              <Card
                cardTitle="KartBaşlığı 1"
                cardText="Loremfdsafsaf"
                updatedTime="Last updated 1 min ago"
                image="https://picsum.photos/id/1/200/300"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample2">
              <Card
                cardTitle="KartBaşlığı 2"
                cardText="Loremfdsafsaf"
                updatedTime="Last updated 1 min ago"
                image="https://picsum.photos/id/10/200/300"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample3">
              <Card
                cardTitle="KartBaşlığı 3"
                cardText="Loremfdsafsaf"
                updatedTime="Last updated 1 min ago"
                image="https://picsum.photos/id/100/200/300"
              />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

//

//
