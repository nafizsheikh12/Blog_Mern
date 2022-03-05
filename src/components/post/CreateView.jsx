import React,{useState,useEffect} from 'react'
import {Box,makeStyles,FormControl, InputBase,Button, TextareaAutosize} from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'
import {useHistory} from 'react-router-dom'
import {createPost,uploadFile} from '../../service/api'

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

 const CreateView = () => {
     const classes = useStyle();
	 const [post,setpost] = useState(intialValues)
     const url =  'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'||post.picture
     const history = useHistory()

     
    const [file, setfile] = useState('')
     const handlechange = (e) => {
         setpost({...post,[e.target.name]:e.target.value })
     }

   
    const getImage = async (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];

 
        reader.readAsDataURL(file);
        reader.onloadend =async  function () {
            setfile(reader.result)
           setpost({...post,picture:file})
         
        }
     }
     

     const savePost = async () => {
         await createPost(post,file)
          await  uploadFile(file)
         history.push('/');
     }
     return (
        <Box className={classes.container}>
            <img src={file} className={classes.image}/>

            <FormControl className={classes.form}>
              <label htmlFor='fileInput'>
                <AddCircle fontSize='large' color='action'/>
             </label>
                <input
                    type="file"
                    id='fileInput'
                    style={{display:'none'}}
                    onChange={getImage}
                />
                <InputBase name='title' onChange={(e) => { handlechange(e) }} placeholder='Title' className={classes.textField}/>
            
                <Button variant='contained' color="primary" onClick={ () => savePost()}>Publish</Button>
            </FormControl>

            <TextareaAutosize
                rowMin={5}
                placeholder="Tell your story..."
                className={classes.textarea}
                onChange={(e) => { handlechange(e) }}
                name='description'
            />
        </Box>
    )
}

export default CreateView;