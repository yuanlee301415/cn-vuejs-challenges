import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const REACTIVITY_ADVANCED_ROUTE: AppRouteRecordRaw = {
  path: "/reactivity-advanced",
  name: "ReactivityAdvanced",
  redirect: "/reactivity-advanced/7-raw-api",
  component: LAYOUT,
  meta: {
    title: "Reactivity-Advanced",
    hiddenChildrenInMenu: false
  },
  children: [
    {
      path: "7-raw-api",
      name: "7RawApiPage",
      component: () => import("@/views/reactivity-advanced/7-raw-api.vue"),
      meta: {
        title: "原始值API"
      }
    },
  ]
};

export default REACTIVITY_ADVANCED_ROUTE;
