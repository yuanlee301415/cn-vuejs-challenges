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
      path: "2-ref-family",
      name: "2RefFamilyPage",
      component: () => import("@/views/composition-api/2-ref-family.vue"),
      meta: {
        title: "ref全家桶"
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

	{
      path: "4-writable-computed",
      name: "4WritableComputedPage",
      component: () => import("@/views/composition-api/4-writable-computed.vue"),
      meta: {
        title: "可写的计算属性"
      }
    },

	{
      path: "5-watch-family",
      name: "5WatchFamilyPage",
      component: () => import("@/views/composition-api/5-watch-family.vue"),
      meta: {
        title: "watch全家桶"
      }
    },

	{
      path: "6-shallow-ref",
      name: "6ShallowRefPage",
      component: () => import("@/views/composition-api/6-shallow-ref.vue"),
      meta: {
        title: "浅层ref-重新赋值"
      }
    },

    {
      path: "6-shallow-ref-triggerRef",
      name: "6ShallowRefTriggerRefPage",
      component: () => import("@/views/composition-api/6-shallow-ref-triggerRef.vue"),
      meta: {
        title: "浅层ref-triggerRef"
      }
    },

	{
      path: "8-effect-scope",
      name: "8EffectScopePage",
      component: () => import("@/views/composition-api/8-effect-scope.vue"),
      meta: {
        title: "Effect作用域API"
      }
    },

	{
      path: "23-custom-ref",
      name: "23CustomRefPage",
      component: () => import("@/views/composition-api/23-custom-ref.vue"),
      meta: {
        title: "自定义ref"
      }
    },
	]
};

export default COMPOSITION_API_ROUTE;
