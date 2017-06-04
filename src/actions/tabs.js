import { SET_SELECTED_TAB } from './index';


export function setSelectedTab(tabName) {
  return {
    type: SET_SELECTED_TAB,
    payload: tabName
  }
}