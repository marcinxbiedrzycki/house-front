export default function ({ store, redirect }) {
  // If the users is authenticated redirect to home page
  if (store.state.auth) {
    return redirect('/')
  }
}
