<template>
  <div id="tab-bar"> 
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: "TabBar"
}
</script>

<style>
    #tab-bar{
    display: flex;
    text-align: center;
    /* 移动端最适宜高度 */
    height: 49px; 
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /* 边框阴影(x偏移，y偏移，，颜色) */
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}


</style>