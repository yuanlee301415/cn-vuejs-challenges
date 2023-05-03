import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const DIRECTIVES_ROUTE: AppRouteRecordRaw = {
  path: "/directives",
  name: "Directives",
  redirect: "/directives/305-capitalize",
  component: LAYOUT,
  meta: {
    title: "Directives",
    hiddenChildrenInMenu: false
  },
  children: [
    {
      path: "305-capitalize",
      name: "305CapitalizePage",
      component: () => import("@/views/directives/305-capitalize.vue"),
      meta: {
        title: "大写"
      }
    },
  ]
};

export default DIRECTIVES_ROUTE;
