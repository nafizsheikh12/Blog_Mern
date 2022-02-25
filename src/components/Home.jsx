import React from 'react'
import Banner from './Banner'
import Catagories  from './Catagories'
import {Box,Grid} from '@material-ui/core'
import Post from './Posts'

 const home = () => {
    return (
     <>   
        <Banner/>
       <Grid container>
         <Grid item lg={2} sm={12}>
           <Catagories />
         </Grid>

         <Grid container item lg={10} xs={12} sm={10}>
             <Post />
         </Grid> 
           
       </Grid> 
        
    </>    
    )
}

export default home