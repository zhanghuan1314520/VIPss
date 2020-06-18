<template>
  <div class="container">
    <Header />
    <div class="content">
      <div class="title">
        <span>验证身份</span>
      </div>
      <div class="subtitle">为了保证您的账号安全，请验证身份，验证成功后进行下一步操作</div>
      <!-- 分割线 -->
      <div class="divider">
        <el-divider></el-divider>
      </div>
      <div class="table">
        <div class="VerificationCode">
          <div class="password">
            <el-form ref="form" :model="form" width="200px">
              <el-input style="width:235px;" placeholder="请输入手机号码" minlength="11" maxlength="11" clearable  v-model="form.name"></el-input>
            </el-form>
            <div class="button">
              <span>获取验证码</span>
            </div>
          </div>
          <div class="password2">
            <span class="Voice">收不到短信，试试语音验证码</span>
          </div>
          <router-link to="home">
            <div class="password3">下一步</div>
          </router-link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
export default {
  name: "ChangePassword",
  data() {
    return {
      form: {
        input: "",
        name: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  components: {
    Header: Header,
    Footer: Footer
  }
};
</script>

<style scoped>
.container {
  width: 1200px;
  height: 100%;
  margin: auto;
  background-color: #f1f1f1;
}
.header {
  background-color: #fff;
}
.content {
  width: 1100px;
  margin: 90px 50px 0 50px;
  height: 614px;
  text-align: center;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.content .title {
  width: 1100px;
  height: 37px;
  padding-top: 73px;
  font-size: 32px;
  color: #4d4d4d;
}
.subtitle {
  width: 1100px;
  height: 17px;
  font-size: 15px;
  color: #9999;
  margin-top: 20px;
}
.divider {
  width: 80%;
  margin-left: 10%;
  margin-top: 25px;
}
.VerificationCode {
  width: 417px;
  height: 176px;
  margin: 0 auto;
  margin-top: 130px;
}
.VerificationCode .password {
  width: 410px;
  height: 40px;
  display: flex;
  flex-direction: row;
}
.VerificationCode .password .input {
  display: block;
}
.VerificationCode .password .button {
  margin-left: 25px;
  width: 150px;
  height: 40px;
  line-height: 40px;
  display: block;
  text-align: center;
  border-radius: 5px;
  background-color: #0079fe;
  font-size: 15px;
  color: #fff;
}
.VerificationCode .password2 {
  width: 417px;
  height: 14px;
  margin-top: 27px;
}
.VerificationCode .password2 .Voice {
  width: 182px;
  height: 19px;
  float: right;
  font-size: 14px;
  color: #797979;
  text-decoration: none;
}
.VerificationCode .password3 {
  width: 417px;
  height: 40px;
  margin-top: 53px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
  background-color: #0079fe;
  font-size: 15px;
  color: #fff;
}
</style>
