<template>
  <div class="in18">
    <button @click="switchLang('en')">EN</button>
    <button @click="switchLang('zh')">中文</button>
  </div>
</template>
<script>

export default {
  components: {
  },
  data() {
    return {
      langCss: window.localStorage.getItem("lang") || "en",
      dialogVisible: false
    };
  },
  methods: {
    switchLang(lang) {
      this.$i18n.locale = lang;
      //把语言保存在localStorage中
      localStorage.setItem("lang", lang);
      //切换父级class
      this.langCss = lang;
    },
  }
};
</script>
<!--<style scoped>-->
<!--.vue-css button {-->
<!--  width: 150px;-->
<!--}-->
<!--.en .vue-css button {-->
<!--  color: steelblue;-->
<!--}-->
<!--.cn .vue-css button {-->
<!--  color: #666;-->
<!--}-->
<!--.ja .vue-css button {-->
<!--  color: seagreen;-->
<!--}-->
<!--</style>-->

<style lang="scss" scoped>
.in18{
  font-size: 30px;
  color: var(--main-text-color);
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-left: 10px;
  }
}
</style>
