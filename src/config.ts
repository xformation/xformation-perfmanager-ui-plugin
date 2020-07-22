const IP = "localhost";

const securitySrvUrl = `http://${IP}:8094`;
const catalogSrvUrl = `http://${IP}:4000/api`;

export const config = {
  basePath: "/plugins/xformation-perfmanager-ui-plugin/page",
  GET_ALL_COLLECTOR: `${catalogSrvUrl}/listCollector`,
  PERMS_LIST_ALL: `${securitySrvUrl}/security/permissions/listAll`
};
