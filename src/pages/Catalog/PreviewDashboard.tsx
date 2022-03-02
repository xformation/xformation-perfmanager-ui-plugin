import * as React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
//import previewDashboardimage from '../../img/preview-dashboard.png';
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
                <ModalBody style={{ height: 'calc(90vh - 150px)', overflowY: 'auto', overflowX: "hidden" }}>
                    {/* <img src={previewDashboardimage} alt="Open Folder" /> */}
                    <iframe src="https://wonderful-thompson-86244c.netlify.app/catalogue/this-is-catalogue-1/" width="100%" height="98%" frameBorder="0"></iframe>
                </ModalBody>
            </Modal>
        );
    }
}