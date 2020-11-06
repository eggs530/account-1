<template>
  <layout>
    <Tabs class-prefix="type" :data-source="TypeList" :value.sync = 'type'/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync = 'interval'/>
  </layout>
</template>

<style scoped lang="scss">
::v-deep .type-tabs-item{
  background: white;
  &.selected{
    background: #c4c4c4;
    &::after{
      display: none;
    }
  }
}
</style>

<script lang="ts">
import Types from '@/components/Money/Types.vue'
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue'

@Component({
  components:{Types,Tabs}
})
export default class Statistics extends Vue {
  type = '+';
  interval = 'day';
  intervalList = [
    {text: '按天', value: 'day'},
    {text: '按周', value: 'week'},
    {text: '按月', value: 'month'},
  ]
  TypeList = [
    {text: '支出', value: '-'},
    {text: '收入', value: '+'}
  ]
}
</script>

<style lang="scss" scoped>

</style>