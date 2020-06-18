/* eslint-disable vue/require-v-for-key */
<template>
  <!-- 错题辅导error_counseling -->
  <div class="container">
    <Header />
    <div class="content">
      <div class="title">错题辅导</div>
      <div class="correction">
        <div class="shop" v-for="item in items" :key="item.id">
          <div class="subtitle">
            <span>{{ item.title }}</span>
          </div>
          <div class="errNumber">
            <span>{{ item.subtitle }}</span>
          </div>
          <div class="modify" @click="setParams">
            <span class="button">{{ item.modify }}</span>
          </div>
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
  name: "error_counseling",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "英语",
          subtitle: "待订正的错题数：3000",
          modify: "错题竞争"
        },
        {
          id: 2,
          title: "语文",
          subtitle: "待订正的错题数：3000",
          modify: "错题竞争"
        },
        {
          id: 3,
          title: "数学",
          subtitle: "待订正的错题数：3000",
          modify: "错题竞争"
        },
        {
          id: 4,
          title: "科学",
          subtitle: "待订正的错题数：3000",
          modify: "错题竞争"
        },
        {
          id: 5,
          title: "生物",
          subtitle: "待订正的错题数：3000",
          modify: "错题竞争"
        },
        {
          id: 6,
          title: "政治",
          subtitle: "待订正的错题数：3000",
          modify: "错题竞争"
        }
      ]
    };
  },
  methods: {
    setParams() {
      //点击跳转函数
      this.$router.push({
        path: "/errorContent", //跳转路由
        query: {
          name: "abc",
          age: "12",
          sex: "男"
        }
      });
    }
  },
  components: {
    // eslint-disable-next-line prettier/prettier
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
  background: #f1f1f1;
}
.header {
  background: #fff;
}
.content {
  width: 1100px;
  margin: 90px 50px 0 50px;
  height: 614px;
  text-align: center;
  border-radius: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.content .title {
  width: 1100px;
  height: 37px;
  line-height: 37px;
  font-size: 32px;
  padding-top: 66px;
  color: #4d4d4d;
  text-align: center;
}
.correction {
  width: 1000px;
  height: 390px;
  display: flex;
  flex-direction: row;
  margin-top: 54px;
  margin-left: 50px;
  margin-right: 50px;
  flex-flow: wrap;
  background: #fff;
}
.correction .shop {
  width: 300px;
  height: 170px;
  text-align: center;
  border-radius: 5px;
  background: #f5f5f5;
  margin: 15px;
}
.shop .subtitle {
  width: 300px;
  height: 27px;
  color: #4d4d4d;
  font-size: 24px;
  margin-top: 30px;
}
.shop .errNumber {
  width: 300px;
  height: 20px;
  color: #999999;
  font-weight: 400;
  margin-top: 10px;
}
.shop .modify {
  width: 300px;
  height: 40px;
  margin-top: 25px;
}
.button {
  width: 140px;
  height: 40px;
  line-height: 40px;
  display: block;
  border: 1px solid 0079fe;
  background-color: #0079fe;
  color: #fff;
  margin-left: 80px;
  border-radius: 4px;
}
.button:hover {
  background-color: #ccc;
  border: 1px solid #ccc;
}
</style>
