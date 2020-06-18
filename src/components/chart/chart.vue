<template>
  <div id="myChart" :style="{ width: '520px', height: '270px' }"></div>
</template>
<script>
export default {
  name: "chart",
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ["错误", "正确"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value"
        },
        yAxis: {
          type: "category",
          data: [
            "历史",
            "政治",
            "地理",
            "生物",
            "化学",
            "物理",
            "科学",
            "数学",
            "语文",
            "英语"
          ]
        },
        series: [
          {
            name: "错误",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "insideRight"
            },
            data: [320, 302, 301, 334, 390, 330, 320, 550, 520, 630]
          },
          {
            name: "正确",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "insideRight"
            },
            data: [320, 302, 301, 334, 390, 330, 320, 550, 520, 630]
          }
        ]
      });
    }
  }
};
</script>

<style scoped></style>
