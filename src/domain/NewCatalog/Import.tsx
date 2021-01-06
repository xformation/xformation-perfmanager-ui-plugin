import * as React from 'react';
import categoryImage from '../../img/category-image1.png';
import collapseToggleIcon from '../../img/config-collapse-icon1.png';
import openFolderIcon from '../../img/open-folder.png';
import { Collapse } from 'reactstrap';

export class Import extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            catalogs: this.props.catalogsData,
            openTreeView: false,
            locationPath: '',
            folderArray: [
                {
                    title: 'General',
                    openSubFolder: false,
                    checkValueStatus: false,
                    subData: [
                        {
                            tableTitle: 'AWS Cloud',
                            checkValue: false,
                        }
                    ]
                },
                {
                    title: 'Personal',
                    openSubFolder: false,
                    checkValueStatus: false,
                },
                {
                    title: 'Cloud',
                    openSubFolder: false,
                    checkValueStatus: false,
                    subData: [
                        {
                            tableTitle: 'AWS VPN',
                            checkValue: false,
                        }
                    ]
                },
                {
                    title: 'Networking',
                    openSubFolder: false,
                    checkValueStatus: false,
                    subData: [
                        {
                            tableTitle: 'Cloud Trial',
                            checkValue: false,
                        },
                        {
                            tableTitle: 'Cloud Watch',
                            checkValue: false,
                        },
                    ],
                }
            ],
        };
    }

    openTreeView = () => {
        const { openTreeView } = this.state;
        let tree = !openTreeView;
        this.setState({
            openTreeView: tree
        })
    }

    setLocationPath = (path: any) => {
        const { locationPath } = this.state;
        let locationpath = locationPath;
        locationpath = locationpath + '>' + path;
        this.setState({
            locationPath: locationpath,
        })
    }

    openCloseManageDashboardFolder = () => {
        const retData = [];
        const { folderArray } = this.state;
        const length = folderArray.length;
        for (let i = 0; i < length; i++) {
            const folder = folderArray[i];
            const subFolderJSX = [];
            if (folder.subData !== undefined) {
                const subFolders = folder.subData;
                for (let j = 0; j < subFolders.length; j++) {
                    const subFolder = subFolders[j];
                    subFolderJSX.push(
                        <tr>
                            <td>
                                <span onClick={() => this.setLocationPath(subFolder.tableTitle)}><img src={openFolderIcon} alt="" /></span>
                                <h4>{subFolder.tableTitle}</h4>
                            </td>
                        </tr>
                    );

                }
            }
            retData.push(
                <div>
                    <div className="general-heading">
                        <span onClick={() => this.onClickOpenSubFolder(i)}><img src={openFolderIcon} alt="" /></span>
                        <h4>{folder.title}</h4>
                        {folder.openSubFolder ?
                            <i className='fa fa-angle-up' onClick={() => this.onClickOpenSubFolder(i)}></i>
                            :
                            <i className="fa fa-angle-down" onClick={() => this.onClickOpenSubFolder(i)}></i>
                        }
                    </div>
                    <Collapse isOpen={folder.openSubFolder}>
                        <div className="general-logs">
                            <div className="general-logs-inner">
                                <table className="data-table">
                                    {subFolderJSX}
                                </table>
                            </div>
                        </div>
                    </Collapse>
                </div>
            );
        }
        return retData;
    }

    onClickOpenSubFolder = (index: any) => {
        const { folderArray } = this.state;
        folderArray[index].openSubFolder = !folderArray[index].openSubFolder;
        this.setState({
            folderArray: folderArray,
            locationPath: folderArray[index].title
        })
    }

    render() {
        const { catalogs, openTreeView, locationPath } = this.state;
        return (
            <div className="select-dashboard">
                <div className="select-dashboard-heading">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-12">
                            <div className="heading-image">
                                <img src={categoryImage} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-9 col-sm-12">
                            <div className="heading-text">
                                <h3>{catalogs.catalogName}</h3>
                                <p>{catalogs.catalogDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="config-form">
                    <div className="form-group">
                        <label>App Name:</label>
                        <input className="form-control" type="text" placeholder="AWS Config" />
                    </div>
                    <div className="form-group">
                        <label>Location Path::</label>
                        <input className="form-control" value={locationPath} type="text" placeholder="AWS Config" />
                    </div>
                    <div className="form-group">
                        <label>Location:</label>
                        <select className="form-control" id="importDashboard" name="importDashboard" onClick={this.openTreeView}>
                            <option value="Select Folder to import Dashboard">Select Folder to import Dashboard</option>
                        </select>
                        {openTreeView === true && <div>
                            {this.openCloseManageDashboardFolder()}
                        </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}