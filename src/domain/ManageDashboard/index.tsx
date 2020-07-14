import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { config } from '../../config';
import dashboardIcon from '../../img/dashboard-icon.png';
import folderIcon from '../../img/folder.png';
import listIcon from '../../img/list.png';
import sortIcon from '../../img/sort.png';
import tagIcon from '../../img/tag.png';
import openFolderIcon from '../../img/open-folder.png';
import { Collapse } from 'reactstrap';

export class ManageDashboard extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {
            folderArray: [
                {
                    title: 'General',
                    openSubFolder: true,
                    subData: [
                        {
                            tableTitle: 'Amazon CloudWatch Logs',
                            attribute: [
                                {
                                    attributeName: 'AWS',
                                    backColorClass: 'aws-bg'
                                },
                                {
                                    attributeName: 'Amazon',
                                    backColorClass: 'amazon-bg'
                                },
                                {
                                    attributeName: 'Cloud Watch',
                                    backColorClass: 'cloudwatch-bg'
                                },
                                {
                                    attributeName: 'Logs',
                                    backColorClass: 'logs-bg'
                                }
                            ]
                        },
                        {
                            tableTitle: 'Amazon RDS',
                            attribute: [
                                {
                                    attributeName: 'Cloud Watch',
                                    backColorClass: 'cloudwatch-bg'
                                },
                                {
                                    attributeName: 'Monitoringartist',
                                    backColorClass: 'aws-bg'
                                }
                            ]
                        },
                        {
                            tableTitle: 'AWS VPN',
                            attribute: [
                                {
                                    attributeName: 'Cloud Watch',
                                    backColorClass: 'cloudwatch-bg'
                                },
                                {
                                    attributeName: 'Monitoringartist',
                                    backColorClass: 'aws-bg'
                                }
                            ]
                        },
                        {
                            tableTitle: 'AWS VPN Dashboard',
                        },
                        {
                            tableTitle: 'Cloud Trial',
                        },
                        {
                            tableTitle: 'Cloud Watch',

                        },
                    ]
                },
                {
                    title: 'Main',
                    openSubFolder: false,
                    subData: [
                        {
                            tableTitle: 'Amazon CloudWatch Logs',
                            attribute: [
                                {
                                    attributeName: 'AWS',
                                    backColorClass: 'aws-bg'
                                },
                                {
                                    attributeName: 'Amazon',
                                    backColorClass: 'amazon-bg'
                                },
                                {
                                    attributeName: 'Cloud Watch',
                                    backColorClass: 'cloudwatch-bg'
                                },
                                {
                                    attributeName: 'Logs',
                                    backColorClass: 'logs-bg'
                                }
                            ]
                        },
                        {
                            tableTitle: 'Amazon RDS',
                            attribute: [
                                {
                                    attributeName: 'Cloud Watch',
                                    backColorClass: 'cloudwatch-bg'
                                },
                                {
                                    attributeName: 'Monitoringartist',
                                    backColorClass: 'aws-bg'
                                }
                            ]
                        },
                        {
                            tableTitle: 'AWS VPN',
                            attribute: [
                                {
                                    attributeName: 'Cloud Watch',
                                    backColorClass: 'cloudwatch-bg'
                                },
                                {
                                    attributeName: 'Monitoringartist',
                                    backColorClass: 'aws-bg'
                                }
                            ]
                        },
                        {
                            tableTitle: 'AWS VPN Dashboard',
                        },
                        {
                            tableTitle: 'Cloud Trial',
                        },
                        {
                            tableTitle: 'Cloud Watch',
                        },
                    ]
                },
                {
                    title: 'Open',
                    openSubFolder: false,
                    subData: [
                        {
                            tableTitle: 'Amazon CloudWatch Logs',
                        },
                        {
                            tableTitle: 'Amazon RDS',
                            attribute: [
                                {
                                    attributeName: 'Cloud Watch',
                                    backColorClass: 'cloudwatch-bg'
                                },
                                {
                                    attributeName: 'Monitoringartist',
                                    backColorClass: 'aws-bg'
                                }
                            ]
                        },
                        {
                            tableTitle: 'AWS VPN',
                            attribute: [
                                {
                                    attributeName: 'Cloud Watch',
                                    backColorClass: 'cloudwatch-bg'
                                },
                                {
                                    attributeName: 'Monitoringartist',
                                    backColorClass: 'aws-bg'
                                }
                            ]
                        },
                        {
                            tableTitle: 'AWS VPN Dashboard',
                        },
                        {
                            tableTitle: 'Cloud Trial',
                        },
                        {
                            tableTitle: 'Cloud Watch',
                        },
                    ]
                }
            ]
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
        this.onClickOpenSubFolder = this.onClickOpenSubFolder.bind(this)
    }

    onClickOpenSubFolder(index: any) {
        console.log(index);
        const { openSubFolder, folderArray } = this.state;
        for (let i = 0; i < folderArray.length; i++) {
            console.log(folderArray[i])
            console.log(folderArray[i].openSubFolder);
            if (i == index) {
                folderArray[i].openSubFolder = !folderArray[i].openSubFolder;
            }
        }
        this.setState({
            folderArray: folderArray,
        })

    }

    openCloseManageDashboardFolder() {
        const retData = [];
        const { folderArray } = this.state;
        const length = folderArray.length;
        for (let i = 0; i < length; i++) {
            const folder = folderArray[i];
            const subFolders = folder.subData;
            const subFolderJSX = [];
            for (let j = 0; j < subFolders.length; j++) {
                const attribute = subFolders[j].attribute;
                const subAttributeFolder = [];
                if (subFolders[j].attribute) {
                    for (let k = 0; k < attribute.length; k++) {
                        const subAtt = attribute[k];
                        subAttributeFolder.push(
                            <div className={subAtt.backColorClass}>{subAtt.attributeName}</div>
                        );
                    }
                }
                const subFolder = subFolders[j];
                subFolderJSX.push(
                    <tr>
                        <td>
                            <input type="checkbox" className="checkbox" />
                            <span>{subFolder.tableTitle}</span>
                        </td>
                        <td>
                            <div className="float-right">
                                {subAttributeFolder}
                            </div>
                        </td>
                    </tr>
                );

            }
            retData.push(
                <div>
                    <div className="general-heading">
                        <input type="checkbox" className="checkbox" />
                        <span  onClick={() => this.onClickOpenSubFolder(i)}><img src={openFolderIcon} alt="" /></span>
                        <h4>{folder.title}</h4>
                        <i className="fa fa-angle-down float-right"></i>
                    </div>
                    <Collapse isOpen={folder.openSubFolder}>
                        <div className="general-logs">
                            <table className="data-table">
                                {subFolderJSX}
                            </table>
                        </div>
                    </Collapse>
                </div>
            );
        }
        return retData;
    }


    render() {
        return (
            <div className="perfmanager-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="PREFORMANCE MANAGEMENT" />
                <div className="perfmanager-page-container">
                    <div className="common-container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
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
                                <Link to={`${config.basePath}/rules`} className="blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Rule
                                </Link>
                                <a className="blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Preferences
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="common-container border-bottom-0">
                        <div className="manage-dashboard-heading">
                            <div className="heading-icon"><img src={dashboardIcon} alt="" /></div>
                            <div className="heading-right">
                                <h3>Dashboards</h3>
                                <p>Manage dashboards & folders</p>
                            </div>
                        </div>
                        <div className="manage-dashboard-radio-btns">
                            <ul>
                                <li>
                                    <input type="radio" id="f-kpi" name="selector" />
                                    <label htmlFor="f-kpi">KPI</label>
                                </li>
                                <li>
                                    <input type="radio" id="f-log" name="selector" />
                                    <label htmlFor="f-v">Log</label>
                                </li>
                                <li>
                                    <input type="radio" id="f-schema" name="selector" />
                                    <label htmlFor="f-schema">Schema</label>
                                </li>
                            </ul>
                        </div>
                        <div className="manage-dashboard-tabs">
                            <ul>
                                <li className="active-tab">
                                    <a href="#">Manage</a>
                                </li>
                                <li>
                                    <a href="#">Playlists</a>
                                </li>
                                <li>
                                    <a href="#">Snapshots</a>
                                </li>
                            </ul>
                        </div>
                        <div className="manage-dashboard-search">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="form-group search-control-group">
                                        <form>
                                            <input type="text" className="input-group-text" placeholder="Search dashboards by name" />
                                            <button>
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12 col-sm-12">
                                    <div className="search-buttons float-right">
                                        <a className="blue-button">New Dashboard</a>
                                        <a className="blue-button">New Folder</a>
                                        <a className="blue-button m-r-0">Import</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="manage-dashboard-fliter-sort">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="sort-checkbox">
                                        <input type="checkbox" className="checkbox" />
                                    </div>
                                    <div className="sort-view">
                                        <ul>
                                            <li className="active">
                                                <a href="#"><img src={folderIcon} alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src={listIcon} alt="" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sort-select-menu">
                                        <span>
                                            <img src={sortIcon} alt="" />
                                        </span>
                                        <select>
                                            <option>Sort (Default A-Z)</option>
                                            <option>Sort (Default A-Z)</option>
                                            <option>Sort (Default A-Z)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="filter-starred float-right">
                                        <div className="sort-checkbox">
                                            <input type="checkbox" className="checkbox" />
                                            <span>
                                                Filter by starred
                                            </span>
                                        </div>
                                        <div className="sort-select-menu">
                                            <span>
                                                <img src={tagIcon} alt="" />
                                            </span>
                                            <select>
                                                <option>Filter by tag</option>
                                                <option>Filter by tag</option>
                                                <option>Filter by tag</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="manage-dashboard-general">
                            {this.openCloseManageDashboardFolder()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};