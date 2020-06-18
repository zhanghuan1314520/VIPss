<template>
  <div class="tabs-content" v-if="flag">
    <div class="top">
      <div class="title">{{ navtitle }}</div>
      <ul class="nav nav-tabs">
        <li
          v-for="(navindex, nav) in navdata"
          class="nav-li"
          v-bind:class="{ active: nav.showFlag >= 0 }"
          @click="keyShowFun(navindex)"
          :key="(navindex, nav).id"
        >
          <a href="#">{{ nav.key }}</a>
        </li>
      </ul>
    </div>
    <div class="v-tabs-item">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    flag: {
      type: Boolean,
      required: true,
      twoWay: true
    },
    navtitle: {
      type: String,
      default: ""
    },
    navdata: {
      type: Array,
      required: true
    }
  },
  components: {},
  ready: function() {},
  methods: {
    keyShowFun: function(index) {
      let _this = this;
      _this.navdata.forEach(function(item) {
        item.showFlag = -1;
      });
      _this.navdata[index].showFlag = 1;
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped></style>
