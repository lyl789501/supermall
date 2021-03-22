<template>
    <swiper class="detail-swiper">
        <swiper-item v-for="(item,index) in topImages" :key="index">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</template> 

<script>
import Swiper from '../../../components/common/swiper/Swiper.vue'
import SwiperItem from '../../../components/common/swiper/SwiperItem.vue'

export default {
    name:'DetailSwiper',
    props:{
        topImages:{
            type:Array,
        default (){
            return []
        }
        },
        
    },
    components:{
        Swiper,
        SwiperItem,
    }
}
</script>

<style>
    .detail-swiper {
    height: 300px;
    overflow: hidden;
  }

  .detail-swiper img{
      height: 100%;
      width: 100%;
  }
</style>