import * as React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import { config } from '../../config';
import dashboardIcon from '../../img/dashboard-icon.png';
import { TopMenu } from "../Catalog/TopMenu";


export class CreateNewDashboard extends React.Component<any, any> {
    breadCrumbs: any;
    steps: any;
    constructor(props: any) {
        super(props);
        this.breadCrumbs = [
            {
                label: "Home",
                route: `/`
            },
            {
                label: "Dashboard",
                route: `${config.basePath}/managedashboard`
            },
            {
                label: "New Panel",
                isCurrentPage: true
            }
        ];
    }

    render() {
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
                        <div className="dashboard-frame">
                           <iframe src="dashboard/new?editPanel=2&orgId=1" /> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};