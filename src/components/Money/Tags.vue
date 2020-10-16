<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
name: "Tags"
}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow:1;
  display: flex;
  flex-direction: column-reverse;

  > .current {
    display: flex;
    flex-wrap: wrap;//当有多个标签时换行
    overflow: auto;
    > li {
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h; //一行字的时候才能用height等于line-height一样高居中
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top:4px;
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px; //使得下划线比文字要长
    }
  }
}
</style>