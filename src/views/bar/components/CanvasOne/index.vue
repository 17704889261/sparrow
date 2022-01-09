<template>
  <canvas id="bar-container1"></canvas>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { FLOW_TYPE, FLOW_TYPE_COLOR } from '../../data/flow'

  const CANVAS_INFO = {
    WIDTH: 200,
    HEIGHT: 200
  }

  @Component
  export default class extends Vue {
    private data: any

    init() {
      // 获得绘制的上下文
      // 之后的 API 都是通过调用 context
      const context = this.canvasInit()
      const data = this.dataInit()

      this.barInit3(context, data)
    }

    canvasInit() {
      const canvas = document.getElementById('bar-container1') as HTMLCanvasElement

      canvas.width = CANVAS_INFO.WIDTH * 2
      canvas.height = CANVAS_INFO.HEIGHT * 2

      canvas.style.width = `${CANVAS_INFO.WIDTH}px`
      canvas.style.height = `${CANVAS_INFO.HEIGHT}px`

      // 获得绘制的上下文
      // 之后的 API 都是通过调用 context
      const context = canvas?.getContext('2d') as CanvasRenderingContext2D
      // canvas视窗内容 宽高缩放两倍，解决 canvas.width 是 canvas.style.width 两倍的问题
      context.translate(10, 10)
      context.scale(1, 1)
      return context
    }

    dataInit() {
      const names = Array.from(FLOW_TYPE, (key: any) => key.name)
      const values = Array.from(FLOW_TYPE, (key: any) => key.value)
      const indexs = Array.from(FLOW_TYPE, (key, index) => index)
      return {
        names,
        values,
        indexs
      }
    }

    barInit3(ctx: CanvasRenderingContext2D, data: any) {
      const { names, values, indexs } = data
      for (let index = 0; index < names.length; index += 1) {
        this.renderGraf(ctx, index, data)
      }
    }

    renderGraf(ctx: CanvasRenderingContext2D, index: number, data: any) {
      // 循环渲染图型
      // x轴内容： 步长，总长
      // y轴内容：步长，总长
      // 图形颜色，位置，宽高（数值 缩放20%）

      const { names, values, indexs } = data
      const currentName = names[index]
      const currentValue = values[index]
      const color = (FLOW_TYPE_COLOR as any)[currentName]

      let maxVal = values[0]
      values.map((item: number) => {
        if (item > maxVal) {
          maxVal = item
        }
        return item
      })

      const width = 100
      const height = currentValue
      const x = (width + 10) * index
      const y = maxVal - height

      console.log('第一条数据：  x==> ', x, ' y==> ', y, ' width==> ', width, ' height==> ', height)

      ctx.fillStyle = color
      ctx.fillRect(x, y, width, height)

      // 绘制值
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = 'white'
      ctx.font = '16px PingFangSC-Regular, sans-serif'
      ctx.fillText(currentValue, x + width / 2, y + height / 2)
    }

    mounted() {
      this.init()
    }
  }
</script>

<style scoped></style>
