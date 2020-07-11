import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { config } from '../../config';
import { Wizard } from './Wizard';
import { LibraryDetails } from './LibraryDetails';

export class Library extends React.Component<any, any> {
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
            name: "Library",
            component: <LibraryDetails />
        }];
    }
    
    render() {
        const state = this.state;
        return (
            <div className="perfmanager-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="MONITOR | ALERTS" />
                <div className="perfmanager-page-container">
                    <div className="common-container">
                        <div className="row">
                            <div className="col-lg-10 col-md-10 col-sm-12">
                                <Link to={`${config.basePath}/managedashboards`} className="blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Manage Dashboards
                                </Link>
                                <Link to={`${config.basePath}/catalog`} className="blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Catalog
                                </Link>
                                <a className="blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Library
                                </a>
                                <Link to={`${config.basePath}/collection`} className="blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Collection
                                </Link>
                                <a className="blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Rule
                                </a>
                                <a className="blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Preferences
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12">
                                <div className="float-right common-right-btn">
                                    <Link to={`#`} className="white-button"><i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp; Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="common-container library-search">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="library-heading">Library</div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12">
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
                    <div className="common-container border-bottom-0 wizard-container">
                        <Wizard steps={this.steps} />
                    </div>
                </div>
            </div>
        );
    }
};