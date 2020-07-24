import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { config } from '../../config';
import folderIcon from '../../img/config-collapse-icon1.png';
import fileIcon from '../../img/config-collapse-icon2.png';

export class Library extends React.Component<any, any> {
    breadCrumbs: any;
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
            libData: [{
                name: "Library",
                isFolder: true,
                items: [{
                    name: 'Personal',
                    isFolder: true,
                    description: 'My saved search and Dashboards',
                    createdBy: 'System Admin',
                    lastModified: '16/06/2020 by System Admin',
                    items: [
                        {
                            name: 'AWS Config',
                            description: 'Amazon Web Services (AWS) Config provides...',
                            createdBy: 'System Admin',
                            lastModified: '16/06/2020 by System Admin',
                            isFolder: true,
                            items: [
                                {
                                    name: 'AWS Config Overview - Interactive',
                                    description: 'AWS Config Overview - Interactive',
                                    createdBy: 'System Admin',
                                    lastModified: '16/06/2020 by System Admin',
                                },
                                {
                                    name: 'AWS Config Overview - Live',
                                    description: 'AWS Config Overview - Live',
                                    createdBy: 'System Admin',
                                    lastModified: '16/06/2020 by System Admin',
                                },
                                {
                                    name: 'Resource Modification Details - Interactive',
                                    description: 'Resource Modification Details - Interactive',
                                    createdBy: 'System Admin',
                                    lastModified: '16/06/2020 by System Admin',
                                },
                                {
                                    name: 'Configuration Trend',
                                    description: 'Configuration Trend',
                                    createdBy: 'System Admin',
                                    lastModified: '16/06/2020 by System Admin',
                                },
                                {
                                    name: 'Latest Resource Modifications',
                                    description: 'Latest Resource Modifications',
                                    createdBy: 'System Admin',
                                    lastModified: '16/06/2020 by System Admin',
                                },
                                {
                                    name: 'Most Frequently Modified Resource Types',
                                    description: 'Most Frequently Modified Resource Types',
                                    createdBy: 'System Admin',
                                    lastModified: '16/06/2020 by System Admin',
                                },
                                {
                                    name: 'Relationships',
                                    description: 'Relationships',
                                    createdBy: 'System Admin',
                                    lastModified: '16/06/2020 by System Admin',
                                },
                                {
                                    name: 'ResourceNames Lookup Table Generator',
                                    description: 'ResourceNames Lookup Table Generator',
                                    createdBy: 'System Admin',
                                    lastModified: '16/06/2020 by System Admin',
                                },
                            ]
                        },
                        {
                            name: 'Amazon ECS',
                            description: 'Amazon EC2 Container Service (Amazon ECS)...',
                            createdBy: 'System Admin',
                            lastModified: '16/06/2020 by System Admin',
                        },
                        {
                            name: 'AWS Cloud Trail',
                            description: 'Amazon Web Services (AWS) Config provides...',
                            createdBy: 'System Admin',
                            lastModified: '16/06/2020 by System Admin',
                            isFolder: true,
                            items: [
                                {
                                    name: 'AWS Config Overview - Interactive',
                                    description: 'AWS Config Overview - Interactive',
                                    createdBy: 'System Admin',
                                    lastModified: '16/06/2020 by System Admin',
                                    isFolder: true,
                                    items: [{
                                        name: 'Amazon ECS',
                                        description: 'Amazon EC2 Container Service (Amazon ECS)...',
                                        createdBy: 'System Admin',
                                        lastModified: '16/06/2020 by System Admin',
                                    }, {
                                        name: 'Amazon ECS',
                                        description: 'Amazon EC2 Container Service (Amazon ECS)...',
                                        createdBy: 'System Admin',
                                        lastModified: '16/06/2020 by System Admin',
                                    }, {
                                        name: 'Amazon ECS',
                                        description: 'Amazon EC2 Container Service (Amazon ECS)...',
                                        createdBy: 'System Admin',
                                        lastModified: '16/06/2020 by System Admin',
                                    }, {
                                        name: 'Amazon ECS',
                                        description: 'Amazon EC2 Container Service (Amazon ECS)...',
                                        createdBy: 'System Admin',
                                        lastModified: '16/06/2020 by System Admin',
                                    },]
                                },
                                {
                                    name: 'AWS Config Overview - Live',
                                    description: 'AWS Config Overview - Live',
                                    createdBy: 'System Admin',
                                    lastModified: '16/06/2020 by System Admin',
                                },
                                {
                                    name: 'Resource Modification Details - Interactive',
                                    description: 'Resource Modification Details - Interactive',
                                    createdBy: 'System Admin',
                                    lastModified: '16/06/2020 by System Admin',
                                },
                                {
                                    name: 'Configuration Trend',
                                    description: 'Configuration Trend',
                                    createdBy: 'System Admin',
                                    lastModified: '16/06/2020 by System Admin',
                                },
                            ]
                        },
                    ],
                }]
            }],
            activeTabs: [0]
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

    _displayTab = () => {
        const { activeTabs, libData } = this.state;
        const length = activeTabs.length;
        const duplicateTabs = [...activeTabs];
        const retData = [];
        let folder = libData;
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
                            <div className="d-flex">
                                <button className="btn btn-link">
                                    <i className="fa fa-edit"></i>
                                </button>
                                <button className="btn btn-link">
                                    <i className="fa fa-trash"></i>
                                </button>
                                <button className="btn btn-link" id="PopoverFocus">
                                    <i className="fa fa-ellipsis-h"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                );
            }
        } else {
            retData.push(<tr><td>There is some issue...</td></tr>)
        }
        return retData;
    }

    _onClickItem = (index: any, item: any) => {
        const { activeTabs } = this.state;
        if (item.isFolder) {
            activeTabs.push(index);
            this.setState({
                activeTabs
            });
        }
    };

    _onClickTab = (index: any) => {
        const { activeTabs } = this.state;
        activeTabs.splice(index + 1, activeTabs.length - 1);
        this.setState({
            activeTabs
        });
    };

    render() {
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
                    </div>
                </div>
            </div>
        );
    }
};