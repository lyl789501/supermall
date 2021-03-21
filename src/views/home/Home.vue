<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="left"></div>
      <h2 slot="center">首页</h2>
    </nav-bar>

    <scroll
      class="wrapper"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        class="tab-control"
        @tabClick="tabClick"
      >
      </tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!--组件不能直接监听事件，必须加native才能监听 -->
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from "@/network/home";

import NavBar from "@/components/common/navbar/NavBar.vue";
import TabControl from "../../components/content/tabControl/TabControl";
import Scroll from "../../components/common/scroll/Scroll";
import GoodsList from "../../components/content/goods/GoodsList";
import BackTop from "../../components/content/backTop/BackTop.vue";

import HomeSwiper from "./childcomps/HomeSwiper";
import FeatureView from "./childcomps/FeatureView";
import RecommendView from "./childcomps/RecommendView";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      //利用currentType控制goods的思想值得学习
      currentType: "pop",
      isShowBackTop: true,
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    FeatureView,
    TabControl,
    GoodsList,
    RecommendView,
    Scroll,
    BackTop,
  },

  created() {
    // 请求多个数据
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },

  //created中只保留主逻辑，具体方法放到methods中
  methods: {
    //网络请求事件
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        /* 特殊语法 */
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        //上啦加載更多
         this.$refs.scroll.finishPullUp();
      });

    },

    //事件监听事件
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },

    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
    },

    loadMore(){
      this.getHomeGoods(this.currentType);
    }
  },

  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  padding-top: 44px;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: relative;
  z-index: 9;
}

.wrapper {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>