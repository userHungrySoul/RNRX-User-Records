export const getUserDetails = (users, currUser) => {
  const details = users.map((user) => {
    if (user.name === currUser) {
      console.log('user:' + JSON.stringify(user))
      return user
    }
  })
  return details.filter((item) => !!item)
}
