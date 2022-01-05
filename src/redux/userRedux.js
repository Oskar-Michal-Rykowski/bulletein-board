/* selectors */
export const getUser = ({ user }) => user;

/* action name creator */
const reducerName = "user";
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_STATUS = createActionName("CHANGE_STATUS");

export const fetchStarted = (payload) => ({ payload, type: CHANGE_STATUS });

/* thunk creators */

/* reducer */
// export const reducer = (statePart = [], action = {}) => {
//   switch (action.type) {
//     case CHANGE_STATUS:
//       return {
//         ...statePart,
//         user: action.payload,
//         },
//     default:
//       return statePart;
//   }
// };
