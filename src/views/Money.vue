<template>
  <layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import NumberPad from '@/components/Money/NumberPad.vue';
import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';
import Types from '@/components/Money/Types.vue';

const recordList:Record[]=JSON.parse(window.localStorage.getItem('recordList')||'[]');
//声明一个类型
type Record={
  tags:string[],
  notes:string;
  type:string;
  amount:number;
  createdAt?:Date //除了写数据类型还可以写 类
}

@Component({
  components: {Types, Notes, Tags, NumberPad}
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  record:Record={
    tags:[],notes:'',type:'+',amount:0
  };
  recordList:Record[]=recordList;

  onUpdateTags(value: string[]) {
    this.record.tags=value
  }

  onUpdateNotes(value: string) {
    this.record.notes=value
  }

  saveRecord(){
    const record2:Record= JSON.parse(JSON.stringify(this.record))
    record2.createdAt = new Date()
    this.recordList.push(record2)
  }

  @Watch('recordList')
  onRecordListChange(){
    window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
