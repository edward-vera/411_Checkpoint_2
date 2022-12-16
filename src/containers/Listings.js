import Listings from "../components/Listings";
import { connect } from 'react-redux'; 

const mapStateToProps = (state) => {
    return {
        lists: state.lists,
    }
}

export default connect(mapStateToProps)(Listings);