import * as React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export class AddLibraryPopup extends React.Component<any, any> {

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
            <Modal isOpen={state.modal} toggle={this.toggle} className="" modalClassName="alert-modal-container">
                <ModalHeader toggle={this.toggle}>AWS Config</ModalHeader>
                <ModalBody style={{ height: 'calc(50vh - 110px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="form-group col-md-12 col-sm-12">
                        <label htmlFor="appName">
                            App Name:
                        </label>
                        <input type="text" ></input>
                    </div>
                    <div className="form-group col-md-12 col-sm-12">
                        <label htmlFor="selectDataSource">
                           Select Data Source
                        </label>
                        <select className="form-control primary-select-box" id="signalType">
                            <option>AWS</option>
                            <option>AZURE</option>
                            <option>GCP</option>
                            <option>Synectiks</option>
                            <option>5</option>
                        </select>
                    </div>
                </ModalBody>
            </Modal>
        );
    }

}