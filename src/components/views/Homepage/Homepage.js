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
import { Link } from "react-router-dom";

const Component = ({ className, user, posts }) => {
  const postsByDate = posts.sort(function (a, b) {
    return new Date(b.publicationDate) - new Date(a.publicationDate);
  });

  console.log(postsByDate);
  return (
    <div className={clsx(className, styles.root)}>
      <Container maxWidth="sm">
        {user.logged ? (
          <div className={styles.head}>
            <Button className={styles.button}>
              <Link className={styles.link} to="/post/add">
                Add New Post
              </Link>
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
                <Typography
                  className={styles.title}
                  variant="h5"
                  component="h2"
                >
                  {post.title}
                </Typography>
                <Typography className={styles.date}>
                  Publication date: {post.publicationDate}
                </Typography>
                <Button className={styles.more} size="small">
                  <Link className={styles.link} to={`post/${post.id}`}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string,
    logged: PropTypes.bool,
    position: PropTypes.string,
  }),
  posts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
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

export { HomepageContainer as Homepage, Component as HomepageComponent };
