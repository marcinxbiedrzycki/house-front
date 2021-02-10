<template>
  <p>
    Logout
  </p>
</template>

<script>
export default {
  beforeCreate () {
    this.$auth.logout()
    this.$router.push('/')
  }
}
</script>
