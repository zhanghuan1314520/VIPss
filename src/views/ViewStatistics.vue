<template>
  <!-- 查看统计 -->
  <div class="container">
    <Header />
    <div class="content">
      <div class="tab">
        <div class="title">1.1.1二次函数</div>
        <div class="selection">
          <div class="selection_one" @click="showNewGoodsTab">
            <span>练习情况</span>
          </div>
          <div class="selection_two" @click="showOftenRouteTab">
            <span>易错知识点</span>
          </div>
        </div>
        <div class="times" v-if="new_goods_show">
          <div class="practice">
            <div class="total" v-for="item in items" :key="item.id">
              <span class="time">{{ item.time }}</span>
              <span class="name">{{ item.name }}</span>
            </div>
          </div>
          <div class="data_list">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column
                prop="evaluate"
                align="center"
                label="评价"
                width="250"
              ></el-table-column>
              <el-table-column
                prop="duration"
                align="center"
                label="挑战时长"
                width="250"
              ></el-table-column>
              <el-table-column
                prop="correct"
                align="center"
                label="正确率"
                width="250"
              ></el-table-column>
              <el-table-column
                prop="time"
                align="center"
                label="挑战时间"
                width="250"
              ></el-table-column>
            </el-table>
          </div>
        </div>
        <div class="errors" v-if="often_route_show">
          <div class="error">
            <img src="../../src/assets/images/icon1.png" alt />
            <P>暂无数据</P>
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
  name: "ViewStatistics",
  data() {
    return {
      index: 0,
      new_goods_show: true,
      often_route_show: false,
      items: [
        {
          time: 911,
          name: "总挑战次数"
        },
        {
          time: "54:37:35",
          name: "总挑战时长"
        },
        {
          time: "91%",
          name: "正确率"
        },
        {
          time: "00:03:36",
          name: "平均挑战时长"
        }
      ],
      tableData: [
        {
          evaluate: "1榜上无名",
          duration: "21:30:52",
          correct: "90%",
          time: "2020-02-14   21:30:52"
        },
        {
          evaluate: "2榜上无名",
          duration: "21:30:52",
          correct: "90%",
          time: "2020-02-14   21:30:52"
        },
        {
          evaluate: "3榜上无名",
          duration: "21:30:52",
          correct: "90%",
          time: "2020-02-14   21:30:52"
        },
        {
          evaluate: "4榜上无名",
          duration: "21:30:52",
          correct: "90%",
          time: "2020-02-14   21:30:52"
        }
      ]
    };
  },
  components: {
    Header: Header,
    Footer: Footer
  },
  methods: {
    showNewGoodsTab: function() {
      this.new_goods_show = true;
      this.often_route_show = false;
    },
    showOftenRouteTab: function() {
      this.new_goods_show = false;
      this.often_route_show = true;
    }
  }
};
</script>

<style scoped>
.container {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
.header {
  width: 1665px;
  margin-left: -223px;
  background-color: #fff;
}
.content {
  width: 1100px;
  margin: 90px 50px 0 50px;
  height: auto;
  text-align: center;
  border-radius: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
}
.tab {
  width: 1000px;
  margin: 0 50px;
}
.tab .title {
  width: 1000px;
  height: 37px;
  line-height: 37px;
  font-size: 32px;
  color: #4d4d4d;
  text-align: center;
  padding-top: 65px;
}
.tab .selection {
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-top: 72px;
  width: 1000px;
  height: 40px;
  padding-bottom: 2px;
  border-bottom: 1px solid #ccc;
  line-height: 40px;
  font-size: 15px;
  /* 小手 */
  cursor: pointer;
  color: #fff;
}
.tab .selection_one {
  width: 200px;
  height: 40px;
  background-color: #73b5ff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.tab .selection_two {
  width: 200px;
  height: 40px;
  background-color: #73b5ff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-left: 20px;
}
.tab .times {
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: auto;
  margin-top: 10px;
}
.practice {
  display: flex;
  flex-direction: row;
  width: 1000px;
  height: 120px;
}
.total {
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 120px;
  text-align: center;
}
.total .time {
  font-size: 32px;
  color: #0079fe;
  font-weight: bold;
  margin-top: 30px;
}
.total .name {
  font-size: 14px;
  color: #666666;
  margin-top: 20px;
}
.data_list {
  width: 1001px;
  height: auto;

}
.errors {
  width: 1000px;
  height: auto;
  text-align: center;
  margin-top: 30px;
  padding-bottom: 50px;
}
.errors p {
  font-size: 20px;
  color: #ccc;
  padding-top: 10px;
}
</style>
