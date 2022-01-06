import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { editPost, getAll, getOnePost } from "../../../redux/postsRedux";
import { getUser } from "../../../redux/userRedux";

import styles from "./PostEdit.module.scss";

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.setState(this.getPostfromLink());
  }
  state = {
    editedPost: {
      id: "",
      title: "",
      author: "",
      publicationDate: " ",
      actualizationDate: "",
      status: "",
      description: "",
    },
  };

  getPostfromLink = () => {
    const url = window.location.href;
    const urlElements = url.split("/");
    const id = urlElements[urlElements.length - 2];
    const postContent = this.props.posts.filter(
      (article) => article.id === id
    )[0];
    console.log("post", postContent);
    return postContent;
    // this.setState({
    //   id: postContent.id,
    //   title: postContent.title,
    //   author: postContent.author,
    //   publicationDate: postContent.publicationDate,
    //   actualizationDate: postContent.actualizationDate,
    //   status: postContent.status,
    //   description: postContent.description,
    // });
  };

  currentDate = () => {
    const options = {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const today = new Date();
    const time = today.toLocaleDateString("en-US", options);
    console.log("time", time);
    return time;
  };

  updateField = ({ target }) => {
    const { editedPost } = this.state;
    const { value, name } = target;

    this.setState({
      editedPost: {
        ...editedPost,
        [name]: value,
        actualizationDate: this.currentDate(),
      },
    });
  };

  setNewPost = (e) => {
    const { editPost } = this.props;
    const { editedPost } = this.state;
    e.preventDefault();

    //DLACZEGO TO NIE CHCE DZIAŁAĆ?
    // this.setState({
    //   newPost: {
    //     ...newPost,
    //     publicationDate: this.currentDate(),
    // actualizationDate: this.currentDate(),
    // id: this.getRandomId(),
    //   },
    // });
    // console.log("onePost", this.props.onePost[0]);
    editPost(editedPost);
    alert(`Success!`);
  };

  render() {
    const { editedPost } = this.state;
    // console.log("post", this.props.onePost);
    // console.log("post", this.postContent);
    return (
      <div className={styles.root}>
        <Container maxWidth="sm">
          <h2>Edit the post</h2>

          <form
            className={styles.form}
            onSubmit={this.setNewPost}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                className={styles.title}
                id="title-textfield"
                name="title"
                label="Title"
                value={editedPost.title}
                multiline
                maxRows={4}
                inputProps={{ minLength: 10, maxLength: 100 }}
                onChange={this.updateField}
              />
              <TextField
                className={styles.article}
                id="article-textfield"
                name="description"
                label="Article"
                value={editedPost.description}
                multiline
                rows={4}
                inputProps={{ minLength: 25 }}
                default
                onChange={this.updateField}
              />
              <FormControl className={styles.status}>
                <InputLabel htmlFor="age-native-simple">Status</InputLabel>
                <Select
                  native
                  name="status"
                  value={editedPost.status}
                  onChange={this.updateField}
                >
                  <option aria-label="None" value="" />
                  <option>Open</option>
                  <option>Closed</option>
                </Select>
              </FormControl>
              <Button type="submit" className={styles.submit}>
                Add
              </Button>
            </div>
          </form>
        </Container>
      </div>
    );
  }
}

Component.propTypes = {
  onePost: PropTypes.object,
  className: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  editPost: PropTypes.func,
  user: PropTypes.shape({
    name: PropTypes.string,
    logged: PropTypes.bool,
    position: PropTypes.string,
  }),
};

// const url = window.location.href;
// const urlElements = url.split("/");
// const id = urlElements[urlElements.length - 2];

const mapStateToProps = (state) => ({
  user: getUser(state),
  posts: getAll(state),
});

const mapDispatchToProps = (dispatch) => ({
  // onePost: (state, id) => dispatch(getOnePost(state, id)),
  editPost: (post) => dispatch(editPost(post)),
});

const PostEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export { PostEditContainer as PostEdit, Component as PostEditComponent };
