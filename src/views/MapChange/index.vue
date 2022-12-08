<script setup>
import * as Cesium from "cesium";
import { ref, onMounted, onUnmounted, computed } from 'vue'
import router from '../../router/index'
defineProps({
  // msg: String
})
const checkedCities = ref(['Shanghai'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
onMounted(() => {
  // console.log(window.viewer)
  // window.viewer.imageryLayers.remove(window.viewer.imageryLayers.get(0));
});
onUnmounted(() => {
})

let key = computed(() => {
  return router.currentRoute.value.fullPath;
})
const count = ref(0)
</script>
<template>
  <div id="mapchange">
    <el-checkbox-group v-model="checkedCities" :min="0" :max="1">
    <el-checkbox-button v-for="city in cities" :key="city" :label="city">{{
      city
    }}</el-checkbox-button>
  </el-checkbox-group>
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
