import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { config } from '../../config';
import { LibraryDetails } from './LibraryDetails';
import { Personal } from './Personal';
import { AwsConfig } from './AwsConfig';

export class Library extends React.Component<any, any> {
    breadCrumbs: any;
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
            activeTab: 0,
            tabData: [
                { tabtitle: 'Library' },
            ],
            libraryData: [{
                name: 'Personal',
                activeTab: 0,
                description: 'My saved search and Dashboards',
                createdBy: 'System Admin',
                lastModified: '16/06/2020 by System Admin',
                libraryChildFolder: [
                    {
                        name: 'AWS Config',
                        description: 'Amazon Web Services (AWS) Config provides...',
                        createdBy: 'System Admin',
                        lastModified: '16/06/2020 by System Admin',
                        activeTab: 1,
                        libraryChildFolder: [
                            {
                                name: 'AWS Config Overview - Interactive',
                                description: 'AWS Config Overview - Interactive',
                                createdBy: 'System Admin',
                                lastModified: '16/06/2020 by System Admin',
                                activeTab: 2,
                            },
                            {
                                name: 'AWS Config Overview - Live',
                                description: 'AWS Config Overview - Live',
                                createdBy: 'System Admin',
                                lastModified: '16/06/2020 by System Admin',
                                activeTab: 2,
                            },
                            {
                                name: 'Resource Modification Details - Interactive',
                                description: 'Resource Modification Details - Interactive',
                                createdBy: 'System Admin',
                                lastModified: '16/06/2020 by System Admin',
                                activeTab: 2,
                            },
                            {
                                name: 'Configuration Trend',
                                description: 'Configuration Trend',
                                createdBy: 'System Admin',
                                lastModified: '16/06/2020 by System Admin',
                                activeTab: 2,
                            },
                            {
                                name: 'Latest Resource Modifications',
                                description: 'Latest Resource Modifications',
                                createdBy: 'System Admin',
                                lastModified: '16/06/2020 by System Admin',
                                activeTab: 2,
                            },
                            {
                                name: 'Most Frequently Modified Resource Types',
                                description: 'Most Frequently Modified Resource Types',
                                createdBy: 'System Admin',
                                lastModified: '16/06/2020 by System Admin',
                                activeTab: 2,
                            },
                            {
                                name: 'Relationships',
                                description: 'Relationships',
                                createdBy: 'System Admin',
                                lastModified: '16/06/2020 by System Admin',
                                activeTab: 2,
                            },
                            {
                                name: 'ResourceNames Lookup Table Generator',
                                description: 'ResourceNames Lookup Table Generator',
                                createdBy: 'System Admin',
                                lastModified: '16/06/2020 by System Admin',
                                activeTab: 2,
                            },
                        ]
                    },
                    {
                        name: 'Amazon ECS',
                        description: 'Amazon EC2 Container Service (Amazon ECS)...',
                        createdBy: 'System Admin',
                        lastModified: '16/06/2020 by System Admin'
                    },
                    {
                        name: 'AWS Cloud Trail',
                        description: 'monitor your AWS deployments, with predefi...',
                        createdBy: 'System Admin',
                        lastModified: '16/06/2020 by System Admin'
                    }
                ]
            }],
            duplicateLibraryData: [{
                name: 'Personal',
                activeTab: 0,
                description: 'My saved search and Dashboards',
                createdBy: 'System Admin',
                lastModified: '16/06/2020 by System Admin',
                tabtitle: 'Library',
                libraryChildFolder: [
                    {
                        name: 'AWS Config',
                        description: 'Amazon Web Services (AWS) Config provides...',
                        createdBy: 'System Admin',
                        lastModified: '16/06/2020 by System Admin',
                        activeTab: 1,
                        libraryChildFolder: [
                            {
                                name: 'AWS Config Overview - Interactive',
                                description: 'AWS Config Overview - Interactive',
                                createdBy: 'System Admin',
                                lastModified: '16/06/2020 by System Admin',
                                activeTab: 2,
                            },
                            {
                                name: 'AWS Config Overview - Live',
                                description: 'AWS Config Overview - Live',
                                createdBy: 'System Admin',
                                lastModified: '16/06/2020 by System Admin',
                                activeTab: 2,
                            },
                            {
                                name: 'Resource Modification Details - Interactive',
                                description: 'Resource Modification Details - Interactive',
                                createdBy: 'System Admin',
                                lastModified: '16/06/2020 by System Admin',
                                activeTab: 2,
                            },
                            {
                                name: 'Configuration Trend',
                                description: 'Configuration Trend',
                                createdBy: 'System Admin',
                                lastModified: '16/06/2020 by System Admin',
                                activeTab: 2,
                            },
                            {
                                name: 'Latest Resource Modifications',
                                description: 'Latest Resource Modifications',
                                createdBy: 'System Admin',
                                lastModified: '16/06/2020 by System Admin',
                                activeTab: 2,
                            },
                            {
                                name: 'Most Frequently Modified Resource Types',
                                description: 'Most Frequently Modified Resource Types',
                                createdBy: 'System Admin',
                                lastModified: '16/06/2020 by System Admin',
                                activeTab: 2,
                            },
                            {
                                name: 'Relationships',
                                description: 'Relationships',
                                createdBy: 'System Admin',
                                lastModified: '16/06/2020 by System Admin',
                                activeTab: 2,
                            },
                            {
                                name: 'ResourceNames Lookup Table Generator',
                                description: 'ResourceNames Lookup Table Generator',
                                createdBy: 'System Admin',
                                lastModified: '16/06/2020 by System Admin',
                                activeTab: 2,
                            },
                        ]
                    },
                    {
                        name: 'Amazon ECS',
                        description: 'Amazon EC2 Container Service (Amazon ECS)...',
                        createdBy: 'System Admin',
                        lastModified: '16/06/2020 by System Admin'
                    },
                    {
                        name: 'AWS Cloud Trail',
                        description: 'monitor your AWS deployments, with predefi...',
                        createdBy: 'System Admin',
                        lastModified: '16/06/2020 by System Admin'
                    }
                ]
            }]
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
    setActiveTabAndTableData = (activeTab: any) => {
        const { duplicateLibraryData } = this.state;
        let tabsData = [ {'tabtitle':'Library'}];
        for (let i = 0; i < duplicateLibraryData.length; i++) {
            if (activeTab == duplicateLibraryData[i].activeTab) {
                this.setState({
                    libraryData: duplicateLibraryData,
                    tabData: tabsData,
                    activeTab
                });
            } else {
                for (let j = 0; j < duplicateLibraryData[i].libraryChildFolder.length; j++) {
                    if (activeTab == duplicateLibraryData[i].libraryChildFolder[j].activeTab) {
                        tabsData.push({ 'tabtitle': duplicateLibraryData[i].name })
                        this.setState({
                            libraryData: duplicateLibraryData[i].libraryChildFolder,
                            tabData: tabsData,
                            activeTab
                        });
                    }
                }
            }
        }
    };

    createLibararyTable = () => {
        const retData = [];
        const librarys = this.state.libraryData.length;
        for (let i = 0; i < librarys; i++) {
            const library = this.state.libraryData[i];
            retData.push(
                <tr className="">
                    <td className="">
                        <div onClick={() => this.setsubFolderData(library)} className="pointer-label">
                            <input type="checkbox" className="checkbox" />
                            {library.name}
                        </div>
                    </td>
                    <td>{library.description}</td>
                    <td>{library.createdBy}</td>
                    <td>{library.lastModified}</td>
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
        return retData;
    }

    setsubFolderData = (folderData: any) => {
        const { tabData } = this.state;
        if (folderData.libraryChildFolder && folderData.libraryChildFolder.length > 0) {
            tabData.push({ 'tabtitle': folderData.name });
            this.setState({
                tabData,
                libraryData: folderData.libraryChildFolder,
                activeTab: folderData.activeTab
            })
        }
    }

    displayTab() {
        const { tabData, activeTab } = this.state;
        let tabsData = [];
        for (let i = 0; i < tabData.length; i++) {
            tabsData.push(
                <li>
                    <li className={activeTab === i - 1 ? "active-tab" : ''} onClick={e => this.setActiveTabAndTableData(i)}>
                        <a>{tabData[i].tabtitle}</a>
                    </li>
                </li>
            );
        }
        return tabsData;
    }

    render() {
        const { activeTab } = this.state;
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
                    <div className="manage-dashboard-tabs">
                        <ul>
                            {this.displayTab()}
                        </ul>
                    </div>
                    <div className="tab-container">
                        {/* {
                            activeTab === 0 && */}
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
                                        {this.createLibararyTable()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};