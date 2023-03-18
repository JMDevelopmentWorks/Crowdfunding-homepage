import React, { useContext } from "react";
import Button from "../Button/Button";
import "./Modal3.scss";

import MyContext from "../Context";

const Modal3 = () => {
  const { globalInfo, setGlobalInfo } = useContext(MyContext);
  const { active, setActive } = useContext(MyContext);

  const { activeCard, setActiveCard } = useContext(MyContext);

  return (
    <div className="modal__container">
      <div className="modal-3__header">
        <h1 className="modal-3__header-title">About this project</h1>
        <p className="modal-3__header-desc">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the tast at hand
        </p>
        <p className="modal-3__header-desc">
          Featuring artisan craftmanship, the simplicity of design creates extra
          desk space below your computer to allow notepads, pens, and USB sticks
          to be stored under the stand.
        </p>
      </div>

      {globalInfo.map((card) => (
        <div key={card.id}>
          {card.id > 1 && (
            <div
              className={
                card.backersLeft === 0
                  ? "modal-3__card inactive"
                  : "modal-3__card"
              }
            >
              <div className="modal-3__card__header">
                <h1>{card.name}</h1>
                <p>Pledge ${card.minValue} or more</p>
              </div>
              <p className="modal-3__card__desc">{card.description}</p>
              <div className="modal-3__card__footer">
                <div className="modal-3__card__footer-text">
                  <p className="modal-3__card__footer-text-counter">
                    {card.backersLeft}
                  </p>
                  <p className="modal-3__card__footer-text-left">left</p>
                </div>
                {card.backersLeft > 0 && (
                  <Button
                    children="Select Reward"
                    state="primary"
                    className="btn-card"
                    handleFunction={() => {
                      setActive(!active);
                      if (activeCard === card) {
                        setActiveCard(null);
                        setActive(false);
                      } else {
                        setActiveCard(card);
                        setActive(true);
                      }
                    }}
                  />
                )}
                {card.backersLeft === 0 && (
                  <Button
                    children="Out of stock"
                    state="primary"
                    className=" btn-card btn-disabled"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Modal3;
