<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles"  class="tab-control-item" :key="item.index" 
        :class="{active: index === currentIndex}"  
        @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        name: "TabControl",
        titles:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick', index) /* 子组件传事件给父组件 */
      }
    }
}
</script>

<style>
    .tab-control{
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        background-color: #fff;
    }
    .tab-control-item{
        flex: 1;
    }

    .tab-control-item span {
    padding: 5px;
  }
    .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 3px solid var(--color-tint);
  }
    
</style>