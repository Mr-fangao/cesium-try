<script setup>
import { ref, onMounted } from 'vue'
defineProps({
    // msg: String
})
onMounted(() => {
});
const tableData = [
    {
        name: "刘备",
        nation: "蜀国",
        bornPlace: "涿郡涿县（河北省涿州市）",
    },
    {
        name: "曹操",
        nation: "魏国",
        bornPlace: "沛国谯县（安徽省亳州市）",
    },
    {
        name: "孙权",
        nation: "吴国",
        bornPlace: "吴郡富春县（浙江省杭州市富阳区）",
    },
    {
        name: "关羽",
        nation: "蜀国",
        bornPlace: "河东郡解县（山西省运城市盐湖区解州镇）",
    },
    {
        name: "刘备",
        nation: "蜀国1",
        bornPlace: "涿郡涿县（河北省涿州市）",
    },
    {
        name: "曹操",
        nation: "魏国1",
        bornPlace: "沛国谯县（安徽省亳州市）",
    },
    {
        name: "孙权",
        nation: "吴国1",
        bornPlace: "吴郡富春县（浙江省杭州市富阳区）",
    },
    {
        name: "关羽",
        nation: "蜀国1",
        bornPlace: "河东郡解县（山西省运城市盐湖区解州镇）",
    },
]
const count = ref(0)
</script>
<template>
    <div id="HomePage" class="common-layout">
        <div id="Header"></div>
        <div id="MainPage">
            <div id="LeftSide" class="main-part">
                <div class="category-part">
                    <div class="title">{{ "Cssium功能示例" }}</div>
                    <div class="optional-list">
                        <div class="option" v-for="(item) in tableData" :key="item.nation">{{ item.name }}</div>
                    </div>

                </div>
                <div class="category-part">
                    <div class="title">{{ "Cssium功能示例" }}</div>
                    <div class="optional-list">
                        <div class="option" v-for="(item) in tableData" :key="item.nation">{{ item.name }}</div>
                    </div>

                </div>
            </div>
            <div id="RightSide" class="main-part"></div>
        </div>
    </div>
</template>

<style lang="less" scoped>
#HomePage {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    #Header {
        width: 100%;
        height: 10%;
        float: left;
    }

    #MainPage {
        width: 100%;
        height: 90%;
        float: left;
        background-color: #f5f5f5;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        #LeftSide {
            height: 100%;
            width: 50%;
            padding: 10px;
            box-sizing: border-box;

            .category-part {
                width: 100%;
                height: auto;
                background: #ffffff;
                border-radius: 15px;
                margin: 2% 0% 0% 0%;
                padding: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                box-sizing: border-box;

                .title {
                    height: 25px;
                    width: 100%;
                    border-bottom: 1px solid #e9e0e0;
                }

                .optional-list {
                    width: 100%;

                    .option {
                        width: calc(100% / 6);
                        height: 25px;
                        margin-top: 5px;
                        float: left;
                    }
                }
            }
        }

        #RightSide {
            height: 100%;
            width: 20%;
            padding: 10px;
            box-sizing: border-box;
        }
    }
}
</style>
