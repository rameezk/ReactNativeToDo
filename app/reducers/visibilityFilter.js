import { SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/constants'

function visibilityFilter(state = VisibilityFilters.SHOW_ACTIVE, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter
  default:
    return state
  }
}

export default visibilityFilter
