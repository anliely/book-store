<template>
  <div>
    <div id="category" style="width: 100%;height:400px;margin-top: 50px;"></div>
  </div>
</template>

<script>
  import {handleGetSmallApi} from '../fetch/book'
  export default {
    name: "smallCategoryReport",
    methods: {
      drawChart() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById("category"));
        // 指定图表的配置项和数据
        let option = {
          title: {
            text: "统计"
          },
          tooltip: {},
          legend: {
            data: ["数量"]
          },
          xAxis: {
            data: []
          },
          yAxis: {},
          series: [
            {
              name: "数量",
              type: "bar",
              color: '#81D3F8',
              data: []
            }
          ]
        };
        // 使用刚指定的配置项和数据显示图表。
        handleGetSmallApi().then(response=>{
          option.xAxis.data = response.category_item;
          option.series[0].data = response.category_price_data;
          myChart.setOption(option);
        });
      }
    },
    mounted() {
      this.drawChart()
    }
  }
</script>

<style scoped>

</style>
