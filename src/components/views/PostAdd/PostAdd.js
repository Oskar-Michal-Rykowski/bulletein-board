import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addPost } from "../../../redux/postsRedux";
import { getUser } from "../../../redux/userRedux";

import styles from "./PostAdd.module.scss";

class Component extends React.Component {
  state = {
    newPost: {
      id: "",
      title: "",
      author: this.props.user.name,
      description: "",
      status: "",
      publicationDate: "",
      actualizationDate: "",
    },
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

  getRandomId = () => {
    let min = 1;
    let max = 999999999;
    const minimum = Math.ceil(min);
    const maximum = Math.floor(max);
    const newId =
      Math.floor(Math.random() * (maximum - minimum)) + minimum + "";
    return newId;
  };

  updateField = ({ target }) => {
    const { newPost } = this.state;
    const { value, name } = target;

    this.setState({
      newPost: {
        ...newPost,
        [name]: value,
        publicationDate: this.currentDate(),
        actualizationDate: this.currentDate(),
        id: this.getRandomId(),
      },
    });
  };

  setNewPost = (e) => {
    const { addPost } = this.props;
    const { newPost } = this.state;
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

    addPost(newPost);
    alert(`Success!`);
  };

  render() {
    return (
      <div className={styles.root}>
        <Container maxWidth="sm">
          <h2>Add new post</h2>

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
                  value={this.state.status}
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
  className: PropTypes.string,
  posts: PropTypes.array,
  addPost: PropTypes.func,
  user: PropTypes.shape({
    name: PropTypes.string,
    logged: PropTypes.bool,
    position: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  user: getUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (post) => dispatch(addPost(post)),
});

const PostAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export { PostAddContainer as PostAdd, Component as PostAddComponent };
