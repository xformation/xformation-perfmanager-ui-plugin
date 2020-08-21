import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { config } from '../../config';
import folderIcon from '../../img/config-collapse-icon1.png';
import fileIcon from '../../img/config-collapse-icon2.png';
import { RestService } from '../_service/RestService';
import { Collapse } from 'reactstrap';
import collapseToggleIcon from '../../img/config-collapse-icon1.png';

export class Library extends React.Component<any, any> {
    breadCrumbs: any;
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
            isApiCalled: false,
            libData: [],
            activeTabs: [0],
            dashboardList: []
        };
        this.breadCrumbs = [
            {
                label: "Home",
                route: `/`
            },
            {
                label: "Monitor | Alerts",
                isCurrentPage: true
            }
        ];
    }

    async componentWillMount() {
        // this.setState({
        //     isApiCalled: true
        // });
        // try {
        //     await RestService.getData(config.GET_LIBRARY_TREE, null, null).then(
        //         (response: any) => {
        //             this.setState({
        //                 libData: response,
        //             });
        //             console.log("Library response : ", response);
        //         }
        //     );
        // } catch (err) {
        //     console.log("Loading library failed. Error: ", err);
        // }
        // this.setState({
        //     isApiCalled: false
        // });
        this.setState({
            libData: [
                {
                    "id": null,
                    "name": "Library",
                    "description": null,
                    "parentId": null,
                    "isOpened": false,
                    "isChecked": false,
                    "isFolder": true,
                    "items": [
                        {
                            "id": 1101,
                            "name": "AWS",
                            "description": "folder description to do",
                            "parentId": null,
                            "isOpened": false,
                            "isChecked": false,
                            "isFolder": true,
                            "items": [
                                {
                                    "id": 1104,
                                    "name": "VPC",
                                    "description": "folder description to do",
                                    "parentId": 1101,
                                    "isOpened": false,
                                    "isChecked": false,
                                    "isFolder": true,
                                    "items": [
                                        {
                                            "id": 1004,
                                            "name": "AWS VPC",
                                            "description": "AWS VPC Flow Log",
                                            "parentId": 1104,
                                            "isOpened": false,
                                            "isChecked": false,
                                            "isFolder": false,
                                            "items": [],
                                            "hasChild": false,
                                            "createdBy": null,
                                            "createdOn": null,
                                            "updatedOn": null,
                                            "updatedBy": null,
                                            "lastModified": null,
                                            "dashboardList": [
                                                {
                                                    "title": "Amazon VPC Flow Logs - Accespts",
                                                    "description": "Amazon VPC Flow Logs - Accespts",
                                                    "open": false,
                                                    "dashboardJson": null,
                                                    "id": 1206
                                                },
                                                {
                                                    "title": "Amazon VPC Flow Logs - Overview",
                                                    "description": "Amazon VPC Flow Logs - Overview",
                                                    "open": false,
                                                    "dashboardJson": null,
                                                    "id": 1207
                                                },
                                                {
                                                    "title": "Amazon VPC Flow Logs - Rejects",
                                                    "description": "Amazon VPC Flow Logs - Rejects",
                                                    "open": false,
                                                    "dashboardJson": null,
                                                    "id": 1208
                                                },
                                                {
                                                    "title": "Amazon VPC Flow Logs - Traffic",
                                                    "description": "Amazon VPC Flow Logs - Traffic",
                                                    "open": false,
                                                    "dashboardJson": null,
                                                    "id": 1209
                                                }
                                            ]
                                        }
                                    ],
                                    "hasChild": true,
                                    "createdBy": null,
                                    "createdOn": null,
                                    "updatedOn": null,
                                    "updatedBy": null,
                                    "lastModified": null,
                                    "dashboardList": []
                                }
                            ],
                            "hasChild": true,
                            "createdBy": null,
                            "createdOn": null,
                            "updatedOn": null,
                            "updatedBy": null,
                            "lastModified": null,
                            "dashboardList": []
                        },
                        {
                            "id": 1105,
                            "name": "NGINS",
                            "description": "folder description to do",
                            "parentId": null,
                            "isOpened": false,
                            "isChecked": false,
                            "isFolder": true,
                            "items": [
                                {
                                    "id": 1005,
                                    "name": "NGINX Log",
                                    "description": "NGINX Log",
                                    "parentId": 1105,
                                    "isOpened": false,
                                    "isChecked": false,
                                    "isFolder": false,
                                    "items": [],
                                    "hasChild": false,
                                    "createdBy": null,
                                    "createdOn": null,
                                    "updatedOn": null,
                                    "updatedBy": null,
                                    "lastModified": null,
                                    "dashboardList": [
                                        {
                                            "title": "Nginx Logs",
                                            "description": "Nginx Logs",
                                            "open": false,
                                            "dashboardJson": null,
                                            "id": 1210
                                        }
                                    ]
                                }
                            ],
                            "hasChild": true,
                            "createdBy": null,
                            "createdOn": null,
                            "updatedOn": null,
                            "updatedBy": null,
                            "lastModified": null,
                            "dashboardList": []
                        },
                        {
                            "id": 1101,
                            "name": "AWS",
                            "description": "folder description to do",
                            "parentId": null,
                            "isOpened": false,
                            "isChecked": false,
                            "isFolder": true,
                            "items": [
                                {
                                    "id": 1102,
                                    "name": "RDS",
                                    "description": "folder description to do",
                                    "parentId": 1101,
                                    "isOpened": false,
                                    "isChecked": false,
                                    "isFolder": true,
                                    "items": [
                                        {
                                            "id": 1002,
                                            "name": "AWS RDS",
                                            "description": "AWS RDS PostgresSQL",
                                            "parentId": 1102,
                                            "isOpened": false,
                                            "isChecked": false,
                                            "isFolder": false,
                                            "items": [],
                                            "hasChild": false,
                                            "createdBy": null,
                                            "createdOn": null,
                                            "updatedOn": null,
                                            "updatedBy": null,
                                            "lastModified": null,
                                            "dashboardList": [
                                                {
                                                    "title": "Amazon RDS",
                                                    "description": "Amazon RDS",
                                                    "open": false,
                                                    "dashboardJson": null,
                                                    "id": 1051
                                                },
                                                {
                                                    "title": "Amazon RDS OS Metrics",
                                                    "description": "Amazon RDS OS Metrics",
                                                    "open": false,
                                                    "dashboardJson": null,
                                                    "id": 1201
                                                },
                                                {
                                                    "title": "Amazon RDS",
                                                    "description": "Amazon RDS",
                                                    "open": false,
                                                    "dashboardJson": null,
                                                    "id": 1202
                                                },
                                                {
                                                    "title": "Postgres Overview.json",
                                                    "description": "Postgres Overview.json",
                                                    "open": false,
                                                    "dashboardJson": null,
                                                    "id": 1203
                                                },
                                                {
                                                    "title": "PostgreSQL Database",
                                                    "description": "PostgreSQL Database",
                                                    "open": false,
                                                    "dashboardJson": null,
                                                    "id": 1204
                                                }
                                            ]
                                        }
                                    ],
                                    "hasChild": true,
                                    "createdBy": null,
                                    "createdOn": null,
                                    "updatedOn": null,
                                    "updatedBy": null,
                                    "lastModified": null,
                                    "dashboardList": []
                                }
                            ],
                            "hasChild": true,
                            "createdBy": null,
                            "createdOn": null,
                            "updatedOn": null,
                            "updatedBy": null,
                            "lastModified": null,
                            "dashboardList": []
                        },
                        {
                            "id": 1101,
                            "name": "AWS",
                            "description": "folder description to do",
                            "parentId": null,
                            "isOpened": false,
                            "isChecked": false,
                            "isFolder": true,
                            "items": [
                                {
                                    "id": 1103,
                                    "name": "VPN",
                                    "description": "folder description to do",
                                    "parentId": 1101,
                                    "isOpened": false,
                                    "isChecked": false,
                                    "isFolder": true,
                                    "items": [
                                        {
                                            "id": 1003,
                                            "name": "AWS VPN",
                                            "description": "AWS VPN",
                                            "parentId": 1103,
                                            "isOpened": false,
                                            "isChecked": false,
                                            "isFolder": false,
                                            "items": [],
                                            "hasChild": false,
                                            "createdBy": null,
                                            "createdOn": null,
                                            "updatedOn": null,
                                            "updatedBy": null,
                                            "lastModified": null,
                                            "dashboardList": [
                                                {
                                                    "title": "AWS VPN Dashboard",
                                                    "description": "AWS VPN Dashboard",
                                                    "open": false,
                                                    "dashboardJson": null,
                                                    "id": 1205
                                                }
                                            ]
                                        }
                                    ],
                                    "hasChild": true,
                                    "createdBy": null,
                                    "createdOn": null,
                                    "updatedOn": null,
                                    "updatedBy": null,
                                    "lastModified": null,
                                    "dashboardList": []
                                }
                            ],
                            "hasChild": true,
                            "createdBy": null,
                            "createdOn": null,
                            "updatedOn": null,
                            "updatedBy": null,
                            "lastModified": null,
                            "dashboardList": []
                        }
                    ],
                    "hasChild": false,
                    "createdBy": null,
                    "createdOn": null,
                    "updatedOn": null,
                    "updatedBy": null,
                    "lastModified": null,
                    "dashboardList": []
                }
            ]
        });
    }

    _displayTab = () => {
        const { activeTabs, libData } = this.state;
        const length = activeTabs.length;
        const duplicateTabs = [...activeTabs];
        const retData = [];
        let folder = libData;
        if (libData && libData.length > 0) {
            for (let i = 0; i < length; i++) {
                let tab = duplicateTabs[i];
                let lib = folder[tab];
                folder = lib.items;
                retData.push(
                    <li className={length - 1 === i ? "active" : ''} onClick={() => this._onClickTab(i)}>
                        {lib.name}
                    </li>
                );
            }
        }
        return retData;
    };

    _findChild = (activeTabs: any, libData: any): any => {
        if (activeTabs.length > 1 && libData.length > 0) {
            let currentLib = libData[activeTabs[0]];
            activeTabs.splice(0, 1);
            return this._findChild(activeTabs, currentLib.items);
        } else if (activeTabs.length === 1) {
            let currentLib = libData[activeTabs[0]];
            return currentLib;
        }
        return null;
    };

    _createLibararyTable = () => {
        const { activeTabs, libData } = this.state;
        const retData = [];
        const currentItem = this._findChild([...activeTabs], libData);
        if (currentItem) {
            const items = currentItem.items;
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                retData.push(
                    <tr className="">
                        <td className="">
                            <div onClick={() => this._onClickItem(i, item)} className="pointer-label">
                                <input type="checkbox" className="checkbox" />
                                <span className="config-icon">
                                    {
                                        item.isFolder &&
                                        <img src={folderIcon} alt="" />
                                    }
                                    {
                                        !item.isFolder &&
                                        <img src={fileIcon} alt="" />
                                    }
                                </span>
                                <p>{item.name}</p>
                            </div>
                        </td>
                        <td>{item.description}</td>
                        <td>{item.createdBy}</td>
                        <td>{item.lastModified}</td>
                        <td>
                            <div className="text-right">
                                <button className="btn btn-link">
                                    <i className="fa fa-edit"></i>
                                </button>
                                <button className="btn btn-link">
                                    <i className="fa fa-trash"></i>
                                </button>
                                {
                                    !item.isFolder ?
                                        <Link to={`/dashboard/import?id=${item.id}&isFolder=${!item.isFolder}`} className="btn btn-link popover-link" id="PopoverFocus">
                                            <i  className="fa fa-ellipsis-h"></i>
                                        </Link>
                                        :
                                        <button className="btn btn-link" id="PopoverFocus">
                                            <i className="fa fa-ellipsis-h"></i>
                                        </button>
                                }
                            </div>
                        </td>
                    </tr>
                );
            }
        } else {
            retData.push(<tr><td colSpan={5} style={{ textAlign: "center" }}>Your data is loading...</td></tr>)
        }
        return retData;
    }

    _onClickItem = (index: any, item: any) => {
        const { activeTabs } = this.state;
        if (item.isFolder) {
            activeTabs.push(index);
            this.setState({
                activeTabs,
                dashboardList: []
            });
        } else if (item.dashboardList) {
            this.setState({
                dashboardList: item.dashboardList
            });
        }
    };

    _onClickTab = (index: any) => {
        const { activeTabs } = this.state;
        activeTabs.splice(index + 1, activeTabs.length - 1);
        this.setState({
            activeTabs,
            dashboardList: []
        });
    };

    renderDashboardList = () => {
        let { dashboardList } = this.state;
        const retData = [];
        if (dashboardList && dashboardList.length > 0) {
            const length = dashboardList.length;
            for (let i = 0; i < length; i++) {
                const dashboard = dashboardList[i];
                retData.push(
                    <div className="config-collapse" key={`dashboard-list-${i}`}>
                        <div className='collapse-toggle d-flex' onClick={() => this.openDashboard(i)}>
                            <div className="collapse-Toggle-icon"><img src={collapseToggleIcon} alt="" /></div>
                            <div className="collapse-Toggle-name">{dashboard.title}</div>
                            <div className="float-right collapse-Toggle-buttons">
                                <button className="btn btn-link">
                                    <i className="fa fa-edit"></i>
                                </button>
                                <button className="btn btn-link">
                                    <i className="fa fa-trash"></i>
                                </button>
                                <Link to={`/dashboard/import?id=${dashboard.id}&isFolder=false`} className="btn btn-link popover-link" id="PopoverFocus">
                                    <i className="fa fa-ellipsis-h"></i>
                                </Link>
                            </div>
                        </div>
                        <Collapse isOpen={dashboard.open}>
                            <div className="collapse-card-body">
                                <p>{dashboard.description}</p>
                            </div>
                        </Collapse>
                    </div>
                );
            }
        }
        return retData;
    };

    openDashboard = (index: any) => {
        let { dashboardList } = this.state;
        dashboardList[index].open = !dashboardList[index].open;
        this.setState({
            dashboardList
        });
    };

    render() {
        const state = this.state;
        return (
            <div className="perfmanager-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="MONITOR | ALERTS" />
                <div className="perfmanager-page-container">
                    <div className="common-container">
                        <div className="row">
                            <div className="col-lg-10 col-md-12 col-sm-12">
                                <Link to={`${config.basePath}/managedashboard`} className="blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Manage Dashboards
                                </Link>
                                <Link to={`${config.basePath}/catalog`} className="blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Catalog
                                </Link>
                                <Link to={`${config.basePath}/library`} className="blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Library
                                </Link>
                                <Link to={`${config.basePath}/collection`} className="blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Collection
                                </Link>
                                <Link to="/plugins/xformation-alertmanager-ui-plugin/page/managealertrule" className="blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Rule
                                </Link>
                                <a className="blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Preferences
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-12 col-sm-12">
                                <div className="float-right common-right-btn">
                                    <Link to={`${config.basePath}/dashboard`} className="white-button"><i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp; Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="common-container library-search">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <div className="library-heading">Library</div>
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12">
                                <div className="float-right">
                                    <a href="#" className="blue-button add-folder">Add Folder</a>
                                    <div className="form-group search-control-group">
                                        <form>
                                            <input type="text" className="input-group-text" placeholder="Search" />
                                            <button>
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="common-container p-b-0">
                        <div className="library-tabs">
                            <ul>
                                {this._displayTab()}
                            </ul>
                        </div>
                    </div>
                    <div className="common-container border-bottom-0">
                        <div className="tab-container">
                            <div className="library-details">
                                <div className="container-inner">
                                    <table className="alert-data-table">
                                        <tbody>
                                            <tr className="alert-data-table-header">
                                                <th>
                                                    <div className="pointer-label">
                                                        <input type="checkbox" className="checkbox" />
                                                Name
                                            </div>
                                                </th>
                                                <th>Description</th>
                                                <th>Created By</th>
                                                <th>Last Modified</th>
                                                <th></th>
                                            </tr>
                                            {this._createLibararyTable()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-collapse-expand catalog-collapse m-t-2">
                            <div className="dashboard-collapse-expand-inner">
                                {
                                    state.dashboardList.length > 0 && this.renderDashboardList()
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};