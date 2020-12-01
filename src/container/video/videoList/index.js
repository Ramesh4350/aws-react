import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Feed from "../../../component/feed";
import {Video} from '../../../data';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

const FeedList = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify='center' spacing={2} GridSize={10}>
                    {Video.categories.map((e) => (e.videos.map(e => <Grid item>
                        <Feed title={e.title} description={e.description} image={e.thumb}/>
                    </Grid>)))}
                </Grid>
            </Grid>
        </Grid>
    );
}
export default FeedList;
