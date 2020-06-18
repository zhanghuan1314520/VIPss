<template>
  <div class="container">
    <Header />
    <div class="content">
      <div class="register">
        <div class="a1">
          <div class="b1">这是做任务(语文)的页面</div>
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
  name: "ChineseTasks",
  data() {
    return {};
  },
  components: {
    Header: Header,
    Footer: Footer
  }
};
</script>

<style scoped>
body {
  background: #f1f1f1;
}
.container {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
.content {
  width: 1200px;
  height: auto;
  margin-top: 173px;
}
.register {
  width: 1000px;
  height: auto;
  margin: 0 100px 0 100px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: aqua;
  border-radius: 10px;
  border: 1px solid #f70a0a;
  padding-bottom: 50px;
}
.a1 {
  width: 800px;
  height: 300px;
  background: rgb(201, 114, 114);
  margin: 50px 100px;
}
.b1 {
  height: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: black;
  text-shadow: 5px 5px #ffff;
}
</style>
