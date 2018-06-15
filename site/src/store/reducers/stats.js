import {fromJS} from 'immutable'
import * as actionTypes from '../actionTypes'

const initialState = fromJS({})

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:

      break;

    default:
      return state
  }
  return state
}

export default statsReducer
