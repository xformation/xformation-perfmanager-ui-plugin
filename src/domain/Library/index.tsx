import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { config } from '../../config';
import folderIcon from '../../img/config-collapse-icon1.png';
import fileIcon from '../../img/config-collapse-icon2.png';
import { RestService } from '../_service/RestService';
import { Collapse } from 'reactstrap';
import collapseToggleIcon from '../../img/config-collapse-icon1.png';
import ConfirmDialog from '../../components/ConfirmDialog';
import AlertMessage from '../../components/AlertMessage';

export class Library extends React.Component<any, any> {
    breadCrumbs: any;
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
            isApiCalled: false,
            libData: [],
            activeTabs: [0],
            dashboardList: [],
            isConfirmDialogOpen: false,
            confirmTitleMessage: null,
            message: null,
            objectType: null,
            objectId: null,
            object:null,
            isAlertOpen: false,
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
        this.fetchData();
    }

    async fetchData() {
        this.setState({
            isApiCalled: true
        });
        try {
            await RestService.getData(config.GET_LIBRARY_TREE, null, null).then(
                (response: any) => {
                    this.setState({
                        libData: response,
                    });
                    console.log("Library response : ", response);
                })
        } catch (err) {
            console.log("Loading library failed. Error: ", err);
        }
        this.setState({
            isApiCalled: false
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
                                {
                                        item.isFolder &&
                                        <button onClick={() => this.removeFolder(item)} className="btn btn-link">
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    }
                                {
                                       !item.isFolder &&
                                       <button onClick={() => this.removeCollector(item)} className="btn btn-link">
                                            <i className="fa fa-trash"></i>
                                       </button>
                                }
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
                            <div className="collapse-Toggle-name">{dashboard.description}</div>
                            <div className="collapse-Toggle-name">{dashboard.createdBy}</div>
                            <div className="collapse-Toggle-name">{dashboard.lastModified}</div>
                            <div className="float-right collapse-Toggle-buttons">
                                <button className="btn btn-link">
                                    <i className="fa fa-edit"></i>
                                </button>
                                <button onClick={() => this.deleteDashboard(dashboard)} className="btn btn-link">
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

    deleteDashboard = (dashboard: any) => {
        console.log("Dashborad="+dashboard.id);
        this.setState({
            confirmTitleMessage: "Delete Dashboard",
            message: "Are you sure, you want to delete the dashboard?",
            isConfirmDialogOpen: true,
            objectType: "dashboard",
            object: dashboard,
        });
    };
    removeCollector = (collector: any) => {
        console.log("Parent id : ", collector.parentId);
        this.setState({
            confirmTitleMessage: "Remove Collector",
            message: "Are you sure, you want to remove the collector?",
            isConfirmDialogOpen: true,
            objectType: "collector",
            object: collector,
        });
    };
    removeFolder=(folder: any) => {
        console.log("library id : ", folder.id);
        this.setState({
            confirmTitleMessage: "Remove Folder",
            message: "Are you sure, you want to Remove Folder?",
            isConfirmDialogOpen: true,
            objectType: "folder",
            object: folder,
        });
    };
    handleCloseConfirmDialog = () => {
        this.setState({
            isConfirmDialogOpen: false
        })
    }

    handleConfirmDelete = (objectType: any, object: any) => {
        console.log("Deleting.... objectType : "+objectType+", objectId : "+object.id);
        let url = null;
        if(objectType === "dashboard"){
            url = config.DELETE_DASHBOARD+`/`+object.id;
        }
        if(objectType === "collector"){
            url = config.REMOVE_COLLECTOR+`?collectorId=`+object.id+`&folderId=`+object.parentId;
            console.log("url="+url);
        }
        if(objectType === "folder"){
            url = config.REMOVE_FOLDER+`/`+object.id;
            console.log("url=",url)
        }
        this.callDeleteApi(url);
        this.setState({
            isConfirmDialogOpen: false
        })
    }

    async callDeleteApi(url: any){
        await RestService.deleteObject(url).then((response: any) => {
            console.log("Delete Response : ", response);
            this.setState({
                severity: config.SEVERITY_SUCCESS,
                message: 'Data deleted successfully',
                isAlertOpen: true,
            });
        }).catch(error => {
            console.log('Deletion error', error);
            this.setState({
                severity: config.SEVERITY_ERROR,
                message: 'Data could not be deleted. Please check the service logs for details',
                isAlertOpen: true,
            });
        });
    }

    handleCloseAlert = (e: any) => {
        this.setState({
            isAlertOpen: false
        })
    }

    render() {
        const state = this.state;
        return (
            <div className="perfmanager-dashboard-container">
                <ConfirmDialog objectType={state.objectType}  objectId={state.object} handleCloseConfirmDialog={this.handleCloseConfirmDialog} handleConfirmDelete={this.handleConfirmDelete} open={state.isConfirmDialogOpen} titleMsg={state.confirmTitleMessage} msg={state.message}></ConfirmDialog>
                <AlertMessage handleCloseAlert={this.handleCloseAlert} open={state.isAlertOpen} severity={state.severity} msg={state.message}></AlertMessage>
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
                        <div className="library-collapse-expand catalog-collapse m-t-2">
                            <div className="library-collapse-expand-inner">
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