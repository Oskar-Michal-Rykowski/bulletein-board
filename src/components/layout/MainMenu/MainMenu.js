import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

import clsx from "clsx";

import { connect } from "react-redux";
import { getUser } from "../../../redux/userRedux";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./MainMenu.module.scss";

const Component = ({ className, children, user }) => (
  <div className={styles.header}>
    {/* <Navbar > */}
    <NavbarBrand className={styles.brand} href="/">
      Bulletein App
    </NavbarBrand>
    <Breadcrumbs className={styles.menu} aria-label="breadcrumb">
      <Link color="inherit" href="/">
        Home
      </Link>
      <Link color="inherit" href="/login">
        Profile
      </Link>
      {user === "logged" ? (
        <Link color="inherit">Logout</Link>
      ) : (
        <Link href="/login" color="inherit">
          Login
        </Link>
      )}
    </Breadcrumbs>
    {/* </Navbar> */}
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

export { Container as MainMenu };
