import { actionVisible, actionHidden } from "./ReduxAction"

const navigationReducer = (state = { isVisible: false }, action) => {
  switch (action.type) {
    case actionVisible.type: {
      return actionVisible.payload
    }
    case actionHidden.type: {
      return actionHidden.payload
    }
    default: {
      return state
    }
  }
}

export default navigationReducer
