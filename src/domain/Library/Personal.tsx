import * as React from 'react';

export class Personal extends React.Component<any,any>{
    personalData: any;
    constructor(props: any) {
        super(props);
        this.personalData = [{
            name: 'AWS Config',
            description: 'Amazon Web Services (AWS) Config provides...',
            createdBy: 'System Admin',
            lastModified: '16/06/2020 by System Admin'
        },
        {
            name: 'Amazon ECS',
            description: 'Amazon EC2 Container Service (Amazon ECS)...',
            createdBy: 'System Admin',
            lastModified: '16/06/2020 by System Admin'
        },
        {
            name: 'AWS Cloud Trail',
            description: 'monitor your AWS deployments, with predefi...',
            createdBy: 'System Admin',
            lastModified: '16/06/2020 by System Admin'
        }]
    }
    createPersonalTable = () => {
        const retData = [];
        const personals = this.personalData.length;
        for (let i = 0; i < personals; i++) {
            const personal = this.personalData[i];
            retData.push(
                <tr className="">
                    <td className="">
                        <div className="pointer-label">
                            <input type="checkbox" className="checkbox" /> 
                            {personal.name}
                        </div>
                    </td>
                    <td>{personal.description}</td>
                    <td>{personal.createdBy}</td>
                    <td>{personal.lastModified}</td>
                    <td>
                        <div className="d-flex">
                            <button className="btn btn-link">
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className="btn btn-link">
                                <i className="fa fa-trash"></i>
                            </button>
                            <button className="btn btn-link" id="PopoverFocus">
                                <i className="fa fa-ellipsis-h"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            );
        }
        return retData;
    }
    render(){
        const state = this.state;
        return (
        <div className="library-details">
            <div className="container-inner">
                <table className="alert-data-table">
                <tbody>
                    <tr className="alert-data-table-header">
                        <th>
                            <div className="pointer-label">
                                <input type="checkbox" className="checkbox" /> 
                                Name
                            </div>
                        </th>
                        <th>Description</th>
                        <th>Created By</th>
                        <th>Last Modified</th>
                        <th></th>
                    </tr>
                    {this.createPersonalTable()}
                </tbody>
                
            </table>
            </div>
        </div>
        );
    }
}