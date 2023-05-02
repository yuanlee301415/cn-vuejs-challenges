import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const COMPOSABLEFUNCTION_ROUTE: AppRouteRecordRaw = {
  path: "/composablefunction",
  name: "Composablefunction",
  redirect: "/composablefunction/15-usetoggle",
  component: LAYOUT,
  meta: {
    title: "ComposableFunction",
    hiddenChildrenInMenu: false
  },
  children: [
    {
      path: "15-usetoggle",
      name: "15UsetogglePage",
      component: () => import("@/views/composablefunction/15-usetoggle.vue"),
      meta: {
        title: "切换器"
      }
    }
  ]
};

export default COMPOSABLEFUNCTION_ROUTE;