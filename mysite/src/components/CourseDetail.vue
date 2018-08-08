<template>
  <div class="container-fluid">
    <div class="row clearfix">
      <div class="col-md-12 column">
        <div class="carousel slide" id="carousel-70359">
          <ol class="carousel-indicators">
            <li class="active" data-slide-to="0" data-target="#carousel-70359">
            </li>
            <li data-slide-to="1" data-target="#carousel-70359">
            </li>
            <li data-slide-to="2" data-target="#carousel-70359">
            </li>
          </ol>
          <div class="carousel-inner">
            <div class="item active">
              <img alt="" src="http://ibootstrap-file.b0.upaiyun.com/lorempixel.com/1600/500/sports/1/default.jpg"/>
              <div class="carousel-caption">
                <h4>
                  First Thumbnail label
                </h4>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at
                  eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
              </div>
            </div>
            <div class="item">
              <img alt="" src="http://ibootstrap-file.b0.upaiyun.com/lorempixel.com/1600/500/sports/2/default.jpg"/>
              <div class="carousel-caption">
                <h4>
                  Second Thumbnail label
                </h4>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at
                  eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
              </div>
            </div>
            <div class="item">
              <img alt="" src="http://ibootstrap-file.b0.upaiyun.com/lorempixel.com/1600/500/sports/3/default.jpg"/>
              <div class="carousel-caption">
                <h4>
                  Third Thumbnail label
                </h4>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at
                  eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
              </div>
            </div>
          </div>
          <a class="left carousel-control" href="#carousel-70359" data-slide="prev"><span
            class="glyphicon glyphicon-chevron-left"></span></a> <a class="right carousel-control"
                                                                    href="#carousel-70359" data-slide="next"><span
          class="glyphicon glyphicon-chevron-right"></span></a>
        </div>
        <div class="container">
          <div v-for="(item,index) in message" :key="index">
            <h2>课程概述</h2>
            <h4>
              {{item.why_study}}
            </h4>
            <h6 class="text-center">
              可以根据不同的学习情况购买不一样的学习套餐哦！
            </h6>
            <div id="course" style="margin-top: 66px" _v-3e2ebd6a="">

              <div v-for="(pricing,index) in item.price_strategy" :key="index" style="text-align:center;"
              >
                <input type="radio" v-bind:value="pricing.id" v-on:click="choice_price" v-model="picked" ref="input1">
                <span>¥{{pricing.price}}</span>
                <!--<br>-->
                <span>有效期{{pricing.valid_period}}</span>
                <!--<span-->
                <!--class="limit" ></span>-->
                <!--<label for="one">{{message[index]}}</label>-->
                <br>
                <!--<input type="radio" id="two" value="Two" v-model="picked">-->
                <!--<label for="two">Two</label>-->
                <!--<br>-->


                <!--<li class="price-wrap">-->
                <!--<p style="display: none">{{pricing.id}}</p>-->

                <!--&lt;!&ndash;<input type="text" v-model="pick" v-bind:value="a">&ndash;&gt;-->

                <!--&lt;!&ndash;<a href="#" v-on:click="add_car">&ndash;&gt;-->
                <!--<span class="price">¥&nbsp;{{pricing.price}}</span> <span-->
                <!--class="limit" id="30">有效期{{pricing.valid_period}}</span>-->
                <!--&lt;!&ndash;</a>&ndash;&gt;-->
                <!--</li>-->


                <!--<li class="price-wrap" id="40"><span class="price">¥&nbsp;199</span> <span-->
                <!--class="limit" id="60">有效期2个月</span></li>-->
                <!--<li class="price-wrap" id="41"><span class="price">¥&nbsp;299</span> <span-->
                <!--class="limit" id="90">有效期3个月</span></li>-->
                <!--<li class="price-wrap" id="42"><span class="price">¥&nbsp;399</span> <span-->
                <!--class="limit" id="180">有效期6个月</span></li>&lt;!&ndash;v-for-end&ndash;&gt;-->
              </div>
              <div class="clearfix"></div>
              <div style="justify-content: center; margin-top: 66px; display: none;" _v-3e2ebd6a="">
                <button class="charge-btn-fir charge-btn-active" style="margin-right: 48px" _v-3e2ebd6a="">开课时通知我
                </button>
              </div>
              <div style="height: 50px"></div>
              <div class="text-center">
                <span>您选择的课程id为: {{ picked }}</span>
                <br>
              </div>
              <br>
              <div class="text-center">
                <button type="button" class="btn btn-lg btn-success" v-on:click="add_car">购买</button>
                <button type="button" class="btn btn-lg btn-warning" style="margin-left: 100px" v-on:click="add_car">
                  加入购物车
                </button>
                <!--<div class="pur-tip-wrap" _v-3e2ebd6a="">-->
                <!--<div class="sub-tip" _v-3e2ebd6a=""><img style="margin-left: 17px"-->
                <!--src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAVFBMVEUAAACDz0t5xz94x0CA4kB4xz95yUF5xkB5x0B5x0B5x0B4xz94x0B7zEJ5xz95x0F7ykF5yEB6x0B5yEJ5xj95x0B5yUN5zkd5xkB5xz95x0B4xj+60V+RAAAAG3RSTlMAC7i/B9VH96Zp7+mMINxRKHZePcKeMRLPyoPMh/HAAAABDklEQVQ4y43T6W6EIBSG4Q8RBFncdTrn/u+zsWWqDMv0/QXJkxwlgCin1eq7XjTbfKAQmx50i8851GpDbwmZqFFQpuZttOwpmx/vSlOpfrmUpHLGITT2VEmw8I+Cqqnrw6rtp2LmE+Mnm+hjEsCDSn0Nln7aAFeexQBBZwbQNcXCUS1QFdU2YTNhraqQha+qkEJXVaEV/Ws800VFHCKsWmBI1DX0tZ1xurwiiy2sOnm6vCKNmSKXVTTioMgtOeUB8NhlFFkAM0UuqPReisixpnDLh+iOmUR14W01VO2J3w5fUw3+81AFw1+LKSqHW04UJjJEMZVB3RNJO0/OyyGX3MxlvN1RbJmsWrmyekTUN6lQaIyfaFE5AAAAAElFTkSuQmCC"-->
                <!--width="14" height="14" alt="" _v-3e2ebd6a=""> <span-->
                <!--class="sub-text" _v-3e2ebd6a=""></span></div>-->
                <!--</div>-->
                <!--<div class="pur-warn-wrap" _v-3e2ebd6a="">-->
                <!--<div class="sub-tip" _v-3e2ebd6a=""><img style="margin-left: 17px"-->
                <!--src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAIVBMVEUAAAD/qwD/qwD/rwD/rAD/qgD/qwD/qwD/qgD/qgD/qgDW3ydwAAAACnRSTlMAQPMbbNm2m07Gl35RogAAAH9JREFUGNNjAAJmtyDVFAMgA8SuWgUEyyG8plVgoAFis6yCAgcgpwtIr5wFJFYAdWgB6YVSQGKRAQP7KhhnVQGDFYKzmMELwVnCkIXgLGOIQnCWMmghOItQOCjKUAxAMRpoKdhtEEvZV8FBAcShS7zADkX2AprnEN7GDBBEUAEAh3uLdcv6paQAAAAASUVORK5CYII="-->
                <!--width="14" height="14" alt="" _v-3e2ebd6a=""> <span-->
                <!--class="warn-text" _v-3e2ebd6a=""></span></div>-->
              </div>
            </div>
            <div style="height: 200px"></div>
          </div>
        </div>

      </div>

    </div>
  </div>
  <!--</div>-->
</template>

<script>
  export default {
    name: "CourseDetail",
    data: function () {  //data必须是函数
      return {
        message: [],  //声明data变量
        strategy_id: '', //策略id
        picked: '',
        list: [],
      }
    },
    mounted: function () {
      this.getAlldata();
    },
    methods: {   //定义方法对象
      getAlldata: function () {
        console.log(111);
        let that = this;
        this.$axios.request({
          url: 'http://127.0.0.1:8000/api/v1/courses/1/',
          method: 'GET',
        })
          .then(function (res) {
            console.log('连接成功');
            console.log(res);
            that.message = res.data.data;
          })
          .catch(function (err) {
            console.log('连接失败' + err);
          })
      },
      choice_price: function () {
        this.picked = this.$refs.input1.value;
      },
      add_car: function () {
        let that = this;
        this.$axios.request({
          url: 'http://127.0.0.1:8000/api/v1/shoppingcart/',
          method: 'POST',
          data: {
            picked: this.picked,
          },
          // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        })
          .then(function (res) {
            console.log('连接成功');
            console.log(res);
            that.message = res.data.data;
            alert('加入购物车成功!');
            window.location.reload();
          })
          .catch(function (err) {
            console.log('连接失败' + err);
            alert('加入购物车失败!');
            window.location.reload();
          })
      }
    },
  }
</script>

<style scoped>
  #course ul {
    text-align: center;
    list-style-type: none;
    display: inline-block;
    margin-left: 250px;
  }

  #course li {
    display: inline;
    float: left;
    border: solid 1px red;
    height: 149px;
    width: 150px;
    line-height: 150px;
    text-align: center;
    border-color: #C1C1C1;
    margin-left: 100px;
  }

</style>
