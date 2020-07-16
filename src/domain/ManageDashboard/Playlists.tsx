import * as React from 'react';
import { Link } from 'react-router-dom';

export class Playlists extends React.Component<any,any>{
    
    render(){
        return (
            <div className="playlists-container">
                <div className="playlist-inner">
                    <div className="playlist-heading">There are no playlist created yet</div>
                    <div className="playlist-btn">
                        <Link to={`#`} className="blue-button">Create new Playlist</Link>
                    </div>
                    <div className="playlist-text">
                        <p>Tip: You can use playlists to cycle dashboards on TVs without user control Learn more</p>
                    </div>
                </div>
            </div>
        );
    }
}