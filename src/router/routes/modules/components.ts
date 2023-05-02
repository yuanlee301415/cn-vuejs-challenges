import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const COMPONENTS_ROUTE: AppRouteRecordRaw = {
  path: "/components",
  name: "Components",
  redirect: "/components/323-prop-validation",
  component: LAYOUT,
  meta: {
    title: "Components",
    hiddenChildrenInMenu: false
  },
  children: [
    {
      path: "323-prop-validation",
      name: "323PropValidationPage",
      component: () => import("@/views/components/323-prop-validation.vue"),
      meta: {
        title: "Prop验证"
      }
    },

	{
      path: "218-h-render-function",
      name: "218HRenderFunctionPage",
      component: () => import("@/views/components/218-h-render-function.vue"),
      meta: {
        title: "渲染函数"
      }
    },

	{
      path: "21-functional-component",
      name: "21FunctionalComponent",
      component: () => import("@/views/components/21-functional-component.vue"),
      meta: {
        title: "函数式组件"
      }
    },

	{
      path: "208-tree-component",
      name: "208TreeComponentPage",
      component: () => import("@/views/components/208-tree-component.vue"),
      meta: {
        title: "树组件"
      }
    }
	]
};

export default COMPONENTS_ROUTE;
