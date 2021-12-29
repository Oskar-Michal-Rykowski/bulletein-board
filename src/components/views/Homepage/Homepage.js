import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./Homepage.module.scss";

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <h2>Homepage</h2>
    {children}
    <Card className={styles.panel}>
      <CardContent>
        <Typography className={styles.title} variant="h5" component="h2">
          Login
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={styles.google}>Log with Google</Button>
      </CardActions>
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
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
