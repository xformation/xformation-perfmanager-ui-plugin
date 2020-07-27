import * as React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import openFolder from '../../img/open-folder.png';
import { Collapse } from 'reactstrap';
import openFolderIcon from '../../img/open-folder.png';
import { RestService } from '../_service/RestService';
import { config } from '../../config';

export class AddLibraryPopup extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            catalogName: this.props.catalogName,
            isApiCalled: false,
            modal: false,
            folderArray: []
            checkedFolder: []
        };
    }

    async componentWillMount() {
        this.setState({
            isApiCalled: true
        });
        try {
            await RestService.getData(config.GET_FOLDER_TREE, null, null).then(
                (response: any) => {
                    this.setState({
                        folderArray: response,
                    });
                }
            );
        } catch (err) {
            console.log("Loading folder tree failed. Error: ", err);
        }
        this.setState({
            isApiCalled: false
        });
    }

    toggle = (selectedCatalogName: any) => {
        this.setState({
            modal: !this.state.modal,
            catalogName: selectedCatalogName
        });
    };

    closeModel = () => {
        this.setState({
            catalogName: '',
            modal: !this.state.modal,
        });
    }

    onClickOpenSubFolderArr = (indexArr: any) => {
        const { folderArray } = this.state;
        const folder = this.findChild(folderArray, [...indexArr]);
        folder.isOpened = !folder.isOpened;
        this.setState({
            folderArray
        });
    }

    findChild = (folderList: any, indexArr: any): any => {
        const index = indexArr.splice(0, 1)[0];
        if (indexArr.length === 0) {
            return folderList[index];
        } else {
            return this.findChild(folderList[index].subData, indexArr);
        }
    };

    checkUnCheckChild = (folderList: any, checked: any): any => {
        const length = folderList.length;
        for (let i = 0; i < length; i++) {
            const folder = folderList[i];
            folder.isChecked = checked;
            if (folder.isFolder) {
                this.checkUnCheckChild(folder.subData, checked);
            }
        }
    };

    unCheckParent = (folderList: any, indexArr: any): any => {
        if (indexArr.length > 0) {
            let child = this.findChild(folderList, [...indexArr]);
            child.isChecked = false;
            indexArr.splice(indexArr.length - 1, 1);
            this.unCheckParent(folderList, indexArr);
        }
    };

    checkParent = (folderList: any, indexArr: any): any => {
        if (indexArr.length > 0) {
            let child = this.findChild(folderList, [...indexArr]);
            if (child.isFolder) {
                const length = child.subData.length;
                let isChecked = true;
                for (let i = 0; i < length; i++) {
                    if (!child.subData[i].isChecked) {
                        isChecked = false;
                    }
                }
                if (isChecked) {
                    child.isChecked = true;
                }
            }
            indexArr.splice(indexArr.length - 1, 1);
            this.checkParent(folderList, indexArr);
        }
    };

    onClickCheckbox = (e: any, indexArr: any) => {
        const { checked } = e.target;
        let { folderArray } = this.state;
        const folder = this.findChild(folderArray, [...indexArr]);
        folder.isChecked = checked;
        if (folder.isFolder) {
            this.checkUnCheckChild(folder.subData, checked);
        }
        if (checked) {
            this.checkParent(folderArray, [...indexArr]);
        } else {
            this.unCheckParent(folderArray, [...indexArr]);
        }
        this.setState({
            folderArray
        });
        const checkedFolder: any = [];
        this.setCheckedArray(folderArray, checkedFolder);
        this.setState({
            checkedFolder
        });
    };

    setCheckedArray = (folderArray: any, checkedArray: any): any => {
        const length = folderArray.length;
        for (let i = 0; i < length; i++) {
            const folder = folderArray[i];
            if (folder.isChecked) {
                checkedArray.push(folder.id);
            }
            if (folder.isFolder) {
                this.setCheckedArray(folder.subData, checkedArray);
            }
        }
        return checkedArray;
    };

    renderTree = () => {
        const retData = [];
        const { folderArray } = this.state;
        const length = folderArray.length;
        for (let i = 0; i < length; i++) {
            const folder = folderArray[i];
            retData.push(this.renderFolder(folder, [i]));
        }
        return retData;
    }

    renderFolder = (folder: any, indexArr: any): any => {
        const retData = [];
        const subFolders = folder.subData;
        const subFolderJSX = [];
        for (let j = 0; j < subFolders.length; j++) {
            const subFolder = subFolders[j];
            let subIndexArr: any = [];
            subIndexArr = [...indexArr, j];
            subFolderJSX.push(
                <tr>
                    <td>
                        {
                            !subFolder.isFolder &&
                            <React.Fragment>
                                <input type="checkbox" className="checkbox" checked={subFolder.isChecked} onClick={(e) => this.onClickCheckbox(e, [...subIndexArr])} />
                                <span>{subFolder.title}</span>
                            </React.Fragment>
                        }
                        {
                            subFolder.isFolder &&
                            this.renderFolder(subFolder, subIndexArr)
                        }
                    </td>
                </tr>
            );

        }
        retData.push(
            <div>
                <div className="general-heading">
                    <input type="checkbox" checked={folder.isChecked} className="checkbox" onClick={(e) => this.onClickCheckbox(e, [...indexArr])} />
                    <span onClick={() => this.onClickOpenSubFolderArr([...indexArr])}><img src={openFolderIcon} alt="" /></span>
                    <h4>{folder.title}</h4>
                </div>
                <Collapse isOpen={folder.isOpened}>
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
        return retData;
    }

    render() {
        const state = this.state;
        return (
            <Modal isOpen={state.modal} toggle={this.closeModel} className="" modalClassName="catalog-modal-container">
                <ModalHeader toggle={this.closeModel}>{this.state.catalogName}</ModalHeader>
                <ModalBody style={{ height: 'calc(75vh - 110px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="catalog-form-group">
                        <div className="form-group">
                            <label htmlFor="appName">App Name:</label>
                            <input type="text" placeholder="" className="input-group-text" />
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
                            {this.renderTree()}
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