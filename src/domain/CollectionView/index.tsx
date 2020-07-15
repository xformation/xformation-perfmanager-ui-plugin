import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { config } from '../../config';
import awsLogo from '../../img/aws.png';
import microsoftAzureLogo from '../../img/microsoftazure.png';
import gcpLogo from '../../img/google-cloud.png';
import KubernetesLogo from '../../img/kubernetes.png';
import folderIcon from '../../img/folder.png';
import listIcon from '../../img/list.png';
import sortIcon from '../../img/sort.png';
import tagIcon from '../../img/tag.png';
import openFolderIcon from '../../img/open-folder.png';
import { Collapse } from 'reactstrap';

export class CollectionView extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {
            collectionArray: [
                {
                    name: 'AWS',
                    type: 'Hosted',
                    messages: '1293',
                    openCollectionStatus: false,
                    subCollectionData: [{
                        subCollectionName: 'AWS Config',
                        subCollectionType: 'Hosted',
                        subCollectionCategory: 'aws/cloudconfig',
                        subCollectionMessages: '',
                    },
                    {
                        subCollectionName: 'Amazon ECS',
                        subCollectionType: 'Hosted',
                        subCollectionCategory: 'aws/ecs',
                        subCollectionMessages: '',
                    },
                    {
                        subCollectionName: 'AWS Cloud Trail',
                        subCollectionType: 'Hosted',
                        subCollectionCategory: 'AWS Cloud Trail',
                        subCollectionMessages: '',
                    },
                    ]
                },
                {
                    name: 'Admin Linux',
                    type: 'Installed',
                    messages: '71',
                    openCollectionStatus: false,
                    subCollectionData: [
                        {
                            subCollectionName: 'AWS Config',
                            subCollectionType: 'Hosted',
                            subCollectionCategory: 'aws/Linux',
                            subCollectionMessages: '',
                        },
                    ],
                }]
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
    createCollectionTable = () => {
        const retData = [];
        const { collectionArray } = this.state;
        const length = collectionArray.length;
        for (let i = 0; i < length; i++) {
            const collection = collectionArray[i];
            const subCollections = collection.subCollectionData;
            const subCollectionJSX = [];
            for (let j = 0; j < subCollections.length; j++) {
                const collectionsubData = subCollections[j];
                subCollectionJSX.push(
                    <div className="tbody">
                        <div className="tbody-td first">
                            {collectionsubData.subCollectionName}
                        </div>
                        <div className="tbody-td">{collectionsubData.subCollectionType}</div>
                        <div className="tbody-td">
                            <div className="status-icon"></div>
                        </div>
                        <div className="tbody-td">{collectionsubData.subCollectionCategory}</div>
                        <div className="tbody-td">{collectionsubData.subCollectionMessages}</div>
                        <div className="tbody-td">
                            <div className="d-flex">
                                <div className="enabled"></div>
                                <button className="btn btn-link">
                                    <i className="fa fa-edit"></i>
                                </button>
                                <button className="btn btn-link">
                                    <i className="fa fa-trash"></i>
                                </button>
                                <button className="btn btn-link" id="PopoverFocus">
                                    <i className="fa fa-ellipsis-h"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            }
            retData.push(
                <div className="tbody">
                    <div className="tbody-inner">
                        <div className="tbody-td">
                            {collection.openCollectionStatus == false && <div onClick={() => this.opensubCollection(i)} className="caret-right"></div>}
                            {collection.openCollectionStatus == true && <div onClick={() => this.opensubCollection(i)} className="caret-down"></div>}
                            {collection.name} <b>({subCollections.length})</b>    
                        </div> 
                        <div className="tbody-td">{collection.type}</div>
                        <div className="tbody-td"><div className="status-icon"></div></div>
                        <div className="tbody-td">{collection.category}</div>
                        <div className="tbody-td">{collection.messages}</div>
                        <div className="tbody-td">
                        <div className="d-flex">
                            <button className="btn btn-link">
                                <i className="fa fa-plus"></i>
                            </button>
                            <button className="btn btn-link">
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className="btn btn-link">
                                <i className="fa fa-trash"></i>
                            </button>
                            <button className="btn btn-link" id="PopoverFocus">
                                <i className="fa fa-ellipsis-h"></i>
                            </button>
                        </div>
                    </div>                 
                    </div>
                    <Collapse isOpen={collection.openCollectionStatus}>
                        {subCollectionJSX}
                    </Collapse>
                </div>                
            );
        }
        return retData;
    }

    opensubCollection(index: any) {
        const { collectionArray } = this.state;
        for (let i = 0; i < collectionArray.length; i++) {
            if (i == index) {
                collectionArray[i].openCollectionStatus = !collectionArray[i].openCollectionStatus;
            }
        }
        this.setState({
            collectionArray: collectionArray,
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
                            <div className="col-lg-10 col-md-12 col-sm-12">
                                <Link to={`${config.basePath}/managedashboard`} className="blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Manage Dashboards
                                </Link>
                                <Link to={`${config.basePath}/catalog`} className="blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Catalog
                                </Link>
                                <Link to={`${config.basePath}/library`} className="blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Library
                                </Link>
                                <Link to={`${config.basePath}/collection`} className="blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Collection
                                </Link>
                                <Link to="/plugins/xformation-alertmanager-ui-plugin/page/managealertrule" className="blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Rule
                                </Link>
                                <a className="blue-button">
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Preferences
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-12 col-sm-12">
                                <div className="float-right common-right-btn">
                                    <Link to={`${config.basePath}/dashboard`} className="white-button"><i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp; Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="common-container collection-search">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <div className="collection-heading">Collection</div>
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12">
                                <div className="float-right">
                                    <div className="category-select">
                                        <select className="form-control">
                                            <option>Category</option>
                                            <option>Category</option>
                                            <option>Category</option>
                                        </select>
                                    </div>
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
                    <div className="common-container border-bottom-0">
                        <div className="collection-details">
                            <div className="container-inner">
                                <div className="collection-data-table">
                                    <div className="thead">
                                        <div className="thead-th">
                                            <div className="caret-right"></div>
                                            Name
                                        </div>
                                        <div className="thead-th">Type</div>
                                        <div className="thead-th">Status</div>
                                        <div className="thead-th">Category</div>
                                        <div className="thead-th">Messages</div>
                                        <div className="thead-th"></div>
                                    </div>
                                    {this.createCollectionTable()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};