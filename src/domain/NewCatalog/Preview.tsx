import * as React from 'react';
import categoryImage from '../../img/category-image1.png';
import collapseToggleIcon from '../../img/config-collapse-icon1.png';

export class Preview extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            catalogs: this.props.catalogsData,
        };
    }

    render() {
        const { catalogs } = this.state;
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
                <div className="dashboard-frame"></div>
            </div>
        );
    }
}