import { Dashboard, ManageDashboard, Catalog, Collection } from "./ui";
import { ConfigCtrl } from "./ConfigCtrl";

// import { loadPluginCss } from '@grafana/runtime';
// Patch since @grafana/runtime is giving error on build
declare const window: any;
export function loadPluginCss() {
  if (window.grafanaBootData.user.lightTheme) {
    require("./css/perfmanager.light.css");
  } else {
    require("./css/perfmanager.dark.css");
  }
}

loadPluginCss();

export { ConfigCtrl, Dashboard, ManageDashboard, Catalog, Collection };
