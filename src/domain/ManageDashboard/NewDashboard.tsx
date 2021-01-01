import * as React from 'react';
import Rbac from '../../components/Rbac';
import { config } from '../../config';
import createDashboardImage from '../../img/create-dashboard-image.png';
import importDashboardImage from '../../img/import-dashboard-image.png';
export class NewDashboard extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {

        };
    }

    closenewDashboard = () => {
        this.props.closenewDashboard();
    }

    render() {
        return (
            <div className="newdashboard-container">
                <div className="general-heading">
                    <h4>New Dashboard</h4>
                    <span className="newdashboard-close"><i className="fa fa-close" onClick={this.closenewDashboard}></i></span>
                </div>
                <div className="general-center-contain">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 own-dashboard">
                            <span>
                                <img src={createDashboardImage} alt="Create your own dashboard" />
                            </span>
                            <label>Create your own dashboard</label>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 own-dashboard">
                            <span>
                                <img src={importDashboardImage} alt="Import Dashboard from Catalog" />
                            </span>
                            <label>Import Dashboard from Catalog</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}