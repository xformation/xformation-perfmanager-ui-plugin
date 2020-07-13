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

export class CollectionView extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {
            collectionArray: [{
                name: 'AWS',
                type: 'Hosted',
                messages: '1293',
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
                }]
            },
            {
                name: 'Admin Linux',
                type: 'Installed',
                messages: '71',
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
            // for (let j = 0; j < subCollections.length; j++) {
            //     const subCollection = subCollections[j];
            //     subCollectionJSX.push(
            //         <tr className="">
            //             <td className="">{subCollection.subCollectionName}</td>
            //             <td>{subCollection.subCollectionType}</td>
            //             <td>
            //                 <div className="status-icon"></div>
            //             </td>
            //             <td>{subCollection.subCollectionCategory}</td>
            //             <td>{subCollection.subCollectionMessages}</td>
            //             <td>
            //                 <div className="d-flex">
            //                     <button className="btn btn-link">
            //                         <i className="fa fa-plus"></i>
            //                     </button>
            //                     <button className="btn btn-link">
            //                         <i className="fa fa-edit"></i>
            //                     </button>
            //                     <button className="btn btn-link">
            //                         <i className="fa fa-trash"></i>
            //                     </button>
            //                     <button className="btn btn-link" id="PopoverFocus">
            //                         <i className="fa fa-ellipsis-h"></i>
            //                     </button>
            //                 </div>
            //             </td>
            //         </tr>
            //     );
            // }
            retData.push(
                <tr className="">
                    <td className="">
                        <div className="caret-right"></div>
                        {collection.name} <b>(3)</b>
                    </td>
                    <td>{collection.type}</td>
                    <td>
                        <div className="status-icon"></div>
                    </td>
                    <td></td>
                    <td>{collection.messages}</td>
                    <td>
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
                    </td>
                </tr>
            );
        }
        return retData;
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
                    <div className="common-container collection-search">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="collection-heading">Collection</div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12">
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
                                <table className="collection-data-table">
                                    <tbody>
                                        <tr className="collection-data-table-header">
                                            <th>
                                                <div className="caret-right"></div>
                                                Name
                                            </th>
                                            <th>Type</th>
                                            <th>Status</th>
                                            <th>Category</th>
                                            <th>Messages</th>
                                            <th></th>
                                        </tr>
                                        {this.createCollectionTable()}      
                                    </tbody>                          
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};