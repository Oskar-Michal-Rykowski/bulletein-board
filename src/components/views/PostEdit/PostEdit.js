import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";
import { getUser } from "../../../redux/userRedux";
import { getAll } from "../../../redux/postsRedux";
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./PostEdit.module.scss";

const Component = ({ className, children, user, posts }) => {
  const url = window.location.href;
  const urlElements = url.split("/");
  const id = urlElements[urlElements.length - 2];
  // console.log("id", id);
  const post = posts.filter((article) => article.id === id)[0];
  // console.log("post", post);
  // console.log("pos.statust", post.status);
  const [selection, setSelection] = React.useState(post.status);

  const handleChange = (event) => {
    setSelection(event.target.value);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Container maxWidth="sm">
        <h2>Edit</h2>
        {children}
        <form className={styles.form} noValidate autoComplete="off">
          <div>
            <TextField
              className={styles.title}
              id="outlined-multiline-flexible"
              label="Title"
              value={post.title}
              multiline
              maxRows={4}
              inputProps={{ minLength: 10, maxLength: 100 }}
            />

            <TextField
              className={styles.article}
              id="outlined-multiline-static"
              label="Article"
              value={post.description}
              multiline
              rows={4}
              inputProps={{ minLength: 25 }}
              default
            />
            <FormControl className={styles.status}>
              <InputLabel htmlFor="age-native-simple">Status</InputLabel>
              <Select
                native
                value={selection}
                onChange={handleChange}
                inputProps={{
                  name: "age",
                  id: "age-native-simple",
                }}
              >
                <option value="closed">Closed</option>
                <option value="open">Open</option>
              </Select>
            </FormControl>
            <Button className={styles.submit}>Add</Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string,
    logged: PropTypes.bool,
    position: PropTypes.string,
  }),
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

export {
  // Component as PostEdit,
  PostContainer as PostEdit,
  Component as PostEditComponent,
};
