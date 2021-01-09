import * as React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import { config } from '../../config';
import dashboardIcon from '../../img/dashboard-icon.png';
import { TopMenu } from "./../Catalog/TopMenu";


export class NewManageDashboard extends React.Component<any, any> {
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
                label: "Perfmanager",
                route: `${config.basePath}/dashboard`
            },
            {
                label: "Manage Dashboard",
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
                    </div>
                    <div className="manage-dashboard-box">
                        <div className="heading">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4>New Dashboard / Add Panel</h4>
                                </div>
                                <div className="col-lg-6 text-right">
                                    <button className="gray-button min-width-inherit m-r-0">Save</button>
                                    <button className="gray-button min-width-inherit m-r-0">Discard</button>
                                    <button className="white-button min-width-inherit m-r-0"><i className="fa fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="new-dashboard">
                            <div className="row">
                                <div className="col-lg-9 col-md-9 col-sm-12 p-l-0 p-r-0">
                                    <div className="dashboard-left text-right">
                                        <ul>
                                            <li><a href ="#">Fill</a></li>
                                            <li><a href ="#">Fit</a></li>
                                            <li><a href ="#">Exact</a></li>
                                        </ul>
                                        <button className="gray-button"><span><i className="fa fa-clock"></i></span>Last 6 hours <i className="fa fa-angle-down"></i></button>
                                        <button className="gray-button min-width-inherit"><i className="fa fa-search"></i></button>
                                        <button className="gray-button min-width-inherit p-0"><i className="fa fa-sync"></i></button>
                                        <button className="gray-button min-width-inherit"><i className="fa fa-angle-down"></i></button>
                                    </div>
                                    <div className="new-dashboard-graf text-center"><h2>no data</h2></div>
                                    <div className="dashboard-query-bottons">
                                        <ul>
                                            <li><i className="fa fa-database"></i> <a href="#">Query</a> <i className="fa fa-exclamation-circle" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-database"></i> <a href="#">Transformation</a> <i className="fa fa-exclamation-circle" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-bell"></i><a href="">Alert</a>  <i className="fa fa-exclamation-circle" aria-hidden="true"></i></li>
                                        </ul>
                                    </div>
                                    <div className="dashboard-Default-bottons">
                                        <div className="Default-dropdown">
                                            <select>
                                                <option value="">Default</option>
                                                <option value="">1</option>
                                            </select>
                                        </div>
                                        <button className="gray-button min-width-inherit"><i className="fa fa-question-circle" aria-hidden="true"></i></button>
                                        <div className="gray-button min-width-inherit">
                                        <i className="fa fa-angle-right"></i><a href="#"> Query options </a>&nbsp;  MD = auto =1257 interval = 15s</div>
                                        <div className="gray-button min-width-inherit">Query inspector</div>
                                    </div>
                                    <div className="Default-dropdown2">
                                        <i className="fa fa-chevron-down"></i>
                                        <span>A</span>
                                        <div className="dropdown2-content">{'{"namespace":"","metricName":"","expression":"","dimensions":{},"region":"default","id":"","alias":"","statistics":["Average"],"period":"","refId":"A","matchExact":true}'} </div>
                                        <div className="dropdown2-icon">
                                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                                        <i className="fa fa-arrow-up" aria-hidden="true"></i>
                                        <i className="fa fa-copy" aria-hidden="true"></i>
                                        <i className="fa fa-times"></i>
                                        </div>
                                    </div>
                                    <div className="query-mode-content">
                                        <div className="row">
                                            <div className="col-lg-2 p-r-0">
                                                <div className="mode-content-left">
                                                    <span>Query Mode</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-10">
                                                <div className="mode-content-right">
                                                    <p>CloudWatch Metric</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-2 p-r-0">
                                                <div className="Region-content-left">
                                                    <span>Region</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-10">
                                                <div className="Region-content-right">
                                                    <p>default</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-2 p-r-0">
                                                <div className="mode-content-left">
                                                    <span>Namespace</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-10">
                                                <div className="mode-content-right">
                                                    <p>Select Namespace</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-2 p-r-0">
                                                <div className="Region-content-left">
                                                    <span>Metric Name</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-10">
                                                <div className="Region-content-right">
                                                    <p>Select metric name</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-2 p-r-0">
                                                <div className="mode-content-left">
                                                    <span>Stats</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-10">
                                                <div className="mode-content-right">
                                                     <p>Average </p>
                                                     <div className="mode-content-icon"><i className="fa fa-plus" aria-hidden="true"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-2 p-r-0">
                                                <div className="Region-content-left">
                                                    <span>Dimensions</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-10">
                                                <div className="Region-content-right">
                                                    <div className="mode-content-icon"><i className="fa fa-plus" aria-hidden="true"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-2 p-r-0">
                                                <div className="mode-content-left">
                                                    <span>Id</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-10">
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <div className="mode-content-box">
                                                            <input type="text"className="input-group-text" id="fname" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 p-l-0 p-r-0">
                                                        <div className="mode-text "><a href="#">Expression</a></div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="mode-content-box">
                                                            <input type="text"className="input-group-text" id="fname" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-2 p-r-0">
                                                <div className="Region-left-box">
                                                    <span>Period</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-10">
                                                <div className="row">
                                                    <div className="col-md-2 w-100">
                                                        <div className="Period-right-box">
                                                            <input type="text"className="input-group-text" id="fname" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 p-l-0">
                                                        <div className="mode-text-box"><a href="#">Alias</a></div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="row">
                                                            <div className="col-md-3 p-r-0">
                                                            <div className="Period-right-box">
                                                            <input type="text"className="input-group-text" id="fname" placeholder="" />
                                                        </div>
                                                            </div>
                                                            <div className="col-md-3 p-l-0 p-r-0">
                                                            <div className="Match-box"><a href="#">Match Exact</a></div>
                                                            </div>
                                                            <div className="col-md-1 p-l-0 p-r-0">
                                                                <div className="mode-toggle"><a href="#"><i className="fa fa-toggle-on" aria-hidden="true"></i></a></div>
                                                            </div>
                                                            <div className="col-md-5">
                                                            <div className="mode-text-box"> <i className="fa fa-angle-right" aria-hidden="true"></i><a href="#">Show Query Preview</a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 p-l-0">
                                    <div className="dashboard-right">
                                        <div className="panel-botton">
                                            <ul>
                                                <li><a href ="#">Panel</a></li>
                                                <li><a href ="#">Field</a></li>
                                                <li><a href ="#">Overrides</a></li>
                                            </ul>
                                        </div>
                                        <div className="panel-boxs">
                                            <div className="panel-content"><span><i className="fa fa-chevron-right" aria-hidden="true"></i> </span><a href="#">Setting</a></div>
                                            <div className="panel-text"><span><i className="fa fa-chevron-right" aria-hidden="true"></i> </span><a href="#">Visualisation</a></div>
                                            <div className="panel-content"><span><i className="fa fa-chevron-right" aria-hidden="true"></i> </span><a href="#">Display</a></div>
                                            <div className="panel-text"><span><i className="fa fa-chevron-right" aria-hidden="true"></i> </span><a href="#">Series overrides</a></div>
                                            <div className="panel-content"><span><i className="fa fa-chevron-right" aria-hidden="true"></i> </span><a href="#">Axes</a></div>
                                            <div className="panel-text"><span><i className="fa fa-chevron-right" aria-hidden="true"></i> </span><a href="#">Legend</a></div>
                                            <div className="panel-content"><span><i className="fa fa-chevron-right" aria-hidden="true"></i> </span><a href="#">Treshholds</a></div>
                                            <div className="panel-text"><span><i className="fa fa-chevron-right" aria-hidden="true"></i> </span><a href="#">Time region</a></div>
                                            <div className="panel-content"><span><i className="fa fa-chevron-right" aria-hidden="true"></i> </span><a href="#">Links</a></div>
                                            <div className="panel-text"><span><i className="fa fa-chevron-right" aria-hidden="true"></i> </span><a href="#">Repeat options</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
};