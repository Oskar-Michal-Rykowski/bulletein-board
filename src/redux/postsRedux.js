/* selectors */
export const getAll = ({ posts }) => posts.data;
export const getPostById = ({ posts }, id) => {
  const postArray = posts.data.filter((post) => post.id === id);
  return postArray[0];
};

/* action name creator */
const reducerName = "posts";
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName("FETCH_START");
const FETCH_SUCCESS = createActionName("FETCH_SUCCESS");
const FETCH_ERROR = createActionName("FETCH_ERROR");

const ADD_POST = createActionName("ADD_POST");
const EDIT_POST = createActionName("EDIT_POST");

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });

export const addPost = (payload) => ({ payload, type: ADD_POST });
export const editPost = (payload) => ({
  payload,
  type: EDIT_POST,
});

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...statePart,
        data: [...statePart.data, action.payload],
      };
    }
    case EDIT_POST: {
      // statePart.data.map((post) => {
      //   if (post.id === action.payload.id) {
      //     const postIndex = statePart.data.indexOf(post);
      //     statePart.data.splice(postIndex, 1);
      //   }
      //   return statePart.data;
      // });
      const restPosts = statePart.data.filter(
        (post) => post.id !== action.payload.id
      );
      return {
        ...statePart,
        data: [...restPosts, action.payload],
      };
    }
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};
