import React, { useState } from "react";
import "./header.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Homepage from "../homepage";
import Collection from "../collection";
import About from "../about";
import Error404 from "../404";
import Item from "../collection/item";

export default function Header(): JSX.Element {
  const [burger, setBurger] = useState<boolean>(false);

  function changeBurgerState(): void {
    if (burger == false) {
      setBurger(true);
    } else {
      setBurger(false);
    }
  }

  return (
    <Router>
      <nav className={burger ? "navbar navbar_active" : "navbar"}>
        <NavLink
          exact
          to="/"
          className="navbar__link"
          activeClassName="navbar__link_active"
          onClick={() => setBurger(false)}
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/collection"
          className="navbar__link"
          activeClassName="navbar__link_active"
          onClick={() => setBurger(false)}
        >
          Collection
        </NavLink>
        <NavLink
          to="/about"
          className="navbar__link"
          activeClassName="navbar__link_active"
          onClick={() => setBurger(false)}
        >
          About
        </NavLink>
      </nav>

      <button className="burger" onClick={changeBurgerState}>
        <div
          className={
            !burger
              ? "burger__item burger__item-1"
              : "burger__item burger__item-2"
          }
        />
        <div
          className={
            !burger
              ? "burger__item burger__item-2"
              : "burger__item burger__item-3"
          }
        />
        <div
          className={
            !burger
              ? "burger__item burger__item-3"
              : "burger__item burger__item-1"
          }
        />
      </button>

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/collection" component={Collection} />
        <Route path="/about" component={About} />
        <Route path="/collection/:id" component={Item} />
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
}
