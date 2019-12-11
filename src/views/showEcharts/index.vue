<template>
  <div>
    <div id="myChart" class="echartsStyle"></div>
  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
export default {
  name: 'showEcharts',
  data () {
    return {}
  },
  created () {
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let myChart = echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        title: { text: 'echarts' },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['每日新增用户数量', '每日用户数量总计'],
          textStyle: {
            color: '#9e9fa4',
            fontSize: 16
          }
        },
        grid: {
          containLabel: true
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          barWidth: 20,
          // itemStyle: {
          //   normal: {
          //     color: '#1774F0'
          //   }
          // },
          // stack: 'online',
          // yAxisIndex: 1,
          data: [5, 20, 36, 10, 10, 20]
        },
        {
          name: '每日用户数量总计',
          type: 'line',
          itemStyle: {
            normal: {
              color: '#F8D760'
            }
          },
          yAxisIndex: 0,
          data: [5, 20, 36, 10, 10, 20]
        }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.echartsStyle {
  width: 500px;
  height: 500px;
}
.image {
  background: #34495e;
  border: 1px solid #34495e;
  width: 200px;
  height: 200px;
}
.image-contain {
  object-fit: contain;
  object-position: center;
}
.image-cover {
  object-fit: cover;
  object-position: right top;
}
</style>