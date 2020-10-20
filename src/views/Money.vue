<template>
  <layout class-prefix="layout">
    <NumberPad/>
    <Types xxx="666"/>
    <Notes/>
    <Tags/>
  </layout>
</template>

<script lang="ts">
import Nav from '@/components/Nav.vue';
import NumberPad from "@/components/Money/NumberPad.vue";
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import Types from "@/components/Money/Types.vue";

export default {
  name: "Money",
  components: {Types, Notes, Tags, NumberPad, Nav}
}
</script>
<style lang="scss">
.layout-content{
  display:flex;
  flex-direction: column-reverse;

}
</style>
