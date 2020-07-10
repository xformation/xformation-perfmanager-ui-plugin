import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { config } from '../../config';
import awsLogo from '../../img/aws.png';
import microsoftAzureLogo from '../../img/microsoftazure.png';
import gcpLogo from '../../img/google-cloud.png';
import KubernetesLogo from '../../img/kubernetes.png';
import folderIcon from '../../img/folder.png';
import listIcon from '../../img/list.png';
import sortIcon from '../../img/sort.png';
import tagIcon from '../../img/tag.png';
import openFolderIcon from '../../img/open-folder.png';

export class Collection extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {};
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

    render() {
        const state = this.state;
        return (
            <div className="perfmanager-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="PREFORMANCE MANAGEMENT" />
                <div className="perfmanager-page-container">
                    <div className="common-container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <Link to={`${config.basePath}/managedashboards`}className="alert-blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Manage Dashboards
                                </Link>
                                <Link to={`${config.basePath}/catalog`} className="alert-blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Catalog
                                </Link>
                                <a className="alert-blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Library
                                </a>
                                <Link to={`${config.basePath}/collection`} className="alert-blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Collection
                                </Link>
                                <a className="alert-blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Rule
                                </a>
                                <a className="alert-blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Preferences
                                </a>
                            </div>
                            
                        </div>
                    </div>
                    <div className="common-container border-bottom-0">
                        <div className="collection-logos">
                            <ul>
                                <li>
                                    <a href="#">
                                        <span><img src={awsLogo} alt="" /></span>
                                        <p>AWS</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span><img src={microsoftAzureLogo} alt="" /></span>
                                        <p>Azure</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span><img src={gcpLogo} alt="" /></span>
                                        <p>GCP</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span><img src={KubernetesLogo} alt="" /></span>
                                        <p>Kubernetes</p>
                                    </a>
                                </li>
                            </ul>
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
                        
                        <div className="manage-dashboard-search">
                            <div className="row"> 
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="search-buttons float-right">
                                        <a className="alert-blue-button">New Dashboard</a>
                                        <a className="alert-blue-button">New Folder</a>
                                        <a className="alert-blue-button m-r-0">Import</a>
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
                            <div className="general-heading">
                                <input type="checkbox" className="checkbox" />
                                <span><img src={openFolderIcon} alt="" /></span>
                                <h4>General</h4>
                                <i className="fa fa-angle-down float-right"></i>
                            </div>
                            <div className="general-logs">
                                <table className="data-table">
                                    <tr>
                                        <td>
                                            <input type="checkbox" className="checkbox" /> 
                                        </td>
                                        <td>
                                            <span>Amazon CloudWatch Logs</span>
                                        </td>
                                        <td>
                                            <div className="float-right">
                                                <div className="aws-bg">AWS</div>
                                                <div className="amazon-bg">Amazon</div>
                                                <div className="cloudwatch-bg">CloudWatch</div>
                                                <div className="logs-bg">Logs</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" className="checkbox" /> 
                                        </td>
                                        <td>
                                            <span>Amazon RDS</span>
                                        </td>
                                        <td>
                                            <div className="float-right">
                                                <div className="cloudwatch-bg">CloudWatch</div>
                                                <div className="monitorigartist-bg">monitorigartist</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" className="checkbox" /> 
                                        </td>
                                        <td>
                                            <span>AWS VPN</span>
                                        </td>
                                        <td>
                                            <div className="float-right">
                                                <div className="cloudwatch-bg">CloudWatch</div>
                                                <div className="monitorigartist-bg">monitorigartist</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" className="checkbox" /> 
                                        </td>
                                        <td>
                                            <span>AWS VPN Dashboard</span>
                                        </td>
                                        <td>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" className="checkbox" /> 
                                        </td>
                                        <td>
                                            <span>Cloud Trial</span>
                                        </td>
                                        <td>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" className="checkbox" /> 
                                        </td>
                                        <td>
                                            <span>Cloud Watch</span>
                                        </td>
                                        <td>
                                            
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};