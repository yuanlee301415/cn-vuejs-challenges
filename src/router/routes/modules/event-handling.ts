import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const EVENT_HANDLING_ROUTE: AppRouteRecordRaw = {
  path: "/event-handling",
  name: "EventHandling",
  redirect: "/event-handling/243-prevent-event-propagation",
  component: LAYOUT,
  meta: {
    title: "Event-Handling",
    hiddenChildrenInMenu: false
  },
  children: [
    {
      path: "243-prevent-event-propagation",
      name: "243PreventEventPropagationPage",
      component: () => import("@/views/event-handling/243-prevent-event-propagation.vue"),
      meta: {
        title: "阻止事件冒泡"
      }
    },
  ]
};

export default EVENT_HANDLING_ROUTE;
