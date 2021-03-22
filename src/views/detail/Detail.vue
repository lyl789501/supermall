<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <scroll class="wrapper" ref="scroll">
        <detail-swiper v-if="topImages != ''" :top-images="topImages" />
        <detail-base-info :goods="goods" />
        <detail-shop-info :shop="shop" />
        <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
        <detail-param-info :paramInfo="paramInfo" />
    </scroll>
  </div>
</template>

<script>
import { getDetail, Goods ,Shop, GoodsParam} from "../../network/detail";

import DetailBaseInfo from './childComponents/DetailBaseInfo.vue';
import DetailNavBar from "./childComponents/DetailNavBar.vue";
import DetailShopInfo from './childComponents/DetailShopInfo.vue';
import DetailSwiper from "./childComponents/DetailSwiper.vue";
import DetailGoodsInfo from './childComponents/DetailGoodsInfo.vue';
import DetailParamInfo from './childComponents/DetailParamInfo.vue';

import Scroll from '../../components/common/scroll/Scroll';



export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
  },
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {}
    };
  },
  created() {
    /* 保存传入的id */
    this.iid = this.$route.params.iid;

    /* 根据iid请求数据 */
    getDetail(this.iid).then((res) => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      /* 获取商品信息 */
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      /* 获取商家信息 */
      this.shop = new Shop(data.shopInfo);

      /* 保存商品详情数据 */
      this.detailInfo = data.detailInfo;

      /* 获取商品参数数据 */
      this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule,
      )
    });
  },
    methods:{
        imageLoad(){
            this.$refs.scroll.refresh();
        }
    }

};
</script>

<style scope>
    #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .wrapper {
    height: calc(100% - 44px);
  }
</style>