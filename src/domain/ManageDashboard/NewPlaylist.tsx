import * as React from 'react';
import { Link } from 'react-router-dom';
import tagIcon from '../../img/tag.png';

export class NewPlaylists extends React.Component<any, any>{

    render() {
        return (
            <div className="new-playlist-container">
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <div className="new-playlist-heading">New Playlist</div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <div className="float-right">
                            <Link to={`#`} className="gray-button">Cancel</Link>
                            <Link to={`#`} className="blue-button">Save</Link>
                        </div>
                    </div>
                </div>
                <div className="playlist-text">
                    <p>A playlist rotates through a pre-selected list of Dashboards. A Playlist can be a great way to build situational awareness, or just show off your metrics to your team or visitors.</p>
                </div>
                <div className="playlist-name-input">
                    <label>Name</label>
                    <input type="text" placeholder="" className="input-group-text" />
                </div>
                <div className="playlist-interval-select">
                    <label>Interval</label>
                    <select>
                        <option>5 m</option>
                        <option>10 m</option>
                        <option>15 m</option>
                        <option>20 m</option>
                    </select>
                </div>
                <div className="add-dashboards-playlist">
                    <label>Dashboards</label>
                    <div className="add-dashboard">
                        <p>Add Dashboards from below list to your playlist</p>
                </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <div className="add-dashboard-heading">
                            Add Dashboards
                    </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <div className="filter-starred float-right">
                            <div className="sort-checkbox">
                                <input type="checkbox" className="checkbox" />
                                <span>Filter by starred</span>
                            </div>
                            <div className="sort-select-menu">
                                <span><img src={tagIcon} alt="" /></span>
                                <select>
                                    <option>Filter by tag</option>
                                    <option>Filter by tag</option>
                                    <option>Filter by tag</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add-dashboard">
                    <div className="add-dashboard-inner">
                        <table className="data-table">
                            <tr>
                                <td>
                                    <input type="checkbox" className="checkbox" />
                            Amazon CloudWatch Logs
                        </td>
                                <td>
                                    <Link to={`#`} className="blue-button">
                                        <i className="fa fa-plus"></i>&nbsp;&nbsp; Add to List
                            </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" className="checkbox" />
                            Amazon RDS
                        </td>
                                <td>
                                    <Link to={`#`} className="blue-button">
                                        <i className="fa fa-plus"></i>&nbsp;&nbsp; Add to List
                            </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" className="checkbox" />
                            AWS VPN
                        </td>
                                <td>
                                    <Link to={`#`} className="blue-button">
                                        <i className="fa fa-plus"></i>&nbsp;&nbsp; Add to List
                            </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" className="checkbox" />
                            AWS VPN Dashboard
                        </td>
                                <td>
                                    <Link to={`#`} className="blue-button">
                                        <i className="fa fa-plus"></i>&nbsp;&nbsp; Add to List
                            </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" className="checkbox" />
                            Cloud Trial
                        </td>
                                <td>
                                    <Link to={`#`} className="blue-button">
                                        <i className="fa fa-plus"></i>&nbsp;&nbsp; Add to List
                            </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" className="checkbox" />
                            Cloud Watch
                        </td>
                                <td>
                                    <Link to={`#`} className="blue-button">
                                        <i className="fa fa-plus"></i>&nbsp;&nbsp; Add to List
                            </Link>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

        );
    }
}