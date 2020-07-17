import * as React from 'react';
import { Link } from 'react-router-dom';
import tagIcon from '../../img/tag.png';
import { Button } from 'reactstrap';

export class NewPlaylists extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            playListArrayData: [
                { label: 'Amazon CloudWatch Logs' },
                { label: 'Amazon RDS' },
                { label: 'AWS VPN' },
                { label: 'AWS VPN Dashboard' },
                { label: 'Cloud Trial' },
                { label: ' Cloud Watch' },
            ],
            newPlaylistArrayData: [],
        };
    }
    displayTablePlaylist() {
        const { playListArrayData } = this.state;
        let retData = [];
        for (let i = 0; i < playListArrayData.length; i++) {
            retData.push(
                <tr>
                    <td>
                        <input type="checkbox" className="checkbox" />
                        {playListArrayData[i].label}
                    </td>
                    <td>
                        <Button className="blue-button" onClick={() => this.addNewPlayList(i)}>
                            <i className="fa fa-plus"></i>&nbsp;&nbsp; Add to List
            </Button>
                    </td>
                </tr>
            )
        }
        return retData;
    }

    displayNewPlayListData() {
        const { newPlaylistArrayData } = this.state;
        let newretData = [];
        if (newPlaylistArrayData && newPlaylistArrayData.length > 0) {
            for (let i = 0; i < newPlaylistArrayData.length; i++) {
                newretData.push(
                    <tr>
                        <td>
                            <input type="checkbox" className="checkbox" />
                            {newPlaylistArrayData[i].label}
                        </td>
                        <td>
                            <div className="float-right">
                                <Button to={`#`} className="down-arrow"></Button>
                                <Button onClick={() => this.removePlylistData(i)} className="close-arrow"></Button>
                            </div>
                        </td>
                    </tr>
                )
            }
        } else {
            newretData.push(
                <p>Add Dashboards from below list to your playlist</p>
            );
        }
        return newretData;

    }

    addNewPlayList = (index: any) => {
        const { newPlaylistArrayData, playListArrayData } = this.state;
        let playlistData = newPlaylistArrayData;
        for (let i = 0; i < playListArrayData.length; i++) {
            if (i == index) {
                playlistData.push(this.state.playListArrayData[i]);
                playListArrayData.splice(index, 1);
            }
        }
        this.setState({
            playListArrayData: playListArrayData,
            newPlaylistArrayData: playlistData,
        })
    }

    removePlylistData = (index: any) => {
        const { newPlaylistArrayData, playListArrayData } = this.state;
        let listData = playListArrayData;
        for (let i = 0; i < newPlaylistArrayData.length; i++) {
            if (i == index) {
                listData.push(this.state.newPlaylistArrayData[i]);
                newPlaylistArrayData.splice(index, 1);
            }
        }
        this.setState({
            playListArrayData: listData,
            newPlaylistArrayData: newPlaylistArrayData,
        })
    }
    render() {
        return (
            <div className="new-playlist-container">
                <div className="row">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="new-playlist-heading">New Playlist</div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <div className="float-right playlist">
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
                        {/* <p>Add Dashboards from below list to your playlist</p> */}
                        <div className="add-dashboard-playlist">
                            <table className="data-table">
                                {this.displayNewPlayListData()}
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="add-dashboard-heading">
                            Add Dashboards
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12">
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
                            {this.displayTablePlaylist()}
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}