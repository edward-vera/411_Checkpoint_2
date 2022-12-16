import { connect } from 'react-redux';
import About from '../components/About';

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    }
}

export default connect(mapStateToProps)(About);