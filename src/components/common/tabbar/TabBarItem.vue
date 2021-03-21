<template>
    <div class="tab-bar-item" @click="itemClick">
        <!-- 插槽外在封装一个div，对属性的修改直接在div上而不是slot中进行 -->
        <div v-if="!isActive" > 
            <slot  name="item-icon"></slot>
        </div>
        <div v-else>
            <slot  name="item-icon-active"></slot>
        </div>
        <!-- v-bind动态绑定了样式，且放在了一个计算属性中 -->
        <div :style="activeStyle">
              <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:"TabBarItem",
    props:{
        path: String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return{

        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
            return this.isActive ? { color:this.activeColor} :{}
        }
    },
    methods:{
        itemClick(){
            this.$router.push(this.path)
        }
    }
}
</script>

<style>
    .tab-bar-item{
        flex:1;
        flex-shrink:0;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }

    .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 2px;
    vertical-align: middle; /* 垂直居中？ */
    margin-bottom: 2px;
}

</style>