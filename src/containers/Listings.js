import Listings from "../components/Listings";
import { removeListings } from '../redux/actions'
import { connect } from 'react-redux'; 

const mapStateToProps = (state) => {
    return {
        user: state.user,
        lists: state.lists,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      removeListings: (index) => dispatch(removeListings(index)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Listings);