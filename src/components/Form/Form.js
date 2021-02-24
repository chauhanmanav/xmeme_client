import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles.js';
import { createPost, updatePost } from '../../actions/posts.js';



const Form = ({ currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({
        caption: '', name: '',url: ''
    });
    const posts = useSelector((state) => currentId ? state.posts.find((p)=>p.id===currentId) : null);
    const classes = useStyles();
    const dispatch =useDispatch();

    function post_exists(props){
        
    }
    
    function new_post(props){
        <TextField name="name" variant="outlined" label="Name_of_creator" fullWidth value = {postData.name} onChange={(e)=>setPostData({ ...postData, name: e.target.value })} />
    }
    
    function choose_type(props){
        if(props.currentId){
            return <post_exists />;
        }
        else{
            return <new_post />;
        }
    }

    useEffect(()=>{
        if(posts) 
        {setPostData(posts);}
    }, [posts]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId, postData));
        }
        else{
            dispatch(createPost(postData));
        }
        clear();
    }
    const clear = () => {
        setCurrentId(null);
        setPostData({ caption: '', name: '', url: ''})

    }
    const rendercondition = () => {
        if(currentId){
            return <TextField name="name" variant="outlined" label={postData.name} fullWidth value = {postData.name} disabled/>;
        }
        else{
            return <TextField name="name" variant="outlined" label="Name_of_creator" fullWidth value = {postData.name} onChange={(e)=>setPostData({ ...postData, name: e.target.value })} />;
        }
    }
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Updating' : 'Creating'} Memes</Typography>
                <TextField name="caption" variant="outlined" label="Caption" fullWidth value = {postData.caption} onChange={(e)=>setPostData({ ...postData, caption: e.target.value })} />
                {rendercondition()}
                <TextField name="url" variant="outlined" label="image_url" fullWidth value = {postData.url} onChange={(e)=>setPostData({ ...postData, url: e.target.value })} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>    
    );
}

export default Form;