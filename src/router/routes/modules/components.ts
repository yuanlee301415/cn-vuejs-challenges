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
        title: "渲染函数[h()]"
      }
    }
    ]
};

export default COMPONENTS_ROUTE;
