import React from "react";
import PropTypes from "prop-types";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import { connect } from "react-redux";
import { getUser } from "../../../redux/userRedux";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./MainMenu.module.scss";
import { Link } from "react-router-dom";

const Component = ({ className, children, user }) => (
  <div className={styles.header}>
    <Link className={styles.brand} to="/">
      Bulletein App
    </Link>
    <Breadcrumbs className={styles.menu} aria-label="breadcrumb">
      <Link to="/">Home</Link>
      <Link to="/login">Profile</Link>

      {user === "logged" ? (
        <Link to="/">Logout</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </Breadcrumbs>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  user: PropTypes.string,
};

const mapStateToProps = (state) => ({
  user: getUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  // someAction: arg => dispatch(reduxActionCreator(arg)),
});

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as MainMenu, Component as MainMenuComponent };
