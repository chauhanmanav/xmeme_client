import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import xmeme from './images/xmeme.png';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyles from './styles.js';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[currentId, dispatch]);
    return(
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="fixed" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Meme Stream</Typography>
                <img className={classes.image} src={} alt="xmeme" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid className={classes.postsection} item xs={12} sm={7}>
                            <Posts setCurrentId = {setCurrentId} />
                        </Grid>
                        <Grid className={classes.formsection} item xs={12} sm={4}>
                            <Form currentId = {currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
