import React, { useState, useContext, useEffect, useRef } from "react";
import { images } from "../../Constants";
import Button from "../Button/Button";
import "./BackProject.scss";
import MyContext from "../Context";

const BackProject = () => {
  const [toggle, setToggle] = useState(false);
  const { activeCard, setActiveCard } = useContext(MyContext);
  const [value, setValue] = useState("");
  const { globalInfo, setGlobalInfo, globalTotal, setGlobalTotal } =
    useContext(MyContext);
  const { active, setActive } = useContext(MyContext);
  const [pledgeSubmit, setpledgeSubmit] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const conditionalDivRef = useRef(null);

  const submitPledge = () => {
    const newInfo = [...globalInfo];
    const selectedCard = newInfo.find((card) => card === activeCard);
    if (selectedCard.backersLeft) {
      selectedCard.backersLeft--;
    }
    setGlobalInfo(newInfo);
    localStorage.setItem("globalInfo", JSON.stringify(newInfo));
    setActiveCard(null);
    setValue("");

    const newTotal = { ...globalTotal };
    newTotal.amountBacked += parseInt(value);
    newTotal.backers++;
    setGlobalTotal(newTotal);
    localStorage.setItem("total", JSON.stringify(newTotal));
  };

  const handleCard = (cardType) => {
    if (activeCard === cardType) {
      setActiveCard(null);
    } else {
      setActiveCard(cardType);
    }
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleMouseDown = (index) => {
    setIsMouseDown(true);
    setActiveIndex(index);
  };

  const handleMouseUp = (index) => {
    setIsMouseDown(false);
    setActiveIndex(index);
  };

  useEffect(() => {
    if (pledgeSubmit && conditionalDivRef.current) {
      conditionalDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [pledgeSubmit]);

  return (
    <div>
      <Button
        children="Back this project"
        state="primary"
        handleFunction={() => setToggle(!toggle)}
      />

      {toggle && (
        <div>
          {pledgeSubmit === false && (
            <div>
              <div
                className="backproject__overlay"
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
              <div className="backproject__container">
                <img
                  className="backproject__close"
                  src={images.icon_closemodal}
                  alt="close modal"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                />
                <div className="backproject__header">
                  <h1 className="backproject__header__title">
                    Back this project
                  </h1>
                  <p className="backproject__header__desc">
                    Want to support us in bringing Mastercraft Bamboo Monitor
                    Riser out in the world?
                  </p>
                </div>
                <div className="backproject__card__container">
                  {globalInfo.map((card, index) => (
                    <div
                      className={
                        activeCard === card
                          ? "backproject__card active"
                          : card.backersLeft === 0
                          ? "backproject__card inactive"
                          : "backproject__card"
                      }
                      key={card.id}
                    >
                      <div className="backproject__card__header">
                        <div className="backproject__card__header__lft">
                          <input
                            className="backproject__card__header__check"
                            type="checkbox"
                            onClick={() => {
                              handleCard(card);
                              setValue("");
                            }}
                            checked={activeCard === card}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setActiveCard(card);
                                setActive(true);
                              } else {
                                setActiveCard(null);
                                setActive(false);
                              }
                            }}
                            disabled={card.backersLeft === 0}
                          />
                          <div className="backproject__card__header__lft__name">
                            <h1
                              className={`backproject__card__header__title ${
                                activeIndex === index && isMouseDown
                                  ? "active__title"
                                  : ""
                              }`}
                              onMouseDown={() => handleMouseDown(index)}
                              onMouseUp={() => handleMouseUp(index)}
                            >
                              {card.name}
                            </h1>
                            {card.minValue && (
                              <p className="backproject__card__header__value">
                                Pledge ${card.minValue} or more
                              </p>
                            )}
                          </div>
                        </div>

                        {card.backersLeft >= 0 && (
                          <div className="backproject__card__header__rgt">
                            <p className="backproject__card__header__rgt__counter">
                              {card.backersLeft}
                            </p>
                            <p className="backproject__card__header__rgt__left">
                              left
                            </p>
                          </div>
                        )}
                      </div>
                      <p className="backproject__card__desc">
                        {card.description}
                      </p>

                      {card.backersLeft >= 0 && (
                        <div className="backproject__card__mobile__rgt">
                          <p className="backproject__card__mobile__rgt__counter">
                            {card.backersLeft}
                          </p>
                          <p className="backproject__card__mobile__rgt__left">
                            left
                          </p>
                        </div>
                      )}
                      <div
                        className={
                          activeCard === card
                            ? "backproject__card__footer activecard"
                            : "backproject__card__footer"
                        }
                      >
                        <p className="backproject__card__footer__text">
                          Enter your pledge
                        </p>
                        <div className="backproject__card__footer__btn__container">
                          <div className="backproject__card__footer__btn__container-btn">
                            <span>$</span>
                            <input
                              className="backproject__card__footer__btn__container__input"
                              type="number"
                              value={value}
                              onChange={handleInputChange}
                            />
                          </div>
                          <Button
                            children="Continue"
                            state="primary"
                            className="backproject__card__footer__button"
                            handleFunction={() => {
                              submitPledge(card);
                              setActive(false);
                              setpledgeSubmit(!pledgeSubmit);
                            }}
                            disabled={value < card.minValue || value === ""}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {pledgeSubmit && (
            <div>
              <div ref={conditionalDivRef} className="backproject__overlay" />
              <div
                className="backproject__container__pledge
              backproject__container__pledge__mobile"
              >
                <div className="backproject__content">
                  <img
                    className="backproject__content__img"
                    src={images.icon_check}
                    alt="icon check"
                  />
                  <div className="backproject__content__text">
                    <h1 className="backproject__content__title">
                      Thanks for you support!
                    </h1>
                    <p className="backproject__content__desc">
                      Your pledge brings us one step closer to sharing
                      Mastercraft Bamboo Monitor Riser worldwide. You will get
                      an email once our campaign is completed.
                    </p>
                  </div>
                  <Button
                    className="backproject__content__btn"
                    state="primary"
                    children="Got it!"
                    handleFunction={() => {
                      setpledgeSubmit(false);
                      setToggle(false);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BackProject;
