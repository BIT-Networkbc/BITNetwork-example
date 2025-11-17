<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { BitWeb } from 'bitweb-ts';
var mode = import.meta.env.VITE_APP_MODE
const init = () => {

  if (mode == 'dev') {
    window.chain = "20240618";
    // 本地启动设置钱包key值
    const key=''
    window.bitwebTemp = new BitWeb("http://47.237.120.2:6005", "http://47.237.120.2:6006", "http://47.237.120.2:6005", "http://47.237.120.2:6005", key);
    window.bitweb = new Promise<any>((resolve, reject) => {
      var obj = setInterval(() => {
        if (window.chain != undefined) {
          clearInterval(obj)

          resolve(window.bitwebTemp)
        }
      }, 10)
    });
    console.log(window.bitwebTemp, '节点实例');
    

  } else if (mode == 'test') {    
    window.bitweb = new Promise<any>((resolve, reject) => {
      var obj = setInterval(() => {
        if (window.chain != undefined) {
          clearInterval(obj)

          resolve(window.bitwebTemp)
        }
      }, 10)
    });
    
    window.bitwebTemp = new BitWeb("http://47.237.120.2:6005", "http://47.237.120.2:6006", "http://47.237.120.2:6005", "http://47.237.120.2:6005", "");

  } else if (mode == 'prod') {
    window.bitweb = new Promise<any>((resolve, reject) => {
      var obj = setInterval(() => {
        if (window.chain != undefined) {
          clearInterval(obj)

          resolve(window.bitwebTemp)
        }
      }, 10)
    });

    window.bitwebTemp = new BitWeb("http://fullnodesg1.bitnetworkbc.com", "http://soliditynodetyo1.bitnetworkbc.com", "http://fullnodesg1.bitnetworkbc.com", "http://fullnodesg1.bitnetworkbc.com", "");
    
  }



}

init()
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
