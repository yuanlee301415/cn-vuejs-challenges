import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const COMPOSITION_API_ROUTE: AppRouteRecordRaw = {
  path: "/composition-api",
  name: "CompositionApi",
  redirect: "/composition-api/10-lifecycle",
  component: LAYOUT,
  meta: {
    title: "Composition-API",
    hiddenChildrenInMenu: false
  },
  children: [
    {
      path: "10-lifecycle",
      name: "10LifecyclePage",
      component: () => import("@/views/composition-api/10-lifecycle.vue"),
      meta: {
        title: "生命周期钩子"
      }
    },

	{
      path: "3-losing-reactivity",
      name: "3LosingReactivityPage",
      component: () => import("@/views/composition-api/3-losing-reactivity.vue"),
      meta: {
        title: "响应性丟失"
      }
    },
	]
};

export default COMPOSITION_API_ROUTE;
