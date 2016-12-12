import { connect } from 'react-redux'
import { setVisibility } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch( setVisibilityFilter(ownProps.filter) )
  }
}

const FilterLink = connect(mapStateToProps)(Link)

export default FilterLink
