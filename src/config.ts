const IP = '100.64.107.25';
//const securitySrvUrl = `http://${IP}:8094`;
const assetSrvUrl = `http://${IP}:5057/api`;
const grafanaUrl = `http://${IP}:3000/api`;
const catalogSrvUrl = `http://${IP}:5050/api`;

export const config = {
  basePath: '/a/xformation-perfmanager-ui-plugin',
  octantURL: 'http://localhost:7777/#/',
  SEVERITY_ERROR: 'error',

  GET_ALL_ACCOUNT: `${assetSrvUrl}/searchAccounts`,
  GET_ACCOUNT_BY_ID: `${assetSrvUrl}/getAccount`,
  PARENT_NAME: "xformation-perfmanager-ui-plugin",
  SEVERITY_SUCCESS: 'success',
  ADD_Organization: `${assetSrvUrl}/addEnvironment`,
  SERVER_ERROR_MESSAGE: 'SERVER_ERROR_MESSAGE',
  REMOVE_COLLECTOR: `${catalogSrvUrl}/removeCollector`,
  DELETE_LIBRARY: `${catalogSrvUrl}/deleteCollector`,
  REMOVE_FOLDER: `${catalogSrvUrl}/removeFolder`,
  DELETE_DASHBOARD: `${catalogSrvUrl}`,
  UPDATE_CATALOG_SUCCESS: "Catalogue updated successfully",
  UPDATE_DASHBOARD_MONITOR_FLAG: "Dashborad Monitor flag is updated",
  UPDATE_DASHBOARD_MONITOR_FLAG_URL: `${catalogSrvUrl}/updateDashbordMonitorFlag`,
  GET_LIBRARY_TREE: `${catalogSrvUrl}/listLibraryTree`,
  DASHBOARD_LIST_API: "/api/search",
  GET_ALL_COLLECTOR: `${catalogSrvUrl}/listCollector`,
  UPDATE_CATALOG: `${catalogSrvUrl}/updateCollector`,
  UPDATE_CATALOG_ERROR: " Catalog Can't update",
  GET_FOLDER_TREE: `${catalogSrvUrl}/listFolderTree`,
  ADD_COLLECTOR_TO_LIBRARY: `${catalogSrvUrl}/addCollectorToLibrary`,
  ADD_COLLECTOR_TO_LIBRARY_SUCCESS_MESSAGE:
    "Collector is successfully added to library",
  ADD_DASHBOARD_TO_COLLECTOR: `${catalogSrvUrl}/addDashboardToCollector`,
  ADD_DASHBOARD_TO_COLLECTOR_SUCCESS_MESSAGE:
    "Dashborad is successfully added to collector",
  DASHBOARD_TYPES: ["KPI", "LOG", "SCHEMA"],
  ADD_CATALOG: `${catalogSrvUrl}/addCollector`,
  ADD_CATALOGUE_SUCCESS_MESSAGE: "Catalogue added successfully",
  CATALOG_SUB_TYPES_JSON: {
    AWS: ["VPS", "VPN", "RSD"],
    AZURE: ["X", "Y", "Z"],
    GCP: ["A", "B", "C"],
    Synectiks: ["P", "Q", "R"]
  },
  
  DASHBOARD_JSON: {
    Uid: '',
    Uuid: '',
    Slug: '',
    Title: '',
    OrgId: 1,
    'GnetId ': 0,
    Version: '1',
    PluginId: '',
    UpdatedBy: '1',
    CreatedBy: '1',
    FolderId: 0,
    IsFolder: false,
    HasAcl: false,
    Data: '',
    SourceJsonRef: '',
    InputSourceId: '',
    AccountId: '',
    TenantId: '',
    IsCloud: true,
    CloudName: '',
    ElementType: '',
    FileName: '',
    InputType: '',
  },
  RAW: {
    Dashboard: {},
    UserId: 1,
    Overwrite: true,
    Message: '',
    OrgId: 1,
    PluginId: '',
    FolderId: 0,
    IsFolder: false,
  },

  USERID: 'admin',
  PASSWORD: 'password',
  // GET_ALL_ORGANIZATIONS: `${assetSrvUrl}/getAllOrganizations`,
  ADD_ORGANIZATION_UNIT: `${assetSrvUrl}/addOrganizationUnit`,
  ADD_ACCOUNT: `${assetSrvUrl}/addAccount`,

  GET_USER_ORGANIZATION: `${assetSrvUrl}/getAllOrgUnits`,
  GET_DISCOVERED_ASSETS: `${assetSrvUrl}/getDiscoveredAsset`,
  SEARCH_APPLICATION_ASSETS: `${assetSrvUrl}/searchApplicationAsset`,
  GET_APPLICATION_ASSETS_BY_INPUT_TYPE: `${assetSrvUrl}/getApplicationAssetsGropuByInputType`,
  BULK_ADD_APPLICATION_ASSETS: `${assetSrvUrl}/bulkAddApplicationAssets`,
  BULK_UPDATE_APPLICATION_ASSETS: `${assetSrvUrl}/bulkUpdateApplicationAssets`,
  ADD_INPUT_CONFIG: `${assetSrvUrl}/addInputConfig`,
  SEARCH_INPUT_CONFIG: `${assetSrvUrl}/searchInputConfig`,

  ADD_DASHBOARDS_TO_GRAFANA: `${grafanaUrl}/dashboards/importAssets`,
  ADD_DATASOURCE_IN_GRAFANA: `${grafanaUrl}/datasources`,
  // UPDATE_DATASOURCE_IN_GRAFANA: `${grafanaUrl}/datasources/updateDataSource`,
  GET_VIEW_JSON: `${grafanaUrl}/dashboards/filterdashboards`,

  ADD_INPUT: `${assetSrvUrl}/addInput`,
  UPDATE_INPUT: `${assetSrvUrl}/updateInput`,
  SEARCH_INPUT: `${assetSrvUrl}/searchInput`,

  GET_AWS_REGIONS: `${assetSrvUrl}/getAwsRegions`,
  PREVIEW_DASHBOARDS_URL: `${grafanaUrl}/dashboards/previewDashboard`,
};
