import * as React from 'react';
import categoryImage from '../../img/category-image1.png';
import collapseToggleIcon from '../../img/config-collapse-icon1.png';

export class EditDataSource extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            catalogs: this.props.catalogsData,
        };
    }

    _displaycatalogList = () => {
        const { catalogs } = this.state;
        let retData = [];
        for (let i = 0; i < catalogs.catalogListL.length; i++) {
            let row = catalogs.catalogListL[i];
            retData.push(
                <div className="collapse-card-body" onClick={() => this.openEditCatalogDetail(catalogs)}>
                    <div className="row">
                        <div className="col-lg-10 col-md-10 col-sm-12">
                            <span><img src={collapseToggleIcon} alt="" /></span>
                            <p>{row.name}</p>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-12 text-right">
                            <button className="btn btn-link"><i className="fa fa-edit"></i></button>
                            <button className="btn btn-link"><i className="fa fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            );
        }
        return retData;
    }

    openEditCatalogDetail = (data: any) => {
        this.props.setCatalogDetail(data);
    }

    render() {
        const { catalogs } = this.state;
        return (
            <div className="select-dashboard">
                <div className="select-dashboard-heading">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-12 p-r-0">
                            <div className="heading-image">
                                <img src={categoryImage} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-9 col-sm-12 p-l-0">
                            <div className="heading-text">
                                <h3>{catalogs.catalogName}</h3>
                                <p>{catalogs.catalogDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-block text-right">
                    <button className="blue-button m-r-0">Bulk edit</button>
                </div>
                <div className="bulk-lists">
                    {this._displaycatalogList()}
                </div>
            </div>
        );
    }
}