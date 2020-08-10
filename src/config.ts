const IP = "100.64.108.25";

const securitySrvUrl = `http://${IP}:8094`;
const catalogSrvUrl = `http://${IP}:5040/api`;

export const config = {
  basePath: "/plugins/xformation-perfmanager-ui-plugin/page",
  GET_ALL_COLLECTOR: `${catalogSrvUrl}/listCollector`,
  GET_FOLDER_TREE: `${catalogSrvUrl}/listFolderTree`,
  ADD_COLLECTOR_TO_LIBRARY: `${catalogSrvUrl}/addCollectorToLibrary`,
  GET_LIBRARY_TREE: `${catalogSrvUrl}/listLibraryTree`,

  PERMS_LIST_ALL: `${securitySrvUrl}/security/permissions/listAll`,

  SEVERITY_ERROR: "error",
  SEVERITY_SUCCESS: "success",
  SERVER_ERROR_MESSAGE:
    "Operation failed. Please check service logs for details",
  ADD_COLLECTOR_TO_LIBRARY_SUCCESS_MESSAGE:
    "Collector is successfully added to library",
  DASHBOARD_LIST_API: "http://localhost:3002/api/search"
};
