const authReducer = (state = { logged: false, user: undefined }, action) => {
  switch(action.type) {
    case 'SET_USER':
      {
        return Object.assign({}, state, {
          logged: true,
          user: action.payload
        });
      }
    case 'LOGOUT': {
      return Object.assign({}, state, {
        logged: false,
        user: undefined
      });
    }
    default: {
      return state;
    }
  }
}
export default authReducer;