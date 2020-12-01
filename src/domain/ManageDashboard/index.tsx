import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { config } from '../../config';
import dashboardIcon from '../../img/dashboard-icon.png';
import { Playlists } from './Playlists';
import { ManageTab } from './ManageTab';
import { TopMenu } from "./../Catalog/TopMenu";

export class ManageDashboard extends React.Component<any, any> {
    breadCrumbs: any;
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
            activeTab: 0
        };
        this.breadCrumbs = [
            {
                label: "Home",
                route: `/`
            },
            {
                label: "Perfmanager",
                route: `${config.basePath}/dashboard`
            },
            {
                label: "Manage Dashboard",
                isCurrentPage: true
            }
        ];
    }

    setActiveTab = (activeTab: any) => {
        this.setState({
            activeTab
        });
    };

    render() {
        const { activeTab } = this.state;
        return (
            <div className="perfmanager-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="PREFORMANCE MANAGEMENT" />
                <div className="perfmanager-page-container">
                    <div className="common-container">
                        <TopMenu />
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
                                <li className={activeTab === 0 ? "active-tab" : ''} onClick={e => this.setActiveTab(0)}>
                                    <a href="#">Manage</a>
                                </li>
                                <li className={activeTab === 1 ? "active-tab" : ''} onClick={e => this.setActiveTab(1)}>
                                    <a href="#">Playlist</a>
                                </li>
                                <li className={activeTab === 2 ? "active-tab" : ''} onClick={e => this.setActiveTab(2)}>
                                    <a href="#">Snapshots</a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-container">
                            {
                                activeTab === 0 && <ManageTab />
                            }
                            {
                                activeTab === 1 && <Playlists />
                            }
                            {
                                activeTab === 2 && <div></div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};