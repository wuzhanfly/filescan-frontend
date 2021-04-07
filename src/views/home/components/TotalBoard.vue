<template>
  <div
    class="bottom-10"
    v-loading="loading"
    element-loading-background="var(--board-bg-color)"
  >
    <div class="menu-btn">
      <el-button v-if="showAll" @click="showMenu()">
        Fold

        <i class="el-icon-caret-top"></i>
      </el-button>
      <el-button v-else @click="showMenu()">
        Expand All
        <i class="el-icon-caret-bottom"></i>
      </el-button>
    </div>
    <div class="total-board" :class="{'isAll': showAll}">
      <div v-for="item in info" :key="item.key" class="info-item">
        <div>
          {{ $t(`home.board.${item.labelKey}.label`) }}
          <el-popover
            placement="bottom-start"
            width="200"
            trigger="hover"
            :content="$t(`home.board.${item.labelKey}.tips`)"
            v-if="!isMobile"
          >
            <i
              class="el-icon-warning-outline"
              slot="reference"
              style="margin-left:3px"
            ></i>
          </el-popover>
        </div>
        <div v-show="!loading">{{ `${item.value || ""} ${item.unit}` }}</div>
      </div>
    </div>
    </div>
</template>
<script>
import { getBoardInfo } from "@/api/home";
import { mapMutations } from "vuex";
export default {
  name: "TotalBoard",
  data() {
    return {
      other:[
        {
          labelKey: "expand",
        },
        {
          labelKey: "Fold",
        },
      ],
      info: [

        {
          labelKey: "blockRewardIn24h",
          key: "blockRewardIn24h",
          class: "blue",
          unit: "FIL/TiB"
        },
        {
          labelKey: "reward",
          key: "block_reward",
          class: "blue",
          unit: "FIL"
        },
        {
          labelKey: "newlyPrice",
          key: "newlyPrice",
          class: "blue",
          unit: " $"
        },
        {
          labelKey: "height",
          key: "tipset_height",
          class: "blue",
          unit: ""
        },
        {
          labelKey: "peers",
          key: "peers",
          class: "yellow",
          unit: ""
        },
        {
          labelKey: "totalFil",
          key: "totalFil",
          class: "blue",
          unit: "FIL"
        },
        {
          labelKey: "currentFil",
          key: "currentFil",
          class: "blue",
          unit: "FIL"
        },
        {
          labelKey: "pledgeCollateral",
          key: "pledge_collateral",
          class: "yellow",
          unit: "FIL"
        },

        {
          labelKey: "totalBurnUp",
          key: "totalBurnUp",
          class: "blue",
          unit: "FIL"
        },
        {
          labelKey: "flowRate",
          key: "flowRate",
          class: "blue",
          unit: ""
        },
        {
          labelKey: "flowTotal",
          key: "flowTotal",
          class: "blue",
          unit: " billion $"
        },
        {
          labelKey: "totalAccounts",
          key: "totalAccounts",
          class: "blue",
          unit: ""
        },

        {
          labelKey: "avgMsgTipset",
          key: "avg_messages_tipset",
          class: "purple",
          unit: ""
        },
        {
          labelKey: "avgGas",
          key: "avg_gas_price",
          class: "purple",
          unit: ""
        },
        {
          labelKey: "avgMsg",
          key: "avg_message_size",
          class: "yellow",
          unit: "bytes"
        },


        {
          labelKey: "PowerIn24H",
          key: "PowerIn24H",
          class: "blue",
          unit: "PiB"
        },
        {
          labelKey: "avgBlocksTipSet",
          key: "avgBlocksTipSet",
          class: "blue",
          unit: "FIL"
        },
        {
          labelKey: "avgGasPremium",
          key: "avgGasPremium",
          class: "yellow",
          unit: ""
        },

        {
          labelKey: "newlyFilIn24h",
          key: "newlyFilIn24h",
          class: "blue",
          unit: "FIL"
        },


      ],
      timer: null,
      loading: false,
      showAll: false,
    };
  },
  async mounted() {
    this.loading = true;
    await this.getBoardInfo();
    this.loading = false;
    this.timer = setInterval(() => {
      this.getBoardInfo();
    }, 30000);
  },
  methods: {
    ...mapMutations(["setHeight", "increaseLoadCount"]),
    async getBoardInfo() {
      try {
        const info = await getBoardInfo();
        info.PowerIn24H = info.PowerIn24H.substring(0,6)
        info.flowTotal = info.flowTotal.substring(1,5)
        this.loading = false;
        info.avg_message_size = parseInt(info.avg_message_size);
        this.info = this.info.map(item => {
          return {
            ...item,
            value: this.formatNumber(
              item.key === "avg_gas_price"
                ? info[item.key].toFixed(2)
                : info[item.key]
            )
          };
        });
        this.setHeight(info.tipset_height);
        this.increaseLoadCount();
      } catch (e) {
        console.log(e);
      }
    },
    showMenu() {
      this.showAll = !this.showAll;
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>
<style lang="scss">
.el-button {
  color: var(--total-board-top-color)!important;
  border: none!important;
  background: transparent!important;
  span {
    font-size: 30px!important;
  }
}
</style>
<style lang="scss" scoped>
.menu-btn {
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
}
.total-board {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  height: 200px;
  //justify-content: space-between;
  .info-item {
    width: 12.2%;
    border-radius: 8px;
    box-shadow: 0px 1px 7px 9px rgba(0, 0, 0, 0.03);
    padding: 15px;
    //flex: 1;
    margin-right: 10px;
    margin-bottom: 10px;
    background: var(--board-bg-color);
    &:nth-child(7n) {
      margin-right: 0;
    }
    div {
      height: 30px;
      line-height: 30px;
      color: #999;
      text-align: center;
      color: var(--total-board-top-color);
    }
    div:last-child {
      font-size: 24px;
      color: var(--total-board-bottom-color);
    }
    div:first-child {
      margin-bottom: 5px;
      font-weight: bold;
      span {
        position: relative;
        i {
          position: absolute;
          top: 4px;
          font-size: 12px;
        }
      }
    }
  }
}
.isAll {
  height: auto;
}
@media (max-width: 768px) {
  .total-board {
    height: 170px;
    .info-item {
      flex: 1;
      min-width: 45%;
      margin-bottom: 10px;
      box-sizing: border-box;
      margin-right: 0;
      &:nth-child(2n + 1) {
        margin-right: 10px;
      }
      div {
        height: 20px;
        line-height: 20px !important;
        color: var(--total-board-bottom-color) !important;
        font-size: 10px;
        &:first-child {
          color: var(--total-board-top-color) !important;
        }
        &:last-child {
          font-size: 12px;
        }
      }
    }
  }
  .isAll {
    height: auto;
  }
}
</style>
