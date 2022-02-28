import React from 'react'
import {Box,Typography,makeStyles} from '@material-ui/core'

const useStyles= makeStyles({
  container: {
      height: 350,
      margin: 20,
      borderRadius:10,
      border: '1px solid #d3cede',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
  },
  image: {height:150,
          width:'100%'
      },

  title:{
    marginTop: '3px',
    fontFamily: 'sans-serif',
    fontWeight: '500px',
    textAlign: 'center',
    fontSize:"20px",
    marginButtom: "18px"
  },
  desc:{
      fontSize:"15px",
      marginTop:"8px",
      fontFamily:"cursive",
      textAlign:"center"
  },
  username:{
      marginRight:'auto',
      marginTop:"6rem",
      paddingLeft:"5px"
  },
  cate:{
      marginLeft:"auto",
      marginTop:"-21px",
      marginRight:"27px"
  }  
})


 const Post = ({post}) => {
     const url = post.picture || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';

     const classes = useStyles();

    return (
        <Box className={classes.container}>
             <img src={url} className={classes.image}/>
             <Typography className={classes.title}>{post.title}</Typography>
             <Typography className={classes.desc}>{post.description}</Typography>
             
            
        </Box>
    )
}

export default Post
