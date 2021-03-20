import Mining from "@/views/stats/Mining";
import Metrics from "@/views/stats/Metrics";
import NodeMap from "@/views/stats/Map";
import PeerId from "@/views/stats/PeerId";
const route = [
  {
    path: "/stats",
    name: "stats",
    component: () => import(/* webpackChunkName: "Stats" */ "@/views/stats"),
    redirect: "/stats/mining",

    children: [
      {
        path: "mining",
        name: "mining",
        component: Mining,
        meta: {
          title: '矿工状态 - 漂亮区块链浏览器'   // 标题设置
        }
      },
      {
        path: "metrics",
        name: "metrics",
        component: Metrics,
        meta: {
          title: '代币指标 - 漂亮区块链浏览器'   // 标题设置
        }
      },
      {
        path: "map",
        name: "map",
        component: NodeMap,

        meta: {
          title: '全球节点地图 - 漂亮区块链浏览器'   // 标题设置
        }
      },
      {
        path: "peer",
        name: "peer",
        component: PeerId,
        meta: {
          title: '账户表- 漂亮区块链浏览器'   // 标题设置
        }
      }
    ]
  }
];
export default route;
