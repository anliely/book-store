<template>
  <div style="margin-top: 50px">
    <el-input placeholder="请输入内容" v-model="searchItem.words" style="width: 439px;margin-left: 40px;margin-right: 20px">
      <template slot="prepend"><i class="el-icon-search"></i></template>
    </el-input>
    <el-button type="primary" style="width: 100px" @click="handleGetBookList">查询</el-button>
    <el-button type="primary" style="width: 100px" @click="handleRset">重置</el-button>
    <div style="margin-top: 20px;background: #EEEEEE;display: flex">
      <div style="width: 200px">
        <el-menu class="el-menu-vertical-demo" :default-openeds="openList" @select="handleSelectMenu">
          <el-submenu :index="item.category" v-for="item in categoryList" :key="item.category">
            <template slot="title">
              <span>{{item.category}}</span>
            </template>
            <el-menu-item :index="item2.category" v-for="item2 in item.small_category" :key="item2.category">{{item2.category}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div style="margin-top: 10px;margin-left: 10px">
        <div>
          <el-card class="box-card" v-for="item in bookList" :key="item.id">
            <img :src="item.img" alt="" style="width: 222px; height: 179px">
            <p style="font-weight: bold">{{item.title}}</p>
            <p>价格：{{item.price}}</p>
            <p>出版商：{{item.store}}</p>
            <p>出版时间：{{item.pub_date}}</p>
          </el-card>
        </div>
        <div style="text-align: center;margin-top: 10px;margin-bottom: 20px">
          <el-pagination background layout="prev, pager, next" :total="total" :current-page="searchItem.pageNumber" @current-change="handlePageChange"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {handleGetCategoryApi,handleGetBookListApi} from '../fetch/book'
  export default {
    name: "BookList",
    data(){
      return {
        searchItem: {
          words: '',
          smallCategory: '',
          pageNumber: 1
        },
        categoryList: [],
        openList: [],
        bookList: [],
        total: 0
      }
    },
    methods: {
      handleSelectMenu(index){
        this.searchItem.smallCategory = index;
        this.searchItem.pageNumber = 1;
        this.handleGetBookList()
      },
      handleRset(){
        this.searchItem.words = '';
        this.searchItem.smallCategory = '';
        this.searchItem.pageNumber = 1;
        this.handleGetBookList()
      },
      handlePageChange(page){
        this.searchItem.pageNumber = page;
        this.handleGetBookList()
      },
      handleGetCategoryList(){
        handleGetCategoryApi().then(response=>{
          this.categoryList = response;
          if(this.categoryList.length > 0){
            this.openList.push(this.categoryList[0].category);
          }
        })
      },
      handleGetBookList(){
        handleGetBookListApi(this.searchItem).then(response=>{
          this.bookList = response.books;
          this.total = response.total
        })
      }
    },
    created() {
      this.handleGetCategoryList();
      this.handleGetBookList()
    }
  }
</script>

<style scoped>
  .box-card{
    width: 210px;
    height: 320px;
    display: inline-block;
    margin-right: 20px;
  }
  .box-card p{
    margin: 3px;
  }
</style>
