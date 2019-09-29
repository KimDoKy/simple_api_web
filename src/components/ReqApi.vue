<template lang="html">
  <div>
    <p>token: {{token}}</p>

    <hr>
    <h7>사용법</h7>
    <p> 아래 Google Login을 진행하여 JWT을 발급받고, 발급받은 JWT를 입력하고 요청 버튼을 클릭하면 하단에 결과가 출력됩니다.</p>
    <hr>

    <h4>Google Login</h4>
    <a href="https://buzzni.czarcie.shop/login/" target="_blank">Google</a>
    <hr>



    <h5>여기에 토큰을 입력하세요.<input type="text" v-model="token"></h5>
    <hr>

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
   <h4>result</h4>
    {{ data }}
  </div>

</template>

<script>
import {reqApi} from '../api'

export default {
  data() {
    return {
      token: 'input token',
      data: 'sample data'
    }
  },
  methods: {
    validate(token) {
      reqApi.validate('/validate/?token='+token)
        .then(result =>
        this.data = result
      )
    },
    refresh(token) {
      reqApi.refresh(token)
        .then(result =>
        this.data = result)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
