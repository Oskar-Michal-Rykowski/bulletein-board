import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import clsx from "clsx";

import { connect } from "react-redux";
import { getUser } from "../../../redux/userRedux";
import { getAll } from "../../../redux/postsRedux";

import styles from "./Post.module.scss";

const Component = ({ className, children, user, posts }) => {
  const url = window.location.href;
  const id = url.substring(url.lastIndexOf("/") + 1);
  const post = posts.filter((article) => article.id === id)[0];

  return (
    <div className={clsx(className, styles.root)}>
      <h2>Post</h2>
      {children}
      <Container maxWidth="md">
        <Card className={styles.card}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {post.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {post.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              {post.author}
            </Button>
            <Button size="small" color="primary">
              Publication date: {post.publicationDate}
            </Button>
            <Button size="small" color="primary">
              Actualization date: {post.actualizationDate}
            </Button>
            {user === "logged" ? (
              <Button href={`${post.id}/edit`} size="small" color="secondary">
                EDIT
              </Button>
            ) : (
              <div></div>
            )}
          </CardActions>
        </Card>
      </Container>
    </div>
  );
};
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

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export { PostContainer as Post, Component as PostComponent };
