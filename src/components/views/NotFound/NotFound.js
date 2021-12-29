import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./NotFound.module.scss";

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    {children}
    <Card className={styles.panel}>
      <CardContent>
        <Typography className={styles.title} variant="h5" component="h2">
          Not Found :-(
        </Typography>
      </CardContent>
    </Card>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as NotFound,
  // Container as NotFound,
  Component as NotFoundComponent,
};
