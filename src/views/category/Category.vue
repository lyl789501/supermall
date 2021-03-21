<template>
  <div class="wrapper">
    <ul  class="content">
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
      <li>测试选项</li>
    </ul>
  </div>
</template>

<script>

import BScroll from 'better-scroll'
export default {
    name:"Category",
    data(){
      return{
        scroll:null
      }
    },
    /* 组件创建完调用， */
    mounted(){
          this.scroll = new BScroll('.wrapper',{
            /* 0、1都不是实时侦测，
            2检测手指滚动过程，但惯性不检测 
            3，所有滚动都侦测*/
            probeType: 2,
            pullUpLoad: true,
            mouseWheel:true,
          });
      
      /* 默认情况下，BetterScroll不可实时监听滚动位置 */
          this.scroll.on('scroll',(positon)=>{
            console.log(positon);
          });
          this.scroll.on('pullingup',()=>{
            console.log('上拉加载更多');
          })
    }
}


</script>

<style>
    .wrapper{ 
      /* 原生完成滚动,overflow-y控制局部滚动，但这样体验较差 */
      height: 150px;
      background-color: red;
      overflow-y: hidden;
    }
</style>