import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, CardHeader} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from  '../../../actions/posts.js';


import useStyles from './styles.js';
const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.root}>
            <CardHeader 
                className={classes.headersection}
                action={
                    <IconButton aria-label="edit" onClick={() => setCurrentId(post.id)}>
                        <MoreVertIcon />
                    </IconButton>
                }
                title={post.name}
                subheader={moment(post.createdon).fromNow()}
            />
            <CardMedia 
                className={classes.media}
                image={post.url}
                title={`By ${post.name}`}
            />
            <CardContent>
                <Typography variant="h6" color="textSecondary" component="p">
                    {`# ${post.caption}`}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post.id))}>
                    <ThumbUpAltIcon fontSize="small" />
                    {post.likecount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post.id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;