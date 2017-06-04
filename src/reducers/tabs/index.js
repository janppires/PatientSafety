import { combineReducers } from 'redux';
import { GET_SELETECT_TAB, SET_SELECTED_TAB } from '../../actions';

function selectedTab (state = 'topics', action) {
  switch (action.type) {
    case GET_SELETECT_TAB:
      return state;
    case SET_SELECTED_TAB:
    return action.payload;
    default:
      return state
  }
}

const tabs = combineReducers({
  selectedTab
})

export default tabs;

export const getSelectedTab = (state) => {
    return state.tabs.selectedTab;
}