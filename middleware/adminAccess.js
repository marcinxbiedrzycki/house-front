export default ({ store, route, redirect }) => {
  // Check if users is connected first
  if (!store.getters['users/users'].isAuthenticated) return redirect('/login')

  // Get authorizations for matched routes (with children routes too)
  const authorizationLevels = route.meta.map((meta) => {
    if (meta.auth && typeof meta.auth.authority !== 'undefined')
      return meta.auth.authority
    return 0
  })
  // Get highest authorization level
  const highestAuthority = Math.max.apply(null, authorizationLevels)

  if (store.getters['users/users'].details.general.authority < highestAuthority) {
    return error({
      statusCode: 401,
      message: 'Need admin permission for access'
    })
  }
}
