import React from 'react';
import { connect } from 'react-redux';

const SongDetails = (props) => {
    console.log(props)
    if (!props.selectedSong) {
        return ('Select Song');
    }    
    return(          
            <div>
                <h2>{props.selectedSong.song.title}</h2>
                <h3>{props.selectedSong.song.duration}</h3>
            </div>
    );
}

const mapStateToProps = (state) => {
    return (state);
}

export default connect(mapStateToProps)(SongDetails);