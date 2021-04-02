<template>
  <div class="footer">

    <div class="peer" @click="goTo('map')">
<!--    <div class="peer" >-->
      {{ $t("footer.peer", { count: formatNumber(count) }) }}
      filecoin.pl
      漂亮浏览器是Filecoin区块链浏览器及数据服务平台。为用户提供有关Filecoin相关的各类数据、信息咨询和可视化图表等一站式的数据服务。

    </div>

    <div class="nav-con">
      <a :href="item.href" v-for="item in $t('footer.nav')" :key="item.label">{{
        item.label
      }}</a>
    </div>
  </div>
</template>
<script>
import { getActivePeerCount } from "@/api/home";
export default {
  name: "Footer",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    async getActivePeerCount() {
      try {
        let res = await getActivePeerCount();
        this.count = this.formatNumber(Number(res.count));
      } catch (e) {
        console.log(e);
      }
    }
  },
  mounted() {
    this.getActivePeerCount();
  }
};
</script>
<style lang="scss" scoped>
.footer {
  position: relative;
  color: var(--footer-text-color);
  box-sizing: border-box;
  background: var(--board-bg-color);
  height: 70px;
  z-index: 10;
  display: flex;
  padding: 0 20px;
  .peer {
    color: var(--logo-text-color);
    cursor: pointer;
  }
  line-height: 60px;
  .nav-con {
    flex: 1;
    text-align: right;
    a {
      margin-left: 30px;
      color: var(--main-text-color);
    }
  }
}
@media (max-width: 768px) {
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 10px !important;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    .nav-con a {
      margin-left: 15px;
    }
  }
}
</style>
