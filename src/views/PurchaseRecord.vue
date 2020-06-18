<template>
  <div class="container">
    <Header />
    <div class="content">
      <div class="purchase_list">
        <div class="purchase_title">购买记录</div>
        <el-table :data="tableData" border style="width: 100%;" class="tab">
          <el-table-column
            class="th"
            align="center"
            prop="Order_number"
            label="订单号"
            width="333.3333"
            style="font-size:16px;"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="Subject"
            label="科目"
            width="333.3333"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="time"
            label="购买时间"
            width="333.3333"
          ></el-table-column>
        </el-table>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
export default {
  // 购买记录页面
  name: "PurchaseRecord",
  data() {
    return {
      tableData: [
        {
          Order_number: "43786",
          Subject: "数学",
          time: "2020-05-20 12:50:30"
        },
        {
          Order_number: "43787",
          Subject: "语文",
          time: "2020-05-20 12:50:30"
        },
        {
          Order_number: "43788",
          Subject: "英语",
          time: "2020-05-20 12:50:30"
        },
        {
          Order_number: "43789",
          Subject: "科学",
          time: "2020-05-20 12:50:30"
        },
        {
          Order_number: "437861",
          Subject: "历史",
          time: "2020-05-20 12:50:30"
        },
        {
          Order_number: "43782",
          Subject: "政治",
          time: "2020-05-20 12:50:30"
        },
        {
          Order_number: "43783",
          Subject: "物理",
          time: "2020-05-20 12:50:30"
        }
      ]
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
  border-radius: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
}

.purchase_title {
  width: 1000px;
  height: 37px;
  line-height: 37px;
  text-align: center;
  font-size: 32px;
  color: #4d4d4d;
  margin-top: 50px;
  margin-bottom: 40px;
}
.purchase_list {
  width: 1000px;
  height: auto;
  margin: 0 50px 0 50px;
  padding-top: 30px;
}
</style>
<style>
.tab.el-table th > .cell {
  display: inline-block;
  box-sizing: border-box;
  height: 45px;
  line-height: 45px;
  font-size: 16px;
  color: #fff;
  vertical-align: middle;
  background-color: #0079fe;
}
.th.el-table th {
  padding-top: 100px;
  height: 100px;
  background-color: rgb(231, 18, 18);
}
</style>
