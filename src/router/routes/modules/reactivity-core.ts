import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const REACTIVITY_CORE_ROUTE: AppRouteRecordRaw = {
  path: "/reactivity-core",
  name: "ReactivityCore",
  redirect: "/reactivity-core/2-ref-family",
  component: LAYOUT,
  meta: {
    title: "Reactivity-Core",
    hiddenChildrenInMenu: false
  },
  children: [
    {
      path: "2-ref-family",
      name: "2RefFamilyPage",
      component: () => import("@/views/reactivity-core/2-ref-family.vue"),
      meta: {
        title: "ref全家桶"
      }
    },
  ]
};

export default REACTIVITY_CORE_ROUTE;
