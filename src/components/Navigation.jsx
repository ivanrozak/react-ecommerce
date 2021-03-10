import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container">
          <div className="flex2">
            <Link to="/" className={styles.link}>
              Home
            </Link>
            <Link to="/cart" className={styles.link}>
              Cart
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
