<template>
  <!-- 查看历史记录-->
  <div class="container">
    <Header />
    <div class="content">
      <div class="table">
        <div class="title">查看历史任务</div>
        <div class="tabs" v-for="item in items" :key="item.id">
          <el-collapse accordion>
            <el-collapse-item>
              <template slot="title">
                <div class="Dropdown">
                  <div class="title1">布置时间：{{ item.start_time }}</div>
                  <div class="title2">学习时长：{{ item.learn_time }}</div>
                  <div class="title3">正确率：{{ item.Correct }}%</div>
                  <div class="title4">
                    <span class="title_1">未完成</span>
                    <span class="title4_ing">
                      <img
                        class="weixiao"
                        src="../../src/assets/images/weixiao.png"
                      />
                    </span>
                  </div>
                </div>
              </template>
              <div class="tasks" v-for="tab in item.tabs" :key="tab.id">
                <div class="task">
                  <div
                    class="task_content"
                    v-for="content in tab.contents"
                    :key="content.id"
                  >
                    <div class="menu">
                      <!-- 第一章 集合与函数概念 (数学人教A版必修1) -->
                      {{ content.title }}
                    </div>
                    <div class="menu2">
                      <div class="type">类型：{{ content.type }}</div>
                      <div class="target">目标：{{ content.target }}</div>
                    </div>
                    <div class="menu3">
                      <router-link to="Record">
                        <div class="nav">
                          <span class="span1">
                            <img class="nav_img" src="../../src/assets/images/icon13.png" />
                          </span>
                          <span class="span2">数据统计</span>
                        </div>
                      </router-link>
                      <router-link to="Practice">
                        <div class="nav1">
                          <span class="span1">
                            <img class="nav_img" src="../../src/assets/images/icon13.png" />
                          </span>
                          <span class="span2">练习记录</span>
                        </div>
                      </router-link>
                    </div>
                    <div class="menu4">已完成</div>
                  </div>
                  <div class="Survey">文任务评价：{{ tab.Comment }}</div>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
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
  name: "ViewimgHistory",
  data() {
    return {
      activeNames: ["1"],
      items: [
        {
          start_time: "2020-04-05 15:08",
          learn_time: "03:30:50",
          Correct: "85",
          tabs: [
            {
              contents: [
                {
                  title: "第一章 集合与函数概念 (数学人教A版必修1)",
                  type: "普通任务",
                  target: "清华北大"
                },
                {
                  title: "第一章 集合与函数概念 (数学人教A版必修1)",
                  type: "普通任务",
                  target: "清华北大"
                },
                {
                  title: "第一章 集合与函数概念 (数学人教A版必修1)",
                  type: "普通任务",
                  target: "清华北大"
                }
              ],
              Comment:
                "本次挑战了3个任务，获得最高评级为清华北大，累计挑战81分钟、训练120题，平均正确率为82%，任务目标达成率为33%，综合评定为C。任务完成得不,腹黑软接头i解耦都发给你推荐完成"
            }
          ]
        },
        {
          start_time: "2020-04-05 15:08",
          learn_time: "03:30:50",
          Correct: "85",
          tabs: [
            {
              contents: [
                {
                  title: "第一章 集合与函数概念 (数学人教A版必修1)",
                  type: "普通任务",
                  target: "清华北大"
                },
                {
                  title: "第一章 集合与函数概念 (数学人教A版必修1)",
                  type: "普通任务",
                  target: "清华北大"
                },
                {
                  title: "第一章 集合与函数概念 (数学人教A版必修1)",
                  type: "普通任务",
                  target: "清华北大"
                }
              ],
              Comment:
                "本次挑战了3个任务，获得最高评级为清华北大，累计挑战81分钟、训练120题，平均正确率为82%，任务目标达成率为33%，综合评定为C。任务完成得不,腹黑软接头i解耦都发给你推荐完成"
            }
          ]
        },
        {
          start_time: "2020-04-05 15:08",
          learn_time: "03:30:50",
          Correct: "85",
          tabs: [
            {
              contents: [
                {
                  title: "第一章 集合与函数概念 (数学人教A版必修1)",
                  type: "普通任务",
                  target: "清华北大"
                },
                {
                  title: "第一章 集合与函数概念 (数学人教A版必修1)",
                  type: "普通任务",
                  target: "清华北大"
                },
                {
                  title: "第一章 集合与函数概念 (数学人教A版必修1)",
                  type: "普通任务",
                  target: "清华北大"
                }
              ],
              Comment:
                "本次挑战了3个任务，获得最高评级为清华北大，累计挑战81分钟、训练120题，平均正确率为82%，任务目标达成率为33%，综合评定为C。任务完成得不,腹黑软接头i解耦都发给你推荐完成"
            }
          ]
        },
        {
          start_time: "2020-04-05 15:08",
          learn_time: "03:30:50",
          Correct: "85",
          tabs: [
            {
              contents: [
                {
                  title: "第一章 集合与函数概念 (数学人教A版必修1)",
                  type: "普通任务",
                  target: "清华北大"
                },
                {
                  title: "第一章 集合与函数概念 (数学人教A版必修1)",
                  type: "普通任务",
                  target: "清华北大"
                },
                {
                  title: "第一章 集合与函数概念 (数学人教A版必修1)",
                  type: "普通任务",
                  target: "清华北大"
                }
              ],
              Comment:
                "本次挑战了3个任务，获得最高评级为清华北大，累计挑战81分钟、训练120题，平均正确率为82%，任务目标达成率为33%，综合评定为C。任务完成得不,腹黑软接头i解耦都发给你推荐完成"
            }
          ]
        }
      ]
    };
  },
  components: {
    Header: Header,
    Footer: Footer
  },
  methods: {
    handleChange(val) {
      console.log(val);
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
  background-color: #fff;
}
.content {
  width: 1100px;
  margin: 90px 50px 0 50px;
  height: auto;
  text-align: center;
  padding-bottom: 30px;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.content .table {
  width: 1000px;
  height: auto;
  margin: 0 50px;
}
.content .title {
  width: 1000px;
  height: 37px;
  line-height: 37px;
  text-align: center;
  font-size: 32px;
  color: #4d4d4d;
  margin-top: 70px;
}
.tabs {
  width: 1000px;
  height: auto;
  margin-top: 20px;
}
.Dropdown {
  width: 1000px;
  height: 60px;
  display: flex;
  flex-direction: row;
  background-color: #0079fe;
  border-radius: 5px;
  line-height: 60px;
  font-size: 15px;
  color: #fff;
  font-weight: 600;
  text-align: center;
}
.Dropdown .title1 {
  width: 217px;
  margin-left: 20px;
}
.Dropdown .title2 {
  width: 140px;
  margin-left: 114px;
}
.Dropdown .title3 {
  width: 94px;
  margin-left: 160px;
}
.Dropdown .title4 {
  display: flex;
  flex-direction: row;
  width: 80px;
  margin-left: 115px;
}
.tasks {
  width: 1000px;
  height: auto;
}
.task {
  width: 950px;
  height: auto;
  margin: 0 30px 0 20px;
 background-color: #fff;
}
.task_content {
  width: 950px;
  height: 16px;
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  font-size: 12px;
  color: #9b9b9b;
}
.task_content .menu {
  width: 241px;
  height: 16px;
  line-height: 16px;
  line-height: 16px;
}
.task_content .menu2 {
  width: 184px;
  height: 16px;
  display: flex;
  flex-direction: row;
  line-height: 16px;
  margin-left: 90px;
}
.task_content .menu3 {
  width: 163px;
  height: 16px;
  display: flex;
  flex-direction: row;
  line-height: 16px;
  margin-left: 75px;
}
.task_content .menu4 {
  width: 37px;
  height: 16px;
  line-height: 16px;
  margin-left: 127px;
}
.Survey {
  width: 950px;
  height: auto;
  font-size: 12px;
  color: #333;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #ccc;
}
.type {
  display: block;
  width: 84px;
  height: 16px;
}
.target {
  display: block;
  width: 84px;
  height: 16px;
  margin-left: 16px;
}
.menu3 .nav {
  display: flex;
  flex-direction: row;
  width: 71px;
  height: 16px;
  line-height: 16px;
}
.menu3 .nav1 {
  display: flex;
  flex-direction: row;
  width: 71px;
  height: 16px;
  line-height: 16px;
  padding-left: 20px;
}
.menu3 .nav .span1 {
  display: flex;
  flex-direction: row;
  width: 18px;
  height: 16px;
}
.menu3 .nav .span2 {
  width: 48px;
  height: 16px;
  display: block;
  padding-left: 4px;
}
.menu3 .nav1 .span1 {
  display: block;
  width: 18px;
  height: 16px;
}
.menu3 .nav1 .span2 {
  display: block;
  width: 48px;
  height: 16px;
  padding-left: 4px;
}
.weixiao {
  width: 30px;
  height: 30px;
}
.title_1 {
  display: block;
}
.title4_ing {
  width: 30px;
  height: 30px;
  display: block;
  padding-left: 5px;
  padding-top: 8px;
}
.nav_img {
  width: 18px;
  height: 14px;
}
</style>
