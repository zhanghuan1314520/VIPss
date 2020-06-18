<template>
  <div class="container">
    <Header />
    <div class="content">
      <div class="content_nav">
        <div class="Subject_left">
          <!-- 题目:单选题 -->
          <div v-if="progress < size" class="progress">
            <p class="stem">{{ quiz[progress].subject }}</p>
            <p class="title">单选题</p>
            <!-- 选项 -->
            <div class="row" v-for="(item, index) in quiz[progress].items" :key="index">
              <div class="row_box">
                <div class="letter">
                  <label for="form-check">
                    <input
                      type="radio"
                      class="box4"
                      name="item"
                      v-model="answer"
                      v-bind:value="itemsValue[index]"
                    />
                  </label>
                </div>
                <div class="box2">
                  <span class="box4">{{ itemsValue[index] }}</span>
                </div>
              </div>
              <div class="box3">{{ item }}</div>
            </div>
          </div>
          <!-- 按钮 -->
          <div class="next">
            <div class="box6">
              <el-button v-if="answer === ''" v-on:click="next()" type="primary" disabled>下一题</el-button>
              <el-button v-else v-on:click="next()" type="primary">下一题</el-button>
            </div>
          </div>
        </div>

        <div class="Subject_right">
          <div class="Popup">
            <span @click="centerDialogVisible = true">结束练习</span>
            <el-dialog :visible.sync="centerDialogVisible" :modal="false" top="35vh" width="31%">
              <div class="Tips">
                <div class="top">
                  <p class="p1">退出挑战则成绩无效</p>
                  <p class="p2">答完所有题目，确认交卷后才会获得评测结果</p>
                </div>
                <div class="btn">
                  <div class="btn1">
                    <el-button type="primary" @click="centerDialogVisible = false">继续挑战</el-button>
                    <router-link to="English">
                      <el-button type="primary" @click="centerDialogVisible = false">退出挑战</el-button>
                    </router-link>
                  </div>
                </div>
              </div>
            </el-dialog>
          </div>
          <div class="times">
            <div class="title_name">答题时间</div>
            <div class="title_time">
              <div ref="startTimer">00:00:00</div>
            </div>
          </div>
          <!-- 点击显示隐藏部分 -->
          <!-- 点击提交前的样式 -->
          <div class="hides" v-if="ok">
            <div class="hide">
              <div class="title">还剩8题未完成</div>
              <div @click="enter" id="dian" v-bind:class="{ you: flag, you2: !flag }">{{ con }}</div>
            </div>
          </div>
          <!-- 点击提交后的样式 -->
          <div class="hides" v-if="error">
            <div class="hide">
              <div class="line"></div>
              <div class="questions">
                <div class="correct">
                  <p class="number">6</p>
                  <p class="name">正确</p>
                </div>
                <div class="error">
                  <p class="number">4</p>
                  <p class="name">错误</p>
                </div>
              </div>
              <div class="imgs">
                <img class="img" src="../../src/assets/images/u81.png" alt />
              </div>
              <div class="tips">再多练练就可以上大学啦！</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="top">
        <div class="hill">
          <div>
            <img class="img3" src="../../src/assets/images/u36.png" />
          </div>
        </div>
        <div class="train">
          <img class="img1" src="../../src/assets/images/u3.png" />
          <img class="img2" src="../../src/assets/images/u4.png" />
          <img class="img2" src="../../src/assets/images/u4.png" />
          <img class="img2" src="../../src/assets/images/u4.png" />
          <img class="img2" src="../../src/assets/images/u4.png" />
          <img class="img2" src="../../src/assets/images/u4.png" />
          <img class="img2" src="../../src/assets/images/u4.png" />
          <img class="img1" src="../../src/assets/images/u6.png" />
          <div>
            <img class="img3" src="../../src/assets/images/u36.png" />
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="railway">
          <img class="img4" src="../../src/assets/images/u1.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/common/Header";
export default {
  name: "Subject",
  components: {
    Header: Header
  },
  props: {
    time: {
      type: Number
    }
  },
  data() {
    return {
      con: "交卷",
      flag: false,
      timer: "",
      hour: 0,
      minutes: 0,
      seconds: 0,
      cr: "",
      ok: true,
      error: false,
      centerDialogVisible: false,
      quiz: [
        {
          subject:
            "1.幼儿社会领域的学习与发展是在人际交往和社会环境的相互合作中进行的，在人际交往和社会适应过程中，幼儿进行社会学习的主要方式在人际交往和社会适应过程中在人际交往和社会适应过程中，幼儿进行社会学习的主要方式，幼儿进行社会学习的主要方式不包括()",
          items: [
            "尿路感染那个家伙也可以就立刻濮阳【了【怕官方你回来空间与健康今天来苦苦一片绿荫空间和统一计划一天具体业绩预亏颇有刚回家推荐喲i体育普票",
            "幼儿科学学习的核心是激发探究兴趣，体验探究过程，发展初步的探究能力",
            "成人要善于发现和保护幼儿的好奇心，充分利用自然和实际生活机会，引导幼儿通过观察、比较、操作、实验等方法，学习发现问题分析问题和解决问题",
            "应注重引导幼儿通过直接感知、亲身体验和实际操作进行科学学习"
          ],
          ans: "A"
        },
        {
          subject: "2.市值最高的公司",
          items: ["中国移动", "阿里巴巴", "可口可乐", "苹果"],
          ans: "D"
        },
        {
          subject: "3.儿童数概念的形成，经历的四个阶段分别是()。",
          items: [
            "口头数数一按数取物一给物说数一掌握数概念",
            "口头数数一按数取物一给物说数一掌握数概念",
            "口头数数一按数取物一给物说数一掌握数概念",
            "口头数数一按数取物一给物说数一掌握数概念"
          ],
          ans: "C"
        },
        {
          subject:
            "4.下列选项不属于《3－6岁儿童学习与发展指南》中健康领域目标的是()",
          items: [
            "情绪安定愉快",
            "具备基本的安全知识和自我保护能力",
            "手的动作灵活协调",
            "愿意与人交往"
          ],
          ans: "A"
        },
        {
          subject:
            "5.音乐欣赏作品的艺术形象应积极向上，有助于陶冶与丰富幼儿的心灵，激发幼儿热爱生活的愿望，熏陶幼儿健康的审美情趣，反应了幼儿音乐欣赏作品选择要求的()。",
          items: ["审美性", "教育性", "适宜性", "多样性"],
          ans: "A"
        },
        {
          subject:
            "6.菲菲在幼儿园绘画活动中用很长的波浪线画小草，王老师认为她画得不像，教她用三根小短线形成的三叉作为小草，这更像现实生活中的小草。王老师的做法()。",
          items: [
            "教会了菲菲正确画小草的方法",
            "尊重了菲菲自己的想法",
            "矫正了菲菲对小草的错误感知",
            "过于强调画画技能，损害了幼儿的绘画兴趣"
          ],
          ans: "A"
        },
        {
          subject:
            "7.王老师在组织“6”的分解、组成活动时，为幼儿提供了小棒、积木和圆片等学具供其操作，王老师的做法体现的学前教育原则是()。",
          items: ["长江", "尼罗河", "黄河", "京杭大运河"],
          ans: "A"
        },
        {
          subject: "8.最长的河",
          items: [
            "保教合一的原则",
            "以游戏为主要目的原则",
            "教育的活动性和直观性原则",
            "生活化和一日活动整体性原则"
          ],
          ans: "A"
        },
        {
          subject: "9.世界儿童文学制作的正式开端为()。",
          items: [
            "《鹅妈妈的故事》",
            "《海的女儿》",
            "《讲给孩子们听的故事》",
            "《丑小鸭》"
          ],
          ans: "C"
        },
        {
          subject: "10.幼儿园教育活动的设计和实施主要体现()。",
          items: [
            "趣味性、综合性和生活化",
            "趣味性、新颖性和生活化",
            "新颖性、综合性和儿童化",
            "新颖性、游戏性和儿童化"
          ],
          ans: "C"
        }
      ],
      progress: 0,
      itemsValue: ["A", "B", "C", "D"],
      answer: "",
      answers: new Map(),
      submitted: false,
      score: 0,
      multiAnswer: [],
      size: 10
    };
  },
  created() {
    this.timer = setInterval(this.startTimer, 1000);
  },
  methods: {
    startTimer() {
      this.seconds += 1;
      if (this.seconds >= 60) {
        this.seconds = 0;
        this.minutes = this.minutes + 1;
      }

      if (this.minutes >= 60) {
        this.minutes = 0;
        this.hour = this.hour + 1;
      }
      this.$refs.startTimer.innerHTML =
        (this.hour < 10 ? "0" + this.hour : this.hour) +
        ":" +
        (this.minutes < 10 ? "0" + this.minutes : this.minutes) +
        ":" +
        (this.seconds < 10 ? "0" + this.seconds : this.seconds);
      this.cr = this.seconds;
    },
    stop() {
      clearInterval(this.timer);
    },
    start() {
      this.timer = setInterval(this.startTimer, 1000);
    },
    //下一题
    next: function() {
      if (this.progress < this.size) {
        this.answers.set(this.progress, this.answer);
        this.progress++;
        console.log(this.answers);
        this.answer = "";
      } else if (this.progress < this.quiz.length) {
        this.answers.set(this.progress, this.multiAnser);
        this.progress++;
        console.log(this.answers);
        this.multiAnser = [];
      }
    },
    //提交答案
    submit: function() {},
    //返回
    back: function() {},
    enter: function() {
      this.flag = !this.flag;
      if (this.flag == true) {
        this.con = "继续挑战";
      } else if (this.flag == false) {
        this.con = "交卷";
      }
    }
  },
  centerDialogVisible() {
    this.$router.push({
      name: "English"
    });
  }
};
</script>

<style scoped>
.container {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
.content {
  width: 1000px;
  margin: 90px 100px 0 100px;
  height: auto;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.content .content_nav {
  display: flex;
  flex-direction: row;
  width: 1000px;
  height: 550px;
  overflow: hidden;
  border-radius: 10px;
}
.content .Subject_left {
  width: 800px;
  height: 550px;
  background-color: #fff;
}
.progress {
  width: 760px;
  height: auto;
  margin: 30px 20px;
}
.progress .stem {
  display: block;
  width: 760px;
  height: auto;
  line-height: 25px;
  font-size: 15px;
  font-weight: bold;
}
.row {
  display: flex;
  flex-direction: row;
  width: 760px;
  height: 45px;
  margin: 10px 0;
  line-height: 20px;
  font-size: 14px;
  justify-content: space-around;
  color: #444;
}
.progress .title {
  display: block;
  width: 760px;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  margin: 10px 0;
}
.row .letter {
  width: 30px;
  height: auto;
  margin: 15px 0;
}
.row .row_box {
  width: 50px;
  height: auto;
  display: flex;
  flex-direction: row;
}
.row .box2 {
  width: 20px;
  height: 20px;
  font-size: 15px;
  text-align: center;
  border-radius: 50%;
  margin: 15px 0;
  color: #f0f;
  background-color: #ccc;
}
.row .box3 {
  width: 700px;
  height: auto;
  margin: 15px 5px;
}
.box4 {
  width: 20px;
  height: 20px;
}
.box6 {
  position: relative;
  width: 50px;
  height: 40px;
  left: 620px;
}
.next {
  position: fixed;
  width: 800px;
  height: 40px;
  margin: 100px 0 10px 0;
}
.content .Subject_right {
  width: 200px;
  height: 550px;
  background-color: #333;
}
.content .Subject_right .Popup {
  width: 80px;
  height: 30px;
  line-height: 30px;
  font-size: 13px;
  color: #999;
  cursor: pointer;
  text-align: center;
  margin: 30px 0 30px 60px;
  background-color: #333333;
  border-radius: 40px;
  border: 1px solid #fff;
}
.content .Subject_right .times {
  width: 174px;
  height: 65px;
  margin: 0 13px 2px 13px;
}
.content .Subject_right .times .title_name {
  width: 174px;
  height: 17px;
  line-height: 17px;
  font-size: 15px;
  color: #fff;
  text-align: center;
}
.content .Subject_right .times .title_time {
  width: 118px;
  height: 45px;
  display: flex;
  line-height: 45px;
  font-size: 32px;
  color: #fff;
  font-weight: 700;
  margin: 3px 25px 0 20px;
}
.hides {
  width: 174px;
  height: 365px;
  display: flex;
  flex-direction: column;
  margin: 0 13px 2px 13px;
}
.hide {
  width: 174px;
  height: 82px;
}
.hide .title {
  width: 174px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  font-size: 15px;
  color: #d7d7d7;
}
.hide .line {
  text-align: center;
  color: #d7d7d7;
  border: 1px solid #d7d7d7;
  margin-top: 5px;
}
.hide .questions {
  width: 174px;
  height: 60px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
.hide .questions .correct {
  width: 25px;
  height: 60px;
  margin-left: 34px;
}
.hide .questions .error {
  width: 25px;
  height: 60px;
  margin-right: 25px;
  margin-left: 60px;
}
.hide .questions .number {
  height: 40px;
  line-height: 40px;
  font-size: 32px;
  color: #f3f3f3;
  font-weight: 700;
  text-align: center;
}
.hide .questions .name {
  width: 25px;
  height: 14px;
  text-align: center;
  font-size: 12px;
  color: #f3f3f3;
  padding-top: 7px;
}
.hide .imgs {
  width: 174px;
  height: 140px;
  margin-top: 10px;
  text-align: center;
}
.hide .imgs .img {
  width: 140px;
  height: 140px;
}
.hide .tips {
  width: 174px;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  margin: 25px 0 2px 0;
  color: #d7d7d7;
  text-align: center;
}
.hide .submit {
  width: 100px;
  height: 40px;
  line-height: 40px;
  margin: 25px 37px 25px 37px;
  border: 1px solid #fff;
  text-align: center;
  border-radius: 10px;
  font-size: 15px;
  color: #fff;
}
#dian {
  width: 100px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  margin: 250px 37px 25px 37px;
  border: 1px solid #fff;
  text-align: center;
  border-radius: 10px;
  font-size: 15px;
  color: #fff;
}
.footer {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  position: fixed;
  bottom: 0;
}
.footer .top {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
}
.footer .bottom {
  width: 100%;
  height: 20px;
  margin: 0 auto;
}
.footer .top .hill {
  height: 50px;
  display: flex;
  flex-direction: row;
}
.footer .top .train {
  height: 50px;
  display: flex;
 padding: 0 50px;
  flex-direction: row;
}
.footer .bottom .railway {
  width: 100px;
  height: 50px;
}
.img1 {
  width: 100px;
  height: 50px;
}
.img2 {
  width: 90px;
  height: 50px;
  z-index: -1;
}
.img3 {
  width: 200px;
  height: 50px;
}
.img4 {
  width: 1200px;
  height: 50px;
}
/* 弹窗 */
.Tips {
  width: 540px;
  height: 190px;
  z-index: -1;
  text-align: center;
}
.Tips .top {
  width: 540px;
  height: 150px;
  margin-top: 10px;
}
.Tips .btn {
  width: 540px;
  height: 35px;
}
.Tips .top .p1 {
  font-size: 25px;
  color: #ccc;
  margin-top: 20px;
}
.Tips .top .p2 {
  font-size: 15px;
  color: #ccc;
  margin-top: 30px;
}
.Tips .btn {
  width: 540px;
  height: 40px;
}
.btn1 {
  margin-left: 333px;
}
</style>
<style>
.btn1 .el-button {
  margin-left: 5px;
}
</style>
