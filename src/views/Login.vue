<template>
  <!--1、第一次登录的时候，前端调后端的登陆接口，发送用户名和密码
      2、后端收到请求，验证用户名和密码，验证成功，就给前端返回一个token
      3、前端拿到token，将token存储到localStorage和vuex中，并跳转路由页面
      4、前端每次跳转路由，就判断 localStroage 中有无 token ，没有就跳转到登录页面，有则跳转到对应路由页面
      5、每次调后端接口，都要在请求头中加token
      6、后端判断请求头中有无token，有token，就拿到token并验证token，验证成功就返回数据，验证失败（例如：token过期）就返回401，请求头中没有token也返回401
      7、如果前端拿到状态码为401，就清除token信息并跳转到登录页面
  -->
  <div class="register-wrapper">
    <div id="log_register">
      <div class="register">
        <p class="title">你好</p>
        <p class="title1">欢迎来到我们的世界！</p>
        <el-form
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          ref="ruleForm2"
          label-width="0"
          class="ruleForm"
        >
          <el-form-item prop="tel">
            <el-input
              v-model="ruleForm2.tel"
              auto-complete="off"
              maxlength="11"
              clearable
              placeholder="请输入手机号"
            ></el-input>
          </el-form-item>

          <el-form-item prop="pass">
            <el-input
              type="password"
              v-model="ruleForm2.pass"
              auto-complete="off"
              clearable
              maxlength="10"
              show-password
              placeholder="输入密码"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <router-link to="home">
              <el-button type="primary" style="width:50%;">登陆</el-button>
            </router-link>
          </el-form-item>
          <div class="login">
            <router-link to="register">
              <p class="login1" @click="gotoLogin">您还没有账户？</p>
            </router-link>
            <router-link to="changePassword">
              <p class="login2" @click="gotoLogin">忘记密码？</p>
            </router-link>
          </div>
        </el-form>
      </div>
    </div>
    <div class="login_footer">
      <div class="footer">
        <div class="Agreement">
          <router-link to="publicity">
            <span class="span1">教研员资质公示</span>
          </router-link>
          <el-divider direction="vertical"></el-divider>
          <router-link to="serviceAgreement">
            <span class="span2">服务协议</span>
          </router-link>
          <el-divider direction="vertical"></el-divider>
          <router-link to="userAgreement">
            <span class="span3">用户协议</span>
          </router-link>
        </div>
        <div class="Authentication">
          <p>© 2018-2019 杭州小步智学教育科技有限公司 客服电话：15505882806</p>
          <p class="sign">Copyright © 2018-2019 增值电信业务经营许可证： 浙B2-20190034</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    // <!--验证手机号是否合法-->
    let checkTel = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号码"));
      } else if (!this.checkMobile(value)) {
        callback(new Error("手机号码不合法"));
      } else {
        callback();
      }
    };
    // <!--验证密码-->
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      input: "",
      ruleForm2: {
        pass: "",
        checkPass: "",
        tel: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "change" }],
        // checkPass: [{ validator: validatePass2, trigger: "change" }],
        tel: [{ validator: checkTel, trigger: "change" }]
        // smscode: [{ validator: checkSmscode, trigger: "change" }]
      },
      // buttonText: "发送验证码",
      // isDisabled: false, // 是否禁止点击发送验证码按钮
      flag: true
    };
  },
  methods: {
    // <!--提交注册-->
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          setTimeout(() => {
            alert("注册成功");
          }, 400);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // <!--进入登录页-->
    gotoLogin() {
      this.$router.push({
        path: "/login"
      });
    },
    // 验证手机号
    checkMobile(str) {
      let re = /^1\d{10}$/;
      if (re.test(str)) {
        return true;
      } else {
        return false;
      }
    },
    // 验证密码
    validateField(str) {
      let re = /^1\d{10}$/;
      if (re.test(str)) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style scoped>
.register-wrapper {
  background: url("../assets/images/u2099.png");
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;
}
#log_register {
  width: 1200px;
  height: 300px;
  margin: 0 auto;
}
.register {
  max-width: 340px;
  height: 288px;
  margin: 100px;
  padding: 0 30px;
  position: relative;
  z-index: 9;
}
.title {
  font-size: 40px;
  font-weight: 500;
  color: #666;
}
.title1 {
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
  color: #666;
}
.ruleForm {
  margin-top: 15px;
}
.login {
  margin-top: 10px;
  font-size: 14px;
  line-height: 22px;
  color: #999;
  cursor: pointer;
  width: 340px;
  height: 16px;
  line-height: 16px;
  display: flex;
  flex-direction: row;
}
.login .login1 {
  width: 100px;
  display: block;
}
.login .login2 {
  width: 100px;
  display: block;
  margin-left: 60px;
}
.login1:hover {
  color: #0079fe;
}
.login2:hover {
  color: #0079fe;
}
.span1:hover {
  color: #0079fe;
}
.span2:hover {
  color: #0079fe;
}
.span3:hover {
  color: #0079fe;
}
.el-button--primary:focus {
  background-color: #0079fe;
  color: #fff;
  font-size: 15px;
}
.login_footer {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
.footer {
  max-width: 400px;
  height: 80px;
  margin: 100px;
  padding: 0 30px;
  position: relative;
  z-index: 9;
}
.footer .Agreement {
  width: 400px;
  height: 14px;
  line-height: 14px;
  font-size: 12px;
  color: #666;
}
.footer .Authentication {
  width: 400px;
  height: 38px;
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.footer .Authentication .sign {
  padding-top: 5px;
}
</style>
