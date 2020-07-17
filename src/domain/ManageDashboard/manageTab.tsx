import * as React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import tagIcon from '../../img/tag.png';
import folderIcon from '../../img/folder.png';
import listIcon from '../../img/list.png';
import sortIcon from '../../img/sort.png';
import openFolderIcon from '../../img/open-folder.png';
import { Collapse } from 'reactstrap';

export class ManageTab extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            folderArray: [
                {
                    title: 'General',
                    openSubFolder: true,
                    checkValueStatus: false,
                    subData: [
                        {
                            tableTitle: 'Amazon CloudWatch Logs',
                            checkValue: false,
                            attribute: [
                                {
                                    attributeName: 'AWS',
                                    backColorClass: 'aws-bg'
                                },
                                {
                                    attributeName: 'Amazon',
                                    backColorClass: 'amazon-bg'
                                },
                                {
                                    attributeName: 'Cloud Watch',
                                    backColorClass: 'cloudwatch-bg'
                                },
                                {
                                    attributeName: 'Logs',
                                    backColorClass: 'logs-bg'
                                }
                            ]
                        },
                        {
                            tableTitle: 'Amazon RDS',
                            checkValue: false,
                            attribute: [
                                {
                                    attributeName: 'Cloud Watch',
                                    backColorClass: 'cloudwatch-bg'
                                },
                                {
                                    attributeName: 'Monitoringartist',
                                    backColorClass: 'aws-bg'
                                }
                            ]
                        },
                        {
                            tableTitle: 'AWS VPN',
                            checkValue: false,
                            attribute: [
                                {
                                    attributeName: 'Cloud Watch',
                                    backColorClass: 'cloudwatch-bg'
                                },
                                {
                                    attributeName: 'Monitoringartist',
                                    backColorClass: 'aws-bg'
                                }
                            ]
                        },
                        {
                            tableTitle: 'AWS VPN Dashboard',
                            checkValue: false,
                        },
                        {
                            tableTitle: 'Cloud Trial',
                            checkValue: false,
                        },
                        {
                            tableTitle: 'Cloud Watch',
                            checkValue: false,

                        },
                    ]
                },
                {
                    title: 'Main',
                    openSubFolder: false,
                    checkValueStatus: false,
                    subData: [
                        {
                            tableTitle: 'Amazon CloudWatch Logs',
                            checkValue: false,
                            attribute: [
                                {
                                    attributeName: 'AWS',
                                    backColorClass: 'aws-bg'
                                },
                                {
                                    attributeName: 'Amazon',
                                    backColorClass: 'amazon-bg'
                                },
                                {
                                    attributeName: 'Cloud Watch',
                                    backColorClass: 'cloudwatch-bg'
                                },
                                {
                                    attributeName: 'Logs',
                                    backColorClass: 'logs-bg'
                                }
                            ]
                        },
                        {
                            tableTitle: 'Amazon RDS',
                            checkValue: false,
                            attribute: [
                                {
                                    attributeName: 'Cloud Watch',
                                    backColorClass: 'cloudwatch-bg'
                                },
                                {
                                    attributeName: 'Monitoringartist',
                                    backColorClass: 'aws-bg'
                                }
                            ]
                        },
                        {
                            tableTitle: 'AWS VPN',
                            checkValue: false,
                            attribute: [
                                {
                                    attributeName: 'Cloud Watch',
                                    backColorClass: 'cloudwatch-bg'
                                },
                                {
                                    attributeName: 'Monitoringartist',
                                    backColorClass: 'aws-bg'
                                }
                            ]
                        },
                        {
                            tableTitle: 'AWS VPN Dashboard',
                            checkValue: false,
                        },
                        {
                            tableTitle: 'Cloud Trial',
                            checkValue: false,
                        },
                        {
                            tableTitle: 'Cloud Watch',
                            checkValue: false,
                        },
                    ]
                },
                {
                    title: 'Open',
                    openSubFolder: false,
                    checkValueStatus: false,
                    subData: [
                        {
                            tableTitle: 'Amazon CloudWatch Logs',
                            checkValue: false,
                        },
                        {
                            tableTitle: 'Amazon RDS',
                            checkValue: false,
                            attribute: [
                                {
                                    attributeName: 'Cloud Watch',
                                    backColorClass: 'cloudwatch-bg'
                                },
                                {
                                    attributeName: 'Monitoringartist',
                                    backColorClass: 'aws-bg'
                                }
                            ]
                        },
                        {
                            tableTitle: 'AWS VPN',
                            checkValue: false,
                            attribute: [
                                {
                                    attributeName: 'Cloud Watch',
                                    backColorClass: 'cloudwatch-bg'
                                },
                                {
                                    attributeName: 'Monitoringartist',
                                    backColorClass: 'aws-bg'
                                }
                            ]
                        },
                        {
                            tableTitle: 'AWS VPN Dashboard',
                            checkValue: false,
                        },
                        {
                            tableTitle: 'Cloud Trial',
                            checkValue: false,
                        },
                        {
                            tableTitle: 'Cloud Watch',
                            checkValue: false,
                        },
                    ]
                }
            ]
        };
    }

    onClickChangeCheckBoxValue = (parentIndex: any, childIndex: any) => {
        let updateArrayFolder = [];
        let counttruecheckBox = 0;
        for (let i = 0; i < this.state.folderArray.length; i++) {
            if (i == parentIndex) {
                for (let j = 0; j < this.state.folderArray[i].subData.length; j++) {
                    if (j == childIndex) {
                        this.state.folderArray[i].subData[j].checkValue = !this.state.folderArray[i].subData[j].checkValue;
                    }
                    if (this.state.folderArray[i].subData[j].checkValue == true) {
                        counttruecheckBox++;
                    } else {
                        counttruecheckBox--;
                    }
                }
                if (counttruecheckBox == this.state.folderArray[i].subData.length) {
                    this.state.folderArray[i].checkValueStatus = true;
                } else {
                    this.state.folderArray[i].checkValueStatus = false;
                }
            }
            updateArrayFolder.push(this.state.folderArray[i]);
        }
        this.setState({
            folderArray: updateArrayFolder
        })
    }
    onClickOpenSubFolder = (index: any) => {
        const { folderArray } = this.state;
        for (let i = 0; i < folderArray.length; i++) {
            if (i == index) {
                folderArray[i].openSubFolder = !folderArray[i].openSubFolder;
            }
        }
        this.setState({
            folderArray: folderArray,
        })
    }

    allSelectFolderData = (e: any, index: any) => {
        let updateArraycheckbox = [];
        for (let i = 0; i < this.state.folderArray.length; i++) {
            if (i == index) {
                for (let j = 0; j < this.state.folderArray[i].subData.length; j++) {
                    this.state.folderArray[i].subData[j].checkValue = e.target.checked;
                    this.state.folderArray[i].checkValueStatus = e.target.checked;
                }
            }
            updateArraycheckbox.push(this.state.folderArray[i]);
        }
        console.log(updateArraycheckbox);
        this.setState({
            folderArray: updateArraycheckbox,
        })
    }
    openCloseManageDashboardFolder = () => {
        const retData = [];
        const { folderArray } = this.state;
        const length = folderArray.length;
        for (let i = 0; i < length; i++) {
            const folder = folderArray[i];
            const subFolders = folder.subData;
            const subFolderJSX = [];
            for (let j = 0; j < subFolders.length; j++) {
                const attribute = subFolders[j].attribute;
                const subAttributeFolder = [];
                if (subFolders[j].attribute) {
                    for (let k = 0; k < attribute.length; k++) {
                        const subAtt = attribute[k];
                        subAttributeFolder.push(
                            <div className={subAtt.backColorClass}>{subAtt.attributeName}</div>
                        );
                    }
                }
                const subFolder = subFolders[j];
                subFolderJSX.push(
                    <tr>
                        <td>
                            <input type="checkbox" className="checkbox" checked={subFolder.checkValue} onClick={() => this.onClickChangeCheckBoxValue(i, j)} />
                            <span>{subFolder.tableTitle}</span>
                        </td>
                        <td>
                            <div className="float-right">
                                {subAttributeFolder}
                            </div>
                        </td>
                    </tr>
                );

            }
            retData.push(
                <div>
                    <div className="general-heading">
                        <input type="checkbox" checked={folder.checkValueStatus} onChange={(e) => { this.allSelectFolderData(e, i) }} className="checkbox" />
                        <span onClick={() => this.onClickOpenSubFolder(i)}><img src={openFolderIcon} alt="" /></span>
                        <h4>{folder.title}</h4>
                        <i className="fa fa-angle-down float-right"></i>
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


    render() {
        return (
            <div>
                <div className="manage-dashboard-search">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="form-group search-control-group">
                                <form>
                                    <input type="text" className="input-group-text" placeholder="Search dashboards by name" />
                                    <button>
                                        <i className="fa fa-search"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <div className="search-buttons float-right">
                                <a className="blue-button">New Dashboard</a>
                                <a className="blue-button">New Folder</a>
                                <a className="blue-button m-r-0">Import</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="manage-dashboard-fliter-sort">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="sort-checkbox">
                                <input type="checkbox" className="checkbox" />
                            </div>
                            <div className="sort-view">
                                <ul>
                                    <li className="active">
                                        <a href="#"><img src={folderIcon} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src={listIcon} alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="sort-select-menu">
                                <span>
                                    <img src={sortIcon} alt="" />
                                </span>
                                <select>
                                    <option>Sort (Default A-Z)</option>
                                    <option>Sort (Default A-Z)</option>
                                    <option>Sort (Default A-Z)</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="filter-starred float-right">
                                <div className="sort-checkbox">
                                    <input type="checkbox" className="checkbox" />
                                    <span>
                                        Filter by starred
                                            </span>
                                </div>
                                <div className="sort-select-menu">
                                    <span>
                                        <img src={tagIcon} alt="" />
                                    </span>
                                    <select>
                                        <option>Filter by tag</option>
                                        <option>Filter by tag</option>
                                        <option>Filter by tag</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="manage-dashboard-general">
                    {this.openCloseManageDashboardFolder()}
                </div>
            </div>
        );
    }
}