import * as React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import openFolder from '../../img/open-folder.png';
import { Collapse } from 'reactstrap';
import openFolderIcon from '../../img/open-folder.png';
import { RestService } from '../_service/RestService';
import { config } from '../../config';
import AlertMessage from '../../components/AlertMessage';

export class ViewDashboardJsonPopup extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            dashboard: {},
            dashboardJson: {},
            isApiCalled: false,
            modal: false,
            isAlertOpen: false,
            message: null,
            severity: null,
        };
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
    }
    toggle = (dashboard: any) => {
        // console.log("final Dashborad :: ", JSON.parse(dashboard));
        dashboard = JSON.parse(dashboard);
        this.setState({
            dashboardJson: dashboard.dashboardJson,
            modal: !this.state.modal,
        });
    };

    closeModel = () => {
        this.setState({
            catalogName: '',
            catalogId: null,
            modal: !this.state.modal,
            checkedFolder: [],
            appName: null
        });
    }


    handleCloseAlert = (e: any) => {
        this.setState({
            isAlertOpen: false
        })
    }

    render() {
        const state = this.state;
        return (
            <Modal isOpen={state.modal} toggle={this.closeModel} className="modal-container perfmanager-modal-container">
                <AlertMessage handleCloseAlert={this.handleCloseAlert} open={state.isAlertOpen} severity={state.severity} msg={state.message}></AlertMessage>
                <ModalHeader toggle={this.closeModel}>{this.state.catalogName}</ModalHeader>
                <ModalBody style={{ height: 'calc(75vh - 110px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="catalog-form-group">
                        <div className="form-group">
                            <label htmlFor="appName">Dashboard Json:</label>
                            <textarea placeholder="" name="appName" id="appName" value={state.dashboardJson} className="input-group-text" >{state.dashboardJson}</textarea>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}