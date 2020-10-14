<template>
  <layout>
    <div class="tags">
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
      <div class="new">
        <button>新增标签</button>
      </div>
    </div>
    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text">
      </label>
    </div>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>OK</button>
        <button>0</button>
        <button>.</button>
      </div>
    </div>
  </layout>
</template>

<script lang="ts">
import Nav from '@/components/Nav.vue';

export default {
  name: "Money",
  components: {Nav}
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tags {
  font-size: 14px;
  padding:16px;
  > .current {
    display: flex;
>li{
background:#d9d9d9;
  $h:24px;
  height: $h;
  line-height: $h;//一行字的时候才能用height等于line-height一样高居中
  border-radius: $h/2;
  padding: 0 16px;
  margin-right: 12px;
}
  }
  >.new{
    padding-top:16px;
    button{
      background: transparent;
      border:none;
      color: #999;
      border-bottom:1px solid ;
      padding:0 4px;//使得下划线比文字要长
    }
  }
}
</style>
