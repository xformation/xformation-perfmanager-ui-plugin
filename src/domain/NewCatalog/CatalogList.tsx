import * as React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import tagIcon from '../../img/tag.png';
import folderIcon from '../../img/folder.png';
import listIcon from '../../img/list.png';
import sortIcon from '../../img/sort.png';
import openFolderIcon from '../../img/open-folder.png';
import { Collapse } from 'reactstrap';
import Rbac from '../../components/Rbac';
import { config } from '../../config';
import categoryImage from '../../img/category-image1.png';
export class CatalogList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            catalogs: this.props.catalogsData,
        };
    }

    _displayCatalogBox() {
        const catalogBox = this.state.catalogs.map((val: any, key: any) => {
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
                        </div>
                    </div>
                </div>
            );
        });
        return catalogBox;
    }

    openCatalogDetail = (i: any, arryData: any) => {

    }

    render() {
        const { newDashboard } = this.state;
        return (
            <div>
                <div className="common-container border-bottom-0">
                    <div className="row">
                        <div className="col-xl- col-lg-12 col-md-12 col-sm-12">
                            <div className="categories-boxes">
                                {this._displayCatalogBox()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}