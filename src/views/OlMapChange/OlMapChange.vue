<!--
 * @Author: liqifeng
 * @Date: 2023-01-06 14:08:15
 * @LastEditors: liqifeng Mr.undefine@protonmail.com
 * @LastEditTime: 2023-01-06 17:29:35
 * @Description: openlayers map change  
-->
<template>
  <div id="olmapchange">
    <div id="map" class="map_ol" ref="olMap"></div>
    <mapselect :olmap="map" :key="keyNum"></mapselect>
  </div>

</template>
<script setup>
import mapselect from "../../components/MapChangeOL/MapSelect.vue"
import { ref, onMounted, defineProps } from 'vue'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
// import OSM from 'ol/source/OSM'
import 'ol/ol.css'
import XYZ from "ol/source/XYZ"
defineProps({
  // msg: String
})

const layer = new Tile({
  source: new XYZ({
    url:
      "http://t4.tianditu.com/DataServer?T=cva_w&tk=63eb152cd7f93f6aa703c3c5f25032a4&x={x}&y={y}&l={z}",
  }),
});
const layer2 = new Tile({
  source: new XYZ({
    url:
      "http://t3.tianditu.com/DataServer?T=img_w&tk=63eb152cd7f93f6aa703c3c5f25032a4&x={x}&y={y}&l={z}",
  }),
});
const satelliteE = new XYZ({
  crossOrigin: "anonymous",
  url:"http://t3.tianditu.com/DataServer?T=img_w&tk=63eb152cd7f93f6aa703c3c5f25032a4&x={x}&y={y}&l={z}",});

var source = new XYZ({
  url: "http://t4.tianditu.com/DataServer?T=vec_w&tk=63eb152cd7f93f6aa703c3c5f25032a4&x={x}&y={y}&l={z}",
});
var tileLayer = new Tile({
  id: "tileLayer",
  title: "天地图",
  layerName: "baseMap",
  source: source,
});
let keyNum = ref(0);
var map = ref() // 绑定地图实例的变量
// 初始化地图
function initMap() {
  map = new Map({
    target: 'map', // 对应页面里 id 为 map 的元素
    layers: [tileLayer],
    view: new View({ // 地图视图
      projection: "EPSG:4326", // 投影规则
      center: [114, 29],
      zoom: 5,
    })
  })
}
onMounted(async () => {
  await initMap();
  keyNum++;
});
// onMounted(() => {
//   // 在元素加载完之后再执行地图初始化
//   initMap();
//   setTimeout(() => {
//     // const baseLayer2 = map.value.getLayers().item(0);
//     // baseLayer2.setSource(satelliteE)
//     console.log(map)
//   }, 3000);
// })
</script>
<style scoped>
#olmapchange {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;

}

.map_ol {
  width: 100%;
  height: 100%;
  border: 0px solid #eee;
}
</style>
