import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Breadcrumbs } from '../Breadcrumbs';

export class Catalog extends React.Component<any, any> {
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
                            <div className="col-lg-10 col-md-10 col-sm-12">
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
                            <div className="col-lg-2 col-md-2 col-sm-12">
                                <div className="float-right common-right-btn">
                                    <Link to={`#`} className="alert-white-button"><i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp; Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="common-container">
                        <div className="catalog-app-text">
                            <h3>Catalog</h3>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
                        </div>
                    </div>
                    <div className="common-container">
                        <div className="text-right">
                            <div className="category-select">
                                <select className="form-control">
                                    <option>Category</option>
                                    <option>Category</option>
                                    <option>Category</option>
                                </select>
                            </div>
                            <div className="form-group category-control-group">
                                <form>
                                    <input type="text" className="input-group-text" />
                                    <button>
                                        <i className="fa fa-search"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="common-container border-bottom-0">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <div className="categories-boxes">
                                    <div className="category-box">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="category-image confit-image"></div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="category-name">Aws config</div>
                                                <div className="category-add-link">
                                                    <a href="#">Add To library Preview Dashboard</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="category-box">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="category-image confit-image"></div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="category-name">Aws config</div>
                                                <div className="category-add-link">
                                                    <a href="#">Add To library Preview Dashboard</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="category-box">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="category-image confit-image"></div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="category-name">Aws config</div>
                                                <div className="category-add-link">
                                                    <a href="#">Add To library Preview Dashboard</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="category-box">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="category-image confit-image"></div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="category-name">Aws config</div>
                                                <div className="category-add-link">
                                                    <a href="#">Add To library Preview Dashboard</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="category-box">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="category-image confit-image"></div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="category-name">Aws config</div>
                                                <div className="category-add-link">
                                                    <a href="#">Add To library Preview Dashboard</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="category-box">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="category-image confit-image"></div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="category-name">Aws config</div>
                                                <div className="category-add-link">
                                                    <a href="#">Add To library Preview Dashboard</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="category-box">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="category-image confit-image"></div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="category-name">Aws config</div>
                                                <div className="category-add-link">
                                                    <a href="#">Add To library Preview Dashboard</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="category-box">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="category-image confit-image"></div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="category-name">Aws config</div>
                                                <div className="category-add-link">
                                                    <a href="#">Add To library Preview Dashboard</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="category-box">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="category-image confit-image"></div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="category-name">Aws config</div>
                                                <div className="category-add-link">
                                                    <a href="#">Add To library Preview Dashboard</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="category-box">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="category-image confit-image"></div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="category-name">Aws config</div>
                                                <div className="category-add-link">
                                                    <a href="#">Add To library Preview Dashboard</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="category-box">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="category-image confit-image"></div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="category-name">Aws config</div>
                                                <div className="category-add-link">
                                                    <a href="#">Add To library Preview Dashboard</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="category-box">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="category-image confit-image"></div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="category-name">Aws config</div>
                                                <div className="category-add-link">
                                                    <a href="#">Add To library Preview Dashboard</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="category-box">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="category-image confit-image"></div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="category-name">Aws config</div>
                                                <div className="category-add-link">
                                                    <a href="#">Add To library Preview Dashboard</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="category-box">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="category-image confit-image"></div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="category-name">Aws config</div>
                                                <div className="category-add-link">
                                                    <a href="#">Add To library Preview Dashboard</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="category-box">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="category-image confit-image"></div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="category-name">Aws config</div>
                                                <div className="category-add-link">
                                                    <a href="#">Add To library Preview Dashboard</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="category-box">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="category-image confit-image"></div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="category-name">Aws config</div>
                                                <div className="category-add-link">
                                                    <a href="#">Add To library Preview Dashboard</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="category-box">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="category-image confit-image"></div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="category-name">Aws config</div>
                                                <div className="category-add-link">
                                                    <a href="#">Add To library Preview Dashboard</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="category-box">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="category-image confit-image"></div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="category-name">Aws config</div>
                                                <div className="category-add-link">
                                                    <a href="#">Add To library Preview Dashboard</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="salect-services-text">
                                    Select the services from Catalog to view information here
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};