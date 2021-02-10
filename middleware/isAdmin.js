export default function ({ $auth, redirect }) {
  if ($auth.hasScope('ROLE_ADMIN') === false) {
    return redirect('/')
  }
}
