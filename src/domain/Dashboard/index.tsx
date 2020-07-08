import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Breadcrumbs } from '../Breadcrumbs';

export class Dashboard extends React.Component<any, any> {
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
                        <Link to={`${config.basePath}/managealertrule`} className="alert-blue-button">
                            <i className="fa fa-cog"></i>&nbsp;&nbsp;
                            Manage Dashboards
                        </Link>
                        <a className="alert-blue-button">
                            <i className="fa fa-cog"></i>&nbsp;&nbsp;
                            Catalog
                        </a>
                        <a className="alert-blue-button">
                            <i className="fa fa-cog"></i>&nbsp;&nbsp;
                            Library
                        </a>
                        <a className="alert-blue-button">
                            <i className="fa fa-cog"></i>&nbsp;&nbsp;
                            Collection
                        </a>
                        <a className="alert-blue-button">
                            <i className="fa fa-cog"></i>&nbsp;&nbsp;
                            Rule
                        </a>
                        <a className="alert-blue-button">
                            <i className="fa fa-cog"></i>&nbsp;&nbsp;
                            Preferences
                        </a>
                    </div>
                    <div className="dashboard-metrics">
                        <p>Metrics dashboard to be done.</p>
                    </div>
                </div>
            </div>
        );
    }
};