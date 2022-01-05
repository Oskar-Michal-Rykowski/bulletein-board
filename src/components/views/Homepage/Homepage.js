import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import clsx from "clsx";

import { connect } from "react-redux";
import { getUser } from "../../../redux/userRedux";
import { getAll } from "../../../redux/postsRedux";

import styles from "./Homepage.module.scss";

const Component = ({ className, children, user, posts }) => (
  <div className={clsx(className, styles.root)}>
    <Container maxWidth="sm">
      <h2>Homepage</h2>
      {children}
      {user === "logged" ? (
        <div className={styles.head}>
          <Button href="/post/add" className={styles.button}>
            Add New Post
          </Button>
        </div>
      ) : (
        <div></div>
      )}
      <div className={styles.list}>
        {posts.map((post) => (
          <Card key={post.id} className={styles.card}>
            <CardContent className={styles.content}>
              <Typography className={styles.author}>
                Author: {post.author}
              </Typography>
              <Typography className={styles.title} variant="h5" component="h2">
                {post.title}
              </Typography>
              <Typography className={styles.date}>
                Publication date: {post.publicationDate}
              </Typography>
              <Button
                href={`post/${post.id}`}
                className={styles.more}
                size="small"
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      ;
    </Container>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  user: PropTypes.string,
  posts: PropTypes.array,
};

const mapStateToProps = (state) => ({
  user: getUser(state),
  posts: getAll(state),
});

const mapDispatchToProps = (dispatch) => ({
  // someAction: arg => dispatch(reduxActionCreator(arg)),
});

const HomepageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export {
  // Component as Homepage,
  HomepageContainer as Homepage,
  Component as HomepageComponent,
};
