<script setup>
import * as Cesium from "cesium";
import { CesiumViewer } from "../ulits/cesium/CesiumViewer";

import { ref, onMounted, onUnmounted } from 'vue'
defineProps({
  // msg: String
})
onMounted(() => {
  // console.log(Cesium.VERSION)
  CesiumViewer("cesiumContainer");
  window.viewer.imageryLayers.remove(window.viewer.imageryLayers.get(0))
  let imagery = window.viewer.imageryLayers.addImageryProvider(
    new Cesium.ArcGisMapServerImageryProvider({
      url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
      baseLayerPicker: false
    })
  );
  imagery.brightness = 0.9;
  addSkybox();
});
onUnmounted(() => {
  window.viewer.destroy();
})
//添加天空盒
function addSkybox() {
  let groundSkybox = new Cesium.SkyBox({
    sources: {
      negativeX: '/img/skybox/left.png',
      positiveX: '/img/skybox/right.png',
      negativeY: '/img/skybox/front.png',
      positiveY: '/img/skybox/back.png',
      negativeZ: '/img/skybox/down.png',
      positiveZ: '/img/skybox/up.png',
    }
  });
  // 自带的默认天空盒
  let defaultSkybox = window.viewer.scene.skyBox;
  // 渲染前监听并判断相机位置
  window.viewer.scene.preUpdate.addEventListener(() => {
    let position = window.viewer.scene.camera.position;
    let cameraHeight = Cesium.Cartographic.fromCartesian(position).height;
    if (cameraHeight < 200000) {
      window.viewer.scene.skyBox = groundSkybox;
      window.viewer.scene.skyAtmosphere.show = false;
    } else {
      window.viewer.scene.skyBox = defaultSkybox;
      window.viewer.scene.skyAtmosphere.show = true;
    }
  })

};
const count = ref(0)
</script>
<template>
  <div id="cesiumContainer"></div>
</template>

<style lang="less" scoped>
#cesiumContainer {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
