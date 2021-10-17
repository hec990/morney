<template>
  <nav>
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-biaoqian"></use>
      </svg>
      <router-link to="/statistics">标签</router-link>
    </div>
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-jizhang"></use>
      </svg>
      <router-link to="/money" class="item">记一笔</router-link>
    </div>
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tongjifenxi-xiangmubiaogetongji"></use>
      </svg>
      <router-link to="/labels" class="item">统计</router-link>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
.icon {
  width: 32px;
  height: 32px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
 nav {
   display: flex;
   font-size: 12px;
   box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
   div {
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     flex: 1;
   }
 }
</style>