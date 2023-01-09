<!--
 * @Author: liqifeng
 * @Date: 2023-01-06 14:08:15
 * @LastEditors: liqifeng Mr.undefine@protonmail.com
 * @LastEditTime: 2023-01-06 17:12:49
 * @Description: openlayers map change  
-->
<template>
    <div id="MapSelect">
        <!-- <div class="optional-list">
            <div class="option" v-for="(item) in CesiumExample" :key="item.id" @click="jumpTo(item.loc)">{{
                item.name
            }}</div>
        </div> -->
    </div>

</template>
<script setup>
import { ref, onMounted, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { Map, View } from 'ol'      // 地图实例方法、视图方法
import TileLayer from 'ol/layer/Tile'    // 瓦片渲染方法
import OSM from 'ol/source/OSM'    // OSM瓦片【OSM不能在实际开发中使用，因为OSM里中国地图的边界有点问题！！！！】
import 'ol/ol.css'
import XYZ from "ol/source/XYZ"
const props = defineProps({
    olmap: {
        type: Object,
        required: true,
    },
});
// props:{
//     olmap
// },
const satelliteE = new XYZ({
    crossOrigin: "anonymous",
    url:
        "http://t3.tianditu.com/DataServer?T=img_w&tk=63eb152cd7f93f6aa703c3c5f25032a4&x={x}&y={y}&l={z}",

});

onMounted(() => {
    setTimeout(() => {
        console.log(props.olmap)
        // const baseLayer = props.olmap.value.getLayers().item(0);
        // baseLayer.setSource(satelliteE)
    }, 2000);

});
// watch(
//   () => props.testStr,
//   (newVal, oldVal) => {
//     console.log('监听基本类型数据testStr')
//     console.log('new', newVal)
//     console.log('old', oldVal)
//   }
// )

const count = ref(0)
</script>
<style scoped>
#MapSelect {
    width: 200px;
    height: 200px;
    position: absolute;
    z-index: 99;
    top: 0;
    right: 10px;
    background-color: aliceblue;
    border: 1px solid #FFFF;
}

/* .map_ol {
    width: 100%;
    height: 100%;
    border: 0px solid #eee;
} */
</style>
