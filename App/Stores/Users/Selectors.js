export const getUserDetails = (users, currUser) => {
  const details = users.map((user) => {
    if (user.name === currUser) {
      return user
    }
  })
  return details.filter((item) => !!item)
}
