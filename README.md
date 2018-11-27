# vue-nw-seed

> A seed project with Vue.js and Nw.js

[english](/README.md) | [中文](/docs/README_ZH.md)

## Build Setup

``` bash
# install dependencies
npm install (安装到nwjs包卡住或出错,可直接跳过)

# 解决nw包卡住或出错,NWjs视频无法播放问题(Windows), (sdk版本无法在国内通过npm直接安装)
# 1.在官方社区https://dl.nwjs.io/下载package.json中的sdk版本,解压到node_modules/nw/nwjs/里面所有文件(nwjs目录不存在则自行创建)
# 2.在社区https://github.com/iteufel/nwjs-ffmpeg-prebuilt/releases里下载package.json里对应版本的ffmpeg.dll
# 3.替换node_modules/nw/nwjs/ffmpeg.dll

# serve with hot reload at 127.0.0.1:8080
npm run dev

# build用来打包win,mac,Linux安装包
npm run build

## Demo
### `npm run dev`
![dev](/docs/assets/dev.gif)

### `npm run build`
![build](/docs/assets/build.gif)

### `for upgrade`
![upgrade](/docs/assets/upgrade.gif)

### Build a beautiful setup for windows
This feature in [vue-nw-seed/origin/win-beautiful-setup](https://github.com/anchengjian/vue-nw-seed/tree/win-beautiful-setup) branch.
![win-setup](/docs/assets/win-setup.gif)

## FAQ
### Why nw@0.14.7 ？
Not all of NW.js support `XP`, because from the beginning of `Chromium50` does not support the XP, so if your client want to support XP, the best of version is `0.14.7`. See NW.js's blog: [NW.js v0.14.7 (LTS) Released](https://nwjs.io/blog/v0.14.7/)
