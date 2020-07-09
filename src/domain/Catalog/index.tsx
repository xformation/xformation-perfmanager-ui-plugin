import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Breadcrumbs } from '../Breadcrumbs';
import { Collapse } from 'reactstrap';
// import {Collapse} from 'react-bootstrap';

export class Catalog extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {
            searchKey: '',
            open: true,
            catalogs: [
                {
                    catalogName: 'Aws config',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'pink',
                    catalogImage: '',
                },
                {
                    catalogName: 'AWS Elastic Load Balancer - Application',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'orange',
                    catalogImage: '',
                },
                {
                    catalogName: 'AWS Security Hub',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'red',
                    catalogImage: '',
                },
                {
                    catalogName: 'Amazon Dynamo DB',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'blue',
                    catalogImage: '',
                },
                {
                    catalogName: 'AWS Elasticache Redis ULM',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'purple',
                    catalogImage: '',
                },
                {
                    catalogName: 'AWS Security Hub',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'blue',
                    catalogImage: '',
                },
                {
                    catalogName: 'Amazon CloudTrail',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'pink',
                    catalogImage: '',
                },
                {
                    catalogName: 'Amazon SES',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'blue',
                    catalogImage: '',
                },
                {
                    catalogName: 'AWS Inspector',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'red',
                    catalogImage: '',
                },
                {
                    catalogName: 'AWS Inspector',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'red',
                    catalogImage: '',
                },
                {
                    catalogName: 'AWS Inspector',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'red',
                    catalogImage: '',
                },
                {
                    catalogName: 'AWS Inspector',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'red',
                    catalogImage: '',
                }
            ],
            displayCatalogData: [
                {
                    catalogName: 'Aws config',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'pink',
                    catalogImage: '',
                },
                {
                    catalogName: 'AWS Elastic Load Balancer - Application',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'orange',
                    catalogImage: '',
                },
                {
                    catalogName: 'AWS Security Hub',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'red',
                    catalogImage: '',
                },
                {
                    catalogName: 'Amazon Dynamo DB',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'blue',
                    catalogImage: '',
                },
                {
                    catalogName: 'AWS Elasticache Redis ULM',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'purple',
                    catalogImage: '',
                },
                {
                    catalogName: 'AWS Security Hub',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'blue',
                    catalogImage: '',
                },
                {
                    catalogName: 'Amazon CloudTrail',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'pink',
                    catalogImage: '',
                },
                {
                    catalogName: 'Amazon SES',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'blue',
                    catalogImage: '',
                },
                {
                    catalogName: 'AWS Inspector',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'red',
                    catalogImage: '',
                },
                {
                    catalogName: 'AWS Inspector',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'red',
                    catalogImage: '',
                },
                {
                    catalogName: 'AWS Inspector',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'red',
                    catalogImage: '',
                },
                {
                    catalogName: 'AWS Inspector',
                    catalogDescription: 'Add To library Preview Dashboard',
                    catalogBackColor: 'red',
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
    }

    _displayCatalogBox() {
        const catalogBox = this.state.displayCatalogData.map((val: any, key: any) => {
            return (
                <div className="category-box">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="category-image confit-image">
                                <img src="/images/Image2.png" />
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

    render() {
        const state = this.state;
        return (
            <div className="perfmanager-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="PREFORMANCE MANAGEMENT" />
                <div className="perfmanager-page-container">
                    <div className="common-container">
                        <div className="row">
                            <div className="col-lg-10 col-md-10 col-sm-12">
                                <Link to={`${config.basePath}/managedashboards`} className="alert-blue-button">
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
                                <div className="right-config-box">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <h5>AWS config</h5>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="category-add-link">
                                                <a href="#">Add To library</a>
                                            </div>
                                        </div>
                                    </div>
                                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                                 visual form of a document or a typeface without relying on meaningful content</p>
                                    <div className='row '>
                                        <div className='col-lg-1 col-md-1 col-sm-6'>
                                            <img src="/images/Image2.png" />
                                        </div>
                                        <div className='col-lg-9 col-md-9 col-sm-12'>
                                            <p>AWS config OverView-Interactive</p>
                                        </div>
                                    </div>
                                    <Collapse in={this.state.open}>
                                        <div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                    </Collapse>
                                    <div className='row'>
                                        <div className='col-lg-1 col-md-1 col-sm-6'>
                                            <img src="/images/Image2.png" />
                                        </div>
                                        <div className='col-lg-10 col-md-10 col-sm-12'>
                                            <p>AWS config OverView-Interactive</p>
                                        </div>
                                    </div>

                                    <div className='row '>
                                        <div className='col-lg-1 col-md-1 col-sm-6'>
                                            <img src="/images/Image2.png" />
                                        </div>
                                        <div className='col-lg-10 col-md-10 col-sm-12'>
                                            <p>AWS config OverView-Interactive</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-1 col-md-1 col-sm-6'>
                                            <img src="/images/Image2.png" />
                                        </div>
                                        <div className='col-lg-10 col-md-10 col-sm-12'>
                                            <p>AWS config OverView-Interactive</p>
                                        </div>
                                    </div>
                                    <div className='row '>
                                        <div className='col-lg-1 col-md-1 col-sm-6'>
                                            <img src="/images/Image2.png" />
                                        </div>
                                        <div className='col-lg-10 col-md-10 col-sm-12'>
                                            <p>AWS config OverView-Interactive</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-1 col-md-1 col-sm-6'>
                                            <img src="/images/Image2.png" />
                                        </div>
                                        <div className='col-lg-10 col-md-10 col-sm-12'>
                                            <p>AWS config OverView-Interactive</p>
                                        </div>
                                    </div>
                                    <div className='row '>
                                        <div className='col-lg-1 col-md-1 col-sm-6'>
                                            <img src="/images/Image2.png" />
                                        </div>
                                        <div className='col-lg-10 col-md-10 col-sm-12'>
                                            <p>AWS config OverView-Interactive</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-1 col-md-1 col-sm-6'>
                                            <img src="/images/Image2.png" />
                                        </div>
                                        <div className='col-lg-10 col-md-10 col-sm-12'>
                                            <p>AWS config OverView-Interactive</p>
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