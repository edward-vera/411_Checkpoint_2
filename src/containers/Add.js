import { connect } from 'react-redux'
import AddListing from '../components/Add'
import { addListing } from '../redux/actions'

const mapStateToProps = (state) => {
    return{
        lists: state.lists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addListing: (listing) => dispatch(addListing(listing))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddListing)
