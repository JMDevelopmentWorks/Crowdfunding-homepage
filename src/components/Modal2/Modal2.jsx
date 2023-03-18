import React, { useContext } from "react";
import "./Modal2.scss";
import MyContext from "../Context";

const Modal2 = () => {
  const { globalTotal, setGlobalTotal } = useContext(MyContext);
  const percentageBacked = Math.min(
    (globalTotal.amountBacked / globalTotal.totalAmount) * 100,
    100
  );
  const innerBarClassName =
    percentageBacked >= 0 ? "modal-2__bar-inner--cyan" : "";

  return (
    <div className="modal__container">
      <div className="modal-2">
        <div className="modal-2__content">
          <h1>${globalTotal.amountBacked.toLocaleString("en-US")}</h1>
          <p>of ${globalTotal.totalAmount.toLocaleString("en-US")} backed</p>
        </div>
        <div className="modal-2__content">
          <h1>{globalTotal.backers}</h1>
          <p>total backers</p>
        </div>
        <div className="modal-2__content">
          <h1>56</h1>
          <p>days left</p>
        </div>
      </div>
      <div className="modal-2__bar">
        <div
          className={`modal-2__bar-inner ${innerBarClassName}`}
          style={{ width: `${percentageBacked}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Modal2;
