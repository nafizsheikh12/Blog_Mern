import React from 'react'
import {Box,makeStyles,FormControl, InputBase,Button, TextareaAutosize} from '@material-ui/core'
import { AddCircle, Update } from '@material-ui/icons'
import {useState,useEffect} from 'react'
import { getPost} from '../../service/api'
import { updatePost } from '../../service/api'
import {useHistory} from 'react-router-dom'

const useStyle = makeStyles({
    container: {
        padding: '0 100px'
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    textField: {
        flex:1,
        margin: '0 30px',
        fontSize: 25

    },
    textarea: {
        width: '100%',
        marginTop: 50,
        border: 'none',
        fontSize: 18,
    }

})

const intialValues = {
    title: '',
    description: '',
    picture: '',
    username: 'nafiz shiekh',
    categories: 'All',
    createDate: new Date()

}

 const UpdateView = ({match}) => {
     const classes = useStyle(); 
     const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
     const history = useHistory()

     const [post, setpost] = useState(intialValues)

     useEffect(() => {
        const fetchData = async () => {
          let data =  await getPost(match.params.id);
           console.log(data);
           setpost(data)
        }

        fetchData()
    },[])

    const handlechange = (e) => {
        setpost({...post,[e.target.name]:e.target.value })
    }

    const updateB = async () => {
        await updatePost(match.params.id,post)
        history.push('/')
    } 
   
     return (
        <Box className={classes.container}>
            <img src={url} className={classes.image}/>

            <FormControl className={classes.form}>
                <AddCircle fontSize='large' color='action'/>
                <InputBase onChange={(e) => { handlechange(e) }}  name="title" placeholder='Title' value={post.title} className={classes.textField}/>
                <Button variant='contained' color="primary" onClick={() => { updateB() }}>Update</Button>
            </FormControl>

            <TextareaAutosize
                rowMin={5}
                placeholder="Tell your story..."
                className={classes.textarea}
                value={post.description}
                onChange={(e) => { handlechange(e) }}
                name="description"
            />
        </Box>
    )
}

export default UpdateView;