<template>
   <div class="nav-wrapper">
     <div class="content">
       <slot/>
     </div>
     <Nav/>
   </div>
</template>

<script lang="ts">
export default {
  name:'Layout'
}
</script>

<style lang="scss" scoped>
.nav-wrapper{
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content{
  overflow: auto;
  flex-grow: 1;//让该区域总是尽量的占满
}
</style>

