<template>
  <div>
      <nav-bar>
            <div slot="left" class="back" @click='backClick'>
                <img src="@/assets/img/common/back.svg" alt="">
            </div>
            <div slot="center">
                <div  class="title">
                    <div class="titleItem" 
                        v-for="(item,index) in titles" 
                        :key="index"
                        @click='itemClick(index)'
                        :class="{active: index===currentIndex}"
                    >{{item}}</div>
                </div>
            </div>
        </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar.vue'


export default {
  components: { 
      NavBar,
        },
    name:'DetailNavBar',
    data(){
        return{
            titles:['商品','参数','评论','推荐'],
            currentIndex:0,
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index;
        },
        backClick(){
            this.$router.back();
        }
    }
}
</script>

<style>
    .title{
        display: flex;
        font-size: 12px;
    }

    .titleItem{
        flex: 1;
        padding-right: 10px;
    }

    .active{
        color: var(--color-high-text);
    }

    .back img{
        margin: 10px;
    }
</style>