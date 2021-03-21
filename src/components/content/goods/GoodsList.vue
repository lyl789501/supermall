<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item.index" :goods-item="item"/>

  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'


export default {
  components: { GoodsListItem },
    name:"GoodSList",
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
    .goods{
    display: flex;
    flex-wrap: wrap; /* flex换行 */
    justify-content: space-around; /*  */
    padding: 2px;
    margin: 0 auto;
    }
</style>