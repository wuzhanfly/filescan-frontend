<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" class="total-pl" style="width: 60%">
    <el-tab-pane label=" 32 GB" name="first"  >
      <el-table
          :data="tableData"
          style="width: 100% ;text-align: center">
        <el-table-column
            prop="total_32"
            label="封装扇区总成本"
            width="180">
        </el-table-column>
        <el-table-column
            prop="payment_32"
            label="封装扇区质押费"
            width="180" >
        </el-table-column>
        <el-table-column
            prop="preGas_32"
            label="封装扇区Gas费">
        </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label=" 1 TB" name="second" >
      <el-table
          :data="tableData"
          style="width: 100% ;text-align: center">
        <el-table-column
            prop="total_1T"
            label="封装扇区总成本"
            width="180">
        </el-table-column>
        <el-table-column
            prop="payment_1T"
            label="封装扇区质押费"
            width="180">
        </el-table-column>
        <el-table-column
            prop="preGas_1T"
            label="封装扇区Gas费">
        </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label=" 1 PB" name="third" >
      <el-table
          :data="tableData"
          style="width: 100% ;text-align: center">
        <el-table-column
            prop="total_1P"
            label="封装扇区总成本"
            width="180">
        </el-table-column>
        <el-table-column
            prop="payment_1P"
            label="封装扇区质押费"
            width="180">
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
      tableData: []

    };
  },
  async mounted() {
    this.loading = true;
    await this.getGetFil();
    this.loading = false;
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
  }
};
</script>

<style lang="scss" scoped>
.total-pl {
  display: block;
  background: var(--board-bg-color);
  padding: 10px;
  border-radius: 0.41667vw;
  border-color: var(--board-bg-color) !important;
  box-shadow: 0px 1px 7px 9px rgba(0, 0, 0, 0.03);
}


</style>
