import React from "react";
import "./item.scss";
import { useHistory, useLocation } from "react-router";
import { Elem } from "../../../interfaces/fetchInterfaces";

interface customState {
  item: Elem;
}

export default function Item(): JSX.Element {
  const location = useLocation();
  const history = useHistory();

  const { item } = location.state as customState;

  return (
    <div className="item-page">
      <div className="item-page__content">
        <div className="item-page__main">
          <h3 className="item-page__title">{item.title}</h3>
          <img className="item-page__image" src={item.link} alt="Image" />
        </div>
        <div className="item-page__info">
          <p className="item-page__text">
            This item page shows some information about cards, including title
            of the image and ability to go back to the collection. So, you can
            test and estimate it.
          </p>
          <button
            className="item-page__go-back"
            onClick={() => history.goBack()}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
