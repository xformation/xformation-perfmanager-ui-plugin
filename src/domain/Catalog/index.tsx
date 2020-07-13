import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Breadcrumbs } from '../Breadcrumbs';
import { Collapse } from 'reactstrap';
// import {Collapse} from 'react-bootstrap';
import categoryImage from '../../img/category-image1.png';
import collapseToggleIcon from '../../img/config-collapse-icon1.png';
import { AddLibraryPopup } from './addLibraryPopup';


export class Catalog extends React.Component<any, any> {
    breadCrumbs: any;
    addlibraryRef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            searchKey: '',
            currentOpenIndex: '',
            currentCatalogDisplayData: [],
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
            displayCatalogData: [
                {
                    catalogName: 'Aws config',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogImage: '../../img/category-image1.png',
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
                    catalogImage: '../../img/category-image2.png',
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
        this.addlibraryRef = React.createRef();
    }

    _displayCatalogBox() {
        const catalogBox = this.state.displayCatalogData.map((val: any, key: any) => {
            return (
                <div className="category-box" onClick={() => this.openCatalogDetail(key, val)}>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 p-r-0">
                            <div className="category-image confit-image">
                                <img src={categoryImage} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12">
                            <div className="category-name">{val.catalogName} </div>
                            <div className="category-add-link">
                                <a href="#">{val.catalogDescription}</a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        return catalogBox;
    }

    openCatalogDetail(i: any, arryData: any) {
        console.log(arryData);
        let displaycataloddescriptionData = [];
        if (arryData.catalogDetail != '' && arryData.catalogDetail) {
            for (let i = 0; i < arryData.catalogDetail.length; i++) {
                if (arryData.catalogDetail[i].open == true) {
                    arryData.catalogDetail[i].open = false;
                }
                displaycataloddescriptionData.push(arryData.catalogDetail[i]);
            }
            this.setState({
                currentOpenIndex: i,
                currentCatalogDisplayData: displaycataloddescriptionData
            })
        } else {
            this.setState({
                currentOpenIndex: '',
                currentCatalogDisplayData: ''
            })
        }
    }

    openCatalogDescription(index: any) {
        let opencatalog = [];
        for (let i = 0; i < this.state.currentCatalogDisplayData.length; i++) {
            if (i === index) {
                this.state.currentCatalogDisplayData[i].open = !this.state.currentCatalogDisplayData[i].open;
            } else {
                this.state.currentCatalogDisplayData[i].open = false;
            }
            opencatalog.push(this.state.currentCatalogDisplayData[i]);
        }
        this.setState({
            catalogDetail: opencatalog
        })
    };

    catalogdetail() {
        let displayData = this.state.currentCatalogDisplayData;
        console.log(displayData);
        const catalog = displayData.map((val: any, key: any) => {
            return (
                <div className="config-collapse" key={key}>
                    <div className='collapse-toggle ' onClick={() => this.openCatalogDescription(key)}>
                        <span><img src={collapseToggleIcon} alt="" /></span>
                        <p>{val.title}</p>
                    </div>
                    <Collapse isOpen={val.open}>
                        <div className="collapse-card-body">
                            <p>{val.description}</p>
                        </div>
                    </Collapse>
                </div>
            );
        });
        return catalog;
    }

    keyPress = (e: any) => {
        const { value } = e.target;
        this.setState({
            searchKey: value
        });
        const { catalogs } = this.state;
        var searchResult = [];
        for (let i = 0; i < catalogs.length; i++) {
            if (catalogs[i].catalogName.indexOf(value) !== -1 || value === '') {
                searchResult.push(catalogs[i]);
            }
        }
        this.setState({
            displayCatalogData: searchResult,
        })
    }

    onClickAddLibrary = (e: any) => {
        this.addlibraryRef.current.toggle();
    };

    render() {
        const state = this.state;
        return (
            <div className="perfmanager-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="PREFORMANCE MANAGEMENT" />
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
                                    <input type="text" onChange={this.keyPress} className="input-group-text" value={this.state.searchKey} placeholder="Search" />
                                    <button>
                                        <i className="fa fa-search"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="common-container border-bottom-0">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="categories-boxes">
                                    {this._displayCatalogBox()}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                {this.state.currentOpenIndex !== '' &&
                                    <div className="right-config-box">
                                        <div className="config-heading">
                                            <h5>AWS config</h5>
                                            <div className="category-add-link float-right">
                                                <a onClick={this.onClickAddLibrary}>Add To library</a>
                                            </div>
                                        </div>
                                        <div className="publishing-text">
                                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
                                        </div>
                                        <div className="catalog-collapse">
                                            {this.catalogdetail()}
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <AddLibraryPopup ref={this.addlibraryRef} />
            </div>
        );
    }
};