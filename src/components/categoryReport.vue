<template>
  <div>
    <div id="category" style="width: 100%;height:400px;margin-top: 50px;"></div>
    <el-card>
      <el-table
        :data="tableData"
        style="width: 100%" stripe :header-cell-style="{'background-color': '#E4E4E4'}">
        <el-table-column prop="title" label="书名"></el-table-column>
        <el-table-column prop="author" label="作者"></el-table-column>
        <el-table-column prop="store" label="出版社"></el-table-column>
        <el-table-column prop="price" label="价格"></el-table-column>
      </el-table>
    </el-card>
    <div style="text-align: center;margin-top: 10px;margin-bottom: 20px">
      <el-pagination background layout="prev, pager, next" :total="total" :current-page="searchItem.pageNumber" @current-change="handlePageChange"></el-pagination>
    </div>
  </div>
</template>

<script>
  import {handleGetStaticsApi,handleGetBookListApi} from '../fetch/book'
  export default {
    name: "categoryReport",
    data(){
      return {
        tableData: [],
        total: 0,
        searchItem: {
          pageNumber: 1
        }
      }
    },
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
        handleGetStaticsApi().then(response=>{
          option.xAxis.data = response.category_item;
          option.series[0].data = response.category_price_data;
          myChart.setOption(option);
        });
      },
      handlePageChange(page){
        this.searchItem.pageNumber = page;
        this.getBookList()
      },
      getBookList(){
        handleGetBookListApi(this.searchItem).then(response=>{
          this.tableData = response.books;
          this.total = response.total
        })
      }
    },
    mounted() {
      this.drawChart();
      this.getBookList()
    }
  }
</script>

<style scoped>
  .table-header{
    background: darkgreen;
  }
</style>
