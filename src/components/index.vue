<template>
  <div class="hello">
    <el-button type="success">信息按钮</el-button>
    <video src="http://192.168.0.251:8001/resource/新能源汽车/纯电动汽车/高压安全操作与保养维护/高压安全操作/高压安全操作-11.10.mp4"
           autoplay controls="controls" controlslist="nodownload"
    ></video>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
      }
    },
    methods: {
      onPlayerPlay () {
        alert('play')
      },
      onPlayerPause () {
        alert('pause')
      }
    },
    computed: {
      player () {
        return this.$refs.videoPlayer.player
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
