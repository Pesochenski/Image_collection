import React, { useEffect } from "react";
import "./collection.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchImg } from "../../store/fetchData";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export default function Collection(): JSX.Element {
  const { images, error, loaded } = useTypedSelector((state) => state.images);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchImg());
  }, []);

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
          ) : error ? (
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
            images.map((item) => (
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
