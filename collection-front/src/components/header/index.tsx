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
import { headerItem } from "../../interfaces/headerInterfaces";

export default function Header(): JSX.Element {
  const [burger, setBurger] = useState<boolean>(false);

  function changeBurgerState(): void {
    if (burger == false) {
      setBurger(true);
    } else {
      setBurger(false);
    }
  }

  const headerItems: Array<headerItem> = [
    { name: "Home", path: "/", burger: { from: 1, to: 2 } },
    { name: "Collection", path: "/collection", burger: { from: 2, to: 3 } },
    { name: "About", path: "/about", burger: { from: 3, to: 1 } },
  ];

  return (
    <Router>
      <nav className={burger ? "navbar navbar_active" : "navbar"}>
        {headerItems.map((item) => (
          <NavLink
            key={item.burger.from}
            exact
            to={item.path}
            className="navbar__link"
            activeClassName="navbar__link_active"
            onClick={() => setBurger(false)}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <button className="burger" onClick={changeBurgerState}>
        {headerItems.map((item) => (
          <div
            key={item.burger.from}
            className={
              !burger
                ? `burger__item burger__item-${item.burger.from}`
                : `burger__item burger__item-${item.burger.to}`
            }
          />
        ))}
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
