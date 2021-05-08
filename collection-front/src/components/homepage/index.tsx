import React, { useState } from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/arrow.svg";

export default function Homepage(): JSX.Element {
  const [back, setBack] = useState<number>(1);

  React.useEffect(() => {
    const interval = window.setInterval(() => toMaximum(), 15000);
    return () => clearInterval(interval);
  }, [back]);

  function toMinimum() {
    if (back > 1) {
      setBack(back - 1);
    } else if (back == 1) {
      setBack(5);
    }
  }
  function toMaximum(): void {
    if (back < 5) {
      setBack(back + 1);
    } else if (back == 5) {
      setBack(1);
    }
  }

  return (
    <div className="homepage">
      <div
        className={
          back == 1 ? "homepage__tabs homepage__tabs_active" : "homepage__tabs"
        }
        id="bg-1"
      />
      <div
        className={
          back == 2 ? "homepage__tabs homepage__tabs_active" : "homepage__tabs"
        }
        id="bg-2"
      />
      <div
        className={
          back == 3 ? "homepage__tabs homepage__tabs_active" : "homepage__tabs"
        }
        id="bg-3"
      />
      <div
        className={
          back == 4 ? "homepage__tabs homepage__tabs_active" : "homepage__tabs"
        }
        id="bg-4"
      />
      <div
        className={
          back == 5 ? "homepage__tabs homepage__tabs_active" : "homepage__tabs"
        }
        id="bg-5"
      />
      <div className="homepage__tabs homepage__tabs_active" id="darkness" />

      <div className="homepage__content">
        <p className="homepage__upper-title">React creation</p>
        <h2 className="homepage__title">Image collection</h2>
        <p className="homepage__text">
          This website was made with the help of react for showing junior (and
          maybe middle)
          <br />
          skills in frontend coding and creating{" "}
          <span className="homepage__text-span">SPA</span> using react
          technologies
        </p>

        <Link to="/collection" className="homepage__link">
          <button className="homepage__CTA">Check images</button>
        </Link>
      </div>

      <div className="homepage__tabs-btns">
        <button className="homepage__btn" onClick={toMinimum}>
          <img src={Arrow} className="homepage__arrow" id="left" />
        </button>
        <div className="homepage__points">
          <div
            className={
              back == 1
                ? "homepage__point homepage__point_active"
                : "homepage__point"
            }
            onClick={() => setBack(1)}
          />
          <div
            className={
              back == 2
                ? "homepage__point homepage__point_active"
                : "homepage__point"
            }
            onClick={() => setBack(2)}
          />
          <div
            className={
              back == 3
                ? "homepage__point homepage__point_active"
                : "homepage__point"
            }
            onClick={() => setBack(3)}
          />
          <div
            className={
              back == 4
                ? "homepage__point homepage__point_active"
                : "homepage__point"
            }
            onClick={() => setBack(4)}
          />
          <div
            className={
              back == 5
                ? "homepage__point homepage__point_active"
                : "homepage__point"
            }
            onClick={() => setBack(5)}
          />
        </div>
        <button className="homepage__btn" onClick={toMaximum}>
          <img src={Arrow} className="homepage__arrow" id="right" />
        </button>
      </div>
    </div>
  );
}
