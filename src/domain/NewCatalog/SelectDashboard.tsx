import * as React from 'react';
import categoryImage from '../../img/category-image1.png';
import collapseToggleIcon from '../../img/config-collapse-icon1.png';

export class SelectDashboard extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            catalogs: this.props.catalogsData,
        };
    }

    render() {
        const { newDashboard } = this.state;
        return (
            <div className="select-dashboard">
                <div className="select-dashboard-heading">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-12 p-r-0">
                            <div className="heading-image">
                                <img src={categoryImage} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-9 col-sm-12 p-l-0">
                            <div className="heading-text">
                                <h3>AWS config</h3>
                                <p>Amazon Web Services (AWS) Config provides a simple web services interface that can be used to track modifications made to the resources that belong to an AWS account.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="select-dashboard-lists">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="lists">
                                <div className="collapse-card-body">
                                    <input type="checkbox" />
                                    <span><img src={collapseToggleIcon} alt="" /></span>
                                    <p>AWS Config Overview - Interactive</p>
                                </div>
                                <div className="collapse-card-body">
                                    <input type="checkbox" />
                                    <span><img src={collapseToggleIcon} alt="" /></span>
                                    <p>AWS Config Overview - Live</p>
                                </div>
                                <div className="collapse-card-body">
                                    <input type="checkbox" />
                                    <span><img src={collapseToggleIcon} alt="" /></span>
                                    <p>Resource Modification Details - Interactive</p>
                                </div>
                                <div className="collapse-card-body">
                                    <input type="checkbox" />
                                    <span><img src={collapseToggleIcon} alt="" /></span>
                                    <p>Configuration Trend</p>
                                </div>
                                <div className="collapse-card-body">
                                    <input type="checkbox" />
                                    <span><img src={collapseToggleIcon} alt="" /></span>
                                    <p>Latest Resource Modifications</p>
                                </div>
                                <div className="collapse-card-body">
                                    <input type="checkbox" />
                                    <span><img src={collapseToggleIcon} alt="" /></span>
                                    <p>Most Frequently Modified Resource Types (with latest update)</p>
                                </div>
                                <div className="collapse-card-body">
                                    <input type="checkbox" />
                                    <span><img src={collapseToggleIcon} alt="" /></span>
                                    <p>Relationships</p>
                                </div>
                                <div className="collapse-card-body">
                                    <input type="checkbox" />
                                    <span><img src={collapseToggleIcon} alt="" /></span>
                                    <p>ResourceNames Lookup Table Generator</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="list-right-content">
                                <div className="heading">
                                    <span><img src={collapseToggleIcon} alt="" /></span>
                                    <p>AWS Config Overview - Interactive</p>
                                </div>
                                <div className="content">
                                    <h3>Dashboard Panels</h3>
                                    <ul>
                                        <li>Changed Resources by Type</li>
                                        <li>Configuration Activity by AWS Region</li>
                                        <li>Deleted Resources by Type</li>
                                        <li>Discovered Resources by Type</li>
                                        <li>Modifications by Day - Outlier</li>
                                        <li>Modifications by Day - Trend</li>
                                        <li>Recent Modifications</li>
                                        <li>Resource Modifications Trend</li>
                                    </ul>
                                    <h3>Data Access Level</h3>
                                    <ul>
                                        <li>Sharing Outside The Org: This dashboard is inaccessible to people outside the organization.</li>
                                        <li>Last Modified On: 12/03/2019 6:27:14 AM +0530</li>
                                        <li>Created On: 12/03/2019 6:27:14 AM +0530</li>
                                        <li>Type: Dashboard</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}