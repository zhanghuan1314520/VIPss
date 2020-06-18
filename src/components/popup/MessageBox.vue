<template>
  <div class="mask">
    <div class="messageBox">
      <h2 class="title">
        <p>{{title}}</p>
        <span @click="handleCancel">×</span>
      </h2>
      <div class="content">{{content}}</div>
      <div class="btns">
        <div class="btn-ok" @click="handleOk">{{ok}}</div>
        <div class="btn-cancel" @click="handleCancel">{{cancel}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
}
.messageBox {
  width: 450px;
  height: 220px;
  border-radius: 4px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  padding: 20px;
}
.title {
  display: flex;
  justify-content: space-between;
  /* 强制不换行 */
  white-space: nowrap;
  overflow: hidden;
  /* 多余文字显示省略号 */
  text-overflow: ellipsis;
}
.title span {
  cursor: pointer;
}
.content {
  height: 100px;
  overflow-y: auto;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btns {
  display: flex;
  flex-direction: row-reverse;
  margin-top: 20px;
  text-align: center;
  line-height: 34px;
}
.btn-cancel,
.btn-ok {
  width: 80px;
  height: 34px;
  border: none;
  outline: none;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  margin-left: 10px;
  border-radius: 3px;
  cursor: pointer;
}
.btn-cancel {
  color: #409eff;
  border: 1px solid #409eff;
  background-color: #fff;
}
.btn-ok:hover {
    background-color: rgb(0, 146, 238);
}
.btn-cancel:hover {
    color: #fff;
    background-color: rgb(0, 164, 255);
}