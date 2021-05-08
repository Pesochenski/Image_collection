import React, { useRef, useState } from "react";
import "./about.scss";
import { Link } from "react-router-dom";
import Vk from "../../assets/icons/vk.svg";
import Telegram from "../../assets/icons/telegram.svg";
import Google from "../../assets/icons/google.svg";

export default function About(): JSX.Element {
  const [copy, setCopy] = useState<boolean>(false);
  const mailRef = useRef<HTMLInputElement>(null);

  function testing(): void {
    if (mailRef.current !== null) {
      mailRef.current.focus();
      mailRef.current.select();
      document.execCommand("copy");
      setCopy(true);
      setTimeout(() => setCopy(false), 3000);
    }
  }

  return (
    <div className="about-page">
      <div className="about-page__content">
        <p className="about-page__text">
          Hello, this is Pesochenski’s small react pet-project, made for show
          some junior or middle
          <br />
          skills in frontend development.
          <br />
          <br />
          This small website is the part of Pesochenski’s portfolio for
          <br />
          office(but of course not only) work.
          <br />
          <br />
          Done with love to IT sphere. Thanks for whatching!
        </p>

        <div className="about-page__contacts">
          <button className="about-page__site">
            <a href="https://t.me/pesochenski" target="_blank" rel="noreferrer">
              <img src={Telegram} />
            </a>
          </button>
          <button className="about-page__site" onClick={testing}>
            <img src={Google} />
          </button>
          <button className="about-page__site">
            <a
              href="https://vk.com/pesochenski"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Vk} />
            </a>
          </button>
        </div>
      </div>

      <input
        ref={mailRef}
        type="email"
        className="about-page__mail"
        value="pesochenski.corp@gmail.com"
        readOnly
      />

      <div
        className={
          copy
            ? "about-page__mail-copied about-page__mail-copied_active"
            : "about-page__mail-copied"
        }
      >
        <p className="about-page__title-copied">Email copied to clipboard</p>
      </div>

      <Link className="about-page__link" to="/">
        Back to homepage
      </Link>
    </div>
  );
}
