import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Breadcrumbs } from '../Breadcrumbs';
import { Collapse } from 'reactstrap';
import collapseToggleIcon from '../../img/config-collapse-icon1.png';
import { CatalogList } from './CatalogList';
import { SelectDashboard } from './SelectDashboard';
import { EditDataSource } from './EditDataSource';
import { RestService } from '../_service/RestService';
import Rbac from './../../components/Rbac';
import { TopMenu } from "./../Catalog/TopMenu";

export class NewCatalog extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {
            searchKey: '',
            catalogs: [
                {
                    catalogName: 'Aws config',
                    catalogDescription: 'Amazon Web Services (AWS) Config provides a simple web services interface that can be used to track modifications made to the resources that belong to an AWS account.',
                    catalogImage: '',
                    catalogListL: [
                        {
                            name: 'AWS Config Overview - Interactive',
                            description: 'Dashboard Panels Changed Resources by Type Configuration Activity by AWS Region Deleted Resources by Type Discovered Resources by Type Modifications by Day - Outlier Modifications by Day - Trend Recent Modifications Resource Modifications Trend Data Access Level Sharing Outside The Org: This dashboard is inaccessible to people outside the organization. Last Modified On: 12/03/2019 6:27:14 AM +0530 Created On: 12/03/2019 6:27:14 AM +0530 Type: Dashboard'
                        },
                        { name: 'AWS Config Overview - Live' },
                        { name: 'Resource Modification Details - Interactive' },
                        { name: 'Configuration Trend' },
                        { name: 'Latest Resource Modifications' },
                        { name: 'Most Frequently Modified Resource Types (with latest update)' },
                        { name: 'Relationships' },
                        { name: 'ResourceNames Lookup Table Generator' },
                    ],

                },
                {
                    catalogName: 'AWS Elastic Load Balancer - Application',
                    catalogDescription: 'Amazon Web Services (AWS) Config provides a simple web services interface that can be used to track modifications made to the resources that belong to an AWS account.',
                    catalogImage: '',
                    catalogListL: [
                        {
                            name: 'AWS Config Overview - Interactive',
                            description: 'Dashboard Panels Changed Resources by Type Configuration Activity by AWS Region Deleted Resources by Type Discovered Resources by Type Modifications by Day - Outlier Modifications by Day - Trend Recent Modifications Resource Modifications Trend Data Access Level Sharing Outside The Org: This dashboard is inaccessible to people outside the organization. Last Modified On: 12/03/2019 6:27:14 AM +0530 Created On: 12/03/2019 6:27:14 AM +0530 Type: Dashboard'
                        },
                        { name: 'AWS Config Overview - Live' },
                        { name: 'Resource Modification Details - Interactive' },
                        { name: 'Configuration Trend' },
                        { name: 'Latest Resource Modifications' },
                        { name: 'Most Frequently Modified Resource Types (with latest update)' },
                        { name: 'Relationships' },
                        { name: 'ResourceNames Lookup Table Generator' },
                    ],

                },
                {
                    catalogName: 'AWS Security Hub',
                    catalogDescription: 'Amazon Web Services (AWS) Config provides a simple web services interface that can be used to track modifications made to the resources that belong to an AWS account.',
                    catalogImage: '',
                    catalogListL: [
                        {
                            name: 'AWS Config Overview - Interactive',
                            description: 'Dashboard Panels Changed Resources by Type Configuration Activity by AWS Region Deleted Resources by Type Discovered Resources by Type Modifications by Day - Outlier Modifications by Day - Trend Recent Modifications Resource Modifications Trend Data Access Level Sharing Outside The Org: This dashboard is inaccessible to people outside the organization. Last Modified On: 12/03/2019 6:27:14 AM +0530 Created On: 12/03/2019 6:27:14 AM +0530 Type: Dashboard'
                        },
                        { name: 'AWS Config Overview - Live' },
                        { name: 'Resource Modification Details - Interactive' },
                        { name: 'Configuration Trend' },
                        { name: 'Latest Resource Modifications' },
                        { name: 'Most Frequently Modified Resource Types (with latest update)' },
                        { name: 'Relationships' },
                        { name: 'ResourceNames Lookup Table Generator' },
                    ],

                },
                {
                    catalogName: 'Amazon Dynamo DB',
                    catalogDescription: 'Amazon Web Services (AWS) Config provides a simple web services interface that can be used to track modifications made to the resources that belong to an AWS account.',
                    catalogImage: '',
                    catalogListL: [
                        {
                            name: 'AWS Config Overview - Interactive',
                            description: 'Dashboard Panels Changed Resources by Type Configuration Activity by AWS Region Deleted Resources by Type Discovered Resources by Type Modifications by Day - Outlier Modifications by Day - Trend Recent Modifications Resource Modifications Trend Data Access Level Sharing Outside The Org: This dashboard is inaccessible to people outside the organization. Last Modified On: 12/03/2019 6:27:14 AM +0530 Created On: 12/03/2019 6:27:14 AM +0530 Type: Dashboard'
                        },
                        { name: 'AWS Config Overview - Live' },
                        { name: 'Resource Modification Details - Interactive' },
                        { name: 'Configuration Trend' },
                        { name: 'Latest Resource Modifications' },
                        { name: 'Most Frequently Modified Resource Types (with latest update)' },
                        { name: 'Relationships' },
                        { name: 'ResourceNames Lookup Table Generator' },
                    ],
                },
                {
                    catalogName: 'AWS Elasticache Redis ULM',
                    catalogDescription: 'Amazon Web Services (AWS) Config provides a simple web services interface that can be used to track modifications made to the resources that belong to an AWS account.',
                    catalogImage: '',
                    catalogListL: [
                        {
                            name: 'AWS Config Overview - Interactive',
                            description: 'Dashboard Panels Changed Resources by Type Configuration Activity by AWS Region Deleted Resources by Type Discovered Resources by Type Modifications by Day - Outlier Modifications by Day - Trend Recent Modifications Resource Modifications Trend Data Access Level Sharing Outside The Org: This dashboard is inaccessible to people outside the organization. Last Modified On: 12/03/2019 6:27:14 AM +0530 Created On: 12/03/2019 6:27:14 AM +0530 Type: Dashboard'
                        },
                        { name: 'AWS Config Overview - Live' },
                        { name: 'Resource Modification Details - Interactive' },
                        { name: 'Configuration Trend' },
                        { name: 'Latest Resource Modifications' },
                        { name: 'Most Frequently Modified Resource Types (with latest update)' },
                        { name: 'Relationships' },
                        { name: 'ResourceNames Lookup Table Generator' },
                    ],
                },
                {
                    catalogName: 'AWS Security Hub',
                    catalogDescription: 'Amazon Web Services (AWS) Config provides a simple web services interface that can be used to track modifications made to the resources that belong to an AWS account.',
                    catalogImage: '',
                    catalogListL: [
                        {
                            name: 'AWS Config Overview - Interactive',
                            description: 'Dashboard Panels Changed Resources by Type Configuration Activity by AWS Region Deleted Resources by Type Discovered Resources by Type Modifications by Day - Outlier Modifications by Day - Trend Recent Modifications Resource Modifications Trend Data Access Level Sharing Outside The Org: This dashboard is inaccessible to people outside the organization. Last Modified On: 12/03/2019 6:27:14 AM +0530 Created On: 12/03/2019 6:27:14 AM +0530 Type: Dashboard'
                        },
                        { name: 'AWS Config Overview - Live' },
                        { name: 'Resource Modification Details - Interactive' },
                        { name: 'Configuration Trend' },
                        { name: 'Latest Resource Modifications' },
                        { name: 'Most Frequently Modified Resource Types (with latest update)' },
                        { name: 'Relationships' },
                        { name: 'ResourceNames Lookup Table Generator' },
                    ],
                },
                {
                    catalogName: 'Amazon CloudTrail',
                    catalogDescription: 'Amazon Web Services (AWS) Config provides a simple web services interface that can be used to track modifications made to the resources that belong to an AWS account.',
                    catalogImage: '',
                    catalogListL: [
                        {
                            name: 'AWS Config Overview - Interactive',
                            description: 'Dashboard Panels Changed Resources by Type Configuration Activity by AWS Region Deleted Resources by Type Discovered Resources by Type Modifications by Day - Outlier Modifications by Day - Trend Recent Modifications Resource Modifications Trend Data Access Level Sharing Outside The Org: This dashboard is inaccessible to people outside the organization. Last Modified On: 12/03/2019 6:27:14 AM +0530 Created On: 12/03/2019 6:27:14 AM +0530 Type: Dashboard'
                        },
                        { name: 'AWS Config Overview - Live' },
                        { name: 'Resource Modification Details - Interactive' },
                        { name: 'Configuration Trend' },
                        { name: 'Latest Resource Modifications' },
                        { name: 'Most Frequently Modified Resource Types (with latest update)' },
                        { name: 'Relationships' },
                        { name: 'ResourceNames Lookup Table Generator' },
                    ],
                },
                {
                    catalogName: 'Amazon SES',
                    catalogDescription: 'Amazon Web Services (AWS) Config provides a simple web services interface that can be used to track modifications made to the resources that belong to an AWS account.',
                    catalogImage: '',
                    catalogListL: [
                        {
                            name: 'AWS Config Overview - Interactive',
                            description: 'Dashboard Panels Changed Resources by Type Configuration Activity by AWS Region Deleted Resources by Type Discovered Resources by Type Modifications by Day - Outlier Modifications by Day - Trend Recent Modifications Resource Modifications Trend Data Access Level Sharing Outside The Org: This dashboard is inaccessible to people outside the organization. Last Modified On: 12/03/2019 6:27:14 AM +0530 Created On: 12/03/2019 6:27:14 AM +0530 Type: Dashboard'
                        },
                        { name: 'AWS Config Overview - Live' },
                        { name: 'Resource Modification Details - Interactive' },
                        { name: 'Configuration Trend' },
                        { name: 'Latest Resource Modifications' },
                        { name: 'Most Frequently Modified Resource Types (with latest update)' },
                        { name: 'Relationships' },
                        { name: 'ResourceNames Lookup Table Generator' },
                    ],
                },
                {
                    catalogName: 'AWS Inspector',
                    catalogDescription: 'Amazon Web Services (AWS) Config provides a simple web services interface that can be used to track modifications made to the resources that belong to an AWS account.',
                    catalogImage: '',
                    catalogListL: [
                        {
                            name: 'AWS Config Overview - Interactive',
                            description: 'Dashboard Panels Changed Resources by Type Configuration Activity by AWS Region Deleted Resources by Type Discovered Resources by Type Modifications by Day - Outlier Modifications by Day - Trend Recent Modifications Resource Modifications Trend Data Access Level Sharing Outside The Org: This dashboard is inaccessible to people outside the organization. Last Modified On: 12/03/2019 6:27:14 AM +0530 Created On: 12/03/2019 6:27:14 AM +0530 Type: Dashboard'
                        },
                        { name: 'AWS Config Overview - Live' },
                        { name: 'Resource Modification Details - Interactive' },
                        { name: 'Configuration Trend' },
                        { name: 'Latest Resource Modifications' },
                        { name: 'Most Frequently Modified Resource Types (with latest update)' },
                        { name: 'Relationships' },
                        { name: 'ResourceNames Lookup Table Generator' },
                    ],
                },
                {
                    catalogName: 'AWS Inspector',
                    catalogDescription: 'Amazon Web Services (AWS) Config provides a simple web services interface that can be used to track modifications made to the resources that belong to an AWS account.',
                    catalogImage: '',
                    catalogListL: [
                        {
                            name: 'AWS Config Overview - Interactive',
                            description: 'Dashboard Panels Changed Resources by Type Configuration Activity by AWS Region Deleted Resources by Type Discovered Resources by Type Modifications by Day - Outlier Modifications by Day - Trend Recent Modifications Resource Modifications Trend Data Access Level Sharing Outside The Org: This dashboard is inaccessible to people outside the organization. Last Modified On: 12/03/2019 6:27:14 AM +0530 Created On: 12/03/2019 6:27:14 AM +0530 Type: Dashboard'
                        },
                        { name: 'AWS Config Overview - Live' },
                        { name: 'Resource Modification Details - Interactive' },
                        { name: 'Configuration Trend' },
                        { name: 'Latest Resource Modifications' },
                        { name: 'Most Frequently Modified Resource Types (with latest update)' },
                        { name: 'Relationships' },
                        { name: 'ResourceNames Lookup Table Generator' },
                    ],
                },
                {
                    catalogName: 'AWS Inspector',
                    catalogDescription: 'Amazon Web Services (AWS) Config provides a simple web services interface that can be used to track modifications made to the resources that belong to an AWS account.',
                    catalogImage: '',
                    catalogListL: [
                        {
                            name: 'AWS Config Overview - Interactive',
                            description: 'Dashboard Panels Changed Resources by Type Configuration Activity by AWS Region Deleted Resources by Type Discovered Resources by Type Modifications by Day - Outlier Modifications by Day - Trend Recent Modifications Resource Modifications Trend Data Access Level Sharing Outside The Org: This dashboard is inaccessible to people outside the organization. Last Modified On: 12/03/2019 6:27:14 AM +0530 Created On: 12/03/2019 6:27:14 AM +0530 Type: Dashboard'
                        },
                        { name: 'AWS Config Overview - Live' },
                        { name: 'Resource Modification Details - Interactive' },
                        { name: 'Configuration Trend' },
                        { name: 'Latest Resource Modifications' },
                        { name: 'Most Frequently Modified Resource Types (with latest update)' },
                        { name: 'Relationships' },
                        { name: 'ResourceNames Lookup Table Generator' },
                    ],
                },
                {
                    catalogName: 'AWS Inspector',
                    catalogDescription: 'Amazon Web Services (AWS) Config provides a simple web services interface that can be used to track modifications made to the resources that belong to an AWS account.',
                    catalogImage: '',
                    catalogListL: [
                        {
                            name: 'AWS Config Overview - Interactive',
                            description: 'Dashboard Panels Changed Resources by Type Configuration Activity by AWS Region Deleted Resources by Type Discovered Resources by Type Modifications by Day - Outlier Modifications by Day - Trend Recent Modifications Resource Modifications Trend Data Access Level Sharing Outside The Org: This dashboard is inaccessible to people outside the organization. Last Modified On: 12/03/2019 6:27:14 AM +0530 Created On: 12/03/2019 6:27:14 AM +0530 Type: Dashboard'
                        },
                        { name: 'AWS Config Overview - Live' },
                        { name: 'Resource Modification Details - Interactive' },
                        { name: 'Configuration Trend' },
                        { name: 'Latest Resource Modifications' },
                        { name: 'Most Frequently Modified Resource Types (with latest update)' },
                        { name: 'Relationships' },
                        { name: 'ResourceNames Lookup Table Generator' },
                    ],
                }
            ],
            catalogTab2Data: {},
            activeTab: 0,
            selectedCatalogDescription: '',
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
                label: "COtalog",
                isCurrentPage: true
            }
        ];

    }

    setActiveTab = (activeTab: any) => {
        this.setState({
            activeTab
        });
    };

    keyPress = (e: any) => {
        // const { value } = e.target;
        // this.setState({
        //     searchKey: value
        // });
        // const { catalogs } = this.state;
        // var searchResult = [];
        // for (let i = 0; i < catalogs.length; i++) {
        //     if (catalogs[i].catalogName.indexOf(value) !== -1 || value === '') {
        //         searchResult.push(catalogs[i]);
        //     }
        // }
        // this.setState({
        //     displayCatalogData: searchResult,
        // })
    }

    openCatalogDetail = (index: any, data: any) => {
        this.setState({
            catalogTab2Data: data
        });
        this.setActiveTab(this.state.activeTab + 1)
    }

    openEditCatalogDetail = () => {
        this.setActiveTab(this.state.activeTab + 1)
    }

    render() {
        const { activeTab, selectedCatalogDescription } = this.state;
        return (
            <div className="perfmanager-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="PREFORMANCE MANAGEMENT" />
                <div className="perfmanager-page-container">
                    <div className="common-container">
                        <label>Import Dashboard</label>
                    </div>
                    <div className="common-container border-bottom-0">
                        <div className="d-block m-b-10">
                            <div className="category-select">
                                <select className="form-control">
                                    <option>category</option>
                                    <option>category</option>
                                    <option>category</option>
                                    <option>category</option>
                                </select>
                            </div>
                            <div className="form-group category-control-group">
                                <form>
                                    <input type="text" onChange={this.keyPress} className="input-group-text" value={this.state.searchKey} placeholder="Search" />
                                    <button>
                                        <i className="fa fa-search"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="wizard-container">
                            <div className="wizard-step-line-container">
                                <div className={activeTab === 0 ? 'wizard-step-button active' : 'wizard-step-button'} onClick={e => this.setActiveTab(0)}>
                                    Select Catalog
                                </div>
                                <div className={activeTab === 1 ? 'wizard-step-button active' : 'wizard-step-button'} onClick={e => this.setActiveTab(1)}>
                                    Select Dashboard
                                </div>
                                <div className={activeTab === 2 ? 'wizard-step-button active' : 'wizard-step-button'} onClick={e => this.setActiveTab(2)}>
                                    Edit Data Source
                                </div>
                                <div className={activeTab === 3 ? 'wizard-step-button active' : 'wizard-step-button'} onClick={e => this.setActiveTab(3)}>
                                    Preview
                                </div>
                                <div className={activeTab === 4 ? 'wizard-step-button active' : 'wizard-step-button'} onClick={e => this.setActiveTab(4)}>
                                    Import
                                </div>
                            </div>
                            <div className="wizard-step-component">
                                {
                                    activeTab === 0 && <CatalogList catalogsData={this.state.catalogs} setCatalogDetail={this.openCatalogDetail} />
                                }
                                {
                                    activeTab === 1 && <SelectDashboard catalogsData={this.state.catalogTab2Data} setEditCatalog={this.openEditCatalogDetail} />
                                }
                                {
                                    activeTab === 2 && <EditDataSource />
                                }
                                {
                                    activeTab === 3 && <div>Preview</div>
                                }
                                {
                                    activeTab === 4 && <div>Import</div>
                                }
                                <div className="d-block text-right p-t-20">
                                    <button className="blue-button previous">Previous</button>
                                    <button className="blue-button next">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};