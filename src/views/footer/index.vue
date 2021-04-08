<template>
  <div class="footer">
    <div class="footer-left">
      <img class="peerImg" src="../../assets/logo.svg">
      <div>{{ $t("footer.desc") }}</div>
      <!-- <div>{{ $t("footer.Contact") }}: contact@filfox.io</div> -->
    </div>
    <div class="footer-right">
      <img class="peerImg" src="../../assets/qrcode.png">
    </div>
    <!-- <div class="peer" @click="goTo('map')">
      <img class="peerImg" src="../../assets/logo.svg">
      <div></div>
    
      {{ $t("footer.peer", { count: formatNumber(count) }) }}
      
      漂亮浏览器是Filecoin区块链浏览器及数据服务平台。为用户提供有关Filecoin相关的各类数据、信息咨询和可视化图表等一站式的数据服务。
      

    </div> -->
    <!-- <div class="nav-con">
      <a :href="item.href" v-for="item in $t('footer.nav')" :key="item.label">{{
        item.label
      }}</a>
    </div> -->
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
  background: rgb(47, 79, 128);
  // height: 70px;
  z-index: 10;
  display: flex;
  padding: 20px 20px;
  .footer-left{
    flex: 1;
    padding-right: 20px;
    color:#fff;
    // color: var(--logo-text-color);
    img{
      display: block;
      width: 260px;
    }
  }
  .footer-right{
    padding: 10px;
    background: #fff;
    border-radius: 5px;
    img{
      width: 160px;
      height: 160px;
      display: block;
    }
  }
  .peer {
    color: var(--logo-text-color);
    cursor: pointer;
    .peerImg{
      width:150px;
      height:100px;
    }
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
    // position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 10px !important;
    padding: 20 20px;
    display: block;
    .footer-left{
      flex: 1;
      padding-right: 20px;
      color: var(--logo-text-color);
      div{
        line-height: 30px;
      }
      img{
        display: block;
        width: 160px;
      }
    }
    .footer-right{
      width: 100px;
      // padding: 20px;
      img{
        height: 100px;
        width: 100px;
      }
    }
    // height: 30px;
    // line-height: 30px;
    // .nav-con a {
    //   margin-left: 15px;
    // }
  }
}
</style>
