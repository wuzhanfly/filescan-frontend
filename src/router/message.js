import MessageListCon from "@/views/message/List";
import MessageDetail from "@/views/message/Detail";
const route = [
  {
    path: "/message",
    name: "message",
    component: () =>
      import(/* webpackChunkName: "Message" */ "@/views/message"),

    redirect: "/message/list",
    children: [
      {
        path: "list",
        name: "messageList",
        component: MessageListCon,
        meta: {
          title: '最新消息列表 - 漂亮区块链浏览器'   // 标题设置
        },
      },
      {
        path: "detail",
        name: "messageDetail",
        component: MessageDetail,
        meta: {
          title: '消息 - 漂亮区块链浏览器'   // 标题设置
        },
      }
    ]
  }
];
export default route;
