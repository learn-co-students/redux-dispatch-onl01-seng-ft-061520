let state = { count: 0 }
// reducer
function changeState(state, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 }
    default:
      return state;
  }
}

// action
let action = { type: 'INCREASE_COUNT' }


// dispatch
function dispatch(action) {
  state = changeState(state, action)
  render()
  return state
}

function render() {
  document.body.textContent = state.count
}