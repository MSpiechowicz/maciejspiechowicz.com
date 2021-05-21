import { VISIBLE, HIDDEN } from "./ReduxActionType"

const actionVisible = {
  type: VISIBLE,
  payload: {
    isVisible: true,
  }
}

const actionHidden = {
  type: HIDDEN,
  payload: {
    isVisible: false,
  },
}

export { actionVisible, actionHidden }
