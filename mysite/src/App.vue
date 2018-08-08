<template>
  <div id="app">
    <h1>所有的专题课</h1>
    <div v-for="(item,index) in message" :key="index">
      <!--<p>{{ item.id }}</p>-->
      <h3>专题课名</h3>
      <p>{{ item.name }}</p>
      <!--<p>{{ item.course_img }}</p>-->
      <h3>课程类型</h3>
      <p>{{ item.course_type }}</p>
      <h3>学位课程简介</h3>
      <p>{{ item.brief }}</p>
      <h3>等级</h3>
      <p>{{ item.level_name }}</p>
      <h3>发布时间</h3>
      <p>{{ item.pub_date }}</p>
      <h3>建议学习周期(天)</h3>
      <p>{{ item.period }}</p>
      <h3>课程顺序</h3>
      <p>{{ item.order }}</p>
      <h3>课件路径</h3>
      <p>{{ item.attachment_path }}</p>
      <h3>状态</h3>
      <p>{{ item.status }}</p>

      <!--<p>{{ item.template_id }}</p>-->
      <!--<h3>课程子类</h3>-->
      <!--<p>{{ item.sub_category }}</p>-->
      <h3>奖学金</h3>
      <p>{{ item.degree_course }}</p>
    </div>
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
  </div>
</template>

<script>
  import axios from 'axios'

export default {
  name: 'App',
  data:function () {  //data必须是函数
    return {
      message:[],  //声明data变量
    }
  },
  mounted:function(){
    this.getAlldata();
  },
  methods:{   //定义方法对象
    getAlldata:function(){
      console.log(111);
      let that = this;
        axios({
          method: 'get',
          url: 'http://127.0.0.1:8000/api/v1/courses/thematic/',
        })
        .then(function (res) {
          console.log('连接成功');
          console.log(res);
          that.message = res.data.data;
        })
        .catch(function (err) {
          console.log('连接失败'+err);
        })
    }
  },
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
