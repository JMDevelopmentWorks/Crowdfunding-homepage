import React, { useContext } from "react";
import { images } from "../../Constants";
import "./Modal1.scss";
import BackProject from "../BackProject/BackProject";
import MyContext from "../Context";

const Modal1 = () => {
  const { active, setActive } = useContext(MyContext);

  return (
    <div>
      <div className="modal__container">
        <img
          className="modal-1__logo"
          src={images.logo_mastercraft}
          alt="logo mastercraft"
        />
        <div className="modal-1__content__container">
          <h1 className="modal-1__content__container__title">
            Mastercraft Bamboo Monitor Riser
          </h1>
          <p className="modal-1__content__container__desc">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
        </div>
        <div className="modal-1__btn__container">
          <BackProject />

          {active === false && (
            <div className="modal-1__btn__container__bookmark">
              <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
                  <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
                </g>
              </svg>
              <p className="modal-1__btn__container__text">Bookmark</p>
            </div>
          )}

          {active && (
            <div className="modal-1__btn__container__bookmarked">
              <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
                  <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
                </g>
              </svg>{" "}
              <p className="modal-1__btn__container__text">Bookmarked</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal1;
