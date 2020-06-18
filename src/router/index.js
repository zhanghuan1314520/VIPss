//创建路由列表
import Vue from "vue";
import Router from "vue-router";
import Login from "@/views/Login";
import Home from "@/views/Home";
import ErrorCounseling from "@/views/ErrorCounseling";
import English from "@/views/English";
import ViewStatistics from "@/views/ViewStatistics";
import PurchaseRecord from "@/views/PurchaseRecord";
import ViewingHistory from "@/views/ViewingHistory";
import ChangePassword from "@/views/ChangePassword";
import Subject from "@/views/Subject";
import Register from "@/views/Register";
import Publicity from "@/views/Publicity";
import ServiceAgreement from "@/views/ServiceAgreement";
import UserAgreement from "@/views/UserAgreement";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import MessageBox from "@/components/popup/MessageBox";
import Tab from "@/components/tabs/Tab";
import downTime from "@/components/downTime/downTime";
import chart from "@/components/chart/chart";
import Math from "@/views/Math";
import ErrorContent from "@/views/ErrorContent";
import Record from "@/views/Record";
import Practice from "@/views/Practice";
import ChineseTasks from "@/views/ChineseTasks";
import EnglishTasks from "@/views/EnglishTasks";

Vue.use(Router);
export default new Router({
  routes: [
    //路径                      组件
    { path: "/", name: "Login", component: Login }, //登陆
    { path: "/register", name: "Register", component: Register }, //注册
    { path: "/home", name: "Home", component: Home }, //学习中心
    {
      path: "/errorCounseling",
      name: "ErrorCounseling",
      component: ErrorCounseling
    }, //错题辅导
    { path: "/english", name: "English", component: English }, //智能英语
    {
      path: "/viewStatistics",
      name: "ViewStatistics",
      component: ViewStatistics
    }, //查看统计
    {
      path: "/purchaseRecord",
      name: "PurchaseRecord",
      component: PurchaseRecord
    }, //购买记录
    {
      path: "/viewingHistory",
      name: "ViewingHistory",
      component: ViewingHistory
    }, //查看历史记录
    {
      path: "/changePassword",
      name: "ChangePassword",
      component: ChangePassword
    }, //修改密码
    { path: "/subject", name: "Subject", component: Subject }, //题目
    { path: "/publicity", name: "Publicity", component: Publicity }, //教研员资质公示
    {
      path: "/serviceAgreement",
      name: "ServiceAgreement",
      component: ServiceAgreement
    }, //服务协议
    { path: "/userAgreement", name: "UserAgreement", component: UserAgreement }, //用户协议
    { path: "/Footer", name: "Footer", component: Footer }, //公共页脚
    { path: "/Header", name: "Header", component: Header }, //页头
    { path: "/MessageBox", name: "MessageBox", component: MessageBox }, //弹框
    { path: "/Tab", name: "Tab", component: Tab }, //选项卡
    { path: "/downTime", name: "downTime", component: downTime },
    { path: "/chart", name: "chart", component: chart }, //折线图
    { path: "/math", name: "Math", component: Math }, //数学
    { path: "/errorcontent", name: "ErrorContent", component: ErrorContent }, //错题内容
    { path: "/record", name: "Record", component: Record }, //数据统计
    { path: "/practice", name: "Practice", component: Practice }, //练习记录
    { path: "/chineseTasks", name: "ChineseTasks", component: ChineseTasks }, //做任务(语文)
    { path: "/englishTasks", name: "EnglishTasks", component: EnglishTasks }, //做任务(英语)
    { path: "*", component: () => import("@/views/error_404.vue") }
    //路由配置规则:*代表任何的路径（404）页面
  ]
});
