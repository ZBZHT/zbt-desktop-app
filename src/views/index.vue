<template>
  <div class="hello">

    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="表格" name="first">
        <el-button type="success" @click="loadFile">点击获取文件数据</el-button>

        <el-upload
          class="upload-demo1"
          action="http://192.168.0.251/fileUpDown/upload"
          ref="upload"
          :data="label1"
          :show-file-list="false"
          :onError="uploadError"
          :onSuccess="uploadSuccess">
          <el-button slot="trigger">选取上传文件</el-button>
        </el-upload>

        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="fileName" label="名称" width="260">
          </el-table-column>
          <el-table-column prop="birthTime" label="日期" width="200">
          </el-table-column>
          <el-table-column prop="personName" label="上传人">
          </el-table-column>
          <el-table-column prop="size" label="文件大小">
          </el-table-column>

          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="sendName(scope.row.fileName)" type="text" size="small">下载</el-button>
            </template>
          </el-table-column>
        </el-table>

      </el-tab-pane>
      <el-tab-pane label="角色管理" name="third">
        <el-button type="success" @click="successMsg('消息提示')">成功消息提示</el-button>
        <video src="http://192.168.0.251/resource/新能源汽车/纯电动汽车/高压安全操作与保养维护/基本信息收集与介绍/纯电动汽车基本信息收集与介绍.mp4"
               autoplay controls="controls" controlslist="nodownload" style="width: 500px"></video>
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">
        <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions">
        </video-player>
      </el-tab-pane>
    </el-tabs>

    <FootFooter></FootFooter>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'index',
    data () {
      return {
        activeName: 'first',
        tableData: [],
        label1: {label: '全部教程', fileType: '全部教程'},
        playerOptions: {
          autoplay: false,
          controls: true,
          sources: [{
            type: 'video/mp4',
            src: 'http://192.168.0.251/resource/新能源汽车/纯电动汽车/充电系统检修/充电桩结构原理及性能介绍/充电桩结构原理及性能介绍.mp4'
          }]
        }
      }
    },
    methods: {
      uploadSuccess (res, file) {
        this.successMsg('上传成功')
      },
      // 上传错误
      uploadError (res, file, fileList) {
        console.log('上传失败，请重试！')
      },
      // 成功提示信息
      successMsg (msg) {
        this.$message({
          showClose: true,
          message: msg,
          type: 'success'
        })
      },
      loadFile () {
//        console.log('111')
        axios({
          method: 'get',
          url: 'http://192.168.0.251/fileUpDown/loadFile',
          params: {
            user: 6666
          }
        }).then((res) => {
//          console.log(res.data)
          if (res.data.code === 0) {
            this.tableData = res.data.result
          }
        })
      },
      handleClick (row) {
//        console.log(row)
      },
      sendName (item) {
        console.log(item)
        axios({
          method: 'get',
          url: 'http://192.168.0.251/fileUpDown/download',
          responseType: 'blob',
          params: {
            downloadName: item
          }
        }).then((res) => { // 处理返回的文件流
          let content = res.data
          let blob = new Blob([content])
          if ('download' in document.createElement('a')) { // 非IE下载
            let elink = document.createElement('a')
            elink.download = item
            elink.style.display = 'none'
            elink.href = URL.createObjectURL(blob)
            document.body.appendChild(elink)
            elink.click()
            URL.revokeObjectURL(elink.href) // 释放URL 对象
            document.body.removeChild(elink)
          } else { // IE10+下载
            navigator.msSaveBlob(blob, item)
          }
        })
      }
    },
    mounted () {
      this.loadFile()
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

</style>
