<template>
  <div class="container">
    <Header />
    <div class="content">
      <div class="box">
        <div class="nav">
          <router-link to="english">
            <img class="img" src="../../src/assets/images/home_img7.png" />
          </router-link>
        </div>
        <div class="nav2">
          <router-link to="english">
            <img class="img" src="../../src/assets/images/home_img4.png" />
          </router-link>
        </div>
      </div>
      <div class="box2">
        <div class="nav3">
          <router-link to="english">
            <img class="img1" src="../../src/assets/images/home_img5.png" />
          </router-link>
        </div>
        <div class="nav4">
          <router-link to="english"></router-link>
          <img class="img1" src="../../src/assets/images/home_img9.png" />
        </div>
        <div class="nav5">
          <router-link to="english">
            <img class="img1" src="../../src/assets/images/home_img10.png" />
          </router-link>
        </div>
      </div>
      <div class="box3">
        <div class="nav6">
          <router-link to="english">
            <img class="img2" src="../../src/assets/images/home_img6.png" />
          </router-link>
        </div>
        <div class="nav7">
          <router-link to="english">
            <img class="img1" src="../../src/assets/images/home_img8.png" />
          </router-link>
        </div>
      </div>
      <div class="box4">
        <div class="nav8">
          <router-link to="english">
            <img class="img1" src="../../src/assets/images/home_img2.png" />
          </router-link>
        </div>
        <div class="nav9">
          <router-link to="english">
            <img class="img1" src="../../src/assets/images/home_img1.png" />
          </router-link>
        </div>
        <div class="nav10">
          <router-link to="english">
            <img class="img1" src="../../src/assets/images/home_img3.png" />
          </router-link>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-left">
        <div class="nav">
          <span class="footer-subject">错题辅导</span>
          <span class="footer-icon1">
            <router-link to="errorCounseling">
              <i class="iconfont icon-compasszhinanzhen"></i>
            </router-link>
          </span>
        </div>
        <div class="nav2">
          <span class="footer-subject">错题本</span>
          <span class="footer-icon1">
            <i @click="showModal = true" class="iconfont icon-cuowu"></i>
          </span>
          <div class="mask" v-if="showModal" @click="showModal = false"></div>
          <div class="pop1" v-if="showModal">
            <div class="echarts">
              <chart />
            </div>
          </div>
        </div>
      </div>
      <div class="footer-right">
        <div class="nav3">
          <span class="footer-icon1">
            <i @click="showModa2 = true" class="iconfont icon-iconcorrect"></i>
          </span>
          <span class="footer-subject1">我的任务</span>
          <div class="mask" v-if="showModa2" @click="showModa2 = false"></div>
          <div class="pop" v-if="showModa2">
            <div class="taskes">
              <happy-scroll size="8" resize right style="height:270px; width: 565px;">
                <div class="taske">
                  <div class="taske_left">
                    <div class="title">智能语文</div>
                    <div class="nav" v-for="item in Chinese" :key="item.id">
                      <router-link to="chineseTasks">
                        <div class="taske1">{{ item.taske }}</div>
                      </router-link>
                      <div class="taske2">{{ item.subtitle }}</div>
                    </div>
                  </div>

                  <div class="taske_right">
                    <div class="title">智能英语</div>
                    <div class="nav1" v-for="item in English" :key="item.id">
                      <router-link to="englishTasks">
                        <div class="taske1">{{ item.taske }}</div>
                      </router-link>
                      <div class="taske2">{{ item.subtitle }}</div>
                    </div>
                  </div>
                </div>
              </happy-scroll>
            </div>
          </div>
        </div>
        <div class="nav4">
          <span class="footer-icon1">
            <router-link to="viewingHistory">
              <i class="iconfont icon-lishiguiji"></i>
            </router-link>
          </span>
          <span class="footer-subject1">查看历史任务</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/common/Header";
import chart from "../components/chart/chart";
export default {
  name: "Home",
  data() {
    return {
      message: "页面加载于 " + new Date().toLocaleString(),
      showModal: false,
      showModa2: false,
      Chinese: [
        {
          taske: "做任务1",
          subtitle:
            "差之分毫，谬之千里。但是，有时我们总是差不多就行了。做事不严谨，得不到好的结果，"
        },
        {
          taske: "做任务2",
          subtitle:
            "差之分毫，谬之千里。但是，有时我们总是差不多就行了。做事不严谨，得不到好的结果，"
        }
      ],
      English: [
        {
          taske: "做任务1",
          subtitle:
            "Happiness is a way station between too much and too little."
        },
        {
          taske: "做任务2",
          subtitle:
            "Happiness is a way station between too much and too little."
        },
        {
          taske: "做任务3",
          subtitle:
            "Happiness is a way station between too much and too little."
        },
        {
          taske: "做任务4",
          subtitle:
            "Happiness is a way station between too much and too little."
        },
        {
          taske: "做任务5",
          subtitle:
            "Happiness is a way station between too much and too little."
        },
        {
          taske: "做任务6",
          subtitle:
            "Happiness is a way station between too much and too little."
        },
        {
          taske: "做任务7",
          subtitle:
            "Happiness is a way station between too much and too little."
        },
        {
          taske: "做任务8",
          subtitle:
            "Happiness is a way station between too much and too little."
        },
        {
          taske: "做任务9",
          subtitle:
            "Happiness is a way station between too much and too little."
        },
        {
          taske: "做任务1",
          subtitle:
            "Happiness is a way station between too much and too little."
        },
        {
          taske: "做任务1",
          subtitle:
            "Happiness is a way station between too much and too little."
        },
        {
          taske: "做任务1",
          subtitle:
            "Happiness is a way station between too much and too little."
        },
        {
          taske: "做任务1",
          subtitle:
            "Happiness is a way station between too much and too little."
        }
      ]
    };
  },
  components: {
    Header: Header,
    chart: chart
  }
};
</script>

<style scoped>
.container {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
/* 中间开始 */
.content {
  width: 1000px;
  margin: 100px 100px 0 100px;
  height: 580px;
}
.content .box {
  width: 230px;
  height: 580px;
}
.content .box .nav {
  width: 230px;
  height: 282px;
}
.content .box .nav2 {
  width: 230px;
  height: 282px;
  margin-top: 17px;
}
.content .box2 {
  width: 230px;
  height: 580px;
  margin-left: 17px;
}
.content .box2 .nav3 {
  width: 230px;
  height: 182px;
}
.content .box2 .nav4 {
  width: 230px;
  height: 182px;
  margin-top: 17px;
}
.content .box2 .nav5 {
  width: 230px;
  height: 182px;
  margin-top: 17px;
}
.content .box3 {
  width: 230px;
  height: 580px;
  margin-left: 17px;
}
.content .box3 .nav6 {
  width: 230px;
  height: 380px;
}
.content .box3 .nav7 {
  width: 230px;
  height: 182px;
  margin-top: 17px;
}
.content .box4 {
  width: 230px;
  height: 580px;
  margin-left: 17px;
}
.content .box4 .nav8 {
  width: 230px;
  height: 182px;
}
.content .box4 .nav9 {
  width: 230px;
  height: 182px;
  margin-top: 17px;
}
.content .box4 .nav10 {
  width: 230px;
  height: 182px;
  margin-top: 17px;
}
.content .img {
  width: 230px;
  height: 282px;
  border-radius: 5px;
  background-size: cover;
}
.content .img1 {
  width: 230px;
  height: 182px;
  border-radius: 5px;
}
.content .img2 {
  width: 230px;
  height: 380px;
  border-radius: 5px;
}
/* 中间结束 */
/* 底部开始 */
.footer {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
}
.footer .footer-left {
  width: 600px;
  height: 60px;
  display: flex;
  color: #fff;
  background-color: #797979;
  border-top-left-radius: 10px;
}
.footer .footer-right {
  width: 600px;
  height: 60px;
  display: flex;
  background-color: #3b99f5;
  border-top-right-radius: 10px;
}
.footer .footer-left .nav {
  width: 200px;
  height: 60px;
  display: flex;
}
.footer .footer-left .nav2 {
  width: 200px;
  height: 60px;
  display: flex;
  margin-left: 200px;
}
.footer .footer-right .nav3 {
  width: 200px;
  display: flex;
}
.footer .footer-right .nav4 {
  width: 200px;
  height: 60px;
  display: flex;
  text-align: center;
  margin-left: 160px;
}
.footer .footer-left .nav .footer-subject {
  width: 65px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  margin-left: 50px;
}
.footer .footer-left .nav2 .footer-icon1 {
  width: 30px;
}
.footer .footer-left .nav2 .footer-subject {
  width: 65px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  margin-left: 50px;
}

.footer .footer-right .nav3 .footer-icon1 {
  width: 30px;
  margin-left: 50px;
}

.footer .footer-right .nav3 .footer-subject1 {
  width: 65px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  padding-left: 10px;
  color: #fff;
}
.footer .footer-right .nav4 .footer-icon1 {
  width: 30px;
  margin-left: 50px;
}
.footer .footer-right .nav4 .footer-subject1 {
  height: 60px;
  text-align: center;
  line-height: 60px;
  padding-left: 10px;
  color: #fff;
}
.footer .footer-right .nav4 .footer-icon1 {
  width: 30px;
}
.footer-icon1 {
  width: 50px;
  display: block;
  text-align: center;
  margin-top: 15px;
}
.footer-img {
  width: 30px;
  height: 30px;
}
/* 底部结束 */
.mask {
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
/* 左边echarts图表分析区域开始*/
.pop1 {
  background-color: #fff;
  position: fixed;
  border-radius: 10px;
  top: 585px;
  left: 362px;
  width: 600px;
  height: 312px;
  z-index: 2;
  opacity: 0.8;
}
.pop1 .echarts {
  width: 520px;
  height: 270px;
  margin: 30px 30px 0 30px;
  z-index: -10;
}
/* 左边echarts图表分析区域end*/
/* 右边做任务区域开始 */
.pop .taskes {
  width: 555px;
  height: 261px;
  margin: 30px 20px 30px 20px;
  z-index: -1;
}
.pop {
  background-color: #fff;
  position: fixed;
  border-radius: 10px;
  top: 585px;
  width: 600px;
  height: 312px;
  z-index: 2;
  opacity: 0.8;
}
.pop .taskes .taske {
  display: flex;
  flex-direction: row;
  width: 555px;
}
/* 做任务语文区域开始 */
.taskes .taske_left {
  width: 270px;
}
.title {
  width: 270px;
  height: 20px;
  font-size: 15px;
  color: #4d4d4d;
}
.taskes .taske_left .nav {
  display: flex;
  flex-direction: row;
  width: 270px;
  height: 20px;
  line-height: 20px;
  margin-top: 5px;
  font-size: 12px;
}
/* 做任务语文区域end */
/* 做任务英语区域开始 */
.taskes .taske_right {
  width: 270px;
  margin-left: 15px;
}
.taskes .taske_left .nav .taske1 {
  width: 50px;
  height: 18px;
  line-height: 18px;
  border-radius: 5px;
  border: 1px solid #0079fe;
  color: #fff;
  text-align: center;
  background-color: #0079fe;
}
.taskes .taske_left .nav .taske2 {
  width: 210px;
  height: 16px;
  line-height: 16px;
  margin-left: 5px;
  color: #9b9b9b;
  flex-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.taskes .taske_right .nav1 {
  display: flex;
  flex-direction: row;
  width: 270px;
  height: 20px;
  line-height: 20px;
  margin-top: 5px;
  font-size: 12px;
}
.nav1 .taske1 {
  width: 50px;
  height: 18px;
  line-height: 18px;
  border-radius: 5px;
  border: 1px solid #0079fe;
  color: #fff;
  text-align: center;
  background-color: #0079fe;
}
.nav1 .taske2 {
  width: 210px;
  height: 16px;
  line-height: 16px;
  margin-left: 5px;
  color: #9b9b9b;
  flex-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* 右边做任务区域开始end */
</style>
