<template lang="html">
  <div>
    <p>token: {{token}}</p>

    <hr>

    <h4>Google Login</h4>
    <a href="https://buzzni.czarcie.shop/login/" target="_blank">Google</a>
    <hr>



    <input type="text" v-model="token">

    <h4>Validate JWT</h4>

    method: 'GET'<br/>
    path: '/validate/'<br/>

    <button type="button" @click.prevent="validate(token)">validate</button>

    <hr>

    <h4>Request Refresh Token</h4>

    method: 'POST'<br/>
    path: '/token/refresh/'<br/>

   <button type="button" @click.prevent="refresh(token)">refresh</button>

   <hr>
  </div>

</template>

<script>
import {reqApi} from '../api'

export default {
  data() {
    return {
      token: 'test token'
    }
  },
  methods: {
    validate(token) {
      console.log(token)
      reqApi.validate(token)
        .then(data =>
        console.log(data))
    },
    refresh(token) {
      console.log(token)
      reqApi.refresh(token)
        .then(data =>
        console.log(data))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
