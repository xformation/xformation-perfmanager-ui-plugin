import * as React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import openFolder from '../../img/open-folder.png';
import { Collapse } from 'reactstrap';
import openFolderIcon from '../../img/open-folder.png';
export class AddLibraryPopup extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            modal: false,
            folderArray: [
                {
                    title: 'General',
                    openSubFolder: true,
                    checkValueStatus: false,
                    subData: [
                        {
                            tableTitle: 'Amazon CloudWatch Logs',
                            checkValue: false
                        },
                        {
                            tableTitle: 'Amazon RDS',
                            checkValue: false,
                        },
                        {
                            tableTitle: 'AWS VPN',
                            checkValue: false,
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
                    title: 'Personal',
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
                        },
                        {
                            tableTitle: 'AWS VPN',
                            checkValue: false,
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
                    title: 'Cloud',
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
                        },
                        {
                            tableTitle: 'AWS VPN',
                            checkValue: false,
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
                    title: 'Networking',
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
                        },
                        {
                            tableTitle: 'AWS VPN',
                            checkValue: false,
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

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    };

    onClickChildCheckbox = (parentIndex: any, childIndex: any) => {
        let countCheckedCheckbox = 0;
        const { folderArray } = this.state;
        const parentCheckbox = folderArray[parentIndex];
        parentCheckbox.subData[childIndex].checkValue = !parentCheckbox.subData[childIndex].checkValue;
        for (let j = 0; j < parentCheckbox.subData.length; j++) {
            if (parentCheckbox.subData[j].checkValue == true) {
                countCheckedCheckbox++;
            } else {
                countCheckedCheckbox--;
            }
        }
        if (countCheckedCheckbox == parentCheckbox.subData.length) {
            parentCheckbox.checkValueStatus = true;
        } else {
            parentCheckbox.checkValueStatus = false;
        }
        this.setState({
            folderArray
        })
    }

    onClickOpenSubFolder = (index: any) => {
        const { folderArray } = this.state;
        folderArray[index].openSubFolder = !folderArray[index].openSubFolder;
        this.setState({
            folderArray: folderArray,
        })
    }

    onChangeParentCheckbox = (e: any, index: any) => {
        const { folderArray } = this.state;
        const parentCheckbox = folderArray[index];
        const checked = e.target.checked;
        for (let j = 0; j < parentCheckbox.subData.length; j++) {
            parentCheckbox.subData[j].checkValue = checked;
            parentCheckbox.checkValueStatus = checked;
        }
        this.setState({
            folderArray
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
                const subFolder = subFolders[j];
                subFolderJSX.push(
                    <tr>
                        <td>
                            <input type="checkbox" className="checkbox" checked={subFolder.checkValue} onClick={() => this.onClickChildCheckbox(i, j)} />
                            <span>{subFolder.tableTitle}</span>
                        </td>
                    </tr>
                );

            }
            retData.push(
                <div>
                    <div className="general-heading">
                        <input type="checkbox" checked={folder.checkValueStatus} onChange={(e) => { this.onChangeParentCheckbox(e, i) }} className="checkbox" />
                        <span onClick={() => this.onClickOpenSubFolder(i)}><img src={openFolderIcon} alt="" /></span>
                        <h4>{folder.title}</h4>
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
        const state = this.state;
        return (
            <Modal isOpen={state.modal} toggle={this.toggle} className="" modalClassName="catalog-modal-container">
                <ModalHeader toggle={this.toggle}>AWS Config</ModalHeader>
                <ModalBody style={{ height: 'calc(75vh - 110px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="catalog-form-group">
                        <div className="form-group">
                            <label htmlFor="appName">App Name:</label>
                            <input type="text" placeholder="AWS Config" className="input-group-text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="selectDataSource">Select Data Source</label>
                            <select className="form-control primary-select-box" id="signalType">
                                <option>AWS</option>
                                <option>AZURE</option>
                                <option>GCP</option>
                                <option>Synectiks</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="selectLocationInLibrary">Select location in Library</label>
                            {this.openCloseManageDashboardFolder()}
                        </div>
                        <div className="form-group text-right">
                            <a className="gray-button">Cancel</a>
                            <a className="blue-button">Add to Library</a>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}