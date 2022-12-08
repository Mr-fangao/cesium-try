<script setup>
import * as Cesium from "cesium";
import { ref, onMounted, onUnmounted, computed } from 'vue'
import router from '../../router/index'
defineProps({
  // msg: String
})

onMounted(() => {
  // console.log(window.viewer)
  // window.viewer.imageryLayers.remove(window.viewer.imageryLayers.get(0));
});
onUnmounted(() => {
})
const radio1 = ref('New York')
let key = computed(() => {
  return router.currentRoute.value.fullPath;
})
function getBaseMap(val){
  console.log(val)
}
const count = ref(0)
</script>
<template>
  <div id="mapchange">
    <el-radio-group v-model="radio1" size="large" @change="getBaseMap">
      <el-radio-button label="New York" />
      <el-radio-button label="Washington" />
      <el-radio-button label="Los Angeles" />
      <el-radio-button label="Chicago" />
    </el-radio-group>
  </div>
</template>

<style lang="less" scoped>
#mapchange {
    position: absolute;
    z-index: 99999;
    width: auto;
    height: auto;
    right: 0%;
    bottom: 0%;
    background: #ffffff00;
}
</style>
