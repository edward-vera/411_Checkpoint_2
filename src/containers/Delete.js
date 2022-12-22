import { connect } from 'react-redux';
import DeleteMenu from '../components/DeleteMenu';

const mapStateToProps = (state) => {
  return {
    lists: state.lists
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeListings: (index) => dispatch(removeListings(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMenu);