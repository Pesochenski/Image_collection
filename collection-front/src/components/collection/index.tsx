import React, { useEffect, useState } from "react";
import "./collection.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { Elem } from "../../interfaces/fetchInterfaces";

export default function Collection(): JSX.Element {
  const [err, setErr] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [img, setImg] = useState<Elem[]>([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:5000/images")
      .then((res) => {
        setImg(res.data);
        setLoaded(true);
      })
      .catch(() => {
        setErr(true);
        setLoaded(true);
      });
  };

  return (
    <div className="collection-page">
      <div className="collection-page__filters">
        <p className="collection-page__filters-title">Filters</p>
        <div className="collcetion-page__buttons">
          <button className="collection-page__button">New to old</button>
        </div>
      </div>
      <div className="collection-page__content">
        <h3 className="collection-page__content-title">Images</h3>
        <div className="collection-page__images">
          {!loaded ? (
            <p className="collection-page__loading">Loading...</p>
          ) : err ? (
            <div className="collection-page__err">
              <p>Sorry, the connection is lost</p>
              <button
                className="collection-page__reload"
                onClick={() => window.location.reload()}
              >
                Reload
              </button>
            </div>
          ) : (
            img.map((item) => (
              <Link
                to={{
                  pathname: `/collection/${item.id}`,
                  state: { item },
                }}
                key={item.id}
              >
                <div
                  className="collection-page__card"
                  style={{
                    background: ("url(" + item.link + ")") as string,
                    backgroundSize: "cover" as string,
                    backgroundRepeat: "no-repeat" as string,
                  }}
                />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
