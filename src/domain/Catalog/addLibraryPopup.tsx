import * as React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import openFolder from '../../img/open-folder.png';
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
            <Modal isOpen={state.modal} toggle={this.toggle} className="" modalClassName="catalog-modal-container">
                <ModalHeader toggle={this.toggle}>AWS Config</ModalHeader>
                <ModalBody style={{ height: 'calc(75vh - 110px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="catalog-form-group">
                        <div className="form-group">
                            <label htmlFor="appName">App Name:</label>
                            <input type="text" placeholder="AWS Config" className="input-group-text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="selectDataSource">Select Data Source</label>
                            <select className="form-control primary-select-box" id="signalType">
                                <option>AWS</option>
                                <option>AZURE</option>
                                <option>GCP</option>
                                <option>Synectiks</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="selectLocationInLibrary">Select location in Library</label>
                            <div className="select-checkbox">
                                <input type="checkbox" className="checkbox" />
                                <span><img src={openFolder} alt="Open Folder" /></span>
                                <p>General</p>
                            </div>
                            <div className="select-checkbox">
                                <input type="checkbox" className="checkbox" />
                                <span><img src={openFolder} alt="Open Folder" /></span>
                                <p>Personal</p>
                            </div>
                            <div className="select-checkbox">
                                <input type="checkbox" className="checkbox" />
                                <span><img src={openFolder} alt="Open Folder" /></span>
                                <p>Cloud</p>
                            </div>
                            <div className="select-checkbox">
                                <input type="checkbox" className="checkbox" />
                                <span><img src={openFolder} alt="Open Folder" /></span>
                                <p>Networking</p>
                            </div>
                        </div>
                        <div className="form-group text-right">
                        <a className="gray-button">Cancel</a>
                        <a className="blue-button">Add to Library</a>
                    </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }

}