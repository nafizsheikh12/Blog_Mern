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
         <Grid item lg={2} sm={12} xm={12}>
          <div style={{paddingLeft:"5px"}}>
            <Catagories />
          </div>
         </Grid>

         <Grid container item lg={10} xs={12} sm={12}>
             <Post />
         </Grid> 
           
       </Grid> 
        
    </>    
    )
}

export default home