<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <h3>simple api web application</h3>
    <hr>
    <h5> request url: https://buzzni.czarcie.shop</h5>
    <div>
      <ReqApi />
      <Result />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import ReqApi from './components/ReqApi.vue'
import Result from './components/Result.vue'

export default {
  name: 'app',
  components: { ReqApi, Result }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
