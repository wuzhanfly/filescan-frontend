import List from "@/views/address/List";
import Detail from "@/views/address/Detail";
const route = [
  {
    path: "/address",
    name: "address",
    component: () =>
      import(/* webpackChunkName: "Address" */ "@/views/address"),
    redirect: "/address/list",
    children: [
      {
        path: "list",
        name: "addressList",
        component: List,
        meta: {
          title: '账户列表- 漂亮区块链浏览器'   // 标题设置
        }

      },
      {
        path: "detail",
        name: "addressDetail",
        component: Detail,
        meta: {
          name: "Address Detail",
          title: '账户信息 - 漂亮区块链浏览器'   // 标题设置
        }

      }
    ]
  }
];
export default route;
