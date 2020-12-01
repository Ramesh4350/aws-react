import React from "react";
import ReactPlayer from 'react-player';
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Feed from "../feed";
import {Video} from '../../data';

const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItem: 'center'

    }
}));

const VideoCard = () => {

    const classes = useStyle();
    return (
        <Grid container className={classes.root}>
            <Grid sm={7}>
                <ReactPlayer
                    url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                    className='react-player'
                    playing
                    width='100%'
                    height='420px'
                    controls={true}
                    playsinline={true}
                />
            </Grid>
            <Grid container item sm={3}>
                {Video.categories.map(e => e.videos.map(e => <Grid item><Feed title={e.title}
                                                                              image={e.thumb}/></Grid>))}
            </Grid>
        </Grid>
    );
}
export default VideoCard;