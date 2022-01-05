import { connect } from "react-redux";
import { getUser } from "../../../redux/userRedux";
import Header from "./Header";

const mapStateToProps = (state) => ({
  user: getUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  // loadSeats: () => dispatch(loadSeatsRequest()),
  // loadSeatsData: (seats) => dispatch(loadSeats(seats)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
