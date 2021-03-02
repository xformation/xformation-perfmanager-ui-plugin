// const IP = "100.64.108.25";
const IP = "localhost";

const securitySrvUrl = `http://${IP}:8094`;
const catalogSrvUrl = `http://${IP}:5050/api`;

export const config = {
  basePath: "/plugins/xformation-perfmanager-ui-plugin/page",
  GET_ALL_COLLECTOR: `${catalogSrvUrl}/listCollector`,
  ADD_CATALOG: `${catalogSrvUrl}/addCollector`,
  GET_FOLDER_TREE: `${catalogSrvUrl}/listFolderTree`,
  ADD_COLLECTOR_TO_LIBRARY: `${catalogSrvUrl}/addCollectorToLibrary`,
  GET_LIBRARY_TREE: `${catalogSrvUrl}/listLibraryTree`,
  ADD_DASHBOARD_TO_COLLECTOR: `${catalogSrvUrl}/addDashboardToCollector`,
  DELETE_DASHBOARD: `${catalogSrvUrl}`,
  REMOVE_COLLECTOR: `${catalogSrvUrl}/removeCollector`,
  DELETE_LIBRARY: `${catalogSrvUrl}/deleteCollector`,
  REMOVE_FOLDER: `${catalogSrvUrl}/removeFolder`,
  PARENT_NAME: "xformation-perfmanager-ui-plugin",

  PERMS_LIST_ALL: `${securitySrvUrl}/security/permissions/listAll`,

  SEVERITY_ERROR: "error",
  SEVERITY_SUCCESS: "success",
  SERVER_ERROR_MESSAGE:
    "Operation failed. Please check service logs for details",
  ADD_COLLECTOR_TO_LIBRARY_SUCCESS_MESSAGE:
    "Collector is successfully added to library",
  DASHBOARD_LIST_API: "/api/search",
  ADD_DASHBOARD_TO_COLLECTOR_SUCCESS_MESSAGE:
    "Dashborad is successfully added to collector",
  ADD_CATALOGUE_SUCCESS_MESSAGE: "Catalogue added successfully"
};
