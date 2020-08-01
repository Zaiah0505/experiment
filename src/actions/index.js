export const setUser = (user) => {
  return {
    type: 'SET_USER',
    payload: user
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

export const openDrawer = () => {
  return {
    type: 'OPEN_DRAWER'
  }
}

export const closeDrawer = () => {
  return {
    type: 'CLOSE_DRAWER'
  }
}