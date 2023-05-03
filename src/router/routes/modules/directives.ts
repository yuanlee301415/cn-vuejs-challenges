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
  
	{
      path: "12-optimize-perf-directive",
      name: "12OptimizePerfDirectivePage",
      component: () => import("@/views/directives/12-optimize-perf-directive.vue"),
      meta: {
        title: "优化性能的指令"
      }
    },
	
	{
      path: "19-v-focus",
      name: "19VFocusPage",
      component: () => import("@/views/directives/19-v-focus.vue"),
      meta: {
        title: "切换焦点指令"
      }
    },
	
	{
      path: "20-v-debounce-click",
      name: "20VDebounceClickPage",
      component: () => import("@/views/directives/20-v-debounce-click.vue"),
      meta: {
        title: "防抖点击指令"
      }
    },
	]
};

export default DIRECTIVES_ROUTE;
