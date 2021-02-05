import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Collapse } from 'reactstrap';
// // import {Collapse} from 'react-bootstrap';
// import categoryImage from '../../img/category-image1.png';
// import collapseToggleIcon from '../../img/config-collapse-icon1.png';
// import { AddLibraryPopup } from './AddLibraryPopup';
// import { AddDashboardToCollectorPopup } from './AddDashboardToCollectorPopup'
// import { PreviewDashboard } from './PreviewDashboard';
import { UnimplementedFeaturePopup } from '../../components/UnimplementedFeaturePopup';

import Rbac from '../../components/Rbac'

export class TopMenu extends React.Component<any, any> {
    unimplementedFeatureModalRef: any;
    constructor(props: any) {
        super(props);
        this.state = {

        }
        this.unimplementedFeatureModalRef = React.createRef();
    }
    onClickUnImplementedFeature = (link: any) => {
        this.unimplementedFeatureModalRef.current.setLink(link);
        this.unimplementedFeatureModalRef.current.toggle();
    };


    render() {
        return (
            <div className="row">
                 {/* <div className="col-lg-10 col-md-12 col-sm-12"> */}
                    {/* <Rbac parentName={config.PARENT_NAME} childName="catalog-topmenu-catlogbtn">
                        <Link to='' className="blue-button" >
                            <i className="fa fa-cog"></i>&nbsp;&nbsp;
                            Discovery
                                </Link>
                    </Rbac>
                    <Rbac parentName={config.PARENT_NAME} childName="catalog-topmenu-manangedashboardsbtn">
                        <Link to={`${config.basePath}/managedashboard`} className="blue-button" onClick={() => this.onClickUnImplementedFeature("")}>
                            <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Dashboards
                                </Link>
                    </Rbac> */}
                    {/* <Rbac parentName={config.PARENT_NAME} childName="catalog-topmenu-librarybtn">
                        <Link to={`${config.basePath}/library`} className="blue-button" >
                            <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Library
                                </Link>
                    </Rbac> */}
                    {/* <Rbac parentName={config.PARENT_NAME} childName="catalog-topmenu-collectionbtn">
                        <Link to={`${config.basePath}/collectionview`} className="blue-button" onClick={() => this.onClickUnImplementedFeature("")}>
                            <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Collection
                                </Link>
                    </Rbac>
                    <Rbac parentName={config.PARENT_NAME} childName="catalog-topmenu-rulebtn">
                        <Link to="" className="blue-button" onClick={() => this.onClickUnImplementedFeature("")}>
                            <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    View
                                </Link>
                    </Rbac> */}
                    {/* <Rbac parentName={config.PARENT_NAME} childName="catalog-topmenu-rulebtn">
                        <Link to="/plugins/xformation-alertmanager-ui-plugin/page/managealertrule" className="blue-button" onClick={() => this.onClickUnImplementedFeature("")}>
                            <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Rule
                                </Link>
                    </Rbac>
                    <Rbac parentName={config.PARENT_NAME} childName="catalog-topmenu-preferencesbtn">
                        <a className="blue-button" onClick={() => this.onClickUnImplementedFeature("")}>
                            <i className="fa fa-cog"></i>&nbsp;&nbsp;
                                    Preferences
                                </a>
                    </Rbac> */}
                 {/* </div>  */}
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="float-right common-right-btn">
                        <Link to={`${config.basePath}/managedashboard`} className="white-button m-r-0"><i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp; Back</Link>
                    </div>
                </div>
                <UnimplementedFeaturePopup ref={this.unimplementedFeatureModalRef} />
            </div>
        );
    }
};