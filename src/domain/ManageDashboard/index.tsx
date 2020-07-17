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
import { Wizard } from './Wizard';
import { Playlists } from './Playlists';
import { ManageTab } from './ManageTab';
export class ManageDashboard extends React.Component<any, any> {
    breadCrumbs: any;
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
           
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
        this.steps = [{
            name: "Manage",
            component: <ManageTab/>
        },
        {
            name: "Playlists",
            component: <Playlists />
        },
        {
            name: "Snapshots",
            component: ""
        }];

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
                        <Wizard steps={this.steps} />
                    </div>
                </div>
            </div>
        );
    }
};