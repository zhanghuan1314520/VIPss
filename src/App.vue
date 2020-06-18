<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>
<style>
html,
#app {
  font-family: "Microsoft YaHei";
  background-color: rgba(241, 241, 241, 1);
  height: 100%;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #797979;
}
li {
  list-style-type: none;
  display: inline-block;
}
* {
  margin: 0;
  padding: 0;
}
</style>
