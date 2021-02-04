export default function ({ store, redirect }) {
  // If the users is not authenticated
  if (!store.state.auth) {
    return redirect('/login')
  }
}
