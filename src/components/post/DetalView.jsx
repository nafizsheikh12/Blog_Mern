import {useState,useEffect} from 'react'
import {Box, makeStyles, Typography} from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'
import {Edit,Delete} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import { getPost} from '../../service/api'
import { deletePost } from '../../service/api'
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
    icons: {
        float: 'right'
    },
    icon: {
        margin: 5,
        border: '1px solid #878787',
        padding: 5,
        borderRadius:10
    },
    heading: {
        fontSize: 29,
        fontWeight:600,
        textAlign: 'center',
        margin: '50px 0 10px 0'
    },
    subheading: {
        color: '#878787',
        display: 'flex',
        marginBottom: 7,

    }
})

 const DetalView = ({match}) => {
     const classes = useStyle();
     const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
      const [post,setpost] = useState([]);
      const history = useHistory()
      useEffect(() => {
          const fetchData = async () => {
            let data =  await getPost(match.params.id);
             console.log(data);
             setpost(data)
          }

          fetchData()
      },[])


      const deleteBlog = async () => {
          await deletePost(post._id);
          history.push('/')
      }
    return (
        <Box className={classes.container}>
            <img src={post.picture || url} className={classes.image}/>
            <Box className={classes.icons}>
                <Link to={`/update/${post._id}`}> <Edit classname={classes.icon} color="primary"/> </Link>
                <Delete classname={classes.icon} onClick={() => { deleteBlog() }} color="error"/>
            </Box>
            <Typography className={classes.heading}>{post.title}</Typography>

            <Box className={classes.subheading}>
              <Link to={`/?username=${post.username}`}>
               <Typography>Author: {post.username}</Typography> </Link>
               <Typography style={{marginLeft: 'auto'}}>{new Date(post.createDate).toDateString( )}</Typography>
            </Box>

            <Typography>{post.description}</Typography>
        </Box>
    )
}

export default DetalView
