import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const GLOBAL_API_ROUTE: AppRouteRecordRaw = {
  path: "/global-api",
  name: "GlobalApi",
  redirect: "/global-api/11-next-dom-update",
  component: LAYOUT,
  meta: {
    title: "Global-API",
    hiddenChildrenInMenu: false
  },
  children: [
    {
      path: "11-next-dom-update",
      name: "11NextDomUpdatePage",
      component: () => import("@/views/global-api/11-next-dom-update.vue"),
      meta: {
        title: "下一次DOM更新"
      }
    },
  ]
};

export default GLOBAL_API_ROUTE;
