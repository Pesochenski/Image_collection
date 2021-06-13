import React from "react";
import "./error.scss";

export default function Error404(): JSX.Element {
  return (
    <div className="err-page">
      <p className="err-page__err">Error</p>
      <p className="err-page__404">404</p>
      <p className="err-page__title">Not found</p>
      <p className="err-page__text">Try to check your internet connection</p>
    </div>
  );
}
