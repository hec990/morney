<template>
    <Layout>
      <ol class="tags">
        <li>
          <span>衣</span>
          <svg class="icon">
            <use xlink:href="#icon-right"></use>
          </svg>
        </li>
        <li>
          <span>食</span>
          <svg class="icon">
            <use xlink:href="#icon-right"></use>
          </svg>
        </li>
        <li>
          <span>住</span>
          <svg class="icon">
            <use xlink:href="#icon-right"></use>
          </svg>
        </li>
        <li>
          <span>行</span>
          <svg class="icon">
            <use xlink:href="#icon-right"></use>
          </svg>
        </li>
      </ol>
      <div class="createTag-wrapper">
        <button class="createTag">新建标签</button>
      </div>
    </Layout>
</template>

<script lang="ts">
export default {
  name: "Labels"
};
</script>

<style lang="scss" scoped>
 .tags {
   background-color: white;
   font-size: 16px;
   padding-left: 16px;
   > li {
     min-width: 44px;
     display: flex;
     align-items: center;
     justify-content: space-between;
     border-bottom: 1px solid #e6e6e6;
     padding: 10px;
     > svg {
       width: 24px;
       height: 24px;
     }
   }
 }
 .createTag {
   background-color: #767676;
   color: white;
   border-radius: 4px;
   border: none;
   height: 40px;
   padding: 0 16px;
   font-size: 16px;
   &-wrapper {
     text-align:center;
     padding: 16px;
     margin-top: 44-16px;
   }
 }
</style>