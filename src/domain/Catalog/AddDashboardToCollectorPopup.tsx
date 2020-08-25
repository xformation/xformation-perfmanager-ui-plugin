import * as React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { config } from '../../config';
import AlertMessage from '../../components/AlertMessage';

export class AddDashboardToCollectorPopup extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            dashboardName:null,
            dashboardJson:null,
            dashboardDoc:null,
            catalogId: null,
            jsonFile:null,
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

    toggle = (selectedCatalogName: any, selectedCatalogId: any) => {
        this.setState({
            modal: !this.state.modal,
            catalogName: selectedCatalogName,
            catalogId: selectedCatalogId,
        });
    };

    closeModel = () => {
        this.setState({
            catalogName: '',
            catalogId: null,
            modal: !this.state.modal,
        });
    }

    onChange = (e: any) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }
    onSelectFile = async (e:any) =>{
        e.preventDefault();
        const fileReder = new FileReader();
        fileReder.onload = async (e: any) => {
            const text = e.target.result
            this.setState({ 
                jsonFile: text 
            });
        };
        fileReder.readAsText(e.target.files[0]);
    }
    addDashboard= async ()=>{
            const { catalogId,dashboardName,dashboardJson,dashboardDoc,jsonFile}=this.state;
            if (!dashboardName) {
                this.setState({
                    severity: config.SEVERITY_ERROR,
                    message: "Dashboard  name is mandatory. Please provide some value for dashborad name",
                    isAlertOpen: true,
                });
                return;
            }
            if(!jsonFile){
                if (!dashboardJson) {
                    this.setState({
                        severity: config.SEVERITY_ERROR,
                        message: "Dashboard  Json is mandatory.",
                        isAlertOpen: true,
                    });
                    return;
                }
            }
                if((dashboardJson!=null && !(dashboardJson==''))  && jsonFile!=null){
                    this.setState({
                        severity: config.SEVERITY_ERROR,
                        message: "Please select one option to upload dashboard json. Either file upload or text Input",
                        isAlertOpen: true,
                    });
                    return;
                }
                if(dashboardJson!=null && !(dashboardJson=='')){
                    try {
                        JSON.parse(dashboardJson);
                    } catch (e) {
                        this.setState({
                            severity: config.SEVERITY_ERROR,
                            message: "Your Json is invalid.Please check your json format",
                            isAlertOpen: true,
                        });
                        return;
                    }
                } 
                if(jsonFile!=null){
                    try {
                        JSON.parse(jsonFile);
                    } catch (e) {
                        this.setState({
                            severity: config.SEVERITY_ERROR,
                            message: "Your Json is invalid.Please check your json format",
                            isAlertOpen: true,
                        });
                        return;
                    }
                }
            console.log("Catalog ID = "+catalogId+", dashboard name = "+dashboardName+", dashboard json = "+dashboardJson+", dashboard doc = "+dashboardDoc);
            
            const cd = new FormData();
            cd.append("collectorId", catalogId);
            cd.append("dashboardName", dashboardName);
            if(jsonFile!=null){
                cd.append("dashboardJson", jsonFile);
            }else{
                cd.append("dashboardJson", dashboardJson);
            }
            cd.append("dashboardDoc", dashboardDoc);
            await fetch(config.ADD_DASHBOARD_TO_COLLECTOR, {
                method: 'post',
                body: cd,
            }).then(response => response.json())
            .then(response => {
                console.log('response: ', response);
                if (response!=null) {
                    console.log("ok");
                    this.setState({
                        severity: config.SEVERITY_SUCCESS,
                        message: config.ADD_DASHBOARD_TO_COLLECTOR_SUCCESS_MESSAGE,
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

    render() {
        const state = this.state;
        return (
            <Modal isOpen={state.modal} toggle={this.closeModel} className="" modalClassName="catalog-modal-container">
                <AlertMessage handleCloseAlert={this.handleCloseAlert} open={state.isAlertOpen} severity={state.severity} msg={state.message}></AlertMessage>
                <ModalHeader toggle={this.closeModel}>{this.state.catalogName} </ModalHeader>
                <ModalBody style={{ height: 'calc(75vh - 110px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="catalog-form-group">
                        <div className="form-group">
                            <label htmlFor="dashboardName">Dashboard Name:</label>
                            <input type="text" placeholder="" name="dashboardName" id="dashboardName" value={state.dashboardName} onChange={this.onChange} maxLength={255} className="input-group-text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dashboardJson">Dashboard Json:</label>
                            <textarea name="dashboardJson" className="input-group-text" id="dashboardJson"  onChange={this.onChange} value={state.dashboardJson}></textarea>
                        </div>
                        <div className="form-group">
                            <label style={{float:"left"}} htmlFor="jsonFile">Upload Json File:</label>
                            <input type="file" name="jsonFile"   onChange={this.onSelectFile} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dashboardDoc">Dashboard Doc:</label>
                            <input type="text" placeholder="" name="dashboardDoc" id="dashboardDoc" value={state.dashboardDoc} onChange={this.onChange} maxLength={255} className="input-group-text" />
                        </div>
                        <div className="form-group text-right">
                            <a className="gray-button" onClick={this.closeModel}>Cancel</a>
                            <a className="blue-button" onClick={this.addDashboard}>Add  Dashboard</a>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}