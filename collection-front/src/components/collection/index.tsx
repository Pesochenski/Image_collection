import React, { useEffect } from "react";
import "./collection.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchImg } from "../../store/fetchData";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Elem } from "../../interfaces/fetchInterfaces";

export default function Collection(): JSX.Element {
  const { images, error, loaded } = useTypedSelector((state) => state.images);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchImg());
  }, []);

  const [sorted, setSorted] = React.useState<boolean>(false);
  const [sortedImages, setSortedImages] = React.useState<Elem[]>([]);
  function sortImages(): void {
    const sortImages = JSON.parse(JSON.stringify(images));
    const completeSortedImages = sortImages
      .map((item: Elem) => ({
        id: item.id,
        link: item.link,
        title: item.title,
        date: new Date(item.date),
      }))
      .sort((a: any, b: any) => b.date - a.date);
    // console.log(completeSortedImages);
    setSorted(true);
    setSortedImages(completeSortedImages);
  }
  function sortClick(): void {
    if (!sorted) {
      sortImages();
    } else {
      setSorted(false);
    }
  }

  return (
    <div className="collection-page">
      <div className="collection-page__filters">
        <p className="collection-page__filters-title">Filters</p>
        <div className="collcetion-page__buttons">
          <button
            className={
              sorted
                ? "collection-page__button collection-page__button_active"
                : "collection-page__button"
            }
            onClick={sortClick}
          >
            New to old
          </button>
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
          ) : !sorted ? (
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
          ) : (
            sortedImages.map((item) => (
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
