<template>
  <div class="mining bottom-10">

    <miner-list />
  </div>
</template>
<script>

import MinerList from "./MinerList";
export default {
  name: "Mining",
  components: {
    // ProvenPower,
    // ActiveMiner,
    MinerList
  }
};
</script>
<style lang="scss" scoped></style>
