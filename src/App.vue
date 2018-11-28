<template>
  <div id="app">
    <router-view></router-view>
    <Login></Login>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,pre,code,form,input,button,textarea,p,th,td { margin:0; padding:0;}
  body {
    padding-right: 0 ! important;
  }
  body { background:#fff; color:#555; font-size:14px; font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif;}
  td,th,caption { font-size:14px; }
  h1, h2, h3, h4{ font-weight:normal; font-size:100%; }
  address, caption, cite, code, dfn, em, strong, th, var { font-style:normal; font-weight:normal;}
  a { color:#555; text-decoration:none; }
  a:hover { text-decoration:none; }
  img { border:none; }
  ol,ul,li { list-style:none; }
  input, textarea, select, button { font:14px Verdana,Helvetica,Arial,sans-serif;padding-top: 0px;padding-bottom: 0px; }
  table { border-collapse:collapse; }
  html {overflow-y: scroll;}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
