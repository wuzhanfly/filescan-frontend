const zh = {
  component: {
    mesList: {
      label: [
        "Type",
        "消息ID",
        "区块高度",
        "时间",
        "发送地址",
        "接收地址",
        "数额",
        "收据",
        // "Fee",
        "方法"
      ],
      total: "Total of <i>{total}</i> Messages",
      method: [
        { label: "All", value: "" },
        { label: "0", value: "0" },
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" }
      ],
      placeholder: "Method"
    },
    blockList: {
      label: ["区块高度:", "Cid", "时间", "消息", "区块", "矿工", "奖励"],
      total: "共计发现 <i>{total}</i> 区块，总计 (<i>{fil}</i>)",
      height: "区块高度 : {height} "
    }
  },
  header: {
    title: "Filscan",
    tab: ["Home", "Tipset", "Stats"],
    placeholder: "请输入地址/消息ID/高度/区块Cid/节点ID ",
    filter: [
      {
        label: "类型",
        value: 0
      },
      {
        label: "地址",
        value: 1
      },
      {
        label: "消息ID",
        value: 2
      },
      {
        label: "高度",
        value: 3
      },
      {
        label: "区块Cid",
        value: 4
      },
      {
        label: "节点ID",
        value: 5
      }
    ],
    nav: {
      home: {
        label: "首页",
        index: "/"
      },
      miner: {
        label: "矿工名单",
        index: "/miner"
      },
      tipset: {
        label: "区块链",
        index: "tipset",
        items: [
          {
            label: "查看区块",
            index: "/tipset"
          },
          {
            label: "查看全部消息",
            index: "/message"
          },
          {
            label: "查看全部账户",
            index: "/address/list"
          }
        ]
      },
      stats: {
        label: " 更多 ",
        index: "Stats",
        items: [
          {
            label: "矿工状态",
            index: "/stats/mining"
          },
          {
            label: "Token Metrics",
            index: "/stats/metrics"
          },
          {
            label: " 节点地图 ",
            index: "/stats/map"
          }
        ]
      }
    },
    mb: {
      title: "搜索",
      search: "Search"
    }
  },
  footer: {
    peer: " 活跃矿工数: {count}",
    nav: [
      {
        label: "首页",
        href: ""
      },
      {
        label: "  Github",
        href: "https://github.com/filecoin-project"
      },
      {
        label: "Filecoin",
        href: "https://filecoin.io/zh-cn/"
      }
    ]
  },
  home: {

    blockTime: {
      label: "平均出块时间",
      min: "最小",
      max: "最大",
      tips: "近24小时平均出块时间"
    },
    blockSize: {
      label: "平均区块大小",
      size: "{avg} bytes",
      tips: "近24平均区块大小"
    },
    totalPower: {
      power: "全网有效算力",
      capacity: "存储容量"
    },
    blockTable: {
      title: "Block",
      label: ["区块高度", "Cid", "时间", "矿工", "奖励"]
    },
    messageTable: {
      title: "消息ID",
      label: ["消息ID", "时间", "发送地址", "接收地址", "数额"]
    },
    board: {
      blockRewardIn24h: {
        label: "24h平均挖矿收益",
        tips: "最近24小时的总出块奖励与有效算力的比值"
      },
      height: {
        label: "最新区块高度",
        tips: "当前网络最新区块高度"
      },
      reward: {
        label: "区块奖励",
        tips: "当前高度下的区块奖励，每个高度有多个区块，每个区块均可获得该奖励"
      },
      avgGasPremium: {
        label: "平均Gas单价",
        tips: "最近24h平均每条消息的Gas单价."
      },
      totalAccounts: {
        label: "总账户数",
        tips: "全网账户数量"
      },
      avgMsgTipset: {
        label: "平均区块打包消息数量",
        tips: "每个区块的平均消息数"
      },
      avgGas: {
        label: "平均基础费率",
        tips: "24h平均基础费率"
      },
      avgMsg: {
        label: "平均消息大小",
        tips: "整个网络的平均消息大小 "
      },
      pledgeCollateral: {
        label: "FIL质押量",
        tips: "FIL质押量"
      },
      PowerIn24H: {
        label: " 24h新增算力",
        tips: "整个网络24小时的有效存储增长。"
      },
      newlyFilIn24h: {
        label: "24h产出量",
        tips: "最近24h累计挖矿产出的FIL数量."
      },
      avgBlocksTipSet: {
        label: "平均每高度区块数",
        tips: "最近24h平均每个高度下的区块数量."
      },
      peers: {
        label: "活跃矿工数",
        tips: "当前有效算力大于0的矿工."
      },
      newlyPrice: {
        label: "FIL价格",
        tips: "FIL最新价格，数据来源gate.io."
      },
      currentFil: {
        label: "FIL流通总量", //
        tips: "当前自由流通的FIL总和." //
      },
      flowTotal: {
        label: "流通市值",
        tips: "流通市值=FIL单价xFIL总量"
      },
      totalFil: {
        label: "FIL总量",
        tips: "FIL总量."
      },
      totalBurnUp: {
        label: "FIL销毁量 ",
        tips: "FIL销毁量"
      },
      flowRate: {
        label: "流通率", //
        tips: "流通率=FIL流通量/FIL总量."//
      },
      number: {
        label: "Blocks In Tipset",
        tips:
          "Number of blocks in the current best tipset. A tipset is a set of blocks at the same height that share the same parent set"
      },
      size: {
        label: "区块大小",
        tips: "最新区块大小"
      },

      power: {
        label: "全网有效算力",
        tips: "全网有效算力"
      },

      avgBlockTime: {
        label: "平均区块时间",
        tips: ""
      },
      avgBlockSize: {
        label: "平均BlockHeader大小",
        tips: "平均块头大小"
      }
    },
    filType: {
      floating: "Floating ",
      pledge: "Pledge Collateral",
      outstanding: "Outstanding"
    }
  },
  stats: {
    mining: {
      activeMiner: {
        title: "活跃矿工数",
        count: "矿工数"
      },
      provenPower: {
        title: "顶级矿工的发展历程"
      },
      minerList: {
        title: "矿工列表",
        label: ["矿工", "Peer ID","标签" ,"有效算力", "占比", "出块数", "% 出块占比"],
        detail: ["矿工", "IP", "位置"],
        placeholder: "按矿工地址/PeerID搜索"
      }
    },
    metrics: {
      blockReward: {
        title: "累积奖励"
      },
      filecoin: {
        title: "Filecoin网络块奖励曲线"
      },
      filVested: {
        title: "FIL Vested"
      }
    },
    peer: {
      title: "Peer ID:",
      label: ["Peer ID", "Miner Address", "IP", "位置"]
    }
  },
  address: {
    list: {
      label: ["地址", "类型", "余额", "消息"],
      total: "共计发现 <i>{num}</i> 账户，总计 ({filNum})"
    },
    detail: {
      overview: ["地址", "类型", "余额", "代码 Cid", "随机数"],
      worker: "Worker 列表",
      ownerOverview: [
        "存储矿工",
        "节点标识",
        "有效算力",
        "扇区大小",
        "总出块数",
        "Proving Sector Number",
        "Fault Number"
      ]
    },
    type: {
      account: "一般账户",
      owner: "所有者账户",
      wallet: "一般账户",
      miner: "存储矿工	",
      actor: "一般账户"
    },
    radio: ["Message", "Blocks Mined"]
  },
  message: {
    detail: {
      overview: [
        "消息 ID",
        "高度",
        "区块",
        "时间",
        "发送者",
        "接收者",
        "金额",
        "Receipt",
        //"Fee",
        "方法",
        "随机数",
        "参数"
      ],
      paramTip: "Base64中的原始数据",
      confirm: "确认数"
    }
  },
  tipset: {
    height: "Height",
    block: {
      overview: [
        "Cid",
        "高度",
        "时间戳",
        "Block Size",
        "消息",
        "矿工",
        "奖励",
        "父块Cid",
        "父块重量",
        "票值",
        "根"
      ]
    },
    blockType: ["空块", "最小票务区块", "其他区块"]
  },
  noResult: {
    res: "搜索不到结果",
    404: "Page Not Found 404 ",
    key: "糟糕！您输入的搜索字符串是：",
    invalid: "对不起！这是无效的搜索字符串",
    back: "返回首页 "
  },
  routeName: {
    blockDetail: "区块详情",
    messageDetail: "Message 详情",
    addressDetail: "地址信息",
    messageList: "查看所有消息",
    addressList: "查看所有账户",
    tipset: "Tipset",
    mining: "矿工",
    metrics: "指标",
    map: "节点地图",
    peer: "节点详情"
  },
  chart: {
    blockTime:
      "<div style='margin-bottom:5px'>Avg Block Time: {value}s</div><div>Time: {name}</div>",
    blockSize:
      "<div style='margin-bottom:5px'>Avg BlockHeader Size: {value}bytes</div><div>Time: {name}</div>",
    totalPower:
      "<div style='margin-bottom:5px'>Total Power: {value}</div><div>Time: {name}</div>",
    filOutstanding: ["Floating", "Pledge"],
    blockReward: ["# Of Miners", "Cumulative Block Reward"],
    filecoin: "Block Reward(FIL)",
    filVested: ["Cumulative FIL Vested", "FIL Vested Daily"],
    map:
      "<div style='margin-bottom:5px'><a href='/#/stats/peer?peer_id={pid}'><span>Peer ID : </span><span>{pid}</span></a></div><div style='margin-bottom:5px'><span>位置 : </span><span>{name}</span></div><div><span>IP : </span><span>{ip}</span></div>"
  }
};
export default zh;
