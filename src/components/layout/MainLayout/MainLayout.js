import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./MainLayout.module.scss";
import { MainMenu } from "../MainMenu/MainMenu";

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <MainMenu></MainMenu>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as MainLayout, Component as MainLayoutComponent };
