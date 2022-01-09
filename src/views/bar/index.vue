<template>
  <div>
    <h1>这是一个画布页面</h1>
    <CanvasOne></CanvasOne>
    <CanvasTwo></CanvasTwo>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import CanvasOne from './components/CanvasOne/index.vue'
  import CanvasTwo from './components/CanvasTwo/index.vue'

  const CANVAS_INFO = {
    WIDTH: 1000,
    HEIGHT: 1000
  }

  @Component({
    components: {
      CanvasOne,
      CanvasTwo
    }
  })
  export default class extends Vue {}
</script>

<style scoped>
  canvas {
    margin: 10px;
  }
</style>
