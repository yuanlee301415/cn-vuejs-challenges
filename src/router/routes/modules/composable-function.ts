import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const COMPOSABLE_FUNCTION_ROUTE: AppRouteRecordRaw = {
  path: "/composable-function",
  name: "ComposableFunction",
  redirect: "/composable-function/15-usetoggle",
  component: LAYOUT,
  meta: {
    title: "Composable-Function",
    hiddenChildrenInMenu: false
  },
  children: [
    {
      path: "15-usetoggle",
      name: "15UsetogglePage",
      component: () => import("@/views/composable-function/15-usetoggle.vue"),
      meta: {
        title: "切换器"
      }
    },

	{
      path: "17-usecounter",
      name: "17UsecounterPage",
      component: () => import("@/views/composable-function/17-usecounter.vue"),
      meta: {
        title: "计数器"
      }
    }
	]
};

export default COMPOSABLE_FUNCTION_ROUTE;
