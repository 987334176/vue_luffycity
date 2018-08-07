<template>
  <div id="app">
    <button v-on:click="get_list">获取</button>
    <div>{{ message }}</div>
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
  </div>
</template>

<script>
  import axios from 'axios'

export default {
  name: 'App',
  data:function () {
    return {
      message:'',  //声明title变量
      // content:''
    }
  },
  methods:{   //定义方法对象
    get_list:function(){
      console.log(111);
      // this.message = '111';
      // console.log(this.HOST )
      axios.get('/courses/thematic/')
        .then((res)=> {
          console.log('我要去后端拉取笔记数据啦！');
          console.log(res.data.data);
          messages = res.data.data;
          // 将获取到的笔记数据 放到大仓库中
          // _this.$store.state.noteList = res.data
          // context.commit('INITNOTELIST', res.data.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  // computed: {
  //     // 计算属性的 getter
  //     reversedMessage: function () {
  //       // `this` 指向 vm 实例
  //       axios.get('/courses/thematic/')
  //         .then((res)=> {
  //           console.log('我要去后端拉取笔记数据啦！');
  //           console.log(res.data.data)
  //           // 将获取到的笔记数据 放到大仓库中
  //           // _this.$store.state.noteList = res.data
  //           // context.commit('INITNOTELIST', res.data.data)
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //     }
  // },
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
