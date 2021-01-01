import * as React from 'react';
import Rbac from '../../components/Rbac';
import { config } from '../../config';
import folderIcon from '../../img/folder.png';
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
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h4>New Dashboard</h4>
                            <span><i className="fa fa-close" onClick={this.closenewDashboard}></i></span>
                        </div>
                    </div>
                </div>
                <div className="general-center-contain">
                    <div className="row own-dashboard">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <img src={folderIcon} alt="" />
                            <label>Create your own dashboard</label>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <img src={folderIcon} alt="" />
                            <label>Import Dashboard from Catalog </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}