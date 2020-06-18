<template>
  <!-- 英语页面 -->
  <div class="container">
    <Header />
    <div class="header_title">
      <div class="left">
        <div class="Edition">
          <div class="Edition_left">
            <span class="span1">语文人教版五上（部编本）</span>
            <span class="span2">已练习课程数：36/50</span>
          </div>
          <div class="Edition_right">
            <span class="span3">切换课本</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="Calculation" v-for="result in results" :key="result.id">
          <div class="nav">
            <span class="time">{{ result.accuracy }}%</span>
            <span class="name">正确率</span>
          </div>
          <div class="nav2">
            <span class="time">{{ result.TotalFrequency }}</span>
            <span class="name">累计挑战次数</span>
          </div>
          <div class="nav3">
            <span class="time">{{ result.TotalDuration }}</span>
            <span class="name">累计挑战时长</span>
          </div>
          <div class="nav4">
            <span class="time">{{ result.AverageDuration }}</span>
            <span class="name">平均挑战时长</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 进度容器 -->
    <div class="Progress">
      <!-- 进度子容器   -->
      <div class="imgs">
        <span>
          <img class="Progress_img" src="../../src/assets/images/u41.png" alt />
        </span>
        <span>
          <div class="block">
            <span class="demonstration"></span>
            <el-progress :percentage="nuw" color="#8e71c7"></el-progress>
            <button @click="click">下一步</button>
          </div>
        </span>
      </div>
    </div>
    <div class="content">
      <!-- 左边内容部分 -->
      <div class="left">
        <div style="margin: 38px 15px;">
          <!-- 这里的标签名称要和main.js文件中定义的组件名称保持一致 -->
          <happy-scroll size="10" color="#ccc" resize left style="height:590px;">
            <!-- 内层盒子——内容区 -->
            <div class="con">
              <div class="Article_title" v-for="item in itema" :key="item.id">
                <p class="menu">{{ item.title1 }}</p>
                <p class="menu2">{{ item.subtitle1 }}</p>
                <p class="menu2">{{ item.subtitle2 }}</p>
                <p class="menu2">{{ item.subtitle3 }}</p>
                <p class="menu3">{{ item.lx }}</p>
              </div>
            </div>
          </happy-scroll>
        </div>
      </div>
      <div class="right">
        <div v-for="item in items" :key="item.id">
          <div class="title">
            <span class="serial_number">{{ item.blgchapter }}</span>
            <span class="subtitle">{{ item.Title }}</span>
          </div>
          <div class="sub-content" v-for="content in item.contents" :key="content.id">
            <div class="left_content">
              <span class="left_one">
                <img class="icon11" :src="content.BlgUrl" />
              </span>
              <span class="left_two">{{ content.SmallChapter }}</span>
            </div>
            <div class="right_content">
              <div class="times">
                <div class="sorts">
                  <span class="time">{{ content.TotalFrequency }}</span>
                  <span class="name">累计挑战次数</span>
                </div>
                <div class="sorts">
                  <span class="time">{{ content.TotalDuration }}</span>
                  <span class="name">累计挑战时长</span>
                </div>
                <div class="sorts">
                  <span class="time">{{ content.AverageDuration }}</span>
                  <span class="name">平均挑战时长</span>
                </div>
                <div class="sorts">
                  <span class="time">
                    <i class="iconfont icon-shijian"></i>
                  </span>
                  <span class="name">21小时前挑战</span>
                </div>
                <div class="sorts">
                  <span @click="look" class="time">
                    <i class="iconfont icon-tongji"></i>
                  </span>
                  <span class="name">查看统计</span>
                </div>
                <div class="sorts">
                  <span class="time">
                    <i @click="dialogTableVisible = true" class="iconfont icon-bianji"></i>
                  </span>
                  <span class="name">观师课堂</span>

                  <el-dialog
                    :visible.sync="dialogTableVisible"
                    :modal="false"
                    top="20vh"
                    width="40%"
                  >
                    <div class="video">
                      <div class="Classroom">VIP观师课堂</div>
                      <div class="chapters">
                        <div class="chapter">
                          <div class="chapter1">
                            <p>待定系数法求二次函数的解析式苟富贵hi让他hi天涯空间hi它具有</p>
                          </div>
                          <div class="chapter2">
                            <li>
                              <p>待定系数法求二次函数的解析式苟富贵hi让他hi天涯空间hi它具有</p>
                            </li>
                          </div>
                        </div>
                        <div class="watchs">
                          <div class="watch">
                            <video
                              src="https://lmp4.vjshi.com/2019-12-12/948ffc4631982a1e67a96552dd3a17c4.mp4?v=nizhuanrennizhuan"
                              controls="controls"
                              loop
                              width="525"
                              height="297"
                            ></video>
                          </div>
                          <div class="topic">待定系数法求二次函数的解析式</div>
                        </div>
                      </div>
                    </div>
                  </el-dialog>
                </div>
              </div>
              <div class="small">
                <span class="img">
                  <img class="icon12" :src="content.SmallUrl1" />
                </span>
                <span class="img">
                  <img class="icon12" :src="content.SmallUrl2" />
                </span>
                <span class="img">
                  <img class="icon12" :src="content.SmallUrl3" />
                </span>
                <span class="img">
                  <img class="icon12" :src="content.SmallUrl4" />
                </span>
                <span class="img">
                  <img class="icon12" :src="content.SmallUrl5" />
                </span>
                <div class="Challenge">
                  <router-link to="subject">
                    <span class="Challenge1">挑战</span>
                  </router-link>
                </div>
              </div>
            </div>
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
  name: "English",
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      results: [
        {
          accuracy: "90",
          TotalFrequency: "911",
          TotalDuration: "23:45:00",
          AverageDuration: "12:34:09"
        }
      ],
      itema: [
        {
          title1: "2.2 简单事件的概率",
          subtitle1: "2.2.1简单事件的概率（1)",
          subtitle2: "2.2.2简单事件的概率（2)",
          subtitle3: "2.2.3简单事件的概率（3)",
          lx: "课程复习"
        },
        {
          title1: "2.2 简单事件的概率",
          subtitle1: "2.2.1简单事件的概率（1)",
          subtitle2: "2.2.2简单事件的概率（2)",
          subtitle3: "2.2.3简单事件的概率（3)",
          lx: "课程复习"
        },
        {
          title1: "2.2 简单事件的概率",
          subtitle1: "2.2.1简单事件的概率（1)",
          subtitle2: "2.2.2简单事件的概率（2)",
          subtitle3: "2.2.3简单事件的概率（3)",
          lx: "课程复习"
        },
        {
          title1: "2.2 简单事件的概率",
          subtitle1: "2.2.1简单事件的概率（1)",
          subtitle2: "2.2.2简单事件的概率（2)",
          subtitle3: "2.2.3简单事件的概率（3)",
          lx: "课程复习"
        },
        {
          title1: "2.2 简单事件的概率",
          subtitle1: "2.2.1简单事件的概率（1)",
          subtitle2: "2.2.2简单事件的概率（2)",
          subtitle3: "2.2.3简单事件的概率（3)",
          lx: "课程复习"
        }
      ],
      nuw: 0,
      items: [
        {
          blgchapter: "1.1", //大章节
          Title: "二次函数", //标题
          contents: [
            {
              BlgUrl: require("../../src/assets/images/ico11.png"),
              SmallChapter: "1.1.1二次函的图像(1)", //小章节
              TotalFrequency: "911", //累计挑战次数
              TotalDuration: "54:20:50", //累计挑战时长
              AverageDuration: "00:50:30", //平均挑战时长
              SmallUrl1: require("../../src/assets/images/u53.png"),
              SmallUrl2: require("../../src/assets/images/u51.png"),
              SmallUrl3: require("../../src/assets/images/u52.png"),
              SmallUrl4: require("../../src/assets/images/u54.png"),
              SmallUrl5: require("../../src/assets/images/u55.png")
            }
          ]
        },
        {
          blgchapter: "1.1", //大章节
          Title: "二次函数", //标题
          contents: [
            {
              BlgUrl: require("../../src/assets/images/ico11.png"),
              SmallChapter: "二次函数的应用", //小章节
              TotalFrequency: "911", //累计挑战次数
              TotalDuration: "54:20:50", //累计挑战时长
              AverageDuration: "00:50:30", //平均挑战时长
              SmallUrl1: require("../../src/assets/images/u53.png"),
              SmallUrl2: require("../../src/assets/images/u51.png"),
              SmallUrl3: require("../../src/assets/images/u52.png"),
              SmallUrl4: require("../../src/assets/images/u54.png"),
              SmallUrl5: require("../../src/assets/images/u55.png")
            }
          ]
        },
        {
          blgchapter: "1.2", //大章节
          Title: "二次函数", //标题
          contents: [
            {
              BlgUrl: require("../../src/assets/images/u70.png"),
              SmallChapter: "1.1.1二次函的图像", //小章节
              TotalFrequency: "911", //累计挑战次数
              TotalDuration: "54:20:50", //累计挑战时长
              AverageDuration: "00:50:30", //平均挑战时长
              SmallUrl1: require("../../src/assets/images/u53.png"),
              SmallUrl2: require("../../src/assets/images/u64.png"),
              SmallUrl3: require("../../src/assets/images/u52.png"),
              SmallUrl4: require("../../src/assets/images/u67.png"),
              SmallUrl5: require("../../src/assets/images/u68.png")
            },
            {
              BlgUrl: require("../../src/assets/images/u80.png"),
              SmallChapter: "1.1.1二次函的图像", //小章节
              TotalFrequency: "911", //累计挑战次数
              TotalDuration: "54:20:50", //累计挑战时长
              AverageDuration: "00:50:30", //平均挑战时长
              SmallUrl1: require("../../src/assets/images/u53.png"),
              SmallUrl2: require("../../src/assets/images/u64.png"),
              SmallUrl3: require("../../src/assets/images/u52.png"),
              SmallUrl4: require("../../src/assets/images/u67.png"),
              SmallUrl5: require("../../src/assets/images/u68.png")
            },
            {
              BlgUrl: require("../../src/assets/images/u89.png"),
              SmallChapter: "1.1.1二次函的图像", //小章节
              TotalFrequency: "911", //累计挑战次数
              TotalDuration: "54:20:50", //累计挑战时长
              AverageDuration: "00:50:30", //平均挑战时长
              SmallUrl1: require("../../src/assets/images/u53.png"),
              SmallUrl2: require("../../src/assets/images/u64.png"),
              SmallUrl3: require("../../src/assets/images/u52.png"),
              SmallUrl4: require("../../src/assets/images/u67.png"),
              SmallUrl5: require("../../src/assets/images/u68.png")
            },
            {
              BlgUrl: require("../../src/assets/images/u80.png"),
              SmallChapter: "1.1.1二次函的图像", //小章节
              TotalFrequency: "911", //累计挑战次数
              TotalDuration: "54:20:50", //累计挑战时长
              AverageDuration: "00:50:30", //平均挑战时长
              SmallUrl1: require("../../src/assets/images/u53.png"),
              SmallUrl2: require("../../src/assets/images/u64.png"),
              SmallUrl3: require("../../src/assets/images/u52.png"),
              SmallUrl4: require("../../src/assets/images/u67.png"),
              SmallUrl5: require("../../src/assets/images/u68.png")
            }
          ]
        },
        {
          blgchapter: "1.1", //大章节
          Title: "二次函数", //标题
          contents: [
            {
              BlgUrl: require("../../src/assets/images/u111.png"),
              SmallChapter: "1.1.1二次函的图像", //小章节
              TotalFrequency: "911", //累计挑战次数
              TotalDuration: "54:20:50", //累计挑战时长
              AverageDuration: "00:50:30", //平均挑战时长
              SmallUrl1: require("../../src/assets/images/u107.png"),
              SmallUrl2: require("../../src/assets/images/u64.png"),
              SmallUrl3: require("../../src/assets/images/u65.png"),
              SmallUrl4: require("../../src/assets/images/u67.png"),
              SmallUrl5: require("../../src/assets/images/u68.png")
            },
            {
              BlgUrl: require("../../src/assets/images/u111.png"),
              SmallChapter: "1.1.2二次函的图像", //小章节
              TotalFrequency: "911", //累计挑战次数
              TotalDuration: "54:20:50", //累计挑战时长
              AverageDuration: "00:50:30", //平均挑战时长
              SmallUrl1: require("../../src/assets/images/u107.png"),
              SmallUrl2: require("../../src/assets/images/u64.png"),
              SmallUrl3: require("../../src/assets/images/u65.png"),
              SmallUrl4: require("../../src/assets/images/u67.png"),
              SmallUrl5: require("../../src/assets/images/u68.png")
            },
            {
              BlgUrl: require("../../src/assets/images/u111.png"),
              SmallChapter: "1.1.3二次函的图像", //小章节
              TotalFrequency: "911", //累计挑战次数
              TotalDuration: "54:20:50", //累计挑战时长
              AverageDuration: "00:50:30", //平均挑战时长
              SmallUrl1: require("../../src/assets/images/u107.png"),
              SmallUrl2: require("../../src/assets/images/u64.png"),
              SmallUrl3: require("../../src/assets/images/u65.png"),
              SmallUrl4: require("../../src/assets/images/u67.png"),
              SmallUrl5: require("../../src/assets/images/u68.png")
            },
            {
              BlgUrl: require("../../src/assets/images/u111.png"),
              SmallChapter: "1.1.4二次函的图像", //小章节
              TotalFrequency: "911", //累计挑战次数
              TotalDuration: "54:20:50", //累计挑战时长
              AverageDuration: "00:50:30", //平均挑战时长
              SmallUrl1: require("../../src/assets/images/u107.png"),
              SmallUrl2: require("../../src/assets/images/u64.png"),
              SmallUrl3: require("../../src/assets/images/u65.png"),
              SmallUrl4: require("../../src/assets/images/u67.png"),
              SmallUrl5: require("../../src/assets/images/u68.png")
            }
          ]
        }
      ]
    };
  },
  methods: {
    click() {
      //定义定时器开始时间为0
      var progressnuw = 0; //顶一个定时器
      var timer = setInterval(() => {
        //变量一直++
        progressnuw++; //清楚定时器
        if (progressnuw >= 100) {
          clearInterval(timer);
        } //获取重新赋值
        this.nuw = progressnuw;
      }, 30);
    },
    look() {
      this.$router.push({
        name: "ViewStatistics"
      });
    }
  },
  components: {
    Header: Header,
    Footer: Footer
  }
};
</script>

<style>
body {
  background-color: #f1f1f1;
}
.icon11 {
  width: 80px;
  height: 100px;
}
.container {
  width: 1200px;
  height: 100%;
  margin: auto;
  background-color: #f1f1f1;
}
.header_title {
  width: 1200px;
  height: 220px;
  display: flex;
  background-color: #333;
  flex-direction: row;
}
.header_title .left {
  width: 495px;
  height: 62px;
  margin-left: 100px;
  margin-top: 69px;
}
.header_title .left .Edition {
  width: 370px;
  height: 62px;
  display: flex;
  flex-direction: row;
}
.header_title .left .Edition .Edition_left {
  width: 288px;
  height: 62px;
}
.header_title .left .Edition .Edition_left .span1 {
  width: 288px;
  height: 30px;
  display: block;
  padding: 5px 0 5px 5px;
  font-size: 24px;
  font-weight: 600;
  color: #fff;
}
.header_title .left .Edition .Edition_left .span2 {
  width: 288px;
  height: 2 0px;
  display: block;
  padding-left: 5px;
  font-size: 15px;
  font-weight: 400;
  color: #fff;
}
.header_title .left .Edition .Edition_right {
  width: 80px;
  height: 62px;
}
.header_title .left .Edition .Edition_right .span3 {
  width: 80px;
  height: 28px;
  display: block;
  line-height: 28px;
  font-size: 15px;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  background-color: #0079fe;
}
.header_title .right {
  width: 495px;
  height: 73px;
  text-align: center;
  margin-top: 69px;
}
.header_title .right .Calculation {
  width: 566px;
  height: 73px;
  display: flex;
  flex-direction: row;
}
.header_title .right .Calculation .nav {
  width: 84px;
  height: 73px;
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;
  border-radius: 5px;
}
.header_title .right .Calculation .nav2 {
  width: 84px;
  height: 73px;
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  border: 1px solid #fff;
  border-radius: 5px;
}
.header_title .right .Calculation .nav3 {
  width: 158px;
  height: 73px;
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  border: 1px solid #fff;
  border-radius: 5px;
}
.header_title .right .Calculation .nav4 {
  width: 158px;
  height: 73px;
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  border: 1px solid #fff;
  border-radius: 5px;
}
.header_title .right .Calculation .nav .time {
  width: 84px;
  height: 40px;
  display: block;
  text-align: center;
  padding-top: 10px;
  font-size: 32px;
  color: #fff;
  font-weight: bold;
}
.header_title .right .Calculation .nav .name {
  width: 84px;
  height: 16px;
  display: block;
  text-align: center;
  font-size: 12px;
  color: #fff;
}
.header_title .right .Calculation .nav2 .time {
  width: 84px;
  height: 40px;
  display: block;
  text-align: center;
  padding-top: 10px;
  font-size: 32px;
  color: #fff;
  font-weight: bold;
}
.header_title .right .Calculation .nav2 .name {
  width: 84px;
  height: 16px;
  display: block;
  text-align: center;
  font-size: 12px;
  color: #fff;
}
.header_title .right .Calculation .nav3 .time {
  width: 158px;
  height: 40px;
  display: block;
  text-align: center;
  padding-top: 10px;
  font-size: 32px;
  color: #fff;
  font-weight: bold;
}
.header_title .right .Calculation .nav3 .name {
  width: 158px;
  height: 16px;
  display: block;
  text-align: center;
  font-size: 12px;
  color: #fff;
}
.header_title .right .Calculation .nav4 .time {
  width: 158px;
  height: 40px;
  display: block;
  text-align: center;
  padding-top: 10px;
  font-size: 32px;
  color: #fff;
  font-weight: bold;
}
.header_title .right .Calculation .nav4 .name {
  width: 158px;
  height: 16px;
  display: block;
  text-align: center;
  font-size: 12px;
  color: #fff;
}
.Progress {
  width: 1200px;
  height: 83px;
  margin-top: -70px;
}
.Progress .imgs {
  width: 810px;
  height: 83px;
  margin-left: 212px;
}
.Progress_img {
  width: 56px;
  height: 70px;
}
.header_times {
  width: 1200px;
  height: 60px;
  margin-top: 30px;
}
.header_times .header_time {
  width: 628px;
  height: 60px;
  display: flex;
  flex-direction: row;
  margin-left: 288px;
}
.content {
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 80px;
}
.content .left {
  width: 215px;
  height: 665px;
  margin-left: 50px;
  border-radius: 10px;
  background-color: #ffffff;
}
.con {
  width: 154px;
  padding-left: 30px;
  height: 590px;
}
.con .menu {
  font-size: 13px;
  color: #000;
  font-weight: 700;
}
.con .menu2 {
  font-size: 11px;
  color: #4d4d4d;
  padding-top: 10px;
}
.con .menu3 {
  font-size: 12px;
  color: #4d4d4d;
  padding-top: 10px;
}
.con .Article_title {
  padding-bottom: 26px;
}
.content .right {
  width: 870px;
  height: auto;
  margin-left: 20px;
  border-radius: 10px;
  margin-right: 50px;
  border: 1px solid #fff;
  background-color: #fff;
  padding-bottom: 80px;
}
.right .title {
  width: 780px;
  height: 26px;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-left: 45px;
  padding-bottom: 22px;
  border-bottom: 1px solid #6666;
}
.serial_number {
  width: 44px;
  height: 26px;
  line-height: 26px;
  border: 1px solid #409aff;
  display: block;
  color: #fff;
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  border-radius: 5px;
  background-color: #0079fe;
}
.subtitle {
  width: 300px;
  height: 20px;
  overflow: hidden;
  line-height: 20px;
  padding-left: 10px;
  color: #4d4d4d;
  font-size: 18px;
  margin-top: 4px;
  display: block;
}
.sub-content {
  width: 780px;
  height: 110px;
  display: flex;
  flex-direction: row;
  margin-left: 45px;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #6666;
}
.left_content {
  width: 270px;
  height: 111px;
  display: flex;
}
.right_content {
  width: 547px;
  height: 110px;
  margin-left: 5px;
}
.left_content .left_one {
  width: 80px;
  height: 110px;
  display: block;
}
.left_content .left_two {
  width: 150px;
  height: 111px;
  line-height: 111px;
  display: block;
  font-size: 15px;
  color: #000;
}
.right_content .times {
  width: 570px;
  height: 43px;
  display: flex;
  flex-direction: row;
}
.right_content .small {
  width: 525px;
  height: 55px;
  display: flex;
  margin-top: 13px;
}
.right_content .times .sorts {
  width: 95px;
  height: 43px;
}
.right_content .times .sorts .img2 {
  width: 23px;
  height: 18px;
}
.right_content .times .sorts .time {
  width: 95px;
  height: 28px;
  text-align: center;
  font-size: 20px;
  color: #9b9b9b;
  display: block;
}
.right_content .times .sorts .name {
  width: 95px;
  height: 14px;
  font-size: 12px;
  text-align: center;
  color: #9b9b9b;
  line-height: 14px;
  display: block;
}
.right_content .small .img {
  width: 55px;
  height: 55px;
  padding-left: 20px;
}

.right_content .small .Challenge {
  width: 105px;
  height: 35px;
  text-align: center;
  border: 1px solid #7cbaff;
  margin-top: 10px;
  line-height: 35px;
  border-radius: 5px;
  background-color: #0079fe;
  margin-left: 40px;
  margin-bottom: 0;
  margin-right: 0;
}
.right_content .small .Challenge:hover {
  background-color: #81d3f8;
  border: 1px solid #81d3f8;
}
.right_content .small .Challenge1 {
  color: #fff;
  font-size: 20px;
}
.right_content .small .icon12 {
  width: 55px;
  height: 55px;
}

.iconfont:hover {
  color: #0079fe;
}

/* video */
.video {
  width: 706px;
  height: 380px;
  display: flex;
  flex-direction: column;
}
.video .Classroom {
  width: 706px;
  height: 40px;
  line-height: 40px;
  font-weight: 600;
  color: #0079fe;
  font-size: 20px;
}
.chapters {
  width: 706px;
  height: 350px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
.watchs {
  width: 525px;
  height: 336px;
  display: flex;
  flex-direction: column;
  margin-left: 19px;
}
.chapter {
  width: 162px;
  height: auto;
}
.chapter .chapter1 {
  width: 162px;
  height: 10px;
  line-height: 18px;
  color: #ccc;
  font-size: 15px;
  justify-content: space-between;
}
.chapter .chapter2 {
  width: 162px;
  height: 10px;
  line-height: 18px;
  color: #ccc;
  font-size: 15px;
  margin-top: 65px;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  padding-top: 5px;
}
.watchs .watch {
  width: 525px;
  height: 300px;
  border-radius: 15px;
  overflow: hidden;
}
.topic {
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 15px;
  color: #ccc;
  margin-top: 15px;
}
</style>
