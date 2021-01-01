import * as React from 'react';
import categoryImage from '../../img/category-image1.png';
import collapseToggleIcon from '../../img/config-collapse-icon1.png';
import { Collapse } from 'reactstrap';

export class SelectDashboard extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            catalogs: this.props.catalogsData,
        };
    }

    render() {
        const { newDashboard } = this.state;
        return (
            <div>
                <div className="common-container border-bottom-0">
                    <div className="row">
                        <div className="col-xl- col-lg-12 col-md-12 col-sm-12">
                            <div className="categories-boxes">
                                <div className="config-collapse">
                                    <div className='collapse-toggle '>
                                        <img src={categoryImage} alt="" />
                                        <p>AWS config</p>
                                        <p>Amazon Web Services (AWS) Config provides a simple web services interface that can be used to track modifications made to the resources that belong to an AWS account.</p>
                                    </div>
                                    <div className="">
                                        <div className="collapse-card-body">
                                            <span><img src={collapseToggleIcon} alt="" /></span>
                                            <p>AWS Config Overview - Interactive</p>
                                        </div>
                                        <div className="collapse-card-body">
                                            <span><img src={collapseToggleIcon} alt="" /></span>
                                            <p>AWS Config Overview - Live</p>
                                        </div>
                                        <div className="collapse-card-body">
                                            <span><img src={collapseToggleIcon} alt="" /></span>
                                            <p>Resource Modification Details - Interactive</p>
                                        </div>
                                        <div className="collapse-card-body">
                                            <p>Configuration Trend</p>
                                        </div>
                                        <div className="collapse-card-body">
                                            <p>Latest Resource Modifications</p>
                                        </div>
                                        <div className="collapse-card-body">
                                            <p>Most Frequently Modified Resource Types (with latest update)</p>
                                        </div>
                                        <div className="collapse-card-body">
                                            <p>Relationships</p>
                                        </div>
                                        <div className="collapse-card-body">
                                            <p>ResourceNames Lookup Table Generator</p>
                                        </div>
                                    </div>
                                </div>
                                {/* {this._displayCatalogDashboard()} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}