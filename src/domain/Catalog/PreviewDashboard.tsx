import * as React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import previewDashboardimage from '../../img/preview-dashboard.png';
export class PreviewDashboard extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            modal: false,
        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    };

    render() {
        const state = this.state;
        return (
            <Modal isOpen={state.modal} toggle={this.toggle} className="modal-container perfmanager-modal-container">
                <ModalHeader toggle={this.toggle}>AWS Config App Dashboards- Preview</ModalHeader>
                <ModalBody style={{ height: 'calc(75vh - 110px)', overflowY: 'auto', overflowX: "hidden" }}>
                <img src={previewDashboardimage} alt="Open Folder" />
                </ModalBody>
            </Modal>
        );
    }
}