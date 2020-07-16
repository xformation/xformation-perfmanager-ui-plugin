import * as React from 'react';
import { Link } from 'react-router-dom';

export class Playlists extends React.Component<any,any>{
    
    render(){
        return (
            <div className="playlists-container">
                <div className="">
                    <div className="">There are no playlist created yet</div>
                    <div className="">
                        <Link to={`#`} className="blue-button">
                            Manage Dashboards
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}