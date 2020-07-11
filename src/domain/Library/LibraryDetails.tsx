import * as React from 'react';

export class LibraryDetails extends React.Component<any,any>{
    libraryData: any;
    constructor(props: any) {
        super(props);
        this.libraryData = [{
            name: 'Personal',
            description: 'My saved search and Dashboards',
            createdBy: 'System Admin',
            lastModified: '16/06/2020 by System Admin'
        },
        {
            name: 'Personal',
            description: 'My saved search and Dashboards',
            createdBy: 'System Admin',
            lastModified: '16/06/2020 by System Admin'
        },
        {
            name: 'Personal',
            description: 'My saved search and Dashboards',
            createdBy: 'System Admin',
            lastModified: '16/06/2020 by System Admin'
        }]
    }
    createLibararyTable = () => {
        const retData = [];
        const librarys = this.libraryData.length;
        for (let i = 0; i < librarys; i++) {
            const library = this.libraryData[i];
            retData.push(
                <tr className="">
                    <td className="">
                        <div className="pointer-label">
                            <input type="checkbox" className="checkbox" /> 
                            {library.name}
                        </div>
                    </td>
                    <td>{library.description}</td>
                    <td>{library.createdBy}</td>
                    <td>{library.lastModified}</td>
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
                    {this.createLibararyTable()}
                </tbody>
                
            </table>
            </div>
        </div>
        );
    }
}