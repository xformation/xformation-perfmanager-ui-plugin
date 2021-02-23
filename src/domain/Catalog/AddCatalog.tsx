import * as React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { config } from '../../config';
import AlertMessage from '../../components/AlertMessage';

export class AddCatalog extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            catalogName: null,
            catalogType: null,
            catalogDescription: null,
            isApiCalled: false,
            modal: false,
            folderArray: [],
            checkedFolder: [],
            isAlertOpen: false,
            message: null,
            severity: null,
        };

        this.onChange = this.onChange.bind(this);
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
    }

    async componentWillMount() {
        this.setState({
            isApiCalled: true
        });
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    };

    closeModel = () => {
        this.setState({
            modal: !this.state.modal,
        });
    }

    onChange = (e: any) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    addDashboard = async () => {
        const { catalogName, catalogType, catalogDescription } = this.state;
        if (!catalogName) {
            this.setState({
                severity: config.SEVERITY_ERROR,
                message: "Catalog  name is mandatory. Please provide some value for catalog name",
                isAlertOpen: true,
            });
            return;
        }

        if (!catalogType || catalogType == '') {
            this.setState({
                severity: config.SEVERITY_ERROR,
                message: "Please select catalog type",
                isAlertOpen: true,
            });
        }
        console.log("Cataloge Name = " + catalogName + ", Cataloge Type = " + catalogType + ", catalog description = " + catalogDescription);

        const cd = new FormData();
        cd.append("name", catalogName);
        cd.append("type", catalogType);
        cd.append("description", catalogDescription);
        console.log("Data is adding :: ", cd);
        await fetch(config.ADD_CATALOG + "?name=" + catalogName + "&type=" + catalogType + "&description=" + catalogDescription, {
            method: 'post',
            headers: new Headers({
                "X-Requested-By": "me"
            })
        }).then(response => response.json())
            .then(response => {
                console.log('response: ', response);
                if (response != null) {
                    console.log("ok");
                    this.setState({
                        severity: config.SEVERITY_SUCCESS,
                        message: config.ADD_CATALOGUE_SUCCESS_MESSAGE,
                        isAlertOpen: true,
                    });
                } else {
                    console.log("Not ok");
                    this.setState({
                        severity: config.SEVERITY_ERROR,
                        message: config.SERVER_ERROR_MESSAGE,
                        isAlertOpen: true,
                    });
                }

            });
    }


    handleCloseAlert = (e: any) => {
        this.setState({
            isAlertOpen: false
        })
    }
    onChangeSelectBox = (e: any) => {
        this.setState({
            catalogType: e.target.value
        });
    }
    render() {
        const state = this.state;
        return (
            <Modal isOpen={state.modal} toggle={this.closeModel} className="modal-container perfmanager-modal-container">
                <AlertMessage handleCloseAlert={this.handleCloseAlert} open={state.isAlertOpen} severity={state.severity} msg={state.message}></AlertMessage>
                {/* <ModalHeader toggle={this.closeModel}>{this.state.catalogName} </ModalHeader> */}
                <ModalBody style={{ height: 'calc(75vh - 110px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="catalog-form-group">
                        <div className="form-group">
                            <label htmlFor="catalogName">Catalog Name:</label>
                            <input type="text" placeholder="" name="catalogName" id="catalogName" value={state.catalogName} onChange={this.onChange} maxLength={255} className="input-group-text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="CatalogType">Catalog Type</label>
                            <select className="form-control primary-select-box" name="catalogType" id="catalogType" value={state.catalogType} onChange={this.onChangeSelectBox}>
                                <option value="">select catalog type</option>
                                <option key="AWS" value="AWS">AWS</option>
                                <option key="AZURE" value="AZURE">AZURE</option>
                                <option key="GCP" value="GCP">GCP</option>
                                <option key="Synectiks" value="Synectiks">Synectiks</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="catalogDescription">Catalog Description:</label>
                            <textarea name="catalogDescription" className="input-group-text" id="catalogDescription" onChange={this.onChange} value={state.catalogDescription}></textarea>
                        </div>
                        <div className="form-group text-right">
                            <a className="gray-button" onClick={this.closeModel}>Cancel</a>
                            <a className="blue-button m-r-0" onClick={this.addDashboard}>Add  Dashboard</a>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}