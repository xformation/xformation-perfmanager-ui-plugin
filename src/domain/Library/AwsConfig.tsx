import * as React from 'react';

export class AwsConfig extends React.Component<any,any>{
    awsConfigData: any;
    constructor(props: any) {
        super(props);
        this.awsConfigData = [{
            name: 'AWS Config Overview - Interactive',
            description: 'AWS Config Overview - Interactive',
            createdBy: 'System Admin',
            lastModified: '16/06/2020 by System Admin'
        },
        {
            name: 'AWS Config Overview - Live',
            description: 'AWS Config Overview - Live',
            createdBy: 'System Admin',
            lastModified: '16/06/2020 by System Admin'
        },
        {
            name: 'Resource Modification Details - Interactive',
            description: 'Resource Modification Details - Interactive',
            createdBy: 'System Admin',
            lastModified: '16/06/2020 by System Admin'
        },
        {
            name: 'Configuration Trend',
            description: 'Configuration Trend',
            createdBy: 'System Admin',
            lastModified: '16/06/2020 by System Admin'
        },
        {
            name: 'Latest Resource Modifications',
            description: 'Latest Resource Modifications',
            createdBy: 'System Admin',
            lastModified: '16/06/2020 by System Admin'
        },
        {
            name: 'Most Frequently Modified Resource Types',
            description: 'Most Frequently Modified Resource Types',
            createdBy: 'System Admin',
            lastModified: '16/06/2020 by System Admin'
        },
        {
            name: 'Relationships',
            description: 'Relationships',
            createdBy: 'System Admin',
            lastModified: '16/06/2020 by System Admin'
        },
        {
            name: 'ResourceNames Lookup Table Generator',
            description: 'ResourceNames Lookup Table Generator',
            createdBy: 'System Admin',
            lastModified: '16/06/2020 by System Admin'
        }]
    }
    createAwsConfigTable = () => {
        const retData = [];
        const awsConfigs = this.awsConfigData.length;
        for (let i = 0; i < awsConfigs; i++) {
            const awsConfig = this.awsConfigData[i];
            retData.push(
                <tr className="">
                    <td className="">
                        <div className="pointer-label">
                            <input type="checkbox" className="checkbox" /> 
                            {awsConfig.name}
                        </div>
                    </td>
                    <td>{awsConfig.description}</td>
                    <td>{awsConfig.createdBy}</td>
                    <td>{awsConfig.lastModified}</td>
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
                    {this.createAwsConfigTable()}
                </tbody>
                
            </table>
            </div>
        </div>
        );
    }
}