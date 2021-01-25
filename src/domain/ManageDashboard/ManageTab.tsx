import * as React from 'react';
import tagIcon from '../../img/tag.png';
import folderIcon from '../../img/folder.png';
import listIcon from '../../img/list.png';
import sortIcon from '../../img/sort.png';
import openFolderIcon from '../../img/open-folder.png';
import { Collapse } from 'reactstrap';
import Rbac from '../../components/Rbac';
import { config } from '../../config';
import { UnimplementedFeaturePopup } from '../../components/UnimplementedFeaturePopup';
import { NewDashboard } from './NewDashboard';
import { RestService } from '../_service/RestService';
import { getTagColorsFromName } from '../_utilities';
import { Multiselect } from 'multiselect-react-dropdown';

export class ManageTab extends React.Component<any, any> {
    unimplementedFeatureModalRef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            folderArray: [],
            newDashboard: false,
            sortValue: '',
            starred: false,
            searchkey: '',
            tags: [
                { term: 'tag', id: 1 }, { term: 'tag', id: 2 }
            ],
            selectedTags: '',
            selectedTagsstring: '',
        };
        this.unimplementedFeatureModalRef = React.createRef();
    }
    componentDidMount() {
        const { starred, searchkey, sortValue } = this.state;
        let sendData = `sort=${sortValue}&starred=${starred}&query=${searchkey}`;
        this.getsearchData(sendData);
    }

    getsearchData = (data: any) => {
        RestService.getDashboardList(config.DASHBOARD_LIST_API + '?' + data).then((response: any) => {
            const retData = this.manipulateData(response);
            const folderArray = this.convertObjectToArray(retData);
            this.setState({
                folderArray
            });
        });
    };

    convertObjectToArray(object: any) {
        const keys = Object.keys(object);
        const retData = [];
        for (let i = 0; i < keys.length; i++) {
            retData.push(object[keys[i]]);
        }
        return retData;
    }
    manipulateData(result: any) {
        const retData: any = {};
        let tagList: any = [];
        for (let i = 0; i < result.length; i++) {
            const dash = result[i];
            if (dash.type === 'dash-db') {
                retData[dash.folderId] = retData[dash.folderId] || { subData: [], openSubFolder: false, checkValueStatus: false, id: dash.folderId };
                retData[dash.folderId].title = dash.folderTitle;
                const tags = dash.tags.map((tag: any, index: any) => {
                    tagList.push({
                        term: tag,
                        id: index + 1,
                    });
                    const color = getTagColorsFromName(tag);
                    return {
                        name: tag,
                        color
                    }
                });
                retData[dash.folderId].subData.push({
                    ...dash,
                    title: dash.title,
                    checkValue: false,
                    tags,
                });
            }
            this.setState({
                tags: tagList,
            });
        }
        return retData;
    }

    onClickUnImplementedFeature = (link: any) => {
        this.unimplementedFeatureModalRef.current.setLink(link);
        this.unimplementedFeatureModalRef.current.toggle();
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
        if (length > 0) {
            for (let i = 0; i < length; i++) {
                const folder = folderArray[i];
                const subFolders = folder.subData;
                const subFolderJSX = [];
                for (let j = 0; j < subFolders.length; j++) {
                    const tags = subFolders[j].tags;
                    const subAttributeFolder = [];
                    if (subFolders[j].tags) {
                        for (let k = 0; k < tags.length; k++) {
                            const tag = tags[k];
                            subAttributeFolder.push(
                                <div className="tag" style={tag.color}>{tag.name}</div>
                            );
                        }
                    }
                    const subFolder = subFolders[j];
                    subFolderJSX.push(
                        <tr>
                            <td>
                                <input type="checkbox" className="checkbox" checked={subFolder.checkValue} onClick={() => this.onClickChildCheckbox(i, j)} />
                                <span>{subFolder.title}</span>
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
                            <input type="checkbox" checked={folder.checkValueStatus} onChange={(e) => { this.onChangeParentCheckbox(e, i) }} className="checkbox" />
                            <span onClick={() => this.onClickOpenSubFolder(i)}><img src={openFolderIcon} alt="" /></span>
                            <h4>{folder.title}</h4>
                            <i className="fa fa-angle-down float-right"></i>
                        </div>
                        <Collapse isOpen={folder.openSubFolder}>
                            <div className="general-logs">
                                <div className="general-logs-inner">
                                    <table className="data-table" style={{ maxWidth: "800px", width: "100%" }}>
                                        {subFolderJSX}
                                    </table>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                );
            }
        } else {
            retData.push(
                <div>Record not found</div>
            )
        }
        return retData;
    }

    openNewDashboard = () => {
        let page = !this.state.newDashboard;
        this.setState({
            newDashboard: page
        })
    }

    setsortingData = (e: any) => {
        const { starred, searchkey, selectedTagsstring } = this.state;
        this.setState({
            sortValue: e.target.value,
        });
        let sendData = `sort=${e.target.value}&starred=${starred}${selectedTagsstring}&query=${searchkey}`;
        this.getsearchData(sendData);
    }

    setStared = (e: any) => {
        const { selectedTagsstring, searchkey, sortValue } = this.state;
        this.setState({
            starred: e.target.checked,
        });
        let sendData = `sort=${sortValue}&starred=${e.target.checked}${selectedTagsstring}&query=${searchkey}`;
        this.getsearchData(sendData);
    }

    searchdashboard = (e: any) => {
        const { starred, selectedTagsstring, sortValue } = this.state;
        this.setState({
            searchkey: e.target.value,
        });
        let sendData = `sort=${sortValue}&starred=${starred}${selectedTagsstring}&query=${e.target.value}`;
        this.getsearchData(sendData);
    }

    displayTags = () => {
        const { tags } = this.state;
        let retData = [];
        for (let i = 0; i < tags.length; i++) {
            retData.push(
                <option value={tags[i].count}>{tags[i].term}</option>
            )
        }
        return retData;
    }

    setTags = (selectedval: any) => {
        const { starred, searchkey, sortValue } = this.state;
        let sendData = '';
        let tagQuery = "";
        for (let i = 0; i < selectedval.length; i++) {
            tagQuery += `&tag=${selectedval[i].term}`;
        }
        this.setState({
            selectedTagsstring: tagQuery,
        })
        sendData = `sort=${sortValue}&starred=${starred}${tagQuery}&query=${searchkey}`;
        this.getsearchData(sendData);
    }

    render() {
        const { newDashboard, sortValue, starred, searchkey, tags, selectedTags } = this.state;
        return (
            <div>
                <div className="manage-dashboard-search">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="form-group search-control-group">
                                <form>
                                    <input type="text" className="input-group-text"
                                        onChange={this.searchdashboard} value={searchkey} placeholder="Search dashboards by name" />
                                    <button>
                                        <i className="fa fa-search"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <div className="search-buttons float-right">
                                <Rbac parentName={config.PARENT_NAME} childName="managedashboard-managetab-newdashboardbtn">
                                    <a className="blue-button" onClick={this.openNewDashboard}>New Dashboard</a>
                                </Rbac>
                                <Rbac parentName={config.PARENT_NAME} childName="managedashboard-managetab-newfolderbtn">
                                    <a className="blue-button m-r-0" onClick={() => this.onClickUnImplementedFeature("")}>New Folder</a>
                                </Rbac>
                                {/* <Rbac parentName={config.PARENT_NAME} childName="managedashboard-managetab-importbtn">
                                <a className="blue-button m-r-0" onClick={() => this.onClickUnImplementedFeature("")}>Import</a>
                                </Rbac> */}
                            </div>
                        </div>
                    </div>
                </div>
                {newDashboard === false &&
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
                                    <select value={sortValue} onChange={this.setsortingData}>
                                        <option>Sort (Default A-Z)</option>
                                        <option>Sort (Default Z-A)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="filter-starred float-right">
                                    <div className="sort-checkbox">
                                        <input type="checkbox" checked={starred} onChange={this.setStared} className="checkbox" />
                                        <span>Filter by starred</span>
                                    </div>
                                    <div className="sort-select-menu">
                                        <Multiselect
                                            options={tags}
                                            selectedValues={selectedTags}
                                            onSelect={this.setTags}
                                            showCheckbox={true}
                                            onRemove={this.setTags}
                                            displayValue="term"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {newDashboard === false && <div className="manage-dashboard-general">
                    {this.openCloseManageDashboardFolder()}
                </div>
                }
                {newDashboard === true &&
                    <div className="manage-newdashboard-general">
                        <NewDashboard closenewDashboard={this.openNewDashboard} />
                    </div>
                }
                <UnimplementedFeaturePopup ref={this.unimplementedFeatureModalRef} />
            </div>
        );
    }
}