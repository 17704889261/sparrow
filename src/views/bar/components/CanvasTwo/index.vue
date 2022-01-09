<template>
  <canvas id="bar-container2"></canvas>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { FLOW_TYPE, FLOW_TYPE_COLOR } from '../../data/flow'

  const CANVAS_INFO = {
    WIDTH: 500,
    HEIGHT: 500
  }

  const CHART_INFO = {
    width: 400,
    height: 400,
    xPadding: 10,
    yPadding: 10
  }

  @Component
  export default class extends Vue {
    private data: any

    init() {
      // 获得绘制的上下文
      // 之后的 API 都是通过调用 context
      const context = this.canvasInit()
      const data = this.dataInit()

      this.barLine(context)
      this.barChart(context, data)
    }

    canvasInit() {
      const canvas = document.getElementById('bar-container2') as HTMLCanvasElement

      canvas.width = CANVAS_INFO.WIDTH * 2
      canvas.height = CANVAS_INFO.HEIGHT * 2

      canvas.style.width = `${CANVAS_INFO.WIDTH}px`
      canvas.style.height = `${CANVAS_INFO.HEIGHT}px`

      // 获得绘制的上下文
      // 之后的 API 都是通过调用 context
      const context = canvas?.getContext('2d') as CanvasRenderingContext2D
      // canvas视窗内容 宽高缩放两倍，解决 canvas.width 是 canvas.style.width 两倍的问题
      context.translate(
        CANVAS_INFO.WIDTH - CHART_INFO.width,
        CANVAS_INFO.HEIGHT - CHART_INFO.height
      )
      context.scale(2, 2)
      return context
    }

    dataInit() {
      const { width, height, xPadding, yPadding } = CHART_INFO

      const names = Array.from(FLOW_TYPE, (item: any) => item.name)
      const values = Array.from(FLOW_TYPE, (item: any) => item.value)
      const indexs = Array.from(FLOW_TYPE, (_, index) => index)

      const hMax = Math.max(...values)
      const heights = Array.from(FLOW_TYPE, (item: any) => {
        return (height - yPadding) * (item.value / hMax)
      })
      const barWidth = (width - xPadding * (indexs.length + 1)) / indexs.length

      return {
        names,
        values,
        indexs,
        heights,
        barWidth
      }
    }

    barChart(ctx: CanvasRenderingContext2D, data: any) {
      const { indexs } = data
      for (let index = 0; index < indexs.length; index += 1) {
        const renderObj = this.renderComputed(ctx, index, data)
        this.renderGraf(ctx, renderObj)
        this.renderValueTitle(ctx, renderObj)
      }
    }

    renderComputed(ctx: CanvasRenderingContext2D, index: number, data: any) {
      // 循环渲染图型
      // x轴内容： 步长，总长
      // y轴内容：步长，总长
      // 图形颜色，位置，宽高

      const { names, values, heights, barWidth } = data
      const currentName = names[index]
      const currentValue = values[index]
      const color = (FLOW_TYPE_COLOR as any)[currentName]

      const { height, xPadding } = CHART_INFO

      const barHeight = heights[index]

      const x = xPadding * (index + 1) + barWidth * index
      const y = height - barHeight

      console.log(
        '第二条数据：  x==> ',
        x,
        ' y==> ',
        y,
        ' width==> ',
        barWidth,
        ' height==> ',
        barHeight
      )

      return {
        color,
        x,
        y,
        barWidth,
        barHeight,
        currentValue
      }
    }

    renderGraf(ctx: CanvasRenderingContext2D, obj: any) {
      const { color, x, y, barWidth, barHeight } = obj

      ctx.fillStyle = color
      ctx.fillRect(x, y, barWidth, barHeight)
    }

    renderValueTitle(ctx: CanvasRenderingContext2D, obj: any) {
      const { x, y, barWidth, barHeight, currentValue } = obj

      // 绘制值
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = 'white'
      ctx.font = '16px PingFangSC-Regular, sans-serif'
      ctx.fillText(currentValue, x + barWidth / 2, y + barHeight / 2)
    }

    barLine(ctx: CanvasRenderingContext2D) {
      const { width, height } = CHART_INFO

      ctx.fillStyle = 'black'
      ctx.fillRect(0, height, width, 2)
      ctx.fillRect(0, height, 2, -height)
    }

    mounted() {
      this.init()
    }
  }
</script>

<style scoped></style>
