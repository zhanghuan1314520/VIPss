<template>
  <div class="common_header">
    <div class="header_left">
      <router-link to="/home">
        <span class="spana">
          <i class="iconfont icon-shouye"></i>
        </span>
      </router-link>
      <span class="spanb">
        <i class="iconfont icon-jiantou_zuo"></i>
      </span>
    </div>
    <div class="header_right">
      <div class="nav">
        <span class="span1">提分秘籍</span>
        <div class="img">
          <div class="imgs">
            <div class="title">微信扫一扫关注提分案例/提分秘籍</div>
            <img class="images" src="../../../src/assets/images/rwm1.png" />
          </div>
        </div>
      </div>
      <div class="nav1">
        <span class="span2">家长端</span>
        <div class="img">
          <div class="imgs">
            <div class="title">请使用微信扫一扫</div>
            <img class="images" src="../../../src/assets/images/rwm2.png" />
          </div>
        </div>
      </div>
      <div class="nav2">
        <router-link to="purchaseRecord">
          <span class="span3">购买记录</span>
        </router-link>
      </div>
      <div class="nav3">
        <router-link to="changePassword">
          <span class="span4">修改密码</span>
        </router-link>
      </div>
      <div class="nav4">
        <router-link to="/">
          <span class="span5">登陆</span>
        </router-link>
      </div>
      <div class="nav5">
        <i @click="visible = !visible" class="iconfont icon-gerenzhongxin"></i>
        <el-popover el-popover placement="bottom" width="180" trigger="manual" v-model="visible">
          <div class="signs">
            <div class="sign">
              <img class="sign_img" src="../../../src/assets/images/02.jpg" />
            </div>
            <div class="sign_title">VIP双师</div>
            <div class="sign_content">
              <!-- 签到金币 -->
              <div class="sign_content_number">
                <div class="money">
                  <img class="img" src="../../../src/assets/images/jb.png" />
                </div>
                <div class="click">{{ count }}</div>
              </div>
              <!-- 是否签到 -->
              <div class="state">
                <div
                  @click="enter"
                  id="dian"
                  v-bind:class="{ Sign_in: flag, Not_signed_in: !flag }"
                >{{ con }}</div>
              </div>
            </div>
            <div class="sign_subtitle">
              <p>要想获得新知识</p>
              <p>就必须提出大量的新问题</p>
            </div>
          </div>
        </el-popover>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 1000,
      visible: false,
      con: "未签到",
      flag: false //单位切换开关
    };
  },
  methods: {
    enter: function() {
      this.count++;
      this.flag = !this.flag;
      if (this.flag == true) {
        this.con = "已签到";
      } else if (this.flag == false) {
        this.con = "未签到";
      }
    }
  }
};
</script>
<style scoped>
/* 头部 */
.common_header {
  width: 100%;
  line-height: 45px;
  display: flex;
  flex-direction: row;
  background-color: #fff;
}
.header_left {
  width: 100%;
  display: flex;
  padding-left: 40px;
}
.header_left .spana {
  display: block;
}
.header_left .spanb {
  display: block;
  padding-left: 10px;
}
.header_right {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  color: #9b9b9b;
}
.header_right .nav {
  position: relative;
  width: 100px;
}
.header_right .nav1 {
  position: relative;
  width: 100px;
}
.header_right .nav2 {
  width: 90px;
}
.header_right .nav3 {
  width: 90px;
}
.header_right .nav4 {
  width: 50px;
}
.header_right .nav5 {
  width: 50px;
  cursor: pointer;
}
/* 头部结束 */
.nav .img .imgs {
  position: absolute;
  height: 190px;
  width: 220px;
  margin: 10px -45px;
  border-radius: 10px;
  transform-origin: bottom;
  transform: scale(0);
  opacity: 0.9;
  background: #f5f5f5;
}
.nav .img .imgs .title {
  width: 220px;
  height: 14px;
  color: #4d4d4d;
  font-size: 12px;
}
.nav .img .imgs .images {
  width: 110px;
  height: 110px;
  margin-top: 40px;
}
.nav:hover .imgs {
  transform: scale(1);
}

.nav1 .img .imgs {
  position: absolute;
  height: 190px;
  width: 220px;
  margin: 10px -45px;
  border-radius: 10px;
  transform-origin: bottom;
  transform: scale(0);
  opacity: 0.9;
  background: #f5f5f5;
}
.nav1:hover .imgs {
  transform: scale(1);
}
.nav1 .img .imgs .title {
  width: 220px;
  height: 14px;
  color: #4d4d4d;
  font-size: 12px;
}
.nav1 .img .imgs .images {
  width: 110px;
  height: 110px;
  margin-top: 40px;
}
.nav .span1:hover {
  padding: 5px 8px 5px 8px;
  border: 1px solid #9b9b9b;
  border-radius: 5px;
}
.nav1 .span2:hover {
  padding: 5px 8px 5px 8px;
  border: 1px solid #9b9b9b;
  border-radius: 5px;
}
.nav2 .span3:hover {
  padding: 5px 8px 5px 8px;
  border: 1px solid #9b9b9b;
  border-radius: 5px;
}
.nav3 .span4:hover {
  padding: 5px 8px 5px 8px;
  border: 1px solid #9b9b9b;
  border-radius: 5px;
}
.nav4 .span5:hover {
  padding: 5px 8px 5px 8px;
  border: 1px solid #9b9b9b;
  border-radius: 5px;
}
.nav5 .span6:hover {
  padding: 5px 8px 5px 8px;
  border: 1px solid #9b9b9b;
  border-radius: 5px;
}
.signs {
  width: 150px;
  height: 177px;
  margin: 15px;
}
.signs .sign {
  width: 60px;
  height: 60px;
  margin: 5px 45px 5px 45px;
  overflow: hidden;
  border: 1px solid #fff;
  border-radius: 50%;
}
.signs .sign .sign_img {
  width: 60px;
  height: 60px;
}
.signs .sign_title {
  width: 150px;
  height: 20px;
  text-align: center;
  font-size: 15px;
  color: #9b9b9b;
  margin-top: 10px;
}
.sign_content {
  width: 150px;
  height: 30px;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}
.sign_subtitle {
  width: 150px;
  height: 30px;
  font-size: 13px;
  color: #9b9b9b;
  text-align: center;
  margin-top: 10px;
}
.sign_content_number {
  width: 75px;
  height: 30px;
  display: flex;
  flex-direction: row;
  line-height: 30px;
}
.sign_content_number .img {
  width: 20px;
  height: 20px;
}
.sign_content_number .money {
  width: 20px;
  margin-top: 5px;
}
.sign_content_number .click {
  width: auto;
  text-align: center;
  padding-left: 5px;
}
.state {
  width: 60px;
  cursor: pointer;
  text-align: center;
  line-height: 30px;
  color: white;
  font-weight: 700;
  margin-left: 5px;
}
.Sign_in {
  font-size: 14px;
  background: #0079fe;
  width: 60px;
  border-radius: 6px;
}
.Not_signed_in {
  font-size: 14px;
  background: #0079fe;
  width: 60px;
  border-radius: 6px;
}
</style>
<style>
.el-popover {
  position: absolute;
  background: #9b9b9b;
  min-width: 150px;
  border: 1px solid #9b9b9b;
  padding: 12px;
  z-index: 2000;
  color: #606266;
  line-height: 1.4;
  font-size: 14px;
  margin-left: -177px;
  opacity: 1;
}
</style>
