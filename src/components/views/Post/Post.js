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
import { getPostById } from "../../../redux/postsRedux";
import styles from "./Post.module.scss";
import { Link } from "react-router-dom";

const Component = ({ className, user, post }) => {
  const isEditable =
    (user.logged && user.position === "Admin") ||
    (user.logged && post.author === user.name);

  return (
    <div className={clsx(className, styles.root)}>
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
            {isEditable ? (
              <Button size="small">
                <Link className={styles.edit} to={`${post.id}/edit`}>
                  EDIT
                </Link>
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
  className: PropTypes.string,
  post: PropTypes.object,
  user: PropTypes.shape({
    name: PropTypes.string,
    logged: PropTypes.bool,
    position: PropTypes.string,
  }),
  posts: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => ({
  user: getUser(state),
  post: getPostById(state, ownProps.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  // someAction: arg => dispatch(reduxActionCreator(arg)),
});

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export { PostContainer as Post, Component as PostComponent };

// import React from "react";
// import PropTypes from "prop-types";
// import Container from "@material-ui/core/Container";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import { connect } from "react-redux";
// import { getUser } from "../../../redux/userRedux";
// import { getAll, getPostById } from "../../../redux/postsRedux";
// import styles from "./Post.module.scss";
// import { Link } from "react-router-dom";

// class Component extends React.Component {
//   // const url = window.location.href;
//   // const id = url.substring(url.lastIndexOf("/") + 1);
//   // const post = posts.filter((article) => article.id === id)[0];
//   render() {
//     const { post, user } = this.props;
//     console.log(post);
//     const isEditable =
//       (user.logged && user.position === "Admin") ||
//       (user.logged && post.author === user.name);

//     return (
//       <div>
//         <Container maxWidth="md">
//           <Card className={styles.card}>
//             <CardActionArea>
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   {post.title}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                   {post.description}
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//             <CardActions>
//               <Button size="small" color="primary">
//                 {post.author}
//               </Button>
//               <Button size="small" color="primary">
//                 Publication date: {post.publicationDate}
//               </Button>
//               <Button size="small" color="primary">
//                 Actualization date: {post.actualizationDate}
//               </Button>
//               {isEditable ? (
//                 <Button size="small">
//                   <Link className={styles.edit} to={`${post.id}/edit`}>
//                     EDIT
//                   </Link>
//                 </Button>
//               ) : (
//                 <div></div>
//               )}
//             </CardActions>
//           </Card>
//         </Container>
//       </div>
//     );
//   }
// }
// Component.propTypes = {
//   post: PropTypes.object,
//   className: PropTypes.string,
//   posts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
//   user: PropTypes.shape({
//     name: PropTypes.string,
//     logged: PropTypes.bool,
//     position: PropTypes.string,
//   }),
// };

// const url = window.location.href;
// const urlElements = url.split("/");
// const id = urlElements[urlElements.length - 2];

// const mapStateToProps = (state) => ({
//   user: getUser(state),
//   posts: getAll(state),
//   post: getPostById(state, id),
// });

// const mapDispatchToProps = (dispatch) => ({
//   // editPost: (post) => dispatch(editPost(post)),
// });

// const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

// export { PostContainer as Post, Component as PostComponent };
