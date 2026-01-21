import { initRouter } from "./router.js";
import { initState } from "./state.js";

export function initApp() {
  initState();
  initRouter();
}

