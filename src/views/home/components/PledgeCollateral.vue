<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" class="total-pl" :class="{'is-total': !isDark}">
    <el-tab-pane label=" 32 GB" name="first"  >
      <el-table
          :class="{'is-dark': isDark}"
          :data="tableData"
          style="width: 100% ;text-align: center">
        <el-table-column
            prop="total_32"
            label="封装扇区总成本">
        </el-table-column>
        <el-table-column
            prop="payment_32"
            label="封装扇区质押费">
        </el-table-column>
        <el-table-column
            prop="preGas_32"
            label="封装扇区Gas费">
        </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label=" 1 TB" name="second" >
      <el-table
          :class="{'is-dark': isDark}"
          :data="tableData"
          style="width: 100% ;text-align: center">
        <el-table-column
            prop="total_1T"
            label="封装扇区总成本">
        </el-table-column>
        <el-table-column
            prop="payment_1T"
            label="封装扇区质押费">
        </el-table-column>
        <el-table-column
            prop="preGas_1T"
            label="封装扇区Gas费">
        </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label=" 1 PB" name="third" >
      <el-table
          :class="{'is-dark': isDark}"
          :data="tableData"
          style="width: 100% ;text-align: center">
        <el-table-column
            prop="total_1P"
            label="封装扇区总成本" >
        </el-table-column>
        <el-table-column
            prop="payment_1P"
            label="封装扇区质押费">
        </el-table-column>
        <el-table-column
            prop="preGas_1P"
            label="封装扇区Gas费">
        </el-table-column>
      </el-table>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import { getGetFil } from "@/api/home";
export default {
  nameL: "PledgeCollateral",
  data() {
    return {
      activeName: "first",
      tableData: [],

      isDark: localStorage.getItem("filscanTheme") === "dark" ? true : false
    };
  },
  async mounted() {
    this.loading = true;
    await this.getGetFil();
    this.loading = false;
  },
  computed:{
    theme(){
      return this.$store.state.theme //用computed接收
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    async getGetFil() {
      try {
        const res = await getGetFil();
        this.loading = false;
        this.tableData.push(res)
      } catch (e) {
        console.log(e);
      }
    }
  },
  watch: {
    theme(newval) {
      this.isDark = newval === 'dark' ? true : false
    }
  }
};
</script>
<style lang="scss">
.el-tabs .el-tabs__header {
  margin: 0!important;
}
.el-tabs .el-tabs__nav {
  float: right!important;
}
.el-tabs .el-tabs__item {
  font-size: 25px!important;
  color: var(--total-board-top-color)!important;

}
.el-tabs .is-active {
  color: #32C5FF!important;
}
.el-table, .el-table th, .el-table tr {
  background: transparent!important;
  font: initial;
}
.el-table th, .el-table td, .el-table th.is-leaf {
  padding-top: 10px!important;
  padding-bottom: 10px!important;
  color: var(--total-board-top-color)!important;
  border-bottom: 1px solid var(--board-bg-color)!important;
}
.is-dark th, .is-dark td, .is-dark th.is-leaf {
  color: #b4b4b4 !important;
}
.is-total {
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
}
tr {pointer-events: none;}
.el-table  .el-table__body .delstatu:hover>td{
  background: transparent!important;
}
.el-tabs__nav-wrap::after, .el-table::before{
  background-color: var(--board-bg-color)!important;
}
.el-tabs .el-tabs__nav {
  padding-right: 10px!important;
  padding-top: 10px!important;
}
@media screen and (max-width: 768px) {
  .el-tabs .el-tabs__nav {
    padding-right: 10px!important;
    margin-bottom: 10px!important;
  }
  .el-tabs .el-tabs__item {
    font-size: 18px!important;
  }
  .el-tabs .el-tabs__nav, .el-tabs .el-table th > .cell, .el-tabs .el-table .cell {
    height: 20px!important;
    line-height: 20px!important;
    font-size: 14px;
  }
}
</style>
<style lang="scss" >
.total-pl {
  display: block;
  background: var(--board-bg-color);
  padding: 0 10px;
  border-radius: 0.41667vw;
  border-color: var(--board-bg-color) !important;
  box-shadow: 0px 1px 7px 9px rgba(0, 0, 0, 0.03);
}

</style>
