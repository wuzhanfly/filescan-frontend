<template>
  <div class="home-con bottom-10">

<!--    <div class="bottom-20">-->
<!--          <ticket-chain-->
<!--      @hash-change="handleHashChange"-->
<!--      @height-change="handleHeightChange"-->
<!--      v-if="!isMobile && atIndex"-->
<!--    />-->
<!--    </div >-->

    <div class="board-con bottom-20">
      <total-board />

      <total-chart />

    </div>
    <div class="board-con bottom-20">
      <PledgeCollateral />
    </div>
<!--    <div class="board-con bottom-20">-->
<!--      <proven-power />-->
<!--    </div>-->
    <div class="block-chart bottom-20">
      <daily-power />
      <base-gas />
    </div>
    <div class="block-message-table bottom-20">
      <block-table />
      <message-table />

    </div>


  </div>
</template>

<script>
import * as components from "./components";
// import TicketChain from "../tipset/components/TicketChain";

import TotalBoard from "@/views/home/components/TotalBoard";
import PledgeCollateral from "@/views/home/components/PledgeCollateral"
// import ProvenPower from "@/vies/stats/components/mining/ProvenPower"
import DailyPower from "@/views/home/components/chart/DailyPower"
import BaseGas from "@/views/home/components/chart/BaseGas"
export default {
  name: "Home",
  data() {
    return {
      option: {}
    };
  },
  components: {
    TotalBoard,
    ...components,
    // TicketChain,
    // ProvenPower,
    PledgeCollateral,
    DailyPower,
    BaseGas
  },
  methods: {
    handleHashChange(v) {
      this.goTo("tipset", {
        query: {
          hash: v
        }
      });
    },
    handleHeightChange(v) {
      this.goTo("tipset", {
        query: {
          height: v
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.home-con {
  & ::v-deep input {
    display: block;
    margin: 0 auto;
  }
  .board-con {
  }
  .table-con {
    display: flex;
    margin-top: 30px;
    & > div {
      flex: 1;
    }
  }
  .block-message-table {
    display: flex;
    box-sizing: border-box;
    & > div {
      flex: 1;
      max-width: 50%;
      background: var(--main-bg-color);
    }
    & > div:first-child {
      margin-right: 20px;
    }
    & ::v-deep .el-table__body-wrapper {
      min-height: 100%;
    }
  }
  .sub-chart-con {
    display: flex;
    & > div {
      flex: 1;
      height: 400px;
      background: var(--main-bg-color);
    }
    & > div:first-child {
      margin-right: 10px;
    }
    margin: 40px 0;
  }
  .block-chart {
    display: flex;
    justify-content: space-between;
    height: 350px;
  }
}
@media screen and (max-width: 768px) {
  .block-message-table {
    display: block !important;
    & ::v-deep > div {
      max-width: 100% !important;
      margin-right: 0 !important;
      margin-top: 10px;
    }
    & ::v-deep .el-table {
      .cell {
        height: 20px;
        line-height: 20px;
        font-size: 12px;
      }
    }
  }
  .board-con {
    background: transparent !important;
  }
  .block-chart {
    display: inline!important;
    height: 710px!important;
  }
}
</style>
