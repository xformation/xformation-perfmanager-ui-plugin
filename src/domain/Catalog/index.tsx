import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Breadcrumbs } from '../Breadcrumbs';
import { Collapse } from 'reactstrap';
// import {Collapse} from 'react-bootstrap';
import categoryImage from '../../img/category-image1.png';
import collapseToggleIcon from '../../img/config-collapse-icon1.png';
import { AddLibraryPopup } from './AddLibraryPopup';
import { AddDashboardToCollectorPopup } from './AddDashboardToCollectorPopup'
import { PreviewDashboard } from './PreviewDashboard';
import { RestService } from '../_service/RestService';
import Rbac from './../../components/Rbac'
import { TopMenu } from "./TopMenu";
import { AddCatalog } from './AddCatalog'

export class Catalog extends React.Component<any, any> {
    breadCrumbs: any;
    addlibraryRef: any;
    addDashboardToCollectorRef: any;
    addCatalogRef: any;
    previewdashboardRef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            isApiCalled: false,
            searchKey: '',
            currentOpenIndex: '',
            currentCatalogDisplayData: [],
            catalogs: [],
            filterByCatalogTypeFlag: false,
            displayCatalogData: [],
            catalogType: '',
            selectedCatalogName: '',
            selectedCatalogDescription: '',
            selectedCatalogId: null,
        };
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
                label: "Catalog",
                isCurrentPage: true
            }
        ];
        this.addlibraryRef = React.createRef();
        this.addDashboardToCollectorRef = React.createRef();
        this.previewdashboardRef = React.createRef();
        this.addCatalogRef = React.createRef();
    }

    async componentWillMount() {
        this.setState({
            isApiCalled: true
        });
        try {
            await RestService.getData(config.GET_ALL_COLLECTOR, null, null).then(
                (response: any) => {
                    this.setState({
                        catalogs: response,
                        displayCatalogData: response
                    });
                    console.log("Catalog response : ", response);
                }
            );
        } catch (err) {
            console.log("Loading catalog failed. Error: ", err);
        }
        this.setState({
            isApiCalled: false
        });
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
                            <div className="category-name">{val.catalog_name}</div>
                            <div className="category-name">{val.type}</div>
                            <div className="category-add-link">
                                <a onClick={e => this.onClickAddLibrary(e, val.catalog_name, val.id)}>Add To library</a>
                                <a onClick={e => this.onClickaAddDashboardToCollector(e, val.catalog_name, val.id)}>Add Dashboard To Collector</a>
                                <a onClick={this.onClickPreviewDashboard}>Preview Dashboard</a>

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
        if (arryData.catalog_detail != '' && arryData.catalog_detail) {
            for (let i = 0; i < arryData.catalog_detail.length; i++) {
                if (arryData.catalog_detail[i].open == true) {
                    arryData.catalog_detail[i].open = false;
                }
                displaycataloddescriptionData.push(arryData.catalog_detail[i]);
            }
            this.setState({
                currentOpenIndex: i,
                currentCatalogDisplayData: displaycataloddescriptionData,
                selectedCatalogName: arryData.catalogName,
                selectedCatalogDescription: arryData.catalogDescription,
                selectedCatalogId: arryData.id,
            })
        } else {
            this.setState({
                currentOpenIndex: '',
                currentCatalogDisplayData: '',
                selectedCatalogName: '',
                selectedCatalogDescription: '',
                selectedCatalogId: null,
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
            if (catalogs[i].catalog_name.indexOf(value) !== -1 || value === '') {
                searchResult.push(catalogs[i]);
            }
        }
        this.setState({
            displayCatalogData: searchResult,
        })
    }

    onClickAddLibrary = (e: any, selectedCatalogName: any, selectedCatalogId: any) => {
        this.addlibraryRef.current.toggle(selectedCatalogName, selectedCatalogId);
    };
    onClickaAddDashboardToCollector = (e: any, selectedCatalogName: any, selectedCatalogId: any) => {
        this.addDashboardToCollectorRef.current.toggle(selectedCatalogName, selectedCatalogId);
    };

    onClickPreviewDashboard = (e: any) => {
        this.previewdashboardRef.current.toggle();
    };
    onClickCreateCatalog = () => {
        this.addCatalogRef.current.toggle();
    }
    onClickFilterByCatalogType = (e: any) => {
        const { catalogs } = this.state;
        const catalogType = e.target.value;
        console.log("Selected Catalog type :: ", catalogType);
        this.setState({
            catalogType: catalogType,
        });
        
        if (!(catalogType == '') && !(catalogType == 'ALL')) {
            console.log("before filter :: ", catalogs);
            let displayCatalogData = catalogs.filter((d: any) => d.type === catalogType);
            console.log("after filter :: ", displayCatalogData);
            console.log("I am in");
            this.setState({
                displayCatalogData: displayCatalogData,
            });
        }else if(catalogType == 'ALL'){
            this.setState({
                displayCatalogData: catalogs,
            });
        }

    }

    render() {
        const state = this.state;
        return (
            <div className="perfmanager-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="PREFORMANCE MANAGEMENT" />
                <div className="perfmanager-page-container">
                    <div className="common-container">
                        <TopMenu />
                    </div>
                    <div className="common-container">
                        <div className="catalog-app-text">
                            <h3>Catalog</h3>
                            <p>A catalog is collection of dashboards</p>
                        </div>
                    </div>
                    <div className="common-container">
                        <div className="text-left">
                            <Rbac parentName={config.PARENT_NAME} childName="commancomponent-createbuttoncomponent-createbtn">
                                <a href="#" style={{ float: 'left' }} onClick={this.onClickCreateCatalog} className="blue-button m-r-0 min-width-inherit width-auto create-btn">
                                    Add Catalog
                                    </a>
                            </Rbac>
                        </div>
                        <div className="text-right">

                            <div className="category-select">
                                <select className="form-control" name="catalogType" value={state.catalogType} onChange={this.onClickFilterByCatalogType}>
                                    <option value="ALL">ALL</option>
                                    <option value="AWS">AWS</option>
                                    <option value="AZURE">AZURE</option>
                                    <option value="GCP">GCP</option>
                                    <option value="Synectiks">Synectiks</option>
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
                            <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12">
                                <div className="categories-boxes">
                                    {this._displayCatalogBox()}
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 p-l-0">
                                {this.state.currentOpenIndex !== '' &&
                                    <div className="right-config-box">
                                        <div className="config-heading">
                                            <h5>{this.state.selectedCatalogName}</h5>
                                            <div className="category-add-link float-right">
                                                <a onClick={e => this.onClickAddLibrary(e, this.state.selectedCatalogName, this.state.selectedCatalogId)}>Add To library</a>
                                            </div>
                                        </div>
                                        <div className="publishing-text">
                                            <p>{this.state.selectedCatalogDescription}</p>
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
                <PreviewDashboard ref={this.previewdashboardRef} />
                <AddDashboardToCollectorPopup ref={this.addDashboardToCollectorRef} />
                <AddCatalog ref={this.addCatalogRef} />
            </div>
        );
    }
};