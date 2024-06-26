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
    },

	{
      path: "18-uselocalstorage-customRef",
      name: "18UselocalstoragecustomRefPage",
      component: () => import("@/views/composable-function/18-uselocalstorage-customRef.vue"),
      meta: {
        title: "实现本地存储函数-customRef"
      }
    },

	{
      path: "18-uselocalstorage-computed",
      name: "18UselocalstoragecomputedPage",
      component: () => import("@/views/composable-function/18-uselocalstorage-computed.vue"),
      meta: {
        title: "实现本地存储函数-computed"
      }
    },

	
	{
      path: "25-usemouse",
      name: "25UsemousePage",
      component: () => import("@/views/composable-function/25-usemouse.vue"),
      meta: {
        title: "鼠标坐标"
      }
    }
	]
};

export default COMPOSABLE_FUNCTION_ROUTE;
