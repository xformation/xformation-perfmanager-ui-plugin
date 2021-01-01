import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Breadcrumbs } from '../Breadcrumbs';
import { Collapse } from 'reactstrap';
import collapseToggleIcon from '../../img/config-collapse-icon1.png';
import { CatalogList } from './CatalogList';
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
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogImage: '',
                    catalogDetail: [
                        {
                            title: 'AWS config',
                            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                            open: false
                        },
                        {
                            title: 'AWS config OverView-Interactive',
                            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                            open: false
                        }
                    ]
                },
                {
                    catalogName: 'AWS Elastic Load Balancer - Application',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogImage: '',
                    catalogDetail: [
                        {
                            title: 'AWS Elastic Load Balancer - Application',
                            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                            open: false
                        },
                        {
                            title: 'AWS Elastic Load Balancer - Application',
                            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                            open: false
                        },
                        {
                            title: 'AWS config OverView-Interactive',
                            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                            open: false
                        },
                    ]
                },
                {
                    catalogName: 'AWS Security Hub',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogImage: '',
                    catalogDetail: [
                        {
                            title: 'AWS Security Hub',
                            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                            open: false
                        },
                        {
                            title: 'AWS config OverView-Interactive',
                            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                            open: false
                        },
                        {
                            title: 'AWS Security Hub',
                            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                            open: false
                        },
                        {
                            title: 'AWS Security Hub',
                            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                            open: false
                        },
                    ]
                },
                {
                    catalogName: 'Amazon Dynamo DB',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogImage: '',
                },
                {
                    catalogName: 'AWS Elasticache Redis ULM',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogImage: '',
                },
                {
                    catalogName: 'AWS Security Hub',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogImage: '',
                },
                {
                    catalogName: 'Amazon CloudTrail',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogImage: '',
                },
                {
                    catalogName: 'Amazon SES',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogImage: '',
                },
                {
                    catalogName: 'AWS Inspector',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogImage: '',
                },
                {
                    catalogName: 'AWS Inspector',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogImage: '',
                },
                {
                    catalogName: 'AWS Inspector',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogImage: '',
                },
                {
                    catalogName: 'AWS Inspector',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogImage: '',
                }
            ],
            displayCatalogData: [],
            catalogDetail: [
                {
                    title: 'AWS config OverView-Interactive',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                    open: false
                },
                {
                    title: 'AWS config OverView-Interactive',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                    open: false
                },
                {
                    title: 'AWS config OverView-Interactive',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                    open: false
                },
                {
                    title: 'AWS config OverView-Interactive',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                    open: false
                },
                {
                    title: 'AWS config OverView-Interactive',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                    open: false
                },

                {
                    title: 'AWS config OverView-Interactive',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                    open: false
                },
                {
                    title: 'AWS config OverView-Interactive',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                    open: false
                },
                {
                    title: 'AWS config OverView-Interactive',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                    open: false
                },
            ],
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


    render() {
        const { activeTab, selectedCatalogDescription } = this.state;
        return (
            <div className="perfmanager-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="PREFORMANCE MANAGEMENT" />
                <div className="perfmanager-page-container">
                    <div className="common-container">
                        <label>Import Dashboard</label>
                    </div>
                    <div className="common-container">
                        <div className="text-right">
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
                    </div>
                    <div className="new-catalog-tabs">
                        <ul>
                            <li className={activeTab === 0 ? "active-tab" : ''} onClick={e => this.setActiveTab(0)}>
                                <a href="#">Select Catalog</a>
                            </li>
                            <li className={activeTab === 1 ? "active-tab" : ''} onClick={e => this.setActiveTab(1)}>
                                <a href="#">Select Dashboard</a>
                            </li>
                            <li className={activeTab === 2 ? "active-tab" : ''} onClick={e => this.setActiveTab(2)}>
                                <a href="#">Edit Data Source</a>
                            </li>
                            <li className={activeTab === 3 ? "active-tab" : ''} onClick={e => this.setActiveTab(2)}>
                                <a href="#">Preview</a>
                            </li>
                            <li className={activeTab === 4 ? "active-tab" : ''} onClick={e => this.setActiveTab(2)}>
                                <a href="#">Import</a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-container">
                        {
                            activeTab === 0 && <CatalogList catalogsData={this.state.catalogs} />
                        }
                        {
                            activeTab === 1 && <div></div>
                        }
                        {
                            activeTab === 2 && <div></div>
                        }
                        {
                            activeTab === 3 && <div></div>
                        }
                        {
                            activeTab === 4 && <div></div>
                        }
                    </div>

                </div>
                {/* <AddLibraryPopup ref={this.addlibraryRef} />
                <PreviewDashboard ref={this.previewdashboardRef} />
                <AddDashboardToCollectorPopup ref={this.addDashboardToCollectorRef} /> */}
            </div>
        );
    }
};