<template>
  <div>
    <ul class="types">
      <li :class="type==='-'&&'selected'"
          @click="selectType('-')">支出
      </li>
      <li :class="type==='+'&&'selected'"
          @click="selectType('+')">收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
//必须在vue-property-decorator引入一个装饰器
// @Component tap一下自动生成
@Component
export default class Types extends Vue {//把装饰器修饰到class上面
  type = '-';//声明data，-'表示支出‘+’表示收入

  selectType(type: string) {//type只能是‘-’或者‘+’中的一种
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.type = type;
  }

}
</script>


<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>