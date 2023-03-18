import React, { useState } from "react";
import "./CrowdFunding.scss";

import { Modal1, Modal2, Modal3 } from "../index";
import MyContext from "../Context";
import { backers } from "../../Data/Data";
import { total } from "../../Data/Data";

const CrowdFunding = () => {
  const [globalInfo, setGlobalInfo] = useState(
    JSON.parse(localStorage.getItem("globalInfo")) || backers
  );

  const [globalTotal, setGlobalTotal] = useState(
    JSON.parse(localStorage.getItem("total")) || total
  );
  const [activeCard, setActiveCard] = useState(null);

  const [active, setActive] = useState(false);

  return (
    <div className="modal">
      <div className="container">
        <div className="modal__containers">
          <MyContext.Provider
            value={{
              globalInfo,
              setGlobalInfo,
              globalTotal,
              setGlobalTotal,
              activeCard,
              setActiveCard,
              active,
              setActive,
            }}
          >
            <Modal1></Modal1>

            <Modal2></Modal2>

            <Modal3></Modal3>
          </MyContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default CrowdFunding;
