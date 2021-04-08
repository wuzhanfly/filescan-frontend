<template>
  <div class="in18">
    <span  @click="switchLang('en')" :class="{'is-curren': langCss =='en'}" style= "color: #f3921b;  align-items: center;">EN</span>
    <span>  /  </span>
    <span @click="switchLang('zh')" :class="{'is-curren': langCss =='zh'}">中文</span>
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

<style lang="scss" scoped>
.in18{
  font-size: 15px;
  color: var(--main-text-color);
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-left: 10px;
  }
}
.is-curren {
  font-size: 30px;
}
</style>
